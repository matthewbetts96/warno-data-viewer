const fs = window.require("fs");

export const runParser = () => {
  const data = {
    ammo: {},
  };
};

export const parser = ({ filePath }) => {};

///Utils
const genericClean = (i) => {
  return i.replace(/[ =']*/g, "");
};

const removeAllExceptBool = (i) => {
  //naive approach, regex didn't want to play ball
  if (i.toLowerCase().includes("true")) {
    return true;
  }

  if (i.toLowerCase().includes("false")) {
    return false;
  }

  return undefined;
};

const removeAllBarNumbers = (i) => {
  if (i === undefined) {
    return undefined;
  }
  return i.replace(/[^0-9.]*/g, "");
};

const weaponManagerFormatter = (i) => {
  return i.split("/")[3];
};
