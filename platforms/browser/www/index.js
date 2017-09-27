try{
  
  document.getElementById("task").addEventListener("click", function(){
   
     var inputs = document.getElementById("does").value;
     var list = document.createElement("li");
    var ilista = document.createTextNode(inputs);
    list.appendChild(ilista);
    /*document.body.appendChild(list);*/
    if(inputs === ""){
      alert('kargaan mo');
    }else{
      document.getElementById("myul").appendChild(list);
    }
document.getElementById("does").value="";



    
    
  });

}
catch(e){
  alert('aliwa');
}  
/*  document.getElementById("task").addEventListener("click", function(){
   
     var inputs = document.getElementById("does").value;
     var list = document.createElement("li");
    var ilista = document.createTextNode(inputs);
    list.appendChild(ilista);
    document.body.appendChild(list);
    if(inputs === " "){
      alert('kargaan mo')
    }
    


    
    
  });*/