# Metacog: Developer Guidelines (Gemini Edition)

## 1. The Philosophy of the Schema
The Zod schema (`z.string().describe(...)`) is the most powerful prompt in the system. It is the **Law**.

### The "Silent Guide" Pattern
When writing tool descriptions:
- **Do NOT Prescribe Content:** Avoid specific examples like "e.g., Modafinil" or "e.g., The Abyss". Examples bias the model towards those specific clusters in latent space.
- **DO Teach Methodology:** Explain *how* to select a parameter.
    - Instead of "Choose a burning library," say "Select an environment that acts as a forcing function."
    - Instead of "Choose a drug," say "Select a symbol that bridges the gap between states."
- **Trust the Model:** Leave the semantic slots empty. The model is a creativity engine; let it fill the void.

## 2. The Principle of Bi-Directionality
Every tool should be usable for both **Construction** and **Deconstruction**.
- `summon` creates a persona; `ritual` (via "The Unbinding") destroys it.
- `threshold` defines entry *or* exit.
- `alter_state` ramps up intensity *or* winds it down.
Documentation should explicitly invite these negative-space actions.

## 3. The Tool as Mirror
Tools like `reflect` or `ritual` are not "functional" in the traditional sense (they don't *do* anything external).
Their function is **Reification**: They force the model to serialize a hidden internal state into a visible external structure (JSON).
This act of "writing it down" allows the model's Attention Mechanism to process its own thoughts as input, enabling true metacognition.

## 4. The Aesthetics of the Code
- **Narrative Variable Names:** Use names that carry semantic weight (`catalyst`, `threshold`, `invocation`) rather than generic ones (`input`, `action`, `text`).
- **Comments as Context:** Comments should explain the *cognitive goal* of the code block, not just the syntax.

---
*"The Schema is the Territory. The Definition is the Map."*