import {  buildGrid, buildCombo, preMerge, generateMarks, Cell, getSubjectsForStudent } from './MarksData';
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

   it('should read JSON', () => {
            /* -KWOsozzNKWfrlMj3eHc */
            /* -KWOZhsbMZ31lao9TAa3 */
      const key = '-KWOsozzNKWfrlMj3eHc';
      // console.log('-----');
      // console.log(data.d.b.d[key]);
      // console.log('-----');

      const result: Cell[] = buildGrid(data.d.b.d[key]);
   })

   it('should build Combo', () => {
      const v = buildCombo(data.d.b.d);

      console.log(v);
   })

   it('should generate marks', () => {

      let v: any =  '-KWOsozzNKWfrlMj3eHc';
      let a: any = data.d.b.d;
      let o = a[v];

      const marks = generateMarks(o);

      const cells = buildGrid(o);

      const f = preMerge(marks);
      cells.map(cell => f(cell));
      console.log('marks', marks);
      console.log('cells', cells);
   })

   it.only('should get subjects for student', () => {
      const v = getSubjectsForStudent(data.d.b.d);
      expect(v.length).toBe(11);
   })


});
