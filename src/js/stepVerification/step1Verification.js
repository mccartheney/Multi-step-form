//function to validate if email is correct
const emailVerification = (input) => {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.value.match(validRegex)) {return true}
    return false;
};

//funtion to verify if input is empty
const emptyInputVerification = (input) => {
    if (input.value == "") {return false} 
    return true
};

const step1Verification = () => {
    let successArray = []
    
    //get email input and label
    const emailInput = document.querySelector('#email');
    const emailLabel = document.querySelector('.invalidEmail')

    //verify if email input is not empty
    if (emptyInputVerification(emailInput)) {
        if (emailVerification(emailInput)) {
            //if email is correct
            emailLabel.classList.add("invisible")
            successArray.push("success")
        } else {
            //if email is incorrect
            emailLabel.classList.remove("invisible")
            successArray.push("fail")
        }
    }

    //get all inputs from page 1
    const INPUTS = document.querySelectorAll(".inputType1");
    INPUTS.forEach(input => { //in each input

        //get the requireLabel for this input
        const requireTextLabel = input.parentNode.childNodes[1].childNodes[1];


        //if input is empty
        if (!emptyInputVerification(input)) {
            requireTextLabel.classList.remove("invisible"); //turn visible
            successArray.push("fail")
        }else { //if not
            requireTextLabel.classList.add("invisible"); //turn invisible
            successArray.push("success")
        }
    });

    if (successArray.includes("fail")) {return false}
    return true
};


export default step1Verification