<?php
$db_name  = 'tutorme';
$hostname = 'localhost';
$username = 'root';
$password = 'tacobell';

// connect to the database
$database = new PDO("mysql:host=$hostname;dbname=$db_name", $username, $password);

// a query get all the records from the users table
$query = 'SELECT userID, accountType, firstName, lastName, email, description
          FROM User';

// use prepared statements, even if not strictly required is good practice
$statement = $database->prepare($query);

// execute the query
$statement->execute();

// fetch the results into an array
$result = $statement->fetchAll(PDO::FETCH_ASSOC);

// convert to json
$json = json_encode($result);

// echo the json string
echo($json);
?>
