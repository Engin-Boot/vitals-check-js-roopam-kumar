const expect = require('chai').expect;
var x=0, y=0, z=0;

function vitalsAreOk(bpm, spo2, respRate) {
	
	 return (bpm < 70 || bpm > 150 || spo2 < 90 || respRate < 30 || respRate > 95)  ? false : true
    
}
/*function findAbnormality(bpm, spo2, respRate)
{
		if(bpm < 70)
			x=1;
		else if(bpm > 150)
			x=2;
		if(spo2 < 90)
			y=3;
		if( respRate < 30)
			z=4;
		else if( respRate > 95)
			z=5;
		if(x==1)
			console.log('Abnormality : BPM  Value:' + bpm + ' Breach: Low');
		else if(x==2)
			console.log('Abnormality : BPM Value:' + bpm + ' Breach: High');
		if(y==3)
			console.log('Abnormality : SPO2 Value:' + spo2 + ' Breach: Low');
		if(z==4)
			console.log('Abnormality : respRate Value:' + respRate + ' Breach: Low');
		else if(z==5)
			console.log('Abnormality : respRate Value:' + respRate + ' Breach: High');
		
	
}*/
		

expect(vitalsAreOk(100, 95, 70)).to.be.true;
expect(vitalsAreOk(50, 95, 70)).to.be.false;
//findAbnormality(50,95,70);
//findAbnormality(156,34,22);
console.log('checker is done');
