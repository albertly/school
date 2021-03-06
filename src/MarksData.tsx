import React from 'react';
import studentSubjects from './student_subjects.json';

export interface ICell {
    topicId: string;
    name: string;
    row?: string;
    column?: string;
    className: string;
    mark?: number;
    markSimbol?: string;
    grid(): JSX.Element;
}

interface ICellStyle {
    gridRow?: string;
    gridColumn?: string
}

interface IMark {
    topicId: string,
    mark: number,
}

export interface ICombo {
    code: string,
    value: string,
}

interface ISubject {
    sub: string
}

export function getSubjectsForStudent(data: any) : any[] {
    const subjects: any[] = [];
    studentSubjects.forEach((subject:ISubject) => {
        subjects.push(data[subject.sub]);
    });

    return subjects;
}

function getRandomInt(min = 1, max = 3): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function generateMarks(data: any): IMark[] {
    const marks: IMark[] = [];
    for (const [key, value] of Object.entries(data)) {
        console.log(`${key}: ${value}`);
        const v: any = value;
        if (v.columns) {
            marks.push({ topicId: key, mark: getRandomInt(50, 100), });
        }
    }

    return marks;
}

export function buildCombo(data: any): ICombo[] {
    const list: ICombo[] = [];

    for (const name in data) {
        if (data.hasOwnProperty(name) && Object.keys(data[name]).length > 1) {

            const item = {
                code: name,
                value: data[name][Object.keys(data[name])[0]].name as string,
            }

            list.push(item);

        }
    }

    return list;
}

export function preMerge(marks: IMark[]): any {
    let topicId: string = '';
    let markSimbol: string = '';

    return (cell: ICell): ICell => {
        if (cell.topicId) {
            const mark = marks.find(x => x.topicId == cell.topicId);
            if (mark) {          
                markSimbol = markToSimbol(mark.mark);            
                topicId = cell.topicId + '-' + markSimbol.split('-')[0];
            } else {
                if (cell.topicId === topicId) {
                    cell.markSimbol = markSimbol;
                    topicId = '';                    
                }
            }

        }
        return cell;

    }
}


export class Cell implements ICell {

    public markSimbol?: string;
    constructor(public topicId: string, public name: string, public className = 'cell', public row?: string, public column?: string) {
    }

    cellStyleToString(cellStyle: ICellStyle) {
        let gr = cellStyle.gridRow ? 'grid-row: ' + cellStyle.gridRow : '';
        let gc = cellStyle.gridColumn ? ' grid-column: ' + cellStyle.gridColumn : '';
        return gr + gc;
    }

    grid() {
        let cellStyle: ICellStyle = {};

        if (this.row) {
            cellStyle.gridRow = this.row
        }
        if (this.column) {
            cellStyle.gridColumn = this.column;
        }

        let divAdditional: any = null;
        let classNameAdditional: string = '';
        const markSimbol = this.markSimbol ? this.markSimbol : '';
        if (markSimbol.indexOf('-') !== -1) {
            divAdditional = <div className={markSimbol}></div>
            classNameAdditional = markSimbol.split('-')[0];
        }
        else {
            classNameAdditional = markSimbol;
        }
        return <div key={this.topicId} data-id={this.topicId}
            className={this.className + ' ' + classNameAdditional}
            style={cellStyle}
            data-style={this.cellStyleToString(cellStyle)}>
            {divAdditional}{this.name}
        </div>;
    }
}

function markToSimbol(mark: number | undefined): string {
    let simbol = '';

    mark = mark ? mark : 999;

    if (mark < 60) {
        simbol = 'one';
    } else if (mark < 65) {
        simbol = 'one-down';
    } else if (mark < 70) {
        simbol = 'two-up';
    } else if (mark < 75) {
        simbol = 'two';
    } else if (mark < 80) {
        simbol = 'two-down';
    } else if (mark < 90) {
        simbol = 'three-up';
    } else if (mark <= 100) {
        simbol = 'three'; 
    }
    return simbol;
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
        if (item.columns) {
            items.push(new Cell(item.topicId + '-one', item.columns.cm1, 'cell '));
            items.push(new Cell(item.topicId + '-two', item.columns.cm2, 'cell '));
            items.push(new Cell(item.topicId + '-three', item.columns.cm3, 'cell '));
        }
    }

    Object.entries(data).forEach((item: any) => {
        item[1].topicId = item[0];
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
                child.topicId,
                child.name,
                'hcell',
                ` span ${rowEnd}`,

            ));

            child.children.forEach((grandChild: any) => {
                items.push(new Cell(grandChild.topicId, grandChild.name, 'hcell'));
                buildColumns(grandChild);
            });

        } else {
            items.push(new Cell(
                child.topicId,
                child.name,
                'hcell',
                rowEnd !== 0 ? `span ${rowEnd}` : undefined,
                'span 2'
            ));

            buildColumns(child);
        }

        startRow = rowEnd;
    });

    return items;
}
