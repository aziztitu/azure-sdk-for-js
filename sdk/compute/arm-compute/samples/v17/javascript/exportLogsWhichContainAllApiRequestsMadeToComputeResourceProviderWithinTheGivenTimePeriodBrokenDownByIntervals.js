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
 * This sample demonstrates how to Export logs that show Api requests made by this subscription in the given time window to show throttling activities.
 *
 * @summary Export logs that show Api requests made by this subscription in the given time window to show throttling activities.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-11-01/examples/compute/LogAnalyticsRequestRateByInterval.json
 */
const { ComputeManagementClient } = require("@azure/arm-compute");
const { DefaultAzureCredential } = require("@azure/identity");

async function exportLogsWhichContainAllApiRequestsMadeToComputeResourceProviderWithinTheGivenTimePeriodBrokenDownByIntervals() {
  const subscriptionId = "{subscription-id}";
  const location = "westus";
  const parameters = {
    blobContainerSasUri: "https://somesasuri",
    fromTime: new Date("2018-01-21T01:54:06.862601Z"),
    groupByResourceName: true,
    intervalLength: "FiveMins",
    toTime: new Date("2018-01-23T01:54:06.862601Z"),
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.logAnalytics.beginExportRequestRateByIntervalAndWait(
    location,
    parameters
  );
  console.log(result);
}

exportLogsWhichContainAllApiRequestsMadeToComputeResourceProviderWithinTheGivenTimePeriodBrokenDownByIntervals().catch(
  console.error
);