var myNodelist=document.getElementsByTagName("li");
var i;
for (i=0;i<myNodelist.length;i++) {
  var span = document.createElement("SPAN");//ctre a span close buttton
  var txt=document.createTextNode("\u00D7");// Create a text node with '×' character
  span.className="close";//create a class "close" for span
  span.appendChild(txt);// Append the text node to the <span>
  myNodelist[i].appendChild(span);//append span to li
}
// Click on a close button to hide the current list item
var close=document.getElementsByClassName("close");
var i;
for (i=0;i<close.length;i++) {
  close[i].onclick=function() { //assigns a function to the onclick event of each element in the close collection.
    var div=this.parentElement; //accesses the parent element of the clicked close button, which is typically the <li> 
    //element in the context of a list.
    div.style.display="none";
  }
}
// Add a "checked" symbol when clicking on a list item
var list=document.querySelector('ul'); //selects the first <ul> element in the document.
list.addEventListener('click', function(ev) { //adds a click event listener to the <ul> element.
    //The event listener function will execute whenever a click event occurs within the <ul>, including clicks on its child elements.
    if (ev.target.tagName==='li') { //ev.target refers to the element that was clicked.ev.target.tagName === 'LI' checks if the clicked element is an <li> element.
    ev.target.classList.toggle('checked');
  }
}, false);
// Create a new list item when clicking on the "Add" button
function newElement() {
  var li=document.createElement("li");  // Create a new <li> element
  var inputValue=document.getElementById("toDo").value; // Get the value from the input field with ID "toDo"
  var t=document.createTextNode(inputValue); // Create a text node with the input value
  li.appendChild(t); // Append the text node to the <li> element
  if (inputValue==='') { // Check if the input value is empty
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("toDo").value="";  // Clear the input field
  var span = document.createElement("SPAN"); // Create a new <span> element to act as the close button
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span); // Append the <span> (close button) to the <li>
  alert("Added successfully"); 
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
     var div = this.parentElement;
      div.style.display = "none";
    }
  }
}