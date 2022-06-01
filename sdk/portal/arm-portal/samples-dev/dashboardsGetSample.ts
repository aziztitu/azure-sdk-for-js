/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Portal } from "@azure/arm-portal";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets the Dashboard.
 *
 * @summary Gets the Dashboard.
 * x-ms-original-file: specification/portal/resource-manager/Microsoft.Portal/preview/2020-09-01-preview/examples/getDashboard.json
 */
async function getADashboard() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "testRG";
  const dashboardName = "testDashboard";
  const credential = new DefaultAzureCredential();
  const client = new Portal(credential, subscriptionId);
  const result = await client.dashboards.get(resourceGroupName, dashboardName);
  console.log(result);
}

getADashboard().catch(console.error);
