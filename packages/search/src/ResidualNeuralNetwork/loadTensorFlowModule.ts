import type * as tfjs from "@tensorflow/tfjs";

type TensorFlowModule = typeof tfjs;

const TFJS_NODE_SPECIFIER = "@tensorflow/tfjs-node";

const isTensorFlowModule = (value: unknown): value is TensorFlowModule => {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const candidate = value as {
    getBackend?: unknown;
    ready?: unknown;
    setBackend?: unknown;
  };
  return (
    typeof candidate.getBackend === "function" &&
    typeof candidate.setBackend === "function" &&
    typeof candidate.ready === "function"
  );
};

const loadTensorFlowModule = async (): Promise<TensorFlowModule> => {
  const runningInNode =
    typeof process !== "undefined" && process.release.name === "node";

  if (runningInNode) {
    try {
      const candidate: unknown = await import(TFJS_NODE_SPECIFIER);
      if (isTensorFlowModule(candidate)) {
        if (candidate.getBackend() !== "tensorflow") {
          await candidate.setBackend("tensorflow");
        }
        await candidate.ready();
        return candidate;
      }
    } catch {
      // Native backend not available; fall back to pure JS
    }
  }

  const tfjsModule = (await import("@tensorflow/tfjs")) as TensorFlowModule;
  await tfjsModule.ready();
  return tfjsModule;
};

export type { TensorFlowModule };
export { loadTensorFlowModule };
