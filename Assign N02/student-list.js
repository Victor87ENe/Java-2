

// let student = ['olamide', 'chijioke', 'chidi', 'ebere', 'musa', 'ifanyi', 'oyedia', 'ayomide', 'bose', 'omowumi', 'yusufu', 'adamu', 'damilola', 'mainde', 'ogundere', 'okuti', 'manese']



// // let students = [];
// //     students [0] = "olamide";
// //     students [1] = "chijioke";
// //     students [2] = "chidi";
// //     students [3] = "ebere";
// //     students [5] = "musa";


// let expel = 'this student is expelled';
 
//  let save = student;


    

// student = save;
// let hold = expel;

// console.log(save)

// delete student[userInput];


// function message(){
//     let userInput = prompt('pleas enter index to delete');
//     let save = userInput;
// }


//  // i need to convert my input from prmpt ie frm string to number   
//  delete student[userInput];

 

// console.log(student)




// if (Number<=16  === !isNaN(userInput)){
//     delete student[userInput];//this delete any index 4rm 0-16
//     let saves = student;//this save the new updated array(student)
//     let hold = userInput; // this save the deleted input inedx
//     let hold0 = hold = 'this student is expelled';
//      console.log(hold);
//      console.log(saves);
    
// }else if(Number>=17 === save){
//     console.log(hold0);
// }






// class work together from here





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
            if (expelledStudents.includes(index)) {
                alert("Student at this index is already expelled.");
            } else {
                var expelledStudent = lis[index].innerText; // Store expelled student
                expelledStudents.push(index); // Add index of expelled student to array
                
                // Display expelled student
                var expelledParagraph = document.createElement("p");
                expelledParagraph.textContent = "Expelled Student: " + expelledStudent;
                document.body.appendChild(expelledParagraph);
                
                studentList.removeChild(lis[index]);
            }
        } else {
            alert("Invalid index");
        }
    } else {
        alert("Invalid input");
    }
}