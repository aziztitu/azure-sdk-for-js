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
 * This sample demonstrates how to Lists DNS forwarding rulesets in all resource groups of a subscription.
 *
 * @summary Lists DNS forwarding rulesets in all resource groups of a subscription.
 * x-ms-original-file: specification/dnsresolver/resource-manager/Microsoft.Network/preview/2020-04-01-preview/examples/DnsForwardingRuleset_ListBySubscription.json
 */
const { DnsResolverManagementClient } = require("@azure/arm-dnsresolver");
const { DefaultAzureCredential } = require("@azure/identity");

async function listDnsForwardingRulesetsBySubscription() {
  const subscriptionId = "abdd4249-9f34-4cc6-8e42-c2e32110603e";
  const credential = new DefaultAzureCredential();
  const client = new DnsResolverManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.dnsForwardingRulesets.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

listDnsForwardingRulesetsBySubscription().catch(console.error);
