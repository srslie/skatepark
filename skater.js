class Skater {
  constructor(object) {
    this.name = object.name;
    this.skill = object.skill;
    this.tricks = object.tricks;   //{object full of trick key-value pairs}
    this.money = object.cash;
    this.frustration = 0;
    this.practiceCount = 0;
  }

  practice(trick) {
    if (this.practiceCount >= 2) {
      this.tricks[trick] = true
      this.frustration = 0
      return `I just learned to ${trick}!!!`
    }

    var tricksKeys = Object.keys(this.tricks)
    var tricksValues = Object.values(this.tricks)

    for (var i = 0; i < tricksKeys.length; i++) {
      if (tricksKeys[i] == trick && tricksValues[i]) {
        return
      }
    }
    this.frustration++
    this.practiceCount++
  }

}


module.exports = Skater;
