# Rubencefit — Registro de versiones

Aplicación personal de entrenamiento. A partir de la v1.0 sale de fase beta.

---

## v2.3

- El generador de rutinas ya no añade nada automáticamente: ni ejercicios de Salud ni el linfático garantizado. Solo genera lo que corresponde a los grupos elegidos para ese día
- Los ejercicios de drenaje y estiramientos se añaden manualmente o seleccionando el grupo Piernas para el día

---

## v2.2

- Nueva opción ⓘ Información en el menú ⋮ de cada ejercicio en Hoy: muestra la descripción de ejecución y la dosis recomendada

---

## v2.1 — Nueva base de ejercicios

- Base de ejercicios completamente renovada: 121 entradas (89 ejercicios + 32 estiramientos) con descripción de ejecución y musculatura en cada uno
- Nuevo grupo Piernas (drenaje linfático) sustituye al grupo Salud; 14 ejercicios de bomba muscular y retorno venoso sin fuerza pura
- Cada grupo muscular incluye ahora sus 4 estiramientos específicos integrados
- Piernas es planificable en la Semana; al generar rutina con Piernas se añaden 3 ejercicios de drenaje
- Los estiramientos de cierre de sesión se eligen ahora de los grupos realmente entrenados
- El formulario de ejercicio propio (+) incluye selector de equipamiento
- Nombres de cardio y linfáticos actualizados en el generador

---

## v2.0 — Simplificación de interfaz

- Temporizador colapsado a una línea fina fuera de la pestaña Hoy; se expande automáticamente al entrar en Hoy o tocándolo
- Ejercicios completados en Hoy se compactan a una sola línea (toca la flecha para expandir y ver los datos)
- Eliminadas las flechas ↑↓ de los ejercicios: el orden se cambia arrastrando desde el asa
- Acciones Cambiar y Quitar agrupadas en un menú ⋮ por ejercicio
- Días de la Semana colapsados por defecto con línea de resumen; el día actual aparece abierto. Toca el encabezado para desplegar
- Las acciones del Log (nube, modo oscuro, exportar, importar, borrar) agrupadas en una hoja de Ajustes accesible desde el botón ⚙

---

## v1.9

- Reordenar ejercicios en Hoy arrastrando desde el asa (⠿) además de las flechas
- Última marca visible en cada ejercicio de Hoy: "Anterior: 3×10 · 12 kg (fecha)" tomada del historial
- La pestaña Semana muestra las fechas reales de la semana en curso, resalta el día actual con borde y etiqueta HOY, y marca con ✓ los días ya entrenados
- Nuevo botón Duplicar en cada día con rutina para copiarla a otro día de la semana

---

## v1.8

- Al generar una rutina ahora se muestra una vista previa con los ejercicios y la duración estimada antes de cargarla
- Botón para regenerar si no convence la propuesta, sin salir del modal

---

## v1.7

- Grupo Core rediseñado: de 19 a 25 ejercicios con crunches, elevaciones de piernas, tijeras, V-sit y crunch con goma

---

## v1.6

- Añadidos puntos semanales junto a los mensuales en el calendario del Log
- Nuevo botón ⓘ al lado de los puntos que abre una ventana explicando cómo se calculan

---

## v1.5

- Eliminado el chip "Hoy" del selector de días en Biblioteca
- El día actual se resalta con un punto verde indicador y queda seleccionado por defecto al abrir la Biblioteca

---

## v1.4

- Transición de deslizamiento entre pestañas ahora fluida y sin parpadeo (animación reiniciada correctamente con reflow)

---

## v1.3

- Corregido el parpadeo al deslizar entre pestañas (se solapaban dos animaciones)

---

## v1.2

- Transición deslizante al cambiar de pestaña: la nueva página entra desde el lateral arrastrando en lugar de aparecer de golpe

---

## v1.2

- Transición deslizante al cambiar de pestaña: la página entra desde el lado correcto según la dirección del gesto

---

## v1.1

- Navegación entre pestañas deslizando el dedo a izquierda o derecha (Biblioteca ↔ Hoy ↔ Semana ↔ Log)
- Corregido: al cambiar de día en Biblioteca, los grupos se actualizan al instante sin salir del menú

---

## v1.0 — Primera versión estable

Salida de la fase beta. Resumen de todo lo que incluye la app a día de hoy.

### Entrenamiento
- **88 ejercicios** repartidos en 8 grupos: Pecho, Espalda, Hombros, Bíceps, Tríceps, Core, Salud y Cardio
- Soporte para banco de pesas: press plano/inclinado, aperturas en banco, remo en araña, pullover, press militar sentado, curl predicador, curl inclinado, extensión overhead y más
- Generador automático de rutinas con tres intensidades (Suave, Normal, Intensa)
- Anti-repetición de ejercicios en las últimas 3 sesiones
- Linfático garantizado en cada rutina generada
- Cardio filtrado según la intensidad elegida

### Grupo Salud (antes Drenaje)
- Ejercicios de drenaje linfático y retorno venoso
- 11 estiramientos tipo yoga: postura del niño, gato-vaca, cobra, esfinge, perro boca abajo, torsión tumbada, apertura de pecho, hombro cruzado, tríceps overhead, paloma tumbado y niño lateral

### Sesión de hoy
- Inputs adaptados al equipamiento (mancuernas en kg, gomas por dureza, peso corporal)
- Series y repeticiones recomendadas como placeholder atenuado
- Los campos se bloquean al marcar el ejercicio como completado
- Al finalizar, opción de añadir automáticamente estiramientos de cierre según los grupos trabajados
- Cronómetro de sesión activa

### Temporizador de descanso
- Presets de 60s, 90s y 120s
- Tiempo personalizado en segundos
- Aviso sonoro + vibración al terminar
- Etiqueta DESCANSO / EN CURSO

### Planificación
- Planificador semanal por días con grupos configurables
- Guía de planificación manual (botón ⓘ en Biblioteca): grupos compatibles, volumen según tiempo y energía, y reglas rápidas
- Carga de rutinas guardadas en el día de hoy

### Log y estadísticas
- Calendario con intensidad visual por día y sistema de puntos
- Panel de rendimiento: racha actual y máxima, descansos, tendencia semanal, cardio (semana/mes/total), último entreno, linfáticos y sesiones por grupo
- Sincronización en la nube (Supabase) con guardado y restauración
- Exportar/importar backup en JSON
- Modo oscuro

### Técnico
- PWA instalable con service worker
- Bloqueo del gesto de recarga (pull-to-refresh)
- Compatible con el botón atrás de Android
- Cierre de sesión y estiramientos mediante modales propios

---

