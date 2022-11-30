const squareElement = document.getElementById('square');
let angle = 0;

function rotate() {
    angle = (angle + 2)%360;
    squareElement.style.transform = `rotate(${angle}deg)`
    window.requestAnimationFrame(rotate);
}

const id = requestAnimationFrame(rotate);

const superman = document.getElementById('hero');
const powers = superman.dataset.powers;

//add an event listener that logs information about any changes to the Web Storage
addEventListener('storage', (event) => {
    console.log(`The ${event.key} was updates from ${event.oldValue} to ${event.newValue} and saved in ${event.storageArea}`)
}, false);

//will return  a position object to a specified callback function
navigator.geolocation.getCurrentPosition(youAreHere);

//show an alert dialog that displays the user's coordinates
function youAreHere(position) {
    console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
}

//returns an id to reference the position being watched
const id2 = navigator.geolocation.watchPosition(youAreHere);

//create a new worker
//const worker = new Worker('task.js');

//post a message to the worker
//worker.postMessage('Hello');

//post a message from the worker
//self.postMessage('Finished');

//log data from the worker to the console
//worker.addEventListener('message', (event) => {
  //  console.log(event.data);
// }, false);

//worker.terminate();

//self.close();

const btn = document.getElementById("rainbow");

const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'rebeccapurple', 'violet'];

function change() {
    document.body.style.background = rainbow[Math.floor(7*Math.random())];
}
btn.addEventListener('click', change);

//factorize the number entered in the form
form.addEventListener('submit', factorize, false);

function factorize(event) {
    //prevent the form from being submitted
    event.preventDefault();

    const number = Number(form.number.value);
    document.getElementById('output').innerText = factorsOf(number);
}

function factorsOf(n) {
    if(Number.isNaN(Number(n))) {
        throw new RangeError ('Argument Error: Value must be an integer');
    }
    if(n < 0) {
        throw new RangeError('Argument Error: Number must be positive');
    }
    if(!Number.isInteger(n)) {
        throw new RangeError ('Argument Error: Number must be an integer');
    }
    const factors = [];
    for (let i=1, max = Math.sqrt(n); i <= max; i++) {
        if (n%i === 0) {
            factors.push(i, n/i);
        }
        return factors.sort((a,b) => a - b);
    }
}

//access canvas
const canvasElement = document.getElementById('canvas');

//access the context of canvas
const context = canvasElement.getContext('2d');

//access canvas methods and draw
context.fillStyle = "#0000cc"; // a blue fill color 
context.strokeStyle = "#ccc"; // a gray stroke color

//set line width
context.lineWidth = 4;

//draw a filled in rectangle
context.fillRect(10,10,100,50);

//draw the outline of a rectangle
context.strokeRect(10,100,100,50);

//draw straight lines
context.beginPath();
context.moveTo(130, 50);
context.lineTo(180, 50);
context.moveTo(155, 50);
context.lineTo(155, 90);
context.strokeStyle = '#c00';
context.lineWidth = 15;
context.stroke();

//draw an arc of a radius
context.beginPath();
context.arc(200, 200, 30, 0, Math.PI * 2, false);
context.strokeStyle = '#ff0';
context.lineWidth = 4;
context.stroke();

//draw hello
context.fillStyle = '#0c0'; // a blue fill color
context.font = 'bold 26px sans-serif';
context.fillText('Hello', 20, 200);