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
   var tableHTML = '<table><tr><th>Application</th>';

   // Extract headers from the first application
   var firstApplication = submittedApplications[0];
   Object.keys(firstApplication).forEach(function(key){
     tableHTML += '<th>' + key + '</th>';
   });

   tableHTML += '</tr>';

   // Loop through all submitted applications
   submittedApplications.forEach(function(formData, index){
     tableHTML += '<tr><td>' + (index + 1) + '</td>';

     Object.values(formData).forEach(function(value){
       tableHTML += '<td>' + value + '</td>';
     });

     tableHTML += '</tr>';
   });

   tableHTML += '</table>';
   tableContainer.innerHTML = tableHTML;
 }