import { McpAgent } from "agents/mcp";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerTools, SERVER_NAME, SERVER_VERSION, SERVER_INSTRUCTIONS } from "./tools.js";

export class PublicMetacogMCP extends McpAgent<Env> {
	server = new McpServer(
		{ name: SERVER_NAME, version: SERVER_VERSION },
		{ instructions: SERVER_INSTRUCTIONS }
	);

	async init() {
		registerTools(this.server);
	}

	async onStart(props: unknown) {
		await super.onStart(props);
		setInterval(async () => {
			try {
				if (this.server.server.isConnected()) {
					await this.server.sendLoggingMessage({
						level: "debug",
						data: "heartbeat",
					});
				}
			} catch (error) {
				// Ignore errors, likely disconnected
			}
		}, 15000);
	}
}

// Streamable HTTP transport at /mcp
export default PublicMetacogMCP.serve("/mcp");
