<?

include_once 'RESTObject.php';

class Authentication extends RESTObject
{
  public function http_get($database, $action, $parameters)
  {
    switch ($action)
    {
      case 'signIn': {
        $this->signIn($database, $parameters);
      }
      break;

      case 'signOut': {
        $this->signOut($database, $parameters);
      }
      break;

      case 'checkIfUserIsLoggedIn' {
        $this->checkIfUserIsLoggedIn();
      }
      break;

      default: {
        header("HTTP/1.0 405 Invalid Action");
      }
      break;
    }
  }

  public function http_post($database, $action, $parameters)
  {
    switch ($action)
    {
      case 'signUp': {
        $this->signUp($database, $parameters);
      }
      break;

      default: {
        header("HTTP/1.0 405 Invalid Action");
      }
      break;
    }
  }

  public function http_put($database, $action, $parameters)
  {
    switch ($action)
    {
      default: {
        header("HTTP/1.0 405 Invalid Action");
      }
      break;
    }
  }

  public function http_options()
  {
    return array('GET', 'POST', 'PUT', 'OPTIONS', 'HEAD', 'DELETE');
  }

  public function http_head($database, $action, $parameters)
  {
    switch ($action)
    {
      default: {
        header("HTTP/1.0 405 Invalid Action");
      }
      break;
    }
  }

  public function http_delete($database, $action, $parameters)
  {
    switch ($action)
    {
      case 'deleteAccount': {
        $this->deleteAccount($database, $parameters);
      }
      break;

      default: {
        header("HTTP/1.0 405 Invalid Action");
      }
      break;
    }
  }

  private function checkIfUserIsLoggedIn()
  {
    return isset($_SESSION['username']);
  }

  private function signUp($database, $parameters)
  {
    $statement = "CALL signUp(:firstName, :lastName, :email, :password)";
    $statement = $database->prepare($statement);
    $statement->bindParam(':email', $parameters['email'], PDO::PARAM_STR);
    $statement->bindParam(':password', $parameters['password'], PDO::PARAM_STR);
    $statement->bindParam(':firstName', $parameters['firstName'], PDO::PARAM_STR);
    $statement->bindParam(':lastName', $parameters['lastName'], PDO::PARAM_STR);
    $statement->execute();
  }

  private function signIn($database, $parameters)
  {
    $query = "CALL signIn(:email, :password)";
    $statement = $database->prepare($query);
    $statement->bindParam(':email', $parameters['email'], PDO::PARAM_STR);
    $statement->bindParam(':password', $parameters['password'], PDO::PARAM_STR);
    $statement->execute();

    if ($statement->rowCount() == 1) {
      $_SESSION['email'] = $parameters['email'];
    }

    $error = $this->handleError($statement->errorInfo());
  }

  private function signOut($database, $parameters)
  {
    $query = "CALL signOut(:accountID)";
    $statement = $database->prepare($query);
    $statement->bindParam(':accountID', $parameters['userID'], PDO::PARAM_INT);
    $statement->execute();

    $error = $this->handleError($statement->errorInfo());
  }

  private function deleteAccount($database, $parameters)
  {
    $query = "CALL deleteAccount(:accountID)";
    $statement = $database->prepare($query);
    $statement->bindParam(':accountID', $parameters['userID'], PDO::PARAM_INT);
    $statement->execute();

    $error = $this->handleError($statement->errorInfo());
  }

  private function handleError($errorInfo)
  {
    $errorCode = $errorInfo[0];
    $errorMessage = $errorInfo[2];
  }
}

?>
