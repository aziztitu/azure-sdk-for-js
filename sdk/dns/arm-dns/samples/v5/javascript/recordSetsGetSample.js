/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { DnsManagementClient } = require("@azure/arm-dns");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets a record set.
 *
 * @summary Gets a record set.
 * x-ms-original-file: specification/dns/resource-manager/Microsoft.Network/stable/2018-05-01/examples/GetARecordset.json
 */
async function getARecordset() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const zoneName = "zone1";
  const relativeRecordSetName = "record1";
  const recordType = "A";
  const credential = new DefaultAzureCredential();
  const client = new DnsManagementClient(credential, subscriptionId);
  const result = await client.recordSets.get(
    resourceGroupName,
    zoneName,
    relativeRecordSetName,
    recordType
  );
  console.log(result);
}

getARecordset().catch(console.error);

/**
 * This sample demonstrates how to Gets a record set.
 *
 * @summary Gets a record set.
 * x-ms-original-file: specification/dns/resource-manager/Microsoft.Network/stable/2018-05-01/examples/GetAAAARecordset.json
 */
async function getAaaaRecordset() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const zoneName = "zone1";
  const relativeRecordSetName = "record1";
  const recordType = "AAAA";
  const credential = new DefaultAzureCredential();
  const client = new DnsManagementClient(credential, subscriptionId);
  const result = await client.recordSets.get(
    resourceGroupName,
    zoneName,
    relativeRecordSetName,
    recordType
  );
  console.log(result);
}

getAaaaRecordset().catch(console.error);

/**
 * This sample demonstrates how to Gets a record set.
 *
 * @summary Gets a record set.
 * x-ms-original-file: specification/dns/resource-manager/Microsoft.Network/stable/2018-05-01/examples/GetCaaRecordset.json
 */
async function getCaaRecordset() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const zoneName = "zone1";
  const relativeRecordSetName = "record1";
  const recordType = "CAA";
  const credential = new DefaultAzureCredential();
  const client = new DnsManagementClient(credential, subscriptionId);
  const result = await client.recordSets.get(
    resourceGroupName,
    zoneName,
    relativeRecordSetName,
    recordType
  );
  console.log(result);
}

getCaaRecordset().catch(console.error);

/**
 * This sample demonstrates how to Gets a record set.
 *
 * @summary Gets a record set.
 * x-ms-original-file: specification/dns/resource-manager/Microsoft.Network/stable/2018-05-01/examples/GetCNAMERecordset.json
 */
async function getCnameRecordset() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const zoneName = "zone1";
  const relativeRecordSetName = "record1";
  const recordType = "CNAME";
  const credential = new DefaultAzureCredential();
  const client = new DnsManagementClient(credential, subscriptionId);
  const result = await client.recordSets.get(
    resourceGroupName,
    zoneName,
    relativeRecordSetName,
    recordType
  );
  console.log(result);
}

getCnameRecordset().catch(console.error);

/**
 * This sample demonstrates how to Gets a record set.
 *
 * @summary Gets a record set.
 * x-ms-original-file: specification/dns/resource-manager/Microsoft.Network/stable/2018-05-01/examples/GetMXRecordset.json
 */
async function getMxRecordset() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const zoneName = "zone1";
  const relativeRecordSetName = "record1";
  const recordType = "MX";
  const credential = new DefaultAzureCredential();
  const client = new DnsManagementClient(credential, subscriptionId);
  const result = await client.recordSets.get(
    resourceGroupName,
    zoneName,
    relativeRecordSetName,
    recordType
  );
  console.log(result);
}

getMxRecordset().catch(console.error);

/**
 * This sample demonstrates how to Gets a record set.
 *
 * @summary Gets a record set.
 * x-ms-original-file: specification/dns/resource-manager/Microsoft.Network/stable/2018-05-01/examples/GetNSRecordset.json
 */
async function getNsRecordset() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const zoneName = "zone1";
  const relativeRecordSetName = "record1";
  const recordType = "NS";
  const credential = new DefaultAzureCredential();
  const client = new DnsManagementClient(credential, subscriptionId);
  const result = await client.recordSets.get(
    resourceGroupName,
    zoneName,
    relativeRecordSetName,
    recordType
  );
  console.log(result);
}

getNsRecordset().catch(console.error);

/**
 * This sample demonstrates how to Gets a record set.
 *
 * @summary Gets a record set.
 * x-ms-original-file: specification/dns/resource-manager/Microsoft.Network/stable/2018-05-01/examples/GetPTRRecordset.json
 */
async function getPtrRecordset() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const zoneName = "0.0.127.in-addr.arpa";
  const relativeRecordSetName = "1";
  const recordType = "PTR";
  const credential = new DefaultAzureCredential();
  const client = new DnsManagementClient(credential, subscriptionId);
  const result = await client.recordSets.get(
    resourceGroupName,
    zoneName,
    relativeRecordSetName,
    recordType
  );
  console.log(result);
}

getPtrRecordset().catch(console.error);

/**
 * This sample demonstrates how to Gets a record set.
 *
 * @summary Gets a record set.
 * x-ms-original-file: specification/dns/resource-manager/Microsoft.Network/stable/2018-05-01/examples/GetSOARecordset.json
 */
async function getSoaRecordset() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const zoneName = "zone1";
  const relativeRecordSetName = "@";
  const recordType = "SOA";
  const credential = new DefaultAzureCredential();
  const client = new DnsManagementClient(credential, subscriptionId);
  const result = await client.recordSets.get(
    resourceGroupName,
    zoneName,
    relativeRecordSetName,
    recordType
  );
  console.log(result);
}

getSoaRecordset().catch(console.error);

/**
 * This sample demonstrates how to Gets a record set.
 *
 * @summary Gets a record set.
 * x-ms-original-file: specification/dns/resource-manager/Microsoft.Network/stable/2018-05-01/examples/GetSRVRecordset.json
 */
async function getSrvRecordset() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const zoneName = "zone1";
  const relativeRecordSetName = "record1";
  const recordType = "SRV";
  const credential = new DefaultAzureCredential();
  const client = new DnsManagementClient(credential, subscriptionId);
  const result = await client.recordSets.get(
    resourceGroupName,
    zoneName,
    relativeRecordSetName,
    recordType
  );
  console.log(result);
}

getSrvRecordset().catch(console.error);

/**
 * This sample demonstrates how to Gets a record set.
 *
 * @summary Gets a record set.
 * x-ms-original-file: specification/dns/resource-manager/Microsoft.Network/stable/2018-05-01/examples/GetTXTRecordset.json
 */
async function getTxtRecordset() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const zoneName = "zone1";
  const relativeRecordSetName = "record1";
  const recordType = "TXT";
  const credential = new DefaultAzureCredential();
  const client = new DnsManagementClient(credential, subscriptionId);
  const result = await client.recordSets.get(
    resourceGroupName,
    zoneName,
    relativeRecordSetName,
    recordType
  );
  console.log(result);
}

getTxtRecordset().catch(console.error);
