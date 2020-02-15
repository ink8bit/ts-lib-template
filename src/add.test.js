import add from './add';

const testCases = [
  {
    inputA: 1,
    inputB: 2,
    output: 3,
  },
  {
    inputA: 0,
    inputB: 10,
    output: 10,
  },
  {
    inputA: 5,
    inputB: -5,
    output: 0,
  },
];

describe('add', () => {
  testCases.forEach(tc => {
    const { inputA, inputB, output } = tc;
    test(`${inputA} + ${inputB} = ${output}`, () => {
      expect(add(inputA, inputB)).toBe(output);
    });
  });
});
