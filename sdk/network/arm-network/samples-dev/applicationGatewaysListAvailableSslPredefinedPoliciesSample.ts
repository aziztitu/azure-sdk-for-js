/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Lists all SSL predefined policies for configuring Ssl policy.
 *
 * @summary Lists all SSL predefined policies for configuring Ssl policy.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-08-01/examples/ApplicationGatewayAvailableSslOptionsPredefinedPoliciesGet.json
 */
async function getAvailableSslPredefinedPolicies() {
  const subscriptionId = "subid";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.applicationGateways.listAvailableSslPredefinedPolicies()) {
    resArray.push(item);
  }
  console.log(resArray);
}

getAvailableSslPredefinedPolicies().catch(console.error);
