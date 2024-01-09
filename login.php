<?php
// Replace these credentials with your own
$servername = "localhost";
$username = "root";
$passwordt = "";
$dbname = "project";

// Create connection
$conn = new mysqli($servername, $username, $passwordt, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve user input
$email = $_POST['email'];
$passwordd = $_POST['password'];

// Secure way to prevent SQL injection
// $username = mysqli_real_escape_string($conn, $username);
// $password = mysqli_real_escape_string($conn, $password);

// Query to check if the user exists
$sql = "SELECT * FROM `signup` WHERE email='$email' AND password='$passwordd' ";
// $result = $conn->query($sql);

//store result
$result = $conn->query($sql);

if ($result==1) {
   // Redirect to the index in page
   header('Location: dashboard.html');
} else {
    echo "Login failed. Incorrect username or password.";
}

$conn->close();
?>
