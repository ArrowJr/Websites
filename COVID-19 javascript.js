function test()
{
	var po=document.createElement("p");
	po.innerHTML=`
1]Sit in a comfortable position.<br>
2]Take a deep breath and hold it inside of yourself for about 10-15 seconds.
3]Let it go after the time interval.Repeat the steps 2-3 times to make sure of the result.

Conclusion:

While holding your breath,if the following happens, you have a high chance of catching the novel coronavirus.

1]You cough while holding your breath.
2]You let it go too quickly.

This is one of the prominient tests of detecting the novel coronavirus.
Note that even if you do not show any of the above,you still need to take care of yourself.   `;
	 document.getElementById("rr").appendChild(po);
	 document.getElementById("su").disabled=true;
};


function hg()
{
	alert("HI");
};

function execute() 
{
var age=document.getElementById('age');
if(age>=21 && age<=40)
    {
	  young();
	}
	else
	{
		old();
	}
};	
function young()
{
var day1=document.getElementById('1-5').checked;
var day2=document.getElementById('6-10').checked;
var bdpain=document.getElementById('bdpain');
var fever=document.getElementById('fever');
var drycgh=document.getElementById('drycgh');
var dbreath=document.getElementById('dbreath');
var ftg=document.getElementById('ftg');
if(((drycgh.checked==true) && (ftg.checked==true) && (dbreath.checked==true)) ||  ((bdpain.checked==true)&&(ftg.checked==true)&&(dbreath.checked==true)))
 {
	if(day1==true)
	{
		stayIsolated();
	}
	else if(day2==true)
	{
		homeQuarantine();
	}
	else
	{
		HospitalTest();
	}
 }
 else
 {
	 localdoctor();
 }
};

function old()
{
var day1=document.getElementById('1-5').checked;

var bdpain=document.getElementById('bdpain');
var fever=document.getElementById('fever');
var drycgh=document.getElementById('drycgh');
var dbreath=document.getElementById('dbreath');
var ftg=document.getElementById('ftg');
if(((drycgh.checked==true) && (ftg.checked==true) && (dbreath.checked==true)) ||  ((bdpain.checked==true)&&(ftg.checked==true)&&(dbreath.checked==true)))
 {
	if(day1==true)
	{
		if(age>=41 && age <=45)
		{
			stayIsolated();
		}
		else
		{
		  homeQuarantine();
		}		  
	}
	else
	{
		HospitalTest();
	}
	
	
 }
 else
 {
	 localdoctor();
	 stayIsolated();
 }
	
};

function HospitalTest()
{
   var po=document.createElement("p");
  po.innerHTML=`This is a serious case of novel coronavirus.You immediately need to go to a Hospital and get tested yourself immediately. Don't worryy!!.
Most novel coronavirus patients recover effectively.Don't worry you will be fine and once again see your family and the world.  `;
  document.getElementById("u").appendChild(po);
	
	
	
};
function localdoctor()
{
  var po=document.createElement("p");
  po.innerHTML=`Hmmm.....This doesn't seem that dangerous.You might be having a normal flu.A visit to your family doctor would surely help you.
However,You must continue to drink hot/warm water , as a precautionary measure of the COVID-19.
Also Continue maintaining strict hygiene like washing hands and maintain social distancing(outside and inside the house).
Also avoid going out of the house....STRICTLY.

Have a good day. :)`;
  document.getElementById("u").appendChild(po);
};
function stayIsolated()
{
  var po=document.createElement("p");
  po.innerHTML=`You might be having a slight chance of catching the novel corornavirus.This is the time that you will have to stay in Isolation.
Isolation is a procedure that seperates the sick people,with a contagious disease, from the people who are not sick.
Drink lots of hot water and restrict your movements in the house.Going outside is a no-go for you.Wash your hands regularly with soap for 30 seconds.
Don't worry at all , you will be fine.  `;
  document.getElementById("u").appendChild(po);
};
function homeQuarantine()
{
	var po=document.createElement("p");
  po.innerHTML=`You might have been exposed to the novel coronavirus.You will need to be home quarantined.
                You can refer the instructions from the goverment website for procedure on home Quarantine.
               Drink lots of hot liquids and have positive thoughts in your mind.`;
  document.getElementById("u").appendChild(po);
	
};	
