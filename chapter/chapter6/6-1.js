/* 유효범위를 벗어나는 변수가 없을때 */

//함수 추출하기전

// function printOwing(invoice) {
//   let outstanding = 0;

//   console.log("*****************");
//   console.log("*****고객 채무 *****");
//   console.log("*****************");

//   //미해결 채무(outstanding) 계산
//   for (const o of invoice.orders) {
//     outstanding += o.amount;
//   }

//   //마감일(dueDate)을 기록한다.
//   const today = Clock.today; // 시스템 시계를 감싸는 객체
//   invoice.dueDate = new Date(
//     today.getFullYear(),
//     today.getMonth(),
//     today.getDate() + 30
//   );

//   //세부 사항을 출력한다
//   console.log(`고객명: ${invoice.customer}`);
//   console.log(`채무액: ${outstanding}`);
//   console.log(`채무액: ${invoice.dueDate.toLocaleDateString()}`);
// }

//함수 추출하기

// function printOwing(invoice) {
//   let outstanding = 0;

//   pringBanner();
//   //미해결 채무(outstanding) 계산
//   for (const o of invoice.orders) {
//     outstanding += o.amount;
//   }

//   //마감일(dueDate)을 기록한다.
//   const today = Clock.today; // 시스템 시계를 감싸는 객체
//   invoice.dueDate = new Date(
//     today.getFullYear(),
//     today.getMonth(),
//     today.getDate() + 30
//   );

//   printDetails();
// }

// function pringBanner() {
//   console.log("*****************");
//   console.log("*****고객 채무 *****");
//   console.log("*****************");
// }

// function printDetails() {
//   console.log(`고객명: ${invoice.customer}`);
//   console.log(`채무액: ${outstanding}`);
//   console.log(`채무액: ${invoice.dueDate.toLocaleDateString()}`);
// }

/* 지역 변수를 사용할때 */

// function printOwing(invoice) {
//   let outstanding = 0;

//   pringBanner();
//   //미해결 채무(outstanding) 계산
//   for (const o of invoice.orders) {
//     outstanding += o.amount;
//   }

//   //마감일(dueDate)을 기록한다.
//   recordDueDate(invoice);

//   printDetails(invoice, outstanding); //지역 변수를 매개변수로 전달;
// }

// function pringBanner() {
//   console.log("*****************");
//   console.log("*****고객 채무 *****");
//   console.log("*****************");
// }

// //마감일 설정 코드 추출
// function recordDueDate(invoice) {
//   const today = Clock.today; // 시스템 시계를 감싸는 객체
//   invoice.dueDate = new Date(
//     today.getFullYear(),
//     today.getMonth(),
//     today.getDate() + 30
//   );
// }

// function printDetails(invoice, outstanding) {
//   console.log(`고객명: ${invoice.customer}`);
//   console.log(`채무액: ${outstanding}`);
//   console.log(`채무액: ${invoice.dueDate.toLocaleDateString()}`);
// }

/* 예시 지역 변수의 값을 변경할 때 */

function printOwing(invoice) {
  pringBanner();

  //미해결 채무(outstanding) 계산
  let outstanding = calculateOutstanding();

  //마감일(dueDate)을 기록한다.
  recordDueDate(invoice);
  printDetails(invoice, outstanding); //지역 변수를 매개변수로 전달;
}

function pringBanner() {
  console.log("*****************");
  console.log("*****고객 채무 *****");
  console.log("*****************");
}

function calculateOutstanding(invoice) {
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
}

//마감일 설정 코드 추출
function recordDueDate(invoice) {
  const today = Clock.today; // 시스템 시계를 감싸는 객체
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}

function printDetails(invoice, outstanding) {
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`채무액: ${invoice.dueDate.toLocaleDateString()}`);
}
