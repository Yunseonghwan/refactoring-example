// let defaultOwner = { firstName: "마틴", lastName: "파울러" };

// export function defaultOwner() {
//   return defaultOwnerData;
// }

// export function setDefaultOwner(arg) {
//   defaultOwner = arg;
// }

// /* 값 캡슐화하기 */

// const owner1 = defaultOwner();
// assert.equal("파울러", owner1.lastName, "처음값 확인");
// const owner2 = defaultOwner();
// owner2.lastName = "파슨스";
// assert.equal("파슨스", owner1.lastName, "owner2를 변경한후");

/* 책저자의 선호 방식 */

// let defaultOwnerData = { firstName: "마틴", lastName: "파울러" };

// export function defaultOwner() {
//   return Object.assign({}, defaultOwnerData);
// }

// export function setDefaultOwner(arg) {
//   defaultOwner = arg;
// }

let defaultOwnerData = { firstName: "마틴", lastName: "파울러" };

export function defaultOwner() {
  return Object.assign({}, Person(defaultOwnerData));
}

export function setDefaultOwner(arg) {
  defaultOwner = arg;
}

class Person {
  constructor(data) {
    this._lastName = data.lastName;
    this._firstName = data.firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get firstName() {
    return this._firstName;
  }
}
