import {MakeTable, marksData } from  './MarksData';

describe.only('Main Table', () => {

    it.only('should return column1', () => {

        const result: any[][] = MakeTable(marksData);
                    
        console.log(result);

        expect(result[0].length).toBe(2);
        expect(result[1].length).toBe(5);
        
        expect(result[0].reduce((accumulator, current) => accumulator +  +current.relSize , 0.17)).toBe(1);
       
     });

});
