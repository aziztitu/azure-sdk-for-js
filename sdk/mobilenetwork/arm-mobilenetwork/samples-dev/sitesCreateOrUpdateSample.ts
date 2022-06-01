/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Site, MobileNetworkManagementClient } from "@azure/arm-mobilenetwork";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates or updates a mobile network site.
 *
 * @summary Creates or updates a mobile network site.
 * x-ms-original-file: specification/mobilenetwork/resource-manager/Microsoft.MobileNetwork/preview/2022-03-01-preview/examples/SiteCreate.json
 */
async function createMobileNetworkSite() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const mobileNetworkName = "testMobileNetwork";
  const siteName = "testSite";
  const parameters: Site = {
    location: "testLocation",
    networkFunctions: [
      {
        id:
          "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.HybridNetwork/networkFunctions/testNf"
      }
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new MobileNetworkManagementClient(credential, subscriptionId);
  const result = await client.sites.beginCreateOrUpdateAndWait(
    resourceGroupName,
    mobileNetworkName,
    siteName,
    parameters
  );
  console.log(result);
}

createMobileNetworkSite().catch(console.error);
