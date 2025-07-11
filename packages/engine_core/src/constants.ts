const EMPTY_LIST = 0;

const NOT_INCREMENT = 0;
const INCREMENT_ONE = 1;

const descriptionOfTestsOfCloneMethod = ({
  className,
}: {
  className?: string;
}) =>
  `The clone() method should return a new object instance ${
    className ? `of class ${className} ` : ""
  }with attributes that are strictly equal to the original object's attributes. The cloned object must be a distinct instance from the original.`;

export {
  descriptionOfTestsOfCloneMethod,
  EMPTY_LIST,
  INCREMENT_ONE,
  NOT_INCREMENT,
};
