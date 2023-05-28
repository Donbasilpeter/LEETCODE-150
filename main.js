import chalk from "chalk";
import * as Helper from "./src/Helper/index.js";
import problemMap from "./src/Helper/problemMap.js";


function askName() {
  Helper.IO.question(
    `${chalk.magenta("Please select a problem to test :")}
    
    ${Helper.listOptions(problemMap)}
  
    (Type "${chalk.red("exit")}" to quit)

    Your Choice : `,
    (choice) => {
      if (choice.toLowerCase() === "exit") {
        Helper.IO.close();
      } else {
        Helper.execute(choice);

        Helper.askContinue().then((shouldContinue) => {
          if (shouldContinue) {
            askName();
          } else {
            Helper.IO.close();
          }
        });
      }
    }
  );
}

askName();


