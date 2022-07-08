var div=document.getElementById('expDiv');
console.log(div);

function mouseDownHandler(e){
    console.log("mouseDown event triggered");
    e.target.style.transform="scale(1.2)";
    console.log(e.target);
}
function mouseUpHandler(e){
    console.log("mouseUp event triggered");
    e.target.style.transform='';
    console.log(e.target);
}
div.addEventListener('mousedown',mouseDownHandler);
div.addEventListener('et',mouseUpHandler);
//CREATING HTML ELEMENTS USING JS
//step1:create element.
var span=document.createElement('span');
//3.Append to the parent/container
div.appendChild(span);
//2.add attributes and properties.
span.innerText='A dynamic tag added';
span.style.color='red';
//delete html elements using js.
function clickHandler(){
    var heading=document.getElementById('heading');
heading.remove();
}
var btn=document.getElementById('delbtn');
btn.addEventListener('click',clickHandler);