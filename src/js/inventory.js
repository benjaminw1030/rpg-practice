export default class Inventory {
  constructor(weapon, armor) {
    this.equipWep = weapon;
    this.equipArm = armor;
    this.bag = []
  }

  unEquipWep() {
    this.bag.push(this.equipWep);
    this.equipWep = "unarmed";
  }

  unEquipArm() {
    this.bag.push(this.equipArm);
    this.equipArm = "clothing";
  }

  equip(item) {
    const validWeapons = ["greatsword", "sword", "bow", "club"];
    const validArmors = ["leather armor", "chainmail", "plate mail"];
    const bagIndex = this.bag.indexOf(item);
    if (validWeapons.includes(item)) {
      this.bag.splice(bagIndex, 1);
      if (this.equipWep !== "unarmed") {
        this.bag.push(this.equipWep);
      }
      this.equipWep = item;
    } else if (validArmors.includes(item)) {
      this.bag.splice(bagIndex, 1);
      if (this.equipArm !== "clothing") {
        this.bag.push(this.equipArm);
      }
      this.equipArm = item;
    } else {
      return false;
    }
  }

  drop(item, location) {
    const bagIndex = this.bag.indexOf(item);
    this.bag.splice(bagIndex, 1);
    location.items.push(item);
  }
}