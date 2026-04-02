let num1 = 2;
let num2 = 5;

let operation = "/"; // "+", "-", "*", "/";

if (operation === "+") {
  console.log(num1 + num2);
} else if (operation === "-") {
  console.log(num1 - num2);
} else if (operation === "*") {
  console.log(num1 * num2);
} else if (operation === "/") {
  console.log(num1 / num2);
} else {
  console.log("지원하지 않는 연산자입니다.");
}
