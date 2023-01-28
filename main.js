let runner = document.getElementById('runner');
let danger = document.getElementById('dg')


runner.style.top="20vh";


document.getElementById('upButton').addEventListener('click', ()=>{
	runnerControl();
		console.log(runner.style.top);

})



function runnerControl()
{
runner.style.top="10vh";

setTimeout(()=>{
runner.style.top="20vh";
}, 350)
}

dLeft = 66;
let score = 0;

		(function dangerControl(){
	setInterval(()=>{
	dLeft--;
	danger.style.left = dLeft+"%";
 if(dLeft==-30){
			dLeft = 66;
 	score++;
 }
 
 
 
 
if (dLeft == 0 &&runner.style.top=="20vh") {
		alert("Game Over!. Score : "+score)
	console.log(dLeft);	
	score = 0;
	dLeft = 66;
	
}

document.getElementById('score').innerHTML= "Score: " + score;
		
	}, 10)})();