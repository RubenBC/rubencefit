const T_B = "Básico"; const T_A = "Aislamiento"; const T_S = "Salud"; 
    
function getIcon(t) {
    if(t === T_B) return '🔥 ';
    if(t === T_A) return '🎯 ';
    if(t === T_S) return '🛡️ ';
    return '';
}

const db = {
    "Pecho": { icon: "expand_less", advice: "Control de hombros y apertura.", data: [
        {n:"Press de banca con mancuernas", t:T_B, tip:"Mancuernas + Banco", info:"Tumbado en el banco plano, empuja las mancuernas desde la altura del pecho hasta extender los brazos arriba y baja controlando. Trabaja el pectoral mayor completo, con apoyo del deltoides anterior y el tríceps. El rey de los empujes horizontales.", recSeries:"3-4", recReps:"6-12"},
        {n:"Press inclinado con mancuernas", t:T_B, tip:"Mancuernas + Banco", info:"Igual que el press plano pero con el banco a 30-45°. El ángulo desplaza el trabajo a la porción clavicular (pecho superior) y aumenta la participación del deltoides anterior.", recSeries:"3-4", recReps:"8-12"},
        {n:"Press declinado con mancuernas", t:T_B, tip:"Mancuernas + Banco", info:"Con el banco ligeramente declinado, empuja las mancuernas perpendiculares al suelo. Enfatiza la porción esternal baja del pectoral y suele permitir mover algo más de peso.", recSeries:"3", recReps:"8-12"},
        {n:"Press de pecho con agarre neutro", t:T_B, tip:"Mancuernas + Banco", info:"Press en banco plano con las palmas enfrentadas y los codos pegados al cuerpo. Trabaja el pectoral con la mínima tensión sobre el hombro: la mejor opción los días que la articulación molesta.", recSeries:"3", recReps:"8-12"},
        {n:"Aperturas con mancuernas en banco", t:T_A, tip:"Mancuernas + Banco", info:"Tumbado, abre los brazos en arco con ligera flexión de codo hasta sentir el estiramiento del pecho y cierra como abrazando un barril. Aísla el pectoral eliminando al tríceps; el banco permite que los brazos bajen más allá del torso.", recSeries:"3", recReps:"10-15"},
        {n:"Pullover con mancuerna", t:T_A, tip:"Mancuernas + Banco", info:"Tumbado en el banco, baja una mancuerna en arco por detrás de la cabeza con brazos casi rectos y vuelve. Trabaja el pectoral en su fibra esternal y expande la caja torácica; el dorsal asiste.", recSeries:"3", recReps:"10-15"},
        {n:"Flexiones", t:T_B, tip:"Sin equipamiento", info:"Cuerpo recto, manos algo más anchas que los hombros, baja el pecho al suelo y empuja. Pectoral, deltoides anterior y tríceps con el core estabilizando todo el tiempo.", recSeries:"3-4", recReps:"8-20"},
        {n:"Flexiones inclinadas (manos elevadas)", t:T_B, tip:"Sin equipamiento", info:"Flexiones con las manos sobre el banco o una mesa. La inclinación reduce el peso a mover y desplaza el énfasis al pecho inferior. Ideal para acumular volumen sin fatiga excesiva.", recSeries:"3", recReps:"10-20"},
        {n:"Flexiones declinadas (pies elevados)", t:T_B, tip:"Sin equipamiento", info:"Flexiones con los pies sobre el banco. Aumenta la carga y enfoca el pecho superior y los hombros. La versión más exigente de la flexión clásica.", recSeries:"3", recReps:"8-15"},
        {n:"Cruce de pecho con banda elástica", t:T_A, tip:"Solo Gomas", info:"Con la banda anclada a la espalda o a un punto fijo, junta las manos al frente cruzando ligeramente. Replica el cruce de poleas: contracción máxima del pectoral en el cierre, donde las mancuernas pierden tensión.", recSeries:"3", recReps:"12-20"},
        {n:"Press de pecho con banda de pie", t:T_B, tip:"Solo Gomas", info:"De pie con la banda pasando por la espalda, empuja al frente como un press. La tensión crece al final del recorrido, justo donde el press con mancuerna se relaja. Buen finisher o alternativa sin banco.", recSeries:"3", recReps:"10-15"},
        {n:"Estiramiento de pectoral en pared", t:T_S, tip:"Estiramiento", info:"Antebrazo apoyado en la pared en ángulo de 90°, gira el cuerpo hacia el lado contrario hasta notar el estiramiento. Estira el pectoral y el deltoides anterior.", recSeries:"1", recReps:"30-45s"},
        {n:"Apertura de pecho con manos entrelazadas", t:T_S, tip:"Estiramiento", info:"Entrelaza las manos detrás de la espalda y abre el pecho elevando los brazos y separando los omóplatos. Estira pectoral y bíceps. Ideal tras los presses.", recSeries:"1", recReps:"30-45s"},
        {n:"Postura de la cobra", t:T_S, tip:"Estiramiento", info:"Tumbado boca abajo, empuja con las manos elevando el torso con la cadera en el suelo. Estira pecho y abdomen y moviliza la columna.", recSeries:"1", recReps:"30-45s"},
        {n:"Estiramiento de pecho tumbado con brazo en cruz", t:T_S, tip:"Estiramiento", info:"Boca abajo con un brazo extendido en cruz, rueda el cuerpo hacia ese lado dejando el brazo atrás. Estiramiento profundo del pectoral fibra a fibra.", recSeries:"1", recReps:"30-45s/lado"}
    ] },
    "Espalda": { icon: "format_align_justify", advice: "Tracción vertical y horizontal.", data: [
        {n:"Remo con mancuerna a una mano", t:T_B, tip:"Mancuernas + Banco", info:"Rodilla y mano apoyadas en el banco, espalda neutra, rema la mancuerna hacia la cadera. Dorsal ancho, romboides y trapecio medio con cero carga lumbar gracias al apoyo.", recSeries:"3-4", recReps:"8-12"},
        {n:"Remo inclinado con dos mancuernas", t:T_B, tip:"Solo Mancuernas", info:"De pie, torso inclinado 45° con espalda recta, rema ambas mancuernas a la vez hacia el abdomen. Trabaja toda la espalda y obliga a los erectores y al core a sostener la postura: el remo más completo.", recSeries:"3-4", recReps:"8-12"},
        {n:"Remo con pecho apoyado en banco inclinado", t:T_B, tip:"Mancuernas + Banco", info:"Tumbado boca abajo sobre el banco inclinado, rema las mancuernas. El apoyo elimina el impulso y la carga lumbar: aislamiento puro de dorsal y romboides, ideal para ir pesado con técnica perfecta.", recSeries:"3-4", recReps:"8-12"},
        {n:"Remo renegado (renegade row)", t:T_B, tip:"Solo Mancuernas", info:"En posición de plancha alta con las manos sobre las mancuernas, rema una alternativamente sin rotar la cadera. Espalda y core anti-rotación en un solo movimiento muy exigente.", recSeries:"3", recReps:"6-10/lado"},
        {n:"Peso muerto rumano con mancuernas", t:T_B, tip:"Solo Mancuernas", info:"De pie, baja las mancuernas pegadas a las piernas empujando la cadera atrás con rodillas semiflexionadas y espalda neutra. Cadena posterior completa: erectores, glúteo e isquios, con agarre y trapecios sosteniendo.", recSeries:"3-4", recReps:"8-12"},
        {n:"Pullover con mancuerna para dorsal", t:T_A, tip:"Mancuernas + Banco", info:"Igual que el pullover de pecho pero con codos más flexionados y enfoque consciente en tirar con los dorsales. Trabaja el dorsal en estiramiento máximo, su rango más productivo.", recSeries:"3", recReps:"10-15"},
        {n:"Encogimientos de hombros con mancuernas", t:T_A, tip:"Solo Mancuernas", info:"De pie con las mancuernas a los lados, eleva los hombros hacia las orejas y baja lento. Aísla el trapecio superior.", recSeries:"3", recReps:"12-15"},
        {n:"Jalón al pecho con banda elástica", t:T_B, tip:"Solo Gomas", info:"Banda anclada arriba (puerta o barra), tira de ella hacia el pecho llevando los codos abajo y atrás. Replica el jalón de polea: dorsal ancho en su función de tracción vertical, imposible con mancuernas.", recSeries:"3-4", recReps:"10-15"},
        {n:"Face pull con banda", t:T_A, tip:"Solo Gomas", info:"Banda anclada a la altura de la cara, tira hacia el rostro separando las manos y rotando externamente al final. Deltoides posterior, romboides y manguito rotador: el ejercicio de salud de hombro por excelencia.", recSeries:"3", recReps:"15-20"},
        {n:"Band pull apart", t:T_A, tip:"Solo Gomas", info:"Brazos extendidos al frente con la banda agarrada, sepárala hasta tocar el pecho juntando las escápulas. Deltoides posterior y romboides; antídoto directo de la postura encorvada.", recSeries:"3", recReps:"15-20"},
        {n:"Remo sentado con banda elástica", t:T_B, tip:"Solo Gomas", info:"Sentado en el suelo con piernas extendidas y la banda en los pies, rema hacia el abdomen. Tracción horizontal con tensión creciente; dorsal y romboides sin ninguna carga axial.", recSeries:"3", recReps:"10-15"},
        {n:"Superman", t:T_S, tip:"Sin equipamiento", info:"Boca abajo, eleva simultáneamente brazos y piernas unos centímetros y baja controlado. Fortalece erectores espinales y glúteo de forma segura, equilibrando tanto trabajo de empuje.", recSeries:"3", recReps:"10-12"},
        {n:"Postura del niño", t:T_S, tip:"Estiramiento", info:"Sentado sobre los talones con los brazos extendidos al frente y la frente en el suelo. Descomprime toda la columna, el dorsal y los hombros.", recSeries:"1", recReps:"60-90s"},
        {n:"Perro boca abajo", t:T_S, tip:"Estiramiento", info:"Desde cuadrupedia eleva las caderas formando una V invertida. Estira dorsal, isquios, gemelos y hombros a la vez.", recSeries:"1", recReps:"45-60s"},
        {n:"Torsión espinal tumbado", t:T_S, tip:"Estiramiento", info:"Boca arriba, lleva una rodilla al pecho y crúzala al lado contrario girando la cabeza al lado opuesto. Libera lumbares y dorsal.", recSeries:"1", recReps:"45s/lado"},
        {n:"Gato-vaca", t:T_S, tip:"Estiramiento", info:"En cuadrupedia, alterna arquear la espalda hacia arriba y hundirla hacia abajo al ritmo de la respiración. Moviliza la columna vértebra a vértebra.", recSeries:"1", recReps:"8-10 resp."}
    ] },
    "Hombros": { icon: "accessibility_new", advice: "Cuidado del manguito rotador.", data: [
        {n:"Press militar con mancuernas sentado", t:T_B, tip:"Mancuernas + Banco", info:"Sentado con respaldo vertical, empuja las mancuernas desde los hombros hasta arriba. Deltoides anterior y medio con tríceps; el respaldo protege la lumbar y permite ir pesado.", recSeries:"3-4", recReps:"6-12"},
        {n:"Press Arnold", t:T_B, tip:"Mancuernas + Banco", info:"Empieza con las palmas mirándote y rota las muñecas durante el empuje hasta acabar con las palmas al frente. La rotación recorre las tres cabezas del deltoide en un solo movimiento.", recSeries:"3", recReps:"8-12"},
        {n:"Push press con mancuernas", t:T_B, tip:"Solo Mancuernas", info:"Press de pie con un pequeño impulso de piernas para iniciar. Permite manejar más peso del que moverías estricto; deltoides completo más cadena de potencia.", recSeries:"3", recReps:"6-10"},
        {n:"Elevaciones laterales con mancuernas", t:T_A, tip:"Solo Mancuernas", info:"De pie, eleva las mancuernas a los lados hasta la horizontal con codos semiflexionados. El constructor del deltoides medio, el que da amplitud al hombro.", recSeries:"3-4", recReps:"12-20"},
        {n:"Elevación lateral tumbado en banco inclinado", t:T_A, tip:"Mancuernas + Banco", info:"Tumbado de lado sobre el banco inclinado, eleva la mancuerna del brazo libre. Elimina el trapecio y el impulso por completo: tensión pura en el deltoides medio desde el primer grado.", recSeries:"3", recReps:"10-15"},
        {n:"Elevaciones frontales con mancuernas", t:T_A, tip:"Solo Mancuernas", info:"Eleva las mancuernas al frente hasta la altura de los ojos, alternando o a la vez. Aísla el deltoides anterior.", recSeries:"3", recReps:"10-15"},
        {n:"Pájaros en banco inclinado", t:T_A, tip:"Mancuernas + Banco", info:"Pecho apoyado boca abajo en el banco inclinado, abre los brazos a los lados. Deltoides posterior sin posibilidad de impulso lumbar.", recSeries:"3-4", recReps:"12-20"},
        {n:"Pájaros de pie con mancuernas", t:T_A, tip:"Solo Mancuernas", info:"Torso inclinado al frente, abre los brazos a los lados con codos suaves. Deltoides posterior y romboides; versión libre que también pide estabilidad.", recSeries:"3", recReps:"12-20"},
        {n:"Elevaciones laterales con banda", t:T_A, tip:"Solo Gomas", info:"Pisa la banda y eleva los brazos a los lados. La resistencia crece arriba, donde la mancuerna afloja: combina perfecto con las elevaciones con peso.", recSeries:"3", recReps:"15-20"},
        {n:"Rotación externa con banda", t:T_S, tip:"Solo Gomas", info:"Codo pegado al cuerpo a 90°, rota el antebrazo hacia afuera contra la banda. Infraespinoso y redondo menor: el seguro de vida del hombro, especialmente con tanto press.", recSeries:"3", recReps:"15-20"},
        {n:"Press de hombros con banda de pie", t:T_B, tip:"Solo Gomas", info:"Pisa la banda y empuja las asas sobre la cabeza. Tensión continua y creciente; buena alternativa ligera o para finalizar.", recSeries:"3", recReps:"10-15"},
        {n:"Estiramiento de hombro cruzado", t:T_S, tip:"Estiramiento", info:"Lleva un brazo estirado al pecho y empújalo con el otro hacia el cuerpo. Estira deltoides posterior y manguito rotador.", recSeries:"1", recReps:"30s/lado"},
        {n:"Brazos de águila", t:T_S, tip:"Estiramiento", info:"Cruza los antebrazos al frente enrollándolos y eleva los codos. Estira deltoides y la zona entre los omóplatos.", recSeries:"1", recReps:"30-45s"},
        {n:"Péndulo de hombro (Codman)", t:T_S, tip:"Estiramiento", info:"Torso inclinado con apoyo, deja el brazo colgar muerto y dibuja círculos suaves. Descomprime la articulación sin esfuerzo muscular.", recSeries:"1", recReps:"30-45s/lado"},
        {n:"Estiramiento de hombros en marco de puerta", t:T_S, tip:"Estiramiento", info:"Antebrazos apoyados en el marco de la puerta, da un paso al frente. Abre el pecho y el hombro anterior.", recSeries:"1", recReps:"30-45s"}
    ] },
    "Bíceps": { icon: "fitness_center", advice: "Flexión de codo técnica.", data: [
        {n:"Curl de bíceps alterno con mancuernas", t:T_B, tip:"Solo Mancuernas", info:"De pie, flexiona un codo cada vez supinando la muñeca al subir. El curl fundamental: bíceps braquial completo con máxima concentración por brazo.", recSeries:"3-4", recReps:"8-12"},
        {n:"Curl martillo", t:T_B, tip:"Solo Mancuernas", info:"Curl con las palmas enfrentadas durante todo el recorrido. Desplaza el trabajo al braquial y braquiorradial: más grosor de brazo y antebrazo.", recSeries:"3-4", recReps:"8-12"},
        {n:"Curl concentrado", t:T_A, tip:"Solo Mancuernas", info:"Sentado, codo apoyado en la cara interna del muslo, flexiona estricto. Aislamiento total del bíceps sin posibilidad de balanceo; ideal para el pico.", recSeries:"3", recReps:"10-12"},
        {n:"Curl predicador con mancuerna en banco", t:T_A, tip:"Mancuernas + Banco", info:"Tríceps apoyado sobre el respaldo inclinado del banco, flexiona el codo. El apoyo elimina toda ayuda del hombro; la bajada controlada es donde está la ganancia.", recSeries:"3", recReps:"10-12"},
        {n:"Curl en banco inclinado", t:T_B, tip:"Mancuernas + Banco", info:"Sentado en el banco inclinado hacia atrás con los brazos colgando, flexiona. Los brazos quedan tras el torso: estiramiento máximo del bíceps, su posición de mayor crecimiento.", recSeries:"3", recReps:"8-12"},
        {n:"Curl araña en banco inclinado", t:T_A, tip:"Mancuernas + Banco", info:"Pecho apoyado boca abajo en el banco inclinado, brazos colgando verticales, flexiona. Tensión constante de principio a fin sin ningún impulso posible.", recSeries:"3", recReps:"10-12"},
        {n:"Curl Zottman", t:T_B, tip:"Solo Mancuernas", info:"Sube en supinación (curl normal) y baja en pronación (curl inverso). Bíceps en la subida, antebrazo y braquiorradial en la bajada: dos ejercicios en uno.", recSeries:"3", recReps:"8-12"},
        {n:"Curl de arrastre (drag curl)", t:T_A, tip:"Solo Mancuernas", info:"Arrastra las mancuernas pegadas al cuerpo llevando los codos hacia atrás al subir. Quita el deltoides de la ecuación y maximiza la contracción pico del bíceps.", recSeries:"3", recReps:"10-12"},
        {n:"Curl 21 (21s)", t:T_A, tip:"Solo Mancuernas", info:"7 repeticiones de la mitad inferior + 7 de la mitad superior + 7 completas, sin descanso. Bomba metabólica brutal y trabajo de rangos parciales.", recSeries:"2-3", recReps:"21"},
        {n:"Curl inverso con mancuernas", t:T_A, tip:"Solo Mancuernas", info:"Curl con las palmas hacia abajo. Braquiorradial y extensores del antebrazo: el eslabón que suele faltar y mejora el agarre.", recSeries:"3", recReps:"10-15"},
        {n:"Curl de bíceps con banda elástica", t:T_B, tip:"Solo Gomas", info:"Pisa la banda y flexiona los codos. La resistencia crece en la contracción máxima, complementando la curva de fuerza de la mancuerna.", recSeries:"3", recReps:"12-15"},
        {n:"Estiramiento de bíceps en pared", t:T_S, tip:"Estiramiento", info:"Palma apoyada en la pared con el brazo extendido atrás, gira el cuerpo al lado contrario. Estira bíceps y antebrazo.", recSeries:"1", recReps:"30s/lado"},
        {n:"Estiramiento de bíceps con manos entrelazadas atrás", t:T_S, tip:"Estiramiento", info:"Manos entrelazadas tras la espalda con brazos rectos, elévalos suavemente. Estira bíceps y pecho a la vez.", recSeries:"1", recReps:"30-45s"},
        {n:"Estiramiento de antebrazos con palmas invertidas", t:T_S, tip:"Estiramiento", info:"En cuadrupedia, apoya las palmas con los dedos apuntando a las rodillas y lleva el peso atrás. Estira los flexores del antebrazo.", recSeries:"1", recReps:"30-45s"},
        {n:"Estiramiento de muñeca y antebrazo", t:T_S, tip:"Estiramiento", info:"Brazo extendido al frente, tira de los dedos hacia ti con la otra mano, con la palma hacia arriba y hacia abajo. Antebrazo completo.", recSeries:"1", recReps:"30s/lado"}
    ] },
    "Tríceps": { icon: "rebase_edit", advice: "Extensión de codo técnica.", data: [
        {n:"Press francés con mancuernas en banco", t:T_B, tip:"Mancuernas + Banco", info:"Tumbado, baja las mancuernas hacia las orejas flexionando solo los codos y extiende. La cabeza larga del tríceps trabaja en estiramiento; el banco permite bajar por detrás de la cabeza.", recSeries:"3-4", recReps:"8-12"},
        {n:"Extensión de tríceps sobre la cabeza con mancuerna", t:T_B, tip:"Mancuernas + Banco", info:"Sentado, sujeta una mancuerna con ambas manos sobre la cabeza y baja por detrás de la nuca. Máximo estiramiento de la cabeza larga, la que más masa aporta al brazo.", recSeries:"3", recReps:"10-15"},
        {n:"Extensión de tríceps a una mano sobre la cabeza", t:T_A, tip:"Solo Mancuernas", info:"Versión unilateral de la extensión sobre la cabeza. Permite corregir desequilibrios y concentrarte en cada brazo.", recSeries:"3", recReps:"10-12/lado"},
        {n:"Patada de tríceps con mancuerna", t:T_A, tip:"Solo Mancuernas", info:"Torso inclinado, codo fijo pegado al cuerpo, extiende el antebrazo atrás. Contracción pico del tríceps; el peso debe ser moderado para no romper la técnica.", recSeries:"3", recReps:"12-15"},
        {n:"Press cerrado con mancuernas en banco", t:T_B, tip:"Mancuernas + Banco", info:"Press con las mancuernas juntas y los codos pegados al cuerpo. El empuje más cargable para el tríceps, con asistencia del pecho.", recSeries:"3-4", recReps:"8-12"},
        {n:"Press Tate con mancuernas", t:T_A, tip:"Mancuernas + Banco", info:"Tumbado, con las mancuernas sobre el pecho y palmas al frente, baja los codos abriéndolos hacia los lados hasta que las mancuernas tocan el pecho y extiende. Ataca la cabeza lateral desde un ángulo único.", recSeries:"3", recReps:"10-12"},
        {n:"Fondos de tríceps en banco", t:T_B, tip:"Peso corporal + Banco", info:"Manos en el borde del banco, piernas al frente, baja flexionando los codos y empuja. Tríceps completo con peso corporal; cuanto más lejos los pies, más duro.", recSeries:"3-4", recReps:"10-15"},
        {n:"Flexiones diamante", t:T_B, tip:"Sin equipamiento", info:"Flexiones con las manos juntas formando un diamante bajo el pecho. La variante de flexión que más activa el tríceps según la electromiografía.", recSeries:"3", recReps:"8-15"},
        {n:"Extensión de tríceps con banda", t:T_A, tip:"Solo Gomas", info:"Banda anclada arriba, empuja hacia abajo con los codos fijos al cuerpo. Replica el jalón de polea: tensión constante que la mancuerna no da en este patrón.", recSeries:"3", recReps:"12-15"},
        {n:"Patada de tríceps con banda", t:T_A, tip:"Solo Gomas", info:"Igual que con mancuerna pero la banda mantiene la tensión en toda la extensión, incluida la contracción final donde la mancuerna ya no resiste.", recSeries:"3", recReps:"12-20"},
        {n:"Estiramiento de tríceps sobre la cabeza", t:T_S, tip:"Estiramiento", info:"Eleva un codo doblado tras la cabeza y empújalo hacia abajo con la otra mano. Estira la cabeza larga del tríceps y el dorsal.", recSeries:"1", recReps:"30s/lado"},
        {n:"Estiramiento de tríceps cruzado por la espalda", t:T_S, tip:"Estiramiento", info:"Una mano baja por detrás de la cabeza y la otra sube por la espalda intentando tocarse. Estira tríceps y hombro a la vez.", recSeries:"1", recReps:"30s/lado"},
        {n:"Postura del niño con brazos extendidos", t:T_S, tip:"Estiramiento", info:"Postura del niño con los brazos muy estirados al frente y las palmas en el suelo. Estira tríceps, dorsal y hombros.", recSeries:"1", recReps:"45-60s"},
        {n:"Estiramiento de tríceps con codo en pared", t:T_S, tip:"Estiramiento", info:"Codo apoyado en la pared por encima de la cabeza, deja caer el torso suavemente hacia ella. Estiramiento pasivo profundo del tríceps.", recSeries:"1", recReps:"30-45s/lado"}
    ] },
    "Core": { icon: "crop_square", advice: "Estabilidad antes que fuerza. Activa el core en cada rep.", data: [
        {n:"Crunch abdominal", t:T_B, tip:"Sin equipamiento", info:"Rodillas flexionadas, eleva los omóplatos del suelo contrayendo el abdomen sin tirar del cuello. Recto abdominal, porción superior.", recSeries:"3-4", recReps:"12-20"},
        {n:"Crunch inverso", t:T_B, tip:"Sin equipamiento", info:"Lleva las rodillas al pecho despegando la cadera del suelo. Recto abdominal inferior, la zona que el crunch normal apenas toca.", recSeries:"3-4", recReps:"12-15"},
        {n:"Crunch en banco declinado", t:T_B, tip:"Peso corporal + Banco", info:"Crunch con el banco declinado y los pies sujetos. Mayor rango y resistencia que en el suelo; progresable inclinando más.", recSeries:"3", recReps:"10-15"},
        {n:"Elevación de piernas tumbado", t:T_A, tip:"Sin equipamiento", info:"Eleva las piernas rectas a 90° y bájalas sin que toquen el suelo, con la lumbar siempre pegada. Recto inferior y flexores de cadera.", recSeries:"3", recReps:"10-15"},
        {n:"Plancha abdominal", t:T_B, tip:"Sin equipamiento", info:"Antebrazos y puntas de pies, cuerpo como una tabla, glúteo y abdomen apretados. Anti-extensión: el core resistiendo, que es su función real.", recSeries:"3-4", recReps:"30-60s"},
        {n:"Plancha lateral", t:T_B, tip:"Sin equipamiento", info:"De lado sobre un antebrazo, cadera elevada en línea recta. Oblicuos y cuadrado lumbar; estabilidad lateral pura.", recSeries:"3", recReps:"30-45s/lado"},
        {n:"Plancha con toque de hombros", t:T_B, tip:"Sin equipamiento", info:"Plancha alta tocando el hombro contrario alternativamente sin que la cadera rote. Anti-rotación dinámica.", recSeries:"3", recReps:"12-16 alt."},
        {n:"Hollow hold", t:T_B, tip:"Sin equipamiento", info:"Boca arriba, brazos y piernas elevados unos centímetros con la lumbar sellada al suelo. La posición gimnástica que enseña al core a trabajar como una unidad.", recSeries:"3-4", recReps:"20-40s"},
        {n:"Escaladores (mountain climbers)", t:T_B, tip:"Sin equipamiento", info:"En plancha alta, lleva las rodillas al pecho alternando con ritmo. Core dinámico que además sube pulsaciones sin ningún impacto.", recSeries:"3", recReps:"20-30 alt."},
        {n:"Giro ruso con mancuerna", t:T_A, tip:"Solo Mancuernas", info:"Sentado con el torso inclinado atrás, rota la mancuerna de lado a lado. Oblicuos con carga en rotación.", recSeries:"3", recReps:"16-20 alt."},
        {n:"Inclinaciones laterales con mancuerna", t:T_A, tip:"Solo Mancuernas", info:"De pie con una mancuerna en una mano, inclínate hacia ese lado y vuelve con el oblicuo contrario. Oblicuos y cuadrado lumbar con carga progresable.", recSeries:"3", recReps:"12-15/lado"},
        {n:"Dead bug", t:T_S, tip:"Sin equipamiento", info:"Boca arriba con brazos y rodillas a 90°, extiende brazo y pierna contrarios sin que la lumbar se despegue. Core profundo y coordinación; el ejercicio de control motor por excelencia.", recSeries:"3", recReps:"8-10/lado"},
        {n:"Bird dog", t:T_S, tip:"Sin equipamiento", info:"En cuadrupedia, extiende brazo y pierna contrarios manteniendo la columna inmóvil. Estabilidad espinal y glúteo; el complemento del dead bug.", recSeries:"3", recReps:"8-10/lado"},
        {n:"Pallof press con banda", t:T_S, tip:"Solo Gomas", info:"De pie con la banda anclada a un lado, extiende los brazos al frente resistiendo que te rote. Anti-rotación isométrica: el core como freno, que es su trabajo principal en la vida real.", recSeries:"3", recReps:"10-12/lado"},
        {n:"Postura de la esfinge", t:T_S, tip:"Estiramiento", info:"Boca abajo apoyado en los antebrazos con el pecho elevado. Estira el abdomen suavemente, amable con la lumbar.", recSeries:"1", recReps:"45-60s"},
        {n:"Postura del niño lateral", t:T_S, tip:"Estiramiento", info:"Desde la postura del niño, desplaza los brazos hacia un lado. Estira oblicuos y dorsal del lado alejado.", recSeries:"1", recReps:"45s/lado"},
        {n:"Torsión lumbar tumbado", t:T_S, tip:"Estiramiento", info:"Boca arriba con rodillas juntas flexionadas, déjalas caer a un lado con los hombros en el suelo. Estira oblicuos y zona lumbar.", recSeries:"1", recReps:"45s/lado"},
        {n:"Postura de la cobra (core)", t:T_S, tip:"Estiramiento", info:"Boca abajo, extiende los brazos elevando el torso. El abdomen completo en estiramiento tras el trabajo de flexión.", recSeries:"1", recReps:"30-45s"}
    ] },
    "Piernas": { icon: "directions_walk", advice: "Drenaje linfático y bomba muscular. Sin fuerza pura.", data: [
        {n:"Bomba de tobillo (ankle pumps)", t:T_S, tip:"Sin equipamiento", info:"Tumbado o sentado, flexiona y extiende los tobillos rítmicamente como acelerando. El gemelo actúa de bomba periférica empujando el fluido linfático hacia arriba: el ejercicio número uno del drenaje.", recSeries:"3", recReps:"15-20"},
        {n:"Círculos de tobillo", t:T_S, tip:"Sin equipamiento", info:"Dibuja círculos amplios con los pies en ambos sentidos. Moviliza el tobillo y activa la musculatura baja de la pierna en todos los planos.", recSeries:"3", recReps:"10/dirección"},
        {n:"Piernas elevadas en la pared", t:T_S, tip:"Sin equipamiento", info:"Tumbado con las piernas verticales apoyadas en la pared. La gravedad drena pasivamente; la respiración abdominal profunda mientras tanto multiplica el efecto.", recSeries:"1", recReps:"5-15 min"},
        {n:"Bicicleta en el aire", t:T_S, tip:"Sin equipamiento", info:"Tumbado boca arriba, pedalea en el aire con las piernas elevadas. Bomba muscular activa con la pierna en alto: drenaje y movilidad de cadera y rodilla a la vez.", recSeries:"3", recReps:"20-30s"},
        {n:"Deslizamiento de talones tumbado", t:T_S, tip:"Sin equipamiento", info:"Tumbado, desliza el talón por el suelo flexionando y extendiendo la rodilla. Movilidad de rodilla con activación suave, sin ninguna carga.", recSeries:"3", recReps:"10-12/pierna"},
        {n:"Elevación de pierna recta tumbado", t:T_S, tip:"Sin equipamiento", info:"Tumbado, eleva una pierna estirada hasta 45° y baja lento. Activa el cuádriceps sin carga articular; clásico absoluto de fisioterapia.", recSeries:"3", recReps:"8-10/pierna"},
        {n:"Abducción de cadera tumbado de lado", t:T_S, tip:"Sin equipamiento", info:"Tumbado de lado, eleva la pierna superior estirada y baja controlado. Glúteo medio sin carga; estabiliza la pelvis y bombea.", recSeries:"3", recReps:"10-12/lado"},
        {n:"Elevación de talones sentado", t:T_S, tip:"Sin equipamiento", info:"Sentado, eleva los talones del suelo y baja. Activa el gemelo como bomba sin cargar el peso corporal en la pierna.", recSeries:"3", recReps:"15-20"},
        {n:"Marcha sentado en silla", t:T_S, tip:"Sin equipamiento", info:"Sentado, marcha en el sitio elevando las rodillas alternativamente. Flexores de cadera y bombeo rítmico de toda la pierna.", recSeries:"3", recReps:"30-45s"},
        {n:"Flexo-extensión de rodilla sentado", t:T_S, tip:"Sin equipamiento", info:"Sentado, extiende una rodilla hasta estirar la pierna y baja. Cuádriceps suave y movilidad de rodilla.", recSeries:"3", recReps:"12-15/pierna"},
        {n:"Puente de glúteos", t:T_S, tip:"Sin equipamiento", info:"Tumbado con rodillas flexionadas, eleva la cadera apretando el glúteo. Glúteo y cadena posterior con la pierna descargada; además eleva las piernas respecto al tronco.", recSeries:"3", recReps:"12-15"},
        {n:"Apertura y cierre de piernas tumbado", t:T_S, tip:"Sin equipamiento", info:"Tumbado con las piernas elevadas, ábrelas y ciérralas controladamente. Aductores y abductores suaves con drenaje por elevación.", recSeries:"3", recReps:"12-15"},
        {n:"Respiración diafragmática", t:T_S, tip:"Sin equipamiento", info:"Inhala hinchando el abdomen, exhala vaciándolo del todo. El diafragma es la bomba linfática central del cuerpo: cada respiración profunda succiona fluido del sistema hacia el conducto torácico.", recSeries:"3-5", recReps:"8-10 resp."},
        {n:"Automasaje de drenaje linfático en pierna", t:T_S, tip:"Sin equipamiento", info:"Con las manos, presiona suavemente desde el tobillo hacia la rodilla y de la rodilla al muslo, siempre en dirección al corazón. Asiste manualmente al sistema linfático; presión suave, nunca dolor.", recSeries:"1", recReps:"5-10 min"},
        {n:"Mariposa", t:T_S, tip:"Estiramiento", info:"Sentado con las plantas de los pies juntas, deja caer las rodillas abiertas hacia el suelo. Estira aductores y cadera.", recSeries:"1", recReps:"45-60s"},
        {n:"Estiramiento de isquiotibiales tumbado con toalla", t:T_S, tip:"Estiramiento", info:"Tumbado, pasa una toalla por el pie y eleva la pierna recta tirando suavemente. Estira los isquios sin cargar la lumbar.", recSeries:"1", recReps:"45s/pierna"},
        {n:"Figura 4 tumbado (paloma tumbado)", t:T_S, tip:"Estiramiento", info:"Tumbado, cruza un tobillo sobre la rodilla contraria y lleva ambas piernas al pecho. Estira piriforme y glúteo sin cargar la pierna.", recSeries:"1", recReps:"45-60s/lado"},
        {n:"Estiramiento de gemelos en pared", t:T_S, tip:"Estiramiento", info:"Manos en la pared, una pierna atrás con el talón clavado en el suelo. Estira gemelo y sóleo.", recSeries:"1", recReps:"30-45s/pierna"}
    ] },
    "Cardio": { icon: "directions_run", advice: "Bajo impacto, bombeo linfático.", data: [
        {n:"Pedaleo suave continuo", t:T_S, tip:"Bicicleta", info:"Ritmo cómodo en el que puedes hablar sin ahogarte. Base aeróbica y bombeo continuo de piernas: el cardio más amable con el linfedema.", recSeries:"1", recReps:"20-45 min"},
        {n:"Pedaleo continuo moderado", t:T_S, tip:"Bicicleta", info:"Ritmo que permite hablar con frases cortas. Zona 2-3: quema grasa eficiente y mejora cardiovascular sin estrés.", recSeries:"1", recReps:"20-40 min"},
        {n:"Intervalos suaves en bicicleta", t:T_S, tip:"Bicicleta", info:"Alterna minutos suaves con minutos moderados (ej. 3 suaves + 1 moderado). Estímulo cardiovascular superior sin llegar nunca al fallo respiratorio.", recSeries:"3-4", recReps:"10 min/bloque"},
        {n:"Paseo por el parque", t:T_S, tip:"Sin equipamiento", info:"Caminata a ritmo natural. Cada paso es una contracción del gemelo que bombea la linfa; el ejercicio más infravalorado que existe.", recSeries:"1", recReps:"30-60 min"},
        {n:"Paseo rápido", t:T_S, tip:"Sin equipamiento", info:"Ritmo enérgico con los brazos acompañando. Eleva el gasto calórico notablemente manteniendo el impacto mínimo.", recSeries:"1", recReps:"20-45 min"},
        {n:"Paseo con mochila (rucking)", t:T_S, tip:"Mochila con peso", info:"Caminar con peso en la espalda (empieza con 5 kg). Convierte el paseo en trabajo de fuerza-resistencia de todo el cuerpo sin impacto añadido.", recSeries:"1", recReps:"30-45 min"},
        {n:"Estiramiento de gemelos en pared (cardio)", t:T_S, tip:"Estiramiento", info:"Talón clavado atrás, empuja la pared. Estira gemelo y sóleo tras el pedaleo o el paseo.", recSeries:"1", recReps:"30-45s/pierna"},
        {n:"Estiramiento de cuádriceps de pie con apoyo", t:T_S, tip:"Estiramiento", info:"Lleva el talón al glúteo sujetando el pie, apoyado en una silla o pared. Estira cuádriceps y flexor de cadera.", recSeries:"1", recReps:"30s/pierna"},
        {n:"Zancada baja (flexor de cadera)", t:T_S, tip:"Estiramiento", info:"Rodilla atrás apoyada en el suelo, lleva la cadera adelante. Estira psoas e ingle, acortados por pedalear sentado.", recSeries:"1", recReps:"30-45s/lado"},
        {n:"Estiramiento de isquiotibiales con toalla (cardio)", t:T_S, tip:"Estiramiento", info:"Tumbado con la toalla en el pie, eleva la pierna recta. Estira los isquios sin comprometer la espalda.", recSeries:"1", recReps:"45s/pierna"}
    ] }
};

const GRUPOS = Object.keys(db);
const GRUPOS_SEMANA = GRUPOS; // Todos los grupos son planificables

function getEjerciciosDe(grupo) {
    const base = (db[grupo]?.data || []).map(ex => {
        const edit = (state.ejerciciosEditados || {})[grupo + ':' + ex.n];
        return edit ? {...ex, ...edit} : ex;
    });
    const custom = ((state.ejerciciosCustom || {})[grupo] || []);
    return [...base, ...custom];
}
const DIAS_LOGICA = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
const DIAS_DISPLAY = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

const P_PUSH = ["Pecho", "Hombros", "Tríceps"];
const P_PULL = ["Espalda", "Bíceps"];
const P_LEGS = ["Piernas", "Core"];

let state = JSON.parse(localStorage.getItem('iron_log_v8.6')) || {
    hoy: [], historial: [], activeTab: 'rutinaPage',
    semana: { "Lunes": [], "Martes": [], "Miercoles": [], "Jueves": [], "Viernes": [], "Sabado": [], "Domingo": [] },
    plantillaSemanal: {},
    openMenu: null,
    sesionStartTime: null
};
if (state.sesionStartTime === undefined) state.sesionStartTime = null;
if (!state.ejerciciosCustom) state.ejerciciosCustom = {};
if (!state.ejerciciosEditados) state.ejerciciosEditados = {};
if (!state.lastSync) state.lastSync = null;

let swInterval = null;
let bibliotecaDia = (() => { const d = new Date().getDay(); return DIAS_LOGICA[d === 0 ? 6 : d - 1]; })();
let diasEditando = new Set();
let calYear = new Date().getFullYear();
let calMonth = new Date().getMonth();

function tickStopwatch() {
    if (!state.sesionStartTime) return;
    const elapsed = Math.floor((Date.now() - state.sesionStartTime) / 1000);
    const m = Math.floor(elapsed / 60);
    const s = elapsed % 60;
    const disp = document.getElementById('stopwatchDisplay');
    if (disp) disp.innerText = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
}

function startSesionStopwatch() {
    if (!state.sesionStartTime) { state.sesionStartTime = Date.now(); save(); }
    clearInterval(swInterval);
    swInterval = setInterval(tickStopwatch, 1000);
    tickStopwatch();
    updateStopwatchVisibility();
}

function stopSesionStopwatch() {
    clearInterval(swInterval);
    swInterval = null;
}

function resetSesionStopwatch() {
    stopSesionStopwatch();
    state.sesionStartTime = null;
    const disp = document.getElementById('stopwatchDisplay');
    if (disp) disp.innerText = '00:00';
    updateStopwatchVisibility();
}

function updateStopwatchVisibility() {
    const row = document.getElementById('stopwatchRow');
    if (!row) return;
    const visible = state.activeTab === 'hoyPage' && !!state.sesionStartTime;
    row.style.display = visible ? 'flex' : 'none';
    if (visible) tickStopwatch();
}

function updateSessionProgress() {
    const el = document.getElementById('sessionProgress');
    if (!el) return;
    if (state.hoy.length === 0) { el.innerHTML = ''; return; }
    const done = state.hoy.filter(e => e.done).length;
    const total = state.hoy.length;
    const pct = Math.round((done / total) * 100);
    if (done === total) {
        el.innerHTML = `
        <div class="session-complete">
            <span class="session-complete-emoji">💪</span>
            <div class="session-complete-info">
                <div class="session-complete-title">¡Sesión completada!</div>
                <div class="session-complete-sub">${total} ejercicios · Guarda tu entreno</div>
            </div>
            <button class="session-complete-btn" onclick="finalizarSesion()">Guardar →</button>
        </div>`;
    } else {
        el.innerHTML = `
        <div class="session-progress-wrap">
            <div class="session-progress-bar-bg">
                <div class="session-progress-bar-fill" style="width:${pct}%"></div>
            </div>
            <span class="session-progress-text">${done} / ${total}</span>
        </div>`;
    }
}

function toggleDone(i) {
    state.hoy[i].done = !state.hoy[i].done;
    expandedDone.delete(i);
    openExMenu = null;
    if (state.hoy[i].done && !state.sesionStartTime) startSesionStopwatch();
    save(); renderToday();
}

function save() { localStorage.setItem('iron_log_v8.6', JSON.stringify(state)); updateCounter(); analyzeRoutine(); }
function updateCounter() { const el = document.getElementById('exerciseCounter'); if(el) el.innerText = state.hoy.length; }

function analyzeRoutine() {
    const msg = document.getElementById('coachMessage');
    const tags = document.getElementById('coachTags');
    if(!msg || !tags) return;
    if(state.hoy.length === 0) { msg.innerHTML = "Lista vacía."; tags.innerHTML = ""; return; }
    const counts = { [T_B]: 0, [T_A]: 0, [T_S]: 0 };
    state.hoy.forEach(ex => counts[ex.t]++);
    msg.innerHTML = counts[T_B] === 0 && !state.hoy.some(e=>e.group==="Cardio") ? "⚠️ Añade un <b>Básico</b>." : (counts[T_S] === 0 ? "🛡️ Añade algo de <b>Salud</b>." : "✅ Rutina equilibrada.");
    tags.innerHTML = `<span class="tag tag-basico">${counts[T_B]} B</span><span class="tag tag-aisla">${counts[T_A]} A</span><span class="tag tag-salud">${counts[T_S]} S</span>`;
}

function showPage(id, btn, slideDir) {
    try { initAudio(); } catch(e) {}
    if(id === 'rutinaPage' && document.getElementById('rutinaPage').classList.contains('active')) backToGroups();
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active', 'slide-in-right', 'slide-in-left'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    const pageEl = document.getElementById(id);
    if (slideDir) {
        // Aplica la clase de slide y fuerza reflow ANTES de activar para que la animación arranque limpia
        pageEl.classList.add(slideDir === 'right' ? 'slide-in-right' : 'slide-in-left');
        void pageEl.offsetWidth;
    }
    pageEl.classList.add('active');
    if(btn) btn.classList.add('active'); else { const b = document.getElementById('btn-'+id.replace('Page','')); if(b) b.classList.add('active'); }
    state.activeTab = id; save();
    setTimerExpanded(id === 'hoyPage');
    if (id === 'hoyPage') sincronizarHoyConPlan();
    if (id === 'hoyPage' && state.sesionStartTime) startSesionStopwatch();
    else if (id !== 'hoyPage') stopSesionStopwatch();
    updateStopwatchVisibility();
    if(id === 'rutinaPage') { if(bibliotecaDia === 'hoy') {} renderGroups(); }
    if(id === 'hoyPage') renderToday();
    if(id === 'semanaPage') renderWeek();
    if(id === 'historialPage') renderHistory();
}

function renderDiaSelector() {
    const row = document.getElementById('diaSelectorRow');
    if (!row) return;
    const hoy = new Date();
    const hoyIdx = hoy.getDay() === 0 ? 6 : hoy.getDay() - 1;
    const hoyKey = DIAS_LOGICA[hoyIdx];
    const chips = DIAS_LOGICA.map((d, i) => ({ key: d, label: DIAS_DISPLAY[i].slice(0,3) }));
    row.innerHTML = chips.map(c => {
        const grupos = state.semana[c.key] || [];
        const tieneGrupos = grupos.length > 0;
        const activo = bibliotecaDia === c.key;
        const esHoy = c.key === hoyKey;
        return `<div class="dia-chip${activo ? ' dia-chip-active' : ''}${esHoy ? ' dia-chip-today' : ''}${!tieneGrupos ? ' dia-chip-rest' : ''}" onclick="setDia('${c.key}')">
            <span class="dia-chip-label">${c.label}</span>
        </div>`;
    }).join('');
}

function setDia(dia) {
    bibliotecaDia = dia;
    renderGroups();
    // Refresh exercise list if open
    const ev = document.getElementById('exerciseView');
    const gn = document.getElementById('selectedGroupName');
    if (ev && ev.style.display !== 'none' && gn.innerText) showExercises(gn.innerText);
}

function getDiaLabel() {
    if (bibliotecaDia === 'hoy') return 'HOY';
    return bibliotecaDia.toUpperCase();
}

function getGruposParaDia() {
    return state.semana[bibliotecaDia] || [];
}

function renderGroups() {
    renderDiaSelector();
    const grupos = getGruposParaDia();
    document.getElementById('groupGrid').innerHTML = GRUPOS.map(g => {
        const enDia = !grupos || grupos.includes(g);
        return `<div class="group-card${!enDia ? ' group-card-dim' : ''}" onclick="showExercises('${g}')">
            <span class="material-symbols-outlined">${db[g].icon}</span>
            <div style="font-weight:bold;">${g}</div>
            ${!enDia ? '<div style="font-size:9px; opacity:0.5;">no en este día</div>' : ''}
        </div>`;
    }).join('');
}

function showExercises(group) {
    document.getElementById('groupsView').style.display = 'none';
    document.getElementById('exerciseView').style.display = 'block';
    document.getElementById('selectedGroupName').innerText = group;
    document.getElementById('groupAdvice').innerText = db[group]?.advice || '';
    const label = getDiaLabel();
    const ejercicios = getEjerciciosDe(group);
    document.getElementById('exerciseList').innerHTML = ejercicios.map((ex, idx) => {
        const esCustom = !db[group]?.data?.find(e => e.n === ex.n);
        const nombre = ex.n || ex.name;
        const tagClass = ex.t === T_B ? 'tag-basico' : ex.t === T_A ? 'tag-aisla' : 'tag-salud';
        return `
        <div class="routine-card">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;">
                <div style="flex:1;min-width:0;">
                    <b>${getIcon(ex.t)}${nombre}</b><br>
                    <small>${ex.tip}</small>
                    ${ex.recSeries ? `<br><small style="color:var(--text2);">Rec: ${ex.recSeries} series × ${ex.recReps}</small>` : ''}
                </div>
                <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;">
                    <span class="tag ${tagClass}">${ex.t}</span>
                    <div style="display:flex;gap:4px;margin-top:4px;">
                        ${ex.info ? `<button class="btn-ex-info" onclick="abrirInfoEjercicio('${nombre}','${group}')"><span class="material-symbols-outlined" style="font-size:16px;">info</span></button>` : ''}
                        <button class="btn-ex-edit" onclick="abrirEditarEjercicio('${nombre}','${group}',${esCustom})"><span class="material-symbols-outlined" style="font-size:16px;">edit</span></button>
                        ${esCustom ? `<button class="btn-ex-del" onclick="eliminarCustom('${nombre}','${group}')"><span class="material-symbols-outlined" style="font-size:16px;">delete</span></button>` : ''}
                    </div>
                </div>
            </div>
            <button onclick="addToDay('${nombre}','${group}','${ex.t}','${ex.tip}')" style="background:var(--primary);color:white;border:none;padding:10px;border-radius:8px;margin-top:12px;width:100%;">AÑADIR A ${label}</button>
        </div>`;
    }).join('') + `
    <div style="margin-top:8px;">
        <button onclick="abrirNuevoEjercicio('${group}')" style="width:100%;background:none;border:2px dashed var(--outline);color:var(--primary);border-radius:12px;padding:12px;font-size:13px;font-weight:600;cursor:pointer;">+ Añadir ejercicio propio</button>
    </div>`;
}

function abrirInfoEjercicio(nombre, grupo) {
    const lista = getEjerciciosDe(grupo);
    const ex = lista.find(e => (e.n||e.name) === nombre);
    if (!ex) return;
    document.getElementById('exInfoNombre').innerText = nombre;
    document.getElementById('exInfoDesc').innerText = ex.info || 'Sin descripción disponible.';
    document.getElementById('exInfoRec').innerText = ex.recSeries && ex.recReps ? `${ex.recSeries} series × ${ex.recReps}` : '';
    document.getElementById('exInfoModal').style.display = 'flex';
}

function cerrarInfoEjercicio(el, e) {
    if (!e || e.target === el) document.getElementById('exInfoModal').style.display = 'none';
}

let _editGrupo = '', _editNombre = '', _editEsCustom = false;

function abrirEditarEjercicio(nombre, grupo, esCustom) {
    _editGrupo = grupo; _editNombre = nombre; _editEsCustom = esCustom;
    const lista = getEjerciciosDe(grupo);
    const ex = lista.find(e => (e.n||e.name) === nombre) || {};
    document.getElementById('editExNombre').value = nombre;
    document.getElementById('editExTipo').value = ex.t || T_B;
    document.getElementById('editExInfo').value = ex.info || '';
    document.getElementById('editExRecSeries').value = ex.recSeries || '';
    document.getElementById('editExRecReps').value = ex.recReps || '';
    document.getElementById('editExModal').style.display = 'flex';
}

function abrirNuevoEjercicio(grupo) {
    _editGrupo = grupo; _editNombre = ''; _editEsCustom = true;
    document.getElementById('editExNombre').value = '';
    document.getElementById('editExTipo').value = T_B;
    document.getElementById('editExInfo').value = '';
    document.getElementById('editExRecSeries').value = '';
    document.getElementById('editExRecReps').value = '';
    document.getElementById('editExModal').style.display = 'flex';
}

function cerrarEditarEjercicio(el, e) {
    if (!e || e.target === el) document.getElementById('editExModal').style.display = 'none';
}

function guardarEjercicio() {
    const nombre = document.getElementById('editExNombre').value.trim();
    if (!nombre) { showToast('⚠️ El nombre es obligatorio.'); return; }
    const datos = {
        n: nombre, name: nombre,
        t: document.getElementById('editExTipo').value,
        tip: (document.getElementById('editExEquipo') || {}).value || 'Sin equipamiento',
        info: document.getElementById('editExInfo').value.trim(),
        recSeries: document.getElementById('editExRecSeries').value.trim(),
        recReps: document.getElementById('editExRecReps').value.trim()
    };
    if (_editEsCustom && !_editNombre) {
        // New custom exercise
        if (!state.ejerciciosCustom[_editGrupo]) state.ejerciciosCustom[_editGrupo] = [];
        state.ejerciciosCustom[_editGrupo].push(datos);
    } else if (_editEsCustom) {
        // Edit existing custom
        const arr = state.ejerciciosCustom[_editGrupo] || [];
        const idx = arr.findIndex(e => (e.n||e.name) === _editNombre);
        if (idx >= 0) arr[idx] = datos;
    } else {
        // Edit built-in
        if (!state.ejerciciosEditados) state.ejerciciosEditados = {};
        state.ejerciciosEditados[_editGrupo + ':' + _editNombre] = datos;
    }
    save();
    document.getElementById('editExModal').style.display = 'none';
    showExercises(_editGrupo);
    showToast('✓ Ejercicio guardado');
}

function eliminarCustom(nombre, grupo) {
    pedirConfirmacion(`¿Eliminar "${nombre}"?`, () => _eliminarEjercicioCustom(grupo, nombre), 'Eliminar'); return;
}
function _eliminarEjercicioCustom(grupo, nombre) {
    const arr = state.ejerciciosCustom[grupo] || [];
    state.ejerciciosCustom[grupo] = arr.filter(e => (e.n||e.name) !== nombre);
    save(); showExercises(grupo);
    showToast('Ejercicio eliminado');
}

function backToGroups() {
    document.getElementById('groupsView').style.display = 'block';
    document.getElementById('exerciseView').style.display = 'none';
}

function showToast(msg, color) {
    const existing = document.getElementById('toastMsg');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.id = 'toastMsg';
    toast.innerText = msg;
    if (color) toast.style.background = color;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 1200);
}

function getHoyNombre() {
    const d = new Date();
    return DIAS_LOGICA[d.getDay() === 0 ? 6 : d.getDay() - 1];
}

// Sincroniza la sesión de hoy con el plan del día actual (opción A: no autocarga si ya entrenaste hoy)
function sincronizarHoyConPlan() {
    const hoyNombre = getHoyNombre();
    const yaEntrenadoHoy = state.historial.some(s => s.fecha === new Date().toLocaleDateString());
    const plan = state.plantillaSemanal && state.plantillaSemanal[hoyNombre];
    if (state.hoy.length === 0 && plan && plan.length > 0 && !yaEntrenadoHoy) {
        state.hoy = plan.map(ex => ({...ex, done: false}));
        save();
    }
}

function addToDay(name, group, type, tip) {
    const dia = bibliotecaDia;
    const exDb = getEjerciciosDe(group).find(e => (e.n||e.name) === name) || {};
    const nuevo = { name, group, t: type, tip, series: '', reps: '', peso: '', nota: '', done: false, recSeries: exDb.recSeries||'', recReps: exDb.recReps||'' };
    // Si el día seleccionado es HOY, va directo a la sesión activa
    if (dia === getHoyNombre()) {
        if (state.hoy.find(ex => ex.name === name)) { showToast("Ya está en la sesión de hoy.", "#e74c3c"); return; }
        state.hoy.push(nuevo);
        save(); showToast("¡Añadido a Hoy! ✓");
    } else {
        if (!state.plantillaSemanal) state.plantillaSemanal = {};
        if (!state.plantillaSemanal[dia]) state.plantillaSemanal[dia] = [];
        if (state.plantillaSemanal[dia].find(e => e.name === name)) { showToast("Ya está en ese día.", "#e74c3c"); return; }
        state.plantillaSemanal[dia].push(nuevo);
        save(); showToast(`✓ Añadido al ${dia}`);
    }
}

function addToToday(name, group, type, tip) { addToDay(name, group, type, tip); }

// ── Lógica de tipo de equipamiento ──────────────────────────────────────────
// Devuelve: 'cardio' | 'bodyweight' | 'band' | 'dumbbell' | 'mixed'
function getEquipType(ex) {
    if (ex.group === "Cardio") return 'cardio';
    const tip = (ex.tip || '').trim();
    if (tip === "Mancuernas / Gomas") return 'mixed';
    if (tip.includes("Mancuernas"))   return 'dumbbell';
    if (tip.includes("Gomas") || tip.includes("Banda")) return 'band';
    if (tip.includes("Bicicleta"))    return 'cardio';
    return 'bodyweight'; // Sin equipamiento, Estiramiento, Peso corporal + Banco, Mochila...
}

// Genera el bloque de inputs de métricas según el tipo de equipamiento
function buildMetricsHtml(ex, i) {
    const tipo = getEquipType(ex);

    if (tipo === 'cardio') {
        const ro = ex.done ? 'readonly' : '';
        const rc = ex.done ? 'input-done' : '';
        return `
            <div class="stats-grid cardio-grid">
                <div class="input-group"><label>Tiempo (min)</label><input type="text" placeholder="${ex.recReps||'00'}" value="${ex.series}" onchange="updateEx(${i}, 'series', this.value)" ${ro} class="${rc}"></div>
                <div class="input-group"><label>Intensidad</label><input type="text" placeholder="Baja/Media" value="${ex.reps}" onchange="updateEx(${i}, 'reps', this.value)" ${ro} class="${rc}"></div>
            </div>`;
    }

    if (tipo === 'bodyweight') {
        const ro = ex.done ? 'readonly' : '';
        const rc = ex.done ? 'input-done' : '';
        return `
            <div class="stats-grid">
                <div class="input-group"><label>Series</label><input type="number" placeholder="${ex.recSeries||'—'}" value="${ex.series}" onchange="updateEx(${i}, 'series', this.value)" ${ro} class="${rc}"></div>
                <div class="input-group"><label>Reps</label><input type="number" placeholder="${ex.recReps||'—'}" value="${ex.reps}" onchange="updateEx(${i}, 'reps', this.value)" ${ro} class="${rc}"></div>
                <div class="input-group"><label>Peso corporal</label><input type="text" placeholder="—" disabled style="opacity:0.3;cursor:not-allowed;"></div>
            </div>`;
    }

    if (tipo === 'band') {
        const ro = ex.done ? 'readonly' : '';
        const rc = ex.done ? 'input-done' : '';
        return `
            <div class="stats-grid">
                <div class="input-group"><label>Series</label><input type="number" placeholder="${ex.recSeries||'—'}" value="${ex.series}" onchange="updateEx(${i}, 'series', this.value)" ${ro} class="${rc}"></div>
                <div class="input-group"><label>Reps</label><input type="number" placeholder="${ex.recReps||'—'}" value="${ex.reps}" onchange="updateEx(${i}, 'reps', this.value)" ${ro} class="${rc}"></div>
                <div class="input-group"><label>🪢 Dureza banda</label><input type="text" placeholder="Ligera/Media/Fuerte" value="${ex.peso}" onchange="updateEx(${i}, 'peso', this.value)" ${ro} class="${rc}"></div>
            </div>`;
    }

    if (tipo === 'dumbbell') {
        const ro = ex.done ? 'readonly' : '';
        const rc = ex.done ? 'input-done' : '';
        return `
            <div class="stats-grid">
                <div class="input-group"><label>Series</label><input type="number" placeholder="${ex.recSeries||'—'}" value="${ex.series}" onchange="updateEx(${i}, 'series', this.value)" ${ro} class="${rc}"></div>
                <div class="input-group"><label>Reps</label><input type="number" placeholder="${ex.recReps||'—'}" value="${ex.reps}" onchange="updateEx(${i}, 'reps', this.value)" ${ro} class="${rc}"></div>
                <div class="input-group"><label>Peso (kg)</label><input type="number" placeholder="0" value="${ex.peso}" onchange="updateEx(${i}, 'peso', this.value)" ${ro} class="${rc}"></div>
            </div>`;
    }

    if (tipo === 'mixed') {
        // Mancuernas o gomas — se elige con un pequeño toggle
        const usaBanda = ex.usaBanda === true;
        return `
            <div class="stats-grid">
                <div class="input-group"><label>Series</label><input type="number" placeholder="0" value="${ex.series}" onchange="updateEx(${i}, 'series', this.value)"></div>
                <div class="input-group"><label>Reps</label><input type="number" placeholder="0" value="${ex.reps}" onchange="updateEx(${i}, 'reps', this.value)"></div>
                <div class="input-group">
                    <label style="display:flex; align-items:center; gap:6px;">
                        ${usaBanda ? '🪢 Dureza banda' : '⚖️ Peso (kg)'}
                        <button onclick="toggleBandaMode(${i})" style="background:none; border:1px solid var(--outline); border-radius:6px; padding:2px 6px; font-size:10px; cursor:pointer; color:var(--text2);">cambiar</button>
                    </label>
                    ${usaBanda
                        ? `<input type="text" placeholder="Ligera/Media/Fuerte" value="${ex.peso}" onchange="updateEx(${i}, 'peso', this.value)">`
                        : `<input type="number" placeholder="0" value="${ex.peso}" onchange="updateEx(${i}, 'peso', this.value)">`
                    }
                </div>
            </div>`;
    }

    return '';
}

function toggleBandaMode(i) {
    state.hoy[i].usaBanda = !state.hoy[i].usaBanda;
    state.hoy[i].peso = '';
    save(); renderToday();
}

let openExMenu = null;
let expandedDone = new Set();

function toggleExMenu(i) {
    openExMenu = openExMenu === i ? null : i;
    renderToday();
}

function toggleExpandDone(i) {
    if (expandedDone.has(i)) expandedDone.delete(i); else expandedDone.add(i);
    renderToday();
}

// Confirmación propia (confirm() nativo está bloqueado en PWA)
let _confirmCallback = null;
function pedirConfirmacion(mensaje, onOk, textoOk) {
    _confirmCallback = onOk;
    document.getElementById('confirmMsg').innerText = mensaje;
    document.getElementById('confirmOkBtn').innerText = textoOk || 'Confirmar';
    document.getElementById('confirmModal').style.display = 'flex';
}
function confirmarOk() {
    document.getElementById('confirmModal').style.display = 'none';
    const cb = _confirmCallback; _confirmCallback = null;
    if (cb) cb();
}
function confirmarCancelar() {
    document.getElementById('confirmModal').style.display = 'none';
    _confirmCallback = null;
}

function generarHoyDirecto() {
    const d = new Date();
    const hoyNombre = DIAS_LOGICA[d.getDay() === 0 ? 6 : d.getDay() - 1];
    if (!(state.semana[hoyNombre] || []).length) {
        showToast('⚠️ El ' + hoyNombre + ' no tiene grupos configurados. Ve a Semana.');
        return;
    }
    intensityCtx = { modo: 'dia', dia: hoyNombre };
    mostrarModalIntensidad("¿Cómo te encuentras hoy?");
}

function addBloqueDrenaje() {
    const pool = getEjerciciosDe('Piernas').filter(e => e.tip !== 'Estiramiento' && !state.hoy.find(h => h.name === e.n));
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, 3);
    if (!shuffled.length) { showToast('Ya tienes todo el drenaje añadido'); return; }
    shuffled.forEach(ex => state.hoy.push({
        name: ex.n, group: 'Piernas', t: T_S, tip: ex.tip,
        series: '', reps: '', peso: '', nota: '', done: false,
        recSeries: ex.recSeries || '', recReps: ex.recReps || '', usaBanda: false
    }));
    save(); renderToday();
    showToast(`🦵 ${shuffled.length} ejercicios de drenaje añadidos`);
}

function addBloqueEstiramientos() {
    const estiramientos = getEstiramientosDeCierre().filter(e => !state.hoy.find(h => h.name === e.name));
    if (!estiramientos.length) { showToast('Ya tienes los estiramientos añadidos'); return; }
    estiramientos.forEach(e => state.hoy.push(e));
    save(); renderToday();
    showToast(`🧘 ${estiramientos.length} estiramientos añadidos`);
}

function renderToday() {
    const list = document.getElementById('todayList');
    if(!list) return;
    if(state.hoy.length === 0) {
        const d = new Date();
        const hoyNombre = DIAS_LOGICA[d.getDay() === 0 ? 6 : d.getDay() - 1];
        const chipsEmpty = document.getElementById('todayChips');
        if (chipsEmpty) chipsEmpty.innerHTML = '';
        list.innerHTML = `
        <div class="hoy-empty">
            <p class="hoy-empty-msg">No hay ejercicios para hoy. ¿Por dónde empezamos?</p>
            <button class="hoy-empty-btn hoy-empty-primary" onclick="generarHoyDirecto()">
                <span class="material-symbols-outlined">bolt</span>
                <span>Generar rutina de hoy<small>Con los grupos del ${hoyNombre}</small></span>
            </button>
            <button class="hoy-empty-btn" onclick="showPage('rutinaPage')">
                <span class="material-symbols-outlined">library_books</span>
                <span>Elegir de la Biblioteca<small>Añadir ejercicios manualmente</small></span>
            </button>
        </div>`;
        updateSessionProgress(); return;
    }

    const chipsEl = document.getElementById('todayChips');
    if (chipsEl) chipsEl.innerHTML = `
        <div class="bloques-rapidos">
            <button class="bloque-chip" onclick="addBloqueDrenaje()">+ Drenaje (3)</button>
            <button class="bloque-chip" onclick="addBloqueEstiramientos()">+ Estiramientos</button>
        </div>`;
    list.innerHTML = state.hoy.map((ex, i) => {
        const tagClass = ex.t === T_B ? 'tag-basico' : ex.t === T_A ? 'tag-aisla' : 'tag-salud';
        const accentClass = ex.t === T_B ? 'today-card-basico' : ex.t === T_A ? 'today-card-aisla' : 'today-card-salud';
        const doneClass = ex.done ? 'today-card-done' : '';
        // Tarjeta compacta si está completado y no expandido manualmente
        if (ex.done && !expandedDone.has(i)) {
            return `
        <div class="routine-card today-card-mini ${accentClass}" data-idx="${i}">
            <label class="ex-done-check">
                <input type="checkbox" checked onchange="toggleDone(${i})">
                <span class="ex-done-icon"></span>
            </label>
            <span class="mini-name">${getIcon(ex.t)}${ex.name}</span>
            <button class="btn-icon" onclick="toggleExpandDone(${i})"><span class="material-symbols-outlined">expand_more</span></button>
        </div>`;
        }
        return `
        <div class="routine-card ${accentClass} ${doneClass}" data-idx="${i}">
            <div class="today-card-header">
                <span class="drag-handle material-symbols-outlined">drag_indicator</span>
                <label class="ex-done-check">
                    <input type="checkbox" ${ex.done ? 'checked' : ''} onchange="toggleDone(${i})">
                    <span class="ex-done-icon"></span>
                </label>
                <div class="${ex.done ? 'ex-done-text' : ''}" style="flex:1; min-width:0;">
                    <b>${getIcon(ex.t)}${ex.name}</b><br>
                    <small>${ex.group} • ${ex.tip || 'Sin espec.'}</small>
                </div>
                <div style="display:flex; flex-direction:column; align-items:flex-end; gap:8px;">
                    <span class="tag ${tagClass}">${ex.t}</span>
                    <div class="ex-actions" style="position:relative;">
                        <button class="btn-icon" onclick="toggleExMenu(${i})"><span class="material-symbols-outlined">more_vert</span></button>
                        ${openExMenu === i ? `
                        <div class="ex-menu">
                            <button onclick="openExMenu=null;renderToday();abrirInfoEjercicio('${ex.name.replace(/'/g, "\\'")}','${ex.group}')"><span class="material-symbols-outlined">info</span> Información</button>
                            <button onclick="openExMenu=null;swapExercise(${i})"><span class="material-symbols-outlined">cached</span> Cambiar</button>
                            <button class="ex-menu-danger" onclick="openExMenu=null;quitarDeHoy(${i})"><span class="material-symbols-outlined">delete</span> Quitar</button>
                        </div>` : ''}
                    </div>
                </div>
            </div>
            <div class="today-card-body">
                ${getAnteriorHtml(ex)}
                ${buildMetricsHtml(ex, i)}
                <div class="notes-row">
                    <div class="input-group"><label>Notas de la sesión</label><input type="text" placeholder="..." value="${ex.nota}" onchange="updateEx(${i}, 'nota', this.value)"></div>
                </div>
            </div>
        </div>
    `}).join('');
    updateSessionProgress();
    initTodaySortable();
}

let _todaySortable = null;
function initTodaySortable() {
    const list = document.getElementById('todayList');
    if (!list || typeof Sortable === 'undefined') return;
    if (_todaySortable) { _todaySortable.destroy(); _todaySortable = null; }
    _todaySortable = new Sortable(list, {
        handle: '.drag-handle',
        draggable: '.routine-card',
        animation: 180,
        ghostClass: 'drag-ghost',
        onEnd: (evt) => {
            const from = evt.oldIndex, to = evt.newIndex;
            if (from === to || from == null || to == null) return;
            if (from < 0 || from >= state.hoy.length || to < 0 || to >= state.hoy.length) { renderToday(); return; }
            const item = state.hoy.splice(from, 1)[0];
            state.hoy.splice(to, 0, item);
            save(); renderToday();
        }
    });
}

// Última marca registrada de un ejercicio (busca en historial, más reciente primero)
function getAnteriorHtml(ex) {
    for (const sesion of state.historial) {
        if (!sesion.ejercicios) continue;
        const prev = sesion.ejercicios.find(e => e.name === ex.name && (e.series || e.reps || e.peso));
        if (prev) {
            let txt;
            if (ex.group === 'Cardio') {
                txt = `${prev.series || '?'} min`;
            } else {
                txt = `${prev.series || '?'}×${prev.reps || '?'}`;
                if (prev.peso) txt += ` · ${prev.peso}${/^[\d.,]+$/.test(String(prev.peso).trim()) ? ' kg' : ''}`;
            }
            return `<div class="ex-anterior"><span class="material-symbols-outlined">history</span> Anterior: <b>${txt}</b> <small>(${sesion.fecha})</small></div>`;
        }
    }
    return '';
}

function moverEjercicio(i, dir) {
    const j = i + dir;
    if (j < 0 || j >= state.hoy.length) return;
    [state.hoy[i], state.hoy[j]] = [state.hoy[j], state.hoy[i]];
    save(); renderToday();
}

function moverEjercicioDia(dia, i, dir) {
    const r = state.plantillaSemanal && state.plantillaSemanal[dia];
    if (!r) return;
    const j = i + dir;
    if (j < 0 || j >= r.length) return;
    [r[i], r[j]] = [r[j], r[i]];
    save(); renderWeek();
}

function quitarDeDia(dia, i) {
    if (!state.plantillaSemanal || !state.plantillaSemanal[dia]) return;
    state.plantillaSemanal[dia].splice(i, 1);
    if (state.plantillaSemanal[dia].length === 0) delete state.plantillaSemanal[dia];
    save(); renderWeek();
}

function planificarDia(dia) {
    bibliotecaDia = dia;
    showPage('rutinaPage');
}

function swapExercise(index) {
    const currentEx = state.hoy[index];
    const groupData = db[currentEx.group];
    if (!groupData) return;
    const options = groupData.data.filter(e => e.t === currentEx.t && e.n !== currentEx.name);
    if (options.length === 0) { showToast("No hay más ejercicios de este tipo."); return; }
    const newEx = options[Math.floor(Math.random() * options.length)];
    state.hoy[index].name = newEx.n;
    state.hoy[index].tip = newEx.tip;
    state.hoy[index].series = ''; state.hoy[index].reps = ''; state.hoy[index].peso = ''; state.hoy[index].nota = '';
    state.hoy[index].usaBanda = false;
    save(); renderToday();
}

function updateEx(i, field, val) { state.hoy[i][field] = val; save(); }
function clearHoy() { pedirConfirmacion("¿Limpiar toda la sesión de hoy?", () => { state.hoy = []; resetSesionStopwatch(); save(); renderToday(); }, "Limpiar"); }
function quitarDeHoy(i) { state.hoy.splice(i, 1); save(); renderToday(); }

function getDayColor(selected) {
    if (selected.length === 0) return { c: "var(--color-descanso)", s: "Descanso" };
    const strengthGroups = selected.filter(g => g !== "Cardio");
    const hasCardio = selected.includes("Cardio");
    if (strengthGroups.length === 0) return { c: "var(--color-verde)", s: "Solo Cardio" };
    const hasPush = strengthGroups.some(g => P_PUSH.includes(g));
    const hasPull = strengthGroups.some(g => P_PULL.includes(g));
    if (hasPush && hasPull) return { c: "var(--color-rojo)", s: "Conflicto Empuje/Tirón" };
    const allPush = strengthGroups.every(g => P_PUSH.includes(g));
    const allPull = strengthGroups.every(g => P_PULL.includes(g));
    const allLegs = strengthGroups.every(g => P_LEGS.includes(g));
    if (allPush) return { c: "var(--color-verde)", s: "Sinergia: Empuje" + (hasCardio ? " + C" : "") };
    if (allPull) return { c: "var(--color-verde)", s: "Sinergia: Tirón" + (hasCardio ? " + C" : "") };
    if (allLegs) return { c: "var(--color-verde)", s: "Sinergia: Piernas" + (hasCardio ? " + C" : "") };
    return { c: "var(--color-amarillo)", s: "Mezcla Híbrida" };
}

function editarDia(dia) { diasEditando.add(dia); renderWeek(); }
function guardarDia(dia) { diasEditando.delete(dia); renderWeek(); }

let duplicandoDia = null;
let diasAbiertosSemana = null; // se inicializa con el día actual abierto

function toggleDiaSemana(dia) {
    if (diasAbiertosSemana.has(dia)) diasAbiertosSemana.delete(dia);
    else diasAbiertosSemana.add(dia);
    renderWeek();
}

function renderWeek() {
    const planner = document.getElementById('weekPlanner');
    if (!planner) return;
    // Semana actual: fechas reales lunes-domingo
    const _hoy = new Date();
    const _diaSem = _hoy.getDay() === 0 ? 6 : _hoy.getDay() - 1;
    const _lunes = new Date(_hoy); _lunes.setDate(_hoy.getDate() - _diaSem);
    if (diasAbiertosSemana === null) diasAbiertosSemana = new Set([DIAS_LOGICA[_diaSem]]);
    planner.innerHTML = DIAS_LOGICA.map((dia, idx) => {
        const fechaDia = new Date(_lunes); fechaDia.setDate(_lunes.getDate() + idx);
        const esHoy = idx === _diaSem;
        const abierto = diasAbiertosSemana.has(dia);
        const entrenado = state.historial.some(s => s.fecha === fechaDia.toLocaleDateString());
        const sel = state.semana[dia] || [];
        const info = getDayColor(sel);
        // El día de hoy muestra la sesión activa en vivo; los demás, su plan guardado
        const esSesionViva = esHoy && state.hoy.length > 0;
        const plantilla = esSesionViva ? state.hoy : (state.plantillaSemanal ? state.plantillaSemanal[dia] : null);
        const isOpen = state.openMenu === dia;
        const tieneRutina = plantilla && plantilla.length > 0;
        const labelsHtml = sel.length > 0
            ? sel.map(g => `<span class="mini-tag">${g}</span>`).join('')
            : '<span style="font-size:10px; color:var(--text2)">Descanso</span>';

        const editando = diasEditando.has(dia);

        let bodyHtml = '';
        if (tieneRutina) {
            bodyHtml = `
                <div class="week-ex-list">
                    ${plantilla.map((ex, i) => `
                    <div class="week-ex-item">
                        <div style="display:flex;align-items:center;justify-content:space-between;gap:6px;flex:1;">
                            <span class="week-ex-name">${getIcon(ex.t)}${ex.name} <span style="color:var(--text2);font-weight:400;font-size:11px;">(${ex.group})</span></span>
                            ${(() => { const dbEx = getEjerciciosDe(ex.group).find(e => (e.n||e.name)===ex.name); return dbEx?.info ? `<button class="week-info-btn" onclick="abrirInfoEjercicio('${ex.name}','${ex.group}')"><span class="material-symbols-outlined" style="font-size:15px;">info</span></button>` : ''; })()}
                        </div>
                        ${editando ? `
                        <div class="week-ex-actions">
                            <button class="btn-icon btn-sm" onclick="moverEjercicioDia('${dia}',${i},-1)" ${i===0?'disabled':''}><span class="material-symbols-outlined">arrow_upward</span></button>
                            <button class="btn-icon btn-sm" onclick="moverEjercicioDia('${dia}',${i},1)" ${i===plantilla.length-1?'disabled':''}><span class="material-symbols-outlined">arrow_downward</span></button>
                            <button class="btn-icon btn-delete btn-sm" onclick="quitarDeDia('${dia}',${i})"><span class="material-symbols-outlined">delete</span></button>
                        </div>` : ''}
                    </div>`).join('')}
                </div>
                <div class="week-day-actions">
                    ${editando ? `
                        <button class="week-btn-secondary" onclick="planificarDia('${dia}')">+ Añadir</button>
                        <button class="week-btn-secondary" onclick="abrirSelectorParaDia('${dia}')">⚡ Generar</button>
                        <button class="week-btn-primary" style="background:var(--color-verde); color:#2d5a27; border:1px solid #a8d8a8;" onclick="guardarDia('${dia}')">✓ Guardar</button>
                    ` : `
                        ${esSesionViva
                            ? `<button class="week-btn-secondary" onclick="showPage('hoyPage')"><span class="material-symbols-outlined" style="font-size:14px;">edit</span> Editar en Hoy</button>`
                            : `<button class="week-btn-secondary" onclick="editarDia('${dia}')"><span class="material-symbols-outlined" style="font-size:14px;">edit</span> Editar</button>`}
                        <button class="week-btn-secondary" onclick="toggleDuplicar('${dia}')"><span class="material-symbols-outlined" style="font-size:14px;">content_copy</span> Duplicar</button>
                        ${esHoy
                            ? `<button class="week-btn-primary" onclick="showPage('hoyPage')">Ir a Hoy →</button>`
                            : `<button class="week-btn-primary" onclick="cargarPlantillaEnHoy('${dia}')">Cargar en Hoy →</button>`}
                    `}
                </div>
                ${duplicandoDia === dia ? `
                <div class="duplicar-row">
                    <span class="duplicar-label">Copiar a:</span>
                    ${DIAS_LOGICA.filter(d => d !== dia).map(d => `<button class="duplicar-chip" onclick="duplicarDiaA('${dia}','${d}')">${d.slice(0,3)}</button>`).join('')}
                </div>` : ''}`;
        } else if (sel.length > 0) {
            bodyHtml = `
                <div class="week-plan-empty">
                    <button class="week-btn-plan" onclick="planificarDia('${dia}')">
                        <span class="material-symbols-outlined">edit_note</span> Planificar este día
                    </button>
                    <button class="week-btn-secondary" onclick="abrirSelectorParaDia('${dia}')">⚡ Generar automáticamente</button>
                </div>`;
        }

        return `
        <div class="day-card ${esHoy ? 'day-card-hoy' : ''}">
            <div class="day-header day-header-toggle" onclick="toggleDiaSemana('${dia}')">
                <div class="day-name">
                    <span class="material-symbols-outlined day-chevron">${abierto ? 'expand_less' : 'expand_more'}</span>
                    ${DIAS_DISPLAY[idx]} ${fechaDia.getDate()}
                    ${esHoy ? '<span class="day-badge-hoy">HOY</span>' : ''}
                    ${entrenado ? '<span class="day-badge-done">✓ Entrenado</span>' : ''}
                </div>
                <div style="display:flex;align-items:center;gap:7px;">
                    <span class="day-dot" style="background:${
                        info.c === 'var(--color-rojo)'      ? '#E53935' :
                        info.c === 'var(--color-amarillo)'  ? '#F9A825' :
                        info.c === 'var(--color-verde)'     ? '#43A047' :
                        'var(--outline)'
                    };"></span>
                    <div class="day-status">${info.s}</div>
                </div>
            </div>
            ${abierto ? `
            <div class="selected-labels" style="margin-bottom:${tieneRutina?'8':'4'}px;">
                ${labelsHtml}
            </div>
            ${bodyHtml}
            <button onclick="toggleDayMenu('${dia}')" style="background:rgba(0,0,0,0.05); border:none; width:100%; padding:6px; border-radius:10px; font-size:10px; color:var(--text2); display:flex; align-items:center; justify-content:center; gap:4px; margin-top:10px;">
                CONFIGURAR GRUPOS <span class="material-symbols-outlined" style="font-size:14px;">${isOpen ? 'expand_less' : 'expand_more'}</span>
            </button>
            <div class="group-selector ${isOpen ? 'open' : ''}">
                ${GRUPOS_SEMANA.map(g => `
                    <label class="check-item">
                        <input type="checkbox" ${sel.includes(g)?'checked':''} onchange="toggleWeek('${dia}','${g}')"> ${g}
                    </label>
                `).join('')}
            </div>` : `
            <div class="day-resumen">${esSesionViva ? '🟢 ' + plantilla.length + ' ejercicios en tu sesión de hoy' : (tieneRutina ? plantilla.length + ' ejercicios planificados' : (sel.length > 0 ? sel.join(' · ') + ' — sin planificar' : 'Descanso'))}</div>`}
        </div>`;
    }).join('');
}

function toggleDuplicar(dia) {
    duplicandoDia = duplicandoDia === dia ? null : dia;
    renderWeek();
}

function duplicarDiaA(origen, destino) {
    // Fuente: si hoy tiene sesión viva y es el origen, copia esa; si no, el plan
    let fuente = state.plantillaSemanal && state.plantillaSemanal[origen];
    if (origen === getHoyNombre() && state.hoy.length > 0) fuente = state.hoy;
    if (!fuente || !fuente.length) { showToast("Ese día no tiene rutina que copiar."); return; }
    if (!state.plantillaSemanal) state.plantillaSemanal = {};
    state.plantillaSemanal[destino] = JSON.parse(JSON.stringify(fuente)).map(ex => ({...ex, done: false}));
    // Copia también los grupos del día
    state.semana[destino] = [...(state.semana[origen] || [])];
    duplicandoDia = null;
    save(); renderWeek();
    showToast(`✓ Rutina del ${origen} copiada al ${destino}`);
}

function togglePreview(dia) { const p = document.getElementById(`preview-${dia}`); if(p) p.style.display = p.style.display === 'none' ? 'block' : 'none'; }
function toggleDayMenu(dia) { state.openMenu = state.openMenu === dia ? null : dia; renderWeek(); }
function toggleWeek(dia, g) {
    if(!state.semana[dia]) state.semana[dia] = [];
    const idx = state.semana[dia].indexOf(g);
    if(idx > -1) state.semana[dia].splice(idx, 1); else state.semana[dia].push(g);
    if(state.plantillaSemanal) delete state.plantillaSemanal[dia];
    save(); renderWeek();
}

// Contexto del modal de intensidad
let intensityCtx = { modo: 'hoy', dia: null };

function abrirSelectorIntensidad() {
    const d = new Date();
    const diaIdx = d.getDay() === 0 ? 6 : d.getDay() - 1;
    const nombreDia = DIAS_LOGICA[diaIdx];
    if (!(state.semana[nombreDia] || []).length) { showToast("😴 Hoy toca descanso según tu programación."); return; }
    intensityCtx = { modo: 'hoy', dia: nombreDia };
    mostrarModalIntensidad("¿Cómo te encuentras hoy?");
}

function abrirSelectorParaDia(dia) {
    const grupos = state.semana[dia] || [];
    if (!grupos.length) { showToast("⚠️ Este día no tiene grupos configurados."); return; }
    intensityCtx = { modo: 'dia', dia };
    const d = new Date();
    const hoyNombre = DIAS_LOGICA[d.getDay() === 0 ? 6 : d.getDay() - 1];
    mostrarModalIntensidad(dia === hoyNombre ? "¿Cómo te encuentras hoy?" : `¿Intensidad para el ${dia}?`);
}

function abrirGenerarSemana() {
    const count = DIAS_LOGICA.filter(d => (state.semana[d]||[]).length > 0).length;
    if (!count) { showToast("⚠️ Configura grupos en al menos un día."); return; }
    intensityCtx = { modo: 'semana', dia: null };
    mostrarModalIntensidad(`Intensidad para la semana · ${count} días`);
}

function mostrarModalIntensidad(titulo) {
    const t = document.getElementById('intensityModalTitle');
    if (t) t.innerText = titulo;
    document.getElementById('intensityModal').style.display = 'flex';
}

function cerrarSelectorIntensidad(el, e) {
    if (!e || e.target === el) document.getElementById('intensityModal').style.display = 'none';
}

function getEstimatedDuration(rutina) {
    let min = 0;
    rutina.forEach(ex => {
        if (ex.group === 'Cardio')       min += 20;
        else if (ex.t === T_B)           min += 7;
        else if (ex.t === T_A)           min += 5;
        else if (ex.t === T_S)           min += 2;
    });
    return Math.round(min);
}

// Contexto de la rutina generada pendiente de confirmar
let _rutinaPreview = null;
let _rutinaPreviewDia = null;

function confirmarRutinaGenerada() {
    cerrarPreviewModal();
    if (!_rutinaPreview || !_rutinaPreviewDia) return;
    const dia = _rutinaPreviewDia;
    if (dia === getHoyNombre()) {
        // Hoy: carga directa en la sesión activa. El plan semanal no se toca.
        state.hoy = JSON.parse(JSON.stringify(_rutinaPreview));
        save(); showPage('hoyPage');
    } else {
        // Otro día: guarda en el plan de ese día
        if (!state.plantillaSemanal) state.plantillaSemanal = {};
        state.plantillaSemanal[dia] = JSON.parse(JSON.stringify(_rutinaPreview));
        save(); renderWeek();
        showToast(`✓ Rutina del ${dia} guardada`);
    }
    _rutinaPreview = null; _rutinaPreviewDia = null;
}

function regenerarRutina() {
    cerrarPreviewModal();
    if (!_rutinaPreviewDia || !_rutinaPreviewIntensidad) return;
    const grupos = state.semana[_rutinaPreviewDia] || [];
    const rutina = buildRutina(grupos, _rutinaPreviewIntensidad, {});
    mostrarPreviewRutina(rutina, _rutinaPreviewDia, _rutinaPreviewIntensidad);
}

function cerrarPreviewModal() {
    const m = document.getElementById('rutinaPreviewModal');
    if (m) m.style.display = 'none';
}

let _rutinaPreviewIntensidad = null;

function mostrarPreviewRutina(rutina, dia, intensidad) {
    _rutinaPreview = rutina;
    _rutinaPreviewDia = dia;
    _rutinaPreviewIntensidad = intensidad;
    const min = getEstimatedDuration(rutina);
    const iconos = {[T_B]:'🔥', [T_A]:'🎯', [T_S]:'🛡️'};
    const lista = rutina.map(ex => {
        const ic = ex.group === 'Cardio' ? '🚴' : (iconos[ex.t] || '•');
        return `<div class="preview-ex-item">${ic} <span>${ex.name}</span><small>${ex.group}</small></div>`;
    }).join('');
    document.getElementById('previewDia').textContent = dia;
    document.getElementById('previewMin').textContent = `⏱ ~${min} min estimados`;
    document.getElementById('previewLista').innerHTML = lista;
    document.getElementById('rutinaPreviewModal').style.display = 'flex';
}

function generarConIntensidad(intensidad) {
    cerrarSelectorIntensidad();
    if (intensityCtx.modo === 'semana') { generarSemanaCompleta(intensidad); return; }
    const dia = intensityCtx.dia;
    const grupos = state.semana[dia] || [];
    const rutina = buildRutina(grupos, intensidad, {});
    mostrarPreviewRutina(rutina, dia, intensidad);
}

function getEjerciciosRecientesPorGrupo(numSesiones) {
    const result = {};
    GRUPOS.forEach(g => result[g] = []);
    let porGrupo = {};
    GRUPOS.forEach(g => porGrupo[g] = 0);
    for (const sess of state.historial) {
        if (!sess.ejercicios) continue;
        const gruposEnSesion = new Set();
        sess.ejercicios.forEach(ex => {
            if (porGrupo[ex.group] < numSesiones) {
                result[ex.group].push(ex.name);
                gruposEnSesion.add(ex.group);
            }
        });
        gruposEnSesion.forEach(g => porGrupo[g]++);
    }
    return result;
}

function buildRutina(gruposSeleccionados, intensidad, recentExternal) {
    const config = {
        suave:   { dosBasicos: false, totalAisla: 1, coreCount: 1, incluirCardio: true },
        normal:  { dosBasicos: false, totalAisla: null, coreCount: 2, incluirCardio: true },
        intensa: { dosBasicos: true,  totalAisla: null, coreCount: 2, incluirCardio: true }
    }[intensidad];

    // Cardio por intensidad (punto 3)
    const CARDIO_SUAVE  = ['Pedaleo suave continuo','Paseo por el parque'];
    const CARDIO_NORMAL = ['Pedaleo suave continuo','Paseo por el parque','Pedaleo continuo moderado','Paseo rápido'];

    const recentHist = getEjerciciosRecientesPorGrupo(3); // punto 5: anti-repetición 3 sesiones
    const recent = {};
    GRUPOS.forEach(g => recent[g] = [...(recentHist[g]||[]), ...(recentExternal[g]||[])]);
    const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];

    // Grupos sin Cardio, sin Core, sin Piernas
    const gruposPrincipales = gruposSeleccionados.filter(g => g !== 'Cardio' && g !== 'Core' && g !== 'Piernas');
    let finalPool = [];

    // ── Básicos (1 por grupo, 2 en Intensa) ──────────────────────────────────
    gruposPrincipales.forEach(g => {
        const sinRepetir = getEjerciciosDe(g).filter(e => e.t === T_B && !recent[g].includes(e.n));
        const pool = sinRepetir.length > 0 ? sinRepetir : getEjerciciosDe(g).filter(e => e.t === T_B);
        if (pool.length > 0) finalPool.push({...getRandom(pool), group: g});
    });
    if (config.dosBasicos) {
        gruposPrincipales.forEach(g => {
            const ya = finalPool.filter(f => f.group === g).map(f => f.n);
            const pool = getEjerciciosDe(g).filter(e => e.t === T_B && !ya.includes(e.n));
            if (pool.length > 0) finalPool.push({...getRandom(pool), group: g});
        });
    }

    // ── Aislamientos ──────────────────────────────────────────────────────────
    if (config.totalAisla === 1) {
        const todos = gruposPrincipales.flatMap(g => getEjerciciosDe(g).filter(e => e.t === T_A).map(e => ({...e, group: g})));
        if (todos.length > 0) finalPool.push(getRandom(todos));
    } else {
        gruposPrincipales.forEach(g => {
            const sinRepetir = getEjerciciosDe(g).filter(e => e.t === T_A && !recent[g].includes(e.n));
            const pool = sinRepetir.length > 0 ? sinRepetir : getEjerciciosDe(g).filter(e => e.t === T_A);
            if (pool.length > 0) finalPool.push({...getRandom(pool), group: g});
        });
    }

    // ── Core explícito (1 en Suave, 2 en Normal/Intensa) ─────────────────────
    if (gruposSeleccionados.includes('Core')) {
        const coreEjs = getEjerciciosDe('Core');
        const coreB = coreEjs.filter(e => e.t === T_B && !recent['Core'].includes(e.n));
        const coreS = coreEjs.filter(e => e.t === T_S && !recent['Core'].includes(e.n));
        const corePool = [...coreB, ...coreS];
        let added = 0;
        const usados = [];
        while (added < config.coreCount && corePool.length > usados.length) {
            const disponibles = corePool.filter(e => !usados.includes(e.n));
            if (!disponibles.length) break;
            const sel = getRandom(disponibles);
            finalPool.push({...sel, group: 'Core'});
            usados.push(sel.n);
            added++;
        }
    }

    // ── Bloque Piernas (drenaje) si está seleccionado ─────────────────────────
    if (gruposSeleccionados.includes('Piernas')) {
        const piernasPool = getEjerciciosDe('Piernas').filter(e => e.tip !== 'Estiramiento' && !recent['Piernas'].includes(e.n));
        const pPool = piernasPool.length >= 3 ? piernasPool : getEjerciciosDe('Piernas').filter(e => e.tip !== 'Estiramiento');
        const usadosP = [];
        let addedP = 0;
        while (addedP < 3 && pPool.length > usadosP.length) {
            const disp = pPool.filter(e => !usadosP.includes(e.n));
            if (!disp.length) break;
            const sel = getRandom(disp);
            if (!finalPool.find(f => f.n === sel.n)) { finalPool.push({...sel, group: 'Piernas'}); addedP++; }
            usadosP.push(sel.n);
        }
    }

    // ── Cardio por intensidad (punto 3) ──────────────────────────────────────
    if (config.incluirCardio && gruposSeleccionados.includes('Cardio')) {
        const cardioPool = intensidad === 'suave'
            ? getEjerciciosDe('Cardio').filter(e => CARDIO_SUAVE.includes(e.n))
            : intensidad === 'normal'
                ? getEjerciciosDe('Cardio').filter(e => CARDIO_NORMAL.includes(e.n))
                : [...getEjerciciosDe('Cardio')];
        const cp = cardioPool.length > 0 ? cardioPool : [...getEjerciciosDe('Cardio')];
        finalPool.unshift({...getRandom(cp), group: 'Cardio'});
    }

    // ── Orden óptimo ──────────────────────────────────────────────────────────
    const LINFATICOS = ['Bomba de tobillo (ankle pumps)','Piernas elevadas en la pared','Bicicleta en el aire','Elevación de talones sentado','Marcha sentado en silla','Círculos de tobillo'];
    const getScore = (ex) => {
        if (ex.group === 'Cardio') return 0;
        if (LINFATICOS.includes(ex.n || ex.name)) return 999;
        if (ex.t === T_S) return ex.group === 'Core' ? 980 : 960;
        if (ex.group === 'Core') return ex.t === T_B ? 800 : 840;
        const gIdx = gruposPrincipales.indexOf(ex.group);
        return ex.t === T_B ? 100 + gIdx * 10 : 500 + gIdx * 10;
    };
    finalPool.sort((a, b) => getScore(a) - getScore(b));

    return finalPool.map(ex => {
        const u = getUltimosValores(ex.n||ex.name);
        return { name: ex.n||ex.name, group: ex.group, t: ex.t, tip: ex.tip,
            series: u.series, reps: u.reps, peso: u.peso, nota: '',
            usaBanda: u.usaBanda, done: false,
            recSeries: ex.recSeries||'', recReps: ex.recReps||'' };
    });
}


function getUltimosValores(nombre) {
    for (const s of state.historial) {
        if (!s.ejercicios) continue;
        const e = s.ejercicios.find(x => x.name === nombre);
        if (e && (e.series || e.reps || e.peso))
            return { series: e.series||'', reps: e.reps||'', peso: e.peso||'', usaBanda: e.usaBanda||false };
    }
    return { series: '', reps: '', peso: '', usaBanda: false };
}

function generarSemanaCompleta(intensidad) {
    const usados = {};
    GRUPOS.forEach(g => usados[g] = []);
    if (!state.plantillaSemanal) state.plantillaSemanal = {};
    let count = 0;
    DIAS_LOGICA.forEach(dia => {
        const grupos = state.semana[dia] || [];
        if (!grupos.length) return;
        const rutina = buildRutina(grupos, intensidad, usados);
        state.plantillaSemanal[dia] = JSON.parse(JSON.stringify(rutina));
        rutina.forEach(ex => { if (!usados[ex.group]) usados[ex.group] = []; usados[ex.group].push(ex.name); });
        count++;
    });
    save(); renderWeek();
    showToast(`✓ ${count} rutinas generadas`);
}

function generarRutinaInteligente(intensidad) {
    const d = new Date();
    intensityCtx = { modo: 'hoy', dia: DIAS_LOGICA[d.getDay() === 0 ? 6 : d.getDay() - 1] };
    generarConIntensidad(intensidad);
}

function cargarPlantillaEnHoy(dia) {
    const plantilla = state.plantillaSemanal && state.plantillaSemanal[dia];
    if (!plantilla || plantilla.length === 0) {
        showToast("Este día no tiene rutina guardada.", "#e74c3c");
        return;
    }
    const d = new Date();
    const hoyNombre = DIAS_LOGICA[d.getDay() === 0 ? 6 : d.getDay() - 1];
    const hoyDisplay = DIAS_DISPLAY[d.getDay() === 0 ? 6 : d.getDay() - 1];
    const diaDisplay = DIAS_DISPLAY[DIAS_LOGICA.indexOf(dia)];

    const cargar = () => {
        state.hoy = plantilla.map(ex => ({...ex, done: false}));
        save();
        showPage('hoyPage');
    };
    if (dia !== hoyNombre) {
        pedirConfirmacion(`Esta rutina es del ${diaDisplay} y hoy es ${hoyDisplay}. Se guardará en el historial con la fecha de hoy. ¿Cargarla igualmente?`, () => {
            if (state.hoy.length > 0) pedirConfirmacion(`¿Reemplazar la sesión actual con la rutina del ${diaDisplay}?`, cargar, 'Reemplazar');
            else cargar();
        }, 'Cargar');
        return;
    }
    if (state.hoy.length > 0) { pedirConfirmacion(`¿Reemplazar la sesión actual con la rutina del ${diaDisplay}?`, cargar, 'Reemplazar'); return; }
    cargar();
}

function limpiarPlantillas() { pedirConfirmacion("¿Borrar todas las rutinas guardadas de la semana?", () => { state.plantillaSemanal = {}; save(); renderWeek(); }, "Borrar"); }

function compartirBackup() {
    const datos = {
        backupVersion: BACKUP_VERSION,
        appVersion: 'IronLog',
        fecha: new Date().toLocaleDateString(),
        hora: new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}),
        state: state
    };
    const blob = new Blob([JSON.stringify(datos, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ironlog-backup-${new Date().toLocaleDateString().replace(/\//g,'-')}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function finalizarSesion() {
    if (state.hoy.length === 0) return;
    document.getElementById('finalizarModal').style.display = 'flex';
}
function getEstiramientosDeCierre() {
    const grupos = [...new Set(state.hoy.map(e => e.group))].filter(g => g !== 'Cardio' && g !== 'Piernas');
    const seleccion = [];
    // 1-2 estiramientos del propio grupo entrenado
    grupos.forEach(g => {
        const estirs = getEjerciciosDe(g).filter(e => e.tip === 'Estiramiento');
        const shuffled = [...estirs].sort(() => Math.random() - 0.5);
        shuffled.slice(0, grupos.length <= 2 ? 2 : 1).forEach(e => {
            if (!seleccion.find(s => s.n === e.n)) seleccion.push({...e, group: g});
        });
    });
    // Siempre cierra con drenaje
    const drenaje = getEjerciciosDe('Piernas').find(e => e.n === 'Piernas elevadas en la pared');
    const final = seleccion.slice(0, 4);
    if (drenaje) final.push({...drenaje, group: 'Piernas'});
    return final.map(ex => ({
        name: ex.n, group: ex.group, t: T_S,
        tip: ex.tip || 'Estiramiento', series: '', reps: '', peso: '',
        nota: '', done: false, recSeries: ex.recSeries || '',
        recReps: ex.recReps || '', usaBanda: false
    }));
}

function cerrarGuiaModal() {
    const m = document.getElementById('guiaModal');
    if (m) m.style.display = 'none';
}

function cerrarFinalizarModal() {
    const m = document.getElementById('finalizarModal');
    if (m) m.style.display = 'none';
}

function finalizarConEstiramientos() {
    cerrarFinalizarModal();
    const estiramientos = getEstiramientosDeCierre();
    estiramientos.forEach(e => {
        if (!state.hoy.find(x => x.name === e.name)) state.hoy.push(e);
    });
    save(); renderToday();
    showToast(`🧘 ${estiramientos.length} estiramientos añadidos`);
}

function guardarSesionDirecta() {
    cerrarFinalizarModal();
    _guardarSesion();
}

function _guardarSesion() {
    const durSec = state.sesionStartTime ? Math.floor((Date.now() - state.sesionStartTime) / 1000) : null;
    state.historial.unshift({
        fecha: new Date().toLocaleDateString(),
        hora: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
        resumen: state.hoy.map(e => `${getIcon(e.t)}${e.name}`).join('; '),
        ejercicios: JSON.parse(JSON.stringify(state.hoy)),
        duracion: durSec
    });
    state.hoy = []; resetSesionStopwatch(); save(); showPage('historialPage');
    mostrarToastBackup();
    syncToSupabase();
}



function mostrarToastBackup() {
    const existing = document.getElementById('toastBackup');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.id = 'toastBackup';
    toast.innerHTML = `
        <span>✓ Sesión guardada</span>
        <button onclick="compartirBackup(); document.getElementById('toastBackup')?.remove()">
            📤 Guardar backup
        </button>`;
    toast.style.cssText = `
        position:fixed; bottom:90px; left:50%; transform:translateX(-50%);
        background:var(--primary); color:white; border-radius:12px;
        padding:12px 16px; display:flex; align-items:center; gap:12px;
        font-size:13px; font-weight:500; z-index:9998; white-space:nowrap;
        box-shadow:0 4px 12px rgba(0,0,0,0.2);`;
    toast.querySelector('button').style.cssText = `
        background:white; color:var(--primary); border:none;
        border-radius:8px; padding:6px 12px; font-size:12px;
        font-weight:bold; cursor:pointer;`;
    document.body.appendChild(toast);
    setTimeout(() => toast?.remove(), 8000);
}

function borrarHistorialItem(index) { pedirConfirmacion("¿Borrar esta sesión del historial?", () => { state.historial.splice(index, 1); save(); renderHistory(); }, "Borrar"); }

// ── Versión del esquema de backup ───────────────────────────────────────────
// Incrementar cada vez que se añadan/quiten campos en state o se renombren ejercicios
const BACKUP_VERSION = 1;

// ── Migraciones: de versión N a N+1 ─────────────────────────────────────────
// Añadir aquí una función por cada salto de versión futuro
const MIGRATIONS = {
    // Ejemplo de cómo añadir migraciones en el futuro:
    // 1: (s) => { s.nuevocampo = s.nuevocamp || 'valor_default'; return s; },
    // 2: (s) => { s.historial.forEach(h => { h.nuevoCampo = h.nuevoCampo || null; }); return s; },
};

function aplicarMigraciones(datos) {
    let s = datos.state;
    let v = datos.backupVersion || 0; // 0 = backups muy antiguos sin versión
    while (v < BACKUP_VERSION) {
        if (MIGRATIONS[v]) s = MIGRATIONS[v](s);
        v++;
    }
    // Garantizar campos obligatorios que podrían faltar en backups antiguos
    if (s.sesionStartTime === undefined) s.sesionStartTime = null;
    if (s.openMenu === undefined) s.openMenu = null;
    if (s.plantillaSemanal === undefined) s.plantillaSemanal = {};
    if (!s.semana) s.semana = { "Lunes":[], "Martes":[], "Miercoles":[], "Jueves":[], "Viernes":[], "Sabado":[], "Domingo":[] };
    if (!s.historial) s.historial = [];
    if (!s.hoy) s.hoy = [];
    // Garantizar campos en cada sesión del historial
    s.historial.forEach(h => {
        if (h.duracion === undefined) h.duracion = null;
        if (h.ejercicios) h.ejercicios.forEach(ex => {
            if (ex.done === undefined) ex.done = false;
            if (ex.usaBanda === undefined) ex.usaBanda = false;
        });
    });
    return s;
}

function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('ironlog_dark', isDark ? '1' : '0');
    const btn = document.getElementById('darkModeBtn');
    if (btn) btn.querySelector('span').innerText = isDark ? 'light_mode' : 'dark_mode';
}

function exportarDatos() {
    const datos = {
        backupVersion: BACKUP_VERSION,
        appVersion: 'IronLog',
        fecha: new Date().toLocaleDateString(),
        hora: new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}),
        state: state
    };
    const blob = new Blob([JSON.stringify(datos, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ironlog-backup-${new Date().toLocaleDateString().replace(/\//g,'-')}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('✓ Backup exportado');
}

function importarDatos(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const datos = JSON.parse(e.target.result);
            // Aceptar tanto backups nuevos (con backupVersion) como muy antiguos (con version:'ironlog-v1')
            const esValido = datos.state && (datos.backupVersion !== undefined || datos.version);
            if (!esValido) throw new Error('Formato inválido');
            const fechaInfo = datos.fecha ? `del ${datos.fecha}${datos.hora ? ' a las ' + datos.hora : ''}` : 'sin fecha';
            const sesiones = datos.state.historial ? datos.state.historial.length : 0;
            pedirConfirmacion(`¿Restaurar backup ${fechaInfo}? Contiene ${sesiones} sesiones. Se reemplazarán todos los datos actuales.`, () => {
                const stateRestaurado = aplicarMigraciones(datos);
                Object.assign(state, stateRestaurado);
                save();
                showPage('historialPage');
                showToast(`✓ Restauradas ${sesiones} sesiones`);
            }, 'Restaurar');
        } catch(err) {
            showToast('❌ Archivo no válido. Debe ser un backup .json de la app.');
        }
        event.target.value = '';
    };
    reader.readAsText(file);
}

function borrarTodoHistorial() {
    pedirConfirmacion("¿Borrar todo el historial de sesiones? Esta acción no se puede deshacer.", () => {
        pedirConfirmacion("¿Seguro? Se perderán todos los registros permanentemente.", () => {
            state.historial = [];
            save();
            renderHistory();
            showToast('🗑 Historial borrado');
        }, 'Borrar todo');
    }, 'Continuar');
}

function renderHistory() {
    updateStats();
    renderCalendar();
    const hList = document.getElementById('historyList');
    if (hList) hList.innerHTML = '';
}
function getSessionIntensity(sesion) {
    if (!sesion.ejercicios || sesion.ejercicios.length === 0) return 1;
    let score = 0;
    sesion.ejercicios.forEach(ex => {
        const tipo = getEquipType(ex);
        if (tipo === 'cardio') {
            score += Math.max((parseFloat(ex.series) || 0) / 5, 0.5);
        } else if (ex.t === T_B) {
            if (tipo === 'dumbbell' || tipo === 'mixed') score += 4;
            else if (tipo === 'band') score += 3;
            else score += 2; // bodyweight
        } else if (ex.t === T_A) {
            if (tipo === 'dumbbell' || tipo === 'mixed') score += 3;
            else if (tipo === 'band') score += 2;
            else score += 1.5;
        } else if (ex.t === T_S) {
            score += 1;
        }
    });
    return Math.max(score, 1);
}

// Calcula los puntos de una sola sesión (mismo criterio que el total mensual)
function abrirAjustesModal() {
    const m = document.getElementById('ajustesModal');
    if (m) m.style.display = 'flex';
}
function cerrarAjustesModal() {
    const m = document.getElementById('ajustesModal');
    if (m) m.style.display = 'none';
}

function abrirPuntosModal() {
    const m = document.getElementById('puntosModal');
    if (m) m.style.display = 'flex';
}
function cerrarPuntosModal() {
    const m = document.getElementById('puntosModal');
    if (m) m.style.display = 'none';
}

function getSessionPoints(sesion) {
    let pts = 0;
    if (!sesion.ejercicios) return 0;
    sesion.ejercicios.forEach(ex => {
        if (ex.group === 'Cardio') pts += (parseFloat(ex.series)||0)*2;
        else if (ex.t === T_S) pts += 10;
        else {
            const tipo = getEquipType(ex);
            const base = ex.t === T_B ? 40 : 30;
            const mult = (tipo==='dumbbell'||tipo==='mixed') ? 1 : tipo==='band' ? 0.75 : 0.5;
            pts += base * mult;
        }
    });
    return pts;
}

function renderCalendar() {
    const container = document.getElementById('calendarContainer');
    if (!container) return;
    const MESES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
    let firstDay = new Date(calYear, calMonth, 1).getDay();
    firstDay = firstDay === 0 ? 6 : firstDay - 1;
    const today = new Date();
    const nowMonth = today.getMonth(), nowYear = today.getFullYear();
    const isFuture = calYear > nowYear || (calYear === nowYear && calMonth > nowMonth);
    const todayDay = today.getDay() === 0 ? 6 : today.getDay() - 1;
    const isCurrentMonth = calYear === nowYear && calMonth === nowMonth;

    // Build dayData: day → intensity score + points
    const dayData = {};
    let totalPuntos = 0;
    for (let d = 1; d <= daysInMonth; d++) {
        const ds = new Date(calYear, calMonth, d).toLocaleDateString();
        state.historial.forEach(s => {
            if (s.fecha === ds) {
                dayData[d] = (dayData[d] || 0) + getSessionIntensity(s);
                totalPuntos += getSessionPoints(s);
            }
        });
    }
    const maxInt = Math.max(...Object.values(dayData), 1);

    // Puntos de la semana actual (lunes a domingo que contiene hoy)
    let puntosSemana = 0;
    const hoyD = new Date();
    const diaSem = hoyD.getDay() === 0 ? 6 : hoyD.getDay() - 1; // 0=lunes
    const lunes = new Date(hoyD); lunes.setDate(hoyD.getDate() - diaSem); lunes.setHours(0,0,0,0);
    const domingo = new Date(lunes); domingo.setDate(lunes.getDate() + 6); domingo.setHours(23,59,59,999);
    state.historial.forEach(s => {
        const parts = s.fecha.split('/');
        if (parts.length === 3) {
            const fechaS = new Date(parseInt(parts[2]), parseInt(parts[1])-1, parseInt(parts[0]));
            if (fechaS >= lunes && fechaS <= domingo) puntosSemana += getSessionPoints(s);
        }
    });

    const diasHdr = ['lun','mar','mié','jue','vie','sáb','dom'];

    let g = `<div class="cal-nav">
        <button class="cal-btn" onclick="calPrev()">&#8249;</button>
        <div class="cal-nav-center">
            <span class="cal-title">${MESES[calMonth].toLowerCase()} de ${calYear}</span>
            <div class="cal-puntos-row">
                <span class="cal-puntos-chip cal-puntos-mes">&#129293; ${Math.round(totalPuntos)} mes</span>
                <span class="cal-puntos-chip cal-puntos-sem">&#128293; ${Math.round(puntosSemana)} semana</span>
                <button class="cal-puntos-info" onclick="abrirPuntosModal()">&#9432;</button>
            </div>
        </div>
        <button class="cal-btn" onclick="calNext()" ${isFuture ? 'disabled' : ''}>&#8250;</button>
    </div>
    <div class="cal-grid">`;

    for (let i = 0; i < firstDay; i++) g += `<div class="cal-cell"></div>`;

    for (let d = 1; d <= daysInMonth; d++) {
        const ds = new Date(calYear, calMonth, d).toLocaleDateString();
        const isToday = ds === today.toLocaleDateString();
        const isFutureDay = new Date(calYear, calMonth, d) > today;
        const intensity = dayData[d] || 0;
        if (intensity > 0) {
            const ratio = intensity / maxInt;
            const size = Math.round(32 + ratio * 32); // 32px – 64px
            const lightL = Math.round(75 - ratio * 38);
            const bg = `hsl(261, 42%, ${lightL}%)`;
            const textColor = lightL < 55 ? 'white' : '#3a2d6e';
            const fs = Math.round(11 + ratio * 7);
            g += `<div class="cal-cell">
                <div class="cal-circle${isToday ? ' cal-circle-today' : ''}" style="width:${size}px;height:${size}px;background:${bg};font-size:${fs}px;color:${textColor};" onclick="openDayModal('${ds}',${d},${calMonth},${calYear})">${d}</div>
            </div>`;
        } else {
            g += `<div class="cal-cell${isFutureDay ? ' cal-future' : ''}">
                <span class="cal-dnum${isToday ? ' cal-dnum-today' : ''}">${d}</span>
            </div>`;
        }
    }

    // Day labels at bottom
    g += `</div><div class="cal-footer">${diasHdr.map((d, i) => `<div class="cal-foot-d${isCurrentMonth && i === todayDay ? ' cal-foot-today' : ''}">${d}</div>`).join('')}</div>`;
    container.innerHTML = g;
}

function calPrev() {
    calMonth--; if (calMonth < 0) { calMonth = 11; calYear--; }
    renderCalendar();
}
function calNext() {
    const now = new Date();
    if (calYear < now.getFullYear() || (calYear === now.getFullYear() && calMonth < now.getMonth())) {
        calMonth++; if (calMonth > 11) { calMonth = 0; calYear++; }
        renderCalendar();
    }
}

function formatDuracion(sec) {
    if (!sec) return null;
    const h = Math.floor(sec/3600), m = Math.floor((sec%3600)/60), s = sec%60;
    if (h > 0) return `${h}h ${m}m`;
    return `${m}m ${s < 10?'0':''}${s}s`;
}

function openDayModal(ds, d, month, year) {
    const sessions = state.historial.filter(h => h.fecha === ds);
    if (!sessions.length) return;
    const MESES = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
    document.getElementById('dayModalTitle').innerText = `${d} de ${MESES[month]} de ${year}`;
    let cardioMin = 0, allEx = [];
    sessions.forEach(s => {
        if (s.ejercicios) s.ejercicios.forEach(ex => {
            allEx.push(ex);
            if (ex.group === 'Cardio' && ex.series) cardioMin += parseFloat(ex.series)||0;
        });
    });
    const durStr = formatDuracion(sessions[0].duracion);
    let body = `<div class="modal-times">`;
    if (durStr) body += `<div class="modal-time-pill">⏱ ${durStr}</div>`;
    if (cardioMin > 0) body += `<div class="modal-time-pill">🚴 ${Math.round(cardioMin)} min cardio</div>`;
    body += `</div><div class="modal-ex-list">`;
    allEx.forEach(ex => {
        const tipo = getEquipType(ex);
        let meta = '';
        if (tipo === 'cardio') { meta = ex.series ? `${ex.series} min` : ''; if (ex.reps) meta += ` · ${ex.reps}`; }
        else {
            if (ex.series && ex.reps) meta = `${ex.series}×${ex.reps}`;
            else if (ex.series) meta = `${ex.series} series`;
            if (ex.peso) meta += ` · ${ex.peso}${tipo==='band'?'':' kg'}`;
        }
        body += `<div class="modal-ex-item"><span class="modal-ex-name">${getIcon(ex.t)}${ex.name}</span>${meta?`<span class="modal-ex-meta">${meta}</span>`:''}</div>`;
    });
    body += '</div>';
    sessions.forEach(s => {
        if (s.nota && s.nota.trim())
            body += `<div style="margin-top:12px;padding:10px 12px;background:#F6F2FA;border-radius:10px;font-size:13px;color:#49454F;font-style:italic;">"${s.nota}"</div>`;
    });
    document.getElementById('dayModalBody').innerHTML = body;
    document.getElementById('dayModal').style.display = 'flex';
}

function closeDayModal(el, e) {
    if (!e || e.target === el) document.getElementById('dayModal').style.display = 'none';
}

const STAT_INFO = {
    sesiones: {
        titulo: "Total de Sesiones",
        desc: "Número total de entrenamientos guardados en tu historial.",
        consejo: "Un buen indicador de constancia a largo plazo. Lo importante no es el número absoluto sino que crezca de forma sostenida."
    },
    racha: {
        titulo: "Racha Actual 🔥",
        desc: "Días entrenados en tu racha activa. Se permiten hasta 2 días de descanso consecutivos sin romperla, adaptado a tu rutina con martes y jueves libres.",
        consejo: "Con tu programación de 5 días semanales, una racha saludable es de 10-20 días. No la fuerces si el cuerpo pide descanso."
    },
    racha_max: {
        titulo: "Racha Máxima 🏆",
        desc: "La racha más larga que has alcanzado en todo tu historial, con el mismo criterio de 2 días de descanso permitidos.",
        consejo: "Tu récord personal de constancia. Úsalo como motivación, no como obligación."
    },
    ses_semana: {
        titulo: "Sesiones Esta Semana 📅",
        desc: "Entrenamientos registrados en los últimos 7 días.",
        consejo: "Con tu rutina habitual el ideal son 5 sesiones. 3-4 es un buen resultado si la semana laboral fue intensa."
    },
    descansos: {
        titulo: "Días de Descanso Esta Semana 😴",
        desc: "Días sin entreno en los últimos 7 días (7 menos las sesiones de la semana).",
        consejo: "2 días es lo planificado. Si ves 3 o más, se perdió algún día de entrenamiento. Si ves 0-1, valora si estás descansando suficiente para tu recuperación linfática."
    },
    cardio_semana: {
        titulo: "Cardio Esta Semana 🚴",
        desc: "Minutos registrados en ejercicios de Cardio durante los últimos 7 días.",
        consejo: "Para tu condición linfática el cardio de bajo impacto es especialmente beneficioso. Se recomiendan al menos 30-60 min semanales para favorecer el retorno venoso."
    },
    cardio_mes: {
        titulo: "Cardio Este Mes 🚴",
        desc: "Total de minutos de cardio acumulados desde el día 1 del mes en curso.",
        consejo: "Un objetivo razonable para tu perfil es 120-180 min mensuales. Más tiempo a baja intensidad siempre es mejor que poco tiempo a alta intensidad."
    },
    ses_mes: {
        titulo: "Sesiones Este Mes 📆",
        desc: "Entrenamientos completados desde el día 1 del mes actual.",
        consejo: "Entrenando 5 días por semana, un mes completo debería sumar unas 20-22 sesiones. Entre 15 y 20 es un resultado muy sólido."
    },
    semanas_activas: {
        titulo: "Semanas Activas 📆",
        desc: "Semanas del mes en las que has entrenado al menos un día.",
        consejo: "Si el mes tiene 4 semanas y ves 4, la constancia es perfecta. Una semana en cero es señal de que algo interrumpió la rutina."
    },
    distribucion: {
        titulo: "Distribución por Tipo",
        desc: "Porcentaje de ejercicios Básicos (B), Aislamiento (A) y Salud (S) sobre el total de tu historial.",
        consejo: "Para tu perfil, un reparto equilibrado sería B 40% · A 30% · S 30%. Un porcentaje de Salud bajo indica que estás priorizando músculo sobre movilidad y circulación, lo cual puede afectar tu condición linfática."
    },
    top_grupo: {
        titulo: "Grupo Muscular Top",
        desc: "El grupo muscular con más ejercicios acumulados en todo tu historial.",
        consejo: "Si siempre sale el mismo, puede indicar un desequilibrio. Asegúrate de que los grupos antagonistas (Empuje/Tirón, Bíceps/Tríceps) tienen una presencia similar."
    },
    top_ejercicio: {
        titulo: "Ejercicio Más Repetido",
        desc: "El ejercicio individual que más veces aparece en tu historial.",
        consejo: "Cierta repetición es buena para la técnica y el progreso, pero si siempre es el mismo el generador de rutinas debería estar variando. Revisa si la biblioteca tiene opciones suficientes para ese grupo."
    },
    salud_sesion: {
        titulo: "Salud por Sesión 🛡️",
        desc: "Media de ejercicios de tipo Salud en tus últimas 10 sesiones.",
        consejo: "Para tu condición linfática y hormonal se recomiendan al menos 2 ejercicios de Salud por sesión: uno de movilidad y uno de activación circulatoria. Si este número es inferior a 2, añade más ejercicios tipo S a tu rutina."
    },
    mas_descuidado: {
        titulo: "Grupo Más Descuidado ⚠️",
        desc: "El grupo muscular con menos ejercicios registrados en los últimos 30 días (excluye Cardio).",
        consejo: "Si aparece el mismo grupo semana tras semana, considera añadirlo a un día más de tu planificación. Un desequilibrio sostenido puede generar compensaciones posturales o debilidades asimétricas."
    }
};

// stat info modal removed — see tooltip functions below

let statsAbiertos = new Set(['constancia']);
function toggleStatsCard(id) {
    if (statsAbiertos.has(id)) statsAbiertos.delete(id); else statsAbiertos.add(id);
    updateStats();
}

function updateStats() {
    const container = document.getElementById('statsContent');
    if (!container) return;
    if (state.historial.length === 0) {
        container.innerHTML = "<div style='grid-column:1/span 2;text-align:center;color:var(--text2);font-size:11px;padding:16px 0;'>Entrena para ver estadísticas</div>";
        return;
    }
    const today = new Date();
    const uniqueDatesSet = new Set(state.historial.map(h => h.fecha));
    let racha = 0, descConsec = 0;
    let checkDate = new Date(today);
    for (let i = 0; i <= 365; i++) {
        const ds = checkDate.toLocaleDateString();
        if (uniqueDatesSet.has(ds)) { racha++; descConsec = 0; }
        else { descConsec++; if (descConsec > 2) break; }
        checkDate.setDate(checkDate.getDate() - 1);
    }
    let maxRacha = 0, tempRacha = 0, tempDesc = 0;
    const startHist = new Date(today); startHist.setDate(startHist.getDate() - 730);
    const histCheck = new Date(startHist);
    while (histCheck <= today) {
        if (uniqueDatesSet.has(histCheck.toLocaleDateString())) {
            tempRacha++; tempDesc = 0; if (tempRacha > maxRacha) maxRacha = tempRacha;
        } else { tempDesc++; if (tempDesc > 2) { tempRacha = 0; tempDesc = 0; } }
        histCheck.setDate(histCheck.getDate() + 1);
    }
    const last7 = [], prev7 = [];
    for (let i=0;i<7;i++){const d=new Date(today);d.setDate(today.getDate()-i);last7.push(d.toLocaleDateString());}
    for (let i=7;i<14;i++){const d=new Date(today);d.setDate(today.getDate()-i);prev7.push(d.toLocaleDateString());}
    const sesSemana = state.historial.filter(h=>last7.includes(h.fecha)).length;
    const sesPrevSemana = state.historial.filter(h=>prev7.includes(h.fecha)).length;
    const descSemana = 7 - sesSemana;
    const diff = sesSemana - sesPrevSemana;
    const tendenciaIcon = diff>0?'↑':diff<0?'↓':'=';
    const tendenciaColor = diff>0?'#2E7D32':diff<0?'var(--danger)':'var(--text2)';
    const tendenciaTexto = diff>0?`+${diff} vs sem. ant.`:diff<0?`${diff} vs sem. ant.`:`igual sem. ant.`;
    const thisMonth = [];
    const tmp = new Date(today.getFullYear(),today.getMonth(),1);
    while (tmp<=today){thisMonth.push(tmp.toLocaleDateString());tmp.setDate(tmp.getDate()+1);}
    const getCardioMin = (fechas) => { let min=0; state.historial.filter(h=>fechas.includes(h.fecha)).forEach(s=>{if(s.ejercicios)s.ejercicios.forEach(ex=>{if(ex.group==='Cardio'&&ex.series)min+=parseFloat(ex.series)||0;})}); return Math.round(min); };
    const cardioSemana = getCardioMin(last7);
    const cardioMes = getCardioMin(thisMonth);
    let cardioTotal = 0;
    state.historial.forEach(s=>{if(s.ejercicios)s.ejercicios.forEach(ex=>{if(ex.group==='Cardio'&&ex.series)cardioTotal+=parseFloat(ex.series)||0;});});
    cardioTotal = Math.round(cardioTotal);
    const ultimaFecha = state.historial[0]?.fecha;
    let diasDescanso = 0;
    if (ultimaFecha){const p=ultimaFecha.split('/');const u=new Date(p[2],p[1]-1,p[0]);diasDescanso=Math.floor((today-u)/(1000*60*60*24));}
    const diasColor = diasDescanso>=3?'var(--danger)':diasDescanso>=2?'#E65100':'var(--primary)';
    const last30=[];for(let i=0;i<30;i++){const d=new Date(today);d.setDate(today.getDate()-i);last30.push(d.toLocaleDateString());}
    const gruposSesiones={};
    GRUPOS.filter(g=>g!=='Cardio').forEach(g=>gruposSesiones[g]=0);
    state.historial.filter(h=>last30.includes(h.fecha)).forEach(s=>{const gs=new Set();if(s.ejercicios)s.ejercicios.forEach(ex=>{if(gruposSesiones[ex.group]!==undefined)gs.add(ex.group);});gs.forEach(g=>gruposSesiones[g]++);});
    const maxGrupo=Math.max(...Object.values(gruposSesiones),1);
    // Material You — chips con barra tonal
    const GRUPO_COLORS = ['#6750A4','#B5838D','#E07A5F','#3D405B','#81B29A','#F2CC8F','#118AB2','#06D6A0'];
    const gruposBars=Object.entries(gruposSesiones).sort((a,b)=>b[1]-a[1]).map(([g,n],i)=>{
        const pct=Math.round(n/maxGrupo*100);
        const col=GRUPO_COLORS[i%GRUPO_COLORS.length];
        const colAlpha=col+'26';
        return `<div class="myu-group-row">
            <div class="myu-group-label-wrap">
                <span class="myu-group-dot" style="background:${col};"></span>
                <span class="myu-group-name">${g}</span>
            </div>
            <div class="myu-group-track">
                <div class="myu-group-fill" style="width:${pct}%;background:${col};"></div>
            </div>
            <span class="myu-group-count" style="color:${col};">${n}</span>
        </div>`;
    }).join('');
    const LINFATICOS_STAT=['Bomba de tobillo (ankle pumps)','Piernas elevadas en la pared','Bicicleta en el aire','Elevación de talones sentado','Marcha sentado en silla','Círculos de tobillo'];
    let linfCount=0;
    state.historial.filter(h=>last7.includes(h.fecha)).forEach(s=>{if(s.ejercicios)s.ejercicios.forEach(ex=>{if(LINFATICOS_STAT.includes(ex.name))linfCount++;});});
    const linfColor=linfCount>=4?'#2E7D32':linfCount>=2?'#E65100':'var(--danger)';
    const linfLabel=linfCount>=4?'✓ Bien':linfCount>=2?'! Mejorable':'⚠ Bajo';
    const card = (id, titulo, resumen, contenido) => {
        const abierto = statsAbiertos.has(id);
        return `
        <div class="stats-card">
            <div class="stats-card-header" onclick="toggleStatsCard('${id}')">
                <span class="stats-card-title">${titulo}</span>
                ${!abierto ? `<span class="stats-card-resumen">${resumen}</span>` : ''}
                <span class="material-symbols-outlined stats-card-chevron">${abierto ? 'expand_less' : 'expand_more'}</span>
            </div>
            ${abierto ? `<div class="stats-card-body">${contenido}</div>` : ''}
        </div>`;
    };

    container.innerHTML =
        card('constancia', '🔥 Racha y constancia', `${racha} días · ${sesSemana} ses/sem`, `
            <div class="stat-box stat-tappable" onclick="abrirInfoStat('racha',event)"><span class="stat-label">🔥 Racha actual</span><span class="stat-val">${racha}<small>días</small></span></div>
            <div class="stat-box stat-tappable" onclick="abrirInfoStat('racha_max',event)"><span class="stat-label">🏆 Racha máxima</span><span class="stat-val">${maxRacha}<small>días</small></span></div>
            <div class="stat-box stat-tappable" onclick="abrirInfoStat('descansos',event)"><span class="stat-label">😴 Descansos semana</span><span class="stat-val">${descSemana}<small>días</small></span></div>
            <div class="stat-box stat-tappable" onclick="abrirInfoStat('tendencia',event)"><span class="stat-label">📈 Tendencia semanal</span><span class="stat-val" style="font-size:13px;color:${tendenciaColor};">${tendenciaIcon} ${sesSemana}ses<small style="color:${tendenciaColor};">${tendenciaTexto}</small></span></div>
            <div class="stat-box stat-tappable" onclick="abrirInfoStat('dias_descanso',event)" style="grid-column:1/span 2;"><span class="stat-label">⏱ Último entreno</span><span class="stat-val" style="color:${diasColor};">${diasDescanso}<small>días</small></span></div>
        `) +
        card('cardio', '🚴 Cardio y drenaje', `${cardioSemana} min/sem · ${linfCount} linf.`, `
            <div class="stat-box stat-tappable" onclick="abrirInfoStat('cardio_semana',event)"><span class="stat-label">🚴 Cardio semana</span><span class="stat-val">${cardioSemana}<small>min</small></span></div>
            <div class="stat-box stat-tappable" onclick="abrirInfoStat('cardio_mes',event)"><span class="stat-label">🚴 Cardio mes</span><span class="stat-val">${cardioMes}<small>min</small></span></div>
            <div class="stat-box stat-tappable" onclick="abrirInfoStat('cardio_total',event)"><span class="stat-label">🚴 Cardio total</span><span class="stat-val">${cardioTotal}<small>min</small></span></div>
            <div class="stat-box stat-tappable" onclick="abrirInfoStat('linfaticos_semana',event)"><span class="stat-label">🦵 Linfáticos semana <span class="stat-info-hint" style="color:${linfColor};">${linfLabel}</span></span><span class="stat-val">${linfCount}<small>ej.</small></span></div>
        `) +
        card('grupos', '📊 Sesiones por grupo', '30 días', `
            <div class="stat-box stat-full stat-tappable" onclick="abrirInfoStat('grupos_mes',event)" style="grid-column:1/span 2;">
                <div class="myu-groups-container">${gruposBars}</div>
            </div>
        `);
}


// Audio: contexto creado en gesto del usuario, keep-alive para evitar suspensión en Android
let audioCtx = null;

function initAudio() {
    try {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === 'suspended') audioCtx.resume();
        // Nodo silencioso de keep-alive para que Chrome no suspenda el contexto
        if (!audioCtx._keepAlive) {
            const buf = audioCtx.createBuffer(1, 1, 22050);
            const src = audioCtx.createBufferSource();
            src.buffer = buf;
            src.loop = true;
            src.connect(audioCtx.destination);
            src.start(0);
            audioCtx._keepAlive = src;
        }
    } catch(e) {}
}

function playEndSound() {
    if (navigator.vibrate) navigator.vibrate([200, 100, 200, 100, 400]);
    showToast('⏱ ¡Tiempo!');
    try {
        if (!audioCtx || audioCtx.state === 'closed') {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        const play = () => {
            const now = audioCtx.currentTime;
            [523.25, 659.25, 783.99].forEach((f, i) => {
                const o = audioCtx.createOscillator();
                const g = audioCtx.createGain();
                o.type = 'triangle';
                o.frequency.setValueAtTime(f, now + i * 0.15);
                g.gain.setValueAtTime(0, now + i * 0.15);
                g.gain.linearRampToValueAtTime(0.8, now + i * 0.15 + 0.05);
                g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.15 + 0.4);
                o.connect(g);
                g.connect(audioCtx.destination);
                o.start(now + i * 0.15);
                o.stop(now + i * 0.15 + 0.5);
            });
        };
        if (audioCtx.state === 'suspended') {
            audioCtx.resume().then(play);
        } else {
            play();
        }
    } catch(e) {}
}

let tInterval;
let tRemaining = 0;

function _timerSetDisplay(s) {
    const m = Math.floor(s / 60), sc = s % 60;
    const txt = `${m < 10 ? '0' : ''}${m}:${sc < 10 ? '0' : ''}${sc}`;
    const color = s <= 10 && s > 0 ? 'var(--danger)' : 'var(--primary)';
    const disp = document.getElementById('timerDisplay');
    if (disp) { disp.innerText = txt; disp.style.color = color; }
    const mini = document.getElementById('timerDisplayMini');
    if (mini) { mini.innerText = txt; mini.style.color = color; }
}

let timerExpanded = false;
function setTimerExpanded(v) {
    timerExpanded = v;
    const tb = document.querySelector('.topbar');
    if (tb) tb.classList.toggle('tmr-collapsed', !v);
}
function toggleTimerExpand() { setTimerExpanded(!timerExpanded); }

function setTimerLabel(txt) {
    const el = document.querySelector('.tmr-label');
    if (el) el.innerText = txt;
}

function startTimer(s) {
    initAudio();
    clearInterval(tInterval);
    setTimerLabel('EN CURSO');
    tRemaining = s;
    _timerSetDisplay(tRemaining);           // muestra el valor inicial de inmediato
    tInterval = setInterval(() => {
        tRemaining--;
        _timerSetDisplay(tRemaining);
        if (tRemaining <= 0) {
            clearInterval(tInterval);
            playEndSound();
            _timerSetDisplay(0);
            setTimerLabel('DESCANSO');
        }
    }, 1000);
}

function startTimerCustom() {
    const inp = document.getElementById('timerCustomInput');
    const val = parseInt(inp ? inp.value : 0, 10);
    if (!val || val < 1) return;
    startTimer(val);
}

function resetTimer() {
    clearInterval(tInterval);
    tRemaining = 0;
    _timerSetDisplay(0);
    setTimerLabel('DESCANSO');
    const disp = document.getElementById('timerDisplay');
    if (disp) disp.style.color = 'var(--primary)';
}

// ── Tooltip flotante para estadísticas ──────────────────────────────────────
function abrirInfoStat(key, event) {
    const info = STAT_INFO[key];
    if (!info) return;
    const tooltip = document.getElementById('statTooltip');
    const overlay = document.getElementById('statTooltipOverlay');
    if (!tooltip || !overlay) return;

    document.getElementById('statTooltipTitle').innerText = info.titulo;
    document.getElementById('statTooltipDesc').innerText = info.desc;
    document.getElementById('statTooltipConsejo').innerText = info.consejo;

    // Posicionar el tooltip cerca del elemento tocado
    overlay.style.display = 'block';
    tooltip.style.display = 'block';
    tooltip.classList.remove('stat-tooltip-visible');
    // pequeño delay para animar la entrada
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            tooltip.classList.add('stat-tooltip-visible');
        });
    });
}

function cerrarStatTooltip() {
    const tooltip = document.getElementById('statTooltip');
    const overlay = document.getElementById('statTooltipOverlay');
    if (!tooltip || !overlay) return;
    tooltip.classList.remove('stat-tooltip-visible');
    setTimeout(() => {
        tooltip.style.display = 'none';
        overlay.style.display = 'none';
    }, 200);
}

// ── Supabase ─────────────────────────────────────────────────────────────────
const SUPABASE_URL = 'https://qcawsoaeppuyvqhpybtt.supabase.co';
const SUPABASE_KEY = 'sb_publishable_m3iwz7iGVKkakn-_CoOr6g_mD1wmBoK';

function getDeviceId() {
    let id = localStorage.getItem('ironlog_device_id');
    if (!id) { id = 'dev_' + Math.random().toString(36).slice(2) + Date.now().toString(36); localStorage.setItem('ironlog_device_id', id); }
    return id;
}

async function syncToSupabase() {
    try {
        setSyncIcon('sync');
        const res = await fetch(`${SUPABASE_URL}/rest/v1/ironlog_sync`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}`, 'Prefer': 'resolution=merge-duplicates' },
            body: JSON.stringify({ device_id: getDeviceId(), state_data: state, updated_at: new Date().toISOString() })
        });
        setSyncIcon(res.ok ? 'ok' : 'error');
        showToast(res.ok ? '☁️ Guardado en la nube' : '❌ Error al sincronizar');
    } catch(e) { setSyncIcon('error'); showToast('❌ Sin conexión'); }
}

async function loadFromSupabase() {
    try {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/ironlog_sync?device_id=eq.${getDeviceId()}&select=state_data,updated_at`,
            { headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` } });
        if (!res.ok) return;
        const data = await res.json();
        if (!data.length) return;
        const remoteUpdated = new Date(data[0].updated_at);
        const localUpdated  = new Date(state.lastSync || 0);
        if (remoteUpdated > localUpdated) {
            Object.assign(state, data[0].state_data);
            state.lastSync = data[0].updated_at;
            save(); showPage(state.activeTab || 'rutinaPage');
            showToast('☁️ Datos sincronizados desde la nube');
        }
    } catch(e) {}
}

function setSyncIcon(status) {
    const btn = document.getElementById('syncIcon');
    if (!btn) return;
    const span = btn.querySelector('span');
    if (!span) return;
    const icons = { sync: 'sync', ok: 'cloud_done', error: 'cloud_off' };
    const colors = { sync: 'var(--text2)', ok: '#43A047', error: '#E53935' };
    span.innerText = icons[status];
    btn.style.color = colors[status];
    if (status === 'sync') span.classList.add('spin'); else span.classList.remove('spin');
}

async function restaurarDesdeSupabase() {
    try {
        setSyncIcon('sync');
        showToast('Conectando con la nube...');
        const res = await fetch(`${SUPABASE_URL}/rest/v1/ironlog_sync?device_id=eq.${getDeviceId()}&select=state_data,updated_at`,
            { headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` } });
        if (!res.ok) { setSyncIcon('error'); showToast(`❌ Error: ${res.status}`); return; }
        const data = await res.json();
        if (!data.length) { showToast('☁️ Sin datos en la nube para este dispositivo'); setSyncIcon('ok'); return; }
        const sesiones = data[0].state_data?.historial?.length || 0;
        Object.assign(state, data[0].state_data);
        state.lastSync = data[0].updated_at;
        save(); showPage(state.activeTab || 'rutinaPage');
        setSyncIcon('ok');
        showToast(`✅ Restauradas ${sesiones} sesiones`);
    } catch(e) { setSyncIcon('error'); showToast(`❌ ${e.message||'Sin conexión'}`); }
}

function cerrarSyncModal() {
    document.getElementById('syncModal').style.display = 'none';
}

function onSyncIconPress() {
    const btn = document.getElementById('syncIcon');
    if (btn) btn.style.opacity = '0.5';
    setTimeout(() => { if (btn) btn.style.opacity = '1'; }, 300);
    const hayDatos = state.historial && state.historial.length > 0;
    document.getElementById('syncBtnGuardar').style.display = hayDatos ? 'block' : 'none';
    document.getElementById('syncTxt').innerText = hayDatos
        ? 'Elige qué quieres hacer con la nube'
        : 'No hay sesiones locales';
    document.getElementById('syncModal').style.display = 'flex';
}

function handleBackButton() {
    const modales = ['exInfoModal','editExModal','intensidadModal','generarSemanaModal','statInfoModal','dayModal','syncModal','finalizarModal','guiaModal'];
    for (const id of modales) {
        const el = document.getElementById(id);
        if (el && el.style.display !== 'none' && el.style.display !== '') {
            el.style.display = 'none';
            return;
        }
    }
    const exView = document.getElementById('exerciseView');
    if (exView && exView.style.display !== 'none') { backToGroups(); return; }
}

window.addEventListener('popstate', () => {
    handleBackButton();
    history.pushState({ ironlog: true }, '');
});

// Prevenir pull-to-refresh en PWA/navegador
(function preventPullRefresh() {
    let startY = 0;
    let atTop = false;
    const getScrollTop = () => {
        return (document.scrollingElement && document.scrollingElement.scrollTop) ||
               document.documentElement.scrollTop || document.body.scrollTop || 0;
    };
    document.addEventListener('touchstart', e => {
        startY = e.touches[0].clientY;
        atTop = getScrollTop() <= 0;
    }, { passive: true });
    document.addEventListener('touchmove', e => {
        if (!atTop) return;
        const y = e.touches[0].clientY;
        if (y > startY && getScrollTop() <= 0) {
            e.preventDefault();
        }
    }, { passive: false });
})();

// Navegación entre pestañas deslizando izquierda/derecha
(function swipeNav() {
    const PAGES = ['rutinaPage', 'hoyPage', 'semanaPage', 'historialPage'];
    let startX = 0, startY = 0, tracking = false;
    document.addEventListener('touchstart', e => {
        if (e.touches.length !== 1) { tracking = false; return; }
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        tracking = true;
    }, { passive: true });
    document.addEventListener('touchend', e => {
        if (!tracking) return;
        tracking = false;
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const dx = endX - startX;
        const dy = endY - startY;
        // Solo si el gesto es claramente horizontal y suficientemente largo
        if (Math.abs(dx) < 70) return;
        if (Math.abs(dx) < Math.abs(dy) * 1.8) return;
        // No cambiar si hay un modal abierto
        const modales = ['exInfoModal','editExModal','intensidadModal','statInfoModal','dayModal','syncModal','finalizarModal','guiaModal','puntosModal','ajustesModal','confirmModal'];
        for (const id of modales) {
            const m = document.getElementById(id);
            if (m && m.style.display && m.style.display !== 'none') return;
        }
        // No cambiar si estamos dentro de la vista de ejercicios en Biblioteca
        const exView = document.getElementById('exerciseView');
        if (exView && exView.style.display !== 'none') return;
        const current = PAGES.indexOf(state.activeTab);
        if (current === -1) return;
        let next = current, dir = null;
        if (dx < 0 && current < PAGES.length - 1) { next = current + 1; dir = 'right'; }
        else if (dx > 0 && current > 0) { next = current - 1; dir = 'left'; }
        if (next !== current) showPage(PAGES[next], null, dir);
    }, { passive: true });
})();

window.onload = () => {
    // Garantizar que la splash desaparece siempre
    const _splash = document.getElementById('splashScreen');
    if (_splash) {
        setTimeout(() => { _splash.style.opacity='0'; setTimeout(() => _splash.remove(), 600); }, 2500);
    }
    try {
    showPage(state.activeTab || 'rutinaPage');
    if (localStorage.getItem('ironlog_dark') === '1') {
        document.body.classList.add('dark-mode');
        const btn = document.getElementById('darkModeBtn');
        if (btn) btn.querySelector('span').innerText = 'light_mode';
    }
    history.pushState({ ironlog: true }, '');
    loadFromSupabase();
    } catch(e) { console.error('Init error:', e); }
};
