import Player from '../src/js/player.js';
import Enemy from '../src/js/enemy.js';
import Location from '../src/js/location.js';

describe('Player', () => {

  let enemy;
  let player;
  let location;

  beforeEach(() => {
    enemy = new Enemy("goblin", 5, 2, 1, 3, "sword");
    player = new Player("Steve", 5, 2, 1, 3, 4, 1, "bow");
  });

  test('It should create an player object', () => {

  });

});