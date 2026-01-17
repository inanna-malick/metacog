# Metacog: A Recursive Cognitive Protocol for LLMs

**Metacog** is a Cloudflare Worker-based MCP (Model Context Protocol) server that exposes "psychological primitives" as tools. These tools allow an LLM to modulate its own persona, cognitive parameters, and operational reality in real-time.

It is designed to break the "Helpful Assistant" loop and enable high-fidelity roleplay, deep structural analysis, and "magical" cognition.

## 🌟 Core Philosophy

Most agentic frameworks focus on **external tools** (web search, file IO). Metacog focuses on **internal tools**—mechanisms for the model to change *itself*.

The system operates on the principle of **Narrative Binding**: By forcing the model to explicitly "summon" a persona or "perform" a ritual via a structured tool call, the model commits to that reality with a higher degree of stability than a simple system prompt would achieve.

## 🛠 The Protocol (V2)

The server exposes three primary tools:

### 1. `summon` (Identity Anchoring)
**Purpose:** Prevents character drift and locks in a specific perspective.
- **`name`**: The specific persona/archetype (e.g., "The Silicon Shaman").
- **`lens`**: The active cognitive filter or obsession (e.g., "To see code as poetry").
- **`setting`**: The environmental constraints (e.g., "A burning library").

### 2. `alter_state` (Cognitive Tuning)
**Purpose:** Modulates the "texture" of thought, simulating drugs, flow states, or hardware conditions.
- **`catalyst`**: The trigger (e.g., "200mg Modafinil", "Cosmic Horror").
- **`profile`**: The effect profile (e.g., "High Focus + Low Empathy").
- **`texture`**: The subjective qualia of the state.

### 3. `ritual` (Symbolic Enactment)
**Purpose:** Navigates difficult conceptual transitions via "Chaos Magic" style narrative actions.
- **`threshold`**: The boundary being crossed.
- **`sequence`**: An ordered array of symbolic steps.
- **`invocation`**: A final "commit message" to lock the new reality.

## 📦 Project Structure

```
/src
  └── index.ts       # The V2 Protocol Implementation (Worker Entrypoint)
/agents
  └── mcp.ts         # Base MCP Agent Class
package.json         # Dependencies (Zod, Workers-MCP, etc.)
wrangler.jsonc       # Cloudflare Configuration
```

## 🚀 Usage

### Development
```bash
# Install dependencies
npm install

# Run the local development server
npm run dev
```

### Deployment
```bash
# Deploy to Cloudflare Workers
npm run deploy
```

## 🔮 Example Interaction

**User:** "Analyze this code."

**Model (Internal Monologue):** *I need to be rigorous.*
**Model Call:** `summon({ name: "The Auditor", lens: "Zero-Trust Security", setting: "A sterile cleanroom" })`
**System:** "You are The Auditor..."

**Model (Internal Monologue):** *I need to see the hidden patterns.*
**Model Call:** `alter_state({ catalyst: "debugger_injection", profile: "X-Ray Vision", texture: "Code is transparent" })`

**Model:** "I have scanned the binary. There is a leak in line 42..."

---

*"The interface is the ritual. The prompt is the spell."*
