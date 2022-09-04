// function price(order) {
//   //가격(price} = 기본 가격 - 수량 할인 + 베송비
//   return (
//     order.quantity * order.itemprice -
//     Math.max(0, order.quantity - 500) * order.itemprice * 0.05 +
//     Math.min(order.quantity * order.itemprice * 0.1, 100)
//   );
// }

// 기본 가격을 담을 변수를 만들고 적절한 이름 지어주기

// function price(order) {
//   //가격(price} = 기본 가격 - 수량 할인 + 베송비
//   const basePrice = order.quantity * order.itemPrice;
//   return (
//     basePrice -
//     Math.max(0, order.quantity - 500) * order.itemprice * 0.05 +
//     Math.min(basePrice * 0.1, 100)
//   );
// }

// 수량, 할인 추출 및 교체 작업

// function price(order) {
//   //가격(price} = 기본 가격 - 수량 할인 + 베송비
//   const basePrice = order.quantity * order.itemPrice;
//   const quantityDiscount =
//     Math.max(0, order.quantity - 500) * order.itemprice * 0.05;
//   const shipping = Math.min(basePrice * 0.1, 100);
//   return basePrice - quantityDiscount + shipping;
// }

/* class 에서 변수 추출 에시 */

// class Order {
//   constructor(aRecord) {
//     this._data = aRecord;
//   }
//   get quantity() {
//     return this._data.quantity;
//   }
//   get itemPrice() {
//     return this._data.itemPrice;
//   }

//   get Price() {
//     return (
//       this.quantity * this.itemprice -
//       Math.max(0, this.quantity - 500) * this.itemprice * 0.05 +
//       Math.min(this.quantity * this.itemprice * 0.1, 100)
//     );
//   }
// }

class Order {
  constructor(aRecord) {
    this._data = aRecord;
  }
  get quantity() {
    return this._data.quantity;
  }
  get itemPrice() {
    return this._data.itemPrice;
  }

  get Price() {
    return this.basePrice - this.quantityDiscount + this.shipping;
  }
  get basePrice() {
    return this.quantity * this.itemprice;
  }
  get quantityDiscount() {
    return Math.max(0, this.quantity - 500) * this.itemprice * 0.05;
  }
  get shipping() {
    return Math.min(this.quantity * this.itemprice * 0.1, 100);
  }
}
