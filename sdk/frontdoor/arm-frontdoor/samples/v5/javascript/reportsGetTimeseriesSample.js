/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { FrontDoorManagementClient } = require("@azure/arm-frontdoor");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets a Timeseries for a given Experiment
 *
 * @summary Gets a Timeseries for a given Experiment
 * x-ms-original-file: specification/frontdoor/resource-manager/Microsoft.Network/stable/2019-11-01/examples/NetworkExperimentGetTimeseries.json
 */
async function getsATimeseriesForAGivenExperiment() {
  const subscriptionId = "subid";
  const resourceGroupName = "MyResourceGroup";
  const profileName = "MyProfile";
  const experimentName = "MyExperiment";
  const startDateTimeUTC = new Date("2019-07-21T17:32:28Z");
  const endDateTimeUTC = new Date("2019-09-21T17:32:28Z");
  const aggregationInterval = "Hourly";
  const timeseriesType = "MeasurementCounts";
  const credential = new DefaultAzureCredential();
  const client = new FrontDoorManagementClient(credential, subscriptionId);
  const result = await client.reports.getTimeseries(
    resourceGroupName,
    profileName,
    experimentName,
    startDateTimeUTC,
    endDateTimeUTC,
    aggregationInterval,
    timeseriesType
  );
  console.log(result);
}

getsATimeseriesForAGivenExperiment().catch(console.error);