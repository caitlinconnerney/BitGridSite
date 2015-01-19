<? 
$email=$_POST['email']; 
$to="cconnerney@gmail.com"; 
$message="Newsletter email signup request from: $email"; 

$success = "
<div class=\"row-fluid\">
    <div class=\"span12\">
        <center><h3>Submission successful.</h3>
        <p>Thank you for signing up!</p>
        </center>
    </div>
</div>
";

if(mail($to,"Newsletter Signup", $message,"From: $email\n")) { 
echo "$success"; 
} else { 
echo "There was a problem sending the mail. Please check that you filled in the form correctly."; 
} 
?>