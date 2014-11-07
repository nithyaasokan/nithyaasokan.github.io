<?php
$servername = 'localhost';
$username = 'root';
$password = 'root';
$dbname = 'week11form';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 


$value1 = $_POST['Name'];
$value2 = $_POST['Age'];
$value3 = $_POST['Email'];
$value4 = $_POST['Message'];

$sql = "INSERT INTO week11form (Name, Age, Email, Message)
VALUES ('$value1', '$value2', '$value3', '$value4')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>