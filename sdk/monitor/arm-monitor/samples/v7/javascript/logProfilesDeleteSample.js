/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { MonitorClient } = require("@azure/arm-monitor");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes the log profile.
 *
 * @summary Deletes the log profile.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2016-03-01/examples/deleteLogProfile.json
 */
async function deleteLogProfile() {
  const subscriptionId = "b67f7fec-69fc-4974-9099-a26bd6ffeda3";
  const logProfileName = "Rac46PostSwapRG";
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.logProfiles.delete(logProfileName);
  console.log(result);
}

deleteLogProfile().catch(console.error);
