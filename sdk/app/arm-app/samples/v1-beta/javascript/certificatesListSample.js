/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ContainerAppsAPIClient } = require("@azure/arm-app");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get the Certificates in a given managed environment.
 *
 * @summary Get the Certificates in a given managed environment.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-01-01-preview/examples/Certificates_ListByManagedEnvironment.json
 */
async function listCertificatesByManagedEnvironment() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "examplerg";
  const managedEnvironmentName = "testcontainerenv";
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.certificates.list(resourceGroupName, managedEnvironmentName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

listCertificatesByManagedEnvironment().catch(console.error);
