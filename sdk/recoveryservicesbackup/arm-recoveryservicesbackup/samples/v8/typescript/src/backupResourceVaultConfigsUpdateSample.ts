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
  BackupResourceVaultConfigResource,
  RecoveryServicesBackupClient
} from "@azure/arm-recoveryservicesbackup";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Updates vault security config.
 *
 * @summary Updates vault security config.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2021-12-01/examples/Common/BackupResourceVaultConfigs_Patch.json
 */
async function updateVaultSecurityConfig() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const vaultName = "SwaggerTest";
  const resourceGroupName = "SwaggerTestRg";
  const parameters: BackupResourceVaultConfigResource = {
    properties: { enhancedSecurityState: "Enabled" }
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.backupResourceVaultConfigs.update(
    vaultName,
    resourceGroupName,
    parameters
  );
  console.log(result);
}

updateVaultSecurityConfig().catch(console.error);
