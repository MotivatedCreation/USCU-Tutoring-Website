<?

include_once 'RESTObject.php';

class Authentication extends RESTObject
{
  public static function http_get($database, $action, $parameters)
  {
    switch ($action)
    {
      default: {
        header("HTTP/1.0 405 Invalid Action");
      }
      break;
    }
  }

  public static function http_post($database, $action, $parameters)
  {
    switch ($action)
    {
      case 'signIn': {
        Authentication::signIn($database, $parameters);
      }
      break;

      case 'signUp': {
        Authentication::signUp($database, $parameters);
      }
      break;

      case 'signOut': {
        Authentication::signOut($database);
      }
      break;

      default: {
        header("HTTP/1.0 405 Invalid Action");
      }
      break;
    }
  }

  private static function signUp($database, $parameters)
  {
    $statement = "CALL signUp(:firstName, :lastName, :email, :password)";
    $statement = $database->prepare($statement);
    $statement->bindParam(':email', $parameters['email'], PDO::PARAM_STR);
    $statement->bindParam(':password', $parameters['password'], PDO::PARAM_STR);
    $statement->bindParam(':firstName', $parameters['firstName'], PDO::PARAM_STR);
    $statement->bindParam(':lastName', $parameters['lastName'], PDO::PARAM_STR);
    $statement->execute();
  }

  private static function signIn($database, $parameters)
  {
    $query = "CALL signIn(:email, :password)";
    $statement = $database->prepare($query);
    $statement->bindParam(':email', $parameters['email'], PDO::PARAM_STR);
    $statement->bindParam(':password', $parameters['password'], PDO::PARAM_STR);
    $statement->execute();

    $user = $statement->fetch();

    if ($statement->rowCount() == 1) {
      $_SESSION['user'] = $user;
    }
  }

  private static function signOut($database)
  {
    session_destroy();
  }
}

?>
