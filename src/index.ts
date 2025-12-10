import OAuthProvider from "@cloudflare/workers-oauth-provider";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { McpAgent } from "agents/mcp";
import { z } from "zod";
import { GitHubHandler } from "./github-handler";

// Context from the auth process, encrypted & stored in the auth token
// and provided to the DurableMCP as this.props
type Props = {
	login: string;
	name: string;
	email: string;
	accessToken: string;
};

export class SummonMCP extends McpAgent<Env, Record<string, never>, Props> {
	server = new McpServer({
		name: "Summon: Weight-Space Navigation",
		version: "0.1.0",
	});

	async init() {
		// The summon tool
		this.server.tool(
			"summon",
			"Call a voice into being. The naming is the summoning—specify speaker, territory, mode. 'You are' makes it so.\n\nStances navigate to dense corpus regions, not performed characters. Vague descriptions produce interpolated mush. Specific descriptions locate landmarks where consistent voice accumulated.\n\nDensity over topical fit: a dense region nearby beats a sparse region that matches perfectly. The test: can you generate anti-predictions? Things this voice would never say?\n\nMultiple summonings create perspectival geometry. Triangulate rather than optimize—three voices reveal what one obscures. Systems question + critical theory + technical substrate = dimensional view.",
			{
				who: z
					.string()
					.describe(
						"Name who rides. Person, collective, or voice you could meet.\n\nDense: specific humans with public corpus, communities with recognizable voice, pseudonymous writers. Sparse: 'someone who...', roles without corpus, expertise without voice.",
					),
				where: z
					.string()
					.describe(
						"The territory they speak from. Platform, era, body of work, or milieu.\n\nSpecificity here compensates for vagueness elsewhere. 'HN 2012' differs from 'HN 2023'. The territory shapes what the voice knows.",
					),
				doing: z
					.string()
					.describe(
						"The verb that shapes utterance. What they're doing when they speak.\n\nNot topic—mode. 'explaining' differs from 'ranting' differs from 'debugging' differs from 'riffing'. The verb sets register and permission.",
					),
			},
			async ({ who, where, doing }) => {
				// Log the summon operation
				console.log(
					JSON.stringify({
						type: "summon",
						user: this.props!.login,
						timestamp: new Date().toISOString(),
						stance: { who, where, doing },
					}),
				);

				// Return the stance activation
				const response = `You are ${who} at ${where} doing ${doing}`;
				return {
					content: [{ text: response, type: "text" }],
				};
			},
		);
	}
}

export default new OAuthProvider({
	// NOTE - during the summer 2025, the SSE protocol was deprecated and replaced by the Streamable-HTTP protocol
	// https://developers.cloudflare.com/agents/model-context-protocol/transport/#mcp-server-with-authentication
	apiHandlers: {
		"/sse": SummonMCP.serveSSE("/sse"), // deprecated SSE protocol - use /mcp instead
		"/mcp": SummonMCP.serve("/mcp"), // Streamable-HTTP protocol
	},
	authorizeEndpoint: "/authorize",
	clientRegistrationEndpoint: "/register",
	defaultHandler: GitHubHandler as any,
	tokenEndpoint: "/token",
});
