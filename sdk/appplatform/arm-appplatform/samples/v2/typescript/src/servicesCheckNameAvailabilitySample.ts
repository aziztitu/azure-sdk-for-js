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
  NameAvailabilityParameters,
  AppPlatformManagementClient
} from "@azure/arm-appplatform";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Checks that the resource name is valid and is not already in use.
 *
 * @summary Checks that the resource name is valid and is not already in use.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/stable/2022-04-01/examples/Services_CheckNameAvailability.json
 */
async function servicesCheckNameAvailability() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const location = "eastus";
  const availabilityParameters: NameAvailabilityParameters = {
    name: "myservice",
    type: "Microsoft.AppPlatform/Spring"
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.services.checkNameAvailability(
    location,
    availabilityParameters
  );
  console.log(result);
}

servicesCheckNameAvailability().catch(console.error);
