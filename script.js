// Array to store all students
let students = [];


// Function that runs when Submit is clicked
function addStudent() {

    // Get data from inputs
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let school = document.getElementById("school").value;
    let subject = document.getElementById("subject").value;
    let hobby = document.getElementById("hobby").value;


    // Check if any input is empty
    if (
        name === "" ||
        age === "" ||
        school === "" ||
        subject === "" ||
        hobby === ""
    ) {

        alert("Please fill all information!");

        return;
    }


    // Create student object
    let student = {

        name: name,
        age: age,
        school: school,
        subject: subject,
        hobby: hobby

    };


    // Add student to the array
    students.push(student);


    // Display all students
    displayStudents();


    // Clear inputs
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("school").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("hobby").value = "";
}



// Function to display students
function displayStudents() {

    let container =
        document.getElementById("studentsContainer");


    // Clear old cards
    container.innerHTML = "";


    // Loop through students
    for (let i = 0; i < students.length; i++) {

        let student = students[i];


        // Create new card
        let card = document.createElement("div");

        card.className = "student-card";


        // Add student information
        card.innerHTML = `

            <h2> ${student.name}</h2>

            <p> Age: ${student.age}</p>

            <p>School: ${student.school}</p>

            <p> Favorite Subject: ${student.subject}</p>

            <p>Hobby: ${student.hobby}</p>

        `;


        // Add card to page
        container.appendChild(card);
    }
}