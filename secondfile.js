/*var obj_array=[];
function Computer() {
var first= document.getElementById("Full").value;
var obj={}
obj.Full_name="first";

var second = document.getElementById("Birth").value;
obj.Date_of_Birth="second";

var third = document.getElementById("Email").value;
obj.Email="third";

var forth = document.getElementById("Mobile").value;
obj.Mobile_Number="forth";

var fifth = document.getElementById("Adar").value;
obj.Adar_Number="fifth";

var six = document.getElementById("Year").value;
obj.Year_of_Pass="six";

var seven = document.getElementById("College").value;
obj.College_Name="seven";

var eight = document.getElementById("Address").value;
obj.Address="eight";

var nine = document.getElementById("Persantage").value;
obj.Parsantage="nine";

var ten = document.getElementById("City").value;
obj.City="ten";

var Eleven = document.getElementById("State").value;
obj.State="Eleven";

var twell = document.getElementById("Zip").value;
obj.Zip_Code="twell";

console.log('json+++++++++++++++++++',JSON.stringify(obj));
obj_array.unshift(obj);
let row = ``;  

for(a= 0; obj_array.length > a; a++){
    console.log(`+++++++${a}`);
    console.log('=======',obj_array[a]);

    row += `<tr>
    <td>${a+1}</td>
    <td>${obj_array[a].first}</td>
    <td>${obj_array[a].second}</td>
    <td>${obj_array[a].third}</td>
    <td>${obj_array[a].forth}</td>
    <td>${obj_array[a].fifth}</td>
    <td>${obj_array[a].six}</td>
    <td>${obj_array[a].seven}</td>
    <td>${obj_array[a].eight}</td>
    <td>${obj_array[a].nine}</td>
    <td>${obj_array[a].ten}</td>
    <td>${obj_array[a].Eleven}</td>
</tr>`;
}
//console.log("row",row)
document.getElementById("gbody").innerHTML = row;
} */

var list1=[];
var list2=[];
var list3=[];
var list4=[];
var list5=[];
var list6=[];
var list7=[];
var list8=[];
var list9=[];
var list10=[];
var list11=[];
var list12=[];
var n=1;
var x=0;
 function Computer(){
 var AddRown = document.getElementById("tables");
 var NewRow = AddRown.inserRow(n);

 list1[x]=document.getElementById("Full").value;
 list2[x]=document.getElementById("Birth").value;
 list3[x]=document.getElementById("Email").value;
 list4[x]=document.getElementById("Mobile").value;
 list5[x]=document.getElementById("Adar").value;
 list6[x]=document.getElementById("Year").value;
 list7[x]=document.getElementById("College").value;
 list8[x]=document.getElementById("Address").value;
 list9[x]=document.getElementById("Persantage").value;
 list10[x]=document.getElementById("City").value;
 list11[x]=document.getElementById("State").value;
 list12[x]=document.getElementById("Zip").value;

 var cel1 = NewRow.insertcel1(0);
 var cel2 = NewRow.insertcel1(1);
 var cel3 = NewRow.insertcel1(2);
 var cel4 = NewRow.insertcel1(3);
 var cel5 = NewRow.insertcel1(4);
 var cel6 = NewRow.insertcel1(5);
 var cel7 = NewRow.insertcel1(6);
 var cel8 = NewRow.insertcel1(7);
 var cel9 = NewRow.insertcel1(8);
 var cel10 = NewRow.insertcel1(9);
 var cel11 = NewRow.insertcel1(10);
 var cel12= NewRow.insertcel1(11);
 

 cel1.innerHTML = list1[x];
 cel2.innerHTML = list2[x];
 cel3.innerHTML = list3[x];
 cel4.innerHTML = list4[x];
 cel5.innerHTML = list5[x];
 cel6.innerHTML = list6[x];
 cel7.innerHTML = list7[x];
 cel8.innerHTML = list8[x];
 cel9.innerHTML = list9[x];
 cel10.innerHTML = list10[x];
 cel11.innerHTML = list11[x];
 cel12.innerHTML = list12[x];

 n++;
 x++;
 }




