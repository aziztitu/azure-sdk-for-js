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
 * This sample demonstrates how to Extends the immutabilityPeriodSinceCreationInDays of a locked immutabilityPolicy. The only action allowed on a Locked policy will be this action. ETag in If-Match is required for this operation.
 *
 * @summary Extends the immutabilityPeriodSinceCreationInDays of a locked immutabilityPolicy. The only action allowed on a Locked policy will be this action. ETag in If-Match is required for this operation.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2021-08-01/examples/BlobContainersExtendImmutabilityPolicy.json
 */
import {
  ImmutabilityPolicy,
  StorageManagementClient
} from "@azure/arm-storage";
import { DefaultAzureCredential } from "@azure/identity";

async function extendImmutabilityPolicy() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "res6238";
  const accountName = "sto232";
  const containerName = "container5023";
  const ifMatch = '"8d59f830d0c3bf9"';
  const parameters: ImmutabilityPolicy = {
    immutabilityPeriodSinceCreationInDays: 100
  };
  const options = { parameters: parameters };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.blobContainers.extendImmutabilityPolicy(
    resourceGroupName,
    accountName,
    containerName,
    ifMatch,
    options
  );
  console.log(result);
}

extendImmutabilityPolicy().catch(console.error);
