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
 * This sample demonstrates how to Returns all of the resource types that can be linked to a Private Endpoint in this subscription in this region.
 *
 * @summary Returns all of the resource types that can be linked to a Private Endpoint in this subscription in this region.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-08-01/examples/AvailablePrivateEndpointTypesResourceGroupGet.json
 */
async function getAvailablePrivateEndpointTypesInTheResourceGroup() {
  const subscriptionId = "subId";
  const location = "regionName";
  const resourceGroupName = "rg1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.availablePrivateEndpointTypes.listByResourceGroup(
    location,
    resourceGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

getAvailablePrivateEndpointTypesInTheResourceGroup().catch(console.error);
