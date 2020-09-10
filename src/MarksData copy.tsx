import React from 'react';

interface SubLevel {
    id: string
    name: string,
    mark1: string,
    mark2: string,
    mark3: string
}

interface Level {
    name: string,
    subLevel: SubLevel[]
}

export interface Mark {
    name: string,
    level1: Level[]
}

export interface ICell {
    name: string;
    row?: string;
    column?: string;
    className: string;
    grid(): JSX.Element;
}

interface ICellStyle {
    gridRow?: string;
    gridColumn?: string
}
export class Cell implements ICell {

    constructor(public name: string, public className = 'cell', public row?: string, public column?: string) {
    }

    grid() {
        let cellStyle: ICellStyle = {};
        
        if (this.row) {
            cellStyle.gridRow = this.row
        }
        if (this.column) {
            cellStyle.gridColumn = this.column;
        }
        return <div className={this.className} style={cellStyle}>{this.name}</div>;
    }
}

export function MakeTable(marksData: Mark): any[] {
    const column1: any[] = [];
    const column2: any[] = [];
    marksData.level1.forEach(level => {
        const subLevels: any[] = [];
        level.subLevel.forEach(subLevel => {
            column2.push({ name: subLevel.name });
            subLevels.push(subLevel);
        });
        column1.push({ name: level.name, subLevels, relSize: 0 })
    })

    const rows = column2.length + 1;
    column1.forEach(column => {
        const num = column.subLevels.length / rows;
        column.relSize = Math.round((num + Number.EPSILON) * 100) / 100
    });

    return [column1, column2];
}

export function DataToGrid(data: Cell[]) {

    return data.map(cell => (
        <div style={{ gridRow: cell.row, gridColumn: cell.column }}>{cell.name}</div>
    ));
}

function countChildren(data: any) {
    if (data.children) {
        let count = 0;
        data.children.forEach((child: any) => {
            count += countChildren(child);
        })
        data.count = count
        return count;
    } else {
        return 1;
    }
}


//'-KWOsp--qGP9CH5gAS5e'
//'-KWOZhsgcwesWJ2cLFqB'

export function buildGrid(data: any): Cell[] {
    const items: Cell[] = [];
    let startRow = 2;

    const key = Object.keys(data)[0];

    function buildColumns(item: any) {
        items.push(new Cell(item.columns.cm1));
        items.push(new Cell(item.columns.cm2));
        items.push(new Cell(item.columns.cm3));
    }

    Object.entries(data).forEach((item: any) => {
        if (item[1].parentCategoryId) {

            //data[item[1].parentCategoryId].children ??= []; ToDo

            if (!data[item[1].parentCategoryId].children) {
                data[item[1].parentCategoryId].children = [];
            }
            data[item[1].parentCategoryId].children.push(item[1]);
        }
    })

    countChildren(data[key]);

    data[key].children.forEach((child: any) => {
        let rowEnd = startRow + child.count ? child.count : 0;
         
        if (!child.columns) {
            items.push(new Cell(
                child.name,
                'hcell',
                ` span ${rowEnd}`,   

            ));
       
            child.children.forEach((grandChild: any) => {
                items.push(new Cell(grandChild.name, 'hcell'));
                buildColumns(grandChild);
            });

        } else {
            items.push(new Cell(
                child.name,
                'hcell',
                `${startRow} / ${rowEnd}`,
                'span 2'
            ));

            buildColumns(child);
        }

        startRow = rowEnd;
    });

    return items;
}

export function MakeTableGrid(marksData: Mark): Cell[] {


    const items: Cell[] = [];
    let startRow = 2;

    marksData.level1.forEach(level => {
        let currentColumn = 1

        let currentRow = startRow;


        if (!level.subLevel[0].name) {
            items.push(new Cell(
                level.name,
                `${currentRow} / ${currentRow + level.subLevel.length}`,
                `${currentColumn} / ${currentColumn + 2}`
            )
            );
            currentColumn += 2;
        }
        else {
            items.push(new Cell(
                level.name,
                `${currentRow} / ${currentRow + level.subLevel.length}`,
                `${currentColumn++}`
            ));
        }

        startRow = currentRow + level.subLevel.length;


        level.subLevel.forEach(subLevel => {
            if (subLevel.name) {
                items.push(new Cell(subLevel.name, `${currentRow}`, `${currentColumn++}`));
            }

            items.push(new Cell(subLevel.mark1, `${currentRow}`, `${currentColumn++}`));
            items.push(new Cell(subLevel.mark2, `${currentRow}`, `${currentColumn++}`));
            items.push(new Cell(subLevel.mark3, `${currentRow}`, `${currentColumn++}`));

            currentRow += 1;
            currentColumn = 2;
        });

        currentRow = currentRow + level.subLevel.length + 1;


    })


    return items;
}

//name: 'אני כתלמיד- התנהגות לומד'
export const marksData1: Mark = {
    name: 'אני כתלמיד- התנהגות לומד',
    level1: [
        {
            name: 'קריאת בוקר',
            subLevel: [
                {
                    id: '111',
                    name: '',
                    mark1: 'מעדיף עיסוקים אחרים על פני קריאת בוקר.',
                    mark2: 'בדרך כלל קורא בספר הנבחר.',
                    mark3: 'קורא בעיון בספר הנבחר ונהנה לספר על חווית הקריאה שלו.'

                },

            ],
        },

        {
            name: 'כישורי חיים',
            subLevel: [
                {
                    id: '112',
                    name: '',
                    mark1: 'ממעט לשתף ברגשות ובמחשבות.',
                    mark2: 'לעיתים משתף ברגשות ובמחשבות בנוגע לשאלות שחברי הכיתה העלו.',
                    mark3: 'מרבה לשתף ברגשות ובמחשבות בנוגע לרגשות שעלו לדיון בכיתה.'

                },
            ]
        },

        {
            name: 'מפתח הלב',
            subLevel: [
                {
                    id: '121',
                    name: '',
                    mark1: 'ממעט לפעול על פי מסרים ערכיים שנלמדו בכיתה.',
                    mark2: 'מיישם את המסרים הערכיים והחברתיים הנגזרים מהערכים שנלמדו.',
                    mark3: 'משתתף בבחינת ההתנהגויות הערכיות שנלמדו, מציע דרכים ליישם אותן בחיי היום יום ומיישם אותן בעצמו.'
                }
            ]
        },

        {
            name: 'ביצוע משימות  לימודיות',
            subLevel: [
                {
                    id: '121',
                    name: 'ציוד לימודי',
                    mark1: 'לעיתים רחוקות מביא את הציוד הלימודי הנדרש.',
                    mark2: 'לרוב מביא לבית הספר את הציוד הלימודי הנדרש.',
                    mark3: 'מקפיד להביא לבית הספר את כל הציוד הנדרש ללמידה.'
                },
                {
                    id: '122',
                    name: 'משימות בכיתה',
                    mark1: 'משתתף בהכנת מעט משימות כיתתיות.',
                    mark2: 'משתתף בהכנת חלק מהמשימות הכיתתיות.',
                    mark3: 'מבצע את המשימות המוטלות עליו במלואן.'
                },

            ]
        },

    ]
}

export const marksData: Mark = {

    name: 'אני כחבר',
    level1: [
        {
            name: 'אחריות אישית',
            subLevel: [
                {
                    id: '111',
                    name: 'רכוש בית הספר',
                    mark1: 'לעתים רחוקות פועל על פי הוראות שימוש בציוד בית הספר',
                    mark2: 'משתמש ברכוש בית הספר על פי ההוראות.',
                    mark3: 'שומר על רכוש בית הספר ומשתמש בו רק על פי ההוראות.'
                },
                {
                    id: '121',
                    name: 'מילוי תפקיד אישי',
                    mark1: 'לעתים רחוקות מבצע את הנדרש בתפקיד האישי.',
                    mark2: 'בדרך כלל מבצע את הנדרש בתפקיד האישי.',
                    mark3: 'ממלא את תפקידו האישי בצורה הטובה ביותר.'
                }
            ]
        },

        {
            name: 'הליכות ונימוסים',
            subLevel: [
                {
                    id: '211',
                    name: 'סדר וניקיון',
                    mark1: 'לעתים רחוקות פועל לשמירה על ניקיון בית הספר, הכיתה והחצר.',
                    mark2: 'בדרך כלל פועל לשמור על ניקיון בית הספר, הכיתה והחצר.',
                    mark3: 'קפיד לשמור על ניקיון בית הספר, הכיתה והחצר.'
                },
                {
                    id: '221',
                    name: 'הגעה בזמן לשיעורים',
                    mark1: 'לעיתים רחוקות מגיע בזמן לשיעורים.',
                    mark2: 'בדרך כלל מגיע בזמן לשיעורים.',
                    mark3: 'לעתים מגיע לבית הספר בתלבושת אחידה.'
                },
                {
                    id: '231',
                    name: 'תלבושת אחידה',
                    mark1: 'בדרך כלל מגיע לבוש בבגדים שאינם תלבושת בית הספר.',
                    mark2: 'מקפיד להגיע בזמן לכל השיעורים.',
                    mark3: 'מקפיד להופיע בכל יום בתלבושת בית הספר.'
                },

            ]
        },

    ]

}