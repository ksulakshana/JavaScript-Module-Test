// localStorage.removeItem("computerscorevalue");
// localStorage.removeItem("userscorevalue");

var pc_score = document.getElementById("computerscorevalue").innerHTML;
var user_score = document.getElementById("userscorevalue").innerHTML;

var rulesbutton = document.getElementById("rules");
var userwinrulebutton = document.getElementById("userwinrulebutton");

var gamerule = document.getElementById("gamerules");
var gameruleclose = document.getElementById("closebox");

if(pc_score == 0 && user_score == 0)
    {
    if(localStorage.getItem("userscorevalue") !== null || localStorage.getItem("computerscorevalue") !== null)
        {
            var pc_score = parseInt(localStorage.getItem("computerscorevalue"));
            var user_score = parseInt(localStorage.getItem("userscorevalue"));
            localStorage.setItem("computerscorevalue", parseInt(pc_score));
            localStorage.setItem("userscorevalue", parseInt(user_score));
        }
    else{
        localStorage.setItem("computerscorevalue", parseInt(0));
        localStorage.setItem("userscorevalue", parseInt(0));
    }     
}

if (typeof(Storage) !== "undefined") {

    localStorage.setItem("computerscorevalue", parseInt(pc_score));
    localStorage.setItem("userscorevalue", parseInt(user_score));

    document.getElementById("computerscorevalue").innerHTML =  localStorage.getItem("computerscorevalue");
    document.getElementById("userscorevalue").innerHTML = localStorage.getItem("userscorevalue");

  } else {
    document.getElementById("computerscorevalue").innerHTML = "Sorry, your browser does not support Web Storage...";
  }

function userselected(value){
    var user_selected = value;

    var pc_selected_value = pcselected();

    if(user_selected == 'rock'){

        if(pc_selected_value == 'paper'){
            pc_score = parseInt(pc_score + 1);
            pcwin(user_selected,pc_selected_value);
        }
        else if(pc_selected_value == 'scissor'){
            user_score = parseInt(user_score + 1);
            userwin(user_selected,pc_selected_value);
        }
        else{
            resultstie(user_selected,pc_selected_value);
        }
    }else if(user_selected == 'paper'){
        if(pc_selected_value == 'paper'){
            resultstie(user_selected,pc_selected_value);
        }
        else if(pc_selected_value == 'scissor'){
            pc_score = parseInt(pc_score + 1);
            pcwin(user_selected,pc_selected_value);
        }
        else{
            user_score = parseInt(user_score + 1);
            userwin(user_selected,pc_selected_value);
        }
    }else{
        if(pc_selected_value == 'paper'){
            user_score = parseInt(user_score + 1);
            userwin(user_selected,pc_selected_value);
        }
        else if(pc_selected_value == 'scissor'){
            resultstie(user_selected,pc_selected_value);
        }
        else{
            pc_score = parseInt(pc_score + 1);
            pcwin(user_selected,pc_selected_value);
        }
    }

    localStorage.setItem("computerscorevalue", parseInt(pc_score));
    localStorage.setItem("userscorevalue", parseInt(user_score));
    document.getElementById("computerscorevalue").innerHTML =  localStorage.getItem("computerscorevalue");
    document.getElementById("userscorevalue").innerHTML = localStorage.getItem("userscorevalue");
}

 function pcselected(){
    var random_number = Math.floor(Math.random() * 3)+1;
    var pc_selection;
    switch(random_number){
        case 1: if(random_number ==1)
            pc_selection = 'rock';
            break;
        case 2:if(random_number ==2)
            pc_selection = 'paper';
            break;
        default:pc_selection = 'scissor';
            break;
    }
    return pc_selection;
}

// rulesbutton.addEventListener('click',()=>{
//     gamerule.style.display = "block";
// });

function gameruleopen()
{
    gamerule.style.display = "block";

}
gameruleclose.addEventListener('click',()=>{
    gamerule.style.display = "none";
});


function pcwin(user_selected_value,pc_selected_value){
    sessionStorage.setItem("userlost", user_selected_value);
    sessionStorage.setItem("pcwon", pc_selected_value);

    window.location.href = "/pcwin.html";
}

function userwin(user_selected_value,pc_selected_value){
    sessionStorage.setItem("userwon", user_selected_value);
    sessionStorage.setItem("pclost", pc_selected_value);

    window.location.href = "/userwin.html";
}

function  resultstie(user_selected_value,pc_selected_value){
    sessionStorage.setItem("usertie", user_selected_value);
    sessionStorage.setItem("pctie", pc_selected_value);

    window.location.href = "/tieup.html";
}

function loadwinnerinfo()
{
    var userdata_selection = sessionStorage.getItem("userlost");
    var pcdata_selection = sessionStorage.getItem("pcwon");

    if(userdata_selection == "rock"){
        document.getElementById('outeralignment').style.border = '16px solid #0074B6';
        document.getElementById('userpickedimg').src = 'resources/images/rockicon.png';
    }else if(userdata_selection == "paper"){
        document.getElementById('outeralignment').style.border = '16px solid #FFA943';
        document.getElementById('userpickedimg').src = 'resources/images/papericon.png';
    }else{    
        document.getElementById('outeralignment').style.border = '16px solid #BD00FF';
        document.getElementById('userpickedimg').src = 'resources/images/scissoricon.png';
    }

    if(pcdata_selection == "rock"){
        document.getElementById('ellipse2').style.border = '16px solid #0074B6';
        document.getElementById('pcwinimg').src = 'resources/images/rockicon.png';
    }else if(pcdata_selection == "paper"){
        document.getElementById('ellipse2').style.border = '16px solid #FFA943';
        document.getElementById('pcwinimg').src = 'resources/images/papericon.png';
    }else{
        document.getElementById('ellipse2').style.border = '16px solid #BD00FF';
        document.getElementById('pcwinimg').src = 'resources/images/scissoricon.png';    
    }
}

function loaduserwinnerinfo(){
    var userdata_selection = sessionStorage.getItem("userwon");
    var pcdata_selection = sessionStorage.getItem("pclost");

    if(userdata_selection == "rock"){
        document.getElementById('ellipse2').style.border = '16px solid #0074B6';
        document.getElementById('userwinimg').src = 'resources/images/rockicon.png';
    }else if(userdata_selection == "paper"){
        document.getElementById('ellipse2').style.border = '16px solid #FFA943';
        document.getElementById('userwinimg').src = 'resources/images/papericon.png';
    }else{    
        document.getElementById('ellipse2').style.border = '16px solid #BD00FF';
        document.getElementById('userwinimg').src = 'resources/images/scissoricon.png';  
    }

    if(pcdata_selection == "rock"){

        document.getElementById('outeralignment').style.border = '16px solid #0074B6';
        document.getElementById('pcpickedimg').src = 'resources/images/rockicon.png';
    }else if(pcdata_selection == "paper"){
        document.getElementById('outeralignment').style.border = '16px solid #FFA943';
        document.getElementById('pcpickedimg').src = 'resources/images/papericon.png';

    }else{
        document.getElementById('outeralignment').style.border = '16px solid #BD00FF';
        document.getElementById('pcpickedimg').src = 'resources/images/scissoricon.png';
  
    }
}

function loadtieinfo(){

    var userdata_selection = sessionStorage.getItem("usertie");
    var pcdata_selection = sessionStorage.getItem("pctie");

    if(userdata_selection == "rock"){
        document.getElementById('outeralignment1').style.border = '16px solid #0074B6';
        document.getElementById('userpickedimg').src = 'resources/images/rockicon.png';
    }else if(userdata_selection == "paper"){
        document.getElementById('outeralignment1').style.border = '16px solid #FFA943';
        document.getElementById('userpickedimg').src = 'resources/images/papericon.png';
    }else{    
        document.getElementById('outeralignment1').style.border = '16px solid #BD00FF';
        document.getElementById('userpickedimg').src = 'resources/images/scissoricon.png';  
    }

    if(pcdata_selection == "rock"){

        document.getElementById('outeralignment2').style.border = '16px solid #0074B6';
        document.getElementById('pcpickedimg').src = 'resources/images/rockicon.png';
    }else if(pcdata_selection == "paper"){
        document.getElementById('outeralignment2').style.border = '16px solid #FFA943';
        document.getElementById('pcpickedimg').src = 'resources/images/papericon.png';

    }else{
        document.getElementById('outeralignment2').style.border = '16px solid #BD00FF';
        document.getElementById('pcpickedimg').src = 'resources/images/scissoricon.png';
  
    }
}