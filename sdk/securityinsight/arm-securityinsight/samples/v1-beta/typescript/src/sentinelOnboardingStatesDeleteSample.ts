/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SecurityInsights } from "@azure/arm-securityinsight";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Delete Sentinel onboarding state
 *
 * @summary Delete Sentinel onboarding state
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-01-01-preview/examples/onboardingStates/DeleteSentinelOnboardingState.json
 */
async function deleteSentinelOnboardingState() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const sentinelOnboardingStateName = "default";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.sentinelOnboardingStates.delete(
    resourceGroupName,
    workspaceName,
    sentinelOnboardingStateName
  );
  console.log(result);
}

deleteSentinelOnboardingState().catch(console.error);
