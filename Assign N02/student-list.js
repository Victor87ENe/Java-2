
function getCredentials() {
    const username = prompt('Enter your username:');
    const passcode = prompt('Enter your passcode:');
    const credentialsDiv = document.getElementById("credentials");

    if (username && passcode) {
        credentialsDiv.innerHTML = `Username: ${username}<br>Passcode: ${passcode}`;
        document.getElementById('deleteButton').style.display = 'block';
    }
}

var expelledStudents = []; // Array to store expelled students
        
function deleteStudent() {
    var studentList = document.getElementById("studentList");
    var lis = studentList.getElementsByTagName("li");

    var index = prompt("Enter the index of the student you want to delete (starting from 0):");

    if (index !== null && !isNaN(index)) {
        index = parseInt(index);

        if (index >= 0 && index < lis.length) {
            var expelledStudent = lis[index].innerText; // Store expelled student
            expelledStudents.push(expelledStudent); // Add expelled student to array
            var expelledParagraph = document.createElement("p"); // Create a new paragraph element
            expelledParagraph.textContent = "This Student is Expelled : " + expelledStudent; // Set the text content of the paragraph
            document.body.appendChild(expelledParagraph); // Append the paragraph to the document body
            studentList.removeChild(lis[index]);
        } else {
            alert("Invalid index");
        }
    } else {
        alert("Invalid input");
    }
}



