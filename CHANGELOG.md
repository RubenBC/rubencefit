# Rubencefit — Registro de versiones

Aplicación personal de entrenamiento. A partir de la v1.0 sale de fase beta.

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

