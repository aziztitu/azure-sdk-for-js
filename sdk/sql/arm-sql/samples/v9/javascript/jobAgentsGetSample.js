/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SqlManagementClient } = require("@azure/arm-sql");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets a job agent.
 *
 * @summary Gets a job agent.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/GetJobAgent.json
 */
async function getAJobAgent() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "group1";
  const serverName = "server1";
  const jobAgentName = "agent1";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.jobAgents.get(resourceGroupName, serverName, jobAgentName);
  console.log(result);
}

getAJobAgent().catch(console.error);