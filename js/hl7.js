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

	$scope.fieldName = function(segment, index){
		try
		{
		   fields = segment.split('|');
		   segmentName = fields.shift();
		   if (segmentName.toUpperCase() == "MSH")
		   	   index = index + 1;
		   return $scope.dictionary[segmentName][index];
	    }
	    catch(err)
	    {}
		return;
	}



	$scope.dictionary = 
	{ "MSH": {
			1: 'Field Separator',
			2: 'Encoding Characters',
			3: 'Sending Application',
			4: 'Sending Facility',
			5: 'Receiving Application',
			6: 'Receiving Facility',
			7: 'Date/Time of Message',
			8: 'Security',
			9: 'Message Type',
			10: 'Message Control ID',
			11: 'Processing ID',
			12: 'Version ID',
			13: 'Sequence Number',
			14: 'Continuation Pointer',
			15: 'Accept Acknowledgment Type',
			16: 'Application Acknowledgment Type',
			17: 'Country Code',
			18: 'Character Set',
			19: 'Principal Language Of Message',
			20: 'Alternate Character Set Handling Scheme',
			21: 'Message Profile Identifier',
			22: 'Sending Responsible Organization',
			23: 'Receiving Responsible Organization',
			24: 'Sending Network Address',
			25: 'Receiving Network Address'
			} ,
		"PID": {
			1: 'Set ID',
			2: 'Patient ID',
			3: 'Patient Identifier List',
			4: 'Alternate Patient ID',
			5: 'Patient Name',
			6: 'Mother\'s Maiden Name',
			7: 'Date/Time of Birth',
			8: 'Administrative Sex',
			9: 'Patient Alias',
			10: 'Race',
			11: 'Patient Address',
			12: 'County Code',
			13: 'Phone Number',
			14: 'Phone Number',
			15: 'Primary Language',
			16: 'Marital Status',
			17: 'Religion',
			18: 'Patient Account Number',
			19: 'SSN Number',
			20: 'Driver\'s License Number',
			21: 'Mother\'s Identifier',
			22: 'Ethnic Group',
			23: 'Birth Place',
			24: 'Multiple Birth Indicator',
			25: 'Birth Order',
			26: 'Citizenship',
			27: 'Veterans Military Status',
			28: 'Nationality',
			29: 'Patient Death Date and Time',
			30: 'Patient Death Indicator',
			31: 'Identity Unknown Indicator',
			32: 'Identity Reliability Code',
			33: 'Last Update Date/Time',
			34: 'Last Update Facility',
			35: 'Species Code',
			36: 'Breed Code',
			37: 'Strain',
			38: 'Production Class Code',
			39: 'Tribal Citizenship'
			} ,
		"OBR": {
			1: 'Set ID',
			2: 'Placer Order Number',
			3: 'Filler Order Number',
			4: 'Universal Service Identifier',
			5: 'Priority',
			6: 'Requested Date/Time',
			7: 'Observation Date/Time #',
			8: 'Observation End Date/Time #',
			9: 'Collection Volume *',
			10: 'Collector Identifier *',
			11: 'Specimen Action Code *',
			12: 'Danger Code',
			13: 'Relevant Clinical Information',
			14: 'Specimen Received Date/Time',
			15: 'Specimen Source',
			16: 'Ordering Provider',
			17: 'Order Callback Phone Number',
			18: 'Placer Field 1',
			19: 'Placer Field 2',
			20: 'Filler Field 1 +',
			21: 'Filler Field 2 +',
			22: 'Results Rpt/Status Chng',
			23: 'Charge to Practice +',
			24: 'Diagnostic Serv Sect ID',
			25: 'Result Status +',
			26: 'Parent Result +',
			27: 'Quantity/Timing',
			28: 'Result Copies To',
			29: 'Parent',
			30: 'Transportation Mode',
			31: 'Reason for Study',
			32: 'Principal Result Interpreter +',
			33: 'Assistant Result Interpreter +',
			34: 'Technician +',
			35: 'Transcriptionist +',
			36: 'Scheduled Date/Time +',
			37: 'Number of Sample Containers *',
			38: 'Transport Logistics of Collected Sample *',
			39: 'Collector\'s Comment *',
			40: 'Transport Arrangement Responsibility',
			41: 'Transport Arranged',
			42: 'Escort Required',
			43: 'Planned Patient Transport Comment',
			44: 'Procedure Code',
			45: 'Procedure Code Modifier',
			46: 'Placer Supplemental Service Information',
			47: 'Filler Supplemental Service Information',
			48: 'Medically Necessary Duplicate Procedure Reason',
			49: 'Result Handling',
			50: 'Parent Universal Service Identifier'
			} ,
		"OBX": {
			1: 'Set ID',
			2: 'Value Type',
			3: 'Observation Identifier',
			4: 'Observation Sub',
			5: 'Observation Value',
			6: 'Units',
			7: 'References Range',
			8: 'Abnormal Flags',
			9: 'Probability',
			10: 'Nature of Abnormal Test',
			11: 'Observation Result Status',
			12: 'Effective Date of Reference Range',
			13: 'User Defined Access Checks',
			14: 'Date/Time of the Observation',
			15: 'Producer\'s ID',
			16: 'Responsible Observer',
			17: 'Observation Method',
			18: 'Equipment Instance Identifier',
			19: 'Date/Time of the Analysis',
			20: 'Observation Site',
			21: 'Observation Instance Identifier',
			22: 'Mood Code',
			23: 'Performing Organization Name',
			24: 'Performing Organization Address',
			25: 'Performing Organization Medical Director'
			} 
		}
;


});