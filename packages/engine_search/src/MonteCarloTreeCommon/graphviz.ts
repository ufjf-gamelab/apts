// import type {
//   attribute as attributeFromGraphviz,
//   Digraph as DigraphFromGraphviz,
//   Edge as EdgeFromGraphviz,
//   GraphAttributesObject as GraphAttributesObjectFromGraphviz,
//   Node as NodeFromGraphviz,
//   toDot as toDotFromGraphviz,
// } from "ts-graphviz";

// import type Game from "../Game/Game.js";
// import type Move from "../Game/Move.js";
// import type Player from "../Game/Player.js";
// import type Slot from "../Game/Slot.js";
// import type State from "../Game/State.js";
// import type { Integer } from "../types.js";
// import type { TreeNode } from "./TreeNode.js";

// const FIRST_CHILD_ID = 1;
// const ROOT_ID = 0;

// const GRAPH_ATTRIBUTES: GraphAttributesObjectFromGraphviz = {
//   fontname: "Monospace",
//   fontsize: 30,
//   labelloc: "t",
//   nodesep: 0.5,
//   rankdir: "TB",
//   ranksep: 3,
//   splines: "true",
// };

// interface TreeNodeTuple<
//   G extends Game<G, S, M, Sl, P>,
//   S extends State<G, S, M, Sl, P>,
//   M extends Move<G, S, M, Sl, P>,
//   Sl extends Slot<G, S, M, Sl, P>,
//   P extends Player<G, S, M, Sl, P>,
// > {
//   node: TreeNode<G, S, M, Sl, P>;
//   parentNodeFromGraphviz: NodeFromGraphviz;
// }

// const insertGraphvizNodeIntoGraph = <
//   G extends Game<G, S, M, Sl, P>,
//   S extends State<G, S, M, Sl, P>,
//   M extends Move<G, S, M, Sl, P>,
//   Sl extends Slot<G, S, M, Sl, P>,
//   P extends Player<G, S, M, Sl, P>,
// >({
//   currentNode,
//   currentNodeId,
//   graphFromGraphviz,
//   nodeTuples,
// }: {
//   currentNode: TreeNode<G, S, M, Sl, P>;
//   currentNodeId: Integer;
//   graphFromGraphviz: DigraphFromGraphviz;
//   nodeTuples: TreeNodeTuple<G, S, M, Sl, P>[];
// }): NodeFromGraphviz => {
//   const currentNodeFromGraphviz = currentNode.toGraphvizNode(currentNodeId);
//   graphFromGraphviz.addNode(currentNodeFromGraphviz);

//   currentNode.getChildren().forEach(child => {
//     nodeTuples.push({
//       node: child,
//       parentNodeFromGraphviz: currentNodeFromGraphviz,
//     });
//   });

//   return currentNodeFromGraphviz;
// };

// const insertedgeIntoGraph = <
//   G extends Game<G, S, M, Sl, P>,
//   S extends State<G, S, M, Sl, P>,
//   M extends Move<G, S, M, Sl, P>,
//   Sl extends Slot<G, S, M, Sl, P>,
//   P extends Player<G, S, M, Sl, P>,
// >({
//   child,
//   game,
//   graphFromGraphviz,
//   keyOfTheTakenMove,
//   parent,
// }: {
//   child: NodeFromGraphviz;
//   game: G;
//   graphFromGraphviz: DigraphFromGraphviz;
//   keyOfTheTakenMove: number;
//   parent: NodeFromGraphviz;
// }): void => {
//   const takenMove = game.getMove(keyOfTheTakenMove);

//   const edgeFromGraphviz = new EdgeFromGraphviz([parent, child], {
//     [attributeFromGraphviz.label]: `${keyOfTheTakenMove}: ${takenMove.getTitle()}\n${takenMove.getDescription()}`,
//     fontname: "Monospace",
//   });

//   graphFromGraphviz.addEdge(edgeFromGraphviz);
// };

// export const generateGraphvizDotStringFromTree = <
//   G extends Game<G, S, M, Sl, P>,
//   S extends State<G, S, M, Sl, P>,
//   M extends Move<G, S, M, Sl, P>,
//   Sl extends Slot<G, S, M, Sl, P>,
//   P extends Player<G, S, M, Sl, P>,
// >(
//   game: G,
//   root: Node<G, S, M, Sl, P>,
// ): string => {
//   const graphFromGraphviz = new DigraphFromGraphviz("G", GRAPH_ATTRIBUTES);
//   const nodeTuples: TreeNodeTuple<G, S, M, Sl, P>[] = [];

//   const rootNodeFromGraphviz = root.toGraphvizNode(ROOT_ID);
//   graphFromGraphviz.addNode(rootNodeFromGraphviz);

//   root.getChildren().forEach(child => {
//     nodeTuples.push({
//       node: child,
//       parentNodeFromGraphviz: rootNodeFromGraphviz,
//     });
//   });

//   // Include every node in the tree in the graph.
//   for (
//     let currentNodeId = FIRST_CHILD_ID;
//     currentNodeId < nodeTuples.length;
//     currentNodeId += INCREMENT_ONE
//   ) {
//     const nodeTuple = nodeTuples[currentNodeId];
//     if (typeof nodeTuple === "undefined") {
//       break;
//     }
//     const { node: currentNode, parentNodeFromGraphviz } = nodeTuple;

//     const currentNodeFromGraphviz = insertGraphvizNodeIntoGraph({
//       currentNode,
//       currentNodeId,
//       graphFromGraphviz,
//       nodeTuples,
//     });

//     const keyOfTheTakenMove = currentNode.getKeyOfTheTakenMove();
//     if (keyOfTheTakenMove === null) {
//       continue;
//     }

//     insertedgeIntoGraph({
//       child: currentNodeFromGraphviz,
//       game,
//       graphFromGraphviz,
//       keyOfTheTakenMove,
//       parent: parentNodeFromGraphviz,
//     });
//   }

//   return toDotFromGraphviz(graphFromGraphviz);
// };
