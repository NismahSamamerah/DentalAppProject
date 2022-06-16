class Appointment {

    static id;
    #patientId;
    #date;
    #time;

    constructor(patientId, date, time) {
        Appointment.id += 1;
        this.setPatientId(patientId);
        this.setDate(date);
        this.setTime(time);
    }

    #isValidDate(date) {
        let pattern = new RegExp('[0-3][0-9]-(0|1)[0-9]-(19|20)[0-9]{2}');
        const result = pattern.test(date);

        if (!result) {
            throw new Error('Invalid Date');
        }
    }

    #isValidTime(time) {
        const result = /^\d{1,2}:\d{2}([ap]m)?$/.test(time); 

        if (!result){
            throw new Error('Invalid Time');
        }
    }
    setPatientId(patientId) {
        this.#patientId = patientId;
    };
    getPatientId() {
        return this.#patientId;
    };
    setDate(date) {
        this.#isValidDate(date);
        this.#date = date;
    };
    getDate() {
        return this.#date;
    };
    setTime(time) {
        this.#isValidTime(time);
        this.#time = time;
    }
    getTime() {
        return this.#time;
    }
}

export default Appointment;