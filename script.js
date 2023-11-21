// Challenge 1
function pageLoad(){
  const users = document.getElementById("user");

  users.innerHTML='pranava'
};

// Challenge 2
function changeColor(){
 var colors=document.getElementById('btn-click');
  colors.style.backgroundColor="black";
  colors.style.color="white";
}

// Challenge 3
const button = document.getElementById('build-button');
function makesentence() {
  var a = document.getElementById('noun').value;
  var b = document.getElementById('verb').value;
  var c = document.getElementById('adverb').value;
  var d = a + ' '+ b + ' '  + c;
  document.getElementById('statement').innerHTML = d;
}
button.onclick=makesentence;

// Challenge 4
const grandparent = document.getElementById('grandparent');
grandparent.addEventListener('click', (e) =>{
  console.log(grandparent);
});
const parent = document.getElementById('parent');
parent.addEventListener('click', (e)=>{
  console.log(parent);
});
const child = document.getElementById('child');
child.addEventListener('click', (e)=>{
  console.log(child);
});

grandparent.addEventListener('click',(e)=>{
  console.log('Grandparent clicked');
},
{
  capture: true,
});

parent.addEventListener('click',(e)=>{
  console.log('Parent clicked');
},{
  capture: true,
});

child.addEventListener('click',(e)=>{
  console.log("Child clicked");
},{
   capture: true,
});


// Challenge 5
const shirt = document.getElementById('shirts');
shirt.addEventListener('click',(e)=>{
  console.log("shirts");
});

const pant = document.getElementById('pants');
pant.addEventListener('click',(e)=>{
  console.log("pants");
});

const blazer = document.getElementById('blazers');
blazer.addEventListener('click',(e)=>{
  console.log("blazers");
});


