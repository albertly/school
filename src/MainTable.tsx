import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import {
    GroupingState,
    IntegratedGrouping,
} from '@devexpress/dx-react-grid';
import {
    Grid,
    Table,
    TableHeaderRow,
    TableGroupRow,
    Toolbar,
    TableRowDetail,
    
} from '@devexpress/dx-react-grid-material-ui';


import { generateRows } from './demo-data/generator';

const CellContent = (cell: Table.DataCellProps) => {
    console.log('cell', cell)
    return (
        
    <td>{cell.value}</td>
    )
}
const GroupRowContent: (row:any)=> any  = ({ row }) => (
    <td>

        <strong>
            {row.value}        
        </strong>
    </td>
);

export default () => {
    const [columns] = useState([
        { name: 'name', title: 'Name' },
        { name: 'gender', title: 'Gender' },
        { name: 'city', title: 'City' },
        { name: 'car', title: 'Car' },
    ]);
    const [rows] = useState(generateRows({ length: 8 }));

    return (
        <Paper>
            <Grid
                rows={rows}
                columns={columns}
            >

                <GroupingState defaultExpandedGroups={['Las Vegas', 'Paris', 'Austin', 'London', 'Chicago']} defaultGrouping={[{ columnName: 'city' }]} />
                <IntegratedGrouping />
                <Table cellComponent={CellContent} />
                {/* <Table  /> */}
                <TableHeaderRow />
                {/* <TableRowDetail /> */}
                <TableGroupRow
                   // rowComponent={GroupRowContent}
                    showColumnsWhenGrouped={false} />
                <Toolbar />
            </Grid>
        </Paper>
    );
};
