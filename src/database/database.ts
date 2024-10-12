/* eslint-disable no-console */
import localForage from "localforage";

import { Game } from "../model/game";

// Configure LocalForage
localForage.config({
  // Description for the database
  description: "Local storage for APTS",
  // Preferred storage drivers in order
  driver: [localForage.INDEXEDDB, localForage.LOCALSTORAGE],
  // Name of the database
  name: "apts_database",
  // Database version
  version: 1.0,
  // Size: 5 * Math.pow(1024, 2), // Size of the database in bytes (5 MB in this example)
});

// This code runs once localForage has fully initialized the selected driver.
localForage
  .ready()
  .then(() => {
    console.log(localForage.driver());
  })
  .catch((error: unknown) => {
    console.log(error);
  });

// Stores
export const GameStore = localForage.createInstance({
  name: "apts_database",
  storeName: "GameStore",
});

const ticTacToe: Game = new Game({
  authors: ["Unknown"],
  id: "1",
  information: "A simple game",
  title: "Tic-tac-toe",
});
const connectFour: Game = new Game({
  authors: ["Unknown"],
  id: "2",
  information: "Another simple game",
  title: "Connect Four",
});
const chess: Game = new Game({
  authors: ["Unknown"],
  id: "3",
  information: "A complex game",
  title: "Chess",
});

// Store data
try {
  await GameStore.setItem(ticTacToe.getId(), ticTacToe.serialize());
} catch (error) {
  console.error("Error storing data:", error);
}

try {
  await GameStore.setItem(connectFour.getId(), connectFour.serialize());
} catch (error) {
  console.error("Error storing data:", error);
}

try {
  await GameStore.setItem(chess.getId(), chess.serialize());
} catch (error) {
  console.error("Error storing data:", error);
}

// // Retrieve data
// LocalForage
//   .getItem("userConfig")
//   .then((data) => {
//     Console.log("Retrieved data:", data);
//   })
//   .catch((error) => {
//     Console.error("Error retrieving data:", error);
//   });
