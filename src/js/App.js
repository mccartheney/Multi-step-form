import step1Verification from "./stepVerification/step1Verification.js";
import step2Verification from "./stepVerification/step2Verification.js";


//actual step
let pageNumber = 0;

//----------user info
let name = undefined;
let email = undefined;
let phone = undefined;

//----------plan vars
//type of plane selectioned by user
let plan = undefined; //arcade, advanced, pro

//type of payment it can bem per year or per month
let planType = undefined; //month, year

//price if planType is year the price will multiply 10 times
let price = {
    arcade : 9,
    advanced : 12,
    pro : 15
};

//addon var
let addons = [];

//button to next step
let nextButton = document.querySelector(".main_forms_buttons-button__next");
//button to prev step
let prevButton = document.querySelector(".main_forms_buttons-button__goBack");

//all forms from steps
const forms = document.querySelectorAll(".main_forms_form");

window.onload = () => {
    nextButton.onclick = () => {
        switch (pageNumber) {
            case 0:
                if (step1Verification() == true) {
                    forms[pageNumber].classList.remove("active_form");
                    forms[pageNumber + 1].classList.add("active_form");
                }

                pageNumber++
                break;
        
            case 1 : 

            default:
                break;
        }
    };
    prevButton.onclick = () => {};

};
