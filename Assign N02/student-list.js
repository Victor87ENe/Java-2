



function getCredentials() {
    const username = prompt('Enter your username:');
    const passcode = prompt('Enter your passcode:');
    const credentialsDiv = document.getElementById("credentials");

    if (username && passcode) {
        credentialsDiv.innerHTML = `Username: ${username}<br>Passcode: ${passcode}`;
        document.getElementById('deleteButton').style.display = 'block';
    }
}

function deleteStudent() {
    const studentList = document.getElementById('studentList'); 
    const students = studentList.getElementsByTagName('li');
    const index = prompt('Enter the index of the student you want to delete (starting from 0):');

    if (index !== null && !isNaN(index)) {
        const idx = parseInt(index);
        if (idx >= 0 && idx < students.length) {
            studentList.removeChild(students[idx]);
        } else {
            alert('Invalid index');
        }
    } else {
        alert('Invalid input');
    }
}