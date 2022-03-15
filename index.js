function checkCashRegister(price, cash, cid) {
  let change = (cash-price)*100;
  let changeArr = [];
  let moneySelect = "";
  let sum = 0;
  let cidSum = 0;

  const MONEY = {
  "PENNY": 1,
  "NICKEL": 5,
  "DIME": 10,
  "QUARTER": 25,
  "ONE": 100,
  "FIVE": 500,
  "TEN": 1000,
  "TWENTY": 2000,
  "ONE HUNDRED": 10000
}

  cid.reverse();

  for(let i = 0; i < cid.length; i++) { //sums the cash
    cidSum += cid[i][1];
  }
  cidSum *= 100;

  if(change > cidSum) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else if (change == cidSum) {
    return {status: "CLOSED", change: cid.reverse()};
  } else {

    for(let i = 0; i < cid.length; i++) {
      moneySelect = cid[i][0];
      sum = 0;

      while(change > 0 && cid[i][1] > 0 && change >= MONEY[moneySelect]) {
        change -= MONEY[moneySelect];
        sum += MONEY[moneySelect];
        cid[i][1] -= MONEY[moneySelect]/100;
      }
      if(sum > 0) {
        changeArr.push([moneySelect, sum/100])
      }
    }
    if (change == 0) {
      return {status: "OPEN", change: changeArr};
    } else {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }

  }

  return change;
}
