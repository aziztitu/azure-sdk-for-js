/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureDigitalTwinsManagementClient } = require("@azure/arm-digitaltwins");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or update DigitalTwinsInstance endpoint.
 *
 * @summary Create or update DigitalTwinsInstance endpoint.
 * x-ms-original-file: specification/digitaltwins/resource-manager/Microsoft.DigitalTwins/preview/2021-06-30-preview/examples/DigitalTwinsEndpointPut_example.json
 */
async function putADigitalTwinsEndpointResource() {
  const subscriptionId = "50016170-c839-41ba-a724-51e9df440b9e";
  const resourceGroupName = "resRg";
  const resourceName = "myDigitalTwinsService";
  const endpointName = "myServiceBus";
  const endpointDescription = {
    properties: {
      authenticationType: "KeyBased",
      endpointType: "ServiceBus",
      primaryConnectionString:
        "Endpoint=sb://mysb.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=xyzxyzoX4=;EntityPath=abcabc",
      secondaryConnectionString:
        "Endpoint=sb://mysb.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=xyzxyzoX4=;EntityPath=abcabc",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureDigitalTwinsManagementClient(credential, subscriptionId);
  const result = await client.digitalTwinsEndpoint.beginCreateOrUpdateAndWait(
    resourceGroupName,
    resourceName,
    endpointName,
    endpointDescription
  );
  console.log(result);
}

putADigitalTwinsEndpointResource().catch(console.error);

/**
 * This sample demonstrates how to Create or update DigitalTwinsInstance endpoint.
 *
 * @summary Create or update DigitalTwinsInstance endpoint.
 * x-ms-original-file: specification/digitaltwins/resource-manager/Microsoft.DigitalTwins/preview/2021-06-30-preview/examples/DigitalTwinsEndpointPut_WithIdentity_example.json
 */
async function putADigitalTwinsEndpointResourceWithIdentity() {
  const subscriptionId = "50016170-c839-41ba-a724-51e9df440b9e";
  const resourceGroupName = "resRg";
  const resourceName = "myDigitalTwinsService";
  const endpointName = "myServiceBus";
  const endpointDescription = {
    properties: {
      authenticationType: "IdentityBased",
      endpointType: "ServiceBus",
      endpointUri: "sb://mysb.servicebus.windows.net/",
      entityPath: "mysbtopic",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureDigitalTwinsManagementClient(credential, subscriptionId);
  const result = await client.digitalTwinsEndpoint.beginCreateOrUpdateAndWait(
    resourceGroupName,
    resourceName,
    endpointName,
    endpointDescription
  );
  console.log(result);
}

putADigitalTwinsEndpointResourceWithIdentity().catch(console.error);
