/* ====================================
   DATA STRUCTURE - هيكلة البيانات
   ==================================== */

// بيانات الموديولات والدروس
const modulesData = {
    module1: {
        id: 'module1',
        title: 'الموديول الأول',
        titleFr: 'Les pronoms personnels sujets',
        titleAr: 'الدرس الأول: الضمائر الشخصية',
        description: 'الضمائر الشخصية في اللغة الفرنسية',
        audioFile: 'module1.mp3',
        lessons: [
            {
                id: 'lesson1',
                title: 'الدرس الأول: الضمائر الشخصية',
                titleFr: 'Les pronoms personnels sujets',
                description: 'تعلم الضمائر الشخصية في اللغة الفرنسية',
                videoFile: 'content1.mp4',
                objectives: [
                    'Identifier les différentes parties de la phrase (le sujet, le verbe, le complément).',
                    'Reconnaître le rôle de chaque partie dans la construction du sens.',
                    'Former des phrases simples et correctes en respectant l\'ordre des éléments.',
                    'Distinguer entre le groupe sujet et le groupe verbal.',
                    'Analyser une phrase pour trouver le sujet, le verbe et le complément.'
                ]
            }
        ]
    },
    module2: {
        id: 'module2',
        title: 'الموديول الثاني',
        titleFr: 'Module 2',
        description: 'قريباً...',
        lessons: []
    },
    module3: {
        id: 'module3',
        title: 'الموديول الثالث',
        titleFr: 'Module 3',
        description: 'قريباً...',
        lessons: []
    }
};

// بيانات التمارين - الموديول الأول
const exercisesData = {
    // تمارين الذاكرة البصرية المرتفعة (النمط 111)
    visualHigh: [
        {
            id: 'ex1',
            type: 'mcq',
            title: 'اختر الضمير المناسب',
            questions: [
                {
                    question: '______ → Sophie',
                    options: ['Je', 'Tu', 'Il', 'Elle'],
                    correct: 'Elle'
                },
                {
                    question: '______ → Paul',
                    options: ['Je', 'Tu', 'Il', 'Elle'],
                    correct: 'Il'
                },
                {
                    question: '______ → Les filles',
                    options: ['Nous', 'Vous', 'Ils', 'Elles'],
                    correct: 'Elles'
                }
            ]
        },
        {
            id: 'ex2',
            type: 'true_false',
            title: 'صح أم خطأ',
            questions: [
                {
                    question: 'Je suis étudiant',
                    statement: 'الجملة صحيحة',
                    correct: true
                },
                {
                    question: 'Il parle français',
                    statement: 'الجملة صحيحة',
                    correct: true
                },
                {
                    question: 'Nous es professeur',
                    statement: 'الجملة صحيحة',
                    correct: false
                }
            ]
        },
        {
            id: 'ex3',
            type: 'fill_blank',
            title: 'أكمل الجملة',
            instruction: 'أكمل الفراغ بالضمير المناسب',
            questions: [
                {
                    sentence: '_____ joues au foot.',
                    options: ['Je', 'Tu', 'Il', 'Elle'],
                    correct: 'Tu'
                },
                {
                    sentence: '_____ regardent la télé.',
                    options: ['Nous', 'Vous', 'Ils', 'Elles'],
                    correct: 'Ils'
                }
            ]
        },
        {
            id: 'ex4',
            type: 'drag_drop',
            title: 'رتب الجملة',
            instruction: 'اسحب الكلمات لتكوين جملة صحيحة',
            questions: [
                {
                    correctOrder: ['Je', 'parle', 'français'],
                    words: ['français', 'Je', 'parle']
                },
                {
                    correctOrder: ['Ils', 'jouent', 'au', 'foot'],
                    words: ['foot', 'au', 'Ils', 'jouent']
                }
            ]
        }
    ],
    
    // تمارين الذاكرة البصرية المنخفضة (النمط 222)
    visualLow: [
        {
            id: 'ex1',
            type: 'mcq',
            title: 'استبدل الاسم بالضمير',
            questions: [
                {
                    question: 'Paul → __________',
                    options: ['Je', 'Tu', 'Il', 'Elle'],
                    correct: 'Il'
                },
                {
                    question: 'Sophie → __________',
                    options: ['Je', 'Tu', 'Il', 'Elle'],
                    correct: 'Elle'
                },
                {
                    question: 'Les garçons → __________',
                    options: ['Il', 'Elle', 'Ils', 'Elles'],
                    correct: 'Ils'
                }
            ]
        },
        {
            id: 'ex2',
            type: 'fill_blank',
            title: 'أكمل الجمل',
            instruction: 'اختر الضمير المناسب',
            questions: [
                {
                    sentence: '_____ parle français.',
                    options: ['Je', 'Tu', 'Il', 'Nous'],
                    correct: 'Je',
                    hint: '(أنا)'
                },
                {
                    sentence: '_____ habitez à Paris.',
                    options: ['Tu', 'Nous', 'Vous', 'Ils'],
                    correct: 'Vous',
                    hint: '(أنتم)'
                }
            ]
        },
        {
            id: 'ex3',
            type: 'true_false',
            title: 'صح أم خطأ',
            questions: [
                {
                    question: 'Tu es étudiant',
                    statement: 'الجملة صحيحة',
                    correct: true
                },
                {
                    question: 'Nous est professeur',
                    statement: 'الجملة صحيحة',
                    correct: false
                }
            ]
        }
    ]
};
