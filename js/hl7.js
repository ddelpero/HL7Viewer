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
	{ 	"DG1": {
			1: 'Set ID',
			2: 'Diagnosis Coding Method',
			3: 'Diagnosis Code',
			4: 'Diagnosis Description',
			5: 'Diagnosis Date/Time',
			6: 'Diagnosis Type',
			7: 'Major Diagnostic Category',
			8: 'Diagnostic Related Group',
			9: 'DRG Approval Indicator',
			10: 'DRG Grouper Review Code',
			11: 'Outlier Type',
			12: 'Outlier Days',
			13: 'Outlier Cost',
			14: 'Grouper Version And Type',
			15: 'Diagnosis Priority',
			16: 'Diagnosing Clinician',
			17: 'Diagnosis Classification',
			18: 'Confidential Indicator',
			19: 'Attestation Date/Time',
			20: 'Diagnosis Identifier',
			21: 'Diagnosis Action Code',
			22: 'Parent Diagnosis',
			23: 'DRG CCL Value Code',
			24: 'DRG Grouping Usage',
			25: 'DRG Diagnosis Determination Status',
			26: 'Present On Admission'
			},
		"EVN": {
			1: 'Event Type Code',
			2: 'Recorded Date/Time',
			3: 'Date/Time Planned Event',
			4: 'Event Reason Code',
			5: 'Operator ID',
			6: 'Event Occurred',
			7: 'Event Facility'
			},
		"FT1": {
			1: 'Set ID',
			2: 'Transaction ID',
			3: 'Transaction Batch ID',
			4: 'Transaction Date',
			5: 'Transaction Posting Date',
			6: 'Transaction Type',
			7: 'Transaction Code',
			8: 'Transaction Description',
			9: 'Transaction Description',
			10: 'Transaction Quantity',
			11: 'Transaction Amount',
			12: 'Transaction Amount',
			13: 'Department Code',
			14: 'Insurance Plan ID',
			15: 'Insurance Amount',
			16: 'Assigned Patient Location',
			17: 'Fee Schedule',
			18: 'Patient Type',
			19: 'Diagnosis Code',
			20: 'Performed By Code',
			21: 'Ordered By Code',
			22: 'Unit Cost',
			23: 'Filler Order Number',
			24: 'Entered By Code',
			25: 'Procedure Code',
			26: 'Procedure Code Modifier',
			27: 'Advanced Beneficiary Notice Code',
			28: 'Medically Necessary Duplicate Procedure Reason.',
			29: 'NDC Code',
			30: 'Payment Reference ID',
			31: 'Transaction Reference Key'
			},
		"MSH": {
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
		"NTE": {
			1: 'Set ID',
			2: 'Source of Comment',
			3: 'Comment',
			4: 'Comment Type'
			},
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
			},
		"ORC": {
			1: 'Order Control',
			2: 'Placer Order Number',
			3: 'Filler Order Number',
			4: 'Placer Group Number',
			5: 'Order Status',
			6: 'Response Flag',
			7: 'Quantity/Timing',
			8: 'Parent Order',
			9: 'Date/Time of Transaction',
			10: 'Entered By',
			11: 'Verified By',
			12: 'Ordering Provider',
			13: 'Enterer\'s Location',
			14: 'Call Back Phone Number',
			15: 'Order Effective Date/Time',
			16: 'Order Control Code Reason',
			17: 'Entering Organization',
			18: 'Entering Device',
			19: 'Action By',
			20: 'Advanced Beneficiary Notice Code',
			21: 'Ordering Facility Name',
			22: 'Ordering Facility Address',
			23: 'Ordering Facility Phone Number',
			24: 'Ordering Provider Address',
			25: 'Order Status Modifier',
			26: 'Advanced Beneficiary Notice Override Reason',
			27: 'Filler\'s Expected Availability Date/Time',
			28: 'Confidentiality Code',
			29: 'Order Type',
			30: 'Enterer Authorization Mode'
			},
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
		"PV1": {
			1: 'Set ID',
			2: 'Patient Class',
			3: 'Assigned Patient Location',
			4: 'Admission Type',
			5: 'Preadmit Number',
			6: 'Prior Patient Location',
			7: 'Attending Doctor',
			8: 'Referring Doctor',
			9: 'Consulting Doctor',
			10: 'Hospital Service',
			11: 'Temporary Location',
			12: 'Preadmit Test Indicator',
			13: 'Re',
			14: 'Admit Source',
			15: 'Ambulatory Status',
			16: 'VIP Indicator',
			17: 'Admitting Doctor',
			18: 'Patient Type',
			19: 'Visit Number',
			20: 'Financial Class',
			21: 'Charge Price Indicator',
			22: 'Courtesy Code',
			23: 'Credit Rating',
			24: 'Contract Code',
			25: 'Contract Effective Date',
			26: 'Contract Amount',
			27: 'Contract Period',
			28: 'Interest Code',
			29: 'Transfer to Bad Debt Code',
			30: 'Transfer to Bad Debt Date',
			31: 'Bad Debt Agency Code',
			32: 'Bad Debt Transfer Amount',
			33: 'Bad Debt Recovery Amount',
			34: 'Delete Account Indicator',
			35: 'Delete Account Date',
			36: 'Discharge Disposition',
			37: 'Discharged to Location',
			38: 'Diet Type',
			39: 'Servicing Facility',
			40: 'Bed Status',
			41: 'Account Status',
			42: 'Pending Location',
			43: 'Prior Temporary Location',
			44: 'Admit Date/Time',
			45: 'Discharge Date/Time',
			46: 'Current Patient Balance',
			47: 'Total Charges',
			48: 'Total Adjustments',
			49: 'Total Payments',
			50: 'Alternate Visit ID',
			51: 'Visit Indicator',
			52: 'Other Healthcare Provider'
			}
		}
;


});