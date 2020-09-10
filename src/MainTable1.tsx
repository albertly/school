import React from 'react';

import './MainTable1.css';

export default () => {

    return (
        <div className="Main-table">
            <div className="Column-table">
                <div className="Font-Big" style={{flex: 1 }}></div>
                <div className="Font-Big" style={{flex: 4}} >אחריות אישית</div>
                <div className="Font-Big" style={{flex: 4}} ></div>
                <div className="Font-Big" style={{flex: 4 }}>הליכות ונימוסים</div>
                <div className="Font-Big" style={{flex: 4 }}></div>
                <div className="Font-Big" style={{flex: 4 }}></div>
            </div>
            <div className="Column-table">
                <div className="Font-Big " style={{flex: 1}}></div>
                <div className="Font-Big" style={{ flex: 4 }}>רכוש בית הספר</div>
                <div className="Font-Big" style={{ flex: 4 }}>מילוי תפקיד אישי</div>
                <div className="Font-Big" style={{ flex: 4 }}>סדר וניקיון</div>
                <div className="Font-Big" style={{ flex: 4 }}>הגעה בזמן לשיעורים</div>
                <div className="Font-Big" style={{ flex: 4 }}>תלבושת אחידה</div>
            </div>
            <div className="Column-table">
                <div className="Font-Big" style={{flex: 1 }}>ניצנים</div>
                <div className="Cell" style={{ flex: 4 }} >לעתים רחוקות פועל על פי הוראות שימוש בציוד בית הספר</div>
                <div className="Cell Mark70" style={{ flex: 4 }}>
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
                <div className="Cell" style={{ flex: 4 }}>לעתים רחוקות פועל לשמירה על ניקיון בית הספר, הכיתה והחצר.</div>
                <div className="Cell" style={{ flex: 4 }}>לעיתים רחוקות מגיע בזמן לשיעורים.</div>
                <div className="Cell" style={{ flex: 4 }}>בדרך כלל מגיע לבוש בבגדים שאינם תלבושת בית הספר.</div>
            </div>
            <div className="Column-table">
                <div className="Font-Big" style={{flex: 1 }} >בתהליך</div>
                <div className="Cell Mark80" style={{ flex: 4 }}>משתמש ברכוש בית הספר על פי ההוראות.</div>
                <div className="Cell" style={{ flex: 4 }}>בדרך כלל מבצע את הנדרש בתפקיד האישי.</div>
                <div className="Cell" style={{ flex: 4 }}>בדרך כלל פועל לשמור על ניקיון בית הספר, הכיתה והחצר.</div>
                <div className="Cell" style={{ flex: 4 }}>בדרך כלל מגיע בזמן לשיעורים.</div>
                <div className="Cell" style={{ flex: 4 }}>לעתים מגיע לבית הספר בתלבושת אחידה.</div>

            </div>
            <div className="Column-table">
                <div className="Font-Big" style={{flex: 1 }}>מיומן</div>
                <div className="Cell" style={{ flex: 4 }}>שומר על רכוש בית הספר ומשתמש בו רק על פי ההוראות.</div>
                <div className="Cell" style={{ flex: 4 }}>ממלא את תפקידו האישי בצורה הטובה ביותר.</div>
                <div className="Cell Mark100" style={{ flex: 4 }}>קפיד לשמור על ניקיון בית הספר, הכיתה והחצר.</div>
                <div className="Cell Mark100" style={{ flex: 4 }}>מקפיד להגיע בזמן לכל השיעורים.</div>
                <div className="Cell Mark100" style={{ flex: 4 }}>מקפיד להופיע בכל יום בתלבושת בית הספר.</div>

            </div>
        </div>
    )
}