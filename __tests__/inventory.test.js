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
    inventory = new Inventory("bow", "leather armor")
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
    expect(inventory.bag).toEqual(expect.arrayContaining(["bow"]));
  });

  test('should unequip armor, wear clothing, and add armor to bag', () => {
    inventory.unEquipArm();
    expect(inventory.equipArm).toEqual("clothing");
    expect(inventory.bag).toEqual(expect.arrayContaining(["leather armor"]));
  });

  test('should equip a weapon from bag in the proper slot and place old weapon in bag', () => {
    inventory.bag = ["greatsword"];
    inventory.equip("greatsword");
    expect(inventory.equipWep).toEqual("greatsword");
    expect(inventory.bag).toEqual(["bow"]);
  });

  test('should equip armor from bag in the proper slot and place old armor in bag', () => {
    inventory.bag = ["chainmail"];
    inventory.equip("chainmail");
    expect(inventory.equipArm).toEqual("chainmail");
    expect(inventory.bag).toEqual(["leather armor"]);
  });

  test('should return false and change nothing if player tries to equip something that is not an armor or weapon', () => {
    inventory.bag = ["potion"];
    inventory.equip("potion");
    expect(inventory.equipWep).toEqual("bow");
    expect(inventory.equipArm).toEqual("leather armor");
    expect(inventory.bag).toEqual(["potion"]);
  });

  test('should not attempt to store base clothing or "unarmed" in bag', () => {
    inventory.bag = ["chainmail", "greatsword"];
    inventory.equipWep = "unarmed";
    inventory.equipArm = "clothing";
    inventory.equip("greatsword");
    inventory.equip("chainmail");
    expect(inventory.equipWep).toEqual("greatsword");
    expect(inventory.equipArm).toEqual("chainmail");
    expect(inventory.bag).toEqual([]);
  });

  test('should drop an item from the bag and add it to the location', () => {
    inventory.bag = ["potion"];
    inventory.drop("potion", location);
    expect(inventory.bag).toEqual([]);
    expect(location.items).toEqual(["leather armor", "potion"]);
  });
});