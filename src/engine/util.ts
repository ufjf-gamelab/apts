import { Format, toFile } from "ts-graphviz/adapter";

// const firstPosition = 0,
//   secondPosition = 1;
// export const capitalizedFirstLetter = (str: string) =>
//   str.charAt(firstPosition).toUpperCase() + str.slice(secondPosition);

// const indexAfterTwoDigits = 2;
// const paddedWithTwoDigits = (num: number) =>
//   num.toString().padStart(indexAfterTwoDigits, "0");

// const monthsAreIndexedFromOne = 1;
// export const formattedDate = (date: Date) => {
//   const year = paddedWithTwoDigits(date.getFullYear());
//   const month = paddedWithTwoDigits(date.getMonth() + monthsAreIndexedFromOne);
//   const day = paddedWithTwoDigits(date.getDate());
//   const hour = paddedWithTwoDigits(date.getHours());
//   const minutes = paddedWithTwoDigits(date.getMinutes());
//   const seconds = paddedWithTwoDigits(date.getSeconds());
//   return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
// };

// export const fullModelPath = (gameName: GameName, innerPath: string) =>
//   `/${gameName}/${innerPath}`;

// export const getRandomValidAction = (state: State): Action | null => {
//   const encodedValidActions = state.getValidActions();
//   const validActions = [];
//   for (
//     let index = 0;
//     index < encodedValidActions.length;
//     index += INCREMENT_ONE
//   ) {
//     if (encodedValidActions[index]) validActions.push(index);
//   }
//   const randomIndex = Math.floor(Math.random() * validActions.length);
//   return validActions[randomIndex] ?? null;
// };

export const exportToFile = async (
  dotString: string,
  imageName: string,
  format: Format,
): Promise<void> => {
  await toFile(dotString, `./${imageName}.${format}`, { format });
};
