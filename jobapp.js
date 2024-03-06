 // Define an array to store submitted applications
 var submittedApplications = [];
  
 function validateForm() {
   var form = document.getElementById('jobApplicationForm');
   if (form.checkValidity()) {
     // Save the form data to the array
     submittedApplications.push(getFormData(form));
     alert('Application submitted successfully!');
   } else {
     alert('Please fill out all required fields.');
   }
 }

 function getFormData(form) {
   var formData = {};
   new FormData(form).forEach(function(value, key){
     formData[key] = value;
   });
   return formData;
 }

 function transformData() {
  var tableContainer = document.getElementById('tableContainer');
  var headers = Object.keys(submittedApplications[0]); // Extract headers
  var tableHTML = '<table>';

  // Loop through each header/field
  headers.forEach(function(header) {
    tableHTML += '<tr><th>' + header + '</th>';

    // Loop through each application and add the data for the current field
    submittedApplications.forEach(function(application) {
      tableHTML += '<td>' + application[header] + '</td>';
    });

    tableHTML += '</tr>';
  });

  tableHTML += '</table>';
  tableContainer.innerHTML = tableHTML;
}


 //Reference
 //Taking Help from ChatGPT (https://chat.openai.com/)