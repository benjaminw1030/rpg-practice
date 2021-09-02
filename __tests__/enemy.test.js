import Enemy from '../src/js/enemy.js';

describe('Enemy', () => {

  let enemy;

  beforeEach(() => {
    enemy = new Enemy(5, 2, 1, 3, "sword");
  });

  test('It should create an enemy object', () => {
    expect(enemy.health).toEqual(5);
    expect(enemy.attack).toEqual(2);
    expect(enemy.defense).toEqual(1);
    expect(enemy.experience).toEqual(3);
    expect(enemy.item).toEqual("sword");
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