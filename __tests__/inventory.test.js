import Player from '../src/js/player.js';
import Enemy from '../src/js/enemy.js';
import Location from '../src/js/location.js';
import Inventory from '../src/js/inventory.js';

describe('Inventory', () => {

  let enemy;
  let player;
  let location;
  let inventory;

  beforeEach(() => {
    inventory = new Inventory("bow", "clothing")
    enemy = new Enemy("goblin", 5, 2, 1, 3, "sword");
    player = new Player("Steve", 5, 2, 1, 3, 4, 1, inventory);
    location = new Location("corridor", "You are in a dark, musty corridor running north to south.", player, enemy, ["leather armor"]);
  });

  test('should create an inventory object', () => {
    expect(inventory.equipWep).toEqual("bow");
  });

  test('should unequip a weapon, become unarmed, and add weapon to bag', () => {
    inventory.unEquipWep();
    expect(inventory.equipWep).toEqual("unarmed");
    expect(inventory.bag).toEqual(expect.arrayContaining(["bow"]))
  });
});