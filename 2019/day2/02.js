const input = Deno.readTextFileSync("data.txt");
const code = input.split(",").map((element) => +element);

const multiply = (code, index) => {
  const [operand1, operand2, result] = code.slice(index + 1, index + 4);
  code[result] = code[operand1] * code[operand2];
  return sprint(code, index + 4);
};

const add = (code, index) => {
  const [operand1, operand2, result] = code.slice(index + 1, index + 4);
  code[result] = code[operand1] + code[operand2];
  return sprint(code, index + 4);
};

const halt = (code) => code;

const sprint = (code, instructionPointer) => {
  const opcode = code[instructionPointer];
  switch (opcode) {
    case 1:
      return add(code, instructionPointer);
    case 2:
      return multiply(code, instructionPointer);
    case 99:
      return halt(code);
  }
};

const part1 = (code) => {
  code[1] = 12
  code[2] = 2
  return sprint(code, 0);
}

console.log(part1(code));

const desiredOutput = (code) => {
  for (let i = 0; i < 100; i++) {
    const actualCode = [...code];
    actualCode[1] = i;
    for (let j = 0; j < 100; j++) {
      actualCode[2] = j;
      if (sprint([...actualCode], 0)[0] === 19690720) {
        return { noun:i, verb:j };
      }
    }
  }
};


const { noun, verb } = desiredOutput(code);
const part2 = noun * 100 + verb;
console.log(part2); 