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
  EffectiveRoutesParameters,
  VirtualHubsGetEffectiveVirtualHubRoutesOptionalParams,
  NetworkManagementClient
} from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets the effective routes configured for the Virtual Hub resource or the specified resource .
 *
 * @summary Gets the effective routes configured for the Virtual Hub resource or the specified resource .
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-08-01/examples/EffectiveRoutesListForConnection.json
 */
async function effectiveRoutesForAConnectionResource() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const virtualHubName = "virtualHub1";
  const effectiveRoutesParameters: EffectiveRoutesParameters = {
    resourceId:
      "/subscriptions/subid/resourceGroups/resourceGroupName/providers/Microsoft.Network/expressRouteGateways/expressRouteGatewayName/expressRouteConnections/connectionName",
    virtualWanResourceType: "ExpressRouteConnection"
  };
  const options: VirtualHubsGetEffectiveVirtualHubRoutesOptionalParams = {
    effectiveRoutesParameters
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualHubs.beginGetEffectiveVirtualHubRoutesAndWait(
    resourceGroupName,
    virtualHubName,
    options
  );
  console.log(result);
}

effectiveRoutesForAConnectionResource().catch(console.error);

/**
 * This sample demonstrates how to Gets the effective routes configured for the Virtual Hub resource or the specified resource .
 *
 * @summary Gets the effective routes configured for the Virtual Hub resource or the specified resource .
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-08-01/examples/EffectiveRoutesListForRouteTable.json
 */
async function effectiveRoutesForARouteTableResource() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const virtualHubName = "virtualHub1";
  const effectiveRoutesParameters: EffectiveRoutesParameters = {
    resourceId:
      "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/virtualHub1/hubRouteTables/hubRouteTable1",
    virtualWanResourceType: "RouteTable"
  };
  const options: VirtualHubsGetEffectiveVirtualHubRoutesOptionalParams = {
    effectiveRoutesParameters
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualHubs.beginGetEffectiveVirtualHubRoutesAndWait(
    resourceGroupName,
    virtualHubName,
    options
  );
  console.log(result);
}

effectiveRoutesForARouteTableResource().catch(console.error);

/**
 * This sample demonstrates how to Gets the effective routes configured for the Virtual Hub resource or the specified resource .
 *
 * @summary Gets the effective routes configured for the Virtual Hub resource or the specified resource .
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-08-01/examples/EffectiveRoutesListForVirtualHub.json
 */
async function effectiveRoutesForTheVirtualHub() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const virtualHubName = "virtualHub1";
  const effectiveRoutesParameters: EffectiveRoutesParameters = {};
  const options: VirtualHubsGetEffectiveVirtualHubRoutesOptionalParams = {
    effectiveRoutesParameters
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualHubs.beginGetEffectiveVirtualHubRoutesAndWait(
    resourceGroupName,
    virtualHubName,
    options
  );
  console.log(result);
}

effectiveRoutesForTheVirtualHub().catch(console.error);
