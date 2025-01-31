export const gymExercises = {
    piernas: [
        {
            id: 1,
            name: 'Sentadillas',
            mainMuscle: 'Cuádriceps',
            secondaryMuscles: ['Glúteos', 'Isquiotibiales'],
            description: 'Un ejercicio para trabajar los cuádriceps, isquiotibiales y glúteos.',
            image: require('../src/ejercicios/Pierna/sentadilla.png'),  // Cambiar a require() para cargar la imagen           
            video: require('../src/ejercicios/Pierna/sentadilla.mp4'),
            sets: 4,
            reps: '12-20',
            tips: [
                'Mantén las rodillas alineadas con los pies.',
                'No dejes que las rodillas sobrepasen los dedos de los pies.',
                'Asegúrate de bajar profundamente para activar los glúteos al máximo.',
            ],
        },
        {
            id: 2,
            name: 'Prensa de pierna',
            mainMuscle: 'Cuádriceps',
            secondaryMuscles: ['Glúteos', 'Isquiotibiales'],
            description: 'Ejercicio de fuerza para trabajar los cuádriceps, glúteos e isquiotibiales.',
            image: require('../src/ejercicios/Pierna/prensaPierna.png'),  // Cambiar a require() para cargar la imagen
            video: require('../src/ejercicios/Pierna/prensaPierna.mp4'),
            sets: 3,
            reps: '10-12',
            tips: [
                'Mantén las rodillas a 90 grados al descender.',
                'Evita extender completamente las piernas al subir.',
                'Mantén los pies en una posición estable para evitar lesiones.',
            ],
        },
        {
            id: 3,
            name: 'Zancadas',
            mainMuscle: 'Cuádriceps',
            secondaryMuscles: ['Glúteos', 'Isquiotibiales'],
            description: 'Ejercicio para trabajar cuádriceps y glúteos, mejorando la fuerza y la estabilidad.',
            image: require('../src/ejercicios/Pierna/zancada.png'),  // Cambiar a require() para cargar la imagen¡            
            video: require('../src/ejercicios/Pierna/zancada.mp4'),
            sets: 3,
            reps: '12-15 por pierna',
            tips: [
                'Mantén el torso erguido durante todo el movimiento.',
                'Asegúrate de que la rodilla no pase los dedos de los pies.',
                'No dejes que la rodilla toque el suelo.',
            ],
        },
        {
            id: 5,
            name: 'Peso muerto rumano',
            mainMuscle: 'Isquiotibiales',
            secondaryMuscles: ['Glúteos', 'Espalda baja'],
            description: 'Ejercicio centrado en trabajar los isquiotibiales, glúteos y la espalda baja.',
            image: require('../src/ejercicios/Pierna/pesoMertoRumano.png'),  // Cambiar a require() para cargar la imagen            
            video: require('../src/ejercicios/Pierna/pesoMertoRumano.mp4'),
            sets: 4,
            reps: '8-12',
            tips: [
                'Mantén la espalda recta durante todo el movimiento.',
                'Controla el descenso del peso para evitar lesiones.',
                'No arquees la espalda al bajar el peso.',
            ],
        },
    ],
    pecho: [
        {
            id: 1,
            name: 'Press banca con mancuernas',
            mainMuscle: 'Pecho',
            secondaryMuscles: ['Tríceps', 'Hombros'],
            description: 'Ejercicio de press para trabajar principalmente el pecho, además de tríceps y hombros.',
            image: require('../src/ejercicios/Pecho/pressBancaM.png'),  // Cambiar a require() para cargar la imagen
            video: require('../src/ejercicios/Pecho/pressBancaM.mp4'),
            sets: 3,
            reps: '8-12',
            tips: [
                'Mantén los pies firmemente en el suelo.',
                'Asegúrate de no levantar los glúteos del banco.',
                'Controla el descenso de las mancuernas, no dejes que caigan rápidamente.',
            ],
        },
        {
            id: 2,
            name: 'Press banca',
            mainMuscle: 'Pecho',
            secondaryMuscles: ['Tríceps', 'Hombros'],
            description: 'Ejercicio de press para trabajar principalmente el pecho, además de tríceps y hombros.',
            image: require('../src/ejercicios/Pecho/pressBanca.png'),  // Cambiar a require() para cargar la imagen
            video: require('../src/ejercicios/Pecho/pressBanca.mp4'),
            sets: 4,
            reps: '8-12',
            tips: [

                'Mantén los pies firmemente en el suelo.',
                'Asegúrate de no levantar los glúteos del banco.',
                'Controla el descenso de la barra, no dejes que se caiga rápidamente.',
            ],
        },
        {
            id: 3,
            name: 'Fondos',
            mainMuscle: 'Pecho',
            secondaryMuscles: ['Tríceps'],
            description: 'Ejercicio de peso corporal para trabajar el pecho y los tríceps.',
            image: require('../src/ejercicios/Pecho/fondos.png'),  // Cambiar a require() para cargar la imagen
            video: require('../src/ejercicios/Pecho/fondos.mp4'),
            sets: 3,
            reps: '8-12',
            tips: [
                'Mantén el cuerpo recto, no dejes que se incline hacia adelante.',
                'Baja hasta que tus codos estén a 90 grados.',
                'Controla el movimiento de subida y bajada.',
            ],
        },
        {
            id: 4,
            name: 'Aperturas con mancuernas',
            mainMuscle: 'Pecho',
            secondaryMuscles: ['Hombros'],
            description: 'Ejercicio con mancuernas para trabajar la parte externa del pecho.',
            image: require('../src/ejercicios/Pecho/aperturas.png'),  // Cambiar a require() para cargar la imagen
            video: require('../src/ejercicios/Pecho/aperturas.mp4'),
            sets: 3,
            reps: '10-15',
            tips: [
                'Mantén un ligero ángulo en los codos durante todo el movimiento.',
                'No dejes que los codos se abran demasiado.',
                'Concéntrate en la contracción del pecho al subir las mancuernas.',
            ],
        },
        {
            id: 5,
            name: 'Press inclinado',
            mainMuscle: 'Pecho superior',
            secondaryMuscles: ['Tríceps', 'Hombros'],
            description: 'Press con mancuernas o barra para trabajar la parte superior del pecho.',
            image: require('../src/ejercicios/Pecho/pressBancaInclinado.png'),  // Cambiar a require() para cargar la imagen
            video: require('../src/ejercicios/Pecho/pressBancaInclinado.mp4'),
            sets: 4,
            reps: '8-12',
            tips: [
                'Controla el movimiento, no dejes que la barra se caiga.',
                'Mantén la espalda firmemente apoyada en el banco.',
                'No dejes que los codos se abran completamente.',
            ],
        },
    ],
    espalda: [
        {
            id: 1,
            name: 'Remo con barra',
            mainMuscle: 'Espalda alta',
            secondaryMuscles: ['Trapecios', 'Bíceps'],
            description: 'Un ejercicio compuesto que trabaja la espalda alta, los trapecios y los bíceps.',
            image: require('../src/ejercicios/Espalda/remoBarra.png'),  // Cambiar a require() para cargar la imagen
            video: require('../src/ejercicios/Espalda/remoBarra.mp4'),
            sets: 4,
            reps: '8-12',
            tips: [
                'Mantén la espalda recta durante todo el movimiento.',
                'Evita que tus hombros se deslicen hacia adelante.',
                'Saca el pecho hacia adelante al tirar de la barra.',
            ],
        },
        {
            id: 2,
            name: 'Remo con mancuernas',
            mainMuscle: 'Espalda alta',
            secondaryMuscles: ['Trapecios', 'Bíceps'],
            description: 'Ejercicio unilateral para trabajar la espalda alta y los trapecios, utilizando mancuernas.',
            image: require('../src/ejercicios/Espalda/remoMancuerna.png'),  // Cambiar a require() para cargar la imagen
            video: require('../src/ejercicios/Espalda/remoMancuerna.mp4'),
            sets: 3,
            reps: '8-12',
            tips: [
                'Mantén una postura estable, sin rotar el torso.',
                'Focalízate en jalar con la espalda, no con los brazos.',
                'Asegúrate de controlar tanto la subida como la bajada de la mancuerna.',
            ],
        },
        {
            id: 3,
            name: 'Jalón al pecho',
            mainMuscle: 'Dorsales',
            secondaryMuscles: ['Bíceps', 'Trapecios', 'Deltoides posteriores'],
            description: 'Un ejercicio de tracción para trabajar los dorsales, bíceps y parte superior de la espalda.',
            image: require('../src/ejercicios/Espalda/jalonAlPecho.png'), // Cambiar a require() para cargar la imagen
            video: require('../src/ejercicios/Espalda/jalonAlPecho.mp4'),
            sets: 3,
            reps: '10-12',
            tips: [
                'Mantén la espalda recta y saca el pecho durante el movimiento.',
                'Asegúrate de bajar la barra hasta la parte superior del pecho.',
                'Evita balancear el cuerpo y mantén el control del peso en todo momento.',
            ],
        },
        {
            id: 4,
            name: 'Remo en máquina',
            mainMuscle: 'Espalda',
            secondaryMuscles: ['Bíceps', 'Trapecios', 'Deltoides posteriores'],
            description: 'Ejercicio de tracción horizontal para trabajar la espalda, los bíceps y la parte superior de la espalda utilizando una máquina.',
            image: require('../src/ejercicios/Espalda/remoMaquina.png'), // Cambiar a require() para cargar la imagen
            video: require('../src/ejercicios/Espalda/remoMaquina.mp4'),
            sets: 3,
            reps: '10-12',
            tips: [
                'Mantén la espalda recta y saca el pecho durante todo el movimiento.',
                'Tira de las asas hacia tu abdomen mientras mantienes los codos cerca del cuerpo.',
                'Evita usar impulso o balanceo, y controla el peso tanto al tirar como al regresar.',
            ],
        },
        {
            id: 5,
            name: 'Dominadas',
            mainMuscle: 'Espalda alta',
            secondaryMuscles: ['Bíceps', 'Trapecios'],
            description: 'Un ejercicio que trabaja principalmente la espalda y los bíceps.',
            image: require('../src/ejercicios/Espalda/dominadas.png'),  // Cambiar a require() para cargar la imagen
            video: require('../src/ejercicios/Espalda/dominadas.mp4'),
            sets: 3,
            reps: '8-12',
            tips: [
                'Mantén las palmas hacia afuera y las muñecas rectas.',
                'Evita balancearte al hacer el ejercicio.',
                'Enfócate en tirar de la barra con la espalda y no con los brazos.',
            ],
        },
    ],
    brazos: [
        {
            id: 1,
            name: 'Curl en barra Z',
            mainMuscle: 'Bíceps',
            secondaryMuscles: ['Antebrazos'],
            description: 'Utiliza la barra Z para realizar flexiones de brazos y trabajar los bíceps de manera eficiente.',
            image: require('../src/ejercicios/Brazo/barraZ.png'),  // Cambiar a require() para cargar la imagen
            video: require('../src/ejercicios/Brazo/barraZ.mp4'),
            sets: '4',
            reps: '8-12',
            tips: [
                'Mantén los codos pegados al torso durante todo el ejercicio.',
                'Evita usar impulso para levantar la barra.',
                'Controla el movimiento en ambas fases, tanto al subir como al bajar.',
            ],
        },
        {
            id: 2,
            name: 'Curl de bíceps inclinado',
            mainMuscle: 'Bíceps',
            secondaryMuscles: ['Antebrazos'],
            description: 'Ejercicio para trabajar los bíceps con mancuernas en un banco inclinado, lo que aísla más el músculo.',
            image: require('../src/ejercicios/Brazo/curlsBrazoInclinado.png'),  // Cambiar a require() para cargar la imagen
            video: require('../src/ejercicios/Brazo/curlsBrazoInclinado.mp4'),
            sets: '4',
            reps: '8-12',
            tips: [
                'Mantén la espalda pegada al banco y no uses el impulso.',
                'Realiza el movimiento de forma controlada y siente la contracción en el bíceps.',
                'No dejes que los codos se muevan hacia adelante o hacia atrás.',
            ],
        },
        {
            id: 3,
            name: 'Triceps en polea con cuerda',
            mainMuscle: 'Tríceps',
            secondaryMuscles: ['Pecho'],
            description: 'Un ejercicio para trabajar los tríceps usando una polea alta. Ideal para obtener una buena contracción muscular.',
            image: require('../src/ejercicios/Brazo/tricepsEnPolea.png'),  // Cambiar a require() para cargar la imagen
            video: require('../src/ejercicios/Brazo/tricepsEnPolea.mp4'),
            sets: '3',
            reps: '8-12',
            tips: [
                'Mantén los codos pegados al torso y evita mover los hombros.',
                'Controla el movimiento, enfocándote en la contracción del tríceps.',
                'No dejes que la polea tire del cuerpo, mantén la postura estable.',
            ],
        },
        {
            id: 4,
            name: 'Press francés',
            mainMuscle: 'Tríceps',
            secondaryMuscles: ['Hombros', 'Pectorales'],
            description: 'Ejercicio aislado para trabajar los tríceps, realizado con una barra o mancuernas mientras estás acostado en un banco.',
            image: require('../src/ejercicios/Brazo/pressFrances.png'), // Cambiar a require() para cargar la imagen
            video: require('../src/ejercicios/Brazo/pressFrances.mp4'),
            sets: 3,
            reps: '8-12',
            tips: [
                'Mantén los codos en una posición fija durante todo el movimiento.',
                'Baja la barra o las mancuernas lentamente hacia tu frente, controlando el peso.',
                'Evita extender completamente los codos al final del movimiento para mantener la tensión en los tríceps.',
            ],
        },
    ],
    Gluteo: [
        {
            id: 1,
            name: 'Hip Thrust',
            mainMuscle: 'Glúteos',
            secondaryMuscles: ['Piernas', 'Core'],
            description: 'Ejercicio ideal para activar y fortalecer los glúteos, aumentando la fuerza y mejorando la postura.',
            image: require('../src/ejercicios/Gluteo/HipThrust.png'),  // Cambiar a require() para cargar la imagen
            video: require('../src/ejercicios/Gluteo/HipThrust.mp4'),
            sets: '3-4',
            reps: '10-12',
            tips: [
                'Mantén la espalda recta y evita arquearla durante el movimiento.',
                'Asegúrate de subir con los glúteos apretados en la parte superior.',
                'Usa un banco estable y ajusta la barra para mayor comodidad.',
            ],
        },
        {
            id: 2,
            name: 'Sentadilla Búlgara',
            mainMuscle: 'Glúteos',
            secondaryMuscles: ['Cuádriceps', 'Core'],
            description: 'Ejercicio unilateral que activa los glúteos y mejora la estabilidad y el equilibrio.',
            image: require('../src/ejercicios/Gluteo/bulgara.png'),  // Cambiar a require() para cargar la imagen
            video: require('../src/ejercicios/Gluteo/bulgara.mp4'),
            sets: '3',
            reps: '10-12 por pierna',
            tips: [
                'Apoya el pie trasero en un banco estable.',
                'Evita que la rodilla delantera sobrepase los dedos del pie.',
                'Mantén el torso recto y el core activado durante el movimiento.',
            ],
        }, 
        {
            id: 3,
            name: 'Patada',
            mainMuscle: 'Glúteos',
            secondaryMuscles: ['Isquiotibiales', 'Core'],
            description: 'Ejercicio de aislamiento para trabajar los glúteos, realizado con una máquina de cables y una correa para el tobillo.',
            image: require('../src/ejercicios/Gluteo/patada.png'), // Cambiar a require() para cargar la imagen
            video: require('../src/ejercicios/Gluteo/patada.mp4'),
            sets: 3,
            reps: '12-15 por pierna',
            tips: [
                'Mantén el torso recto y estable mientras realizas el movimiento.',
                'Patea hacia atrás y arriba en un movimiento controlado, contrayendo los glúteos en la parte superior.',
                'Evita arquear la espalda baja y mantén el control al regresar a la posición inicial.',
            ],
        },
        {
            id: 4,
            name: 'Peso muerto rumano',
            mainMuscle: 'Isquiotibiales',
            secondaryMuscles: ['Glúteos', 'Espalda baja'],
            description: 'Ejercicio de levantamiento que trabaja principalmente los isquiotibiales y los glúteos, con énfasis en la técnica y el control.',
            image: require('../src/ejercicios/Gluteo/pesomuertoRumano.png'), // Cambiar a require() para cargar la imagen
            video: require('../src/ejercicios/Gluteo/pesomuertoRumano.mp4'),
            sets: 3,
            reps: '8-12',
            tips: [
                'Mantén la espalda recta durante todo el movimiento para evitar lesiones.',
                'Baja la barra manteniéndola cerca de tus piernas, hasta sentir un estiramiento en los isquiotibiales.',
                'Flexiona ligeramente las rodillas, pero no permitas que se doblen excesivamente.',
                'Controla el movimiento al bajar y subir, contrayendo los glúteos en la parte superior.',
            ],
        },
    ],
};
