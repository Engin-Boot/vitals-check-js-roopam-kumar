const expect = require('chai').expect;
//var x = 0;
//var x=0, y=0, z=0;

function vitalsAreOk(bpm, spo2, respRate) {
	
	 bpmHigh(bpm);
	 bpmLow(bpm);
	 spo2Low(spo2);
	 respRateHigh(respRate);
	 respRateLow(respRate);
	
    
}
function bpmHigh(bpm)
{
	if(bpm>150)
		console.log('Abnormality : BPM Value:' + bpm + ' Breach: High');
}
function bpmLow(bpm)
{
	if(bpm<70)
		console.log('Abnormality : BPM  Value:' + bpm + ' Breach: Low');
}
function spo2Low(spo2)
{
	if(spo2 < 90)
		console.log('Abnormality : SPO2 Value:' + spo2 + ' Breach: Low');
}
function respRateHigh(respRate)
{
	if(respRate > 95)
		console.log('Abnormality : respRate Value:' + respRate + ' Breach: High');
}
function respRateLow(respRate)
{
	if(respRate < 30)
		console.log('Abnormality : respRate Value:' + respRate + ' Breach: Low');
}
		

//expect(vitalsAreOk(100, 95, 70)).to.be.true;
//expect(vitalsAreOk(50, 95, 70)).to.be.false;
vitalsAreOk(100,95,70);
vitalsAreOk(50,95,70);
vitalsAreOk(190,88,100);
console.log('checker is done');
