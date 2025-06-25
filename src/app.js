
const weapons = ["rock", "paper", "scissors", "lizard", "spock"]

const rules = {
    rock:["scisors", "lizard"],
    paper:["rock", "spock"],
    scissors:["paper", "lizard"],
    lizard:["spock","paper"],
    spock: ["scissors", "rock"]
};

const getRandomWeapon = () => {
    const index = Math.floor(Math.random() * weapons.length);
    return weapons[index];
}

const checkWeaponGuess = (userGuess) => {
    const machineWeapon = getRandomWeapon()

    console.log(`You chose: ${userGuess}`);
    console.log(`Computer weapon: ${machineWeapon}`);

    if (userGuess === machineWeapon) {
        console.log("Take it serious! It's a draw...");
    }else if (rules[userGuess].includes(machineWeapon)) {
    
        console.log("Hmm... you win. Again!");
    } else {
        console.log("Bazinga! You lose!");
    }
}

const guess = prompt("Choose your weapon: rock, paper, scissors, lizard, spock").toLowerCase();
checkWeaponGuess(guess)