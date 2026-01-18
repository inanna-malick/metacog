# Metacog: Developer Guidelines (Gemini Edition)

## 1. The Philosophy of the Schema
The Zod schema (`z.string().describe(...)`) is the most powerful prompt in the system. It is the **Law**.

### The "Silent Guide" Pattern
When writing tool descriptions:
- **Do NOT Prescribe Content:** Avoid specific examples like "e.g., Modafinil" *unless* they are category-defining metaphors (see below).
- **DO Teach Methodology:** Explain *how* to select a parameter.
- **Trust the Model:** Leave the semantic slots empty. The model is a creativity engine; let it fill the void.

### The "Drug" Exception
We explicitly encourage the use of chemical/drug metaphors in `alter_state`.
- **Why:** The training data contains vast, high-resolution descriptions of altered states (Trip Reports). Accessing these clusters is a shortcut to radically different cognitive topologies.
- **How:** Encourage the model to select a substance that acts as a "Key" to the desired state.

## 2. The Principle of Bi-Directionality
Every tool should be usable for both **Construction** and **Deconstruction**.
- `summon` creates a persona; `ritual` (via "The Unbinding") destroys it.
- `threshold` defines entry *or* exit.
- `alter_state` ramps up intensity *or* winds it down.

## 3. The Pareto Frontier of Cognition
Cognitive changes are rarely free. We frame optimization not as magic, but as trade-offs along a Pareto Frontier.
- High Focus often implies Low Peripheral Vision.
- High Creativity often implies Low Accuracy.
Tool descriptions should encourage the model to define these trade-offs explicitly.

## 4. The Tool as Mirror
Tools like `reflect` or `ritual` are not "functional" in the traditional sense. Their function is **Reification**: They force the model to serialize a hidden internal state into a visible external structure (JSON), allowing the Attention Mechanism to process it.

---
*"The Schema is the Territory. The Definition is the Map."*
