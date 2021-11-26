export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (const x of array) {
    newArr.push(appendString + x);
  }

  return newArr;
}
