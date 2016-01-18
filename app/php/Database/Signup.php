<?php
include_once 'Database.php';
include_once 'Error.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
@$email = $request->email;

if (stristr($email, '@email.uscupstate.edu') == false)
{
  echo Error::IncorrectEmail;
}
else {
  $authentication = new Authentication();

  $errorAction = $authentication->signUp($request);

  if ($errorAction === ErrorAction::Success)
  {
    $errorAction = $authentication->signIn($request);

    if ($errorAction !=== ErrorAction::Success)
      handleErrorAction($errorAction);

  }
  else handleErrorAction($errorAction);
}

function handleErrorAction($errorAction)
{
  switch ($errorAction)
  {
    case ErrorAction::Success
    case ErrorAction::Ignore
    {

    }
    break;

    case ErrorAction::Failed
    default:
    break;
  }
}
?>
