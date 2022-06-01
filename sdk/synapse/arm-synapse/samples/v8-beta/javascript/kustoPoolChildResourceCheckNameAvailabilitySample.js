/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SynapseManagementClient } = require("@azure/arm-synapse");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Checks that the Kusto Pool child resource name is valid and is not already in use.
 *
 * @summary Checks that the Kusto Pool child resource name is valid and is not already in use.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/preview/2021-06-01-preview/examples/KustoPoolAttachedDatabaseConfigurationCheckNameAvailability.json
 */
async function kustoPoolAttachedDatabaseConfigurationCheckNameAvailability() {
  const subscriptionId = "12345678-1234-1234-1234-123456789098";
  const workspaceName = "kustorptest";
  const kustoPoolName = "kustoclusterrptest4";
  const resourceGroupName = "kustorptest";
  const resourceName = {
    name: "adc1",
    type: "Microsoft.Synapse/workspaces/kustoPools/attachedDatabaseConfigurations",
  };
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.kustoPoolChildResource.checkNameAvailability(
    workspaceName,
    kustoPoolName,
    resourceGroupName,
    resourceName
  );
  console.log(result);
}

kustoPoolAttachedDatabaseConfigurationCheckNameAvailability().catch(console.error);

/**
 * This sample demonstrates how to Checks that the Kusto Pool child resource name is valid and is not already in use.
 *
 * @summary Checks that the Kusto Pool child resource name is valid and is not already in use.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/preview/2021-06-01-preview/examples/KustoPoolDatabasesCheckNameAvailability.json
 */
async function kustoPoolDatabasesCheckNameAvailability() {
  const subscriptionId = "12345678-1234-1234-1234-123456789098";
  const workspaceName = "synapseWorkspaceName";
  const kustoPoolName = "kustoclusterrptest4";
  const resourceGroupName = "kustorptest";
  const resourceName = {
    name: "database1",
    type: "Microsoft.Synapse/workspaces/kustoPools/databases",
  };
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.kustoPoolChildResource.checkNameAvailability(
    workspaceName,
    kustoPoolName,
    resourceGroupName,
    resourceName
  );
  console.log(result);
}

kustoPoolDatabasesCheckNameAvailability().catch(console.error);
