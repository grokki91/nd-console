const readline = require('readline');

const random = Math.round(Math.random() * 100);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Загадано число в диапазоне от 0 до 100');
const game = () => {
    rl.question('', (answer) => {
        if (answer > random) {
            console.log('Меньше');
            game();
        } else if (answer < random) {
            console.log('Больше');
            game();
        } else {
            console.log(`Отгадано число ${answer}`);
            rl.close();
        }
    });
}

game();