// ==============================
//       Characters and places
// ==============================

const hobbits = [
  'Frodo Baggins',
  'Samwise "Sam" Gamgee',
  'Meriadoc "Merry" Brandybuck',
  'Peregrin "Pippin" Took'
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const baddies = [
  'Sauron',
  'Saruman',
  'The Uruk-hai',
  'Orcs'
];

const lands = [
  'the-shire',
  'rivendell',
  'mordor'
];


// ====================================
//           Chapters
// ====================================

function makeMiddleEarth() {
  console.log('Trying to make middle earth.');
  // create a section tag with an id of middle-earth
  let middleEarth = document.createElement('section');
  // console.log(middleEarth);
  middleEarth.setAttribute('id', 'middle-earth');
  // add each land to the section as article tags-- try using a loop
  document.body.appendChild(middleEarth);

  for (let i = 0; i < lands.length; i++) {
    // console.log(lands[i]);
    let place = document.createElement('article');
    // console.log(place);
    // assign the id of the corresponding article tag as the name of the land
    place.setAttribute('id', lands[i]);
    // console.log(place);
    // inside each article tag include an h1 with the name of the land
    middleEarth.appendChild(place);
    let nameOfLand = document.createElement('h1');
    // console.log(nameOfLand);
    nameOfLand.innerHTML = lands[i];
    // console.log(nameOfLand);
    place.appendChild(nameOfLand);
  }
  // append the section to the body of the DOM with: document.body.appendChild( // variable name )
}

let shireHobbits = document.createElement('ul');

function makeHobbits() {
  console.log('Make hobbits');
  // display an unordered list of hobbits in the shire
  // give each hobbit a class of "hobbit"
  for (let i = 0; i < hobbits.length; i++) {
    let listHobbits = document.createElement('li');
    listHobbits.setAttribute('class', "hobbit");
    // list the hobbits alphabetically.  Maybe use the .sort() method.
    hobbits.sort();
    listHobbits.innerHTML = hobbits[i];
    shireHobbits.appendChild(listHobbits);
   document.getElementById('the-shire').appendChild(shireHobbits); 
  }
  console.log(shireHobbits);
 }

let secrets = document.createElement('div')

function keepItSecretKeepItSafe() {
  console.log('Can you keep it secret and keep it safe?')
  // create an empty div with an id of 'the-ring' and innerHTML of "The ring"
  secrets.setAttribute('id', 'the ring'); 
  secrets.innerHTML = "The ring";
  // add the ring as a child of Frodo
document.getElementsByClassName('hobbit')[0].appendChild(secrets);
console.log(secrets);
}

let shireBaddies = document.createElement('ul');

function makeBaddies() {
  console.log('Find the bad guys')
  // display an unordered list of baddies in Mordor
  for (let i = 0; i < baddies.length; i++) {
    let listBaddies = document.createElement('li');
    // give each of the baddies a class of "baddy"
    listBaddies.setAttribute('class', "baddy");
    baddies.sort();
    listBaddies.innerHTML = baddies[i];
    shireBaddies.appendChild(listBaddies);
   document.getElementById('mordor').appendChild(shireBaddies); 
  }
  console.log(shireBaddies);
 }

let besideM = document.createElement('aside');
let buddyM = document.createElement('ul');

function makeBuddies() {
  console.log('Find my buddies')
  // create an aside tag and append it below mordor
  // display an unordered list of buddies in the aside
   for (let i = 0; i < buddies.length; i++) {
    let listBuddies = document.createElement('li');
    // give each of the baddies a class of "buddy"
    listBuddies.setAttribute('class', "buddy");
    buddies.sort();
    listBuddies.innerHTML = buddies[i];
    buddyM.appendChild(listBuddies);
}
besideM.appendChild(buddyM);
  document.body.appendChild(besideM);
  console.log(besideM);
}


function leaveTheShire() {
  console.log('Exit the shire')
  // grab the hobbits and move them to Rivendell
document.getElementById('rivendell').appendChild(shireHobbits);
 console.log(shireHobbits); 
  }

function beautifulStranger() {
  console.log('The most beautiful stranger you have ever seen')
  // change the buddy 'Strider' node to "Aragorn"
  let newName = document.getElementsByClassName('buddy')[4];
  newName.innerHTML = 'Aragorn';
  console.log(newName);
}

function forgeTheFellowShip() {
  console.log('The fellowship commences')
  // move the hobbits and the buddies to Rivendell
  document.getElementById('rivendell').appendChild(buddyM);
  console.log(buddyM);
  console.log(shireHobbits);
  // create a new div called 'the-fellowship'
  let fellows = document.createElement('div');
  fellows.setAttribute('id', 'the-fellowship');
document.getElementById('rivendell').appendChild(shireHobbits);
  // add an h1 with the text 'The Fellowship' to this new div
  let heading = document.createElement('h1');
  heading.innerHTML = 'The Fellowship';
  console.log(fellows);
  fellows.appendChild(heading);
  document.getElementById('rivendell').appendChild(fellows);
  // add each hobbit and buddy one at a time to 'the-fellowship'
  let fellowFrodo = document.getElementsByClassName('hobbit')[0];
  let fellowSam = document.getElementsByClassName('hobbit')[3];
  let fellowP = document.getElementsByClassName('hobbit')[2];
  let fellowM = document.getElementsByClassName('hobbit')[1];
   fellows.appendChild(fellowFrodo);
   alert('Frodo has joined your party');
  fellows.appendChild(fellowM);
  alert('Merry has joined your party');
  fellows.appendChild(fellowP);
  alert('Pippin has joined your party');
  fellows.appendChild(fellowSam);
  alert('Sam has joined your party');
  fellows.appendChild(buddyM);
  alert('Boromir has joined your party');
  alert('Gandalf the Grey has joined your party');
  alert('Gimli has joined your party');
  alert('Legolas has joined your party');
  alert('Aragorn has joined your party');

  

  // after each character is added make an alert that they have joined your party
  console.log(fellows);
}

function theBalrog() {
  console.log('What is a balrog ...')
  // change the inner HTML of the 'Gandalf' node to 'Gandalf the White'
  let oldName = document.getElementsByClassName('buddy')[1];
  oldName.innerHTML = 'Gandalf the White';
  // add a class "the-white" to this element
  oldName.setAttribute('class', 'the-white');
  console.log(oldName);
  // in the style.css file, add a css rule for the class "the-white"
  // have a white background and a grey border
}

function hornOfGondor() {
  console.log('What is a horn of gondor...')
  // pop up an alert that the horn of gondor has been blown
  alert('Horn of Gondor has ben blown');
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  document.getElementsByClassName('buddy')[0].style.textDecoration = "line-through";
  // Remove the Uruk-Hai from the Baddies on the page
  let badBoy = document.getElementsByClassName('baddy')[3];
  shireBaddies.removeChild(badBoy);
  console.log(shireBaddies);
}



function itsDangerousToGoAlone(){
  console.log('Never go alone because it is dangerous')
  // take Frodo and Sam out of the fellowship and move them to Mordor
  let moveFrodo = document.getElementsByClassName('hobbit')[0];
  let moveSam = document.getElementsByClassName('hobbit')[3];
document.getElementById('mordor').appendChild(moveFrodo); 
 document.getElementById('mordor').appendChild(moveSam);
  // add a div with an id of 'mount-doom' to Mordor
  let soonDoom = document.createElement('div');
  soonDoom.setAttribute('id','mount-doom')
    let heading2 = document.createElement('h1');
  heading2.innerHTML = 'Mount Doom';
  soonDoom.appendChild(heading2);
  document.getElementById('mordor').appendChild(soonDoom); 
    console.log(soonDoom);  
}
let thePrecious = document.createElement('div');

function weWantsIt() {
  console.log('We gets what we wants')
  // Create a div with an id of 'gollum' and add it to Mordor
  thePrecious.setAttribute('id','gollum');
  let heading3 = document.createElement('h1');
  heading3.innerHTML = 'Gollum';
  thePrecious.appendChild(heading3);
  document.getElementById('mordor').appendChild(thePrecious);
  console.log(thePrecious);
  // Remove the ring from Frodo and give it to Gollum
 let stolen = document.getElementById('gollum').appendChild(secrets);
  // Create a condition (Maybe an IF statement) that changes the font-color of the ring div to Red if
  // it is a child of the div with the id 'gollum'
  let colored = document.getElementById('gollum').lastChild.style.color = "red";
  // Move Gollum into Mount Doom
  document.getElementById('mount-doom').appendChild(thePrecious);
}

function thereAndBackAgain() {
  console.log('Through middle earth and back again')
  // remove Gollum and the Ring from the DOM
  document.getElementById('mount-doom').removeChild(thePrecious);
  // remove all the baddies from the DOM
  document.getElementById('mordor').removeChild(shireBaddies); 
  // Move all the hobbits back to the shire
let lostFrodo = document.getElementsByClassName('hobbit')[2];
  let lostSam = document.getElementsByClassName('hobbit')[3];
  let lostM = document.getElementsByClassName('hobbit')[0];
  let lostP = document.getElementsByClassName('hobbit')[1];
document.getElementById('the-shire').appendChild(shireHobbits);
document.getElementById('the-shire').appendChild(lostSam);
document.getElementById('the-shire').appendChild(lostFrodo);
document.getElementById('the-shire').appendChild(lostM);
document.getElementById('the-shire').appendChild(lostP);
console.log(shireHobbits);
}

// =================================
// What to do when the page is ready
// =================================

window.onload = function() {
  document.querySelector('#b1').addEventListener('click', makeMiddleEarth);
  document.querySelector('#b2').addEventListener('click', makeHobbits);
  document.querySelector('#b3').addEventListener('click', keepItSecretKeepItSafe);
  document.querySelector('#b4').addEventListener('click', makeBaddies);
  document.querySelector('#b5').addEventListener('click', makeBuddies);
  document.querySelector('#b6').addEventListener('click', leaveTheShire);
  document.querySelector('#b7').addEventListener('click', beautifulStranger);
  document.querySelector('#b8').addEventListener('click', forgeTheFellowShip);
  document.querySelector('#b9').addEventListener('click', theBalrog);
  document.querySelector('#b10').addEventListener('click', hornOfGondor);
  document.querySelector('#b11').addEventListener('click', itsDangerousToGoAlone);
  document.querySelector('#b12').addEventListener('click', weWantsIt);
  document.querySelector('#b13').addEventListener('click', thereAndBackAgain);

};