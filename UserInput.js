import p from 'prompt-sync';
let prompt=p();

class UserInput {

     static readUserLine = (message) => {
        let props=prompt(message+"  ")
        return props;
    }
}

export default UserInput; 