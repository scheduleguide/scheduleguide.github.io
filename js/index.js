//Brain global divs:
var head1 = document.getElementById("head1");
var head2 = document.getElementById("head2");
var head3 = document.getElementById("head3");
var head4 = document.getElementById("head4");
var head5 = document.getElementById("head5");
var head6 = document.getElementById("head6");
var head7 = document.getElementById("head7");
var head8 = document.getElementById("head8");
var head9 = document.getElementById("head9");
var head10 = document.getElementById("head10");
var head11 = document.getElementById("head11");
var head12 = document.getElementById("head12");
var head13 = document.getElementById("head13");
var head14 = document.getElementById("head14");
//Cervical global divs:
var cs1 = document.getElementById("cs1");
var cs2 = document.getElementById("cs2");
var cs3 = document.getElementById("cs3");
var cs4 = document.getElementById("cs4");
var cs5 = document.getElementById("cs5");
var cs6 = document.getElementById("cs6");
var cs7 = document.getElementById("cs7");
var cs8 = document.getElementById("cs8");
var cs9 = document.getElementById("cs9");
var cs10 = document.getElementById("cs10");
//thoracic globals:
var ts1 = document.getElementById("ts1");
var ts2 = document.getElementById("ts2");
var ts4 = document.getElementById("ts4");
var ts5 = document.getElementById("ts5");
var ts6 = document.getElementById("ts6");
var ts7 = document.getElementById("ts7");
var ts8 = document.getElementById("ts8");
var ts9 = document.getElementById("ts9");
var ts10 = document.getElementById("ts10");
//lumbar globals:
var ls1 = document.getElementById("ls1");
var ls4 = document.getElementById("ls4");
var ls5 = document.getElementById("ls5");
var ls7 = document.getElementById("ls7");
var ls8 = document.getElementById("ls8");
var ls9 = document.getElementById("ls9");
var ls10 = document.getElementById("ls10");
//Soft tissue neck global divs:
var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var n3 = document.getElementById("n3");
var n4 = document.getElementById("n4");
var n5 = document.getElementById("n5");
var n6 = document.getElementById("n6");
var n7 = document.getElementById("n7");
var n8 = document.getElementById("n8");
var n9 = document.getElementById("n9");
var n10 = document.getElementById("n10");
var n11 = document.getElementById("n11");
var n12 = document.getElementById("n12");
var n13 = document.getElementById("n13");
//Shoulder global divs:
var sh1 = document.getElementById("sh1");
var sh2 = document.getElementById("sh2");
var sh3 = document.getElementById("sh3");
//Upper extremities global divs:
var ue1 = document.getElementById("ue1");
var ue2 = document.getElementById("ue2");
var ue3 = document.getElementById("ue3");
//Abdomen global divs:
var ab1 = document.getElementById("ab1");
var ab2 = document.getElementById("ab2");
var ab3 = document.getElementById("ab3");
var ab4 = document.getElementById("ab4");
var ab5 = document.getElementById("ab5");
var ab6 = document.getElementById("ab6");
var ab7 = document.getElementById("ab7");
var ab8 = document.getElementById("ab8");
var ab9 = document.getElementById("ab9");
var ab10 = document.getElementById("ab10");
var ab11 = document.getElementById("ab11");
var ab12 = document.getElementById("ab12");
//Pelvis global divs:
var pl1 = document.getElementById("pl1");
var pl2 = document.getElementById("pl2");
var pl3 = document.getElementById("pl3");
var pl4 = document.getElementById("pl4");
var pl5 = document.getElementById("pl5");
//Lower Extremity global divs:
var le1 = document.getElementById("le1");
var le2 = document.getElementById("le2");
var le3 = document.getElementById("le3");
var le4 = document.getElementById("le4");
var le5 = document.getElementById("le5");
var le6 = document.getElementById("le6");
var le7 = document.getElementById("le7");
//Misc global Divs:
var misc1 = document.getElementById("misc1");
var misc2 = document.getElementById("misc2");
var misc3 = document.getElementById("misc3");
var misc4 = document.getElementById("misc4");
var misc5 = document.getElementById("misc5");

//function showCoords(event) {
 //   var x = event.clientX;
 //   var y = event.clientY;
 //   var coords = "x: " + x + ", y: " + y;
 // document.getElementById("showme").innerHTML = coords;
//}

function checkall(){
    var x = document.querySelectorAll(".style1");
   var i;
   for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
}
}


function results1(target){
  target.style.display = "block";
  target.innerHTML = "<b>30 Minute time slot</b><br> - NON Contrast - <br>Order: MR<b>A</b> Brain without contrast";
}

function results2(target){
  target.style.display = "block";
  target.innerHTML = "MRI Brain without contrast <br> 30 Minute time slot<br>or<font color=lightblue>(if the doctor wants contrast)</font><br><font color=lightblue>MRI Brain <i>with & without</i> contrast 45 Minute time slot</font>";
}

function results3(target){
  target.style.display = "block";
  target.innerHTML = "45 minute time slot<br>Order: MRI Brain <b>AND</b> IAC with & without contrast<br>";
} 

function results4(target){
  target.style.display = "block";
  target.innerHTML = "45 minute time slot<br>Order: MRI Brain with and without contrast";
} 

function results5(target){
  target.style.display = "block";
  target.innerHTML = "1 hour time slot<br>Order: MRI Brain/PIT with and without contrast<br>CPT 70553";
} 

function results6(target){
  target.style.display = "block";
  target.innerHTML = "1 hour time slot<br>Order: MRI Brain with and without contrast<br><font color=lightblue>(The doctor may also be ordering Spine MRI's with this exam.)</font>";
} 

function results7(target){
  target.style.display = "block";
  target.innerHTML = "45 Minute time slot<br>MRI Brain with and without contrast<br><font color = lightblue>(The doctor might also be ordering MRI Orbits W/WO for this diagnosis.)</font>";
} 

function results8(target){
  target.style.display = "block";
  target.innerHTML = "30 Minute time slot<br>MRI Cervical Spine without contrast<br><font color=lightblue>(if the doctor wants contrast)<br>MRI Cervical spine <i>with & without</i> contrast 45 Minute time slot</font>";
} 

function results9(target){
  target.style.display = "block";
  target.innerHTML = "45 Minute time slot<br>MRI Cervical Spine With and Without Contrast";
} 

function results10(target){
  target.style.display = "block";
  target.innerHTML = "<font color = red>MRA Neck With and Without Contrast</font><br>1 Hour time slot";
} 

function results11(target){
  target.style.display = "block";
  target.innerHTML = "MRI Soft Tissue Neck With and Without Contrast<br>1 Hour Time Slot";
} 

function results12(target){
  target.style.display = "block";
  target.innerHTML = "45 Minute time slot<br> Order: MRI Brachial Plexus <br>With and Without Contrast";
} 

function results13(target){
  target.style.display = "block";
  target.innerHTML = "Neck pain (in the spine) and neck injuries are ordered as an MRI <font color = red>Cervical</font> Spine WO Contrast<br>30 Minute time slot";
} 

function results14(target){
    target.style.display = "block";
  target.innerHTML = "45 Minute time slot<br>MRI Thoracic Spine WO Contrast<br><font color = lightblue>or<br>(if the doctor is ordering contrast)1 hour time slot<br>MRI Thoracic Spine With and Without Contrast";
}

function results15(target){
    target.style.display = "block";
  target.innerHTML = "1 hour time slot<br>MRI Thoracic Spine With and Without Contrast";
}

function results16(target){
     target.style.display = "block";
  target.innerHTML = "30 Minute time slot<br>MRI Lumbar Spine WO Contrast<br><font color = lightblue>or<br>(if the doctor is ordering contrast)45 minute time slot<br>MRI Lumbar Spine With and Without Contrast"; 
}

function results17(target){
     target.style.display = "block";
  target.innerHTML = "45 minute time slot<br>MRI Lumbar Spine With and Without Contrast"; 
}

function results18(target){
     target.style.display = "block";
  target.innerHTML = "1 Hour Time slot<br>Order: MRI Abdomen With and Without Contrast"; 
}

function results19(target){
     target.style.display = "block";
  target.innerHTML = "1 Hour Time slot<br>Order: MRCP With and Without Contrast"; 
}

function results20(target){
     target.style.display = "block";
  target.innerHTML = "1 Hour Time slot<br>Order: MRE 'Enterography'  Abdomen With and Whithout Contrast"; 
}
// Pelvis
function results21(target){
     target.style.display = "block";
  target.innerHTML = "1 Hour Time slot<br>Order: MRI Pelvis With and Without Contrast"; 
}

function results22(target){
     target.style.display = "block";
  target.innerHTML = "45 Minute Time slot<br>Order: MRI Pelvis Without Contrast"; 
}

function results23(target){
     target.style.display = "block";
  target.innerHTML = "1 Hour Time Slot<br>Order: MRI Prostate With and Without Contrast"; 
}
//Shoulder
function results24(target){
     target.style.display = "block";
  target.innerHTML = "1 Hour Time slot<br>MRI Indirect Arthrogram<br><font color = red>Ask if this is an Direct or Indirect Arthrogram<br>(Direct Arthrograms include a Cat Scan.)</font>"; 
}

function results25(target){
     target.style.display = "block";
  target.innerHTML = "if not arthrogram:<br>30 Minute Time Slot<br>Order: MRI Shoulder Without Contrast"; 
}
//Upper Extrem
function results26(target){
     target.style.display = "block";
  target.innerHTML = "Most are 45 Minute Time Slot Non Contrast exams.<br> <b>Contact MRI if contrast is needed.</b>"
}
//lower extrem
function results103(target){
     target.style.display = "block";
  target.innerHTML = "45 Minute Time Slot<br>Order: MRI Ankle Without Contrast"; 
}

function results104(target){
     target.style.display = "block";
  target.innerHTML = "EDIT TOMORROW"; 
}
function results105(target){
     target.style.display = "block";
  target.innerHTML = "45 Minute Time Slot<br>MRI Foot Without Contrast<br><font color = lightblue>If doctor wants contrast<br>1 Hour Time Slot<br>MRI Foot With and Without Contrast</font>"; 
}
//Upper Extrem Divs
function resultsElbow(target){
     target.style.display = "block";
  target.innerHTML = "45 Minute Time slot<br>MRI Elbow Without Contrast<br><font color = lightblue>1 hour if with and without contrast.</font>"; 
}

function resultsForearm(target){
     target.style.display = "block";
  target.innerHTML = "45 Minute Time slot<br>MRI Forearm Without Contrast<br><font color = lightblue>1 hour if with and without contrast.</font>"; 
}

function resultsWrist(target){
     target.style.display = "block";
  target.innerHTML = "45 Minute Time slot<br>MRI Wrist Without Contrast<br><font color = lightblue>1 hour if with and without contrast.</font>"; 
}
//Lower Extrem Divs

function resultsAnkle(target){
     target.style.display = "block";
  target.innerHTML = "30 Minute Time slot<br>MRI Ankle Without Contrast<br><font color = lightblue>45 Minute time slot if with and without contrast.</font>"; 
}

function resultsFemur(target){
     target.style.display = "block";
  target.innerHTML = "45 MInute Time slot<br>MRI Femur Without Contrast<br><font color = lightblue>1 hour if with and without contrast.</font>"; 
}

function resultsFoot(target){
     target.style.display = "block";
  target.innerHTML = "45 Minute Time slot<br>MRI Foot Without Contrast<br><font color = lightblue>1 hour if with and without contrast.</font>"; 
}

function resultsHips(target){
     target.style.display = "block";
  target.innerHTML = "45 Minute Time slot<br>MRI Hips Without Contrast<br><font color = lightblue> if with and without contrast.</font>"; 
}

function resultsThigh(target){
     target.style.display = "block";
  target.innerHTML = "45 Minute Time slot<br>MRI Thigh Without Contrast<br><font color = lightblue>1 hour if with and without contrast.</font>"; 
}

function resultsTibFib(target){
     target.style.display = "block";
  target.innerHTML = "45 Minute time slot<br>MRI Tib/Fib Without Contrast<br><font color = lightblue>1 hour if with and without contrast.</font>"; 
}












//Head Divs
function prep1(){
  checkall();
  results1(head1);  
}

function prep2(){
  checkall();
  results3(head2);
}

function prep3(){
  checkall();
  results7(head3);
}

function prep4(){
  checkall();
  results2(head4);
}

function prep5(){
  checkall();
  results2(head5);
}

function prep6(){
  checkall();
  results3(head6);
}

function prep7(){
  checkall();
  results2(head7);
}

function prep8(){
  checkall();
  results2(head8);
}

function prep9(){
  checkall();
  results5(head9);
}

function prep10(){
  checkall();
  results3(head10);
}

function prep11(){
  checkall();
  results6(head11);
}

function prep12(){
  checkall();
  results5(head12);
}

function prep13(){
  checkall();
  results4(head13);
}

function prep14(){
  checkall();
  results2(head14);
}
//C Spine Divs:
function prep15(){
 checkall();
 results8(cs1);
}

function prep16(){
  checkall();
  results8(cs2);
}

function prep17(){
  checkall();
  results8(cs3);
}

function prep18(){
  checkall();
  results8(cs4);
}

function prep19(){
  checkall();
  results8(cs5);
}

function prep20(){
  checkall();
  results9(cs6);
}

function prep21(){
  checkall();
  results8(cs7);
}

function prep22(){
    checkall();
  results8(cs8);
}

function prep23(){
    checkall();
  results8(cs9);
}

function prep24(){
    checkall();
  results8(cs10);
}
//Soft Tissue Neck Divs
function prep25(){
      checkall();
  results10(n1);
}

function prep26(){
      checkall();
  results12(n2);
}

function prep27(){
      checkall();
  results11(n3);
}

function prep28(){
      checkall();
  results13(n4);
}

function prep29(){
      checkall();
  results11(n5);
}

function prep30(){
      checkall();
  results11(n6);
}

function prep31(){
      checkall();
  results13(n7);
}

function prep32(){
      checkall();
  results11(n8);
}

function prep33(){
      checkall();
  results11(n9);
}

function prep34(){
      checkall();
  results11(n10);
}

function prep35(){
      checkall();
  results11(n11);
}
function prep36(){
      checkall();
  results12(n12);
}
function prep37(){
      checkall();
  results11(n13);
}
//thoracic methods
function prep38(){
      checkall();
  results14(ts1);
}

function prep39(){
      checkall();
  results15(ts2);
}

function prep41(){
      checkall();
  results14(ts4);
}

function prep42(){
      checkall();
  results14(ts5);
}
function prep43(){
      checkall();
  results14(ts6);
}
function prep44(){
      checkall();
  results14(ts7);
}
function prep45(){
      checkall();
  results14(ts8);
}
function prep46(){
      checkall();
  results14(ts9);
}
function prep47(){
      checkall();
  results14(ts10);
}
function prep48(){
      checkall();
  results16(ls1);
}
function prep51(){
      checkall();
  results16(ls4);
}
function prep51(){
      checkall();
  results16(ls4);
}
function prep52(){
  checkall();
  results16(ls5);  
}

function prep49(){
  checkall();
  results17(ls2);
}

function prep54(){
  checkall();
  results16(ls7);
}

function prep55(){
  checkall();
  results16(ls8);
}

function prep56(){
  checkall();
  results16(ls9);
}

function prep57(){
  checkall();
  results16(ls10);
}

function prep68(){
  checkall();
  results18(ab1);
}

function prep69(){
  checkall();
  results18(ab2);
}

function prep70(){
  checkall();
  results19(ab3);
}

function prep71(){
  checkall();
  results18(ab4);
}

function prep72(){
    checkall();
  results20(ab5);
}

function prep73(){
    checkall();
  results19(ab6);
}

function prep74(){
    checkall();
  results18(ab7);
}

function prep75(){
      checkall();
  results18(ab8);
}

function prep76(){
      checkall();
  results18(ab9);
}

function prep77(){
      checkall();
  results18(ab10);
}

function prep78(){
      checkall();
  results19(ab11);
}

function prep79(){
      checkall();
  results18(ab12);
}

function prep80(){
      checkall();
  results21(pl1);
}

function prep81(){
      checkall();
  results22(pl2);
}

function prep82(){
      checkall();
  results21(pl3);
}

function prep83(){
      checkall();
  results22(pl4);
}

function prep84(){
      checkall();
  results23(pl5);
}
//shoulder divs
function prep85(){
      checkall();
  results24(sh1);
}
function prep86(){
      checkall();
  results25(sh2);
}
function prep87(){
      checkall();
  results24(sh3);
}
//Upper Extrem Divs
function prepElbow(){
      checkall();
  resultsElbow(ue1);
}
function prepForearm(){
      checkall();
  resultsForearm(ue2);
}
function prepWrist(){
      checkall();
  resultsWrist(ue3);
}
function prepAnkle(){
      checkall();
  resultsAnkle(le1);
}
function prepFoot(){
      checkall();
  resultsFoot(le3);
}
function prepFemur(){
      checkall();
  resultsFemur(le4);
}
function prepHips(){
      checkall();
  resultsHips(le5);
}
function prepThigh(){
      checkall();
  resultsThigh(le6);
}
function prepTibFib(){
      checkall();
  resultsTibFib(le7);
}
function prep97(){
      checkall();
  results11(n13);
}
function prep98(){
      checkall();
  results11(n13);
}
function prep99(){
      checkall();
  results11(n13);
}
function prep100(){
      checkall();
  results11(n13);
}
function prep101(){
      checkall();
  results11(n13);
}
function prep102(){
      checkall();
  results11(n13);
}
function prep103(){
      checkall();
  results11(n13);
}
function prep104(){
      checkall();
  results11(n13);
}
function prep105(){
      checkall();
  results11(n13);
}
function prep106(){
      checkall();
  results11(n13);
}
function prep107(){
      checkall();
  results11(n13);
}
function prep108(){
      checkall();
  results11(n13);
}
function prep109(){
      checkall();
  results11(n13);
}
function prep110(){
      checkall();
  results11(n13);
}
function prep111(){
      checkall();
  results11(n13);
}
function prep113(){
      checkall();
  results11(n13);
}
function prep114(){
      checkall();
  results11(n13);
}
function prep115(){
      checkall();
  results11(n13);
}
function prep116(){
      checkall();
  results11(n13);
}
function prep117(){
      checkall();
  results11(n13);
}
function prep118(){
      checkall();
  results11(n13);
}
function prep119(){
      checkall();
  results11(n13);
}
function prep120(){
      checkall();
  results11(n13);
}
function prep121(){
      checkall();
  results11(n13);
}
function prep122(){
      checkall();
  results11(n13);
}
function prep123(){
      checkall();
  results11(n13);
}



      var canvas = document.getElementById('can1');
      var context = canvas.getContext('2d');
      var imageObj = new Image();
      imageObj.onload = function() {
      context.drawImage(imageObj, 0, 0, 650,450, 0, 0, 280, 150);
      };
      imageObj.src = 'https://scontent-iad3-1.cdninstagram.com/vp/fd10957d89aa831a1cbae3d189b410f9/5BB27FBF/t51.2885-15/s640x640/sh0.08/e35/26871157_1117860255016879_3069302497236484096_n.jpg';
     


function displayit(){
  var x = document.getElementById('can1');
  if (x.style.visibility = "hidden");{
  x.style.visibility = "visible";
   context.fillStyle = "white";
  context.font = "20px Arial";
  context.fillText("meow :)", 195, 130); 
  }
}