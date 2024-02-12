function downloadCSV(data) {
    const csvContent = "data:text/csv;charset=utf-8," + data.map(row => row.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "StudentData.csv");
    document.body.appendChild(link); // Required for compatibility
    link.click();
  }

function retrieveRecords(){ //retrieves items in the localStorage
  var key = document.getElementById('retrieveKey').value; //gets key from user
  console.log("retrive records");
  var records = window.localStorage.getItem(key); //searches for the key in localStorage
  var paragraph = document.createElement("p");
  var infor = document.createTextNode(records);
  paragraph.appendChild(infor);
  var element = document.getElementById("retrieve");
  element.appendChild(paragraph);
}

  window.onload = function(){
    document.getElementById("retrieveButton").onclick= retrieveRecords
  }