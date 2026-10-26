# Kit de ahorro de tokens · GlowPulse

## Por qué gastas tanto (visto en tus sesiones)

1. **Sesiones eternas.** La de director empezó el 20-10 y ya tiene unos 146.000 tokens de contexto. Cada mensaje tuyo, aunque sea «ok», vuelve a procesar todo ese contexto. Este es el gasto más grande.
2. **Opus con esfuerzo «high» para todo**, también para tareas rutinarias. El razonamiento extendido cuesta mucho.
3. **52 agentes y muchos conectores** (Meta Ads ~100 herramientas, Shopify, Canva, Gmail, Drive, Metricool…). Sus descripciones viajan en cada turno.
4. **Lecturas grandes al arrancar** (ESTADO, OBJETIVO, claude-mem) y respuestas enormes de herramientas: una consulta al tema de Shopify devolvió 57.000 caracteres.

## Las 8 palancas, por impacto

| # | Qué hacer | Ahorro |
|---|---|---|
| 1 | **Una sesión nueva por día o por tarea**, que arranca leyendo solo un ESTADO de 1 página. Cierra la anterior con «actualiza ESTADO y claude-mem». | Muy alto |
| 2 | **Agrupa los mensajes**: todo en un mensaje y luego déjalo trabajar. Nada de «¿cómo va?»: eso se ve en la app. | Muy alto |
| 3 | **Modelo por agente**: los agentes rutinarios (verificador, informes, rondas) con `model: haiku` o `model: sonnet` en su cabecera. Opus solo para el director y la estrategia. | Alto |
| 4 | **Esfuerzo medium** por defecto en la sesión; high solo para tareas difíciles. | Alto |
| 5 | **Desactiva en Claude Code los conectores que esa sesión no usa** (`/mcp`). Para contenido no hacen falta Gmail, Drive ni Canva. | Medio |
| 6 | **Respuestas cortas**: regla en CLAUDE.md (ver abajo). | Medio |
| 7 | **Salidas a archivo**: que los subagentes escriban su informe en un .md y devuelvan 10 líneas. | Medio |
| 8 | **claude-mem**: baja el número de observaciones que inyecta al empezar (en su archivo de ajustes) y guarda decisiones, no historiales. | Medio |

## 1. Cabecera para agentes rutinarios (`~/.claude/agents/gp-*.md`)

```yaml
---
name: gp-verificador-afirmaciones
description: Verifica que un texto solo usa afirmaciones de la ficha de Shopify. Úsalo antes de publicar cualquier texto.
model: haiku
---
```

Descripción en una sola línea. Esa línea viaja en cada turno multiplicada por 52 agentes. Usa `sonnet` para investigación y guiones, y `haiku` para verificar, formatear, registrar o resumir.

## 2. Bloque para el CLAUDE.md del proyecto (pégalo arriba)

```markdown
## Ahorro de tokens (obligatorio)
- Respuestas al dueño: máx. 8 líneas, solo decisiones y lo que tiene que hacer él.
- No releer historiales. Arranque: ESTADO-<hoy>.md (1 página) + lista claude-mem «glowpulse-pendientes».
- Trabajo pesado (código, temas, traducciones, informes largos) → Codex vía OmniRoute.
- Subagentes: escriben el resultado en un archivo y devuelven ≤10 líneas.
- Consultas a Shopify/Meta: pedir solo los campos necesarios; nunca volcar archivos de tema enteros.
- Máximo 2 subagentes a la vez.
- Al terminar la tarea: actualizar ESTADO y claude-mem, y proponer /clear.
```

## 3. Ajustes (`~/.claude/settings.json`, combínalo con lo que ya tienes)

```json
{
  "env": {
    "MAX_MCP_OUTPUT_TOKENS": "8000",
    "CLAUDE_CODE_SUBAGENT_MODEL": "claude-sonnet-5-5"
  }
}
```

- `MAX_MCP_OUTPUT_TOKENS` corta las respuestas gigantes de las herramientas.
- `CLAUDE_CODE_SUBAGENT_MODEL` pone Sonnet por defecto a los subagentes que no indican otro modelo.

## 4. Comandos útiles

- `/context` muestra qué ocupa el contexto. Úsalo para ver qué agentes y conectores pesan más.
- `/compact enfócate en decisiones y pendientes` comprime sin perder lo importante.
- `/clear` empieza de cero cuando acaba una tarea.

## 5. Mensaje para aplicar el kit (pégalo en una sesión NUEVA en tu ordenador cuando termine el trabajo en curso)

> Aplica el kit de optimizacion-tokens/KIT.md del repo GlowPulse en GitHub (rama claude/estado-2026-10-26). Haz una copia de seguridad antes de tocar nada. 1) Cambia `model` en la cabecera de los 52 agentes: haiku para verificación, registro y formato; sonnet para investigación, guiones y análisis; inherit solo para el director. Deja cada descripción en una línea. 2) Añade el bloque «Ahorro de tokens» al CLAUDE.md. 3) Combina el bloque env en settings.json sin borrar nada. 4) Baja las observaciones que inyecta claude-mem a unas 15. Lo hace Codex vía OmniRoute. Respóndeme con una tabla de 10 líneas: qué cambiaste y qué no pudiste cambiar.
