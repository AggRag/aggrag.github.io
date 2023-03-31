
// Function to handle form submit event
function handleSubmit(event) {
  event.preventDefault();

  // Get the form data
  var data = {
    "Serial number": document.getElementById("serial_number").value,
    "Date": document.getElementById("date").value,
    "Name": document.getElementById("name").value,
    "Age": document.getElementById("age").value,
    "Sex": document.getElementById("sex").value,
    "Address": document.getElementById("address").value,
    "Diagnosis": document.getElementById("diagnosis").value,
    "Procedures": document.getElementById("procedures").value,
    "Operative Findings": document.getElementById("operative_findings").value,
    "Outcome": document.getElementById("outcome").value,
    "Identification": document.getElementById("identification").value,
    "Contact": document.getElementById("contact").value,
    "Hospital Name": document.getElementById("hospital_name").value,
  };


  var csv = convertToCSV([data]);
  downloadCSV(csv, 'medical_data.csv');
}

// Function to download CSV file
function downloadCSV(csv, filename) {
  var csvFile;
  var downloadLink;

  csvFile = new Blob([csv], {type: "text/csv"});
  downloadLink = document.createElement("a");
  downloadLink.download = filename;
  downloadLink.href = window.URL.createObjectURL(csvFile);
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);
  downloadLink.click();
}

// Function to convert data to CSV format
function convertToCSV(objArray) {
  var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
  var str = '';
  var header = "Serial number,Date,Name,Age,Sex,Address,Diagnosis,Procedures,Operative Findings,Outcome,Identification,Contact,Hospital Name\n";

  for (var i = 0; i < array.length; i++) {
    var line = '';
    for (var index in array[i]) {
      if (line != '') line += ','

      line += array[i][index];
    }

    str += line + '\r\n';
  }

  return header + str;
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
