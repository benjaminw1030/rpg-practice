import Player from '../src/js/player.js';

describe('Player', () => {

  let player;

  beforeEach(() => {
    player = new Player(5, 2, 1, 3, 4, 1, "bow");
  });

  test('It should create an player object', () => {
    expect(player.health).toEqual(5);
    expect(player.attack).toEqual(2);
    expect(player.defense).toEqual(1);
    expect(player.experience).toEqual(3);
    expect(player.mana).toEqual(4);
    expect(player.level).toEqual(1);
    expect(player.inventory).toEqual("bow");
  });
});