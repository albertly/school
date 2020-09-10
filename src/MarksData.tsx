import React from 'react';

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
