# Rubencefit — Registro de versiones

Aplicación personal de entrenamiento. A partir de la v1.0 sale de fase beta.

---

## v4.9

- Las tarjetas de grupo en la Biblioteca muestran ahora una mini silueta del cuerpo humano con el grupo muscular correspondiente resaltado en rojo, en lugar del icono genérico. Dibujada en SVG (ligera, sin imágenes externas)
- Cada grupo resalta su zona: pecho, espalda, hombros, bíceps, tríceps, core, piernas (muslos), circulación (pantorrillas) y cardio (zona central)

---

## v4.8 — Piernas y Circulación separados

- El antiguo grupo "Piernas" (que mezclaba fuerza y drenaje) se divide en dos grupos independientes:
  - **Piernas**: fuerza de pierna bilateral y sin impacto (sentadilla a banco, puente de glúteo, peso muerto rumano, elevación de talones, sentadilla isométrica)
  - **Circulación**: drenaje linfático y movilidad de bajo impacto (bomba de tobillo, piernas en la pared, bicicleta en el aire, respiración, automasaje...)
- Migración automática: tus ejercicios de drenaje existentes pasan solos al grupo Circulación; los de fuerza se quedan en Piernas
- Ahora el resumen de grupos de cada sesión es honesto: "Piernas" solo aparece cuando hay fuerza real de pierna, no por el drenaje
- El bloque "+ Drenaje" de Hoy y los estiramientos de cierre usan el nuevo grupo Circulación

---

## v4.7

- Corregido: las etiquetas de grupos musculares de cada sesión mostraban "Piernas" en todas, porque contaban los ejercicios de drenaje (bomba de tobillo, piernas en la pared). Ahora solo cuentan el trabajo real de fuerza (Básico/Aislamiento), no el drenaje ni los estiramientos. Así "Piernas" aparece solo en las sesiones con pierna de verdad

---

## v4.6 — Limpieza profunda

Eliminado todo el código muerto del antiguo modo semanal y su generador de rutinas, que ya no tenían entrada de usuario tras el paso al modo cíclico:

- Generador por intensidad completo: selector de intensidad, vista previa, buildRutina y funciones asociadas (~14 funciones)
- Sus dos modales del HTML (intensidad y vista previa de rutina)
- Función generarSemanaCompleta y generarRutinaInteligente
- CSS muerto: clases de los chips de día, del generador y de la antigua vista semanal (~2.600 caracteres)
- Variables globales huérfanas del generador

La app queda más ligera y mantenible, sin ningún cambio visible en su funcionamiento: todo el flujo del modo cíclico permanece intacto y verificado.

---

## v4.5 — Biblioteca coherente con el modo cíclico

- La Biblioteca ya no muestra los días de la semana (resto del modo semanal antiguo, que confundía)
- Ahora muestra un indicador claro de destino: "Añadiendo a la sesión de Hoy" o "Añadiendo a [Sesión X] del ciclo" según desde dónde llegues
- Entrar a la Biblioteca desde la barra inferior añade a Hoy; entrar desde el botón "+ Añadir ejercicio" de una sesión del ciclo añade a esa sesión
- Todos los grupos musculares se muestran siempre (ya no se atenúan por día)

---

## v4.4 — Periodización y avisos de equilibrio (Fases 4 y 5)

- Periodización automática: la app cuenta las semanas que llevas en el bloque actual (Fuerza/Hipertrofia) y, pasadas 4, te sugiere cambiar al otro con un botón. La cabecera del ciclo muestra "semana N"
- Recordatorio de descarga: a las 8 semanas, aviso para hacer una semana suave de recuperación
- Avisos de equilibrio empuje/tirón: si en los últimos 30 días hay desbalance (2+ sesiones de diferencia), te avisa en el Ciclo y en Hoy de qué priorizar, pensado para tu postura
- Corregido un bug de interpretación de fechas que podía descuadrar el conteo de semanas según la configuración regional del dispositivo: ahora el parseo es robusto e independiente del formato

Con esto el modo cíclico queda completo: secuencia de sesiones, sugerencia de peso, periodización y avisos inteligentes, todo por reglas, sin coste ni dependencias.

---

## v4.4 — Periodización y avisos de equilibrio (Fases 4 y 5)

Completa el modo cíclico con las capas inteligentes:

- **Periodización automática**: la app cuenta las semanas que llevas en el bloque actual (Fuerza/Hipertrofia) y, pasadas 4, te avisa en la pantalla Ciclo con un botón para cambiar de bloque. El cambio reinicia el contador
- **Recordatorio de descarga**: a las 8 semanas, sugiere una semana suave de recuperación
- **Avisos de equilibrio empuje/tirón**: analiza tus últimos 30 días y, si hay desbalance (2+ sesiones de diferencia), te avisa para que priorices el lado que falta. El aviso aparece tanto en la pantalla Ciclo como en Hoy al ir a entrenar
- Indicador de "semana N" del bloque en la tarjeta de info del ciclo

Con esto el modo cíclico está completo: secuencia de sesiones, sugerencia de peso, periodización y equilibrio, todo con reglas (sin coste, sin conexión).

---

## v4.3 — Mejoras del modo cíclico

- Sugerencia de peso: al entrenar, el campo de peso muestra como referencia (placeholder) el peso de tu última vez en ese ejercicio
- Indicador visual del ciclo en Hoy: cuando entrenas una sesión del ciclo, ves los puntos A·B·C·D con la actual resaltada, o "Entrenamiento libre" si es suelto
- Botón de descanso rápido: en el menú de cada ejercicio, "Descanso 90s" y "Descanso 60s" que arrancan el temporizador al instante
- Limpieza técnica: eliminadas 11 funciones del antiguo modo semanal que ya no se usaban (la app es más ligera y mantenible)

---

## v4.2

- Cada sesión del ciclo muestra ahora los grupos musculares que trabaja (ej. "Espalda · Bíceps · Piernas"), además de su nombre. Visible en la pantalla Ciclo, en Hoy y en el selector de sesión

---

## v4.1 (Fase 2) — Pantalla Ciclo

La antigua pestaña Semana es ahora "Mi Ciclo", el gestor de tus sesiones A, B, C, D...

- Ves todas tus sesiones del ciclo en orden, con cuál toca ahora resaltada
- Crear sesión nueva (con nombre: Empuje, Tirón, Pierna...)
- Renombrar, reordenar (subir/bajar) y borrar sesiones
- Marcar cualquier sesión como "la actual"
- Añadir o quitar ejercicios de cada sesión (los ejercicios se eligen desde la Biblioteca)
- Indicador del bloque actual (Fuerza/Hipertrofia) y de cuántas sesiones tiene tu ciclo
- Borrar una sesión no afecta a tu historial

Ahora puedes dejar tu ciclo en las sesiones de fuerza que quieras (p. ej. 4: Tirón, Empuje, Tirón, Empuje) y borrar las de cardio/movilidad que la migración traía, dejándolas como entrenamiento libre.

---

## v4.0 (Fase 1) — Modo cíclico: motor de secuencia

Primer paso del nuevo modo cíclico, que sustituye los días fijos de la semana por una secuencia de sesiones (A → B → C → D...) que avanzas a tu ritmo.

- Tu rutina semanal actual se convierte automáticamente en sesiones del ciclo (migración suave, sin perder nada)
- Al abrir Hoy, la app te dice qué sesión toca ("Toca Sesión B · Tirón") con sus ejercicios listos
- Botón para empezar la sesión que toca, hacer otra (saltar/repetir, el ciclo continúa desde ahí), o entrenamiento libre (cardio/paseo que NO consume el ciclo)
- El ciclo SOLO avanza cuando completas y guardas una sesión del ciclo; los días de descanso o cardio libre no lo mueven
- Las sesiones del ciclo quedan marcadas en el historial

Próximas fases: sugerencia de peso, periodización automática y avisos de equilibrio.

---

## v3.6 — Importar/exportar rutina por separado

- El menú de Ajustes separa ahora dos tipos de copia:
  - Copia completa (rutina + progresos): se exporta/importa entera y sigue sincronizándose con la nube, como hasta ahora
  - Solo rutina semanal: exporta/importa únicamente la planificación (días, ejercicios y tus ejercicios personalizados), guardada solo en local
- Importar una rutina NO toca tu historial ni tus progresos: solo reemplaza la planificación semanal
- Al importar rutina, los ejercicios personalizados se fusionan sin perder los que ya tuvieras
- También se puede importar la rutina desde un backup completo (extrae solo la parte de planificación)

---

## v3.5 — Auditoría completa

Revisión técnica exhaustiva (código, textos, contenido de fitness). Correcciones:
- Textos de consejos desactualizados: decían "5 días/sesiones semanales" cuando la rutina actual son 6 días. Actualizados a 6 días, racha 10-25, mes 24-26 sesiones
- Referencias al grupo "Salud" (eliminado en v2.1) en los consejos, sustituidas por "tipo S (estiramientos y drenaje)"
- Consejo de cardio decía "30-60 min/semana" pero la barra de progreso usa 160: alineados ambos al objetivo real de 160 min semanales y ~600-700 mensuales, con mención al SAF
- appVersion de los backups exportados pasa de "IronLog" a "Rubencefit"
- Nombre de archivo de backup: rubencefit-backup-FECHA.json
- Verificado a fondo: sintaxis, sin duplicados de variables/funciones, accesos a arrays protegidos, divisiones sin riesgo de cero, parseo de fechas correcto, detección de equipamiento robusta, y contenido técnico de los ejercicios (Tate press, flexiones inclinadas/declinadas, Curl 21) correcto

---

## v3.4

- Corregido: la tendencia semanal contaba entradas del historial en lugar de días únicos entrenados — si un día tenías 2 sesiones guardadas contaba doble. Ahora cuenta días distintos correctamente

---

## v3.3

- Semana estadística ahora es lunes a domingo real (se resetea el lunes a las 00:00, no los últimos 7 días móviles)
- Nueva tarjeta Progresión de peso: muestra los ejercicios con más historial de peso registrado, comparando el primer valor con el último
- Barra de progreso de cardio semanal vs objetivo (160 min/semana) con porcentaje y estado
- Tendencia semanal rediseñada: flecha grande + comparativa numérica clara (X esta semana · Y anterior)
- Barras de sesiones por grupo más grandes: texto 13px y números en 16px negrilla

---

## v3.2 — Revisión de calidad + fix modal sync

- Corregido: modal de sincronización aparecía por debajo del sheet de Ajustes (z-index)
- Revisión minuciosa de toda la app. Bugs adicionales encontrados y corregidos:
  - SW y splash desincronizados (v3.3 vs v3.2) — unificados
  - Al guardar sesión, openExMenu y expandedDone no se reseteaban, podían quedar sucios para la próxima sesión
  - exInfoModal y editExModal con z-index:9000 podían quedar bajo otros modales (elevados a 99999)
  - IDs fantasma (generarSemanaModal, statInfoModal) en la lista del botón atrás sin existir en el HTML

---

## v3.2

- Corregido: el modal de sincronización aparecía por debajo del sheet de Ajustes al pulsar el botón de nube desde ahí. Ahora se cierra Ajustes y el modal de sync aparece encima correctamente

---

## v3.3

- Al pulsar sincronizar en la nube desde Ajustes, ahora se cierra la hoja de Ajustes y se muestra el modal de sincronización (antes quedaba detrás)
- Corregido el botón atrás de Android: la lista de modales estaba desactualizada (id antiguo intensidadModal y faltaban varios modales nuevos), así que atrás ahora cierra correctamente cualquier modal abierto

---

## v3.2

- La pestaña Hoy muestra el tiempo estimado de la sesión bajo la barra de progreso, calculado por lo alto según los ejercicios presentes y actualizado al añadir o quitar

---

## v3.1

- Corregido el error al reordenar ejercicios arrastrando en Hoy: los chips de bloque rápido estaban dentro de la zona arrastrable y descuadraban los índices, corrompiendo la lista. Ahora están fuera y el reordenado es estable

---

## v3.0 — Modelo unificado: el plan y la sesión de hoy son lo mismo

Cambio profundo en cómo se relacionan la pestaña Hoy y la Semana. Adiós a la dualidad "plan guardado vs sesión copiada".

- Al abrir Hoy, si no hay sesión en marcha y existe un plan para el día actual, se carga solo, sin pedir nada (salvo que ya hayas entrenado hoy)
- Añadir un ejercicio desde la Biblioteca con el día de hoy seleccionado va directo a la sesión de Hoy
- Generar rutina para hoy la carga directamente en Hoy
- Quitar, cambiar o reordenar ejercicios en Hoy solo afecta a la sesión de hoy: tu plan semanal queda intacto para la próxima semana (un mal día no rompe la planificación)
- En la pestaña Semana, el día de hoy muestra en vivo tu sesión activa (marcada con 🟢) en lugar del plan; el botón pasa a "Ir a Hoy" y se edita desde allí
- Desaparece el paso manual "Cargar en Hoy" para el día actual

> Recomendación: exporta un backup desde ⚙ Ajustes antes de actualizar, por seguridad.

---

## v2.5

- Corregido: el botón "Generar rutina de hoy" de la pantalla vacía no abría el selector de intensidad (id de modal incorrecto)
- Eliminados todos los alert() y confirm() nativos restantes (11), que Chrome bloquea silenciosamente en PWA. Sustituidos por avisos toast y un nuevo modal de confirmación propio
- Afecta a: generar rutina, limpiar hoy, eliminar ejercicio propio, cargar plantilla de otro día, borrar sesión, borrar plantillas, restaurar backup y borrar historial (con doble confirmación)

---

## v2.4

- Pantalla de Hoy vacía con accesos directos: generar rutina con los grupos del día, cargar el plan guardado del día (si existe) o ir a la Biblioteca
- Chips de bloque rápido en Hoy: "+ Drenaje (3)" añade 3 ejercicios de Piernas y "+ Estiramientos" añade los de cierre según los grupos de la sesión
- Panel de estadísticas reorganizado en 3 tarjetas colapsables (Racha y constancia · Cardio y drenaje · Sesiones por grupo) con resumen visible al estar cerradas

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

