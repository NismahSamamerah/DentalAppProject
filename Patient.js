
class Patient {
    static #idCounter = 0;
    #id;
    #name;
    #gender;
    #age;
    #address;
    #email;
    #mobileNumber;

    constructor(name, gender, age, address, mobileNumber, email = "") {
        Patient.#idCounter += 1;
        this.setName(name);
        this.setGender(gender);
        this.setAge(age);
        this.setAddress(address);
        this.setMobileNumber(mobileNumber);
        this.setEmail(email);
        this.setId()
    }
    #isValidName(name){
        const trimName = name.trim();
        if (typeof name !== 'string' || trimName.length <=0  ) {
            throw new Error('name must be a string and not empty')
        }
    }
    #isValidGender(gender){
        const checkGender = gender.toLowerCase().trim();
        if (checkGender !== undefined && !(checkGender === 'male' || checkGender === 'female')) {
            throw new Error('gender must be a string and not empty')
        }
    }
    #isValidAge(age){
        const intAge = parseInt(age, 10);
        if (!(typeof intAge === 'number' && intAge > 0 && intAge !== undefined)) {
            throw new Error('age must be a number and not empty')
        }
    }
    #isValidAdress(address){
        const trimAddress = address.trim();
        if (typeof trimAddress !== 'string' && trimAddress == undefined) {
            throw new Error('address must be a string and not empty');
        }
    }
    #isValidEmail(email){
        if (email !== "") {
            if (!(/.+\@.+\..+/.test(email))) {
                throw new Error('email must be a string and not empty')
            }
        }
    }
    #isValidMobileNumber(mobileNumber){
        const trimMobileNumber = mobileNumber.trim();
        if (!(/^[0-9]{10}$/.test(trimMobileNumber))) {
            throw new Error('mobileNumber must be a 10 digits and not empty')
        }
    }
    setId() {
        if (this.#id === undefined)
            this.#id = Patient.#idCounter;
    };
    getId() {
        return this.#id;
    };
    setName (name) {
        this.#isValidName(name);
        this.#name = name;
    };
    getName() {
        return this.#name;
    }; 
    setGender (gender) {
        this.#isValidGender(gender);
        this.#gender = gender;
    };
    getGender () {
        return this.#gender;
    };
    setAge (age) {  
        this.#isValidAge(age) ;
        this.#age =age;
    };
    getAge () {
        return this.#age;
    };
    setAddress (address) {   
        this.#isValidAdress(address);
        this.#address = address;
    };
    getAddress () {
        return this.#address;
    };
    
    setEmail (email) {
        this.#isValidEmail(email);
        this.#email = email;
    };
    getEmail () {
        return this.#email;
    };

    setMobileNumber (mobileNumber) {
        this.#isValidMobileNumber(mobileNumber);
        this.#mobileNumber = mobileNumber;
    };
    getMobileNumber () {
        return this.#mobileNumber;
    };    
}

export default Patient;