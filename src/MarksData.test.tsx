import {  buildGrid,   Cell } from './MarksData';
import data from '../all1.json'

describe.only('Main Table', () => {

   // it('should return column1', () => {

   //    const result: any[][] = MakeTable(marksData1);

   //    console.log(result);

   //    expect(result[0].length).toBe(2);
   //    expect(result[1].length).toBe(5);

   //    expect(result[0].reduce((accumulator, current) => accumulator + +current.relSize, 0.17)).toBe(1);

   // });


   // it('should return items', () => {

   //    const result: Cell[] = MakeTableGrid(marksData1);

   //    console.log(result);

   //    const resultGrid = result.map(cell => cell.grid())


   //    console.log('grid', resultGrid);

   // });

   it.only('should read JSON', () => {
            /* -KWOsozzNKWfrlMj3eHc */
            /* -KWOZhsbMZ31lao9TAa3 */
      const key = '-KWOsozzNKWfrlMj3eHc';
      // console.log('-----');
      // console.log(data.d.b.d[key]);
      // console.log('-----');

      const result: Cell[] = buildGrid(data.d.b.d[key]);
   })

});
