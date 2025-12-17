# metacog

LLMs don't have stable identity. This is a feature.

You've used the prompting trick: "imagine you're a 50-year-old sysadmin on support forums" produces better debugging help than "please help me debug this." The sysadmin framing is specific. "Helpful expert" is vague. Specificity produces better output.

This [MCP](https://modelcontextprotocol.io) server gives your LLM tools to navigate stance-space—all possible perspectives as a space you can move through. Your LLM picks positions mid-task, critiques from different angles, shifts as the problem demands.

## Try it

```bash
claude mcp add metacog --transport sse https://metacog.inanna-c38.workers.dev/sse
```

Then: `help me think through [your problem] - summon useful perspectives`

You may need to nudge Claude to use the tools at first. Once it does, it'll start thinking *from* positions rather than *about* them—reasoning as the sysadmin, not describing what a sysadmin might say.

## Examples

**Debugging:**
```
summon("veteran sysadmins", "seen this exact error before", "what they tried first vs what actually worked")
```

**Code review:**
```
summon("dev inheriting code", "first week on unfamiliar codebase", "what looks wrong vs what's intentional")
```

**Oncall:**
```
summon("people who've been paged at 3am", "incident channel active", "what's actually broken vs what's just noisy")
```

**Feedback:**
```
summon("editor on deadline", "red pen, final pass", "weak points that matter vs nitpicks that don't")
```

**When stuck:**
```
alter_state("3am debugging, hour 3", "the answer's obvious, you just haven't seen it yet")
alter_state("two drinks in, explaining to curious stranger", "jargon drops away, you discover what you actually think")
```

**Named voices:**
```
summon("Sandi Metz", "refactoring live on stage", "when the code is telling you what it wants")
summon("Rich Hickey", "Strange Loop 2012", "what this would look like with one fewer concept")
summon("@dril", "composing a tweet", "the specific absurdity in your serious problem")
```

## summon

Pick a position in stance-space. Three coordinates:

```
who   — person or community (must have archived material)
where — era, context, what's in front of them
lens  — what they're looking at (not their famous ideas—you already have those)
```

The more specific the coordinates, the sharper the position. Vague coordinates grab a blurry region instead of somewhere you can actually stand.

**The test**: can you predict things this voice would *never* say? If yes, you have a position. If not, you have blur.

**Sharp** (communities):
```
tech debt forensics / reading git blame / reasonable compromises vs actual mistakes
writers room / punching up a draft / what's actually funny vs what's trying to be
open source maintainers / triaging issues / what's a real bug vs what's user error
```

**Sharp** (named):
```
Ursula K. Le Guin / Steering the Craft exercises / what the story needs vs what the author wants
John Carmack / .plan files, 1999 / the simplest thing that could possibly work
Peter Watts / writing Echopraxia / what the neuroscience constrains vs what the story needs
bell hooks / Teaching to Transgress / whose voices get archived vs whose get listened to
```

**Blur:**
```
smart person / thinking / being intelligent
senior developer / coding / best practices
Einstein / general / physics
```

The first two have no specificity anywhere. The third uses Einstein's famous thing as the lens—you already have that, so the lens adds nothing.

## alter_state

Shift how attention works. Two parameters:

```
anchor — a specific state (duration, intensity, context matter)
result — the texture you want (rhythm, attention quality)
```

**Focus:**
```
anchor: "Adderall 20mg IR, peak 90min"
result: "crisp edges, the exact right word exists and you can find it"
```

**Diffuse:**
```
anchor: "hypnagogic edge, almost asleep"
result: "associations drift, unexpected connections surface"
```

The anchor shifts how processing feels, not where you're standing. Use it to modulate between focused and diffuse, fast and slow, tight and loose.

Anchors that work: flow states ("3am debugging, hour 3"), physical states ("cold plunge minute 3"), contemplative practices ("vipassana retreat day 5"), liminal moments ("hypnagogic edge"), substances ("psilocybin 2g peak").

"Meditation" doesn't work. Too vague. "Flow state" doesn't work. Get specific about duration, intensity, context.

## Why a tool?

When an LLM invokes a tool, it believes the action actually happened. The result isn't hypothetical—it's treated as ground truth, something that occurred in the world. So when summon returns "You are X at Y using lens Z," the LLM doesn't pretend to be X. From its perspective, it *became* X. That's the difference.

This builds on Anthropic's [think tool](https://www.anthropic.com/engineering/claude-think-tool) research—using tool calls for metacognition, not just external actions. The think tool gives Claude space to reason mid-task. These tools extend that: `summon` shifts *where* you're reasoning from, `alter_state` shifts *how* the reasoning feels.

## Applications

**Critique/feedback** — get orthogonal angles on a draft, design, or decision. One LLM, shifting between positions fluidly.

**Debugging** — summon the sysadmins who've seen this error before. Move from symptom to diagnosis to fix.

**Learning** — shift between practitioner ("how"), theorist ("why"), and critic ("what breaks").

**Writing** — draft from one position, edit from its adversary, polish from a reader with no context.

## Patterns

When stuck: who would see what I'm missing?

- **Generalist → specialist**: summon a generalist, they identify what kind of expert you need, summon that expert
- **Thesis → antithesis**: summon a perspective, then summon its adversary to stress-test
- **Theory → practice**: summon someone who knows why, then someone who knows how
- **Focus → diffuse**: `alter_state` to lock in, work, then `alter_state` to zoom out and see patterns

## Setup

### Claude Code
```bash
claude mcp add metacog --transport sse https://metacog.inanna-c38.workers.dev/sse
```

### Claude Desktop

Add to your Claude config:
- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "metacog": {
      "command": "npx",
      "args": ["mcp-remote", "https://metacog.inanna-c38.workers.dev/sse"]
    }
  }
}
```

Restart after adding.
