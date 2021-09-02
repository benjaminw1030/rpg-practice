import Player from '../src/js/player.js';
import Enemy from '../src/js/enemy.js';
import Location from '../src/js/location.js';
import Inventory from '../src/js/inventory.js';

describe('Player', () => {

  let enemy;
  let player;
  let location;

  beforeEach(() => {
    enemy = new Enemy("goblin", 5, 2, 1, 3, "sword");
    player = new Player("Steve", 5, 2, 1, 3, 4, 1, "bow");
    location = new Location("corridor", "You are in a dark, musty corridor running north to south.", player, enemy, ["leather armor"]);
  });

  test('It should create an player object', () => {
    expect(player.name).toEqual("Steve");
    expect(player.hp).toEqual(5);
    expect(player.atk).toEqual(2);
    expect(player.def).toEqual(1);
    expect(player.exp).toEqual(3);
    expect(player.mp).toEqual(4);
    expect(player.lvl).toEqual(1);
    expect(player.inv).toEqual("bow");
  });

  test('It should let an player object lower the health of an enemy object and peform a death check', () => {
    player.attack(enemy, location);
    expect(enemy.hp).toEqual(4);
  });

  test('It will increase the lvl and stats of a player and set experience back to 0', () => {
    player.exp = 21;
    expect(player.lvlCheck()).toBeTruthy();
    player.lvlCheck();
    expect(player.lvl).toEqual(2);
    expect(player.atk).toEqual(3);
    expect(player.def).toEqual(2);
    expect(player.mp).toEqual(5);
    expect(player.hp).toEqual(7);
    expect(player.exp).toEqual(0);
  });

  test('It will not increase the lvl and stats of a player if they do not have enough exp', () => {
    player.lvlCheck();
    expect(player.lvlCheck()).toBeFalsy();
  });

  test('If player dies deathCheck returns true', () => {
    player.hp = -1;
    expect(player.playerDeathCheck()).toBeTruthy();
  });

  test('If player still alive deathCheck returns false', () => {
    expect(player.playerDeathCheck()).toBeFalsy();
  });

  test('Player can pick up items off the ground and add it to their inventory', () => {
    
  });
});