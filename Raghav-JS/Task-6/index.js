let list=[];
// let list2=[];
// let list3=[];
// let list4=[];
let n=1;
let x=0;
function AddRow(){
  let addrown=document.getElementById("show");
  let newrow=addrown.insertRow(n)

  list[0]=document.getElementById("fname").value;
  list[1]=document.getElementById("lname").value;
  list[2]=document.getElementById("email").value;
  list[3]=document.getElementById("age").value;


  let cell1=newrow.insertCell(0);
  let cell2=newrow.insertCell(1);
  let cell3=newrow.insertCell(2);
  let cell4=newrow.insertCell(3);

  cell1.innerHTML=list[0];
  cell2.innerHTML=list[1];
  cell3.innerHTML=list[2];
  cell4.innerHTML=list[3];
  
  n++;
  document.getElementById("fname").value="";
  document.getElementById("lname").value="";
  document.getElementById("email").value="";
  document.getElementById("age").value="";

}