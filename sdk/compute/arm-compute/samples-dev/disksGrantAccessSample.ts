/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { GrantAccessData, ComputeManagementClient } from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Grants access to a disk.
 *
 * @summary Grants access to a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-12-01/examples/BeginGetAccessManagedDisk.json
 */
async function getASasOnAManagedDisk() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const diskName = "myDisk";
  const grantAccessData: GrantAccessData = {
    access: "Read",
    durationInSeconds: 300
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginGrantAccessAndWait(
    resourceGroupName,
    diskName,
    grantAccessData
  );
  console.log(result);
}

getASasOnAManagedDisk().catch(console.error);

/**
 * This sample demonstrates how to Grants access to a disk.
 *
 * @summary Grants access to a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-12-01/examples/BeginGetAccessManagedDiskWithVMGuestState.json
 */
async function getSasOnManagedDiskAndVMGuestState() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const diskName = "myDisk";
  const grantAccessData: GrantAccessData = {
    access: "Read",
    durationInSeconds: 300,
    getSecureVMGuestStateSAS: true
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginGrantAccessAndWait(
    resourceGroupName,
    diskName,
    grantAccessData
  );
  console.log(result);
}

getSasOnManagedDiskAndVMGuestState().catch(console.error);
