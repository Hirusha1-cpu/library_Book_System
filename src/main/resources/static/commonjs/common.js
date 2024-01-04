// define function for fill data into select element
const fillDataIntoSelect = (fieldId,message, dataList, property, selectedValue)=>{
    fieldId.innerHTML = '';
    const optionMsg = document.createElement('option');
    optionMsg.value = ""
    optionMsg.innerText = message;
    optionMsg.selected = 'selected';
    optionMsg.disabled = 'disabled';
    fieldId.appendChild(optionMsg)
    
    dataList.forEach(element => {
        let option = document.createElement('option');
        option.value = JSON.stringify(element);
        option.innerText = element[property];
        if (selectedValue == element[property]) {
            option.selected = 'selected';
        }
        fieldId.appendChild(option);
    })

}

//define function for ajax get request
const ajaxRequest = (url) =>{
    let serverResponse;
    $.ajax(url, {
        async: false,
        type: 'GET',
        contentType: 'json',
        success: function (data, status, ahr) {
            console.log("success" + status + " " + ahr);
            serverResponse = data;
        },
        error: function (ahr, status, errormsg) {
            console.log("Fail" + errormsg + " " + status);
            serverResponse = [];
        }
    })
    return serverResponse;
}