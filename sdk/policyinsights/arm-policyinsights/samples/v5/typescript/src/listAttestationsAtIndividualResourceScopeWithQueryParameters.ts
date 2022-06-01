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
 * This sample demonstrates how to Gets all attestations for a resource.
 *
 * @summary Gets all attestations for a resource.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2021-01-01/examples/Attestations_ListResourceScope_WithQuery.json
 */
import { PolicyInsightsClient } from "@azure/arm-policyinsights";
import { DefaultAzureCredential } from "@azure/identity";

async function listAttestationsAtIndividualResourceScopeWithQueryParameters() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceId =
    "subscriptions/35ee058e-5fa0-414c-8145-3ebb8d09b6e2/resourcegroups/myrg/providers/microsoft.compute/virtualMachines/devVM";
  const top = 1;
  const filter =
    "PolicyAssignmentId eq '/subscriptions/35ee058e-5fa0-414c-8145-3ebb8d09b6e2/providers/microsoft.authorization/policyassignments/b101830944f246d8a14088c5' AND PolicyDefinitionReferenceId eq '0b158b46-ff42-4799-8e39-08a5c23b4551'";
  const options = { top: top, filter: filter };
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.attestations.listForResource(
    resourceId,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listAttestationsAtIndividualResourceScopeWithQueryParameters().catch(
  console.error
);
