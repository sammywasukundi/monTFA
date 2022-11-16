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

    
    document.querySelector("#btnValider1").style.display = "none";
    // document.querySelector('.btnReserver1').setAttribute("disabled", "");

    var n1 = document.getElementById("noun1").value;
    var d1 = document.getElementById("dated1").value;
    var d2 = document.getElementById("datef1").value;
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time/ (1000 * 60 * 60 * 24));
    var aPayer = 20 * days;
    if( n1 == ""){
      alert('Veuillez entrer votre nom');
    }
    else if(d1 == '' || d2 == ''){
      alert("Veuillez compléter toutes les cases ");  
      document.querySelector(".btnReserver1").innerText = "Réserver";      
    }
    else{
        document.getElementById('AreaNairobi').value +="Numéro de chambre : 1  \n" + "Nom : " + n1 + " \nDurée de séjour : "+ days +" jours" + " \nMontant à payer : " + aPayer + '$\n' +'\n';
        document.querySelector(".btnReserver1").style.display = "none";
        document.querySelector('#occuped1').innerText="chambre 1 Occupée";
      }
}

function calculSejour2(){

    
    document.querySelector("#btnValider2").style.display = "none";

    var n1 = document.getElementById("noun2").value;
    var d1 = document.getElementById("dated2").value;
    var d2 = document.getElementById("datef2").value;
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time/ (1000 * 60 * 60 * 24));
    var aPayer = 20 * days;
    if( n1 == ""){
      alert('Veuillez entrer votre nom');
      document.querySelector(".btnReserver2").innerText = "Réserver";
    }
    else if(d1 == '' || d2 == ''){
      alert("Veuillez compléter toutes les cases ");
      document.querySelector(".btnReserver2").innerText = "Réserver";        
    }
    else{ 
      document.getElementById('AreaNairobi').value +="Numéro de chambre : 2  \n" + "Nom : " + n1 + " \nDurée de séjour : "+ days +" jours" + " \nMontant à payer : " + aPayer + '$\n' +'\n';
      document.querySelector(".btnReserver2").style.display = "none";
      document.querySelector('#occuped2').innerText="chambre 2 Occupée";
    }
    //document.getElementById('AreaNairobi').push();
  }

function calculSejour3(){

    
    document.querySelector("#btnValider3").style.display = "none";

    var n1 = document.getElementById("noun3").value;
    var d1 = document.getElementById("dated3").value;
    var d2 = document.getElementById("datef3").value;
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time/ (1000 * 60 * 60 * 24));
    var aPayer = 20 * days;
    if( n1 == ""){
      alert('Veuillez entrer votre nom');
      document.querySelector(".btnReserver3").innerText = 'Réserver'; 
    }
    else if(d1 == '' || d2 == ''){
      alert("Veuillez compléter toutes les cases ");
      document.querySelector(".btnReserver3").innerText = 'Réserver';         
    }
    else{ 
      document.getElementById('AreaNairobi').value +="Numéro de chambre : 3  \n" + "Nom : " + n1 + " \nDurée de séjour : "+ days +" jours" + " \nMontant à payer : " + aPayer + '$\n' +'\n';
      document.querySelector(".btnReserver3").style.display = "none";
      document.querySelector('#occuped3').innerText="chambre 3 Occupée";
    }}

function calculSejour4(){

    document.querySelector("#btnValider4").style.display = "none";

    var n1 = document.getElementById("noun4").value;
    var d1 = document.getElementById("dated4").value;
    var d2 = document.getElementById("datef4").value;
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time/ (1000 * 60 * 60 * 24));
    var aPayer = 20 * days;
    if( n1 == ""){
      alert('Veuillez entrer votre nom');
      document.querySelector(".btnReserver4").innerText = 'Réserver'; 
    }
    else if(d1 == '' || d2 == ''){
      alert("Veuillez compléter toutes les cases ");
      document.querySelector(".btnReserver4").innerText = 'Réserver';         
    }
    else{ 
      document.getElementById('AreaNairobi').value +="Numéro de chambre : 2  \n" + "Nom : " + n1 + " \nDurée de séjour : "+ days +" jours" + " \nMontant à payer : " + aPayer + '$\n' +'\n';
      document.querySelector(".btnReserver4").style.display = "none";
      document.querySelector('#occuped4').innerText="chambre 4 Occupée";
    }}
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

    document.querySelector("#btnValider5").style.display = "none";

    var n1 = document.getElementById("noun5").value;
    var d1 = document.getElementById("dated5").value;
    var d2 = document.getElementById("datef5").value;
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time/ (1000 * 60 * 60 * 24));
    var aPayer = 10 * days;
    if( n1 == ""){
      alert('Veuillez entrer votre nom');
      document.querySelector(".btnReserver5").innerText = 'Réserver'; 
    }
    else if(d1 == '' || d2 == ''){
      alert("Veuillez compléter toutes les cases ");
      document.querySelector(".btnReserver5").innerText = 'Réserver';         
    }
    else{ 
      document.getElementById('AreaKinshasa').value +="Numéro de chambre : 5  \n" + "Nom : " + n1 + " \nDurée de séjour : "+ days +" jours" + " \nMontant à payer : " + aPayer + '$\n' +'\n';
      document.querySelector(".btnReserver5").style.display = "none";
      document.querySelector('#occuped5').innerText="chambre 5 Occupée";
    }}

function calculSejour6(){

    document.querySelector("#btnValider6").style.display = "none";

    var n1 = document.getElementById("noun6").value;
    var d1 = document.getElementById("dated6").value;
    var d2 = document.getElementById("datef6").value;
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time/ (1000 * 60 * 60 * 24));
    var aPayer = 10 * days;
    if( n1 == ""){
      alert('Veuillez entrer votre nom');
      document.querySelector(".btnReserver6").innerText = 'Réserver'; 
    }
    else if(d1 == '' || d2 == ''){
      alert("Veuillez compléter toutes les cases ");
      document.querySelector(".btnReserver6").innerText = 'Réserver';         
    }
    else{ 
      document.getElementById('AreaKinshasa').value +="Numéro de chambre : 6  \n" + "Nom : " + n1 + " \nDurée de séjour : "+ days +" jours" + " \nMontant à payer : " + aPayer + '$\n' +'\n';
      document.querySelector(".btnReserver6").style.display = "none";
      document.querySelector('#occuped6').innerText="chambre 6 Occupée";
    }}

function calculSejour7(){

    document.querySelector("#btnValider7").style.display = "none";

    var n1 = document.getElementById("noun7").value;
    var d1 = document.getElementById("dated7").value;
    var d2 = document.getElementById("datef7").value;
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time/ (1000 * 60 * 60 * 24));
    var aPayer = 10 * days;
    if( n1 == ""){
      alert('Veuillez entrer votre nom');
      document.querySelector(".btnReserver7").innerText = 'Réserver'; 
    }
    else if(d1 == '' || d2 == ''){
      alert("Veuillez compléter toutes les cases ");
      document.querySelector(".btnReserver7").innerText = 'Réserver';         
    }
    else{ 
      document.getElementById('AreaKinshasa').value +="Numéro de chambre : 7  \n" + "Nom : " + n1 + " \nDurée de séjour : "+ days +" jours" + " \nMontant à payer : " + aPayer + '$\n' +'\n';
      document.querySelector(".btnReserver7").style.display = "none";
      document.querySelector('#occuped7').innerText="chambre 7 Occupée";
    }}

function calculSejour8(){

    document.querySelector("#btnValider8").style.display = "none";

    var n1 = document.getElementById("noun8").value;
    var d1 = document.getElementById("dated8").value;
    var d2 = document.getElementById("datef8").value;
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time/ (1000 * 60 * 60 * 24));
    var aPayer = 10 * days;
    if( n1 == ""){
      alert('Veuillez entrer votre nom');
      document.querySelector(".btnReserver8").innerText = 'Réserver'; 
    }
    else if(d1 == '' || d2 == ''){
      alert("Veuillez compléter toutes les cases ");
      document.querySelector(".btnReserver8").innerText = 'Réserver';         
    }
    else{ 
      document.getElementById('AreaNairobi').value +="Numéro de chambre : 8  \n" + "Nom : " + n1 + " \nDurée de séjour : "+ days +" jours" + " \nMontant à payer : " + aPayer + '$\n' +'\n';
      document.querySelector(".btnReserver8").style.display = "none";
      document.querySelector('#occuped8').innerText="chambre 8 Occupée";
    }}
// fin des boutons de calculSejour nairobi




// btn annuler pour toutes les chambres Nairobi et kinshasa

function annuler1(){
  document.getElementById('AreaNairobi').value =" ";
  document.querySelector(".btnReserver1").innerText = 'Réservez';
  document.querySelector('#occuped1').innerText="chambre 1";
  document.querySelector(".btnReserver1").style.display="block";
  document.querySelector('#noun1').value = '';
  document.querySelector('#dated1').value = '';
  document.querySelector('#datef1').value = '';
}
function annuler2(){
  document.getElementById('AreaNairobi').value =" ";
  document.querySelector(".btnReserver2").innerText = 'Réservez';
  document.querySelector('#occuped2').innerText="chambre 2";
  document.querySelector(".btnReserver2").style.display="block";
  document.querySelector('#noun2').value = '';
  document.querySelector('#dated2').value = '';
  document.querySelector('#datef2').value = '';
}
function annuler3(){
  document.getElementById('AreaNairobi').value =" ";
  document.querySelector(".btnReserver3").innerText = 'Réservez';
  document.querySelector('#occuped3').innerText="chambre 3";
  document.querySelector(".btnReserver3").style.display="block";
  document.querySelector('#noun3').value = '';
  document.querySelector('#dated3').value = '';
  document.querySelector('#datef3').value = '';
}
function annuler4(){
  document.getElementById('AreaNairobi').value =" ";
  document.querySelector(".btnReserver4").innerText = 'Réservez';
  document.querySelector('#occuped4').innerText="chambre 4";
  document.querySelector(".btnReserver4").style.display="block";
  document.querySelector('#noun4').value = '';
  document.querySelector('#dated4').value = '';
  document.querySelector('#datef4').value = '';
}
function annuler5(){
  document.getElementById('AreaKinshasa').value =" ";
  document.querySelector(".btnReserver5").innerText = 'Réservez';
  document.querySelector('#occuped5').innerText="chambre 5";
  document.querySelector(".btnReserver5").style.display="block";
  document.querySelector('#noun5').value = '';
  document.querySelector('#dated5').value = '';
  document.querySelector('#datef5').value = '';
}
function annuler6(){
  document.getElementById('AreaKinshasa').value =" ";
  document.querySelector(".btnReserver6").innerText = 'Réservez';
  document.querySelector('#occuped6').innerText="chambre 6";
  document.querySelector(".btnReserver6").style.display="block";
  document.querySelector('#noun6').value = '';
  document.querySelector('#dated6').value = '';
  document.querySelector('#datef6').value = '';
}
function annuler7(){
  document.getElementById('AreaKinshasa').value =" ";
  document.querySelector(".btnReserver7").innerText = 'Réservez';
  document.querySelector('#occuped7').innerText="chambre 7";
  document.querySelector(".btnReserver7").style.display="block";
  document.querySelector('#noun7').value = '';
  document.querySelector('#dated7').value = '';
  document.querySelector('#datef7').value = '';
}
function annuler8(){
  document.getElementById('AreaKinshasa').value =" ";
  document.querySelector(".btnReserver8").innerText = 'Réservez';
  document.querySelector('#occuped8').innerText="chambre 8";
  document.querySelector(".btnReserver8").style.display="block";
  document.querySelector('#noun8').value = '';
  document.querySelector('#dated8').value = '';
  document.querySelector('#datef8').value = '';
}

// fin des btn annuler pour toutes les chambres Nairobi et kinshasa

//btn annuler pour tout les autres chambres

const Annuler = () =>{
  document.querySelector('#nom').value = '';
  document.querySelector('#date_arriver').value = '';
  document.querySelector('#date_depart').value = '';
  document.querySelector('#Chambre').value = '';
}


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
    document.querySelector(".slides-div").innerHTML="occuped";
    alert(" chambre occupée par " + nom.value + " qui fera " + days + " jours \n , il paiera " + aPayer + "$" )
    document.querySelector("#btn-autres").style.display = "none";
}

function clicquer1(){
  const client1 = {
    nom:nom.value,
    date_arriver:date_arriver.value,
    date_depart:date_depart.value,
    Chambre:Chambre.value
  }

    var d1 = document.getElementById("date_arriver").value;
    var d2 = document.getElementById("date_depart").value;
    var nbreChambre = document.getElementById("Chambre").value;
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time/ (1000 * 60 * 60 * 24));
    var aPayer = nbreChambre * 7 * days;
    document.querySelector(".slides-div").innerHTML="occuped";
    alert(" chambre occupée par " + nom.value + " qui fera " + days + " jours \n , il paiera " + aPayer + "$" )
    document.querySelector("#btn-autres").style.display = "none";

  var blob = new Blob([client1], { type: "text/plain;charset=utf-8"});
  saveAs(blob.setItem("nom",JSON.stringify(client)), "autres.txt");
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


// tout le javascript pour la cafeteria
var data=[]
const SaveCafeNourriture1 = () =>{

    let n1 = document.getElementById("nameClient").value;
    let d1 = document.getElementById("dateReservation").value;
    let checkboxes = document.getElementsByName('ptit_dej');
    for (let checkbox of checkboxes)
      {    
        if (checkbox.checked) {
          document.body.append(checkbox.value + ' ,' );
          data=checkbox.value
        }

      }
      
    if(document.getElementById('cochable1').checked === false)
        alert('Veuillez cochez une ou plusieurs case(s) pour votre petit déjeuner ')
    
    // if(document.getElementsByName('ptit_dej').checked === false){
    //   alert('Veuillez cochez une ou plusieurs case(s) pour votre petit déjeuner ')
    // }
    else if( n1 == ""){
        alert('Veuillez entrer votre nom');
    }
    else if(d1 == ''){
        alert("Veuillez compléter toutes les cases ");         
    }
    else{
          document.querySelector('#AreaCafeteria').value += data + "\nCatégorie : Pétit déjeuner  \n" + "Nom : " + n1 + " \nDate de Réservation : " + " \nMontant à payer : " +  '$\n' +'\n';
    }

}

const SaveCafeNourriture2 = () =>{

    let n1 = document.getElementById("nameClient1").value;
    let d1 = document.getElementById("dateReservation1").value;
    let checkboxes = document.getElementsByName('dej');
    for (let checkbox of checkboxes)
      {    
        if (checkbox.checked) {
          document.body.append(checkbox.value + ' ,' );
          data=checkbox.value
        }

      }
      
    if(document.getElementById('cochableDej1').checked === false)
        alert('Veuillez cochez une ou plusieurs case(s) pour votre petit déjeuner ')
    else if( n1 == " "){
        alert('Veuillez entrer votre nom');
    }
    else if(d1 == ''){
        alert("Veuillez compléter toutes les cases ");         
    }
    else{
          document.querySelector('#AreaCafeteria').value += data + "\nCatégorie : Pétit déjeuner  \n" + "Nom : " + n1 + " \nDate de Réservation : "+ d1 +" jours" + " \nMontant à payer : " +  '$\n' +'\n';
    }

}

const SaveCafeNourriture3 = () =>{

  let n1 = document.getElementById("nameClient2").value;
  let d1 = document.getElementById("dateReservation2").value;
  let checkboxes = document.getElementsByName('supper');
  for (let checkbox of checkboxes)
    {    
      if (checkbox.checked) {
        document.body.append(checkbox.value + ' ,' );
        data=checkbox.value
      }

    }
    
  if(document.getElementById('cochableSoup1').checked === false)
      alert('Veuillez cochez une ou plusieurs case(s) pour votre petit déjeuner ')
  else if( n1 == " "){
      alert('Veuillez entrer votre nom');
  }
  else if(d1 == ''){
      alert("Veuillez compléter toutes les cases ");         
  }
  else{
        document.querySelector('#AreaCafeteria').value += data + "\nCatégorie : Pétit déjeuner  \n" + "Nom : " + n1 + " \nDate de Réservation : "+ d1 +" jours" + " \nMontant à payer : " +  '$\n' +'\n';
  }

}



const annulerDej1 = () =>{
  document.getElementById("nameClient").value = ''
  document.getElementById("dateReservation").value = ''
  document.getElementById("AreaCafeteria").value = ''
  $(document).ready(function(){
    $("#btnAnnuler1").click(function(){
      $("#cochable1").prop("checked", false);
    });
  });
  $(document).ready(function(){
    $("#btnAnnuler1").click(function(){
      $("#cochable2").prop("checked", false);
    });
  });
  $(document).ready(function(){
    $("#btnAnnuler1").click(function(){
      $("#cochable3").prop("checked", false);
    });
  });
  $(document).ready(function(){
    $("#btnAnnuler1").click(function(){
      $("#cochable4").prop("checked", false);
    });
  });
  $(document).ready(function(){
    $("#btnAnnuler1").click(function(){
      $("#cochable5").prop("checked", false);
    });
  });
  $(document).ready(function(){
    $("#btnAnnuler1").click(function(){
      $("#cochable6").prop("checked", false);
    });
  });
}


const annulerDej2 = () =>{
  document.getElementById("nameClient1").value = ''
  document.getElementById("dateReservation1").value = ''
  document.getElementById("AreaCafeteria").value = ''
  $(document).ready(function(){
    $("#btnAnnuler2").click(function(){
      $("#cochableDej1").prop("checked", false);
    });
  });
  $(document).ready(function(){
    $("#btnAnnuler2").click(function(){
      $("#cochableDej2").prop("checked", false);
    });
  });
  $(document).ready(function(){
    $("#btnAnnuler2").click(function(){
      $("#cochableDej3").prop("checked", false);
    });
  });
  $(document).ready(function(){
    $("#btnAnnuler2").click(function(){
      $("#cochableDej4").prop("checked", false);
    });
  });
  $(document).ready(function(){
    $("#btnAnnuler2").click(function(){
      $("#cochableDej5").prop("checked", false);
    });
  });
  $(document).ready(function(){
    $("#btnAnnuler2").click(function(){
      $("#cochableDej6").prop("checked", false);
    });
  });
}


const annulerDej3 = () =>{
  document.getElementById("nameClient2").value = ''
  document.getElementById("dateReservation2").value = ''
  document.getElementById("AreaCafeteria").value = ''
  $(document).ready(function(){
    $("#btnAnnuler3").click(function(){
      $("#cochableSoup1").prop("checked", false);
    });
  });
  $(document).ready(function(){
    $("#btnAnnuler3").click(function(){
      $("#cochableSoup2").prop("checked", false);
    });
  });
  $(document).ready(function(){
    $("#btnAnnuler3").click(function(){
      $("#cochableSoup3").prop("checked", false);
    });
  });
  $(document).ready(function(){
    $("#btnAnnuler3").click(function(){
      $("#cochableSoup4").prop("checked", false);
    });
  });
  $(document).ready(function(){
    $("#btnAnnuler3").click(function(){
      $("#cochableSoup5").prop("checked", false);
    });
  });
  $(document).ready(function(){
    $("#btnAnnuler3").click(function(){
      $("#cochableSoup6").prop("checked", false);
    });
  });
}

const SaveInCaf = () => {
  var user = document.getElementById('AreaCafeteria').value;
  if(user != ""){
    var blob = new Blob([user], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "Cafétéria.txt");
  }
  else if(user == ""){
    
    alert("Veuillez faire une reservation");
  }
}




$(document).ready(function(){
  $(".cocher").click(function(){
    $("#monCheckbox").prop("checked", true);
  });
  $(".decocher").click(function(){
    $("#monCheckbox").prop("checked", false);
  });
});


