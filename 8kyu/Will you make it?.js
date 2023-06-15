const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    if (distanceToPump / mpg <= fuelLeft) {
      return true;
    }
    return false;
  };