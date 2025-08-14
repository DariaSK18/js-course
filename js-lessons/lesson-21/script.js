class Client {
  #id;
  #name;
  #surname;
  #moneyAmount;
  constructor(name, surname, moneyAmount) {
    (this.#id = crypto.randomUUID()),
      (this.Name = name),
      (this.Surname = surname);
    this.MoneyAmount = moneyAmount;
  }
  get Name() {
    return this.#name;
  }
  set Name(val) {
    this.#name = val;
  }
  get Surname() {
    return this.#surname;
  }
  set Surname(val) {
    this.#surname = val;
  }
  get MoneyAmount() {
    return this.#moneyAmount;
  }
  set MoneyAmount(val) {
    try {
      if (typeof val !== "number" || isNaN(val))
        throw new Error("Not a number");
      if (val < 0) throw new Error("Negative number");
      if (val > 1000000) throw new Error("More than the permissible value");
      this.#moneyAmount = val;
    } catch (err) {
      console.log(err.message);
      console.log(err.stack);
      console.log(err.name);
    } finally {
      console.log("Thank you for using our bank");
    }
  }
  toString() {
    return `${this.Name} ${this.Surname} - ${this.MoneyAmount}`;
  }
  addMoney(val) {
    this.MoneyAmount += val;
  }
  substractMoney(val) {
    this.MoneyAmount -= val;
  }
}

const client1 = new Client("Daria", "Steblovska", 10200);

document.body.insertAdjacentHTML("beforeend", client1.toString());
client1.addMoney(100);
document.body.insertAdjacentHTML("beforeend", client1.toString());
client1.substractMoney(900);
document.body.insertAdjacentHTML("beforeend", client1.toString());

class GoldenClient extends Client {
  static #creditMoneyPercent = 3;
  #creditLimit = 10000;
  constructor(name, surname, moneyAmount) {
    super(name, surname, moneyAmount);
  }
  get CreditLimit() {
    return this.#creditLimit;
  }
  set CreditLimit(val) {
    this.#creditLimit = val;
  }
  useCredit(val) {
    if (this.CreditLimit >= val) {
      this.CreditLimit -= val;
    }
  }
  substractMoney(val) {
    if (this.MoneyAmount >= val) {
      super.substractMoney(val);
    } else {
      const fromBalance = this.MoneyAmount;
      const fromCredit = val - fromBalance;
      super.substractMoney(fromBalance);
      this.useCredit(fromCredit);
    }
  }
  getPercentForUsingCredits() {
    const usedAmount = 10000 - this.CreditLimit;
    const res = (usedAmount * GoldenClient.#creditMoneyPercent) / 100;
    console.log(res);
    return res;
  }
  logIt() {
    console.log(this);
  }
}

const goldCl = new GoldenClient("Vlad", "S", 100);
goldCl.addMoney(100);
goldCl.substractMoney(100);
goldCl.substractMoney(1200);
goldCl.getPercentForUsingCredits();
goldCl.logIt();
