 import { Sudoku } from './../src/backend-code.js';
//
describe('Sudoku', () => {
  let array = [[1,2,3,4,5,6,7,8,9],[4,5,6,7,8,9,1,2,3],[7,8,9,1,2,3,4,5,6],[2,3,1,6,4,5,9,7,8],[6,4,5,9,7,8,3,1,2],[9,7,8,3,1,2,6,4,5],[3,1,2,5,6,4,8,9,7],[5,6,4,8,9,7,2,3,1],[8,9,7,2,3,1,5,6,4]];
var testArray = new Sudoku(array)
  test('checking there are non repeated numbers in row', () => {

    console.log(testArray);
      expect(testArray.checkRows()).toEqual(true);


  });

  test('checking there are non repeated numbers in column', () => {

    console.log(testArray);

      expect(testArray.checkColumns()).toEqual(true);
  });

  test('checking there are non repeadted numbers in grid 3 by 3', () => {


      expect(testArray.check3x3()).toEqual(true);
  });



})
