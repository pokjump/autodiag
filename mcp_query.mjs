import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";
import fs from "fs";

async function main() {
  const apiKey = "AQ.Ab8RN6JgpY6mIpRlHdE9hjmT-WZngeu5utShbucrJxpuZVLJmQ";
  const url = new URL("https://stitch.googleapis.com/mcp/sse");
  
  const transport = new SSEClientTransport(url, {
    headers: {
      "X-Goog-Api-Key": apiKey
    }
  });

  const client = new Client(
    { name: "antigravity-client", version: "1.0.0" },
    { capabilities: {} }
  );

  console.log("Connecting...");
  await client.connect(transport);
  console.log("Connected!");

  // List resources
  const resources = await client.listResources();
  console.log("Resources:", JSON.stringify(resources, null, 2));

  // If there's a specific resource with design, let's read it
  if (resources.resources && resources.resources.length > 0) {
    const res = await client.readResource({ uri: resources.resources[0].uri });
    fs.writeFileSync("stitch_design.json", JSON.stringify(res, null, 2));
    console.log(`Saved resource ${resources.resources[0].uri} to stitch_design.json`);
  } else {
    // List prompts just in case
    const prompts = await client.listPrompts();
    console.log("Prompts:", JSON.stringify(prompts, null, 2));
    
    // List tools
    const tools = await client.listTools();
    console.log("Tools:", JSON.stringify(tools, null, 2));
  }

  await client.close();
}

main().catch(console.error);
