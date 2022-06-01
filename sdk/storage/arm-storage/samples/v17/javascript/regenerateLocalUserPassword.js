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
 * This sample demonstrates how to Regenerate the local user SSH password.
 *
 * @summary Regenerate the local user SSH password.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2021-08-01/examples/LocalUserRegeneratePassword.json
 */
const { StorageManagementClient } = require("@azure/arm-storage");
const { DefaultAzureCredential } = require("@azure/identity");

async function regenerateLocalUserPassword() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "res6977";
  const accountName = "sto2527";
  const username = "user1";
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.localUsersOperations.regeneratePassword(
    resourceGroupName,
    accountName,
    username
  );
  console.log(result);
}

regenerateLocalUserPassword().catch(console.error);
