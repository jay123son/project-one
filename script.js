
window.alert(" Welcome to Guess the Rapper! For this game you will see a rappers real name and try to guess their stagename. Once you have guessed what their stage name is, click the 'Reveal' button to reveal the answer. Then click the 'Next' button to get a new rapper. Good Luck!");

// first i have to list out the boxes of names and the buttons

const real = document.querySelector('.Real');
const stage = document.querySelector('.Stage');
const revealbutton = document.querySelector('.Reveal');
const nextbutton = document.querySelector('.Next');

// make sure to input all the data of the rappers real names and stage names

let person = {
   
    'Rakim Athelaston Mayers': 'A$AP Rocky',
   'Jacques Bermon Webster II': 'Travis Scott',
    'Tyler Gregory Okonma': 'Tyler, the Creator',
    'Daystar Shemuel Shua Peterson': 'Tory Lanez',
    'Christopher Edwin Breaux': 'Frank Ocean',
    'Aubrey Drake Graham': 'Drake',
    'Abel Makkonen Tesfaye': 'The Weeknd',
    'Christopher Maurice Brown': 'Chris Brown',
    'Jermaine Lamarr Cole': 'J Cole',
    'Sergio Giavanni Kitchens': 'Gunna',
}

let data = Object.entries(person)

let personName = ''

let count = 1




function getRandomPerson(){
    personName = data[Math.floor(Math.random() * data.length)]
    real.innerHTML = `<h3>${personName[0]}</h3>`;
    stage.innerHTML = `<h3>${personName[1]}</h3>`;
    count++
}

getRandomPerson()

revealbutton.addEventListener('click', function(){
    stage.style.display = 'block';
});

nextbutton.addEventListener('click', function(){
    stage.style.display = 'none';
    if (count=== 10){
        real.innerHTML = `<h3>Game</h3>`;
        stage.innerHTML = `<h3>Over</h3>`;
        stage.style.display = 'block';


    } else{
        getRandomPerson()
    }
   
});

// end game section-----------------------------------------------

// var time_limit = 30;

// var time_out = setInterval(() => {

//   if(time_limit == 0) {
    
//     $('#timer').html('Game Over');
        
//   } else {
    
//     if(time_limit < 10) {
//       time_limit = 0 + '' + time_limit;
//     }
    
//     $('#timer').html('00:' + time_limit);
    
//     time_limit -= 1;
    
//   }

// }, 1000);


// end game section ----------------------------------------------

// add elements needed for a score bord

let add = document.querySelector('.add');
let remove = document.querySelector('.sub');

let int = document.querySelector('.number');

let integer = 0;

add.addEventListener('click', function(){
    if (integer < count){
    integer += 1;
    int.innerHTML = `${integer} of ${count}`;
 }
})

remove.addEventListener('click', function(){
    if (integer > -count){
    integer -= 1;
    int.innerHTML = `${integer} of ${count}`;
    }
})