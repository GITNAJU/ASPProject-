var selectedRow=null

function onFormSubmit(){
    if (validate()){
        var formdata= readFormData();
        if(selectedRow==null)
            insertNewRecord(formdata);
            else
            updateRecord(formdata)
        resetForm();
    }
}

function readFormData(){
    // var formdata= {};
    // formdata[Name]= document.getElementById("name").value;
    // formdata[Email]= document.getElementById("email").value;
    // formdata[Password]= document.getElementById("password").value;
    // return formdata;
    
    var formdata = {};
    formdata.Name = document.getElementById("name").value;
    formdata.Email = document.getElementById("email").value;
    formdata.Password = document.getElementById("password").value;
    return formdata;      
}

function insertNewRecord(data){
var table=document.getElementById("StudentsDataList").getElementsByTagName('tbody')[0];
var newRow=table.insertRow(table.length)
cell1=newRow.insertCell(0);
cell1.innerHTML= data.Name;
cell2=newRow.insertCell(1);
cell2.innerHTML= data.Email;
cell3=newRow.insertCell(2);
cell3.innerHTML= data.Password;
cell3=newRow.insertCell(3);
cell3.innerHTML = `<a onClick="onEdit(this)">Edit</a>
|                  <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm(){
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("password").value="";
    selectedRow=null;
}

function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById("name").value= selectedRow.cells[0].innerHTML;
    document.getElementById("email").value= selectedRow.cells[1].innerHTML;
    document.getElementById("password").value= selectedRow.cells[2].innerHTML;
}

function updateRecord(formdata){
    selectedRow.cells[0].innerHTML=formdata.Name;
    selectedRow.cells[1].innerHTML=formdata.Email;
    selectedRow.cells[2].innerHTML=formdata.Password;
}

function onDelete(td){
    if(confirm('Are you sure to delete this record?')){
        row= td.parentElement.parentElement;
        document.getElementById("StudentsDataList").deleteRow(row.rowIndex)
        resetForm();
    }
}

function validate(){
    isValid=true;
    if(document.getElementById("name").value==""){
        isValid=false;
        document.getElementById("NameValidationError").classList.remove("hide");
    }else{
        !document.getElementById("NameValidationError").classList.contains("hide");
        document.getElementById("NameValidationError").classList.add("hide");
    }
    if(document.getElementById("email").value==""){
        isValid=false;
        document.getElementById("EmailValidationError").classList.remove("hide");
    }else{
        !document.getElementById("EmailValidationError").classList.contains("hide");
        document.getElementById("EmailValidationError").classList.add("hide");
    }
    if(document.getElementById("password").value==""){
        isValid=false;
        document.getElementById("PasswordValidationError").classList.remove("hide");
    }else{
        !document.getElementById("PasswordValidationError").classList.contains("hide");
        document.getElementById("PasswordValidationError").classList.add("hide");
    }
    return isValid;
}

// function validate() {
//     isValid = true;
//     if (document.getElementById("name").value == "") {
//       isValid = false;
//       document.getElementById("name").classList.remove("hide");
//     } else {
//       document.getElementById("name").classList.add("hide");
//     }
//     if (document.getElementById("email").value == "") {
//       isValid = false;
//       document.getElementById("email").classList.remove("hide");
//     } else {
//       document.getElementById("email").classList.add("hide");
//     }
//     if (document.getElementById("password").value == "") {
//       isValid = false;
//       document.getElementById("password").classList.remove("hide");
//     } else {
//       document.getElementById("password").classList.add("hide");
//     }
//     return isValid;
//   }
  
