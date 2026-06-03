/* ====================================
   DATA STRUCTURE - هيكلة البيانات
   ==================================== */

// بيانات الدرسات والدروس
const modulesData = {
    module1: {
        id: 'module1',
        title: 'الدرس الأول',
        titleFr: 'La configuration syntaxique',
        titleAr: 'الدرس الأول: التركيب النحوي',
        description: 'التركيب النحوي في اللغة الفرنسية',
        audioFile: 'audio/module1.mp3',
        lessons: [
            {
                id: 'lesson1',
                title: 'الدرس الأول: التركيب النحوي',
                titleFr: 'La configuration syntaxique',
                description: 'تعلم التركيب النحوي في اللغة الفرنسية',
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
        title: 'الدرس الثاني',
        titleFr: 'La conjugaison des verbes',
        titleAr: 'الدرس الثاني :تصريف الافعال',
        description: 'أفعال المجموعة الأولى والأفعال الأساسية',
        audioFile: 'audio/module2.mp3',
        lessons: [
            {
                id: 'lesson2',
                title: 'الدرس الثاني :تصريف الافعال',
                titleFr: 'La conjugaison des verbes',
                description: 'تعلم تصريف أفعال المجموعة الأولى والأفعال الأساسية',
                videoFile: 'content2.mp4',
                objectives: [
                    'Identifier les verbes du 1er groupe et reconnaître leur terminaison en -ER.',
                    'Conjuguer correctement les verbes réguliers du 1er groupe au présent de l\'indicatif.',
                    'Différencier entre le radical et les terminaisons du présent (-e, -es, -e, -ons, -ez, -ent).',
                    'Écrire des énoncés courts en utilisant un verbe du 1er groupe approprié selon le contexte.',
                    'Conjuguer les verbes essentiels : être, avoir, aller, faire.'
                ]
            }
        ]
    },
    module3: {
        id: 'module3',
        title: 'الدرس الثالث',
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
                    'reconnaître la structure du verbe pronominal : (pronom réfléchi + verbe).',
                    'Distinguer les types de verbes pronominaux : réfléchis, réciproques, essentiellement pronominaux.'
                ]
            }
        ]
    },
    module4: {
        id: 'module4',
        title: 'الدرس الرابع',
        titleFr: 'La ponctuation simple',
        titleAr: 'الدرس الرابع: علامات الترقيم البسيطة',
        description: 'علامات الترقيم البسيطة في اللغة الفرنسية',
        audioFile: 'audio/module4.mp3',
        lessons: [
            {
                id: 'lesson4',
                title: 'الدرس الرابع: علامات الترقيم البسيطة',
                titleFr: 'La ponctuation simple',
                description: 'تعلم استخدام علامات الترقيم البسيطة',
                videoFile: 'content4.mp4',
                objectives: [
                    'Utiliser correctement le point (.) à la fin d\'une phrase déclarative.',
                    'Utiliser correctement le point d\'interrogation (?) à la fin d\'une phrase interrogative.',
                    'Utiliser correctement le point d\'exclamation (!) à la fin d\'une phrase exclamative.',
                    'Identifier le type de phrase selon le signe de ponctuation utilisé.',
                    'Produire des phrases correctes avec les signes de ponctuation appropriés.'
                ]
            }
        ]
    },
    module5: {
        id: 'module5',
        title: 'الدرس الخامس',
        titleFr: 'La concordance sujet-verbe',
        titleAr: 'الدرس الخامس: التوافق بين الفاعل والفعل',
        description: 'التوافق بين الفاعل والفعل في زمن المضارع',
        audioFile: 'audio/module5.mp3',
        lessons: [
            {
                id: 'lesson5',
                title: 'الدرس الخامس: التوافق بين الفاعل والفعل',
                titleFr: 'La concordance sujet-verbe',
                description: 'تعلم التوافق بين الفاعل والفعل في زمن المضارع',
                videoFile: 'content5.mp4',
                objectives: [
                    'Identifier le sujet dans une phrase.',
                    'Reconnaître le verbe au présent.',
                    'Assurer la concordance entre le sujet et le verbe.',
                    'Conjuguer correctement les verbes selon le sujet.',
                    'Produire des phrases correctes à l\'écrit et à l\'oral.'
                ]
            }
        ]
    },
    module6: {
        id: 'module6',
        title: 'الدرس السادس',
        titleFr: 'Les articles définis, indéfinis et contractés',
        titleAr: 'الدرس السادس: أدوات التعريف والتنكير',
        description: 'أدوات التعريف والتنكير والمدموجة في اللغة الفرنسية',
        audioFile: 'audio/module6.mp3',
        lessons: [
            {
                id: 'lesson6',
                title: 'الدرس السادس: أدوات التعريف والتنكير',
                titleFr: 'Les articles définis, indéfinis et contractés',
                description: 'تعلم أدوات التعريف والتنكير والمدموجة',
                videoFile: 'content6.mp4',
                objectives: [
                    'Identifier les articles définis, indéfinis et contractés.',
                    'Utiliser correctement les articles dans une phrase.',
                    'Différencier entre le masculin, le féminin et le pluriel.',
                    'Employer les articles selon le sens de la phrase.',
                    'Éviter les erreurs fréquentes en français.',
                    'Produire des phrases correctes à l\'oral et à l\'écrit.'
                ]
            }
        ]
    }
};

// بيانات التمارين - الدرس الأول
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
    
    // تمارين الدرس الثاني
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
    
    // تمارين الدرس الثالث
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
    },

    // تمارين الدرس الرابع
    module4: {
        visualHigh: [
            {
                id: 'ex1',
                type: 'fill_blank',
                title: 'أكمل بعلامة الترقيم المناسبة (. ? !)',
                instruction: 'اختر علامة الترقيم الصحيحة',
                questions: [
                    {
                        sentence: 'Où habites-tu _____',
                        options: ['.', '?', '!'],
                        correct: '?'
                    },
                    {
                        sentence: 'Nous allons au cinéma _____',
                        options: ['.', '?', '!'],
                        correct: '.'
                    },
                    {
                        sentence: 'Attention au bus _____',
                        options: ['.', '?', '!'],
                        correct: '!'
                    },
                    {
                        sentence: 'Pourquoi es-tu en retard _____',
                        options: ['.', '?', '!'],
                        correct: '?'
                    },
                    {
                        sentence: 'Bravo pour ton succès _____',
                        options: ['.', '?', '!'],
                        correct: '!'
                    }
                ]
            },
            {
                id: 'ex2',
                type: 'mcq',
                title: 'حدد نوع الجملة',
                questions: [
                    {
                        question: 'Tu viens avec nous ?',
                        options: ['Phrase déclarative', 'Phrase interrogative', 'Phrase exclamative'],
                        correct: 'Phrase interrogative'
                    },
                    {
                        question: 'Quel beau paysage !',
                        options: ['Phrase déclarative', 'Phrase interrogative', 'Phrase exclamative'],
                        correct: 'Phrase exclamative'
                    },
                    {
                        question: 'Nous avons un examen demain.',
                        options: ['Phrase déclarative', 'Phrase interrogative', 'Phrase exclamative'],
                        correct: 'Phrase déclarative'
                    }
                ]
            }
        ],
        visualLow: [
            {
                id: 'ex1',
                type: 'fill_blank',
                title: 'أكمل بعلامة الترقيم المناسبة',
                instruction: 'اختر . أو ? أو !',
                questions: [
                    {
                        sentence: 'Où habites-tu _____',
                        options: ['.', '?', '!'],
                        correct: '?'
                    },
                    {
                        sentence: 'Attention au bus _____',
                        options: ['.', '?', '!'],
                        correct: '!'
                    },
                    {
                        sentence: 'Nous allons au cinéma _____',
                        options: ['.', '?', '!'],
                        correct: '.'
                    }
                ]
            },
            {
                id: 'ex2',
                type: 'mcq',
                title: 'حدد نوع الجملة',
                questions: [
                    {
                        question: 'Tu viens avec nous ?',
                        options: ['Phrase déclarative', 'Phrase interrogative', 'Phrase exclamative'],
                        correct: 'Phrase interrogative'
                    },
                    {
                        question: 'Quel beau paysage !',
                        options: ['Phrase déclarative', 'Phrase interrogative', 'Phrase exclamative'],
                        correct: 'Phrase exclamative'
                    }
                ]
            }
        ]
    },

    // تمارين الدرس الخامس
    module5: {
        visualHigh: [
            {
                id: 'ex1',
                type: 'fill_blank',
                title: 'أكمل بالفعل المناسب',
                instruction: 'اختر الفعل المصرف بشكل صحيح',
                questions: [
                    {
                        sentence: 'Je _____ français. (parler)',
                        options: ['parle', 'parles', 'parlons', 'parlent'],
                        correct: 'parle'
                    },
                    {
                        sentence: 'Nous _____ au club. (jouer)',
                        options: ['joue', 'joues', 'jouons', 'jouent'],
                        correct: 'jouons'
                    },
                    {
                        sentence: 'Ils _____ la leçon. (écouter)',
                        options: ['écoute', 'écoutes', 'écoutons', 'écoutent'],
                        correct: 'écoutent'
                    },
                    {
                        sentence: 'Tu _____ très bien. (chanter)',
                        options: ['chante', 'chantes', 'chantons', 'chantent'],
                        correct: 'chantes'
                    }
                ]
            },
            {
                id: 'ex2',
                type: 'mcq',
                title: 'اختر الإجابة الصحيحة',
                questions: [
                    {
                        question: 'Nous _____',
                        options: ['mange', 'mangeons', 'mangent', 'manges'],
                        correct: 'mangeons'
                    },
                    {
                        question: 'Ils _____',
                        options: ['joue', 'joues', 'jouent', 'jouons'],
                        correct: 'jouent'
                    },
                    {
                        question: 'Vous _____',
                        options: ['parle', 'parles', 'parlons', 'parlez'],
                        correct: 'parlez'
                    }
                ]
            },
            {
                id: 'ex3',
                type: 'mcq',
                title: 'صحح الخطأ',
                questions: [
                    {
                        question: 'Nous écoute la radio.',
                        options: ['Nous écoutons la radio.', 'Nous écoutent la radio.', 'Nous écoutez la radio.', 'Nous écoutes la radio.'],
                        correct: 'Nous écoutons la radio.'
                    },
                    {
                        question: 'Ils parle français.',
                        options: ['Ils parles français.', 'Ils parlons français.', 'Ils parlent français.', 'Ils parlez français.'],
                        correct: 'Ils parlent français.'
                    },
                    {
                        question: 'Je regardent la télévision.',
                        options: ['Je regarde la télévision.', 'Je regardes la télévision.', 'Je regardons la télévision.', 'Je regardez la télévision.'],
                        correct: 'Je regarde la télévision.'
                    }
                ]
            },
            {
                id: 'ex4',
                type: 'fill_blank',
                title: 'أكمل الجمل',
                instruction: 'أكمل بالفعل المناسب',
                questions: [
                    {
                        sentence: 'Tu _____ à l\'école. (aller)',
                        options: ['va', 'vas', 'allons', 'allez'],
                        correct: 'vas'
                    },
                    {
                        sentence: 'Nous _____ le français. (aimer)',
                        options: ['aime', 'aimes', 'aimons', 'aiment'],
                        correct: 'aimons'
                    },
                    {
                        sentence: 'Elle _____ un livre. (regarder)',
                        options: ['regarde', 'regardes', 'regardons', 'regardent'],
                        correct: 'regarde'
                    },
                    {
                        sentence: 'Vous _____ très vite. (marcher)',
                        options: ['marche', 'marches', 'marchons', 'marchez'],
                        correct: 'marchez'
                    }
                ]
            }
        ],
        visualLow: [
            {
                id: 'ex1',
                type: 'fill_blank',
                title: 'أكمل بالفعل المناسب',
                instruction: 'اختر الفعل المصرف بشكل صحيح',
                questions: [
                    {
                        sentence: 'Je _____ français. (parler)',
                        options: ['parle', 'parles', 'parlons', 'parlent'],
                        correct: 'parle'
                    },
                    {
                        sentence: 'Nous _____ au club. (jouer)',
                        options: ['joue', 'joues', 'jouons', 'jouent'],
                        correct: 'jouons'
                    }
                ]
            },
            {
                id: 'ex2',
                type: 'mcq',
                title: 'صحح الخطأ',
                questions: [
                    {
                        question: 'Nous écoute la radio.',
                        options: ['Nous écoutons la radio.', 'Nous écoutent la radio.', 'Nous écoutez la radio.', 'Nous écoutes la radio.'],
                        correct: 'Nous écoutons la radio.'
                    },
                    {
                        question: 'Ils parle français.',
                        options: ['Ils parles français.', 'Ils parlons français.', 'Ils parlent français.', 'Ils parlez français.'],
                        correct: 'Ils parlent français.'
                    }
                ]
            }
        ]
    },

    // تمارين الدرس السادس
    module6: {
        visualHigh: [
            {
                id: 'ex1',
                type: 'fill_blank',
                title: 'اختر الأداة المناسبة',
                instruction: 'اختر الأداة الصحيحة',
                questions: [
                    {
                        sentence: '_____ garçon joue. (le / une / des)',
                        options: ['le', 'une', 'des', 'la'],
                        correct: 'le'
                    },
                    {
                        sentence: 'J\'habite _____ Caire. (au / du / des)',
                        options: ['au', 'du', 'des', 'aux'],
                        correct: 'au'
                    },
                    {
                        sentence: '_____ fille chante. (la / un / aux)',
                        options: ['la', 'un', 'aux', 'le'],
                        correct: 'la'
                    }
                ]
            },
            {
                id: 'ex2',
                type: 'mcq',
                title: 'صنف الأداة',
                questions: [
                    {
                        question: 'Le',
                        options: ['défini', 'indéfini', 'contracté'],
                        correct: 'défini'
                    },
                    {
                        question: 'une',
                        options: ['défini', 'indéfini', 'contracté'],
                        correct: 'indéfini'
                    },
                    {
                        question: 'aux',
                        options: ['défini', 'indéfini', 'contracté'],
                        correct: 'contracté'
                    },
                    {
                        question: 'des',
                        options: ['défini', 'indéfini', 'contracté'],
                        correct: 'indéfini'
                    }
                ]
            },
            {
                id: 'ex3',
                type: 'fill_blank',
                title: 'حوّل حسب النموذج: à + le → au',
                instruction: 'اختر الأداة المدموجة الصحيحة',
                questions: [
                    {
                        sentence: 'à + les = _____',
                        options: ['aux', 'au', 'du', 'des'],
                        correct: 'aux'
                    },
                    {
                        sentence: 'de + le = _____',
                        options: ['aux', 'au', 'du', 'des'],
                        correct: 'du'
                    },
                    {
                        sentence: 'de + les = _____',
                        options: ['aux', 'au', 'du', 'des'],
                        correct: 'des'
                    }
                ]
            },
            {
                id: 'ex4',
                type: 'mcq',
                title: 'اختر الإجابة الصحيحة',
                questions: [
                    {
                        question: 'Je vais _____ cinéma.',
                        options: ['au', 'de la', 'une', 'du'],
                        correct: 'au'
                    },
                    {
                        question: '_____ élèves travaillent.',
                        options: ['Les', 'Une', 'Un', 'du'],
                        correct: 'Les'
                    },
                    {
                        question: 'Elle achète _____ robe.',
                        options: ['un', 'une', 'le', 'du'],
                        correct: 'une'
                    }
                ]
            }
        ],
        visualLow: [
            {
                id: 'ex1',
                type: 'fill_blank',
                title: 'اختر الأداة المناسبة',
                instruction: 'اختر الأداة الصحيحة',
                questions: [
                    {
                        sentence: '_____ garçon joue. (le / une / des)',
                        options: ['le', 'une', 'des', 'la'],
                        correct: 'le'
                    },
                    {
                        sentence: 'J\'habite _____ Caire.',
                        options: ['au', 'du', 'des', 'aux'],
                        correct: 'au'
                    },
                    {
                        sentence: '_____ fille chante.',
                        options: ['la', 'un', 'aux', 'le'],
                        correct: 'la'
                    }
                ]
            },
            {
                id: 'ex2',
                type: 'mcq',
                title: 'اختر الإجابة الصحيحة',
                questions: [
                    {
                        question: 'Je vais _____ cinéma.',
                        options: ['au', 'de la', 'une', 'du'],
                        correct: 'au'
                    },
                    {
                        question: '_____ élèves travaillent.',
                        options: ['Les', 'Une', 'Un', 'du'],
                        correct: 'Les'
                    }
                ]
            }
        ]
    }
};
