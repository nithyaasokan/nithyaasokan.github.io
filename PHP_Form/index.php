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
            Name: <input type="text" name="Name"><br> <br>
            
            Age: <input type="text" name="Age"><br> <br>
            
            Email: <input type="text" name="Email"><br> <br>
            
            <div class="message"> 
                Your Letter: <br> <br>
                <textarea rows="15" name="Message" cols="30"> 
                </textarea> <br>
            </div> 

            <input type="submit" name="submit" value="Submit">
        </form>

    </body>
</html> 