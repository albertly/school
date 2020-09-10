import React from 'react';

import './MainTable2.css';
import data from './all1.json'
import { buildGrid } from './MarksData';

export default () => {

    return (
        <div className="Main-table">

            <div className="hcell" style={{ gridColumn: "1", gridRow: "1" }}></div>
            <div className="hcell" style={{ gridColumn: "2", gridRow: "1" }}></div>
            <div className="hcell" style={{ gridColumn: "3", gridRow: "1" }}>ניצנים</div>
            <div className="hcell" style={{ gridColumn: "4", gridRow: "1" }} >בתהליך</div>
            <div className="hcell" style={{ gridColumn: "5", gridRow: "1" }}>מיומן</div>

            {/* -KWOsozzNKWfrlMj3eHc */}
            {/* -KWOZhsbMZ31lao9TAa3 */}
            {buildGrid(data.d.b.d['-KWOZhsbMZ31lao9TAa3']).map(cell => cell.grid())}
            {/* {MakeTableGrid(marksData1).map(cell => cell.grid())} */}
            {/* <div className="hcell" style={{gridColumn: "1 ", gridRow: "2 / 4" }} >אחריות אישית</div>                
                <div className="hcell" style={{gridColumn: "2", gridRow: "2" }}>רכוש בית הספר</div>
                <div className="cell" style={{gridColumn: "3", gridRow: "2" }} >לעתים רחוקות פועל על פי הוראות שימוש בציוד בית הספר</div>
                <div className="cell Mark80" style={{gridColumn: "4", gridRow: "2" }}>משתמש ברכוש בית הספר על פי ההוראות.</div>
                <div className="cell" style={{gridColumn: "5", gridRow: "2" }}>שומר על רכוש בית הספר ומשתמש בו רק על פי ההוראות.</div>

                <div className="hcell" style={{gridColumn: "2", gridRow: "3" }}>מילוי תפקיד אישי</div>
                <div className="cell Mark70" style={{gridColumn: "3", gridRow: "3" }}>
                    <div style={{                             
                     position: 'absolute',
                     borderStyle: 'solid', 
                     borderColor: 'transparent transparent transparent #c6d8ae',                     
                     borderWidth: '12px 0 12px 15px',
                     top: '40%',
                     left: 0
                    }}></div>
                    לעתים רחוקות מבצע את הנדרש בתפקיד האישי.
                </div>
                <div className="cell" style={{gridColumn: "4", gridRow: "3" }}>בדרך כלל מבצע את הנדרש בתפקיד האישי.</div>
                <div className="cell" style={{gridColumn: "5", gridRow: "3" }}>ממלא את תפקידו האישי בצורה הטובה ביותר.</div>


                <div className="hcell" style={{gridColumn: "1 / 2", gridRow: "4 / 7" }}>הליכות ונימוסים</div>
                <div className="hcell" style={{gridColumn: "2", gridRow: "4" }}>סדר וניקיון</div>
                <div className="cell" style={{gridColumn: "3", gridRow: "4" }}>לעתים רחוקות פועל לשמירה על ניקיון בית הספר, הכיתה והחצר.</div>
                <div className="cell" style={{gridColumn: "4", gridRow: "4" }}>בדרך כלל פועל לשמור על ניקיון בית הספר, הכיתה והחצר.</div>
                <div className="cell Mark100" style={{gridColumn: "5", gridRow: "4" }}>קפיד לשמור על ניקיון בית הספר, הכיתה והחצר.</div>


                <div className="hcell" style={{gridColumn: "2", gridRow: "5" }}>הגעה בזמן לשיעורים</div>
                <div className="cell" style={{gridColumn: "3", gridRow: "5" }}>לעיתים רחוקות מגיע בזמן לשיעורים.</div>
                <div className="cell" style={{gridColumn: "4", gridRow: "5" }}>בדרך כלל מגיע בזמן לשיעורים.</div>
                <div className="cell Mark100" style={{gridColumn: "5", gridRow: "5" }}>מקפיד להגיע בזמן לכל השיעורים.</div>
                
                
                <div className="Font-Big" style={{gridColumn: "2", gridRow: "6" }}>תלבושת אחידה</div>                
                <div className="cell" style={{gridColumn: "3", gridRow: "6" }}>בדרך כלל מגיע לבוש בבגדים שאינם תלבושת בית הספר.</div>                
                <div className="cell" style={{gridColumn: "4", gridRow: "6" }}>לעתים מגיע לבית הספר בתלבושת אחידה.</div>
                <div className="cell Mark100" style={{gridColumn: "5", gridRow: "6" }}>מקפיד להופיע בכל יום בתלבושת בית הספר.</div> */}

        </div>
    )
}