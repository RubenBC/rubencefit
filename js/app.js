const T_B = "Básico"; const T_A = "Aislamiento"; const T_S = "Salud"; 
    
function getIcon(t) {
    if(t === T_B) return '🔥 ';
    if(t === T_A) return '🎯 ';
    if(t === T_S) return '🛡️ ';
    return '';
}

const db = {
    "Pecho": { icon: "expand_less", advice: "Control de hombros y apertura.", data: [
        {n:"Press de Banca Plano",          t:T_B, tip:"Mancuernas / Gomas"},
        {n:"Press Inclinado 45°",     t:T_B, tip:"Mancuernas / Gomas"},
        {n:"Apertura de Pecho en Suelo",           t:T_A, tip:"Solo Mancuernas"},
        {n:"Cruce de Pecho con Goma",       t:T_A, tip:"Solo Gomas"},
        {n:"Retracción Escapular",       t:T_S, tip:"Mancuernas / Gomas"},
        {n:"Rotación Torácica en Suelo",   t:T_S, tip:"Sin equipamiento"},
        {n:"Pullover de Pecho",            t:T_A, tip:"Solo Mancuernas"},
        {n:"Flexión en Rodillas",      t:T_B, tip:"Sin equipamiento"},
        {n:"Press Isométrico de Pecho",          t:T_A, tip:"Solo Mancuernas"},
        {n:"Flexión Declinada en Silla",     t:T_B, tip:"Sin equipamiento"}
    ] },
    "Espalda": { icon: "format_align_justify", advice: "Tracción vertical y horizontal.", data: [
        {n:"Remo con Mancuerna y Apoyo", t:T_B, tip:"Solo Mancuernas"},
        {n:"Jalón al Pecho con Goma",        t:T_B, tip:"Solo Gomas"},
        {n:"Remo Horizontal con Goma",           t:T_B, tip:"Solo Gomas"},
        {n:"Pájaro Posterior con Mancuernas",      t:T_A, tip:"Solo Mancuernas"},
        {n:"Remo Bajo Sentado con Goma",            t:T_A, tip:"Solo Gomas"},
        {n:"Movilidad Espinal Gato-Camello",     t:T_S, tip:"Sin equipamiento"},
        {n:"Colgado Descompresivo",                    t:T_S, tip:"Sin equipamiento"},
        {n:"Tiro Facial Posterior con Goma",           t:T_A, tip:"Solo Gomas"},
        {n:"Extensión Lumbar en Suelo",  t:T_S, tip:"Sin equipamiento"},
        {n:"Remo Inclinado con Mancuernas",        t:T_B, tip:"Solo Mancuernas"},
        {n:"Bisagra de Cadera con Goma",            t:T_B, tip:"Solo Gomas"},
        {n:"Renegade Row",                          t:T_B, tip:"Solo Mancuernas"}
    ] },
    "Piernas": { icon: "directions_walk", advice: "Sin impacto y retorno venoso.", data: [
        {n:"Puente de Glúteos",              t:T_B, tip:"Mancuernas / Gomas"},
        {n:"Zancada Estática",                t:T_B, tip:"Mancuernas / Gomas"},
        {n:"Sentadilla Isométrica en Pared",     t:T_A, tip:"Sin equipamiento"},
        {n:"Curl Femoral en Suelo",           t:T_A, tip:"Sin equipamiento"},
        {n:"Bombeo de Tobillos", t:T_S, tip:"Sin equipamiento"},
        {n:"Estiramiento de Cadera 90/90",    t:T_S, tip:"Sin equipamiento"},
        {n:"Empuje de Cadera con Goma",        t:T_B, tip:"Mancuernas / Gomas"},
        {n:"Apertura Lateral de Cadera con Goma",  t:T_A, tip:"Solo Gomas"},
        {n:"Patada Trasera en Cuadrupedia",    t:T_A, tip:"Mancuernas / Gomas"},
        {n:"Elevación de Piernas Tumbado",t:T_S, tip:"Sin equipamiento"},
        {n:"Pumping de Gemelos Sentado",  t:T_S, tip:"Sin equipamiento"},
        {n:"Drenaje con Piernas Elevadas",t:T_S, tip:"Sin equipamiento"},
        {n:"Marcha Sentado Rodillas Altas",t:T_S, tip:"Sin equipamiento"},
        {n:"Sentadilla Goblet",            t:T_B, tip:"Solo Mancuernas"}
    ] },
    "Hombros": { icon: "accessibility_new", advice: "Cuidado del manguito rotador.", data: [
        {n:"Press Militar con Mancuernas",     t:T_B, tip:"Mancuernas / Gomas"},
        {n:"Elevación Lateral Controlada",      t:T_A, tip:"Mancuernas / Gomas"},
        {n:"Vuelo Posterior Inclinado",    t:T_A, tip:"Mancuernas / Gomas"},
        {n:"Rotación Externa de Manguito",     t:T_S, tip:"Solo Gomas"},
        {n:"Press Arnold con Mancuernas",        t:T_B, tip:"Solo Mancuernas"},
        {n:"Elevación Frontal con Mancuernas",    t:T_A, tip:"Mancuernas / Gomas"},
        {n:"Separación Posterior con Goma",   t:T_S, tip:"Solo Gomas"},
        {n:"Remo al Cuello con Goma",             t:T_B, tip:"Solo Gomas"},
        {n:"Wall Slide",                          t:T_S, tip:"Sin equipamiento"},
        {n:"Y-T-W Escapular",                     t:T_S, tip:"Sin equipamiento"}
    ] },
    "Bíceps": { icon: "fitness_center", advice: "Flexión de codo técnica.", data: [
        {n:"Curl Martillo",            t:T_B, tip:"Solo Mancuernas"},
        {n:"Curl de Bíceps con Goma", t:T_B, tip:"Mancuernas / Gomas"},
        {n:"Curl Concentrado",        t:T_A, tip:"Solo Mancuernas"},
        {n:"Estiramiento de Bíceps en Pared", t:T_S, tip:"Sin equipamiento"},
        {n:"Curl Inclinado con Mancuerna", t:T_B, tip:"Solo Mancuernas"},
        {n:"Curl con Giro de Supinación",           t:T_A, tip:"Solo Mancuernas"},
        {n:"Curl Predicador con Goma",             t:T_A, tip:"Mancuernas / Gomas"},
        {n:"Curl Inverso",           t:T_B, tip:"Mancuernas / Gomas"}
    ] },
    "Tríceps": { icon: "rebase_edit", advice: "Extensión de codo técnica.", data: [
        {n:"Extensión de Tríceps sobre Cabeza",      t:T_B, tip:"Mancuernas / Gomas"},
        {n:"Copa Unilateral de Tríceps",         t:T_B, tip:"Solo Mancuernas"},
        {n:"Patada de Tríceps",          t:T_A, tip:"Mancuernas / Gomas"},
        {n:"Press Francés en Suelo",                  t:T_A, tip:"Solo Mancuernas"},
        {n:"Press de Tríceps hacia Abajo",     t:T_B, tip:"Solo Gomas"},
        {n:"Fondos de Tríceps en Silla",                 t:T_B, tip:"Sin equipamiento"},
        {n:"Flexión Agarre Estrecho", t:T_A, tip:"Sin equipamiento"},
        {n:"Extensión de Tríceps Tumbado",   t:T_A, tip:"Solo Mancuernas"}
    ] },
    "Core": { icon: "self_improvement", advice: "Estabilidad abdominal.", data: [
        {n:"Plancha Frontal",               t:T_B, tip:"Sin equipamiento"},
        {n:"Press Antirotación con Goma",       t:T_S, tip:"Solo Gomas"},
        {n:"Insecto Muerto",         t:T_S, tip:"Sin equipamiento"},
        {n:"Vacío Abdominal",     t:T_S, tip:"Sin equipamiento"},
        {n:"Perro-Pájaro",      t:T_S, tip:"Sin equipamiento"},
        {n:"Plancha Lateral",                     t:T_B, tip:"Sin equipamiento"},
        {n:"Posición de Banana",            t:T_B, tip:"Sin equipamiento"},
        {n:"Crunch de Bajo Impacto",      t:T_S, tip:"Sin equipamiento"},
        {n:"Puente de Glúteos con Marcha",t:T_S, tip:"Sin equipamiento"}
    ] },
    "Cardio": { icon: "directions_run", advice: "Bajo impacto linfático.", data: [
        {n:"Bicicleta Estática",       t:T_S, tip:"Bicicleta"},
        {n:"Caminata Activa con Braceo",              t:T_S, tip:"Sin equipamiento"},
        {n:"Boxeo Sentado",        t:T_S, tip:"Sin equipamiento"},
        {n:"Círculos de Brazos",           t:T_S, tip:"Sin equipamiento"},
        {n:"Marcha Sentado",    t:T_S, tip:"Sin equipamiento"},
        {n:"Paseo Intenso",              t:T_S, tip:"Sin equipamiento"}
    ] }
};

const GRUPOS = Object.keys(db);
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

let swInterval = null;
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
    if(id === 'rutinaPage') renderGroups();
    if(id === 'hoyPage') renderToday();
    if(id === 'semanaPage') renderWeek();
    if(id === 'historialPage') renderHistory();
}

function renderGroups() { document.getElementById('groupGrid').innerHTML = GRUPOS.map(g => `<div class="group-card" onclick="showExercises('${g}')"><span class="material-symbols-outlined">${db[g].icon}</span><div style="font-weight:bold;">${g}</div></div>`).join(''); }

function showExercises(group) {
    document.getElementById('groupsView').style.display = 'none';
    document.getElementById('exerciseView').style.display = 'block';
    document.getElementById('selectedGroupName').innerText = group;
    document.getElementById('groupAdvice').innerText = db[group].advice;
    document.getElementById('exerciseList').innerHTML = db[group].data.map(ex => `
        <div class="routine-card">
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <div><b>${getIcon(ex.t)}${ex.n}</b><br><small>${ex.tip}</small></div>
                <span class="tag ${ex.t === T_B ? 'tag-basico' : ex.t === T_A ? 'tag-aisla' : 'tag-salud'}">${ex.t}</span>
            </div>
            <button onclick="addToToday('${ex.n}', '${group}', '${ex.t}', '${ex.tip}')" style="background:var(--primary); color:white; border:none; padding:10px; border-radius:8px; margin-top:12px; width:100%;">AÑADIR A HOY</button>
        </div>
    `).join('');
}

function backToGroups() { document.getElementById('groupsView').style.display = 'block'; document.getElementById('exerciseView').style.display = 'none'; }

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

function addToToday(name, group, type, tip) {
    if(state.hoy.find(ex => ex.name === name)) { showToast("Ya está en la lista.", "#e74c3c"); return; }
    state.hoy.push({ name, group, t: type, tip: tip, series: '', reps: '', peso: '', nota: '', done: false });
    save(); showToast("¡Añadido! ✓");
}

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
                <div class="input-group"><label>Series</label><input type="number" placeholder="0" value="${ex.series}" onchange="updateEx(${i}, 'series', this.value)"></div>
                <div class="input-group"><label>Reps</label><input type="number" placeholder="0" value="${ex.reps}" onchange="updateEx(${i}, 'reps', this.value)"></div>
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
    if(state.hoy.length === 0) { list.innerHTML = "<p style='text-align:center; padding:40px; color:var(--text2)'>No hay ejercicios para hoy.</p>"; return; }
    
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

function renderWeek() {
    const planner = document.getElementById('weekPlanner');
    if(!planner) return;
    planner.innerHTML = DIAS_LOGICA.map((dia, idx) => {
        const sel = state.semana[dia] || [];
        const info = getDayColor(sel);
        const plantilla = state.plantillaSemanal ? state.plantillaSemanal[dia] : null;
        const isOpen = state.openMenu === dia;
        const labelsHtml = sel.length > 0 ? sel.map(g => `<span class="mini-tag">${g}</span>`).join('') : '<span style="font-size:10px; color:var(--text2)">Descanso</span>';

        let previewHtml = '';
        if (plantilla && plantilla.length > 0) {
            previewHtml = `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px;">
                    <button class="btn-preview" onclick="togglePreview('${dia}')" style="margin-top:0;">
                        <span class="material-symbols-outlined" style="font-size:16px;">visibility</span> VER RUTINA
                    </button>
                    <button class="btn-preview" onclick="cargarPlantillaEnHoy('${dia}')" style="margin-top:0; color:white; background:var(--primary); padding:6px 12px; border-radius:8px;">
                        <span class="material-symbols-outlined" style="font-size:16px;">file_download</span> RECUPERAR
                    </button>
                </div>
                <div id="preview-${dia}" class="preview-list" style="display:none;">
                    ${plantilla.map(ex => `<div class="preview-item">${getIcon(ex.t)} ${ex.name}</div>`).join('')}
                </div>
            `;
        }

        return `
        <div class="day-card" style="background-color: ${info.c}">
            <div class="day-header">
                <div class="day-name">${DIAS_DISPLAY[idx]}</div>
                <div class="day-status">${info.s}</div>
            </div>
            <div class="selected-labels">
                ${labelsHtml}
                ${plantilla ? '<span class="mini-tag template">📋 CARGADA</span>' : ''}
            </div>
            ${previewHtml}
            <button onclick="toggleDayMenu('${dia}')" style="background:rgba(0,0,0,0.05); border:none; width:100%; padding:8px; border-radius:10px; font-size:11px; font-weight:bold; display:flex; align-items:center; justify-content:center; gap:5px; margin-top:8px;">
                CONFIGURAR GRUPOS <span class="material-symbols-outlined" style="font-size:16px;">${isOpen ? 'expand_less' : 'expand_more'}</span>
            </button>
            <div class="group-selector ${isOpen ? 'open' : ''}">
                ${GRUPOS.map(g => `
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

function abrirSelectorIntensidad() {
    const d = new Date();
    const diaIdx = d.getDay() === 0 ? 6 : d.getDay() - 1;
    const nombreDia = DIAS_LOGICA[diaIdx];
    const gruposSeleccionados = state.semana[nombreDia];
    if (!gruposSeleccionados || gruposSeleccionados.length === 0) {
        alert("Hoy toca descanso según tu programación.");
        return;
    }
    if (state.hoy.length > 0 && !confirm("¿Generar nueva rutina? Se borrará la actual.")) return;
    document.getElementById('intensityModal').style.display = 'flex';
}

function cerrarSelectorIntensidad(el, e) {
    if (!e || e.target === el) document.getElementById('intensityModal').style.display = 'none';
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

function generarRutinaInteligente(intensidad) {
    cerrarSelectorIntensidad();
    const d = new Date();
    const diaIdx = d.getDay() === 0 ? 6 : d.getDay() - 1;
    const nombreDia = DIAS_LOGICA[diaIdx];
    const gruposSeleccionados = state.semana[nombreDia];

    const config = {
        suave:   { dosBasicos: false, aislaPorGrupo: 0, totalAisla: 1, salud: 2, incluirCardio: true },
        normal:  { dosBasicos: false, aislaPorGrupo: 1, totalAisla: null, salud: 2, incluirCardio: true },
        intensa: { dosBasicos: true,  aislaPorGrupo: 1, totalAisla: null, salud: 1, incluirCardio: true }
    }[intensidad];

    const recent = getEjerciciosRecientesPorGrupo(2);
    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const gruposSinCardio = gruposSeleccionados.filter(g => g !== 'Cardio');
    let finalPool = [];

    // 1. Básicos (1 por grupo, evitando repetir últimos 2)
    gruposSinCardio.forEach(g => {
        const sinRepetir = db[g].data.filter(e => e.t === T_B && !recent[g].includes(e.n));
        const pool = sinRepetir.length > 0 ? sinRepetir : db[g].data.filter(e => e.t === T_B);
        if (pool.length > 0) finalPool.push({...getRandom(pool), group: g});
    });

    // 2. Segundo básico por grupo (solo modo intensa)
    if (config.dosBasicos) {
        gruposSinCardio.forEach(g => {
            const yaIncluido = finalPool.filter(f => f.group === g).map(f => f.n);
            const pool = db[g].data.filter(e => e.t === T_B && !yaIncluido.includes(e.n) && !recent[g].includes(e.n));
            const fallback = db[g].data.filter(e => e.t === T_B && !yaIncluido.includes(e.n));
            const eleccion = pool.length > 0 ? pool : fallback;
            if (eleccion.length > 0) finalPool.push({...getRandom(eleccion), group: g});
        });
    }

    // 3. Aislamientos
    if (config.totalAisla === 1) {
        // Suave: 1 total
        const todos = gruposSinCardio.flatMap(g => 
            db[g].data.filter(e => e.t === T_A && !recent[g].includes(e.n)).map(e => ({...e, group: g}))
        );
        if (todos.length > 0) finalPool.push(getRandom(todos));
    } else {
        // Normal/Intensa: 1 por grupo
        gruposSinCardio.forEach(g => {
            const sinRepetir = db[g].data.filter(e => e.t === T_A && !recent[g].includes(e.n));
            const pool = sinRepetir.length > 0 ? sinRepetir : db[g].data.filter(e => e.t === T_A);
            if (pool.length > 0) finalPool.push({...getRandom(pool), group: g});
        });
    }

    // 4. Salud (priorizando mismo grupo trabajado)
    const saludDelGrupo = gruposSinCardio.flatMap(g =>
        db[g].data.filter(e => e.t === T_S).map(e => ({...e, group: g}))
    );
    const saludShuffled = [...saludDelGrupo].sort(() => Math.random() - 0.5);
    let saludSel = 0;
    for (const ex of saludShuffled) {
        if (saludSel >= config.salud) break;
        if (!finalPool.find(f => f.n === ex.n)) { finalPool.push(ex); saludSel++; }
    }

    // 5. Cardio (si está en el día programado)
    if (config.incluirCardio && gruposSeleccionados.includes('Cardio')) {
        const cardios = db.Cardio.data.map(e => ({...e, group: 'Cardio'}));
        if (cardios.length > 0) finalPool.push(getRandom(cardios));
    }

    state.hoy = finalPool.map(ex => ({
        name: ex.n, group: ex.group, t: ex.t, tip: ex.tip,
        series: '', reps: '', peso: '', nota: '', usaBanda: false, done: false
    }));

    if (!state.plantillaSemanal) state.plantillaSemanal = {};
    state.plantillaSemanal[nombreDia] = JSON.parse(JSON.stringify(state.hoy));

    save();
    showPage('hoyPage');
}

function cargarPlantillaEnHoy(dia) {
    if (state.hoy.length > 0 && !confirm(`¿Cargar plantilla de ${dia}?`)) return;
    if (state.plantillaSemanal && state.plantillaSemanal[dia]) {
        state.hoy = state.plantillaSemanal[dia].map(ex => ({...ex}));
        save(); showPage('hoyPage');
    }
}

function limpiarPlantillas() { if(confirm("¿Borrar rutinas guardadas?")) { state.plantillaSemanal = {}; save(); renderWeek(); } }

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
    }
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
    document.getElementById('dayModalBody').innerHTML = body;
    document.getElementById('dayModal').style.display = 'flex';
}

function closeDayModal(el, e) {
    if (!e || e.target === el) document.getElementById('dayModal').style.display = 'none';
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
        <div class="stat-box"><span class="stat-label">Sesiones</span><span class="stat-val">${totalSesiones}</span></div>
        <div class="stat-box"><span class="stat-label">🔥 Racha actual</span><span class="stat-val">${racha}<small>días</small></span></div>
        <div class="stat-box"><span class="stat-label">🏆 Racha máxima</span><span class="stat-val">${maxRacha}<small>días</small></span></div>
        <div class="stat-box"><span class="stat-label">📅 Esta semana</span><span class="stat-val">${sesSemana}<small>ses.</small></span></div>
        <div class="stat-box"><span class="stat-label">😴 Descansos semana</span><span class="stat-val">${descSemana}<small>días</small></span></div>
        <div class="stat-box"><span class="stat-label">🚴 Cardio semana</span><span class="stat-val">${cardioSemana}<small>min</small></span></div>
        <div class="stat-box"><span class="stat-label">🚴 Cardio mes</span><span class="stat-val">${cardioMes}<small>min</small></span></div>
        <div class="stat-box"><span class="stat-label">📆 Sesiones mes</span><span class="stat-val">${sesMes}</span></div>
        <div class="stat-box"><span class="stat-label">📆 Semanas activas</span><span class="stat-val">${semanasActivas}</span></div>
        <div class="stat-box stat-full">
            <span class="stat-label">Distribución por tipo</span>
            <div class="stat-type-bars">
                <div class="stat-type-row"><span class="stat-type-chip tag tag-basico">B</span><div class="stat-bar-bg"><div class="stat-bar-fill stat-bar-b" style="width:${pctB}%"></div></div><span class="stat-type-pct">${pctB}%</span></div>
                <div class="stat-type-row"><span class="stat-type-chip tag tag-aisla">A</span><div class="stat-bar-bg"><div class="stat-bar-fill stat-bar-a" style="width:${pctA}%"></div></div><span class="stat-type-pct">${pctA}%</span></div>
                <div class="stat-type-row"><span class="stat-type-chip tag tag-salud">S</span><div class="stat-bar-bg"><div class="stat-bar-fill stat-bar-s" style="width:${pctS}%"></div></div><span class="stat-type-pct">${pctS}%</span></div>
            </div>
        </div>
        <div class="stat-box"><span class="stat-label">Top Grupo</span><span class="stat-val" style="font-size:13px">${topGrupo}</span></div>
        <div class="stat-box"><span class="stat-label">Top Ejercicio</span><span class="stat-val" style="font-size:11px; line-height:1.3">${topEjercicio}</span></div>
        <div class="stat-box"><span class="stat-label">🛡️ Salud/sesión</span><span class="stat-val">${saludMedia}<small>ejs.</small></span></div>
        <div class="stat-box"><span class="stat-label">⚠️ Más descuidado</span><span class="stat-val" style="font-size:11px">${grupoDesc}</span></div>
    `;
}

let audioCtx = null;
function initAudio() { if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)(); if (audioCtx.state === 'suspended') audioCtx.resume(); }
function playEndSound() {
    if (!audioCtx) return; const now = audioCtx.currentTime;
    [523.25, 659.25, 783.99].forEach((f, i) => {
        const o = audioCtx.createOscillator(); const g = audioCtx.createGain();
        o.type = 'sine'; o.frequency.setValueAtTime(f, now + i*0.15);
        g.gain.setValueAtTime(0, now + i*0.15); g.gain.linearRampToValueAtTime(0.1, now + i*0.15 + 0.05); g.gain.exponentialRampToValueAtTime(0.001, now + i*0.15 + 0.4);
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

window.onload = () => { showPage(state.activeTab || 'rutinaPage'); };
