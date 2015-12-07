var app = angular.module('myApp', []);

app.controller('NewTableCtrl', function($scope) {
  
  $scope.table = { fields: [] };

  $scope.addFormField = function() {
    $scope.table.fields.push('');
  }

  $scope.submitTable = function() {
    console.log($scope.table);
  }
  
});

app.controller('MyCtrl', ['$scope', function ($scope) {
$scope.grades = [];
$scope.students = [];

$scope.addInput = function(value){
    $scope.grades.push({grades:''});
    $scope.students.push({students:''});
}

$scope.removeInput = function(index){
    $scope.grades.splice(index,1);
    $scope.students.splice(index,1);
}

}]);

function GradeDatabase($scope)  {
		$scope.items =[];

		$scope.addItem = function(item) {
			$scope.items.push(item);
			$scope.item = {};
		};
    
		$scope.averageScore = function(){
			var total = 0;
			for(count=0;count<$scope.items.length;count++){
				total +=$scope.items[count].Score;
			}
			return total/count;
		};
		
		$scope.removeItem = function(index){
			$scope.items.splice(index,1);
		};

		
}