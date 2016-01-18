<?php
abstract class Error
{
  const Unknown = 0;
  const IncorrectEmail = 1;
  const IncorrectPassword = 2;
}

abstract class ErrorAction
{
  const Success = 0;
  const Ignore = 1;
  const Failed = 2;
}
?>
