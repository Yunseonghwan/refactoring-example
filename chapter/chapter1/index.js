class PerformanceCalculator {
  get amount() {
    let result = 0;

    if (this.play.type === "tragedy") {
      result = 40000;
      if (this.aPerformance.audience > 30) {
        result += 1000 * (this.aPerformance.audience - 30);
      } else if (play.type === "comedy") {
        result = 30000;
        if (this.aPerformance.audience > 20) {
          result += 10000 + 500 * (this.aPerformance.audience - 20);
        }
        result += 300 * this.perf.audience;
      } else {
        throw new Error(`알 수 없는 장르: ${play.type}`);
      }
    }
    return result;
  }
}

function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구 내역 (고객명: ${invoice.customer})\n`;

  for (let perf of invoice.performances) {
    const play = plays[perf.playID];
    volumeCredits += Math.max(perf.audience - 30, 0);
    if ("comedy" === play.type) volumeCredits += Math.floor(perf.audience / 5);

    result += `${play.name}: ${usd(amountFor(perf, play) / 100)} (${
      perf.audience
    }석)\n`;
    totalAmount += amountFor(perf, play);
  }
  result += `총액: ${usd(totalAmount / 100)}\n`;
  result += `적립 포인트 :${volumeCredits}점\n`;
  return result;
}

function usd(currency) {
  const result = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(currency);
  return result;
}

function amountFor(aPerformance, play) {
  return new PerformanceCalculator(aPerformance, play).amount;
}
