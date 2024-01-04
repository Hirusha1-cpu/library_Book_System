const textValidator = (element, pattern,object,property) => {

    //checking for element value (value cant be null)
    if (element.value !== '') {

        //if the regex pattern is satisfying by the element value, display a green border or add boostrap validation class 'is-valid'
        if (new RegExp(pattern).test(element.value)) {

            element.style.border = '1px solid green';
            element.style.color = 'green';

            window[object][property] = element.value;

        }
        //if the regex pattern is not satisfying by the input value, by the element value display a red border or add boostrap validation class 'is-invalid'
        else {

            window[object][property] = null;
            element.style.border = '1px solid red';
            element.style.color = 'red';

        }
    }
    //if the element is null, check if its required or not
    else {

        window[object][property] = null;

        //if element is required, display error / warning (use border color or boostrap validation)
        if (element.required) {
            element.style.border = '1px solid red';

        }
        //if the element is not required, display the default colors (remove boostrap validation)
        else {
            element.style.border = '1px solid #ced4da';

        }
    }

}

//for validating static select (hard code select)
const selectStaticValidator = (elementID,object,property)=>{
    if(elementID.value !== ''){
        elementID.style.border = '1px solid green';
        elementID.style.color = 'green';
        window[object][property] = elementID.value;

    }
    else{
        elementID.style.border = '1px solid red';
        elementID.style.color = 'red';
        window[object][property] = null;
    }
}

const selectDynamicValidator = (elementID,object,property)=>{
    if(elementID.value !== ''){
        elementID.style.border = '1px solid green';
        elementID.style.color = 'green';
        window[object][property] = JSON.parse(elementID.value);

    }
    else{
        elementID.style.border = '1px solid red';
        elementID.style.color = 'red';
        window[object][property] = null;
    }
}