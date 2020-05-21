import React from 'react';

import './MainTable1.css';

export default () => {

    return (
        <div className="Main-table">
            <div className="Column-table">
                <div className="Font-Big MainCell" style={{height: "10%" }}></div>
                <div className="Font-Big MainCell" style={{height: "40%"}} >אחריות אישית</div>
                <div className="Font-Big MainCell" style={{height: "50%"}}>הליכות ונימוסים</div>
            </div>
            <div className="Column-table">
                <div className="Font-Big MainCell" style={{height: "10%"}}></div>
                <div className="Font-Big MainCell" style={{ height: "20%"}}>רכוש בית הספר</div>
                <div className="Font-Big MainCell" style={{ height: "20%"}}>מילוי תפקיד אישי</div>
                <div className="Font-Big MainCell" style={{ height: "16%"}}>סדר וניקיון</div>
                <div className="Font-Big MainCell" style={{ height: "16%"}}>הגעה בזמן לשיעורים</div>
                <div className="Font-Big MainCell" style={{ height: "18%"}}>תלבושת אחידה</div>
            </div>
            <div className="Column-table">
                <div className="Font-Big" style={{height: "10%"}}>ניצנים</div>
                <div className="Cell" style={{ height: "20%" }} >לעתים רחוקות פועל על פי הוראות שימוש בציוד בית הספר</div>
                <div className="Cell Mark70" style={{ height: "20%"}}>לעתים רחוקות מבצע את הנדרש בתפקיד האישי.</div>
                <div className="Cell" style={{ height: "16%"}}>לעתים רחוקות פועל לשמירה על ניקיון בית הספר, הכיתה והחצר.</div>
                <div className="Cell" style={{ height: "16%"}}>לעיתים רחוקות מגיע בזמן לשיעורים.</div>
                <div className="Cell" style={{ height: "16%"}}>בדרך כלל מגיע לבוש בבגדים שאינם תלבושת בית הספר.</div>
            </div>
            <div className="Column-table">
                <div className="Font-Big" style={{height: "10%"}} >בתהליך</div>
                <div className="Cell Mark80" style={{ height: "20%" }}>משתמש ברכוש בית הספר על פי ההוראות.</div>
                <div className="Cell" style={{ height: "20%" }}>בדרך כלל מבצע את הנדרש בתפקיד האישי.</div>
                <div className="Cell" style={{ height: "16%"}}>בדרך כלל פועל לשמור על ניקיון בית הספר, הכיתה והחצר.</div>
                <div className="Cell" style={{ height: "16%"}}>בדרך כלל מגיע בזמן לשיעורים.</div>
                <div className="Cell" style={{ height: "16%"}}>לעתים מגיע לבית הספר בתלבושת אחידה.</div>

            </div>
            <div className="Column-table">
                <div className="Font-Big" style={{height: "10%"}}>מיומן</div>
                <div className="Cell" style={{ height: "20%" }}>שומר על רכוש בית הספר ומשתמש בו רק על פי ההוראות.</div>
                <div className="Cell" style={{ height: "20%" }}>ממלא את תפקידו האישי בצורה הטובה ביותר.</div>
                <div className="Cell Mark100" style={{ height: "16%"}}>קפיד לשמור על ניקיון בית הספר, הכיתה והחצר.</div>
                <div className="Cell Mark100" style={{ height: "16%"}}>מקפיד להגיע בזמן לכל השיעורים.</div>
                <div className="Cell Mark100" style={{ height: "16%"}}>מקפיד להופיע בכל יום בתלבושת בית הספר.</div>

            </div>
        </div>
    )
}