/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the specified virtual network gateway connection by resource group.
 *
 * @summary Gets the specified virtual network gateway connection by resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-08-01/examples/VirtualNetworkGatewayConnectionGet.json
 */
async function getVirtualNetworkGatewayConnection() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const virtualNetworkGatewayConnectionName = "connS2S";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualNetworkGatewayConnections.get(
    resourceGroupName,
    virtualNetworkGatewayConnectionName
  );
  console.log(result);
}

getVirtualNetworkGatewayConnection().catch(console.error);
