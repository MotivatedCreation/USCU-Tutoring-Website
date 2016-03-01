<?php

include_once 'Authentication.php';

try {
  $db_name  = 'tutoring_services_db';
  $hostname = '127.0.0.1:3306';
  $username = 'root';
  $password = 'tacobell';

  $database = new PDO("mysql:
                       host=$hostname;
                       dbname=$db_name",
                       $username, $password,
                       array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
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

  case 'PUT': {
    api_put($database, $request);
  }
  break;

  case 'OPTIONS': {
    api_options($request);
  }
  break;

  case 'HEAD': {
    api_head($database, $request);
  }
  break;

  case 'DELETE': {
    api_delete($database, $request);
  }
  break;

  default: {
    header("HTTP/1.0 405 Method Not Allowed");
  }
  break;
}

function api_get($database, $request)
{
  $service = null;

  switch ($request['service'])
  {
    case 'Authentication': {
      $service = new Authentication();
    }
    break;

    default: {
      header("HTTP/1.0 405 Invalid Service");
    }
    break;
  }

  if ($service) {
    $service->http_get($database, $request['action'], $request['parameters']);
  }
}

function api_post($database, $request)
{
  $service = null;

  switch ($request['service'])
  {
    case 'Authentication': {
      $service = new Authentication();
    }
    break;

    default: {
      header("HTTP/1.0 405 Invalid Service");
    }
    break;
  }

  if ($service) {
    $service->http_post($database, $request['action'], $request['parameters']);
  }
}

function api_put($database, $request)
{
  $service = null;

  switch ($request['service'])
  {
    case 'Authentication': {
      $service = new Authentication();
    }
    break;

    default: {
      header("HTTP/1.0 405 Invalid Service");
    }
    break;
  }

  if ($service) {
    $service->http_put($database, $request['action'], $request['parameters']);
  }
}

function api_options($request)
{
  $service = null;

  switch ($request['service'])
  {
    case 'Authentication': {
      $service = new Authentication();
    }
    break;

    default: {
      header("HTTP/1.0 405 Invalid Service");
    }
    break;
  }

  if ($service) {
    $service->http_options();
  }
}

function api_head($database, $request)
{
  $service = null;

  switch ($request['service'])
  {
    case 'Authentication': {
      $service = new Authentication();
    }
    break;

    default: {
      header("HTTP/1.0 405 Invalid Service");
    }
    break;
  }

  if ($service) {
    $service->http_head($database, $request['action'], $request['parameters']);
  }
}

function api_delete($database, $request)
{
  $service = null;

  switch ($request['service'])
  {
    case 'Authentication': {
      $service = new Authentication();
    }
    break;

    default: {
      header("HTTP/1.0 405 Invalid Service");
    }
    break;
  }

  if ($service) {
    $service->http_delete($database, $request['action'], $request['parameters']);
  }
}

?>
