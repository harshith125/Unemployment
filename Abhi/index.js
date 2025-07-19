function onRecruiterButtonClick() {
    var designation = prompt("Enter Candidate designation:");
    var experience = prompt("Enter experience of the requried Candidate:");
    var Gender = prompt("Enter Gender of the requried candidate:");
    var package =promt("Enter the Estimated Package for Emmployee");
    if (experience !== null && designation !== null) {
        // Here you can send the data to a server using AJAX or perform any other action
        alert("Experience: " + experience + "\nDesignation: " + designation + "\nGender : "+ Gender+"\nEstimated package : "+package+"\nData saved successfully!");
    }
}

function onInterviewerButtonClick() {
    var name = prompt("Enter Your Name");
    var university = prompt("Enter your University Name:");
    var skills = prompt("Enter your Skills:");
    var role = prompt("Enter the role you applied for:");
    var cgpa = prompt("Enter your CGPA:");
    var Mail = prompt("Your Mail Id:");
    var MobieNumber = prompt("Enter Your Mobile Number");
    var package1=promt("Enter Expecting Package");
    if (university !== null && skills !== null && role !== null && cgpa !== null) {
        // Here you can send the data to a server using AJAX or perform any other action
        alert("Name : "+name+"\nUniversity Name: " + university + "\nSkills: " + skills + "\nRole Applied For: " + role + "\nCGPA: " + cgpa + "\nMail ID :"+Mail+"\nMobile Number"+MobieNumber+"\nPackage : "+package1+"\nData saved successfully!");
    }
}