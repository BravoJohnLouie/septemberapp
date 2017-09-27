try{
    function ewan(){
/* document.getElementById("add-task").addEventListener("click", function(){*/
    var input= document.getElementById('item-title').value;
    var input= document.getElementById('item-content').value;
/*document.getElementById("display-title").innerHTML=input;
document.getElementById("display-description").innerHTML=input;*/
var list = document.createElement("p");
var combo = document.createElement("title");
combo.setAttribute('type','radio');
combo.setAttribute('id','radio');

    list.setAttribute("class","Task");
    list.setAttribute("id","newtask");
    list.innerText = input;

    var div = document.getElementById('initial');
    div.appendChild(list);
    div.appendChild(combo);
}
}

 function deletetask(){

    var combo = document.getElementById("button");

    var input = document.getElementById("newtask");
    var div = document.getElementById('initial');

    if (combo.checked){
    div.removeChild(value);
    div.removeChild(combo);
    }
    else{
        console.log("Error!");
    }
}
 /*document.getElementById("add-task").addEventListener("click", function(){
    var input= document.getElementById('item-content').value;
document.getElementById("display-description").innerHTML=input;
});*/

}
catch(e){
    alert('aliwa');
}
