// const removeFromArray = function(arr, arg) {
//   const cleanArray = arr.filter(function (letter) {
//     return letter !== arg;
//   })
//   return cleanArray;
// };

const removeFromArray = function(arr, ...arg) {
  // utilized rest operator
  const filteredArray = arr.filter((item) => {
    return !arg.includes(item);
  })
  return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
