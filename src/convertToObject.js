'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newObj = {};

  const newArr = sourceString.split(';');

  const newNewArr = newArr.map((el) => el.split(':'));

  const trimmedArr = newNewArr.map((pair) => pair.map((el) => el.trim()));

  for (let i = 0; i < trimmedArr.length; i++) {
    const pair = trimmedArr[i];

    if (pair.length === 2 && pair[0]) {
      newObj[pair[0]] = pair[1];
    }
  }

  return newObj;
}

module.exports = convertToObject;
