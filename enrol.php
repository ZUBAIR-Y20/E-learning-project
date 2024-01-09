<?php
// Replace these credentials with your own
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "project";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve user input
$id = $_POST['id'];
$name = $_POST['name'];
$email = $_POST['email'];
$course = $_POST['course'];

//decision query
$query = "INSERT INTO `enroll`(`id`,`name`, `email`, `course`)
 VALUES ('$id','$name','$email','$course')";

//store result
 $result = $conn->query($query);

 //check on response
 if($result==1){
   // Redirect to the login page
   header('Location: enrol1.html');
 } else{
    $response = array("status"=>"0", "message"=>"data not inserted");
 }

 //show response

//  echo json_encode($response);
// Secure way to prevent SQL injection
// $username = mysqli_real_escape_string($conn, $username);
// $password = mysqli_real_escape_string($conn, $password);

// Hash the password (use a strong hashing algorithm like bcrypt)
// $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

// Insert user data into the database
// $sql = "INSERT INTO users (username, password) VALUES ('$username', '$hashedPassword')";

// if ($conn->query($sql) === TRUE) {
//     echo "Signup successful!";
//     // Perform any additional actions here (e.g., redirect to another page)
// } else {
//     echo "Error: " . $sql . "<br>" . $conn->error;
// }

$conn->close();
?>
