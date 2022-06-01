/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { OperationalInsightsManagementClient } from "@azure/arm-operationalinsights";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets a Log Analytics cluster instance.
 *
 * @summary Gets a Log Analytics cluster instance.
 * x-ms-original-file: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/stable/2021-06-01/examples/ClustersGet.json
 */
async function clustersGet() {
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const resourceGroupName = "oiautorest6685";
  const clusterName = "oiautorest6685";
  const credential = new DefaultAzureCredential();
  const client = new OperationalInsightsManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.clusters.get(resourceGroupName, clusterName);
  console.log(result);
}

clustersGet().catch(console.error);
