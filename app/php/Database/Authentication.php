<?php
include_once 'Database.php';
include_once 'ErrorAction.php';

class Authentication
{
  function __construct()
  {

  }

  function __destruct()
  {

  }

  function signUp($request)
  {
    @$firstName = $request->firstName;
    @$lastName = $request->lastName;
    @$email = $request->email;
    @$pass = $request->pass;

    $statement = "INSERT INTO 'User' ('firstName', 'lastName', 'email', 'password')
                  VALUES (:firstName, :lastName, :email, :password)";
    $statement.bindParam(':firstName', $firstName, PDO::PARAM_STR);
    $statement.bindParam(':lastName', $lastName, PDO::PARAM_STR);
    $statement.bindParam(':email', $email, PDO::PARAM_STR);
    $statement.bindParam(':password', $password, PDO::PARAM_STR);
    $statement = $database->prepare($query);
    $statement->execute();

    $errorAction = $this->handleError($statement->errorInfo());

    return $errorAction;
  }

  function signIn($request)
  {
    @$email = $request->email;
    @$pass = $request->pass;

    $statement = "SELECT 'email', 'password'
                  FROM 'User'
                  WHERE ':email' = User.email AND ':password' = User.password)";
    $statement.bindParam(':email', $email, PDO::PARAM_STR);
    $statement.bindParam(':password', $password, PDO::PARAM_STR);
    $statement = $database->prepare($query);
    $statement->execute();

    $errorAction = $this->handleError($statement->errorInfo());

    return $errorAction;
  }

  function logout()
  {

  }

  function handleError($errorInfo)
  {
    $errorCode = $errorInfo[0];
    $errorMessage = $errorInfo[2];

    if (!is_null($errorMessage))
      echo $errorMessage;

    if ($errorCode == 0)
      return ErrorAction::Sucess;
    else
      return ErrorAction::Failed;
  }
}
?>
