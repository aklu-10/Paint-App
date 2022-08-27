let painting=false;

window.addEventListener("resize",windowResized);

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
  
  if(innerWidth>1000)
  {
		if(_("#container").style.display==="block")
			location.reload();
  }  	
}

function setup()
{
	let canvas=createCanvas(innerWidth,innerHeight);
	canvas.parent("canvas-wrapper");
	background(255);
}

function _(selector)
{
	return document.querySelector(selector);
}


window.onload=()=>
{
		canvas.style.cursor="url('pen.png'),auto";

	setup();	
	_("#canvas-wrapper").addEventListener("mousedown",startSketch);	
	_("#canvas-wrapper").addEventListener("mousemove",draw);	
	_("#canvas-wrapper").addEventListener("mouseup",stopSketch);

	_("#canvas-wrapper").addEventListener("touchstart",startSketch);	
	_("#canvas-wrapper").addEventListener("touchmove",draw);	
	_("#canvas-wrapper").addEventListener("touchend",stopSketch);

}
_("#pen-size").addEventListener("change",function()
{
	_("#size-num").innerHTML=_("#pen-size").value;
})

_("#reset").addEventListener("click",function()
{
	background(255);

})

_("#save").addEventListener("click",function()
{
	saveCanvas(canvas,"sketch","jpg");
})

function startSketch()
{
	painting=true;
}

function stopSketch()
{
	painting=false;
}

function draw(e)
{	
	if(!painting) return
	let size=Number(_("#pen-size").value);
	let color=_("#pen-color").value;
	let pentype=_("#pencil").checked?"pencil":"brush";
	fill(color);
	stroke(color);
	strokeWeight(size);
	strokeCap(ROUND);
	
	if(pentype=="pencil")
	{	
		line(pmouseX,pmouseY+15,mouseX,mouseY+15);
	}
	else
	{
		ellipse(mouseX,mouseY+15,size,size);

	}
}

_("#pencil").onclick=()=>
{	

	_("#penciltool").classList.add("active");
	_("#brushtool").classList.remove("active");
	canvas.style.cursor="url('pen.png'),auto";

}

_("#brush").onclick=()=>
{
	_("#brushtool").classList.add("active");
	_("#penciltool").classList.remove("active");
	canvas.style.cursor="url('brush.png'),auto";

}

_("#menu").onclick=()=>
{
		let dsmode=document.querySelector("#container").style.display;

		dsmode=dsmode==="" || dsmode==="none"?"block":"none";
		
		document.querySelector("#container").style.width=dsmode;

}

