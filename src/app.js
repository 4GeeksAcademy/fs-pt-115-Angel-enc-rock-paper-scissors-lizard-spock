console.log("Hello Rigo from the console!");

const weapons = ["rock", "paper", "scissors", "lizard", "spock"]

const getRandomWeapon = () => {
    const index = Math.floor(Math.random() * weapons.length);
    return weapons[index]
}

const checkWeaponGuess = (userGuess) => {
    const machineWeapon = getRandomWeapon()

    console.log(`You chose: ${userGuess}`);
    console.log(`Computer weapon: ${machineWeapon}`);

    if (userGuess === machineWeapon) {
        console.log("Take it serious! It's a draw...");
    } else if (
        (userGuess === "rock" && (machineWeapon === "scissors" || machineWeapon === "lizard")) ||
        (userGuess === "paper" && (machineWeapon === "rock" || machineWeapon === "spock")) ||
        (userGuess === "scissors" && (machineWeapon === "paper" || machineWeapon === "lizard")) ||
        (userGuess === "lizard" && (machineWeapon === "paper" || machineWeapon === "spock")) ||
        (userGuess === "spock" && (machineWeapon === "scissors" || machineWeapon === "rock"))
    ) {
        console.log("Hmm... you win. Again!");
    } else {
        console.log("Bazinga! You lose!");
    }
}

const guess = prompt("Choose your weapon: rock, paper, scissors, lizard, spock").toLowerCase();
checkWeaponGuess(guess)