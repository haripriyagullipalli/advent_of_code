const areAdjancentsSame = (number, index) => {
  if (number[index] === number[index + 1]) {
    return true;
  }

  if (index === number.length - 1) {
    return false;
  }

  return areAdjancentsSame(number, index + 1);
}

const isAscending = (number) => {
  for (let i = 0; i < number.length - 1; i++) {
    if (+number[i] > +number[i + 1]) {
      return false;
    }
  }

  return true;
}

const main = () => {
  let count = 0;

  for (let i = 125730; i <= 579381; i++) {
    if (areAdjancentsSame(i + '', 0) && isAscending(i + '')) {
      count += 1;
    }
  }

  return count;
}

console.log(main());