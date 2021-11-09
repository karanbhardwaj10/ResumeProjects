// let change=document.getElementById('para1');
// setInterval(function()
// { change.innerHTML='welcome'; 
// }, 3000);
// setInterval(function()
// { change.innerHTML='now go check the website'; 
// }, 4000);
// $('p').html("this is jQuery");
// $('a').on('click',function(){
//     alert('this takes you to w3schools');
// });
// $('label').on('click',function(){
//     $('h1').css('color','white');
//     $('body').css('background-color','black');
    
// })
// var colors = ['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick', 'crimson','#553D67','#FBEEC1','#2C3531'];

// var box = $("#box");

// $("button").click(function (e) {
//     box.append('<div class="ball" style="background-color: ' + colors[Math.floor(Math.random() * 15)] + '"></div>');
// });
var userlogin=true;
 var promisetest= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(userlogin){
            resolve();
        }
        else{
            reject(); 
        }
    },1000);
 });
 promisetest.then(()=>{
     console.log("userlogin");
 }).catch(()=>{
     console.log("notlogedin")
 })
