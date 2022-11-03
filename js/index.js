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
    document.querySelector("#btnAnnuler1").style.display = "none";
    document.querySelector("#btnValider1").style.display = "none";

    var d1 = document.getElementById("dated1").value;
    var d2 = document.getElementById("datef1").value;
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time/ (1000 * 60 * 60 * 24));
    var aPayer = 20 * days;
    document.getElementById("output1").innerHTML = "vous ferez "+ days + " jour(s) \n et  vous paierez " + aPayer + '$';
}

function calculSejour2(){

    document.querySelector(".btnReserver2").innerText = "Occupée";
    document.querySelector("#btnAnnuler2").style.display = "none";
    document.querySelector("#btnValider2").style.display = "none";

    var d1 = document.getElementById("dated2").value;
    var d2 = document.getElementById("datef2").value;
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time/ (1000 * 60 * 60 * 24));
    var aPayer = 20 * days;
    document.getElementById("output2").innerHTML = "vous ferez "+ days + " jour(s) \n et  vous paierez " + aPayer + '$';
}

function calculSejour3(){

    document.querySelector(".btnReserver3").innerText = "Occupée";
    document.querySelector("#btnAnnuler3").style.display = "none";
    document.querySelector("#btnValider3").style.display = "none";

    var d1 = document.getElementById("dated3").value;
    var d2 = document.getElementById("datef3").value;
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time/ (1000 * 60 * 60 * 24));
    var aPayer = 20 * days;
    document.getElementById("output3").innerHTML = "vous ferez "+ days + " jour(s) \n et  vous paierez " + aPayer + '$';
}

function calculSejour4(){

    document.querySelector(".btnReserver4").innerText = "Occupée";
    document.querySelector("#btnAnnuler4").style.display = "none";
    document.querySelector("#btnValider4").style.display = "none";

    var d1 = document.getElementById("dated4").value;
    var d2 = document.getElementById("datef4").value;
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time/ (1000 * 60 * 60 * 24));
    var aPayer = 20 * days;
    document.getElementById("output4").innerHTML = "vous ferez "+ days + " jour(s) \n et  vous paierez " + aPayer + '$';
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
    document.querySelector("#btnAnnuler5").style.display = "none";
    document.querySelector("#btnValider5").style.display = "none";

    var d1 = document.getElementById("dated5").value;
    var d2 = document.getElementById("datef5").value;
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time/ (1000 * 60 * 60 * 24));
    var aPayer = 10 * days;
    document.getElementById("output5").innerHTML = "vous ferez "+ days + " jour(s) \n et  vous paierez " + aPayer + '$';
}

function calculSejour6(){

    document.querySelector(".btnReserver6").innerText = "Occupée";
    document.querySelector("#btnAnnuler6").style.display = "none";
    document.querySelector("#btnValider6").style.display = "none";

    var d1 = document.getElementById("dated6").value;
    var d2 = document.getElementById("datef6").value;
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time/ (1000 * 60 * 60 * 24));
    var aPayer = 10 * days;
    document.getElementById("output6").innerHTML = "vous ferez "+ days + " jour(s) \n et  vous paierez " + aPayer + '$';
}

function calculSejour7(){

    document.querySelector(".btnReserver7").innerText = "Occupée";
    document.querySelector("#btnAnnuler7").style.display = "none";
    document.querySelector("#btnValider7").style.display = "none";

    var d1 = document.getElementById("dated7").value;
    var d2 = document.getElementById("datef7").value;
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time/ (1000 * 60 * 60 * 24));
    var aPayer = 10 * days;
    document.getElementById("output7").innerHTML = "vous ferez "+ days + " jour(s) \n et  vous paierez " + aPayer + '$';
}

function calculSejour8(){

    document.querySelector(".btnReserver8").innerText = "Occupée";
    document.querySelector("#btnAnnuler8").style.display = "none";
    document.querySelector("#btnValider8").style.display = "none";

    var d1 = document.getElementById("dated8").value;
    var d2 = document.getElementById("datef8").value;
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time/ (1000 * 60 * 60 * 24));
    var aPayer = 10 * days;
    document.getElementById("output8").innerHTML = "vous ferez "+ days + " jour(s) \n et  vous paierez " + aPayer + '$';
}
// fin des boutons de calculSejour nairobi




// btn annuler

/*
const commands = []
const input = document.querySelector('#dated1')

function saveCommand(e) {
  commands.push({
    // the action is also saved for implementing redo, which
    // is not implemented in this example.
    action: { type: 'add', key: e.key, index: dated1.selectionStart },
    inverse: { type: 'remove', index: dated1.selectionStart }
  })
}

function undo() {
  let value = input.value.split('')
  const lastCommand = commands.pop()
 
  if (!lastCommand) return
    
  switch (lastCommand.inverse.type) {
    case 'remove':
      value.splice(lastCommand.inverse.index, 1)
      break;      
  }
  
  input.value = value.join('')
}
  


let inpute = document.querySelector(".input");
let buttone = document.querySelector(".button");
button.disabled = true;
input.addEventListener("change", stateHandle);
function stateHandle() {
  if (document.querySelector(".input").value === " ") {
    button.disabled = true; 
  } else {
    button.disabled = false;
  }
}

*/
function reservAutre(){
  document.querySelector("#btn-autres").style.display = "inline-block";
  document.querySelector("#btn-autres-clear").style.display = "inline-bloc";
}

const clicquer = () =>{
  localStorage.setItem("nom",nom.value);

  document.querySelector("#slide-1").innerHTML = "Occupée par " + nom.value;
}

const clear = () =>{
  localStorage.clear();
  document.location.reload();
  
}