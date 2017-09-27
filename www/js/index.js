 var x = document.getElementsByTagName('li');
 var i;
for ( i = 0; i < x.length; i++) {
  //copy this line saka paste sa baba note palitan ang x[i] ng list
  var span = document.createElement("span");
  span.className = "close";
  var node = document.createTextNode("\u00d7");
  span.appendChild(node);
  x[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
//copy this line sa baba pinaka baba no changes
for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var a = this.parentElement;
    a.style.display = "none";
  }
}

function task(){
  var inputs = document.getElementById("does").value;
  var list = document.createElement("li");
  var ilista = document.createTextNode(inputs);
  list.appendChild(ilista)
  if (inputs === "") {
    alert("KARGAAN MO");
  }
  else{
    document.getElementById("myul").appendChild(list);
  }
  document.getElementById("does").value = "";

  var span = document.createElement("span");
  var node = document.createTextNode("\u00d7");
 span.className = "close";
  span.appendChild(node);
  list.appendChild(span);

  for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var a = this.parentElement;
    a.style.display = "none";
  }
}

}
