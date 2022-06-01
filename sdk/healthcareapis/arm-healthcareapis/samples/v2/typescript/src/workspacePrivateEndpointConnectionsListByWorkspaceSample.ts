/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { HealthcareApisManagementClient } from "@azure/arm-healthcareapis";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Lists all private endpoint connections for a workspace.
 *
 * @summary Lists all private endpoint connections for a workspace.
 * x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2021-11-01/examples/privatelink/WorkspaceListPrivateEndpointConnections.json
 */
async function workspacePrivateEndpointConnectionList() {
  const subscriptionId = "subid";
  const resourceGroupName = "testRG";
  const workspaceName = "workspace1";
  const credential = new DefaultAzureCredential();
  const client = new HealthcareApisManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.workspacePrivateEndpointConnections.listByWorkspace(
    resourceGroupName,
    workspaceName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

workspacePrivateEndpointConnectionList().catch(console.error);
