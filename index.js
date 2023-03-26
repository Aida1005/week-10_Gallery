// Task #1

const myFunction = () => console.log ('Я учу JavaScript!');
myFunction ();



//Task #2
let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
offset = offset + 405;
if (offset > 810) {
    offset = 0;
}
sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function(){
offset = offset - 405;
if (offset < 0) {
    offset = 810;
}
sliderLine.style.left = -offset + 'px';
});



