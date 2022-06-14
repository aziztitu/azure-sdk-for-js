/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  WorkspaceUpdate,
  AzureDatabricksManagementClient
} from "@azure/arm-databricks";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Updates a workspace.
 *
 * @summary Updates a workspace.
 * x-ms-original-file: specification/databricks/resource-manager/Microsoft.Databricks/preview/2021-04-01-preview/examples/WorkspaceUpdate.json
 */
async function updateAWorkspaceTags() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg";
  const workspaceName = "myWorkspace";
  const parameters: WorkspaceUpdate = { tags: { mytag1: "myvalue1" } };
  const credential = new DefaultAzureCredential();
  const client = new AzureDatabricksManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.workspaces.beginUpdateAndWait(
    resourceGroupName,
    workspaceName,
    parameters
  );
  console.log(result);
}

updateAWorkspaceTags().catch(console.error);