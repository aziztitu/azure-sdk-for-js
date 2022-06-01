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
 * This sample demonstrates how to Deletes a VpnServerConfiguration.
 *
 * @summary Deletes a VpnServerConfiguration.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-08-01/examples/VpnServerConfigurationDelete.json
 */
async function vpnServerConfigurationDelete() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const vpnServerConfigurationName = "vpnServerConfiguration1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.vpnServerConfigurations.beginDeleteAndWait(
    resourceGroupName,
    vpnServerConfigurationName
  );
  console.log(result);
}

vpnServerConfigurationDelete().catch(console.error);
