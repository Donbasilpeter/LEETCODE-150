import * as Solutions from "../solutions/index.js";
import * as TestCases from "../Test_Cases/index.js";
import readline from "readline";
import chalk from "chalk";
import problemMap from "./problemMap.js";

const IO = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askContinue = () => {
  return new Promise((resolve) => {
    IO.question(
      chalk.cyan(`
Continue (y) or exit (n): `),
      (val) => {
        if (val === "y") {
          resolve(true);
        } else if (val === "n") {
          resolve(false);
        } else {
          console.log(
            chalk.red(`
    Please select a valid option!`)
          );
          resolve(askContinue());
        }
      }
    );
  });
};

const execute = (problemCode) => {
  if (Object.keys(problemMap).includes(problemCode)) {
    console.log(
      chalk.yellow(`
    Test Cases for ${problemMap[problemCode]} is executed.`)
    );
    TestCases[problemMap[problemCode]].map((eachTestCases) => {
      const input = eachTestCases[0];
      const expectedOutput = eachTestCases[1];
      const actualOutput = Solutions[problemMap[problemCode]](...input);
      if (actualOutput === expectedOutput) {
        console.log(
          chalk.green(`
    Test Case Passed: ${chalk.bold(input)}`)
        );
      } else {
        console.log(
          chalk.red(`
    Test Case Failed: ${chalk.bold(input)}`) +
            chalk.red(`
    Expected Output: ${chalk.bold(expectedOutput)}`) +
            chalk.red(`
    Actual Output: ${chalk.bold(actualOutput)}`)
        );
      }
    });
  } else {
    console.log(
      chalk.red(`
    Invalid choice. Try again.`)
    );
  }
};

const listOptions = (problemMap) => {
  let result = `
  `;
  for (const key in problemMap) {
    result =
      result + `  ${chalk.yellow(problemMap[key])} : ${chalk.cyan(key)} `;
  }
  return result;
};

export { askContinue, IO, execute, listOptions };
