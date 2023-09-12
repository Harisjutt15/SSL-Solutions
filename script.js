console.log('its working');

// document.getElementById("JOIN").onmouseover(function() {
//     alert("test");
//     console.log('HELLO');
// })

// var boundary = document.getElementById('H');
// var mouseOverFunction = function () {
//     // this.style.color = 'black'; // your colour change
//     console.log('HELLO')
//     // alert("hello")
//     document.getElementById('W').style.color='white'
//     document.getElementById('K').style.color='white'

// };
// boundary.onmouseover = mouseOverFunction;

const box1 = document.getElementById('H1');

// 👇️ Change text color on mouseover
box1.addEventListener('mouseover', function handleMouseOver() {
  box1.style.color = 'red';
  document.getElementById('W1').style.color='white';
document.getElementById('K1').style.color='white';
 document.getElementById('ICONG1').style.color='white';
});

// 👇️ Change text color back on mouseout
box1.addEventListener('mouseout', function handleMouseOut() {
  box1.style.color = 'black';
  document.getElementById('W1').style.color='black'
    document.getElementById('K1').style.color='BLACK';
    document.getElementById('ICONG1').style.color='black';
});


// ---------------------------------------------------------------

const box2 = document.getElementById('H2');

// 👇️ Change text color on mouseover
box2.addEventListener('mouseover', function handleMouseOver() {
  box2.style.color = 'red';
  document.getElementById('W2').style.color='white';
document.getElementById('K2').style.color='white';
 document.getElementById('ICONG2').style.color='white';
});

// 👇️ Change text color back on mouseout
box2.addEventListener('mouseout', function handleMouseOut() {
  box2.style.color = 'black';
  document.getElementById('W2').style.color='black'
    document.getElementById('K2').style.color='BLACK';
    document.getElementById('ICONG2').style.color='black';
});

// --------------------------------------------
const box3 = document.getElementById('H3');

// 👇️ Change text color on mouseover
box3.addEventListener('mouseover', function handleMouseOver() {
//   box3.style.border = '1px grey';
  document.getElementById('W3').style.color='white';
document.getElementById('K3').style.color='white';
 document.getElementById('ICONG3').style.color='white';


 
});

// 👇️ Change text color back on mouseout
box3.addEventListener('mouseout', function handleMouseOut() {
    // box3.style.border = '1px solid black';
  document.getElementById('W3').style.color='black'
    document.getElementById('K3').style.color='BLACK';
    document.getElementById('ICONG3').style.color='black';
});