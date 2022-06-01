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
  AvailabilityStatusesGetByResourceOptionalParams,
  MicrosoftResourceHealth
} from "@azure/arm-resourcehealth";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets current availability status for a single resource
 *
 * @summary Gets current availability status for a single resource
 * x-ms-original-file: specification/resourcehealth/resource-manager/Microsoft.ResourceHealth/stable/2017-07-01/examples/AvailabilityStatus_GetByResource.json
 */
async function getCurrentHealthByResource() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceUri = "resourceUri";
  const expand = "recommendedactions";
  const options: AvailabilityStatusesGetByResourceOptionalParams = { expand };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftResourceHealth(credential, subscriptionId);
  const result = await client.availabilityStatuses.getByResource(
    resourceUri,
    options
  );
  console.log(result);
}

getCurrentHealthByResource().catch(console.error);
