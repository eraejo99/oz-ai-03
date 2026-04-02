// 함수를 값처럼 다루기

// y = 2x + 1
// f(x) = 2x + 1
// f(5) = 11

// 함수 정의 -> 설계도
function sayHello() {
  console.log("Hello!");
}

// 함수 호출 -> 기능 실제로 사용
// sayHello();

// 함수 -> 기능 그 자체
// sayHello;
// console.log(sayHello);

// 1) 함수를 변수에 할당할 수 있다
const f = sayHello;
// console.log(f);
f();

// 2) 함수를 다른 함수의 인자로 전달할 수 있다
function run(fn) {
  console.log("start function run...");
  fn();
  console.log("start function run...");
}

// run(sayHello);
// run(sayHello());

// (기본) 함수를 선언한 곳에서 직접 호출
// (응용) 함수를 선언하는 곳과 호출하는 곳이 달라질 수 있다

// numpy 평균 계산 함수.

// undefined(); // TypeError: undefined is not a function
