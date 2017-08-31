var app=angular.module('myapp',['ngMaterial']);

app.controller('myctrl',function($scope,$http,$mdDialog){
  $scope.hover={};
  $scope.get_data=function(){
 $http({ 
        method: 'Post',
        data: 'user=' + 'user' + '&pass=' + 'pass',
        url: '/get_data',
        headers: {'Content-Type' : 'application/x-www-form-urlencoded' }
      })
   .success(function(data) {
    // console.log(data.data);
    $scope.data=data.data;
    $scope.content = angular.fromJson($scope.data);
    console.log("dataaaa ", $scope.content);
  $scope.hover.desc=$scope.content.productList[0].description;
  $scope.hover.img= $scope.content.productList[0].imageUrls.md;
  $scope.hover.price= $scope.content.productList[0].networkPrice;
  $scope.hover.bullets= $scope.content.productList[0].marketingBullets;
$scope.hover.index= 0;
   })
   .error(function(err) {
    console.log(err);
   });


 }

 $scope.hoverIn = function(index) {

  $scope.hover.desc=$scope.content.productList[index].description;
  $scope.hover.img= $scope.content.productList[index].imageUrls.md;
  $scope.hover.price= $scope.content.productList[index].networkPrice;
  $scope.hover.bullets= $scope.content.productList[index].marketingBullets;
  $scope.hover.index= index;

 }
 $scope.showAlert = function(ev,index) {
  console.log(index);
               $mdDialog.show (
                  $mdDialog.alert()
                     .parent(angular.element(document.querySelector('#dialogContainer')))
                     .clickOutsideToClose(true)
                     .title('Cost: $' + $scope.content.productList[index].networkPrice)
                     .ok('Ok!')
                     .targetEvent(ev)
               );
            };

});