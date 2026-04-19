function getMessage() {
  document.getElementById("output").innerText = "Loading message...";
  
  fetch("http://localhost:3000/api/message")
    .then(response => response.json())
    .then(data => {
      document.getElementById("output").innerText = data.message;
    })
    .catch(err => {
      document.getElementById("output").innerText = "Error: Is the server running?";
    });
}

function getStudent() {
  document.getElementById("output").innerText = "Loading student...";

  fetch("http://localhost:3000/api/student")
    .then(response => response.json())
    .then(data => {
      document.getElementById("output").innerText = "Name: " + data.name + " | Role: " + data.role;
    })
    .catch(err => {
      document.getElementById("output").innerText = "Error: Is the server running?";
    });
}
