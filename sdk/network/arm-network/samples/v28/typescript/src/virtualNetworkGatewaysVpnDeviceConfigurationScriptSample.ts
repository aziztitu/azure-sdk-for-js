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
  VpnDeviceScriptParameters,
  NetworkManagementClient
} from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets a xml format representation for vpn device configuration script.
 *
 * @summary Gets a xml format representation for vpn device configuration script.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-08-01/examples/VirtualNetworkGatewayVpnDeviceConfigurationScript.json
 */
async function getVpnDeviceConfigurationScript() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const virtualNetworkGatewayConnectionName = "vpngw";
  const parameters: VpnDeviceScriptParameters = {
    deviceFamily: "ISR",
    firmwareVersion: "IOS 15.1 (Preview)",
    vendor: "Cisco"
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualNetworkGateways.vpnDeviceConfigurationScript(
    resourceGroupName,
    virtualNetworkGatewayConnectionName,
    parameters
  );
  console.log(result);
}

getVpnDeviceConfigurationScript().catch(console.error);
