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
 * This sample demonstrates how to Lists all Virtual Router Peerings in a Virtual Router resource.
 *
 * @summary Lists all Virtual Router Peerings in a Virtual Router resource.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-08-01/examples/VirtualRouterPeeringList.json
 */
async function listAllVirtualRouterPeeringsForAGivenVirtualRouter() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const virtualRouterName = "virtualRouter";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.virtualRouterPeerings.list(resourceGroupName, virtualRouterName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

listAllVirtualRouterPeeringsForAGivenVirtualRouter().catch(console.error);
