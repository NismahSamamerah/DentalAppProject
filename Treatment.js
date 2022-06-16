class Treatment {

    #appointmentId;
    #treatmentPlan;//Map

    constructor(appointmentId) {
        this.setAppointmentId(appointmentId);
        this.setTreatmentPlan();
    }
    setAppointmentId(appointmentId) {
        this.#appointmentId = appointmentId;
    };
    getAppointmentId() {
        return this.#appointmentId;
    };
    setTreatmentPlan() {
        if (this.#treatmentPlan === undefined)
            this.#treatmentPlan = new Map();
    };
    getTreatmentPlan() {
        return this.#treatmentPlan;
    };

    #isUpperTeethValid(teethNumber) {
        return teethNumber >= 11 && teethNumber <= 28 && teethNumber !== 20;
    }
    #isLowerTeethValid = (teethNumber) => {
        return teethNumber >= 31 && teethNumber <= 48 && teethNumber !== 40 && teethNumber !== 39;
    }
    #isValidTeethNumber = (teethNumber) => {
        const inRange = this.#isLowerTeethValid(teethNumber) || this.#isUpperTeethValid(teethNumber)
        if (!(typeof teethNumber === 'number' && inRange && teethNumber !== undefined)) {
            throw new Error("Teeth number is not a valid")
        }
        return true;
    }

    addTeethTreatment = (teethNumber, treatment) => {
        if (treatment === undefined) throw new Error("Treatment is undefined")
        if (this.#isValidTeethNumber(parseInt(teethNumber)))
            this.#treatmentPlan.set(teethNumber, treatment);
    }
}

export default Treatment;