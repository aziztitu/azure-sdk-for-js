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
 * This sample demonstrates how to Update recommended sensitivity labels states of a given SQL Pool using an operations batch.
 *
 * @summary Update recommended sensitivity labels states of a given SQL Pool using an operations batch.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/SensitivityLabelsRecommendedUpdate.json
 */
async function updateRecommendedSensitivityLabelsOfAGivenSqlPoolUsingAnOperationsBatch() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "myRG";
  const workspaceName = "myWorkspace";
  const sqlPoolName = "mySqlPool";
  const parameters = {
    operations: [
      { schema: "dbo", column: "column1", op: "enable", table: "table1" },
      { schema: "dbo", column: "column2", op: "enable", table: "table2" },
      { schema: "dbo", column: "column3", op: "disable", table: "table1" },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.sqlPoolRecommendedSensitivityLabels.update(
    resourceGroupName,
    workspaceName,
    sqlPoolName,
    parameters
  );
  console.log(result);
}

updateRecommendedSensitivityLabelsOfAGivenSqlPoolUsingAnOperationsBatch().catch(console.error);
