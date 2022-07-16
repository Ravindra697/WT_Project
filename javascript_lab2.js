//first name
function first_fun(){
    var first_var=document.getElementById('first_n').value;
    let res1 = /^[a-zA-Z]+$/.test(first_var);
    if(first_var.length>=3 && res1==true){
        document.getElementById('first_n').style.border="1px solid black";
        document.getElementById('message1').innerHTML="";
        return true;
    }else{
        document.getElementById('first_n').style.border="1px solid red";
        document.getElementById('message1').innerHTML="Invalid first name!";
        return false;
    }
}
//middle name
function middle_fun(){
    var middle_var=document.getElementById('middle_n').value;
    let res3 = /^[a-zA-Z]+$/.test(middle_var);
    if(middle_var.length>=3 && res3==true){
        document.getElementById('middle_n').style.border="1px solid black";
        document.getElementById('message2').innerHTML="";
        return true;
    }else{
        document.getElementById('middle_n').style.border="1px solid red";
        document.getElementById('message2').innerHTML="Invalid middle name!";
        return false;
    }
}
//last name
function last_fun(){
    var last_var=document.getElementById('last_n').value;
    let res2 = /^[a-zA-Z]+$/.test(last_var);
    if(last_var.length>=3 && res2==true){
        document.getElementById('message3').innerHTML="";
        return true;
    }else{
        document.getElementById('message3').innerHTML="Invalid last name!";
        return false;
    }
}
//full name function
function full_name_fun(){
    firstvar=first_fun();
    middlevar=middle_fun();
    lastvar=last_fun();
    if(firstvar==true && middlevar==true && lastvar==true){
        var first_var=document.getElementById('first_n').value;
        var middle_var=document.getElementById('middle_n').value;
        var last_var=document.getElementById('last_n').value;
        var tot=first_var+""+middle_var+""+last_var;
        document.getElementById("full_n").value=tot;
    }
}
//phone number validation
function phone_fun(){
    var text4=document.getElementById('phone_n').value;
    var re = /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{3})$/;
    var re1=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let tot=re.test(text4);
    let tot1=re1.test(text4);
    if(tot==true || tot1==true){
        document.getElementById('phone_n').style.border="1px solid black";
        document.getElementById('message5').innerHTML="";
    }else{
        document.getElementById('phone_n').style.border="1px solid red";
        document.getElementById('message5').innerHTML="Invalid phone number";
    }
}
// check email validation
function checkEmail(){
    var input=document.getElementById('email_n').value;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var truee=re.test(input);
    if(truee==true){
        document.getElementById('email_n').style.border="1px solid black";
        document.getElementById('message6').innerHTML="";
    }
    else{
        document.getElementById('email_n').style.border="1px solid red";
        document.getElementById('message6').innerHTML="Invalid email address";
    }
}
// check password validation
function Passvalid(){
    var text5=document.getElementById('password_n').value;
   if(text5.length>=6){
    document.getElementById('password_n').style.border="1px solid black";
    document.getElementById('message7').innerHTML="";
   }else{
    document.getElementById('password_n').style.border="1px solid red";
    document.getElementById('message7').innerHTML="please enter valid passowrd";
   }
}
//caluclate age
function calculateAge(date) 
{
  const now = new Date();
  const diff = Math.abs(now - date );
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365)); 
  return age
}

var picker = new Pikaday({ 
  field: document.getElementById('birth_date') ,
  yearRange:[1900,2020],
  onSelect: function(date) {
  let age = calculateAge(date);
  document.getElementById('age').innerHTML = "age: "+age ;
  }                        
});
// show password
function Show(){
    document.getElementById("password").type="text";
    document.getElementById("eye").style.display="none";
    document.getElementById("noeye").style.display="inline"
}
//Hide password
function Hide(){
    document.getElementById("password").type="password";
    document.getElementById("eye").style.display="inline";
    document.getElementById("noeye").style.display="none";
}
//hobbies using checkbox
function checkbox_fun(){
    var c_box1=document.getElementById('check1').checked;
    var c_box2=document.getElementById('check2').checked;
    var c_box3=document.getElementById('check3').checked;
    var c_box4=document.getElementById('check4').checked;
    l=[c_box1,c_box2,c_box3,c_box4];
    var count=0;
    for(i=0;i<l.length;i++){
        if(l[i]==true){
            count=count+1;
        }
    }
    if(count>=2){
        document.getElementById('message9').innerHTML="";
    }else{
        document.getElementById('message9').innerHTML="Please select atleast 2 hobbies";
    }
}
//Address using textarea field 
function textareafun(){
    var text_a=document.getElementById('textarea_id').value;
    let res2 = /^[a-zA-Z]+$/.test(text_a);
    if(res2==true){
        document.getElementById('message10').value=text_a;
    }else{
        document.getElementById('message10').innerHTML="";
    }

}
//
function image_validation(){

}
//Reset function
function reset_button(){
    var reset_s=document.getElementById('reset_n').value;
    a=confirm("Are you sure you want to reset the text");
    if(a==true){
        document.getElementById('reset_n').type="reset";
    }
}
function check_box_validation(){
    var dom=document.getElementById('agree').checked;
    if(dom==true){
        document.getElementById('final_submition').type="submit";
    }
}