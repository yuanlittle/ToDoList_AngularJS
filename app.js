(function(){
	var app = angular.module('myApp', []);
	app.controller('toDoCtrl', function($scope) {
		$scope.toDoList = [];

		$scope.addToDo = function() {
			$scope.toDoList.push({toDoText:$scope.toDoInput ,done:false});
			$scope.toDoInput = "";
		};

		$scope.remove=function(){
		    for (var i=0;i<$scope.toDoList.length;i++){
		        if ($scope.toDoList[i].done===true){
					$scope.toDoList.splice(i,1);
                    i=i-1;
                }
            }

        };


	});
})();
