import Enemy from '../src/js/enemy.js';
import Player from '../src/js/player.js';
import Location from '../src/js/location.js';

describe('Enemy', () => {

  let player;
  let enemy;
  let location;

  beforeEach(() => {
    player = new Player("Steve", 5, 2, 1, 3, 4, 1, "bow");
    enemy = new Enemy("goblin", 5, 2, 1, 3, "sword");
    location = new Location("corridor", "You are in a dark, musty corridor running north to south.", "", "", ["leather armor"]);
  });

  test('should create an enemy object', () => {
    expect(enemy.name).toEqual("goblin");
    expect(enemy.hp).toEqual(5);
    expect(enemy.atk).toEqual(2);
    expect(enemy.def).toEqual(1);
    expect(enemy.exp).toEqual(3);
    expect(enemy.item).toEqual("sword");
  });

  test('should let an enemy object lower the health of an player', () => {
    enemy.attack(player);
    expect(player.hp).toEqual(4);
  });

  test('should give experience to the player and delete enemy object on death', () => {
    enemy.hp = 0;
    enemy.deathCheck(player, location);
    expect(player.exp).toEqual(6);
    expect(enemy.name).toBeUndefined();
  });

  test('should drop an item on the ground on death', () => {
    enemy.hp = 0;
    enemy.deathCheck(player, location);
    expect(location.items).toEqual(expect.arrayContaining(["sword"]))
  });

  test('should not drop an item if an enemy is not holding one', () => {
    enemy.item = undefined;
    enemy.hp = 0;
    enemy.deathCheck(player, location);
    expect(location.items).toEqual(["leather armor"]);
  });

  test('should keep the enemy alive upon deathCheck if health is more than 0', () => {
    expect(enemy.deathCheck(player, location)).toBeFalsy();
  });
});