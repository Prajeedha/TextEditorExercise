/**
//  * DONE: Update the text in the "Formatted Text" section as a user types in the textarea
//  * DONE: TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
//  * DONE: Add an .underline class to "Formatted Text" when Underline button is clicked
//  * DONE: Toggle the align style for "Formatted Text" when the appropriate button is clicked
//  */
// /**
//  * Update the output text as a user types in the textarea
//  * HINT: Use the onkeydown function inside HTML
//  */
// function updateText(){
//   // CODE GOES HERE
//  // console.log("working");
// let text =document.getElementById('text-input').value;
// document.getElementById('text-output').innerText=text;
// }
// /**
//  * Toggle the bold class for the output text
//  * HINT: Use the onclick function insite HTML
//  * HINT: Look into using this keyword
//  * HINT: Use the classList property
//  * HINT: Toggle .active class for the button
//  */
// function makeBold(elem){
//   //CODE GOES HERE
//  elem.classList.toggle('active');
//  document.getElementById('text-output').classList.toggle('bold');
// }
// /**
//  * Toggle the italic class for the output text
//  */
// function makeItalic(elem){
//   elem.classList.toggle('active');
//   document.getElementById('text-output').classList.toggle('italic');
// }
// /**
//  * Toggle the underline class for the output text
//  * HINT: Toggle the .active class for the button
//  * HINT: Use the classList property
//  * HINT: Use contains, remove, and add functions
//  */
// function makeUnderline(elem){
//   //CODE GOES HERE
//   elem.classList.toggle('active');
//   let formattedText=document.getElementById('text-output');
//   if(formattedText.classList.contains('underline'))
//  {
//   (formattedText.classList.remove('underline'));
//  }else{
//   (formattedText.classList.add('underline'));
// }
// }
// /**
//  * Toggle the style textAlign attribute
//  * Toggle the active state for the align butttons
//  * HINT: Use the style property of the element
//  * HINT: Make sure to untoggle the active state for all other align buttons
//  */
// function alignText(elem, alignType){
// // CODE GOES HERE
// elem.classList.toggle('active');
// //console.log(alignType);
// document.getElementById('text-output').style.textAlign=alignType;
// let buttonList=document.getElementsByClassName('align');
// for(let i=0 ; i<buttonList.length ; i++)
// {
//   buttonList[i].classList.remove('active');
// }
//  elem.classList.add('active');
//  }

function updateText(){
  let text=document.getElementById('text-input').value;
  document.getElementById('text-output').innerText=text;
}

function makeBold(elem){
elem.classList.toggle('active');
document.getElementById('text-output').classList.toggle('bold');
}
function makeItalic(elem){
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('italic');
}
function makeUnderline(elem){
  elem.classList.toggle('active');
  let formattedText=document.getElementById('text-output');
  if(formattedText.classList.contains('underline')){
    formattedText.classList.remove('underline');
  }else{
    formattedText.classList.add('underline');
  }
}
function alignText(elem,alignType){

document.getElementById('text-output').style.textAlign=alignType;
let btns=document.getElementsByClassName('align');
for(let i=0;i<btns.length;i++){
  btns[i].classList.remove('active');
}
elem.classList.add('active');
}

fruits=['apple','strawberry','banana','kiwi']
// for (fruit of fruits){
//   console.log(fruit);
// }
// newfruit=fruits.forEach((fruit)=>
// {
//   console.log(fruit);
//   return fruit;
// })
// console.log(newfruit);
// newfruit=fruits.map((fruit)=>
// {
//   console.log(fruit);
//   return `${fruit} modified`;
// })
// console.log(newfruit);

// newfruit=fruits.map((fruit)=>
// {
//   console.log(fruit);
//   return fruit;
// }).filter((value)=>{
//  if(value =="apple"){
//    return false;
//  }else{
//    return true;
//  }
// })

// console.log(newfruit);

// let fullName={
//    firstName: 'Prajeedha',
//    lastName:'Eappen'
// }

// let {firstName,lastName}=fullName;
// console.log(fullName);

// let user=[
//   {firstName:'prajeedha',
//   lastName:'Eappen'},(user)=>{
//     console.log('I set the user',user);
//   }
//   ]

//   let [newUser,setUser]=user;
//   console.log(user);
//   setUser({firstName:'cool',lastName:'stuff'});

const p=new Promise((resolve,reject)=>
 {
   setTimeout(() => {
     let a=1+1;
   if(a===3){
   resolve("this is the correct response");
   }
   else{
     reject("something went wrong");
   }
  }, 5000);
 })

 p.then((response)=>{
   console.log('this is the reponse')
   console.log(response);
 }).catch((error)=>{
   console.log('there is an error');
   console.log(error)
 })
