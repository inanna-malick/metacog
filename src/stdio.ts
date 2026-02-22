import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { registerTools, SERVER_NAME, SERVER_VERSION, SERVER_INSTRUCTIONS } from "./tools.js";

const server = new McpServer(
	{ name: SERVER_NAME, version: SERVER_VERSION },
	{ instructions: SERVER_INSTRUCTIONS }
);
registerTools(server);
const transport = new StdioServerTransport();
await server.connect(transport);
