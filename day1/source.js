const input = Deno.readTextFileSync('data.txt');

const allMasses = input.split('\n');
const fuels = allMasses.map((mass) => Math.floor((mass / 3)) - 2);
const allFuels = fuels.reduce((total, fuel) => total + fuel, 0);

const part1 = allFuels;

const totalFuel = (total, fuel) => {
  fuel = Math.floor(fuel / 3) - 2;
  if (fuel <= 0) {
    return total;
  }

  return totalFuel( total + fuel, fuel);
}

const part2 = allMasses.reduce(totalFuel, 0);