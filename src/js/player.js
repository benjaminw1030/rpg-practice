export default class Player {
  constructor(name, hp, atk, def, exp, mp, lvl, inv) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.exp = exp;
    this.mp = mp;
    this.lvl = lvl;
    this.inv = inv;
  }

  attack(enemy) {
    enemy.hp -= (this.atk - enemy.def);
  }

  lvlCheck() {
    if (this.exp >= 20) {
      this.lvl += 1;
      this.atk += 1;
      this.def += 1;
      this.mp += 1;
      this.hp += 2;
      this.exp = 0;
      return true;
    } else {
      return false;
    }
  }

  deathCheck() {
    if (this.hp <= 0) {
      return true
    } else {
      return false
    }
  }
}