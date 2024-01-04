window.addEventListener("load", () => {
    //calling ajax function to get the db response
    bookTypes = ajaxRequest("/booktype/findall");
    authors = ajaxRequest("/author/findall");

    //calling fillselect function
    fillDataIntoSelect(cmbBookType, "Please select a Book Type", bookTypes, 'name')
    fillDataIntoSelect(cmbBookAuthor, "Please select a Book Author", authors, 'name')

    //new project
    book = {};

    btnBookAdd.addEventListener("click", () => {
        console.log(book);
        //calling the bookSubmit Function
        bookSubmit();
    })
    btnBookReset.addEventListener("click", () => {

        //resetting dynamiuc fillselect function
        //resetting dynamic select
        bookTypes = ajaxRequest("/booktype/findall");
        authors = ajaxRequest("/author/findall");
        fillDataIntoSelect(cmbBookType, "Please select a Book Type", bookTypes, 'name')
        fillDataIntoSelect(cmbBookAuthor, "Please select a Book Author", authors, 'name')

        book = {};
        // formBook.reset();
        inputs = document.querySelectorAll(".inputBooks")
        inputs.forEach(element => {
            element.style = "";
            element.value = "";
        });

    })
    const bookSubmit = ()=>{

        //errors check (binding)
        returnErrors = checkBookErrors();
        if(returnErrors==''){

            //user confirmation
            conifrmResult = confirm("You are About to add a new record \nAre You Sure ? \n[Book Name : "+book.name+"]");
            if(conifrmResult){

                //pass data to backend
                let postServerResponse;
                $.ajax("/book", {
                    type: "POST",
                    async: false,
                    contentType: "application/json",
                    data: JSON.stringify(book),
                    success: function (data) {
                        console.log("success " + data);
                        postServerResponse = data;
                    },
                    error: function (resOb) {
                        console.log("Error " + resOb);
                        postServerResponse = resOb;
                    }
                });
                if(postServerResponse === "OK"){
                    alert("Book Added!");
                   btnBookReset.click();
                   

                }else{
                    alert("Error: "+postServerResponse);
                }

            }
            else{
                alert("Operation Cancelled by the User !");
            }
        }
        else{
            //check book have errors
            //display them to the user
            alert(returnErrors);
        }

    }


    refreshBookTable()
  
    
})

const refreshBookTable = ()=>{
    books = ajaxRequest("/book/findall");
    console.log(books);
    displayProperyValues = [
        {property :"name" , dataType :'text'},
        {property :"edition" , dataType :'text'},
        {property :"isbn" , dataType :'text'},
        {property :"langauge" , dataType :'text'},
        {property :getBookTypeName , dataType :'function'},
        {property :getAuthorName , dataType :'function'},
        {property :getDeleted, dataType :'function'},
        
    ]
    
    fillDataIntoTable(tblEmp, books, displayProperyValues, refillEmployeeForm, deleteButtonFunction, printEmployee, true)
}


const checkBookErrors = ()=>{

    let errors = '';

    if(book.name==null){
        errors = errors+"Book Name is required! \n";
    }
    if(book.edition==null){
        errors = errors+"Book Edition is required! \n";
    }
    if(book.isbn==null){
        errors = errors+"Book ISBN is required! \n";
    }
    if(book.langauge==null){
        errors = errors+"Book Language is required! \n";
    }
    if(book.authorId==null){
        errors = errors+"Book Author is required! \n";
    }
    if(book.booktype_id==null){
        errors = errors+"Book Type is required! \n";
    }

    return errors;

}
const getDeleted = (ob)=>{
    if (ob.deleted) {
        return "True"
    }else{
        return "False"
    }
}

const getAuthorName = (ob) =>{
    return ob.authorId.name

}
const getBookTypeName = (ob) =>{
    return ob.booktype_id.name
}
const refillEmployeeForm = (ob) =>{
    
    btnBookUpdate.disabled = false;
    oldBook = JSON.parse(JSON.stringify(ob))
    book = JSON.parse(JSON.stringify(ob))

    txtBookName.value = ob.name
    txtBookEdition.value = ob.edition
    txtBookIsbn.value = ob.isbn
    cmbBookLanguage.value =  ob.langauge

    fillDataIntoSelect(cmbBookType, "Please select a Book Type",bookTypes,"name", ob.booktype_id.name )
    fillDataIntoSelect(cmbBookAuthor, "Please select a Book Author", authors,"name",ob.authorId.name )

    console.log("Re Fill");
}
const checkBookFormUpdates =()=>{
    let updates ="";
    if(book.name != oldBook.name){
        updates = updates + "Book nmae was changed to "+book.name;
        
    }
    if(book.edition != oldBook.edition){
        updates = updates + "Book edition was changed to "+book.edition;

    }
    if(book.isbn != oldBook.isbn){
        updates = updates + "Book isbn was changed to "+book.isbn;

    }
    if(book.langauge != oldBook.langauge){
        updates = updates + "Book langauge was changed to "+book.langauge;

    }
    if(book.booktype_id.name != oldBook.booktype_id.name){
        updates = updates + "Book type was changed to "+book.booktype_id.name;

    }
    if(book.authorId.name != oldBook.authorId.name){
        updates = updates + "Book author was changed to "+book.authorId.name;

    }
    return updates;
}

btnBookUpdate.addEventListener("click",()=>{
    console.log("Old =>",oldBook);
    console.log("New -<>",book);

    returnErrorsUpdate = checkBookErrors();
    if (returnErrorsUpdate == "") {
        updates = checkBookFormUpdates();
        if (updates =="") {
         //no any changes   
         alert("There are no updates")
        }else{
           userConfirmation =  confirm("Changes detected..."+ updates)
            if (userConfirmation) {
                
                //if user press yes
                let serverResponse = ""
                $.ajax("/book",{
                 async : false,
                 type : "PUT",
                 contentType: "application/json",
                 data: JSON.stringify(book),
                 success: function(data){
                     console.log(data);
                     serverResponse = data;
                 },
                 error: function(resOb){
                     alert("error"+ resOb)
                     serverResponse = resOb;
                 }
                })
                // return serverResponse;
                if (serverResponse == "OK") {
                     alert("Update successFully");
                    
                }else{
                    alert("Update failureFully");
                }
            }
        //table refresh
        
        refreshBookTable()
    }
   

    }else{
        alert("There is some errors happened...!")
    }
})



const deleteButtonFunction = (ob) =>{
    console.log("Delete");
    userConfirmation = confirm("Are you sure you want to delete" +ob.name +"")
    if (userConfirmation) {
                    //if user press yes
                    let serverResponse = ""
                    $.ajax("/book",{
                     async : false,
                     type : "DELETE",
                     contentType: "application/json",
                     data: JSON.stringify(ob),
                     success: function(data){
                         console.log(data);
                         serverResponse = data;
                     },
                     error: function(resOb){
                         alert("error"+ resOb)
                         serverResponse = resOb;
                     }
                    })
                    // return serverResponse;
                    if(serverResponse == "OK"){
                        alert("Deleted succefully")
                    }else{
                        alert("Deleted failed")
                    }
    }
    refreshBookTable()
    

}
const printEmployee = () =>{
    console.log("Print");
}

