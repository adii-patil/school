// Initialize Firebase (Use your Firebase configuration)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.getElementById("admission-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const grade = document.getElementById("grade").value;
    const dob = document.getElementById("dob").value;

    // Save data to Firebase Firestore
    db.collection("admissions").add({
        name: name,
        email: email,
        phone: phone,
        grade: grade,
        dob: dob
    })
    .then(function() {
        document.getElementById("response-message").innerText = "Admission form submitted successfully!";
    })
    .catch(function(error) {
        document.getElementById("response-message").innerText = "Error submitting the form: " + error.message;
    });

    // Clear form
    document.getElementById("admission-form").reset();
});
