function findAverage(array) {
  let summ = 0;
  for (let i = 0; i < array.length; i ++){
    summ += array[i];
  }
  if (summ===0) {
    return 0;
  }
  return summ/array.length;
}