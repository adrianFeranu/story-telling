<?php
$hostname = "localhost";
$user = "accounti_test";
$pass ="veta12345";
$db= "accounti_st";
$conn = new mysqli( $hostname,$user,$pass,$db );
if (mysqli_connect_errno($conn)) {echo ' esec la conectare';}
$stmt = $conn -> prepare('INSERT INTO formular (nume, email,poveste, alege, oras) 
                            VALUES (?,?,?,?,?)');
            
 $stmt -> bind_param('sssss', $_POST['Nume'], $_POST['Email'], $_POST['Poveste'],implode(",",$_POST['Tag']), $_POST['Oras']);
$stmt -> execute();

echo '<script language="javascript">';
echo 'alert("Your story were succesfully received")';
echo '</script>';
$stmt -> close();
$conn-> close()
?>