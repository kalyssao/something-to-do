//close button - create and append

var myNodeList = document.getElementsByTagName("LI");
var i;
for (i=0; i<myNodeList.length; i++) {
	var span = document.createElement("SPAN");   //telling the code to create a span element
	var txt = document.createTextNode("\u00D7");  //telling it to create a text node containing the actual 'x'
	span.className = "close";
	span.appendChild(txt);
	myNodeList[i].appendChild(span);
}

//what should happen when close is clicked
var close = document.getElementsByClassName("close");  //check the class name close & put members in an array
var i;
//iterate through the array and define a function for 
for (i=0; i<close.length; i++) {
	close[i].onclick = function() {
		var div = this.parentElement;
		div.style.display = "none";
	}
}

// add a checked symbol when an item is clicked on
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
	if (ev.target.tagName === 'LI') {
		ev.target.classList.toggle('checked');
	}
}, false);

//create new items when add is pressed
function newElement() {
	var li = document.createElement("li");
	var inputValue = document.getElementById("myInput").value;
	var t = document.createTextNode(inputValue)
	li.appendChild(t);

	if (inputValue === '') {
		alert("You must write something!");
	} else {
		document.getElementById("myUL").appendChild(li);
	}
	document.getElementById("myInput").value = "";

	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);

	for (i=0; i< close.length; i++) {
		close[i].onclick = function() {
			var div = this.parentElement;
			div.style.display = "none";
		}
	}
}