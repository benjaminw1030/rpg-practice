export default class Location {
  constructor(name, description, player, enemy, items) {
    this.name = name;
    this.description = description;
    this.player = player;
    this.enemy = enemy;
    this.items = items;
  }
}