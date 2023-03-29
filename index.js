// Task #1

const myFunction = () => console.log ('Я учу JavaScript!');
myFunction ();

let result = function() {
    return'Я учу JavaScript!';
}()
console.log(result);


//Task #2
let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
offset = offset + 405 > 810 ? 0 : offset + 405;

sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function(){
offset = offset - 405 < 0 ? 810 : offset - 405;

sliderLine.style.left = -offset + 'px';
});



//Task #3 with star

let year = 2023;
if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
    console.log ('високосный');
}   
else {
    console.log('не високосный');
}


