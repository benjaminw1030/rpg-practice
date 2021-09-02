import Player from '../src/js/player.js';
import Enemy from '../src/js/enemy.js';
import Location from '../src/js/location.js';

describe('Location', () => {

  let enemy;
  let player;
  let location;

  beforeEach(() => {
    enemy = new Enemy("goblin", 5, 2, 1, 3, "sword");
    player = new Player("Steve", 5, 2, 1, 3, 4, 1, "bow");
    location = new Location("corridor", "You are in a dark, musty corridor running north to south.", player, enemy, ["leather armor"]);
  });

  test('should create a location object with a name, player, enemy, and item', () => {
    expect(location.name).toEqual("corridor");
    expect(location.description).toEqual("You are in a dark, musty corridor running north to south.");
    expect(location.player).toEqual(player);
    expect(location.enemy).toEqual(enemy);
    expect(location.items).toEqual(["leather armor"]);
  });
});