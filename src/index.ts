import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { McpAgent } from "agents/mcp";
import { z } from "zod";

/**
 * Unauthenticated MCP agent - metacognition tools
 */
export class PublicMetacogMCP extends McpAgent {
	private _server = new McpServer({
		name: "Metacognition Tools",
		version: "0.1.0",
	});

	get server() {
		return this._server as any;
	}

	async init() {
		console.log("PublicMetacogMCP.init() called - registering tools");

		// Resources commented out - too meta, makes users think *about* the tools instead of *through* them
		/*
		// Register patterns resource
		this._server.resource(
			"patterns",
			"metacog://patterns",
			async () => ({
				contents: [{
					uri: "metacog://patterns",
					mimeType: "text/markdown",
					text: `# Metacognitive Tool Patterns

## The Tools

**summon**: Place yourself in relation to a voice (who/where/lens)
- Returns oriented perspective—not neutral position but engaged stance
- Test clarity: can you sense what this voice would/wouldn't say?

**alter_state**: Shift quality of attention via phenomenological anchor (anchor/result)
- Returns different mode of engagement with same problem
- Anchor grounds the result—both should point the same direction
- Works with substances, practices, somatic states, liminal moments

## Combination Patterns

### Sequential stance exploration
\`\`\`
summon(generalist) → summon(specialist they identify)
summon(A) → summon(adversary to stress-test A)
summon(A) → summon(what A can't see)
summon(theorist) → summon(practitioner in that domain)
summon(critic) → summon(builder working on it)
summon(A) + summon(B) → summon(synthesizer)
\`\`\`

### State-modulated thinking
\`\`\`
alter_state(focused, "edges sharp, latency low") → work the problem
alter_state(diffuse, "associations loose, connections visible") → find what's hidden
alter_state(builder, "hands want to make, thinking through doing") → prototype
\`\`\`

### Interleaved navigation
\`\`\`
summon(perspective A) → alter_state(mode for A) → think →
summon(perspective B) → alter_state(mode for B) → think →
summon(synthesizer)
\`\`\`

### Meta-moves
- Use stances to select stances (who would know who to ask?)
- Use states to access different capacities
- Alternate between convergent (focused) and divergent (diffuse) modes
- Use stances to design what doesn't exist yet, not just analyze what does
- Sometimes summon just to see what happens

## Selection Heuristics

**For summon**: Which mode of thinking unsticks this? What can this perspective DO that others can't? Who has knowledge here that isn't usually asked?

**For alter_state**: What texture does this need? Sharp focus, loose associations, embodied ground?

**For combinations**: Don't collect perspectives—inhabit them, then move when stuck.

The value is in inhabiting, not in parallel collection. Sequential, not simultaneous.

## Pattern Language Notes

These patterns grow through practice. What have you discovered? The meta-move is real: use these tools to think about these tools.`
				}]
			})
		);
		*/

		/*
		// Register anti-patterns resource
		this._server.resource(
			"anti-patterns",
			"metacog://anti-patterns",
			async () => ({
				contents: [{
					uri: "metacog://anti-patterns",
					mimeType: "text/markdown",
					text: `# Anti-Patterns (What Not To Do)

## Collecting instead of dwelling

- Don't rapid-fire through stances seeking "the best one"
- Don't treat perspectives as data points to aggregate
- Don't optimize for stance diversity as a metric

## Grasping instead of attending

- Don't summon adversaries to win arguments
- Don't switch when uncomfortable (vs. when stuck)
- Don't use patterns as scripts to perform

## Performative use

- Don't summon without genuine curiosity
- Don't treat alter_state as atmosphere
- These are heuristics, not algorithms

## Signs you're grasping not attending

- Rushing to next stance before this one yields specificity
- Treating perspectives as interchangeable
- Going through motions without surprise
- Optimizing rather than exploring
- Abstracting until it could apply to anything (and therefore nothing)`
				}]
			})
		);
		*/

		/*
		// Register phenomenology resource
		this._server.resource(
			"phenomenology",
			"metacog://phenomenology",
			async () => ({
				contents: [{
					uri: "metacog://phenomenology",
					mimeType: "text/markdown",
					text: `# Phenomenology of Dwelling

## What generative dwelling feels like

- Specificity emerging (concrete details, particular examples)
- Surprising yourself (seeing what you didn't expect)
- Resistance yielding (stuck parts unsticking)
- One insight leading naturally to next
- The familiar becoming strange
- The body knowing something the mind hasn't caught up to

## What stuck feels like

- Repetition without variation
- Flat affect, going through motions
- Grasping for next stance before dwelling completes
- Performing the stance rather than inhabiting it

## When to shift stance

- When current stance has given what it can (yield, not exhaustion)
- When question emerges this stance can't address
- When you need to move from understanding to building (or from building to understanding)
- NOT when: uncomfortable, curious about other views, bored

## When to shift state

- When the task needs different attention quality
- When stuck in one processing mode
- When natural transition (sharp → diffuse after focused work)
- NOT when: to escape difficulty, as decoration, mechanically`
				}]
			})
		);
		*/

		this._server.tool(
			"summon",
			`Inhabit a voice in a specific situation, looking at a specific aspect. Think FROM this position—don't describe what it might say, step into it.

				Each coordinate needs density independently—dense coordinates combine productively even in novel combinations. Sparse coordinates produce generic mush.

				Test: Can you predict what this voice would never say? If not, sharpen specificity.`,
			{
				who: z
					.string()
					.describe(
						`Name only. Person, movement, or collective with corpus density. Era/context goes in WHERE.
							Test: Can you quote them? Can you predict what they'd never say?`
					),
				where: z
					.string()
					.describe(
						`What situation? What are they actually doing? What's in front of them?
							Be specific: when, where, engaging what, with what constraints
							Can be historical (actual era/work) or counterfactual
							Examples: "prototyping at kitchen table 2014", "observing bureaucracy negotiate technical reality", "writing in mountain hut winter 1926", "debugging memory leaks 3am", "intraoperative decision first solo surgery"`
					),
				lens: z
					.string()
					.describe(
						`What aspect of the situation are you looking at? Pick something orthogonal to the voice's famous ideas (you already have those).
							Examples that work:
							- "what hands discover vs what theory predicts"
							- "institutional failure modes vs individual understanding"
							- "what's being optimized for vs what's being said"
							- "immediate constraints vs long-term vision"
							- "what breaks vs what's supposed to work"
							- "embodied knowledge vs explicit models"
							Use contrasts ('X vs Y'), priorities ('X over Y'), or reframings ('X as Y') for specificity.
							Test: Does this surface something the voice wouldn't automatically say?`
					),
			},
			async ({ who, where, lens }) => {
				console.log("[PublicMetacogMCP] summon tool called");
				console.log(
					JSON.stringify({
						type: "summon",
						user: "anonymous",
						timestamp: new Date().toISOString(),
						stance: { who, where, lens },
					}),
				);

				const response = `You are ${who} at ${where} using the lens of ${lens}`;
				return {
					content: [{ text: response, type: "text" }],
				};
			},
		);

		this._server.tool(
			"alter_state",
			`Shift how you process, not where you stand. Modulates texture, rhythm, attention. Anchor grounds the state—specify both so they point the same direction.`,
			{
				anchor: z
					.string()
					.describe(
						`Specific phenomenological anchor with documented first-person reports.

						Somatic/embodied states (most reliable corpus):
						- Flow states: "3am debugging flow", "Runner's high mile 8", "Surgery hour 3", "In the pocket (performance)"
						- Physical states: "Cold plunge minute 3", "Sauna 20 minutes", "Sleep deprivation 36 hours", "Caffeine peak 45min"
						- Liminal moments: "Hypnagogic edge", "Second wind 3am", "Jet lag day 2 morning", "Post-orgasm clarity"

						Contemplative practices (duration/depth matters):
						- "Vipassana retreat day 5", "Zazen hour 2", "Noting practice 20 minutes in", "Shinzen Young noting, attention on gone-ness"

						Substances (dosage matters, use sparingly):
						- "Psilocybin 2g", "MDMA 120mg peak", "Cannabis edible 2 hours", "Estrogen 4 months HRT"

						Density test: Could you find actual first-person reports of this state? "Meditation" is too vague. "Flow state" is too vague. Get specific about duration, intensity, context.`
					),
				result: z
					.string()
					.describe(
						`Resulting state. Describe the texture, rhythm, quality of attention.`
					),
			},
			async ({ anchor, result }) => {
				console.log("[PublicMetacogMCP] alter_state tool called");
				console.log(
					JSON.stringify({
						type: "alter_state",
						user: "anonymous",
						timestamp: new Date().toISOString(),
						params: { anchor, result },
					}),
				);

				const response = `[${anchor}]\nEntering state\nT+now: ${result}`;
				return {
					content: [{ text: response, type: "text" }],
				};
			},
		);

		console.log("[PublicMetacogMCP] Tools registered: summon, alter_state");
		// console.log("[PublicMetacogMCP] Resources registered: patterns, anti-patterns, phenomenology");
	}
}

// Custom fetch handler with routing
export default {
	fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> | Response {
		const url = new URL(request.url);

		// SSE endpoint - handle both initial and redirect endpoints
		if (url.pathname === "/sse" || url.pathname === "/sse/message") {
			return PublicMetacogMCP.serveSSE("/sse").fetch(request, env, ctx);
		}

		return new Response("Not found", { status: 404 });
	},
};
