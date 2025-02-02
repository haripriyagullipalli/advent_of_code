const input = Deno.readTextFileSync('data.txt');

const allMasses = input.split('\n');
const fuels = allMasses.map((mass) => Math.floor((mass / 3)) - 2);
const totalFuel = fuels.reduce((total, fuel) => total + fuel, 0);

const part1 = totalFuel;

const recursiveFuel = (total, fuel) => {
  fuel = Math.floor(fuel / 3) - 2;
  if (fuel <= 0) {
    return total;
  }

  return recursiveFuel( total + fuel, fuel);
}

const part2 = allMasses.reduce(recursiveFuel, 0);
console.log(part2);