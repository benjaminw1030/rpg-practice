import { WebpackOptionsDefaulter } from "webpack";

export default class Inventory {
  constructor(weapon, armor) {
    this.equipWep = weapon;
    this.equipArm = armor;
    this.bag = []
  }

  unEquipWep() {
    this.bag.push(this.equipWep);
    this.equipWep = "unarmed"
  }
}  