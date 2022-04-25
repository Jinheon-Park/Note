const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let input = parseInt(line);
  let sum = 0;
  for (let i = 1; i <= input; i++) sum += i;
  console.log(sum);
  rl.close();
});

rl.on("close", () => {
  process.exit();
});