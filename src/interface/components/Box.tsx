import { type VariantProps, cva } from "class-variance-authority";
import type { PropsWithChildren } from "react";

interface BoxProps extends VariantProps<typeof boxStyle>, PropsWithChildren {}

const Box = ({ children }: BoxProps) => {
    return (
        <div className="shadow-outer-8 flex flex-grow flex-col rounded-30 border border-dark bg-light">
            {children}
        </div>
    );
};

const boxStyle = cva();

export default Box;
