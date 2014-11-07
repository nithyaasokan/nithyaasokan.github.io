<!DOCTYPE html>
<html>
    <head>
        <title> PHP Form </title>
        <link rel="stylesheet" type="text/css" href="style.css">
        <link href="http://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700" rel="stylesheet" type="text/css">

    </head>

    <body>
        <div id="title"> Letters to Strangers </div>

        <form id="form" action="form.php" method="post">
            Name: <input type="text" name="first_name"><br>
            Age: <input type="text" name="last_name"><br>
            Email: <input type="text" name="email"><br>
            Your Message:<br><textarea rows="5" name="message" cols="30"></textarea><br>
            <input type="submit" name="submit" value="Submit">
        </form>

    </body>
</html> 