#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.hex("#ebab34")("\tWelcome to CLI currency converter\t"));
const currency = {
    USD: 1,
    PKR: 277.54,
    INR: 85,
    IRR: 42076.08,
    SAR: 3.75,
    EUR: 0.92,
    GBP: 0.791,
    MYR: 4.74,
    CNY: 7.23,
    AUD: 1.5,
    IQD: 1310
};
let userAnswer = await inquirer.prompt([{
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "PKR", "EUR", "GBP", "SAR", "INR", "MYR", "CNY", "AUD", "IQD", "IRR"]
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "PKR", "EUR", "GBP", "SAR", "INR", "MYR", "CNY", "AUD", "IQD", "IRR"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your amount"
    }
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
convertedAmount = Math.round(convertedAmount);
console.log(convertedAmount);
