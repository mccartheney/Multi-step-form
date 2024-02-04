const step1Verification = () => {
    //get next page button
    const nextButton = document.querySelector(".main_forms_buttons-button__next");
    nextButton.onclick = () => { //on click on next page button

        //get all inputs from page 1
        const INPUTS = document.querySelectorAll(".inputType1");
        INPUTS.forEach(input => { //in each input

            //get the requireLabel for this input
            const requireTextLabel = input.parentNode.childNodes[1].childNodes[1];

            //if input is empty
            if (input.value == "") {
                requireTextLabel.classList.remove("invisible"); //turn visible
            }else { //if not
                requireTextLabel.classList.add("invisible"); //turn invisible
            }
        });
    }
};

export default step1Verification