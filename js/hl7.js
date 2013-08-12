angular.module('hl7Viewer', []);

angular.module('hl7Viewer').controller('HL7Controller',
function HL7Controller($scope) {

   $scope.message = '';
   $scope.segments = [];

	$scope.$watch('message', function() {
	   $scope.segments = $scope.message.split('\n');
	  }
	);

	$scope.parse = function(segment){
		
		fields = segment.split('|');
		fields.shift();
		return fields;
	}


});