/* ====================================
   DATA STRUCTURE - هيكلة البيانات
   ==================================== */

// بيانات الموديولات والدروس
const modulesData = {
    module1: {
        id: 'module1',
        title: 'الموديول الأول',
        titleFr: 'Module 1: Les pronoms personnels',
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
                    'التعرف على الضمائر الشخصية الثمانية',
                    'استخدام الضمائر بشكل صحيح في الجمل',
                    'التمييز بين الضمائر المذكرة والمؤنثة',
                    'تطبيق الضمائر في سياقات مختلفة'
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
            title: 'التمرين 1: اختر الضمير المناسب للصورة',
            questions: [
                {
                    question: '👧 __________ chante une chanson.',
                    options: ['Je', 'Tu', 'Il', 'Elle'],
                    correct: 'Elle'
                },
                {
                    question: '👦 __________ joue au ballon.',
                    options: ['Je', 'Tu', 'Il', 'Elle'],
                    correct: 'Il'
                },
                {
                    question: '👩👩 __________ regardent un film.',
                    options: ['Nous', 'Vous', 'Ils', 'Elles'],
                    correct: 'Elles'
                },
                {
                    question: '👨👩👦 __________ mangent ensemble.',
                    options: ['Nous', 'Vous', 'Ils', 'Elles'],
                    correct: 'Ils'
                },
                {
                    question: '👩 et moi __________ allons à l\'école.',
                    options: ['Je', 'Tu', 'Nous', 'Vous'],
                    correct: 'Nous'
                }
            ]
        },
        {
            id: 'ex2',
            type: 'mcq',
            title: 'التمرين 2: أكمل الجملة بالضمير المناسب حسب الوصف',
            questions: [
                {
                    question: '(ولد صغير) → ______ aime le chocolat.',
                    options: ['Je', 'Il', 'Elle', 'Nous'],
                    correct: 'Il'
                },
                {
                    question: '(مجموعة فتيات) → ______ dansent dans la fête.',
                    options: ['Elle', 'Elles', 'Ils', 'Nous'],
                    correct: 'Elles'
                },
                {
                    question: '(معلمة تتحدث مع التلاميذ) → ______ parle aux élèves.',
                    options: ['Il', 'Elle', 'Nous', 'Ils'],
                    correct: 'Elle'
                },
                {
                    question: '(أنا وصديقي) → ______ jouons au foot.',
                    options: ['Je', 'Tu', 'Nous', 'Vous'],
                    correct: 'Nous'
                },
                {
                    question: '(رجل وامرأة) → ______ voyagent en France.',
                    options: ['Il', 'Elle', 'Nous', 'Ils'],
                    correct: 'Ils'
                }
            ]
        }
    ],
    
    // تمارين الذاكرة البصرية المنخفضة (النمط 222 و 333)
    visualLow: [
        {
            id: 'ex3',
            type: 'mcq',
            title: 'التمرين 1: استبدل الاسم بالضمير المناسب',
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
                    question: 'Moi et mes amis → __________',
                    options: ['Je', 'Tu', 'Nous', 'Vous'],
                    correct: 'Nous'
                },
                {
                    question: 'Toi et ta sœur → __________',
                    options: ['Tu', 'Nous', 'Vous', 'Ils'],
                    correct: 'Vous'
                },
                {
                    question: 'Les garçons → __________',
                    options: ['Il', 'Elle', 'Ils', 'Elles'],
                    correct: 'Ils'
                },
                {
                    question: 'La fille → __________',
                    options: ['Je', 'Il', 'Elle', 'Nous'],
                    correct: 'Elle'
                },
                {
                    question: 'Mon frère et moi → __________',
                    options: ['Je', 'Tu', 'Nous', 'Vous'],
                    correct: 'Nous'
                },
                {
                    question: 'Madame Dupont → __________',
                    options: ['Je', 'Tu', 'Il', 'Elle'],
                    correct: 'Elle'
                }
            ]
        },
        {
            id: 'ex4',
            type: 'mcq',
            title: 'التمرين 2: أكمل الجمل بالضمير الصحيح',
            questions: [
                {
                    question: '__________ parle français. (أنا)',
                    options: ['Je', 'Tu', 'Il', 'Nous'],
                    correct: 'Je'
                },
                {
                    question: '__________ habitez à Paris. (أنتم)',
                    options: ['Je', 'Tu', 'Nous', 'Vous'],
                    correct: 'Vous'
                },
                {
                    question: '__________ aime le sport. (هو)',
                    options: ['Je', 'Tu', 'Il', 'Elle'],
                    correct: 'Il'
                },
                {
                    question: '__________ chantons une chanson. (نحن)',
                    options: ['Je', 'Tu', 'Nous', 'Vous'],
                    correct: 'Nous'
                },
                {
                    question: '__________ dansent bien. (هنّ)',
                    options: ['Elle', 'Nous', 'Ils', 'Elles'],
                    correct: 'Elles'
                }
            ]
        },
        {
            id: 'ex5',
            type: 'mcq',
            title: 'التمرين 3: اختر الإجابة الصحيحة',
            questions: [
                {
                    question: '_____ travaille à l\'école',
                    options: ['Je', 'Il', 'Elles', 'Nous'],
                    correct: 'Il'
                },
                {
                    question: '_____ aimez le café ?',
                    options: ['Tu', 'Vous', 'Nous', 'Ils'],
                    correct: 'Vous'
                },
                {
                    question: '_____ regardons la télé.',
                    options: ['Nous', 'Ils', 'Je', 'Tu'],
                    correct: 'Nous'
                },
                {
                    question: '_____ joue au tennis.',
                    options: ['Elle', 'Vous', 'Elles', 'Nous'],
                    correct: 'Elle'
                },
                {
                    question: '_____ suis élève.',
                    options: ['Tu', 'Je', 'Ils', 'Nous'],
                    correct: 'Je'
                }
            ]
        }
    ]
};