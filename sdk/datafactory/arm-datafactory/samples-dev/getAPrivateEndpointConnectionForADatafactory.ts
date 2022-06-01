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
 * This sample demonstrates how to Gets a private endpoint connection
 *
 * @summary Gets a private endpoint connection
 * x-ms-original-file: specification/datafactory/resource-manager/Microsoft.DataFactory/stable/2018-06-01/examples/GetPrivateEndpointConnection.json
 */
import { DataFactoryManagementClient } from "@azure/arm-datafactory";
import { DefaultAzureCredential } from "@azure/identity";

async function getAPrivateEndpointConnectionForADatafactory() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "exampleResourceGroup";
  const factoryName = "exampleFactoryName";
  const privateEndpointConnectionName = "connection";
  const credential = new DefaultAzureCredential();
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  const result = await client.privateEndpointConnection.get(
    resourceGroupName,
    factoryName,
    privateEndpointConnectionName
  );
  console.log(result);
}

getAPrivateEndpointConnectionForADatafactory().catch(console.error);
