

const nodes = [
    { id: 234114, label:"מבוא למדעי המחשב \n 234114", title: "4", color:"#98c4fc" ,level:1},
    { id: 234129, label: "מבוא לתורת הקבוצות \n 234129", title: "3", color:"#98c4fc",level:1 },
    { id: 104166, label: "אלגברה 1מ \n 104166", title: "5.5", color:"#98c4fc" ,level:1},
    { id: 104031, label: "אינפי 1מ \n 104031" , title: "5.5", color:"#98c4fc",level:1 },
    { id: 104032, label: "אינפי 2מ \n 104032", title: "5", color:"#98c4fc" ,level:1},
    { id: 114071, label: "פיזיקה 1מ \n 114071", title: "3.5", color:"#98c4fc" ,level:1},
    { id: 234141, label: "קומבינטוריקה למדמ\"ח \n 234141", title: "3", color:"#98c4fc",level:1 },
    { id: 234125, label: "אלגוריתמים נומריים \n 234125", title: "3" , color:"#98c4fc",level:1},
    { id: 94412,  label: "הסתברות מ \n 94412", title: "4" , color:"#98c4fc",level:1},
    { id: 104134, label: "אלגברה מודרנית \n 104134", title: "2.5", color:"#98c4fc",level:1 },
    { id: 234292, label: "לוגיקה \n 234292", title: "3", color:"#98c4fc" ,level:1},
    { id: 44252 , label: "מערכות ספרתיות  \n 44252", title: "3", color:"#98c4fc",level:1 },
    { id: 234124, label: "מבוא לתכנות מערכות\n 234124", title: "4", color:"#98c4fc",level:1 },
    { id: 234218, label: "מבני נתונים 1  \n 234218", title: "3", color:"#98c4fc",level:1 },
    { id: 234247, label: "אלגוריתמים 1 \n 234247", title: "3", color:"#98c4fc",level:1 },
    { id: 234123, label: "מערכות הפעלה \n 234123", title: "4.5", color:"#98c4fc",level:1 },
    { id: 234118, label: "ארגון ותכנות המחשב\n 234118", title: "3", color:"#98c4fc",level:1 },
    { id: 236343, label: "תורת החישוביות\n 236343", title: "3", color:"#98c4fc",level:1 },
    { id: 236360, label: "תורת הקומפילציה\n 236360", title: "3", color:"#98c4fc",level:1 },
    { id: 236267, label: "מבנה מחשבים\n 236267", title: "3", color:"#98c4fc",level:1 },

    // math courses
    { id: 104135, label: "משוואות דיפרנציאליות רגילות ת\n 104135", title: "2.5",color:"#FFEB00",level:2 },
    { id: 104033, label: "אנליזה וקטורית\n 104033", title: "2.5",color:"#FFEB00",level:2  },
    { id: 104174, label: "'אלגברה ב\n 104174", title: "3.5",color:"#FFEB00" ,level:2 },
    { id: 104122, label: "תורת הפונקציות 1\n 104122", title: "3.5",color:"#FFEB00",level:2  },
    { id: 104142, label: "מבוא למרחבים מטרים וטופולוגיים\n 104142", title: "3.5",color:"#FFEB00",level:2 },
    { id: 104285, label: "'משוואות דיפרנציאליות רגילות א\n 104285", title: "3.5",color:"#FFEB00" ,level:2 },
    { id: 104295, label: "חשבון אינפיניטסימלי 3\n 104295", title: "5.0",color:"#FFEB00" ,level:2 },

    // science courses
    { id: 114075, label: "פיזיקה 2ממ\n 114075", title: "5.0", color: "#117554",level:3 },
    { id: 114052, label: "פיזיקה 2\n 114052", title: "3.5", color: "#117554",level:3 },
    { id: 114054, label: "פיזיקה 3\n 114054", title: "3.5", color: "#117554",level:3  },
    { id: 114073, label: "מבוא לפיזיקה קוונטית להנדסה\n 114073", title: "3.5", color: "#117554",level:3  },
    { id: 114101, label: "מכניקה אנליטית\n 114101", title: "4.0", color: "#117554",level:3  },
    { id: 114246, label: "אלקטרומגנטיות ואלקטרודינמיקה\n 114246", title: "5.0", color: "#117554",level:3  },
    { id: 124120, label: "יסודות הכימיה\n 124120", title: "5.0", color: "#117554",level:3  },
    { id: 125001, label: "כימיה כללית\n 125001", title: "4.0", color: "#117554",level:3  },
    { id: 125801, label: "כימיה אורגנית\n 125801", title: "5.0", color: "#117554",level:3  },
    { id: 124510, label: "כימיה פיזיקלית\n 124510", title: "4.0", color: "#117554",level:3  },
    { id: 134058, label: "ביולוגיה 1\n 134058", title: "3.0", color: "#117554",level:3  },
    { id: 134020, label: "גנטיקה כללית\n 134020", title: "3.5", color: "#117554",level:3  },
  
    // A list
    { id: 236306, label: "גרפים מקריים\n 236306", title: "2", color: "#FF6600", level: 4 },
    { id: 236309, label: "מבוא לתורת הצפינה\n 236309", title: "3", color: "#FF6600", level: 4 },
    { id: 236318, label: "אנליזה של פונקציות בוליאניות\n 236318", title: "2", color: "#FF6600", level: 4 },
    { id: 236359, label: "2 אלגוריתמים\n 236359", title: "3", color: "#FF6600", level: 4 },
    { id: 236374, label: "שיטות הסתברותיות ואלגוריתמים\n 236374", title: "3", color: "#FF6600", level: 4 },
    { id: 236377, label: "אלגוריתמים מבוזרים בגרפים\n 236377", title: "3", color: "#FF6600", level: 4 },
    { id: 236378, label: "עקרונות ניהול מידע חסר ודאות\n 236378", title: "2", color: "#FF6600", level: 4 },
    { id: 236508, label: "קריפטוגרפיה וסיבוכיות\n 236508", title: "2", color: "#FF6600", level: 4 },
    { id: 236518, label: "סיבוכיות תקשורת\n 236518", title: "2", color: "#FF6600", level: 4 },
    { id: 236521, label: "אלגוריתמי קירוב\n 236521", title: "2", color: "#FF6600", level: 4 },
    { id: 236755, label: "אלגוריתמים מבוזרים\n 236755", title: "3", color: "#FF6600", level: 4 },
    { id: 236760, label: "למידה חישובית\n 236760", title: "2", color: "#FF6600", level: 4 },
    { id: 236313, label: "תורת הסיבוכיות\n 236313", title: "3", color: "#FF6600", level: 4 },
    { id: 236719, label: "גאומטריה חישובית\n 236719", title: "3", color: "#FF6600", level: 4 },
    { id: 236779, label: "יסודות אלגוריתמיים למידע מאסיבי\n 236779", title: "2", color: "#FF6600", level: 4 },
    { id: 238739, label: "גאומטריה אלגוריתמית דיסקרטית\n 238739", title: "2", color: "#FF6600", level: 4 },
    { id: 236025, label: "אוטומטים, לוגיקה ומשחקים \n 236025", title: "2", color: "#FF6600", level: 4 },
    { id: 236026, label: "ידע ומשחקים במערכות מבוזרות\n 236026", title: "2", color: "#FF6600", level: 4 },
    { id: 236304, label: "לוגיקה למדעי המחשב 2\n 236304", title: "3", color: "#FF6600", level: 4 },
    { id: 236342, label: "מבוא לאימות תוכנה\n 236342", title: "3", color: "#FF6600", level: 4 },
    { id: 236345, label: "אימות אוטומטי של מערכות תוכנה וחומרה\n 236345", title: "3", color: "#FF6600", level: 4 },
    { id: 236363, label: "מסדי נתונים\n 236363", title: "3", color: "#FF6600", level: 4 }, 
    { id: 236350, label: "הגנה ברשתות\n 236350", title: "3", color: "#FF6600", level: 4 },
    { id: 236379, label: "קידוד ואלגוריתמים לזכרונות\n 236379", title: "3", color: "#FF6600", level: 4 },
    { id: 236500, label: "קריפטאנליזה\n 236500", title: "3", color: "#FF6600", level: 4 },
    { id: 236506, label: "קריפטולוגיה מודרנית\n 236506", title: "3", color: "#FF6600", level: 4 },
    { id: 236520, label: "קידוד במערכות אחסון מידע\n 236520", title: "2", color: "#FF6600", level: 4 },
    { id: 236990, label: "מבוא לעיבוד אינפורמציה קוונטית\n 236990", title: "3", color: "#FF6600", level: 4 },
    { id: 236271, label: "פיתוח מבוסס אנדרואיד\n 236271", title: "2.0", color: "#FF6600", level: 4 },
    { id: 236278, label: "מאיצים חישוביים ומערכות מואצות\n 236278", title: "3.0", color: "#FF6600", level: 4 },
    { id: 236319, label: "שפות תכנות\n 236319", title: "3.0", color: "#FF6600", level: 4 },
    { id: 236332, label: "האינטרנט של הדברים - טכנולוגיות ויישומים\n 236332", title: "2.0", color: "#FF6600", level: 4 },
    { id: 236347, label: "היסק אוטומטי וסינתזה של תוכנה\n 236347", title: "3.0", color: "#FF6600", level: 4 },
    { id: 236369, label: "תכנות מערכות ברשת האינטרנט\n 236369", title: "3.0", color: "#FF6600", level: 4 },
    { id: 236376, label: "הנדסת מערכות הפעלה\n 236376", title: "4.0", color: "#FF6600", level: 4 },
    { id: 236490, label: "אבטחת מחשבים\n 236490", title: "3.0", color: "#FF6600", level: 4 },
    { id: 236491, label: "תכנות מאובטח\n 236491", title: "3.0", color: "#FF6600", level: 4 },
    { id: 236496, label: "הנדסה לאחור\n 236496", title: "3.0", color: "#FF6600", level: 4 },
    { id: 236700, label: "תיכון תוכנה\n 236700", title: "3.0", color: "#FF6600", level: 4 },
    { id: 236703, label: "תכנות מונחה עצמים\n 236703", title: "3.0", color: "#FF6600", level: 4 },
    { id: 236780, label: "אלגוריתמים לניהול זכרון דינמי\n 236780", title: "2.0", color: "#FF6600", level: 4 },
    { id: 236272, label: "פרויקט פיתוח מבוסס אנדרואיד\n 236272", title: "3.0", color: "#FF6600", level: 4 },
    { id: 234312, label: "פרויקט שנתי בהנדסת תוכנה שלב ב\n 234312", title: "3.5", color: "#FF6600", level: 4 },
    { id: 234311, label: "פרויקט שנתי בהנדסת תוכנה שלב א\n 234311", title: "3.0", color: "#FF6600", level: 4 },
    { id: 236333, label: "פרויקט באינטרנט של הדברים \n 236333", title: "3.0", color: "#FF6600", level: 4 },
    { id: 236322, label: "מערכות אחסון מידע \n 236322", title: "3.0", color: "#FF6600", level: 4 },
    { id: 236334, label: "מבוא לרשתות מחשבים \n 236334", title: "3.0", color: "#FF6600", level: 4 },
    { id: 236341, label: "תקשורת באינטרנט \n 236341", title: "3.0", color: "#FF6600", level: 4 },
    { id: 236351, label: "מערכות מבוזרות \n 236351", title: "3.0", color: "#FF6600", level: 4 },
    { id: 236370, label: "תכנות מקבילי ומבוזר לעיבוד נתונים ולמידה חישובית\n 236370", title: "3.0", color: "#FF6600", level: 4 },
    { id: 236422, label: "טכנולוגיות ומערכות אחסון מתקדמות \n 236422", title: "3.0", color: "#FF6600", level: 4 },
    { id: 236201, label: "מבוא לייצוג ועיבוד מידע\n 236201", title: "3.0", color: "#FF6600", level: 4 },
    { id: 236330, label: "מבוא לאופטימיזציה\n 236330", title: "3.0", color: "#FF6600", level: 4 },
    { id: 236781, label: "למידה עמוקה על מאיצים חישוביים\n 236781", title: "3.0", color: "#FF6600", level: 4 },
    { id: 236860, label: "עיבוד תמונות דיגיטלי\n 236860", title: "3.0", color: "#FF6600", level: 4 },
    { id: 236861, label: "ראייה חישובית גאומטרית\n 236861", title: "3.0", color: "#FF6600", level: 4 },
    { id: 236873, label: "ראייה ממוחשבת\n 236873", title: "3.0", color: "#FF6600", level: 4 },
    { id: 236901, label: "אלגוריתמים לתכנון תנועה רובוטי\n 236901", title: "2.0", color: "#FF6600", level: 4 },
    { id: 236927, label: "מבוא לרובוטיקה\n 236927", title: "3.0", color: "#FF6600", level: 4 },
    { id: 238790, label: "שיטות רב סריג\n 238790", title: "2.0", color: "#FF6600", level: 4 },
    { id: 104177, label: "גאומטריה דיפרנצאלית\n 104177", title: "3.5", color: "#FF6600", level: 4 },
    { id: 236216, label: "גרפיקה ממוחשבת 1\n 236216", title: "3.0", color: "#FF6600", level: 4 },
    { id: 236329, label: "עיבוד ספרתי של גאומטריה\n 236329", title: "3.0", color: "#FF6600", level: 4 },
    { id: 236716, label: " מודלים גאומטריים במערכות תיב\"מ\n 236716", title: "3.0", color: "#FF6600", level: 4 },
    { id: 236501, label: " מבוא לבינה מלאכותית\n 236501", title: "3.0", color: "#FF6600", level: 4 },
    { id: 236299, label: " מבוא לעיבוד שפות טבעיות\n 236299", title: "3.0", color: "#FF6600", level: 4 },
    { id: 236756, label: " מבוא למערכות לומדות\n 236756", title: "3.5", color: "#FF6600", level: 4 },
    { id: 94423, label: " מבוא לסטטיסטיקה\n 94423", title: "3.5", color: "#FF6600", level: 4 },
    { id: 236522, label: " אלגוריתמים בביולוגיה חישובית\n 236522", title: "3.0", color: "#FF6600", level: 4 },
    { id: 236523, label: " מבוא לביואינפורמטיקה\n 236523", title: "2.5", color: "#FF6600", level: 4 },
    { id: 134019, label: " מבוא לביוכימיה ואנזימולוגיה\n 134019", title: "2.5", color: "#FF6600", level: 4 },
    { id: 134082, label: " ביולוגיה מולקולרית\n 134082", title: "2.5", color: "#FF6600", level: 4 },
    { id: 234901, label: " סדנה בתכנות תחרותי\n 234901", title: "3.0", color: "#FF6600", level: 4 },
    { id: 236310, label: " תורת השפות הפורמליות\n 236310", title: "3.0", color: "#FF6600", level: 4 },

    // B list
    { id: 36044, label: " תכן תנועת רובוטים וניווט עי חיישנים\n 036044", title: "3.0", color: "#A04747", level: 5 },
    { id: 44105, label: " תורת המעגלים החשמליים\n 044105", title: "4.0", color: "#A04747", level: 5 },
    { id: 44127, label: " יסודות התקני מוליכים למחצה\n 044127", title: "3.5", color: "#A04747", level: 5 },
    { id: 44131, label: " אותות ומערכות\n 044131", title: "5.0", color: "#A04747", level: 5 },
    { id: 44137, label: " מעגלים אלקטרוניים\n 044137", title: "5.0", color: "#A04747", level: 5 },
    { id: 44202, label: " אותות אקריים\n 044202", title: "3.0", color: "#A04747", level: 5 },
    { id: 46201, label: " עיבוד אותות אקראיים\n 046201", title: "3.0", color: "#A04747", level: 5 },
    { id: 46206, label: " מבוא לתקשורת ספרתית\n 046206", title: "3.0", color: "#A04747", level: 5 },
    { id: 46332, label: " מערכות ראייה ושמיה\n 046332", title: "3.0", color: "#A04747", level: 5 },
    { id: 46880, label: " תכן לוגי ממוחשב של שבבים\n 046880", title: "3.0", color: "#A04747", level: 5 },
    { id: 86761, label: " ניווט נעזר ראיה ממוחשבת\n 086761", title: "2.0", color: "#A04747", level: 5 },
    { id: 94222, label: " הנדסת מערכות מבוססת מודלים\n 094222", title: "3.0", color: "#A04747", level: 5 },
    { id: 94313, label: " מודלים דטרמיניסטים בחקר ביצועים\n 094313", title: "3.5", color: "#A04747", level: 5 },
    { id: 94314, label: " מודלים סטוכסטיים בחקר ביצועים\n 094314", title: "3.5", color: "#A04747", level: 5 },
    { id: 94334, label: " סימולציה ספרתית\n 094334", title: "3.0", color: "#A04747", level: 5 },
    { id: 94333, label: " מודלים דינמיים בחקר ביצועים\n 094333", title: "3.0", color: "#A04747", level: 5 },
    { id: 94591, label: " מבוא לכלכלה\n 094591", title: "3.5", color: "#A04747", level: 5 },
    { id: 96200, label: " כלים מתמטיים למדעי הנתונים\n 096200", title: "3.5", color: "#A04747", level: 5 },
    { id: 96211, label: " מודלים למסחר אלקטרוני\n 096211", title: "3.5", color: "#A04747", level: 5 },
    { id: 96224, label: " ניהול מידע מבוזר\n 096224", title: "3.0", color: "#A04747", level: 5 },
    { id: 96250, label: " מערכות מידע מבוזרות\n 96250", title: "3.5", color: "#A04747", level: 5 },
    { id: 96262, label: " אחזור מידע\n 96262", title: "3.5", color: "#A04747", level: 5 },
    { id: 96411, label: " למידה סטטיסטית מבוססת נתונים\n 096411", title: "3.5", color: "#A04747", level: 5 },
    { id: 97317, label: "תורת המשחקים השיתופיים \n 097317", title: "2.5", color: "#A04747", level: 5 },
    { id: 104157, label: " מבוא לתורת המספרים\n 104157", title: "3.5", color: "#A04747", level: 5 },
    { id: 104165, label: "פונקציות ממשיות \n 104165", title: "3.5", color: "#A04747", level: 5 },
    { id: 104158, label: " מבוא לחבורות\n 104158", title: "3.5", color: "#A04747", level: 5 },
    { id: 104192, label: " מבוא למתמטיקה שימושית\n 104192", title: "3.0", color: "#A04747", level: 5 },
    { id: 104221, label: " פונקציות מרוכבות והתמרות אינטגרליות\n 104221", title: "4.0", color: "#A04747", level: 5 },
    { id: 104223, label: " משוואות דיפרציאליות וטורי פוריה\n 104223", title: "4.0", color: "#A04747", level: 5 },
    { id: 104279, label: " מבוא לחוגים ושדות\n 104279", title: "2.5", color: "#A04747", level: 5 },
    { id: 106378, label: "תורת המידה \n 106378", title: "3.0", color: "#A04747", level: 5 },
    { id: 104294, label: " מבוא לאנליזה פונקציונלית ואנליזת פורייה\n 104294", title: "5.0", color: "#A04747", level: 5 },
    { id: 106383, label: " טופולוגיה אלגברית\n 106383", title: "3.0", color: "#A04747", level: 5 },
    { id: 115203, label: " פיזיקה קוונטית 1\n 115203", title: "5.0", color: "#A04747", level: 5 },
    { id: 115204, label: " פיזיקה קוונטית 2\n 115204", title: "5.0", color: "#A04747", level: 5 },
    { id: 114036, label: " פיזיקה סטטיסטית ותרמית\n 114036", title: "5.0", color: "#A04747", level: 5 },
    { id: 116217, label: " פיזיקה של מצב מוצק\n 116217", title: "3.5", color: "#A04747", level: 5 },
    { id: 116354, label: "אסטרופיזיקה וקוסמולוגיה \n 116354", title: "3.5", color: "#A04747", level: 5 },
    { id: 134113, label: " מסלולים מטבוליים\n 134113", title: "3.5", color: "#A04747", level: 5 },
    { id: 134128, label: " ביולוגיה של התא\n 134128", title: "3.5", color: "#A04747", level: 5 },
    { id: 134119, label: " בקרת הביטוי הגנטי\n 134119", title: "2.5", color: "#A04747", level: 5 },

];




  const edges = [
    { from: 104031, to: 114071, dashes:true, arrows: { to: { enabled: false } }},
    { from: 104032, to: 234125, dashes:true, arrows: { to: { enabled: false } }},
    { from: 94412,  to: 234218, dashes:true, arrows: { to: { enabled: false } }},
    { from: 234118, to: 234123, dashes:true, arrows: { to: { enabled: false } }},
    { from: 104135, to: 104032, dashes:true, arrows: { to: { enabled: false } }},
    { from: 104032, to: 114075, dashes:true, arrows: { to: { enabled: false } }},
    { from: 236272, to: 236271, dashes:true, arrows: { to: { enabled: false } }},
    { from: 236332, to: 236333, dashes:true, arrows: { to: { enabled: false } }},
    { from: 236350, to: 236490, dashes:true, arrows: { to: { enabled: false } }},

    { from: 104031, to: 104032 },
    { from: 104166, to: 234141 },
    { from: 104031, to: 234141 },
    { from: 234114, to: 234125 },
    { from: 104031, to: 234125 },
    { from: 104031, to: 94412  },
    { from: 104166, to: 104134 },
    { from: 234129, to: 234292 },
    { from: 234114, to: 44252  },
    { from: 234114, to: 234124 },
    { from: 234124, to: 234218 },
    { from: 234141, to: 234218 },
    { from: 44252,  to: 234118 },         
    { from: 234124, to: 234118 },
    { from: 234218, to: 234123 },
    { from: 234141, to: 234247 },
    { from: 234218, to: 234247 },
    { from: 234247, to: 236343 },
    { from: 234118, to: 236267 },
    { from: 234129, to: 236360 },
    { from: 234292, to: 236360 },
    { from: 234118, to: 236360 },
    { from: 104166, to: 104135 },
    { from: 104031, to: 104135 },
    { from: 104032, to: 104033 },
    { from: 104166, to: 104033 },
    { from: 104166, to: 104174 },
    { from: 104032, to: 104122 },
    { from: 104031, to: 104142 },
    { from: 234129, to: 104142 },
    { from: 104166, to: 104285 },
    { from: 104032, to: 104285 },
    { from: 104032, to: 104295 },
    { from: 104174, to: 104295 },
    { from: 114071, to: 114075 },
    { from: 114071, to: 114052 },
    { from: 114052, to: 114054 },
    { from: 114075, to: 114054 },
    { from: 114075, to: 114101 },
    { from: 104135, to: 114101 },
    { from: 104032, to: 114101 },
    { from: 114075, to: 114246 },
    { from: 114101, to: 114246 },
    { from: 114075, to: 114073 },
    { from: 104135, to: 114073 },
    { from: 124120, to: 125801 },
    { from: 125001, to: 125801 },
    { from: 124120, to: 124510 },
    { from: 125001, to: 124510 },
    { from: 134058, to: 134020 },
    { from: 104166, to: 236760 },
    { from: 94412,  to: 236760 },
    { from: 104134, to: 236309 },
    { from: 94412,  to: 236306 },
    { from: 104166, to: 236306 },
    { from: 104166, to: 236318 },
    { from: 94412,  to: 236318 },
    { from: 94412,  to: 236359 },
    { from: 236343, to: 236359 },
    { from: 94412,  to: 236374 },
    { from: 234247, to: 236374 },
    { from: 94412,  to: 236377 },
    { from: 234247, to: 236377 },
    { from: 236363, to: 236378 },
    { from: 236319, to: 236703 },
    { from: 236506, to: 236508 },
    { from: 236343, to: 236508 },
    { from: 236313, to: 236518 },
    { from: 94412,  to: 236518 },
    { from: 94412,  to: 236521 },
    { from: 234247, to: 236521 },
    { from: 234247, to: 236755 },
    { from: 236343, to: 236760 },
    { from: 236719, to: 238739 },
    { from: 234218, to: 236779 },
    { from: 104166, to: 236779 },
    { from: 94412,  to: 236779 },
    { from: 234218, to: 236719 },
    { from: 234129, to: 236025 },
    { from: 236343, to: 236025 },
    { from: 234292, to: 236026 },
    { from: 234218, to: 236026 },
    { from: 234292, to: 236304 },
    { from: 236343, to: 236304 },
    { from: 234292, to: 236342 },
    { from: 236342, to: 236345 },
    { from: 234292, to: 236363 },
    { from: 234123, to: 236350 },
    { from: 234247, to: 236379 },
    { from: 104134, to: 236379 },
    { from: 236506, to: 236500 },
    { from: 94412,  to: 236506 },
    { from: 236343, to: 236506 },
    { from: 104134, to: 236506 },
    { from: 44252,  to: 236520 },
    { from: 94412,  to: 236520 },
    { from: 114071, to: 236990 },
    { from: 234247, to: 236990 },
    { from: 236703, to: 236271 },
    { from: 234123, to: 236278 },
    { from: 236267, to: 236278 },
    { from: 234124, to: 236319 },
    { from: 236360, to: 236347 },
    { from: 234122, to: 236369 },
    { from: 236363, to: 236369 },
    { from: 234123, to: 236376 },
    { from: 234123, to: 236490 },
    { from: 234124, to: 236491 },
    { from: 234123, to: 236496 },
    { from: 236703, to: 236700 },
    { from: 234123, to: 236780 },
    { from: 234247, to: 236780 },
    { from: 236703, to: 236272 },
    { from: 236703, to: 234311 },
    { from: 234311, to: 234312 },
    { from: 44252,  to: 236333 },
    { from: 234124, to: 236333 },
    { from: 94412,  to: 236322 },
    { from: 234218, to: 236322 },
    { from: 234123, to: 236322 },
    { from: 94412,  to: 236334 },
    { from: 234218, to: 236334 },
    { from: 236334, to: 236341 },
    { from: 234123, to: 236370 },
    { from: 234123, to: 236351 },
    { from: 236334, to: 236351 },
    { from: 236370, to: 236351 },
    { from: 236322, to: 236422 },
    { from: 234125, to: 236201 },
    { from: 234125, to: 236330 },
    { from: 104032, to: 236330 },
    { from: 104166, to: 236330 },
    { from: 234125, to: 236781 },
    { from: 236201, to: 236860 },
    { from: 234247, to: 236861 },
    { from: 104281, to: 236861 },
    { from: 236501, to: 236901 },
    { from: 234218, to: 236927 },
    { from: 234247, to: 236927 },
    { from: 234125, to: 238790 },
    { from: 104142, to: 104177 },
    { from: 104295, to: 104177 },
    { from: 104174, to: 104177 },
    { from: 234218, to: 236216 },
    { from: 236216, to: 236329 },
    { from: 234218, to: 236716 },
    { from: 234218, to: 236719 },
    { from: 236201, to: 236873 },
    { from: 234247, to: 236501 },
    { from: 234247, to: 236299 },
    { from: 94412,  to: 236756 },
    { from: 234125, to: 236756 },
    { from: 94412,  to: 94423  },
    { from: 94412,  to: 236522 },
    { from: 234247, to: 236756 },
    { from: 134058, to: 236523 },
    { from: 234114, to: 236523 },
    { from: 134058, to: 134019 },
    { from: 124120, to: 236523 },
    { from: 125801, to: 134082 },
    { from: 134020, to: 134082 },
    { from: 234247, to: 234901 },
    { from: 236343, to: 236310 },
    { from: 234129, to: 234901 },
    { from: 114075, to: 44105  },
    { from: 104135, to: 44105  },
    { from: 104135, to: 44127  },
    { from: 114075, to: 44127  },
    { from: 44105,  to: 44131  },
    { from: 104223, to: 44131  },
    { from: 44105,  to: 44137  },
    { from: 44131,  to: 44137  },
    { from: 44252,  to: 44137  },
    { from: 44127,  to: 44137  },
    { from: 44131,  to: 44202  },
    { from: 94412,  to: 44202  },
    { from: 44202,  to: 46206  },
    { from: 44202,  to: 46201  },
    { from: 44131,  to: 46332  },
    { from: 44131,  to: 46332  },
    { from: 234247, to: 46880  },
    { from: 44202,  to: 86761  },
    { from: 104166, to: 94313  },
    { from: 234114, to: 94313  },
    { from: 94412,  to: 94314  },
    { from: 104166, to: 94314  },
    { from: 234114, to: 94314  },
    { from: 104032, to: 96200  },
    { from: 104166, to: 96200  },
    { from: 104031, to: 94591  },
    { from: 104032, to: 94333  },
    { from: 94423,  to: 94334  },
    { from: 94314,  to: 94334  },
    { from: 236363, to: 96224  },
    { from: 234247, to: 96250  },
    { from: 234123, to: 96250  },
    { from: 234118, to: 96250  },
    { from: 94412,  to: 96262  },
    { from: 104166, to: 96262  },
    { from: 94423,  to: 96411  },
    { from: 234114, to: 96411  },
    { from: 104158, to: 104157 },
    { from: 104279, to: 104157 },
    { from: 104032, to: 104165 },
    { from: 104016, to: 97317  },
    { from: 104032, to: 104221 },
    { from: 104158, to: 104279 },
    { from: 104174, to: 104158 },
    { from: 104032, to: 104192 },
    { from: 104135, to: 104192 },
    { from: 104032, to: 104294 },
    { from: 104142, to: 106378 },
    { from: 104038, to: 115203 },
    { from: 114101, to: 115203 },
    { from: 104135, to: 104192 },
    { from: 104158, to: 106383 },
    { from: 104142, to: 106383 },
    { from: 115203, to: 115204 },
    { from: 94412, to: 114036 },
    { from: 114036, to: 116217 },
    { from: 115203, to: 116217 },
    { from: 115203, to: 116354 },
    { from: 114036, to: 116354 },
    { from: 134113, to: 134128 },
    { from: 134082, to: 134128 },
    { from: 134113, to: 134119 },
    { from: 134082, to: 134119 },
    { from: 134019, to: 134113 },
    { from: 125801, to: 134113 },

  ];


  export {nodes,edges};
