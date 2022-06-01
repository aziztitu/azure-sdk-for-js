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
 * This sample demonstrates how to Creates or updates the alert rule.
 *
 * @summary Creates or updates the alert rule.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2021-09-01-preview/examples/alertRules/CreateFusionAlertRule.json
 */
const { SecurityInsights } = require("@azure/arm-securityinsight");
const { DefaultAzureCredential } = require("@azure/identity");

async function createsOrUpdatesAFusionAlertRule() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const ruleId = "myFirstFusionRule";
  const alertRule = {
    alertRuleTemplateName: "f71aba3d-28fb-450b-b192-4e76a83015c8",
    enabled: true,
    etag: "3d00c3ca-0000-0100-0000-5d42d5010000",
    kind: "Fusion",
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.alertRules.createOrUpdate(
    resourceGroupName,
    workspaceName,
    ruleId,
    alertRule
  );
  console.log(result);
}

createsOrUpdatesAFusionAlertRule().catch(console.error);
