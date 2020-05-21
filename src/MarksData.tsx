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

export  interface Mark {
        name: string,
        level1:  Level[]
}

export function MakeTable( marksData : Mark) : any[] {
      const column1: any[] = [];
      const column2: any[] = [];
      marksData.level1.forEach(level => {            
            const subLevels: any[] = [];
            level.subLevel.forEach(subLevel => {
                 column2.push({name: subLevel.name});
                 subLevels.push(subLevel);
            });
            column1.push({name: level.name, subLevels, relSize: 0 })
      })

      const rows = column2.length + 1;
      column1.forEach(column => {
        const num = column.subLevels.length / rows;
        column.relSize =  Math.round((num + Number.EPSILON) * 100) / 100 
      });

      return [column1, column2];
}

export  const  marksData : Mark = {
   
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