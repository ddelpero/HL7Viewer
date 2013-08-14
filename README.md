Simple Angularjs app to display a version 2.x HL7 message in a psuedo tree view. Parsing is only based on each segment split by \n and each field split by |.

# Sample Message

```
MSH|^~\&|FACILITY|L|L|L|20130507104632||ORU^R01|20130507104632215226|P|2.3|||AL|AL|
PID|||555-44-4444||EVERYWOMAN^EVE^E^^^^L|JONES|196203520|F|||153 FERNWOOD DR.^^STATESVILLE^OH^35292||(206)334523
OBR|1|845439^GHH OE|1045813^GHH LAB|1554-5^GLUCOSE|||200202150730||||||||555-55-5555^PRIMARY^PATRICIA P^^^^MD^^L
OBX|2|FN|1553-5^GLUCOSE^POST 12H CFST:MCNC:PT:SER/PLAS:QN||^182|mg/dl|70_105|H|||F
```

# What it looks like
![](hl7viewer.png?raw=true)


# Expanded Segment
![](hl7expanded.png?raw=true)
