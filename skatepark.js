class SkatePark {
  constructor(object) {
    this.name = object.name;
    this.yearFounded = object.year;
    this.style = object.type;
    this.features = object.features;
    this.isPrivate = object.isPrivate || false;
    this.cost = object.price || 0;
    this.occupants = [];
  }

  admit(skater) {
    if (this.occupants.length >= 3) {
      return 'Sorry, we are at max capacity. Thank you for understanding.'
    } else if (!this.isPrivate) {
      this.occupants.push(skater)
      return `Welcome to the free ${this.name} Skatepark!`
    } else if (skater.money >= this.cost) {
      skater.money -= this.cost
      this.occupants.push(skater)
      return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`
    } else {
      return `Sorry, you don't have enough money.`
    }
  }

}


module.exports = SkatePark;
