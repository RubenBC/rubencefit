const T_B = "Básico"; const T_A = "Aislamiento"; const T_S = "Salud"; 
    
function getIcon(t) {
    if(t === T_B) return '🔥 ';
    if(t === T_A) return '🎯 ';
    if(t === T_S) return '🛡️ ';
    return '';
}

const db = {
    "Pecho": { icon: "expand_less", advice: "Control de hombros y apertura.", data: [
        {n:"Flexiones",                            t:T_B, tip:"Sin equipamiento",  info:"Mantén el cuerpo alineado desde hombros hasta tobillos, con abdomen y glúteos contraídos. Baja flexionando los codos hasta acercar el pecho al suelo y empuja de forma controlada sin hundir la zona lumbar.", recSeries:"4", recReps:"8-20"},
        {n:"Press de pecho con mancuernas suelo",  t:T_B, tip:"Solo Mancuernas",   info:"Túmbate boca arriba con rodillas flexionadas y las mancuernas a la altura del pecho. Empuja hacia arriba hasta extender los brazos y baja lentamente hasta tocar suavemente el suelo con los tríceps.", recSeries:"3-4", recReps:"6-12"},
        {n:"Press de pecho con goma",              t:T_B, tip:"Solo Gomas",         info:"Con la goma anclada detrás del cuerpo, empuja al frente como en un press de pecho. Mantén hombros estables y controla el regreso sin perder tensión en la goma.", recSeries:"3-4", recReps:"8-15"},
        {n:"Flexiones inclinadas",                 t:T_B, tip:"Sin equipamiento",  info:"Realiza flexiones con manos o pies elevados según la variante. Mantén el cuerpo recto y baja lentamente hasta acercar el pecho al apoyo o al suelo sin perder alineación.", recSeries:"3-4", recReps:"8-15"},
        {n:"Aperturas con mancuernas suelo",       t:T_A, tip:"Solo Mancuernas",   info:"Tumbado boca arriba, abre los brazos hacia los lados con ligera flexión de codos hasta notar estiramiento en el pecho. Vuelve cerrando en arco de forma controlada.", recSeries:"3", recReps:"10-15"},
        {n:"Cruce de pecho con goma",              t:T_A, tip:"Solo Gomas",         info:"Con la goma anclada lateralmente, lleva el brazo hacia el centro del pecho en movimiento semicircular. Mantén el torso estable y controla el regreso lentamente.", recSeries:"3-4", recReps:"12-20"}
    ] },
    "Espalda": { icon: "format_align_justify", advice: "Tracción vertical y horizontal.", data: [
        {n:"Remo unilateral con mancuerna",        t:T_B, tip:"Solo Mancuernas",   info:"Apoya una mano y una rodilla en una superficie estable. Lleva la mancuerna hacia la cadera manteniendo espalda recta y evitando girar el torso.", recSeries:"3-5", recReps:"6-12"},
        {n:"Remo con goma",                        t:T_B, tip:"Solo Gomas",         info:"Tira de la goma hacia el abdomen llevando los codos hacia atrás y manteniendo el pecho abierto. Regresa lentamente sin perder tensión.", recSeries:"3-4", recReps:"8-15"},
        {n:"Jalón al pecho con goma",              t:T_B, tip:"Solo Gomas",         info:"Con la goma anclada arriba, tira hacia la parte alta del pecho bajando los codos. Mantén el torso estable y evita inclinarte demasiado hacia atrás.", recSeries:"3-4", recReps:"8-15"},
        {n:"Remo inclinado con mancuernas",        t:T_B, tip:"Solo Mancuernas",   info:"Inclina el torso manteniendo espalda recta y rodillas ligeramente flexionadas. Lleva las mancuernas hacia el abdomen y baja lentamente sin balanceos.", recSeries:"3-4", recReps:"6-12"},
        {n:"Pullover con mancuerna",               t:T_A, tip:"Solo Mancuernas",   info:"Tumbado boca arriba, lleva la mancuerna desde encima del pecho hacia detrás de la cabeza con brazos semiestirados. Regresa de forma lenta y controlada.", recSeries:"3", recReps:"10-15"},
        {n:"Face pull con goma",                   t:T_A, tip:"Solo Gomas",         info:"Con la goma anclada a la altura de la cara, tira hacia ti abriendo los codos hacia los lados. Mantén hombros bajos y aprieta la parte alta de la espalda.", recSeries:"3-4", recReps:"12-20"}
    ] },
    "Drenaje": { icon: "water_drop", advice: "Drenaje linfático y retorno venoso.", data: [
        {n:"Elevación de piernas en pared",  t:T_S, tip:"Sin equipamiento", info:"Túmbate boca arriba y apoya las piernas elevadas contra la pared. Relaja pies y tobillos manteniendo una respiración tranquila y postura cómoda.", recSeries:"2-4", recReps:"5-15 min"},
        {n:"Bomba de tobillo",               t:T_S, tip:"Sin equipamiento", info:"Con la pierna relajada, lleva la punta del pie hacia ti y luego hacia delante de forma continua. Mantén movimiento suave y constante sin tensión excesiva.", recSeries:"3-5", recReps:"20-40"},
        {n:"Elevaciones de talones",         t:T_S, tip:"Sin equipamiento", info:"Eleva lentamente los talones hasta quedar sobre la punta de los pies y baja de forma controlada. Evita rebotes y mantén apoyo estable.", recSeries:"3-4", recReps:"12-20"},
        {n:"Bicicleta en el aire",           t:T_S, tip:"Sin equipamiento", info:"Tumbado boca arriba, simula un pedaleo lento y continuo manteniendo un rango cómodo. Mantén respiración relajada y movimiento fluido.", recSeries:"2-3", recReps:"3-5 min"},
        {n:"Marcha en el sitio",             t:T_S, tip:"Sin equipamiento", info:"Camina sin desplazarte elevando suavemente las rodillas y apoyando el pie de forma controlada. Mantén ritmo cómodo y sin impacto.", recSeries:"1", recReps:"2-5 min"}
    ] },
    "Hombros": { icon: "accessibility_new", advice: "Cuidado del manguito rotador.", data: [
        {n:"Press militar con mancuernas",   t:T_B, tip:"Solo Mancuernas",   info:"Empuja las mancuernas desde la altura de los hombros hasta extender los brazos sobre la cabeza. Mantén abdomen firme y evita arquear la espalda.", recSeries:"3-5", recReps:"6-12"},
        {n:"Press Arnold",                   t:T_B, tip:"Solo Mancuernas",   info:"Empieza con palmas mirando hacia ti y rota las manos mientras elevas las mancuernas. Finaliza con brazos arriba y palmas hacia delante.", recSeries:"3-4", recReps:"8-12"},
        {n:"Push press",                     t:T_B, tip:"Solo Mancuernas",   info:"Realiza una ligera flexión de piernas y utiliza ese impulso para ayudar a elevar las mancuernas por encima de la cabeza. Controla la bajada lentamente.", recSeries:"3-4", recReps:"5-8"},
        {n:"Elevación lateral con impulso",  t:T_B, tip:"Mancuernas / Gomas",info:"Eleva los brazos lateralmente usando un ligero impulso controlado para mover más carga. Baja lentamente manteniendo tensión en los hombros.", recSeries:"3", recReps:"10-15"},
        {n:"Elevación lateral estricta",     t:T_A, tip:"Mancuernas / Gomas",info:"Sube los brazos lateralmente hasta la altura de los hombros sin balancear el cuerpo ni elevar los trapecios. Mantén control en la bajada.", recSeries:"3-4", recReps:"12-20"},
        {n:"Pájaros",                        t:T_A, tip:"Mancuernas / Gomas",info:"Inclina el torso hacia delante y abre los brazos hacia los lados trabajando el deltoide posterior. Mantén espalda recta y movimiento controlado.", recSeries:"3-4", recReps:"12-20"}
    ] },
    "Bíceps": { icon: "fitness_center", advice: "Flexión de codo técnica.", data: [
        {n:"Curl alterno con mancuernas",    t:T_B, tip:"Solo Mancuernas",   info:"Flexiona un brazo cada vez llevando la mancuerna hacia el hombro sin mover el codo del costado. Baja lentamente antes de alternar.", recSeries:"3-4", recReps:"8-12"},
        {n:"Curl con goma",                  t:T_B, tip:"Solo Gomas",         info:"Pisa la goma y flexiona los codos llevando las manos hacia los hombros. Mantén tensión continua y evita balancear el torso.", recSeries:"3-4", recReps:"10-15"},
        {n:"Curl martillo",                  t:T_B, tip:"Solo Mancuernas",   info:"Mantén agarre neutro con las palmas mirándose entre sí durante todo el recorrido. Eleva las mancuernas controladamente y baja despacio.", recSeries:"3-4", recReps:"8-12"},
        {n:"Curl concentrado",               t:T_B, tip:"Solo Mancuernas",   info:"Sentado, apoya el codo en la parte interna del muslo y eleva la mancuerna lentamente. Controla especialmente la bajada.", recSeries:"3", recReps:"8-12"},
        {n:"Curl con hombro retrasado",      t:T_A, tip:"Solo Mancuernas",   info:"Mantén el brazo ligeramente retrasado respecto al torso para aumentar el estiramiento del bíceps. Flexiona el codo sin mover el hombro.", recSeries:"3", recReps:"10-15"},
        {n:"Curl isométrico con goma",       t:T_A, tip:"Solo Gomas",         info:"Mantén el codo flexionado aproximadamente a 90 grados sosteniendo la tensión de la goma sin mover el brazo ni perder postura.", recSeries:"3", recReps:"20-40s"}
    ] },
    "Tríceps": { icon: "rebase_edit", advice: "Extensión de codo técnica.", data: [
        {n:"Fondos entre sillas",                      t:T_B, tip:"Sin equipamiento",  info:"Apoya las manos detrás del cuerpo sobre una silla estable. Baja flexionando los codos y empuja hasta extender los brazos sin bloquearlos bruscamente.", recSeries:"3-4", recReps:"6-15"},
        {n:"Press cerrado con mancuernas suelo",       t:T_B, tip:"Solo Mancuernas",   info:"Tumbado boca arriba, empuja las mancuernas manteniendo los codos pegados al cuerpo. Baja lentamente hasta tocar el suelo con los tríceps.", recSeries:"3-4", recReps:"6-12"},
        {n:"Extensión de tríceps con goma",            t:T_B, tip:"Solo Gomas",         info:"Con goma anclada arriba, extiende los brazos hacia abajo manteniendo los codos pegados al cuerpo. Regresa lentamente sin perder tensión.", recSeries:"3-4", recReps:"10-15"},
        {n:"Flexiones diamante",                       t:T_B, tip:"Sin equipamiento",  info:"Coloca las manos juntas bajo el pecho formando un triángulo. Baja controladamente manteniendo codos cerca del cuerpo y empuja de forma estable.", recSeries:"3", recReps:"8-15"},
        {n:"Extensión sobre cabeza",                   t:T_A, tip:"Solo Mancuernas",   info:"Con brazos elevados sobre la cabeza, baja la mancuerna detrás de ella flexionando solo los codos y vuelve extendiendo completamente.", recSeries:"3", recReps:"10-15"},
        {n:"Extensión unilateral con goma",            t:T_A, tip:"Solo Gomas",         info:"Trabaja un brazo cada vez extendiendo el codo contra la resistencia de la goma. Mantén el hombro estable y controla el regreso.", recSeries:"3", recReps:"12-20"}
    ] },
    "Core": { icon: "self_improvement", advice: "Estabilidad abdominal.", data: [
        {n:"Plancha",                      t:T_B, tip:"Sin equipamiento",  info:"Mantén el cuerpo recto apoyado sobre antebrazos y pies. Contrae abdomen y glúteos evitando hundir o elevar demasiado la cadera.", recSeries:"3", recReps:"30-60s"},
        {n:"Plancha con toque hombro",     t:T_B, tip:"Sin equipamiento",  info:"Desde plancha alta, toca el hombro contrario alternando brazos sin mover excesivamente la cadera ni rotar el torso.", recSeries:"3", recReps:"10-15"},
        {n:"Plancha extendida",            t:T_B, tip:"Sin equipamiento",  info:"Realiza una plancha con las manos más adelantadas respecto a los hombros para aumentar la demanda sobre abdomen y hombros.", recSeries:"3", recReps:"20-40s"},
        {n:"Hollow hold",                  t:T_B, tip:"Sin equipamiento",  info:"Tumbado boca arriba, presiona la zona lumbar contra el suelo y eleva ligeramente piernas y hombros manteniendo abdomen contraído.", recSeries:"3", recReps:"20-40s"},
        {n:"Plancha lateral",              t:T_B, tip:"Sin equipamiento",  info:"Apóyate sobre un antebrazo y el lateral del pie manteniendo cuerpo alineado y cadera elevada durante todo el ejercicio.", recSeries:"3", recReps:"20-40s"},
        {n:"Copenhagen plank suave",       t:T_A, tip:"Sin equipamiento",  info:"Apoya el antebrazo en el suelo y el pie superior en una silla o apoyo bajo. Eleva la cadera manteniendo el cuerpo alineado.", recSeries:"3", recReps:"10-20s"},
        {n:"Plancha lateral rodilla",      t:T_A, tip:"Sin equipamiento",  info:"Versión simplificada de plancha lateral con la rodilla inferior apoyada. Mantén abdomen activo y evita que la cadera caiga.", recSeries:"3", recReps:"20-40s"},
        {n:"Rotación de torso con goma",   t:T_A, tip:"Solo Gomas",         info:"Con la goma anclada lateralmente, gira el torso de forma controlada resistiendo la tensión y manteniendo estabilidad en la cadera.", recSeries:"3", recReps:"10-15"},
        {n:"Dead bug",                     t:T_S, tip:"Sin equipamiento",  info:"Tumbado boca arriba, baja brazo y pierna contrarios manteniendo la zona lumbar pegada al suelo y el abdomen activo.", recSeries:"3", recReps:"8-10"},
        {n:"Marcha tumbado",               t:T_S, tip:"Sin equipamiento",  info:"Boca arriba con rodillas dobladas, eleva un pie alternando piernas sin mover la pelvis ni arquear la espalda.", recSeries:"3", recReps:"10-15"},
        {n:"Pallof press con goma",        t:T_S, tip:"Solo Gomas",         info:"Con la goma anclada lateralmente, extiende los brazos frente al pecho resistiendo la rotación provocada por la tensión.", recSeries:"3", recReps:"10-12"},
        {n:"Pallof isométrico",            t:T_S, tip:"Solo Gomas",         info:"Mantén los brazos extendidos frente al cuerpo sosteniendo la tensión de la goma sin permitir que el torso rote.", recSeries:"3", recReps:"20-30s"},
        {n:"Bird dog",                     t:T_S, tip:"Sin equipamiento",  info:"En cuadrupedia, extiende brazo y pierna contrarios manteniendo espalda y pelvis estables durante todo el movimiento.", recSeries:"3", recReps:"8-10"},
        {n:"Superman controlado",          t:T_S, tip:"Sin equipamiento",  info:"Tumbado boca abajo, eleva ligeramente brazos y piernas del suelo sin forzar la zona lumbar ni el cuello.", recSeries:"3", recReps:"8-12"},
        {n:"Bird dog isométrico",          t:T_S, tip:"Sin equipamiento",  info:"Mantén la posición extendida del bird dog durante varios segundos sin perder alineación corporal ni estabilidad.", recSeries:"3", recReps:"10-15s"}
    ] },
    "Cardio": { icon: "directions_run", advice: "Bajo impacto linfático.", data: [
        {n:"Pedaleo continuo suave",   t:T_S, tip:"Bicicleta", info:"Pedalea a ritmo cómodo y constante con resistencia baja o moderada. Debes poder mantener conversación sin dificultad respiratoria importante.", recSeries:"1", recReps:"20-45 min"},
        {n:"Pedaleo progresivo",       t:T_S, tip:"Bicicleta", info:"Comienza muy suave, aumenta ligeramente ritmo o resistencia en la parte central y reduce intensidad progresivamente al final.", recSeries:"1", recReps:"15-30 min"},
        {n:"Pedaleo con pausas activas",t:T_S, tip:"Bicicleta", info:"Alterna varios minutos de pedaleo cómodo con pausas breves caminando o moviendo tobillos antes de continuar.", recSeries:"1", recReps:"20-35 min"},
        {n:"Intervalos suaves",        t:T_S, tip:"Bicicleta", info:"Combina periodos suaves y moderados aumentando ligeramente el esfuerzo sin llegar al agotamiento ni a la sensación de ahogo.", recSeries:"6-8", recReps:"3 min/bloque"},
        {n:"Intervalos moderados",     t:T_S, tip:"Bicicleta", info:"Realiza bloques alternando ritmo suave y moderado manteniendo siempre control respiratorio y sensación de esfuerzo sostenible.", recSeries:"3-4", recReps:"10 min/bloque"},
        {n:"Paseo largo en el parque", t:T_S, tip:"Sin equipamiento", info:"Camina a ritmo cómodo y continuo manteniendo zancada natural y respiración relajada para favorecer circulación y recuperación.", recSeries:"1", recReps:"30-60 min"}
    ] }
};

const GRUPOS = Object.keys(db);
const GRUPOS_SEMANA = GRUPOS.filter(g => g !== 'Drenaje'); // Piernas no aparece en planificación semanal

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
const P_LEGS = ["Drenaje", "Core"];

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
let bibliotecaDia = 'hoy';
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

function showPage(id, btn) {
    try { initAudio(); } catch(e) {}
    if(id === 'rutinaPage' && document.getElementById('rutinaPage').classList.contains('active')) backToGroups();
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    if(btn) btn.classList.add('active'); else { const b = document.getElementById('btn-'+id.replace('Page','')); if(b) b.classList.add('active'); }
    state.activeTab = id; save();
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
    const chips = [
        { key: 'hoy', label: 'Hoy', sub: DIAS_DISPLAY[hoyIdx] },
        ...DIAS_LOGICA.map((d, i) => ({ key: d, label: DIAS_DISPLAY[i].slice(0,3), sub: d }))
    ];
    row.innerHTML = chips.map(c => {
        const grupos = c.key === 'hoy' ? (state.semana[DIAS_LOGICA[hoyIdx]]||[]) : (state.semana[c.key]||[]);
        const tieneGrupos = grupos.length > 0;
        const activo = bibliotecaDia === c.key;
        return `<div class="dia-chip${activo ? ' dia-chip-active' : ''}${!tieneGrupos && c.key !== 'hoy' ? ' dia-chip-rest' : ''}" onclick="setDia('${c.key}')">
            <span class="dia-chip-label">${c.label}</span>
        </div>`;
    }).join('');
}

function setDia(dia) {
    bibliotecaDia = dia;
    renderDiaSelector();
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
    if (bibliotecaDia === 'hoy') return null; // null = mostrar todos
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
    if (!nombre) { alert('El nombre es obligatorio.'); return; }
    const datos = {
        n: nombre, name: nombre,
        t: document.getElementById('editExTipo').value,
        tip: 'Sin equipamiento',
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
    if (!confirm(`¿Eliminar "${nombre}"?`)) return;
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

function addToDay(name, group, type, tip) {
    const dia = bibliotecaDia;
    if (dia === 'hoy') {
        if (state.hoy.find(ex => ex.name === name)) { showToast("Ya está en la lista.", "#e74c3c"); return; }
        const exDb = getEjerciciosDe(group).find(e => (e.n||e.name) === name) || {};
        state.hoy.push({ name, group, t: type, tip, series: '', reps: '', peso: '', nota: '', done: false, recSeries: exDb.recSeries||'', recReps: exDb.recReps||'' });
        save(); showToast("¡Añadido a Hoy! ✓");
    } else {
        if (!state.plantillaSemanal) state.plantillaSemanal = {};
        if (!state.plantillaSemanal[dia]) state.plantillaSemanal[dia] = [];
        if (state.plantillaSemanal[dia].find(e => e.name === name)) { showToast("Ya está en ese día.", "#e74c3c"); return; }
        const exDb2 = getEjerciciosDe(group).find(e => (e.n||e.name) === name) || {};
        state.plantillaSemanal[dia].push({ name, group, t: type, tip, series: '', reps: '', peso: '', nota: '', done: false, recSeries: exDb2.recSeries||'', recReps: exDb2.recReps||'' });
        save(); showToast(`✓ Añadido al ${dia}`);
    }
}

function addToToday(name, group, type, tip) { addToDay(name, group, type, tip); }

// ── Lógica de tipo de equipamiento ──────────────────────────────────────────
// Devuelve: 'cardio' | 'bodyweight' | 'band' | 'dumbbell' | 'mixed'
function getEquipType(ex) {
    if (ex.group === "Cardio") return 'cardio';
    const tip = (ex.tip || '').trim();
    if (tip === "Sin equipamiento") return 'bodyweight';
    if (tip === "Solo Gomas")       return 'band';
    if (tip === "Solo Mancuernas")  return 'dumbbell';
    if (tip === "Mancuernas / Gomas") return 'mixed';
    return 'dumbbell'; // fallback
}

// Genera el bloque de inputs de métricas según el tipo de equipamiento
function buildMetricsHtml(ex, i) {
    const tipo = getEquipType(ex);

    if (tipo === 'cardio') {
        return `
            <div class="stats-grid cardio-grid">
                <div class="input-group"><label>Tiempo (min)</label><input type="text" placeholder="00" value="${ex.series}" onchange="updateEx(${i}, 'series', this.value)"></div>
                <div class="input-group"><label>Intensidad</label><input type="text" placeholder="Baja/Media" value="${ex.reps}" onchange="updateEx(${i}, 'reps', this.value)"></div>
            </div>`;
    }

    if (tipo === 'bodyweight') {
        // Sin peso — solo series y reps
        return `
            <div class="stats-grid">
                <div class="input-group"><label>Series</label><input type="number" placeholder="${ex.recSeries||'0'}" value="${ex.series}" onchange="updateEx(${i}, 'series', this.value)" style="${!ex.series?'color:var(--text2)':''}" onfocus="this.style.color=''"></div>
                <div class="input-group"><label>Reps</label><input type="number" placeholder="${ex.recReps||'0'}" value="${ex.reps}" onchange="updateEx(${i}, 'reps', this.value)" style="${!ex.reps?'color:var(--text2)':''}" onfocus="this.style.color=''"></div>
                <div class="input-group"><label>Peso corporal</label><input type="text" placeholder="—" value="" disabled style="opacity:0.4; cursor:not-allowed;"></div>
            </div>`;
    }

    if (tipo === 'band') {
        // Solo gomas — dureza de banda como texto
        return `
            <div class="stats-grid">
                <div class="input-group"><label>Series</label><input type="number" placeholder="0" value="${ex.series}" onchange="updateEx(${i}, 'series', this.value)"></div>
                <div class="input-group"><label>Reps</label><input type="number" placeholder="0" value="${ex.reps}" onchange="updateEx(${i}, 'reps', this.value)"></div>
                <div class="input-group"><label>🪢 Dureza banda</label><input type="text" placeholder="Ligera/Media/Fuerte" value="${ex.peso}" onchange="updateEx(${i}, 'peso', this.value)"></div>
            </div>`;
    }

    if (tipo === 'dumbbell') {
        // Solo mancuernas — peso en kg numérico
        return `
            <div class="stats-grid">
                <div class="input-group"><label>Series</label><input type="number" placeholder="0" value="${ex.series}" onchange="updateEx(${i}, 'series', this.value)"></div>
                <div class="input-group"><label>Reps</label><input type="number" placeholder="0" value="${ex.reps}" onchange="updateEx(${i}, 'reps', this.value)"></div>
                <div class="input-group"><label>Peso (kg)</label><input type="number" placeholder="0" value="${ex.peso}" onchange="updateEx(${i}, 'peso', this.value)"></div>
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

function renderToday() {
    const list = document.getElementById('todayList');
    if(!list) return;
    if(state.hoy.length === 0) { list.innerHTML = "<p style='text-align:center; padding:40px; color:var(--text2)'>No hay ejercicios para hoy.</p>"; updateSessionProgress(); return; }
    
    list.innerHTML = state.hoy.map((ex, i) => {
        const tagClass = ex.t === T_B ? 'tag-basico' : ex.t === T_A ? 'tag-aisla' : 'tag-salud';
        const accentClass = ex.t === T_B ? 'today-card-basico' : ex.t === T_A ? 'today-card-aisla' : 'today-card-salud';
        const doneClass = ex.done ? 'today-card-done' : '';
        return `
        <div class="routine-card ${accentClass} ${doneClass}">
            <div class="today-card-header">
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
                    <div class="ex-actions">
                        <button class="btn-icon" onclick="moverEjercicio(${i},-1)" ${i===0?'disabled':''}><span class="material-symbols-outlined">arrow_upward</span></button>
                        <button class="btn-icon" onclick="moverEjercicio(${i},1)" ${i===state.hoy.length-1?'disabled':''}><span class="material-symbols-outlined">arrow_downward</span></button>
                        <button class="btn-icon btn-swap" onclick="swapExercise(${i})" title="Cambiar"><span class="material-symbols-outlined">cached</span></button>
                        <button class="btn-icon btn-delete" onclick="quitarDeHoy(${i})"><span class="material-symbols-outlined">delete</span></button>
                    </div>
                </div>
            </div>
            <div class="today-card-body">
                ${buildMetricsHtml(ex, i)}
                <div class="notes-row">
                    <div class="input-group"><label>Notas de la sesión</label><input type="text" placeholder="..." value="${ex.nota}" onchange="updateEx(${i}, 'nota', this.value)"></div>
                </div>
            </div>
        </div>
    `}).join('');
    updateSessionProgress();
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
    if (options.length === 0) { alert("No hay más ejercicios de este tipo."); return; }
    const newEx = options[Math.floor(Math.random() * options.length)];
    state.hoy[index].name = newEx.n;
    state.hoy[index].tip = newEx.tip;
    state.hoy[index].series = ''; state.hoy[index].reps = ''; state.hoy[index].peso = ''; state.hoy[index].nota = '';
    state.hoy[index].usaBanda = false;
    save(); renderToday();
}

function updateEx(i, field, val) { state.hoy[i][field] = val; save(); }
function clearHoy() { if(confirm("¡Limpiar todo hoy?")) { state.hoy = []; resetSesionStopwatch(); save(); renderToday(); } }
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

function renderWeek() {
    const planner = document.getElementById('weekPlanner');
    if (!planner) return;
    planner.innerHTML = DIAS_LOGICA.map((dia, idx) => {
        const sel = state.semana[dia] || [];
        const info = getDayColor(sel);
        const plantilla = state.plantillaSemanal ? state.plantillaSemanal[dia] : null;
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
                        <button class="week-btn-secondary" onclick="editarDia('${dia}')"><span class="material-symbols-outlined" style="font-size:14px;">edit</span> Editar</button>
                        <button class="week-btn-primary" onclick="cargarPlantillaEnHoy('${dia}')">Cargar en Hoy →</button>
                    `}
                </div>`;
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
        <div class="day-card">
            <div class="day-header">
                <div class="day-name">${DIAS_DISPLAY[idx]}</div>
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
            </div>
        </div>`;
    }).join('');
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
    if (!(state.semana[nombreDia] || []).length) { alert("Hoy toca descanso según tu programación."); return; }
    if (state.hoy.length > 0 && !confirm("¿Generar nueva rutina? Se borrará la actual.")) return;
    intensityCtx = { modo: 'hoy', dia: nombreDia };
    mostrarModalIntensidad("¿Cómo te encuentras hoy?");
}

function abrirSelectorParaDia(dia) {
    const grupos = state.semana[dia] || [];
    if (!grupos.length) { alert("Este día no tiene grupos configurados."); return; }
    if (state.hoy.length > 0 && !confirm(`¿Generar rutina de ${dia}? Se borrará la actual.`)) return;
    intensityCtx = { modo: 'dia', dia };
    const d = new Date();
    const hoyNombre = DIAS_LOGICA[d.getDay() === 0 ? 6 : d.getDay() - 1];
    mostrarModalIntensidad(dia === hoyNombre ? "¿Cómo te encuentras hoy?" : `¿Intensidad para el ${dia}?`);
}

function abrirGenerarSemana() {
    const count = DIAS_LOGICA.filter(d => (state.semana[d]||[]).length > 0).length;
    if (!count) { alert("Configura grupos en al menos un día."); return; }
    if (!confirm(`¿Generar rutinas para los ${count} días configurados?`)) return;
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

function generarConIntensidad(intensidad) {
    cerrarSelectorIntensidad();
    if (intensityCtx.modo === 'semana') { generarSemanaCompleta(intensidad); return; }
    const dia = intensityCtx.dia;
    const grupos = state.semana[dia] || [];
    const rutina = buildRutina(grupos, intensidad, {});
    if (!state.plantillaSemanal) state.plantillaSemanal = {};
    state.plantillaSemanal[dia] = JSON.parse(JSON.stringify(rutina));

    // Solo carga en Hoy si el día generado ES hoy
    const d = new Date();
    const hoyNombre = DIAS_LOGICA[d.getDay() === 0 ? 6 : d.getDay() - 1];
    if (dia === hoyNombre) {
        state.hoy = rutina;
        save(); showPage('hoyPage');
    } else {
        save(); renderWeek();
        showToast(`✓ Rutina del ${dia} guardada`);
    }
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
        suave:   { dosBasicos: false, totalAisla: 1, salud: 2, coreCount: 1, incluirCardio: true },
        normal:  { dosBasicos: false, totalAisla: null, salud: 2, coreCount: 2, incluirCardio: true },
        intensa: { dosBasicos: true,  totalAisla: null, salud: 2, coreCount: 2, incluirCardio: true }
    }[intensidad];

    // Cardio por intensidad (punto 3)
    const CARDIO_SUAVE  = ['Pedaleo continuo suave','Pedaleo progresivo','Pedaleo con pausas activas'];
    const CARDIO_NORMAL = ['Pedaleo continuo suave','Pedaleo progresivo','Pedaleo con pausas activas','Intervalos suaves','Paseo largo en el parque'];

    const recentHist = getEjerciciosRecientesPorGrupo(3); // punto 5: anti-repetición 3 sesiones
    const recent = {};
    GRUPOS.forEach(g => recent[g] = [...(recentHist[g]||[]), ...(recentExternal[g]||[])]);
    const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];

    // Grupos sin Cardio, sin Core, sin Piernas
    const gruposPrincipales = gruposSeleccionados.filter(g => g !== 'Cardio' && g !== 'Core' && g !== 'Drenaje');
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

    // ── Salud de grupos principales ───────────────────────────────────────────
    const saludShuffled = [...gruposPrincipales.flatMap(g => getEjerciciosDe(g).filter(e => e.t === T_S).map(e => ({...e, group: g})))].sort(() => Math.random() - 0.5);
    let saludSel = 0;
    for (const ex of saludShuffled) {
        if (saludSel >= config.salud) break;
        if (!finalPool.find(f => f.n === ex.n)) { finalPool.push(ex); saludSel++; }
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

    // ── Linfático SIEMPRE (punto 1) ───────────────────────────────────────────
    const LINFATICOS = ['Elevaciones de talones','Bomba de tobillo','Elevación de piernas en pared','Bicicleta en el aire','Marcha en el sitio'];
    if (!finalPool.some(f => LINFATICOS.includes(f.n))) {
        const lp = getEjerciciosDe('Drenaje').filter(e => LINFATICOS.includes(e.n));
        if (lp.length > 0) finalPool.push({...getRandom(lp), group: 'Drenaje'});
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

    if (dia !== hoyNombre) {
        if (!confirm(`Esta rutina es del ${diaDisplay}.\nHoy es ${hoyDisplay}.\n\n¿Quieres cargarla igualmente?\n\nSe guardará en el historial con la fecha de hoy.`)) return;
    }
    if (state.hoy.length > 0 && !confirm(`¿Reemplazar la sesión actual con la rutina del ${diaDisplay}?`)) return;
    state.hoy = plantilla.map(ex => ({...ex, done: false}));
    save();
    showPage('hoyPage');
}

function limpiarPlantillas() { if(confirm("¿Borrar rutinas guardadas?")) { state.plantillaSemanal = {}; save(); renderWeek(); } }

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
    if(state.hoy.length === 0) return;
    if(confirm("¿Guardar en el Log?")) {
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
        syncToSupabase();
    }
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

function borrarHistorialItem(index) { if(confirm("¿Borrar sesión?")) { state.historial.splice(index, 1); save(); renderHistory(); } }

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
            if (!confirm(`¿Restaurar backup ${fechaInfo}?

· ${sesiones} sesiones guardadas

Se reemplazarán todos los datos actuales.`)) {
                event.target.value = '';
                return;
            }
            const stateRestaurado = aplicarMigraciones(datos);
            Object.assign(state, stateRestaurado);
            save();
            showPage('historialPage');
            showToast(`✓ Restauradas ${sesiones} sesiones`);
        } catch(err) {
            alert('Error al leer el archivo. Asegúrate de que es un backup válido de IronLog (.json).');
        }
        event.target.value = '';
    };
    reader.readAsText(file);
}

function borrarTodoHistorial() {
    if (!confirm("¿Borrar todo el historial de sesiones?\n\nEsta acción no se puede deshacer.")) return;
    if (!confirm("¿Seguro? Se perderán todos los registros permanentemente.")) return;
    state.historial = [];
    save();
    renderHistory();
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
                const score = getSessionIntensity(s);
                dayData[d] = (dayData[d] || 0) + score;
                // Points: B=30, A=20, S=10, cardio=min*2
                if (s.ejercicios) s.ejercicios.forEach(ex => {
                    if (ex.group === 'Cardio') totalPuntos += (parseFloat(ex.series)||0)*2;
                    else if (ex.t === T_S) totalPuntos += 10;
                    else {
                        const tipo = getEquipType(ex);
                        const base = ex.t === T_B ? 40 : 30; // B=40, A=30
                        const mult = (tipo==='dumbbell'||tipo==='mixed') ? 1 : tipo==='band' ? 0.75 : 0.5;
                        totalPuntos += base * mult;
                    }
                });
            }
        });
    }
    const maxInt = Math.max(...Object.values(dayData), 1);

    const diasHdr = ['lun','mar','mié','jue','vie','sáb','dom'];

    let g = `<div class="cal-nav">
        <button class="cal-btn" onclick="calPrev()">&#8249;</button>
        <div class="cal-nav-center">
            <span class="cal-title">${MESES[calMonth].toLowerCase()} de ${calYear}</span>
            <span class="cal-puntos">&#129293; ${Math.round(totalPuntos)} puntos</span>
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

function abrirInfoStat(key) {
    const info = STAT_INFO[key];
    if (!info) return;
    document.getElementById('statInfoTitle').innerText = info.titulo;
    document.getElementById('statInfoDesc').innerText = info.desc;
    document.getElementById('statInfoConsejo').innerText = info.consejo;
    document.getElementById('statInfoModal').style.display = 'flex';
}

function cerrarInfoStat(el, e) {
    if (!e || e.target === el) document.getElementById('statInfoModal').style.display = 'none';
}

function updateStats() {
    const container = document.getElementById('statsContent');
    if (!container) return;
    if (state.historial.length === 0) {
        container.innerHTML = "<div style='grid-column: 1 / span 2; text-align:center; color:var(--text2); font-size:11px; padding:16px 0;'>Entrena para ver estadísticas</div>";
        return;
    }

    let totalSesiones = state.historial.length;
    let gruposContador = {};
    let ejerciciosContador = {};
    let typeContador = { [T_B]: 0, [T_A]: 0, [T_S]: 0 };

    state.historial.forEach(sesion => {
        if (sesion.ejercicios) {
            sesion.ejercicios.forEach(ex => {
                gruposContador[ex.group] = (gruposContador[ex.group] || 0) + 1;
                ejerciciosContador[ex.name] = (ejerciciosContador[ex.name] || 0) + 1;
                if (ex.t) typeContador[ex.t] = (typeContador[ex.t] || 0) + 1;
            });
        }
    });

    let topGrupo = "N/A";
    if (Object.keys(gruposContador).length > 0) {
        topGrupo = Object.keys(gruposContador).reduce((a, b) => gruposContador[a] > gruposContador[b] ? a : b);
    }

    let topEjercicio = "N/A";
    if (Object.keys(ejerciciosContador).length > 0) {
        const topKey = Object.keys(ejerciciosContador).reduce((a, b) => ejerciciosContador[a] > ejerciciosContador[b] ? a : b);
        topEjercicio = topKey.length > 22 ? topKey.substring(0, 20) + '…' : topKey;
    }

    const today = new Date();
    const last7 = [];
    for (let i = 0; i < 7; i++) {
        const d = new Date(today); d.setDate(today.getDate() - i);
        last7.push(d.toLocaleDateString());
    }
    const sesSemana = state.historial.filter(h => last7.includes(h.fecha)).length;

    // Días del mes actual
    const thisMonth = [];
    const tempDate = new Date(today.getFullYear(), today.getMonth(), 1);
    while (tempDate <= today) { thisMonth.push(tempDate.toLocaleDateString()); tempDate.setDate(tempDate.getDate() + 1); }
    const sesMes = state.historial.filter(h => thisMonth.includes(h.fecha)).length;

    // Cardio: suma del campo 'series' (minutos) de ejercicios del grupo Cardio
    const getCardioMin = (fechas) => {
        let min = 0;
        state.historial.filter(h => fechas.includes(h.fecha)).forEach(sesion => {
            if (sesion.ejercicios) sesion.ejercicios.forEach(ex => {
                if (ex.group === 'Cardio' && ex.series) min += parseFloat(ex.series) || 0;
            });
        });
        return Math.round(min);
    };
    const cardioSemana = getCardioMin(last7);
    const cardioMes = getCardioMin(thisMonth);

    const uniqueDatesSet = new Set(state.historial.map(h => h.fecha));

    // Racha actual: se permite hasta 2 días de descanso consecutivos por semana
    let racha = 0;
    let checkDate = new Date(today);
    let descConsec = 0;
    for (let i = 0; i <= 365; i++) {
        const ds = checkDate.toLocaleDateString();
        if (uniqueDatesSet.has(ds)) { racha++; descConsec = 0; }
        else { descConsec++; if (descConsec > 2) break; }
        checkDate.setDate(checkDate.getDate() - 1);
    }

    // Racha máxima histórica (mismo criterio)
    const startHist = new Date(today); startHist.setDate(startHist.getDate() - 730);
    let maxRacha = 0, tempRacha = 0, tempDesc = 0;
    const histCheck = new Date(startHist);
    while (histCheck <= today) {
        if (uniqueDatesSet.has(histCheck.toLocaleDateString())) { tempRacha++; tempDesc = 0; if (tempRacha > maxRacha) maxRacha = tempRacha; }
        else { tempDesc++; if (tempDesc > 2) { tempRacha = 0; tempDesc = 0; } }
        histCheck.setDate(histCheck.getDate() + 1);
    }

    const totalTypes = (typeContador[T_B] || 0) + (typeContador[T_A] || 0) + (typeContador[T_S] || 0);
    const pctB = totalTypes > 0 ? Math.round((typeContador[T_B] || 0) / totalTypes * 100) : 0;
    const pctA = totalTypes > 0 ? Math.round((typeContador[T_A] || 0) / totalTypes * 100) : 0;
    const pctS = totalTypes > 0 ? Math.round((typeContador[T_S] || 0) / totalTypes * 100) : 0;

    // Días de descanso esta semana
    const descSemana = 7 - sesSemana;

    // Semanas activas este mes
    const semanasActivas = (() => {
        const weeks = new Set();
        thisMonth.forEach((ds, idx) => { if (uniqueDatesSet.has(ds)) weeks.add(Math.floor(idx / 7)); });
        return weeks.size;
    })();

    // Grupo más descuidado (últimos 30 días, excluye Cardio)
    const last30 = [];
    for (let i = 0; i < 30; i++) { const d = new Date(today); d.setDate(today.getDate() - i); last30.push(d.toLocaleDateString()); }
    const recentGrupos = {};
    GRUPOS.filter(g => g !== 'Cardio').forEach(g => recentGrupos[g] = 0);
    state.historial.filter(h => last30.includes(h.fecha)).forEach(s => {
        if (s.ejercicios) s.ejercicios.forEach(ex => { if (recentGrupos[ex.group] !== undefined) recentGrupos[ex.group]++; });
    });
    const grupoDesc = Object.keys(recentGrupos).reduce((a, b) => recentGrupos[a] <= recentGrupos[b] ? a : b);

    // Media de ejercicios Salud por sesión (últimas 10 sesiones)
    const ultimas10 = state.historial.slice(0, 10);
    const saludMedia = ultimas10.length > 0
        ? (ultimas10.reduce((acc, s) => acc + (s.ejercicios ? s.ejercicios.filter(e => e.t === T_S).length : 0), 0) / ultimas10.length).toFixed(1)
        : 0;

    container.innerHTML = `
        <div class="stat-box stat-tappable" onclick="abrirInfoStat('sesiones')"><span class="stat-label">Sesiones</span><span class="stat-val">${totalSesiones}</span></div>
        <div class="stat-box stat-tappable" onclick="abrirInfoStat('racha')"><span class="stat-label">🔥 Racha actual</span><span class="stat-val">${racha}<small>días</small></span></div>
        <div class="stat-box stat-tappable" onclick="abrirInfoStat('racha_max')"><span class="stat-label">🏆 Racha máxima</span><span class="stat-val">${maxRacha}<small>días</small></span></div>
        <div class="stat-box stat-tappable" onclick="abrirInfoStat('ses_semana')"><span class="stat-label">📅 Esta semana</span><span class="stat-val">${sesSemana}<small>ses.</small></span></div>
        <div class="stat-box stat-tappable" onclick="abrirInfoStat('descansos')"><span class="stat-label">😴 Descansos semana</span><span class="stat-val">${descSemana}<small>días</small></span></div>
        <div class="stat-box stat-tappable" onclick="abrirInfoStat('cardio_semana')"><span class="stat-label">🚴 Cardio semana</span><span class="stat-val">${cardioSemana}<small>min</small></span></div>
        <div class="stat-box stat-tappable" onclick="abrirInfoStat('cardio_mes')"><span class="stat-label">🚴 Cardio mes</span><span class="stat-val">${cardioMes}<small>min</small></span></div>
        <div class="stat-box stat-tappable" onclick="abrirInfoStat('ses_mes')"><span class="stat-label">📆 Sesiones mes</span><span class="stat-val">${sesMes}</span></div>
        <div class="stat-box stat-tappable" onclick="abrirInfoStat('semanas_activas')"><span class="stat-label">📆 Semanas activas</span><span class="stat-val">${semanasActivas}</span></div>
        <div class="stat-box stat-full stat-tappable" onclick="abrirInfoStat('distribucion')">
            <span class="stat-label">Distribución por tipo <span class="stat-info-hint">· toca para más info</span></span>
            <div class="stat-type-bars">
                <div class="stat-type-row"><span class="stat-type-chip tag tag-basico">B</span><div class="stat-bar-bg"><div class="stat-bar-fill stat-bar-b" style="width:${pctB}%"></div></div><span class="stat-type-pct">${pctB}%</span></div>
                <div class="stat-type-row"><span class="stat-type-chip tag tag-aisla">A</span><div class="stat-bar-bg"><div class="stat-bar-fill stat-bar-a" style="width:${pctA}%"></div></div><span class="stat-type-pct">${pctA}%</span></div>
                <div class="stat-type-row"><span class="stat-type-chip tag tag-salud">S</span><div class="stat-bar-bg"><div class="stat-bar-fill stat-bar-s" style="width:${pctS}%"></div></div><span class="stat-type-pct">${pctS}%</span></div>
            </div>
        </div>
        <div class="stat-box stat-tappable" onclick="abrirInfoStat('top_grupo')"><span class="stat-label">Top Grupo</span><span class="stat-val" style="font-size:13px">${topGrupo}</span></div>
        <div class="stat-box stat-tappable" onclick="abrirInfoStat('top_ejercicio')"><span class="stat-label">Top Ejercicio</span><span class="stat-val" style="font-size:11px; line-height:1.3">${topEjercicio}</span></div>
        <div class="stat-box stat-tappable" onclick="abrirInfoStat('salud_sesion')"><span class="stat-label">🛡️ Salud/sesión</span><span class="stat-val">${saludMedia}<small>ejs.</small></span></div>
        <div class="stat-box stat-tappable" onclick="abrirInfoStat('mas_descuidado')"><span class="stat-label">⚠️ Más descuidado</span><span class="stat-val" style="font-size:11px">${grupoDesc}</span></div>
    `;
}

let audioCtx = null;
function initAudio() { if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)(); if (audioCtx.state === 'suspended') audioCtx.resume(); }
function playEndSound() {
    if (!audioCtx) return; const now = audioCtx.currentTime;
    [523.25, 659.25, 783.99].forEach((f, i) => {
        const o = audioCtx.createOscillator(); const g = audioCtx.createGain();
        o.type = 'triangle'; o.frequency.setValueAtTime(f, now + i*0.15);
        g.gain.setValueAtTime(0, now + i*0.15); g.gain.linearRampToValueAtTime(0.8, now + i*0.15 + 0.05); g.gain.exponentialRampToValueAtTime(0.001, now + i*0.15 + 0.4);
        o.connect(g); g.connect(audioCtx.destination); o.start(now + i*0.15); o.stop(now + i*0.15 + 0.5);
    });
}

let tInterval;
function startTimer(s) {
    initAudio(); clearInterval(tInterval);
    tInterval = setInterval(() => {
        s--; let m = Math.floor(s/60), sc = s%60;
        const disp = document.getElementById('timerDisplay');
        if(disp) disp.innerText = `${m<10?'0':''}${m}:${sc<10?'0':''}${sc}`;
        if(s <= 0) { clearInterval(tInterval); playEndSound(); }
    }, 1000);
}

window.onload = () => {
    showPage(state.activeTab || 'rutinaPage');
if (localStorage.getItem('ironlog_dark') === '1') {
    document.body.classList.add('dark-mode');
    const btn = document.getElementById('darkModeBtn');
    if (btn) btn.querySelector('span').innerText = 'light_mode';
}

// ── Botón atrás de Android ────────────────────────────────────────────────────
history.pushState({ ironlog: true }, '');
// ── Supabase sync ────────────────────────────────────────────────────────────
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
    } catch(e) { setSyncIcon('error'); }
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
    const el = document.getElementById('syncIcon');
    if (!el) return;
    const icons = { sync: 'sync', ok: 'cloud_done', error: 'cloud_off' };
    const colors = { sync: 'var(--text2)', ok: '#43A047', error: '#E53935' };
    el.innerText = icons[status]; el.style.color = colors[status];
    if (status === 'sync') el.classList.add('spin'); else el.classList.remove('spin');
}

loadFromSupabase();

function handleBackButton() {
    // 1. Cerrar cualquier modal abierto (por orden de prioridad)
    const modales = ['exInfoModal','editExModal','intensidadModal',
                     'generarSemanaModal','statInfoModal','dayModal'];
    for (const id of modales) {
        const el = document.getElementById(id);
        if (el && el.style.display !== 'none' && el.style.display !== '') {
            el.style.display = 'none';
            return;
        }
    }
    // 2. Vista de ejercicios en Biblioteca → volver a grupos
    const exView = document.getElementById('exerciseView');
    if (exView && exView.style.display !== 'none') {
        backToGroups();
        return;
    }
    // 3. En pestaña principal → no hacer nada (el re-push evita el cierre)
}

window.addEventListener('popstate', () => {
    handleBackButton();
    // Siempre re-añadimos una entrada para que nunca se vacíe el historial
    history.pushState({ ironlog: true }, '');
});
    const splash = document.getElementById('splashScreen');
    if (splash) {
        setTimeout(() => {
            splash.style.opacity = '0';
            setTimeout(() => splash.remove(), 600);
        }, 2500);
    }
};
