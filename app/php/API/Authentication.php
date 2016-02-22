<?php
include_once 'Database.php';

class Authentication extends Model
{
  function signUp($request)
  {
    @$firstName = $request->firstName;
    @$lastName = $request->lastName;
    @$email = $request->email;
    @$pass = $request->pass;

    $query = "CALL signUp(:firstName, :lastName, :email, :password)";
    $statement = $database->prepare($query);
    $statement.bindParam(':firstName', $firstName, PDO::PARAM_STR);
    $statement.bindParam(':lastName', $lastName, PDO::PARAM_STR);
    $statement.bindParam(':email', $email, PDO::PARAM_STR);
    $statement.bindParam(':password', $password, PDO::PARAM_STR);
    $statement->execute();

    $error = $this->handleError($statement->errorInfo());

    return $error;
  }

  function signIn($request)
  {
    @$email = $request->email;
    @$pass = $request->pass;

    $query = "CALL signIn(:email, :password)";
    $statement = $database->prepare($query);
    $statement.bindParam(':email', $email, PDO::PARAM_STR);
    $statement.bindParam(':password', $password, PDO::PARAM_STR);
    $statement->execute();

    $error = $this->handleError($statement->errorInfo());

    return $error;
  }

  function logout()
  {

  }

  function handleError($errorInfo)
  {
    $errorCode = $errorInfo[0];
    $errorMessage = $errorInfo[2];

    $error = new Error($errorCode, $errorMessage);
    return error;
  }
}
?>
