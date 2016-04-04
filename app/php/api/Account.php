<?

include_once 'RESTObject.php';

class Account extends RESTObject
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
      case 'saveDescription': {
        Account::saveDescription($database, $parameters);
      }
      break;

      default: {
        header("HTTP/1.0 405 Invalid Action");
      }
      break;
    }
  }

  private static function saveDescription($database, $parameters)
  {
    $_SESSION['user']['description'] = $parameters['description'];
    
    $statement = "CALL saveUserDescription(:userID, :description)";
    $statement = $database->prepare($statement);
    $statement->bindParam(':userID', $_SESSION['user']['userID'], PDO::PARAM_INT);
    $statement->bindParam(':description', $parameters['description'], PDO::PARAM_STR);
    $statement->execute();
  }
}

?>
