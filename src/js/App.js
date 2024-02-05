import step1Verification from "./stepVerification/step1Verification.js";
import changeSteps from "./changeSteps/changeSteps.js";


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

window.onload = () => {
    step1Verification()
};
