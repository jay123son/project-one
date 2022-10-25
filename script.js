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

function getRandomPerson(){
    personName = data[Math.floor(Math.random() * data.length)][0]
    real.innerHTML = `<h3>${personName}</h3>`;
}

getRandomPerson()

revealbutton.addEventListener('click', function(){
    stage.style.display = 'block';
});

nextbutton.addEventListener('click', function(){
    
});

