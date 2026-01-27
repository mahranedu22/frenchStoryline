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
        audioFile: 'audio/module1.mp3',
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
        titleFr: 'La conjugaison des verbes',
        titleAr: 'الدرس الثاني: تصريف الافعال',
        description: 'أفعال المجموعة الأولى والأفعال الأساسية',
        audioFile: 'audio/module2.mp3',
        lessons: [
            {
                id: 'lesson2',
                title: 'الدرس الثاني: تصريف الافعال',
                titleFr: 'La conjugaison des verbes',
                description: 'تعلم تصريف أفعال المجموعة الأولى والأفعال الأساسية',
                videoFile: 'content2.mp4',
                objectives: [
                    'Identifier les verbes du 1er groupe et reconnaître leur terminaison en -ER.',
                    'Conjuguer correctement les verbes réguliers du 1er groupe au présent de l\'indicatif.',
                    'Différencier entre le radical et les terminaisons du présent (-e, -es, -e, -ons, -ez, -ent).',
                    'Produire des énoncés courts en utilisant un verbe du 1er groupe approprié selon le contexte.',
                    'Conjuguer les verbes essentiels : être, avoir, aller, faire.'
                ]
            }
        ]
    },
    module3: {
        id: 'module3',
        title: 'الموديول الثالث',
        titleFr: 'Les verbes pronominaux',
        titleAr: 'الدرس الثالث: الأفعال الانعكاسية',
        description: 'الأفعال الانعكاسية في اللغة الفرنسية',
        audioFile: 'audio/module3.mp3',
        lessons: [
            {
                id: 'lesson3',
                title: 'الدرس الثالث: الأفعال الانعكاسية',
                titleFr: 'Les verbes pronominaux',
                description: 'تعلم الأفعال الانعكاسية واستخدامها',
                videoFile: 'content3.mp4',
                objectives: [
                    'Identifier la notion des verbes pronominaux en langue française.',
                    'Distinguer entre le verbe simple et le verbe pronominal.',
                    'Reconnaître les pronoms utilisés avec les verbes pronominaux : me, te, se, nous, vous, se.',
                    'Comprendre la structure du verbe pronominal : (pronom réfléchi + verbe).',
                    'Distinguer les types de verbes pronominaux : réfléchis, réciproques, essentiellement pronominaux.'
                ]
            }
        ]
    }
};

// بيانات التمارين - الموديول الأول
const exercisesData = {
    module1: {
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
            }
        ],
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
                    }
                ]
            }
        ]
    },
    
    // تمارين الموديول الثاني
    module2: {
        visualHigh: [
            {
                id: 'ex1',
                type: 'true_false',
                title: 'صح أم خطأ',
                questions: [
                    {
                        question: 'Les verbes du 1er groupe finissent en -ER',
                        statement: 'العبارة صحيحة',
                        correct: true
                    },
                    {
                        question: 'Manger est un verbe du 1er groupe',
                        statement: 'العبارة صحيحة',
                        correct: true
                    },
                    {
                        question: 'Finir est un verbe du 1er groupe',
                        statement: 'العبارة صحيحة',
                        correct: false
                    },
                    {
                        question: 'Chanter se conjugue : je chante',
                        statement: 'العبارة صحيحة',
                        correct: true
                    }
                ]
            },
            {
                id: 'ex2',
                type: 'drag_drop',
                title: 'رتب الجملة',
                instruction: 'اسحب الكلمات لتكوين جملة صحيحة',
                questions: [
                    {
                        correctOrder: ['Il', 'joue', 'au', 'foot'],
                        words: ['foot', 'au', 'Il', 'joue']
                    },
                    {
                        correctOrder: ['Nous', 'regardons', 'la', 'vidéo'],
                        words: ['vidéo', 'la', 'regardons', 'Nous']
                    },
                    {
                        correctOrder: ['Je', 'rentre', 'à', 'la', 'maison'],
                        words: ['maison', 'la', 'à', 'rentre', 'Je']
                    }
                ]
            },
            {
                id: 'ex3',
                type: 'mcq',
                title: 'اكتشف الخطأ وصححه',
                questions: [
                    {
                        question: 'Je parlons français',
                        options: ['Je parle français', 'Je parlent français', 'Je parlez français', 'Je parlons français'],
                        correct: 'Je parle français'
                    },
                    {
                        question: 'Tu chantent bien',
                        options: ['Tu chante bien', 'Tu chantes bien', 'Tu chantent bien', 'Tu chantons bien'],
                        correct: 'Tu chantes bien'
                    },
                    {
                        question: 'Ils joues au foot',
                        options: ['Ils joue au foot', 'Ils joues au foot', 'Ils jouent au foot', 'Ils jouons au foot'],
                        correct: 'Ils jouent au foot'
                    }
                ]
            },
            {
                id: 'ex4',
                type: 'fill_blank',
                title: 'أكمل الجمل',
                instruction: 'أكمل الجمل بالفعل الموجود بين القوسين',
                questions: [
                    {
                        sentence: 'Je _____ (manger) une pomme.',
                        options: ['mange', 'manges', 'mangent', 'mangeons'],
                        correct: 'mange'
                    },
                    {
                        sentence: 'Nous _____ (écouter) de la musique.',
                        options: ['écoute', 'écoutes', 'écoutons', 'écoutent'],
                        correct: 'écoutons'
                    },
                    {
                        sentence: 'Tu _____ (aller) à l\'école.',
                        options: ['va', 'vas', 'allons', 'allez'],
                        correct: 'vas'
                    },
                    {
                        sentence: 'Ils _____ (faire) du sport.',
                        options: ['fait', 'fais', 'faisons', 'font'],
                        correct: 'font'
                    }
                ]
            }
        ],
        visualLow: [
            {
                id: 'ex1',
                type: 'true_false',
                title: 'صح أم خطأ',
                questions: [
                    {
                        question: 'Les verbes du 1er groupe finissent en -ER',
                        statement: 'العبارة صحيحة',
                        correct: true
                    },
                    {
                        question: 'Finir est un verbe du 1er groupe',
                        statement: 'العبارة صحيحة',
                        correct: false
                    }
                ]
            },
            {
                id: 'ex2',
                type: 'mcq',
                title: 'أكمل الجمل',
                questions: [
                    {
                        question: 'Je _____ (manger) une pomme',
                        options: ['mange', 'manges', 'mangent', 'mangeons'],
                        correct: 'mange'
                    },
                    {
                        question: 'Tu _____ (aller) à l\'école',
                        options: ['va', 'vas', 'allons', 'allez'],
                        correct: 'vas'
                    }
                ]
            }
        ]
    },
    
    // تمارين الموديول الثالث
    module3: {
        visualHigh: [
            {
                id: 'ex1',
                type: 'mcq',
                title: 'حدد الأفعال الانعكاسية',
                questions: [
                    {
                        question: 'Elle se réveille à six heures',
                        options: ['se réveille', 'réveille', 'elle', 'heures'],
                        correct: 'se réveille'
                    },
                    {
                        question: 'Nous nous préparons pour l\'école',
                        options: ['nous préparons', 'préparons', 'école', 'pour'],
                        correct: 'nous préparons'
                    },
                    {
                        question: 'Ils parlent avec leurs amis',
                        options: ['parlent', 'pas de verbe pronominal', 'amis', 'avec'],
                        correct: 'pas de verbe pronominal'
                    },
                    {
                        question: 'Tu te regardes dans le miroir',
                        options: ['te regardes', 'regardes', 'miroir', 'dans'],
                        correct: 'te regardes'
                    }
                ]
            },
            {
                id: 'ex2',
                type: 'fill_blank',
                title: 'أكمل بالضمير الانعكاسي الصحيح',
                instruction: 'أكمل الفراغ بـ: me, te, nous, vous, se',
                questions: [
                    {
                        sentence: 'Tu _____ lèves à 7h.',
                        options: ['me', 'te', 'se', 'nous', 'vous'],
                        correct: 'te'
                    },
                    {
                        sentence: 'Je _____ brosse les dents.',
                        options: ['me', 'te', 'se', 'nous', 'vous'],
                        correct: 'me'
                    },
                    {
                        sentence: 'Ils _____ couchent tard.',
                        options: ['me', 'te', 'se', 'nous', 'vous'],
                        correct: 'se'
                    },
                    {
                        sentence: 'Nous _____ amusons dans la classe.',
                        options: ['me', 'te', 'se', 'nous', 'vous'],
                        correct: 'nous'
                    },
                    {
                        sentence: 'Vous _____ préparez pour l\'examen.',
                        options: ['me', 'te', 'se', 'nous', 'vous'],
                        correct: 'vous'
                    }
                ]
            },
            {
                id: 'ex3',
                type: 'mcq',
                title: 'حوّل للصيغة الانعكاسية',
                questions: [
                    {
                        question: 'Je réveille mon frère →',
                        options: ['Je me réveille', 'Je te réveille', 'Je se réveille', 'Je nous réveille'],
                        correct: 'Je me réveille'
                    },
                    {
                        question: 'Tu regardes dans le miroir →',
                        options: ['Tu me regardes', 'Tu te regardes', 'Tu se regardes', 'Tu nous regardes'],
                        correct: 'Tu te regardes'
                    },
                    {
                        question: 'Il prépare son sac →',
                        options: ['Il me prépare', 'Il te prépare', 'Il se prépare', 'Il nous prépare'],
                        correct: 'Il se prépare'
                    }
                ]
            },
            {
                id: 'ex4',
                type: 'mcq',
                title: 'انعكاسي أم تبادلي؟',
                questions: [
                    {
                        question: 'Ils se téléphonent',
                        options: ['réfléchi', 'réciproque'],
                        correct: 'réciproque'
                    },
                    {
                        question: 'Je me réveille',
                        options: ['réfléchi', 'réciproque'],
                        correct: 'réfléchi'
                    },
                    {
                        question: 'Nous nous rencontrons',
                        options: ['réfléchi', 'réciproque'],
                        correct: 'réciproque'
                    },
                    {
                        question: 'Elle se maquille',
                        options: ['réfléchi', 'réciproque'],
                        correct: 'réfléchi'
                    },
                    {
                        question: 'Ils se disputent',
                        options: ['réfléchi', 'réciproque'],
                        correct: 'réciproque'
                    }
                ]
            }
        ],
        visualLow: [
            {
                id: 'ex1',
                type: 'fill_blank',
                title: 'أكمل بالضمير الصحيح',
                instruction: 'أكمل الفراغ بـ: me, te, nous, vous, se',
                questions: [
                    {
                        sentence: 'Tu _____ lèves à 7h.',
                        options: ['me', 'te', 'se', 'nous'],
                        correct: 'te'
                    },
                    {
                        sentence: 'Je _____ brosse les dents.',
                        options: ['me', 'te', 'se', 'nous'],
                        correct: 'me'
                    },
                    {
                        sentence: 'Ils _____ couchent tard.',
                        options: ['me', 'te', 'se', 'vous'],
                        correct: 'se'
                    }
                ]
            },
            {
                id: 'ex2',
                type: 'mcq',
                title: 'انعكاسي أم تبادلي؟',
                questions: [
                    {
                        question: 'Je me réveille',
                        options: ['réfléchi', 'réciproque'],
                        correct: 'réfléchi'
                    },
                    {
                        question: 'Nous nous rencontrons',
                        options: ['réfléchi', 'réciproque'],
                        correct: 'réciproque'
                    }
                ]
            }
        ]
    }
};