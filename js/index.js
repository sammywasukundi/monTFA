// boutons de reservation nairobi
function reservation1 (){
      
    document.querySelector(".btnReserver1").innerText = 'en attente...'; 
    document.querySelector("#btnAnnuler1").style.display = "inline-block";
    document.querySelector("#btnValider1").style.display = "inline-block";
}

function reservation2 (){
      
    document.querySelector(".btnReserver2").innerText = 'en attente...'; 
    document.querySelector("#btnAnnuler2").style.display = "inline-block";
    document.querySelector("#btnValider2").style.display = "inline-block";
}

function reservation3 (){
      //document.querySelector(".btnReserver").addEventListener('click', ()=>{        
        document.querySelector(".btnReserver3").innerText = 'en attente...'; 
        document.querySelector("#btnAnnuler3").style.display = "inline-block";
        document.querySelector("#btnValider3").style.display = "inline-block";
   // });
}

function reservation4 (){
      
      document.querySelector(".btnReserver4").innerText = 'en attente...'; 
      document.querySelector("#btnAnnuler4").style.display = "inline-block";
      document.querySelector("#btnValider4").style.display = "inline-block";
}
// fin des boutons de reservation nairobi

// debut des boutons de calculSejour nairobi

function calculSejour1(){

    document.querySelector(".btnReserver1").innerText = "Occupée";
    document.querySelector("#btnValider1").style.display = "none";
    document.querySelector('.btnReserver1').setAttribute("disabled", "");

    var d1 = document.getElementById("dated1").value;
    var d2 = document.getElementById("datef1").value;
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time/ (1000 * 60 * 60 * 24));
    var aPayer = 20 * days;
    document.getElementById('AreaNairobi').value="chambre 1 : " + "vous ferez "+ days + " jour(s) et  vous paierez " + aPayer + '$';
}

function calculSejour2(){

    document.querySelector(".btnReserver2").innerText = "Occupée";
    document.querySelector("#btnValider2").style.display = "none";

    var d1 = document.getElementById("dated2").value;
    var d2 = document.getElementById("datef2").value;
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time/ (1000 * 60 * 60 * 24));
    var aPayer = 20 * days;
    document.getElementById('AreaNairobi').value="chambre 2 : " + "vous ferez "+ days + " jour(s) et  vous paierez " + aPayer + '$';

    //document.getElementById('AreaNairobi').push();
  }

function calculSejour3(){

    document.querySelector(".btnReserver3").innerText = "Occupée";
    document.querySelector("#btnValider3").style.display = "none";

    var d1 = document.getElementById("dated3").value;
    var d2 = document.getElementById("datef3").value;
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time/ (1000 * 60 * 60 * 24));
    var aPayer = 20 * days;
    document.getElementById('AreaNairobi').value="chambre 3 : " + "vous ferez "+ days + " jour(s) et  vous paierez " + aPayer + '$';
}

function calculSejour4(){

    document.querySelector(".btnReserver4").innerText = "Occupée";
    document.querySelector("#btnValider4").style.display = "none";

    var d1 = document.getElementById("dated4").value;
    var d2 = document.getElementById("datef4").value;
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time/ (1000 * 60 * 60 * 24));
    var aPayer = 20 * days;
    document.getElementById('AreaNairobi').value="chambre 4 : " + "vous ferez "+ days + " jour(s) et  vous paierez " + aPayer + '$';
}
// fin des boutons de calculSejour nairobi


// boutons de reservation kinshasa
function reservation5(){
      
    document.querySelector(".btnReserver5").innerText = 'en attente...'; 
    document.querySelector("#btnAnnuler5").style.display = "inline-block";
    document.querySelector("#btnValider5").style.display = "inline-block";
}

function reservation6(){
      
    document.querySelector(".btnReserver6").innerText = 'en attente...'; 
    document.querySelector("#btnAnnuler6").style.display = "inline-block";
    document.querySelector("#btnValider6").style.display = "inline-block";
}

function reservation7(){      
        document.querySelector(".btnReserver7").innerText = 'en attente...'; 
        document.querySelector("#btnAnnuler7").style.display = "inline-block";
        document.querySelector("#btnValider7").style.display = "inline-block";
}

function reservation8(){
      
      document.querySelector(".btnReserver8").innerText = 'en attente...'; 
      document.querySelector("#btnAnnuler8").style.display = "inline-block";
      document.querySelector("#btnValider8").style.display = "inline-block";
}
// fin des boutons de reservation kinshasa

// debut des boutons de calculSejour kinshasa

function calculSejour5(){

    document.querySelector(".btnReserver5").innerText = "Occupée";
    document.querySelector("#btnValider5").style.display = "none";

    var d1 = document.getElementById("dated5").value;
    var d2 = document.getElementById("datef5").value;
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time/ (1000 * 60 * 60 * 24));
    var aPayer = 10 * days;
    document.getElementById('AreaKinshasa').value="chambre 5 : " + "vous ferez "+ days + " jour(s) et  vous paierez " + aPayer + '$';
}

function calculSejour6(){

    document.querySelector(".btnReserver6").innerText = "Occupée";
    document.querySelector("#btnValider6").style.display = "none";

    var d1 = document.getElementById("dated6").value;
    var d2 = document.getElementById("datef6").value;
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time/ (1000 * 60 * 60 * 24));
    var aPayer = 10 * days;
    document.getElementById('AreaKinshasa').value="chambre 6 : " + "vous ferez "+ days + " jour(s) et  vous paierez " + aPayer + '$';
}

function calculSejour7(){

    document.querySelector(".btnReserver7").innerText = "Occupée";
    document.querySelector("#btnValider7").style.display = "none";

    var d1 = document.getElementById("dated7").value;
    var d2 = document.getElementById("datef7").value;
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time/ (1000 * 60 * 60 * 24));
    var aPayer = 10 * days;
    document.getElementById('AreaKinshasa').value="chambre 7 : " + "vous ferez "+ days + " jour(s) et  vous paierez " + aPayer + '$';
}

function calculSejour8(){

    document.querySelector(".btnReserver8").innerText = "Occupée";
    document.querySelector("#btnValider8").style.display = "none";

    var d1 = document.getElementById("dated8").value;
    var d2 = document.getElementById("datef8").value;
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time/ (1000 * 60 * 60 * 24));
    var aPayer = 10 * days;
    document.getElementById('AreaKinshasa').value="chambre 8 : " + "vous ferez "+ days + " jour(s) et  vous paierez " + aPayer + '$';
}
// fin des boutons de calculSejour nairobi




// btn annuler pour toutes les chambres Nairobi et kinshasa

function annuler1(){
  document.getElementById('AreaNairobi').value =" ";
  document.querySelector(".btnReserver1").innerText = 'Réservez';
  document.querySelector('.btnReserver1').setAttribute("enabled", "enabled");
}
function annuler2(){
  document.getElementById('AreaNairobi').value =" ";
  document.querySelector(".btnReserver2").innerText = 'Réservez';
  document.querySelector('.btnReserver2').setAttribute("enabled", "enabled");
}
function annuler3(){
  document.getElementById('AreaNairobi').value =" ";
  document.querySelector(".btnReserver3").innerText = 'Réservez';
  document.querySelector('.btnReserver3').setAttribute("enabled", "enabled");
}
function annuler4(){
  document.getElementById('AreaNairobi').value =" ";
  document.querySelector(".btnReserver4").innerText = 'Réservez';
  document.querySelector('.btnReserver4').setAttribute("enabled", "enabled");
}
function annuler5(){
  document.getElementById('AreaKinshasa').value =" ";
  document.querySelector(".btnReserver5").innerText = 'Réservez';
  document.querySelector('.btnReserver5').setAttribute("enabled", "enabled");
}
function annuler6(){
  document.getElementById('AreaKinshasa').value =" ";
  document.querySelector(".btnReserver6").innerText = 'Réservez';
  document.querySelector('.btnReserver6').setAttribute("enabled", "enabled");
}
function annuler7(){
  document.getElementById('AreaKinshasa').value =" ";
  document.querySelector(".btnReserver7").innerText = 'Réservez';
  document.querySelector('.btnReserver7').setAttribute("enabled", "enabled");
}
function annuler8(){
  document.getElementById('AreaKinshasa').value =" ";
  document.querySelector(".btnReserver8").innerText = 'Réservez';
  document.querySelector('.btnReserver8').setAttribute("enabled", "enabled");
}

// btn annuler pour toutes les chambres Nairobi et kinshasa


function reservAutre(){
  document.querySelector("#btn-autres").style.display = "inline-block";
  document.querySelector("#btn-autres-clear").style.display = "inline-bloc";
}

const clicquer = () =>{

  const client = {
    nom:nom.value,
    date_arriver:date_arriver.value,
    date_depart:date_depart.value,
    Chambre:Chambre.value
  }

    localStorage.setItem("nom",JSON.stringify(client));
   
    var d1 = document.getElementById("date_arriver").value;
    var d2 = document.getElementById("date_depart").value;
    var nbreChambre = document.getElementById("Chambre").value;
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time/ (1000 * 60 * 60 * 24));
    var aPayer = nbreChambre * 7 * days;
    document.querySelector(".slides-div").style.display="none";
    //document.querySelector("#slide_1").innerHTML = "Occupée par " + nom.value + " qui fera " + days + " jours \n , il paiera " + aPayer + "$" ;
    alert(" chambre occupée par " + nom.value + " qui fera " + days + " jours \n , il paiera " + aPayer + "$" )
    document.querySelector("#btn-autres").style.display = "none";
}



// how to save datas in a simple file.txt

function saveDynamicDataToFile() {

  var userInput = document.getElementById("myText").value;

  var blob = new Blob([userInput], { type: "text/plain;charset=utf-8" });
  saveAs(blob, "s.txt");
}

//boutons pour enregistrer mes donnees dans un fichier .txt



function Enregistrer() {
  var user = document.getElementById('AreaNairobi').value;
  if(user != ""){
    var blob = new Blob([user], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "nairobi.txt");
  }
  else if(user == ""){
    
    alert("Veuillez faire une reservation");
  }
}

function Enregistrer1() {
  var user = document.getElementById('AreaKinshasa').value;
  if(user != ""){
    var blob = new Blob([user], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "kinshasa.txt");
  }
  else if(user == ""){
    
    alert("Veuillez faire une reservation");
  }
}



