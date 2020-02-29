import multiply from './multiply';

const testCases = [
  {
    inputA: 1,
    inputB: 2,
    output: 2,
  },
  {
    inputA: 0,
    inputB: 10,
    output: 0,
  },
  {
    inputA: 5,
    inputB: -5,
    output: -25,
  },
  {
    inputA: -3,
    inputB: -5,
    output: 15,
  },
];

describe('multiply', () => {
  testCases.forEach(tc => {
    const { inputA, inputB, output } = tc;
    test(`${inputA} * ${inputB} = ${output}`, () => {
      expect(multiply(inputA, inputB)).toBe(output);
    });
  });
});
