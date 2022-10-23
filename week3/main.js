/*let user = {
    name: "Cynthia",
    age: 36
};

user.sayHi = function() {
    alert("Hello!");
};

user.sayHi();*/

//Using the "this" keyword it would look like this:

let user = {
    name: "Jason",
    age: 36,

    sayHi() {
        alert(`Hi ${this.name}`);
    }
};

user.sayHi(); 

//create a calculator
let calculator = {
    sum() {
        return this.num1 + this.num2;
    },
    mul() {
        return this.num1 * this.num2;
    },
    read() {
        this.num1 = +prompt('Enter a number', 0);
        this.num2 = +prompt('Enter a second number', 0); //What does the 0 stand for?
}
}

calculator.read();
alert(`The sum is ${calculator.sum()}`);
alert(`The product of the two numbers is ${calculator.mul()}`);

//dice

const dice = {
    sides: 20,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}

dice.roll();


//Quiz Ninja
const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonder Woman",realName: "Diana Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
];

const game = {
    start(quiz){
        this.questions = [...quiz];
        this.score = 0;
        // main game loop
        for(const question of this.questions){
        this.question = question;
        this.ask();
        }
        // end of main game loop
        this.gameOver();
    },
    ask(){
        const question = `What is ${this.question.name}'s real name?`;
        const response =  prompt(question);
        this.check(response);
    },
    check(response){
        const answer = this.question.realName;
        if(response === answer){
        alert('Correct!');
        this.score++;
        } else {
        alert(`Wrong! The correct answer was ${answer}`);
        }
    },
    gameOver(){
        alert(`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
    }
}

game.start(quiz);

