const firstCharIndex = 0,
  secondCharIndex = 1;
const capitalizeFirstLetter = (str: string) =>
  str.charAt(firstCharIndex).toUpperCase() + str.slice(secondCharIndex);

const padLength = 2;
const padTwoDigits = (num: number) => num.toString().padStart(padLength, "0");

const getFormattedDate = (date: Date) => {
  const dayOffset = 1;
  const day = padTwoDigits(date.getDate()),
    hour = padTwoDigits(date.getHours()),
    minutes = padTwoDigits(date.getMinutes()),
    month = padTwoDigits(date.getMonth() + dayOffset),
    seconds = padTwoDigits(date.getSeconds()),
    year = padTwoDigits(date.getFullYear());
  return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
};

export { capitalizeFirstLetter, getFormattedDate };
