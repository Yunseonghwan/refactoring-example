// //온도 층정값 배열에서 정상 작동 범위를 벗어난 것이 있는지 검사하는 코드

// const station = {
//   name: "ZB1",
//   readings: [
//     { temp: 47, time: "20160-11-10 09:10" },
//     { temp: 53, time: "20160-11-10 09:20" },
//     { temp: 58, time: "20160-11-10 09:30" },
//     { temp: 53, time: "20160-11-10 09:40" },
//     { temp: 51, time: "20160-11-10 09:50" },
//   ],
// };

// //다음은 정상 범위를 벗어난 측정값을 찾는함수.

// function readingsOutsideRange(station, min, max) {
//   return station.readings.filter((r) => r.temp < min || r, temp > max);
// }

// //호출문
// alerts = readingsOutsideRange(
//   station,
//   operatingPlan.temperatureFloor, // 최저온도
//   operatingPlan.temperatureCeiling // 최고온도
// );

class NumberRange {
  constructor(min, max) {
    this._data = { min: min, max: max };
  }
  get min() {
    return this.min;
  }
  get max() {
    return this.max;
  }
}

function readingsOutsideRange(station, range) {
  return station.readings.filter(
    (r) => r.temp < range.min || r.temp > range.max
  );
}

//호출문

const range = new NumberRange(
  operatingPlan.temperatureFloor,
  operatingPlan.temperatureCeiling
);

alerts = readingsOutsideRange(station, range);
