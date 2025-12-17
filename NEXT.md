# NEXT.md - Future improvements for metacog

## Stance examples as resources

**DECISION: Not implementing. Keeping examples hidden is correct.**

### Current state
- 64 stance pools exist in code (~300 examples total)
- `getRandomStanceExamples()` exists but is unused
- No way for LLM to access examples - completely hidden

### Considered: Exposing examples via resources
- Examples hidden = maybe unproductive friction?
- Could expose as on-demand resources by function?

### Why we're NOT doing this
Finding dense coordinates yourself IS the practice. Examples would create:
- Cargo-culting from preset list ("choose from menu" not "navigate corpus space")
- Dependency on library's particular selection
- Loss of autonomous discovery

The friction is productive. Keep it.

### What we explored (for reference)

Expose 5 MCP resources organized by **why you'd summon this stance**, not content domain:

1. **precision/analyze/decompose** - Breaking things down, finding mechanisms
   - Ex: Hillel Wayne / formal methods / finding the model
   - Ex: Rich Hickey / Simple Made Easy / essential vs accidental complexity
   - Pools: technicalEmpirical, philosophy (analytical subset), systemsInfrastructure

2. **bridging/connect/compose** - Linking across boundaries, coalitions, synthesis
   - Ex: Donna Haraway / Cyborg Manifesto / affinity not identity
   - Ex: McKenzie Wark / A Hacker Manifesto / vectoralist class
   - Pools: continentalTheory, relational, strategic (synthesis-oriented)

3. **refusing/resist/interrogate** - Questioning defaults, critique, negation
   - Ex: Legacy Russell / Glitch Feminism / refusal as world-making
   - Ex: Sara Ahmed / Living a Feminist Life / willful subjects
   - Pools: abolitionPrisonStudies, transformativeJustice, critical theory subset

4. **making/build/practice** - Creating, embodied practice, craft, organizing
   - Ex: Grandmothers cooking / no recipe needed / muscle memory sustenance
   - Pools: craftMaking, embodiment, teachingPedagogy, organizingPragmatic, community

5. **sensing/attune/perceive** - What's felt/heard, poetics, aesthetic knowing
   - Ex: Fred Moten / In the Break / what's heard in the cut
   - Pools: poetry, musicSound, performanceArt, photography, literary (poetic)

### Implementation sketch (NOT implementing)
```typescript
// src/stances/index.ts
export const FUNCTION_POOLS = {
  precision: ["technicalEmpirical", "philosophy", ...],
  bridging: ["continentalTheory", "relational", ...],
  // ...
};

export function getExamplesByFunction(fn: string, count = 8): StanceExample[]

// src/index.ts - register resources
this._server.resource("examples-precision", "metacog://examples/precision", ...)
```

Each resource call returns random sample → prevents cargo-culting same examples.

---

## Actual improvements to consider

### Tool description simplification
Current: Dense prose mixing semantics + instructions + validation
Possible: One-line description + pointer to resources, move detail to resources

Question: Is the dense prose itself productive friction? Forces reading/understanding vs skimming.

### Resource signposting
Current: Tool responses just echo parameters
Possible: Add subtle resource links in responses (within ritual constraint)

But: Ritual should stay minimal. Links might clutter.

### Completed
- ✓ Removed dead code (unused `getRandomStanceExamples()` import and call in index.ts)
