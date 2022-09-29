/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SecurityCenter } = require("@azure/arm-security");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates or update a security GovernanceRule on the given subscription.
 *
 * @summary Creates or update a security GovernanceRule on the given subscription.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2022-01-01-preview/examples/GovernanceRules/PutGovernanceRule_example.json
 */
async function createGovernanceRule() {
  const subscriptionId = "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const ruleId = "ad9a8e26-29d9-4829-bb30-e597a58cdbb8";
  const governanceRule = {
    description: "A rule on critical recommendations",
    conditionSets: [
      {
        conditions: [
          {
            operator: "In",
            property: "$.AssessmentKey",
            value:
              '["b1cd27e0-4ecc-4246-939f-49c426d9d72f", "fe83f80b-073d-4ccf-93d9-6797eb870201"]',
          },
        ],
      },
    ],
    displayName: "Admin's rule",
    governanceEmailNotification: {
      disableManagerEmailNotification: false,
      disableOwnerEmailNotification: false,
    },
    isDisabled: false,
    isGracePeriod: true,
    ownerSource: { type: "Manually", value: "user@contoso.com" },
    remediationTimeframe: "7.00:00:00",
    rulePriority: 200,
    ruleType: "Integrated",
    sourceResourceType: "Assessments",
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.governanceRules.createOrUpdate(ruleId, governanceRule);
  console.log(result);
}

createGovernanceRule().catch(console.error);