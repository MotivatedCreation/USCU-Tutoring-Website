<?php

include_once 'Authentication.php';

try {
  $db_name  = 'tutoring_services_db';
  $hostname = 'usc.local:3306';
  $username = 'root';
  $password = 'tacobell';

  $database = new PDO("mysql:
                       host=$hostname;
                       dbname=$db_name",
                       $username, $password,
                       array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

  session_start();
}
catch (PDOException $exception) {
  echo $exception;
}

switch ($_SERVER['REQUEST_METHOD'])
{
  case 'GET': {
    if (isset($_GET['request']))
      api_get($database, json_decode($_GET['request']));
  }
  break;

  case 'POST': {
    if (isset($_POST['request']))
      api_post($database, json_decode($_POST['request'], true));
  }
  break;

  default: {
    header("HTTP/1.0 405 Invalid Method");
  }
  break;
}

function serviceForServiceType($serviceType)
{
  switch ($serviceType)
  {
    case 'Authentication': {
      $service = Authentication::class;
    }
    break;

    default: {
      header("HTTP/1.0 405 Invalid Service");
    }
    break;
  }

  return $service;
}

function api_get($database, $request)
{
  $service = serviceForServiceType($request['service']);

  if ($service) {
    $parameters = (isset($request['parameters']) ? $request['parameters'] : []);

    $service::http_get($database, $request['action'], $request['parameters']);
  }
}

function api_post($database, $request)
{
  $service = serviceForServiceType($request['service']);

  if ($service) {
    $parameters = (isset($request['parameters']) ? $request['parameters'] : []);

    $service::http_post($database, $request['action'], $parameters);
  }
}

?>
