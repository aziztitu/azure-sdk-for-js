/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Image, LabServicesClient } from "@azure/arm-labservices";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Updates an image resource via PUT. Creating new resources via PUT will not function.
 *
 * @summary Updates an image resource via PUT. Creating new resources via PUT will not function.
 * x-ms-original-file: specification/labservices/resource-manager/Microsoft.LabServices/preview/2021-11-15-preview/examples/Images/putImage.json
 */
async function putImage() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "testrg123";
  const labPlanName = "testlabplan";
  const imageName = "image1";
  const body: Image = { enabledState: "Enabled" };
  const credential = new DefaultAzureCredential();
  const client = new LabServicesClient(credential, subscriptionId);
  const result = await client.images.createOrUpdate(
    resourceGroupName,
    labPlanName,
    imageName,
    body
  );
  console.log(result);
}

putImage().catch(console.error);
