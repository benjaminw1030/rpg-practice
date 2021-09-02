import Enemy from '../src/js/enemy.js';
import Player from '../src/js/player.js';
import Location from '../src/js/location.js';

describe('Enemy', () => {

  let player;
  let enemy;

  beforeEach(() => {
    player = new Player("Steve", 5, 2, 1, 3, 4, 1, "bow");
    enemy = new Enemy("goblin", 5, 2, 1, 3, "sword");
  });

  test('It should create an enemy object', () => {
    expect(enemy.name).toEqual("goblin");
    expect(enemy.hp).toEqual(5);
    expect(enemy.atk).toEqual(2);
    expect(enemy.def).toEqual(1);
    expect(enemy.exp).toEqual(3);
    expect(enemy.item).toEqual("sword");
  });
  test('It should let an enemy object lower the health of an player', () => {
    enemy.attack(player);
    expect(player.hp).toEqual(4);
  });
  test('should give experience to the player and delete the enemy object on death', () => {
    enemy.hp = 0;
    enemy.deathCheck(player);
    expect(player.exp).toEqual(6);
    expect(enemy.name).toBeUndefined();
  });

  test('should keeps the enemy alive upon detchCheck if health is more than 0', () => {
    expect(enemy.deathCheck(player)).toBeFalsy();
  });
});



// test('should correctly create a triangle object with three lengths', () => {
//   const triangle = new Triangle(2,4,5);
//   expect(triangle.side1).toEqual(2);
//   expect(triangle.side2).toEqual(4);
//   expect(triangle.side3).toEqual(5);
// });

// describe ('Rectangle', () => {
  
//   let rectangle;

//   beforeEach(() => {
//     rectangle = new Rectangle(3,5);
//   });

//   test('should correctly create a rectangle object using two sides', () => {
//     expect(rectangle.side1).toEqual(3);
//     expect(rectangle.side2).toEqual(5);
//   });
//   test('should correctly get the area of a rectangle object', () => {
//     expect(rectangle.getArea()).toEqual(15);
//   });
// });