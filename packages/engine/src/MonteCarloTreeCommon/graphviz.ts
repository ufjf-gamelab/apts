// import {
//   Digraph as DigraphFromGraphviz,
//   Edge as EdgeFromGraphviz,
//   GraphAttributesObject as GraphAttributesObjectFromGraphviz,
//   Node as NodeFromGraphviz,
//   attribute as attributeFromGraphviz,
//   toDot as toDotFromGraphviz,
// } from "ts-graphviz";
// import Game from "../Game/Game.js";
// import Move from "../Game/Move.js";
// import Player from "../Game/Player.js";
// import State from "../Game/State.js";
// import { INCREMENT_ONE, Integer } from "../types.js";
// import { Node } from "./Node.js";

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

// interface NodeTuple<
//   P extends Player<G, S, M, Sl, P>,
//   M extends Move<G, S, M, Sl, P>,
//   S extends State<G, S, M, Sl, P>,
//   G extends Game<G, S, M, Sl, P>,
// > {
//   node: Node<G, S, M, Sl, P>;
//   parentNodeFromGraphviz: NodeFromGraphviz;
// }

// const insertGraphvizNodeIntoGraph = <
//   P extends Player<G, S, M, Sl, P>,
//   M extends Move<G, S, M, Sl, P>,
//   S extends State<G, S, M, Sl, P>,
//   G extends Game<G, S, M, Sl, P>,
// >({
//   graphFromGraphviz,
//   currentNode,
//   nodeTuples,
//   currentNodeId,
// }: {
//   graphFromGraphviz: DigraphFromGraphviz;
//   nodeTuples: NodeTuple<G, S, M, Sl, P>[];
//   currentNodeId: Integer;
//   currentNode: Node<G, S, M, Sl, P>;
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
//   P extends Player<G, S, M, Sl, P>,
//   M extends Move<G, S, M, Sl, P>,
//   S extends State<G, S, M, Sl, P>,
//   G extends Game<G, S, M, Sl, P>,
// >({
//   game,
//   graphFromGraphviz,
//   parent,
//   child,
//   keyOfTheTakenMove,
// }: {
//   game: G;
//   graphFromGraphviz: DigraphFromGraphviz;
//   parent: NodeFromGraphviz;
//   child: NodeFromGraphviz;
//   keyOfTheTakenMove: number;
// }): void => {
//   const takenMove = game.getMove(keyOfTheTakenMove);

//   const edgeFromGraphviz = new EdgeFromGraphviz([parent, child], {
//     [attributeFromGraphviz.label]: `${keyOfTheTakenMove}: ${takenMove.getTitle()}\n${takenMove.getDescription()}`,
//     fontname: "Monospace",
//   });

//   graphFromGraphviz.addEdge(edgeFromGraphviz);
// };

// export const generateGraphvizDotStringFromTree = <
//   P extends Player<G, S, M, Sl, P>,
//   M extends Move<G, S, M, Sl, P>,
//   S extends State<G, S, M, Sl, P>,
//   G extends Game<G, S, M, Sl, P>,
// >(
//   game: G,
//   root: Node<G, S, M, Sl, P>,
// ): string => {
//   const graphFromGraphviz = new DigraphFromGraphviz("G", GRAPH_ATTRIBUTES);
//   const nodeTuples: NodeTuple<G, S, M, Sl, P>[] = [];

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
