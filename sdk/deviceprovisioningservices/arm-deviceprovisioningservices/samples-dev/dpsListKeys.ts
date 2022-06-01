/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to List the primary and secondary keys for a provisioning service.
 *
 * @summary List the primary and secondary keys for a provisioning service.
 * x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/stable/2021-10-15/examples/DPSListKeys.json
 */
import { IotDpsClient } from "@azure/arm-deviceprovisioningservices";
import { DefaultAzureCredential } from "@azure/identity";

async function dpsListKeys() {
  const subscriptionId = "91d12660-3dec-467a-be2a-213b5544ddc0";
  const provisioningServiceName = "myFirstProvisioningService";
  const resourceGroupName = "myResourceGroup";
  const credential = new DefaultAzureCredential();
  const client = new IotDpsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.iotDpsResource.listKeys(
    provisioningServiceName,
    resourceGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

dpsListKeys().catch(console.error);
