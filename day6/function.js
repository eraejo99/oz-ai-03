// 함수(Function)
// 입력 값을 받아서 데이터를 처리하고, 결과를 반환하는 코드 뭉치
// -> 코드를 재사용하기 위해 만들어 놓은 구조

// 함수 정의 -> "~ 기능을 하는 코드 덩어리"를 X라는 이름으로 부르겠다.
// 입력 -> 함수 동작 -> 출력
function add(n1, n2) {
  let result = n1 + n2;
  return result; // 결과값 반환(return), return을 지정하지 않으면, undefined 반환
  // console.log(result);
}

// 호출(Call) : 함수를 실행하는 것
// add(1, 2);
console.log(add(1, 2));
