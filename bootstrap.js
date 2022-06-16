import UserInput from './UserInput.js';
import DentalManager from './DentalManager.js';

const dentalManager = new DentalManager();

const input = UserInput.readUserLine;
let userLine = '';

while (true) {

    dentalManager.getOptions();//this will print the options

    userLine = input("Enter your option ->");
    console.log('****************************')
    if (userLine.toLowerCase() === "exit") break;
    
    dentalManager.userOption(parseInt(userLine));
}






