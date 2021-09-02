export default class Enemy {
    constructor(name, hp, atk, def, exp, item) {
      this.name = name;
      this.hp = hp;
      this.atk = atk;
      this.def = def;
      this.exp = exp;
      this.item = item;
  }
  attack(player) {
    player.hp -= (this.atk - player.def);
  }
  deathCheck(player) {
    if (this.hp <= 0) {
      player.exp += this.exp;
      delete this.name;
      return true
    } else {
      return false
    }
  }
}
