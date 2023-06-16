function betterThanAverage(classPoints, yourPoints) {
    classPoints.push(yourPoints);
    let average = classPoints => classPoints.reduce((a, b) => a + b) / array.length;
    if (average > yourPoints) {
      return false;
    }
    return true;
  }

  
  console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9))