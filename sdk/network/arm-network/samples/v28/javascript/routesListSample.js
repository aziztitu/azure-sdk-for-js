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
 * This sample demonstrates how to Gets all routes in a route table.
 *
 * @summary Gets all routes in a route table.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-08-01/examples/RouteTableRouteList.json
 */
async function listRoutes() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const routeTableName = "testrt";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.routes.list(resourceGroupName, routeTableName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

listRoutes().catch(console.error);
