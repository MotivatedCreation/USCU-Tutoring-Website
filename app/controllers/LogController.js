TutorMeApp.controller('LogController', ['$scope', '$http',
function ($scope, $http)
{
  var request = $http(
  {
    method: "POST",
    url: "Signup.php",
    data: {
      firstName: $scope.firstName,
      lastName: $scope.lastName,
      email: $scope.email,
      password: $scope.password,
    },
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });

  request.success(function(data)
  {
    console.log('Success!');
  }).error(function(error)
  {
    console.log('Error: ' + error);
  });
}]);
