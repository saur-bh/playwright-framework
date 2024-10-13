import { exec } from "child_process";

//Define a common command string for running cucumber tests
const common = `./src/features/*.feature \
  --require-module ts-node/register \
  --require ./src/step-definitions/**/**/*.ts \
 -f json:./reports/report.json \
  --format html:./reports/report.html \
  --require ./src/utils/cucumber-timeout.ts`;

//Define an interface for the profiles object
//It defines an interface where each key is a string and its value is also a string
interface ProfileCommands {
    [key: string]: string;
}

//Define a command strings for different test profiles
const profiles: ProfileCommands = {
    smoke: `${common} --tags "@smoke"`,
    regression: `${common} --tags "@regression"`,
    empty: `${common} --tags "@empty"`,
    validlogin: `${common} --tags "@validlogin"`,
    login: `${common} --tags "@login"`,
    random: `${common} --tags "@random"`,
    logout: `${common} --tags "@logout"`,
    logoutfail: `${common} --tags "@logoutfail"`,
    logoutpass: `${common} --tags "@logoutpass"`,

}

//Get the third command-line argument and assign it to the profile
//i.e. smoke, regression etc
const profile = process.argv[2];

//Construct the command string based on the selected profile
//command is the full command to run the tests for the selected profile
let command = `npx cucumber-js ${profiles[profile as 'smoke' | 'regression' | 'login' | 'contact-us']}`;

//Print the constructed command
//console.log(command);

//Execute the command
exec(command, { encoding: 'utf-8' }, (error: Error | null, stdout: string) => {
    //Log the output of the command
    console.log(stdout);

    //check if there was an error during execution
    if (error) {
        //throw a new error with a simple message
        throw new Error('💥 Some automation test(s) have failed! - Please review.💥')
    }
});