/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { QueryRequest, ResourceGraphClient } from "@azure/arm-resourcegraph";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Queries the resources managed by Azure Resource Manager for scopes specified in the request.
 *
 * @summary Queries the resources managed by Azure Resource Manager for scopes specified in the request.
 * x-ms-original-file: specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/preview/2021-06-01-preview/examples/ResourcesPropertiesQuery.json
 */
async function accessAPropertiesField() {
  const query: QueryRequest = {
    query:
      "Resources | where type =~ 'Microsoft.Compute/virtualMachines' | summarize count() by tostring(properties.storageProfile.osDisk.osType)",
    subscriptions: ["cfbbd179-59d2-4052-aa06-9270a38aa9d6"]
  };
  const credential = new DefaultAzureCredential();
  const client = new ResourceGraphClient(credential);
  const result = await client.resources(query);
  console.log(result);
}

accessAPropertiesField().catch(console.error);

/**
 * This sample demonstrates how to Queries the resources managed by Azure Resource Manager for scopes specified in the request.
 *
 * @summary Queries the resources managed by Azure Resource Manager for scopes specified in the request.
 * x-ms-original-file: specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/preview/2021-06-01-preview/examples/ResourcesMgBasicQuery.json
 */
async function basicManagementGroupQuery() {
  const query: QueryRequest = {
    managementGroups: ["e927f598-c1d4-4f72-8541-95d83a6a4ac8", "ProductionMG"],
    query: "Resources | project id, name, type, location, tags | limit 3"
  };
  const credential = new DefaultAzureCredential();
  const client = new ResourceGraphClient(credential);
  const result = await client.resources(query);
  console.log(result);
}

basicManagementGroupQuery().catch(console.error);

/**
 * This sample demonstrates how to Queries the resources managed by Azure Resource Manager for scopes specified in the request.
 *
 * @summary Queries the resources managed by Azure Resource Manager for scopes specified in the request.
 * x-ms-original-file: specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/preview/2021-06-01-preview/examples/ResourcesBasicQuery.json
 */
async function basicQuery() {
  const query: QueryRequest = {
    query: "Resources | project id, name, type, location, tags | limit 3",
    subscriptions: ["cfbbd179-59d2-4052-aa06-9270a38aa9d6"]
  };
  const credential = new DefaultAzureCredential();
  const client = new ResourceGraphClient(credential);
  const result = await client.resources(query);
  console.log(result);
}

basicQuery().catch(console.error);

/**
 * This sample demonstrates how to Queries the resources managed by Azure Resource Manager for scopes specified in the request.
 *
 * @summary Queries the resources managed by Azure Resource Manager for scopes specified in the request.
 * x-ms-original-file: specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/preview/2021-06-01-preview/examples/ResourcesTenantBasicQuery.json
 */
async function basicTenantQuery() {
  const query: QueryRequest = {
    query: "Resources | project id, name, type, location, tags | limit 3"
  };
  const credential = new DefaultAzureCredential();
  const client = new ResourceGraphClient(credential);
  const result = await client.resources(query);
  console.log(result);
}

basicTenantQuery().catch(console.error);

/**
 * This sample demonstrates how to Queries the resources managed by Azure Resource Manager for scopes specified in the request.
 *
 * @summary Queries the resources managed by Azure Resource Manager for scopes specified in the request.
 * x-ms-original-file: specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/preview/2021-06-01-preview/examples/ResourcesComplexQuery.json
 */
async function complexQuery() {
  const query: QueryRequest = {
    query:
      "Resources | project id, name, type, location | where type =~ 'Microsoft.Compute/virtualMachines' | summarize count() by location | top 3 by count_",
    subscriptions: ["cfbbd179-59d2-4052-aa06-9270a38aa9d6"]
  };
  const credential = new DefaultAzureCredential();
  const client = new ResourceGraphClient(credential);
  const result = await client.resources(query);
  console.log(result);
}

complexQuery().catch(console.error);

/**
 * This sample demonstrates how to Queries the resources managed by Azure Resource Manager for scopes specified in the request.
 *
 * @summary Queries the resources managed by Azure Resource Manager for scopes specified in the request.
 * x-ms-original-file: specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/preview/2021-06-01-preview/examples/ResourcesFilterQuery.json
 */
async function filterResources() {
  const query: QueryRequest = {
    query:
      "Resources | project id, name, type, location | where type =~ 'Microsoft.Compute/virtualMachines' | limit 3",
    subscriptions: ["cfbbd179-59d2-4052-aa06-9270a38aa9d6"]
  };
  const credential = new DefaultAzureCredential();
  const client = new ResourceGraphClient(credential);
  const result = await client.resources(query);
  console.log(result);
}

filterResources().catch(console.error);

/**
 * This sample demonstrates how to Queries the resources managed by Azure Resource Manager for scopes specified in the request.
 *
 * @summary Queries the resources managed by Azure Resource Manager for scopes specified in the request.
 * x-ms-original-file: specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/preview/2021-06-01-preview/examples/ResourcesFirstPageQuery.json
 */
async function firstPageQuery() {
  const query: QueryRequest = {
    options: { skip: 0, top: 3 },
    query:
      "Resources | where name contains 'test' | project id, name, type, location",
    subscriptions: ["cfbbd179-59d2-4052-aa06-9270a38aa9d6"]
  };
  const credential = new DefaultAzureCredential();
  const client = new ResourceGraphClient(credential);
  const result = await client.resources(query);
  console.log(result);
}

firstPageQuery().catch(console.error);

/**
 * This sample demonstrates how to Queries the resources managed by Azure Resource Manager for scopes specified in the request.
 *
 * @summary Queries the resources managed by Azure Resource Manager for scopes specified in the request.
 * x-ms-original-file: specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/preview/2021-06-01-preview/examples/ResourcesNextPageQuery.json
 */
async function nextPageQuery() {
  const query: QueryRequest = {
    options: {
      skipToken: "eyAibm8iOiAibHVjayIsICJidXQiOiAibmljZSIsICJ0cnkiOiAiISIgfQ=="
    },
    query:
      "Resources | where name contains 'test' | project id, name, type, location",
    subscriptions: ["cfbbd179-59d2-4052-aa06-9270a38aa9d6"]
  };
  const credential = new DefaultAzureCredential();
  const client = new ResourceGraphClient(credential);
  const result = await client.resources(query);
  console.log(result);
}

nextPageQuery().catch(console.error);

/**
 * This sample demonstrates how to Queries the resources managed by Azure Resource Manager for scopes specified in the request.
 *
 * @summary Queries the resources managed by Azure Resource Manager for scopes specified in the request.
 * x-ms-original-file: specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/preview/2021-06-01-preview/examples/ResourcesFacetQuery.json
 */
async function queryWithAFacetRequest() {
  const query: QueryRequest = {
    facets: [
      { expression: "location", options: { top: 3, sortOrder: "desc" } },
      {
        expression: "properties.storageProfile.osDisk.osType",
        options: { top: 3, sortOrder: "desc" }
      },
      {
        expression: "nonExistingColumn",
        options: { top: 3, sortOrder: "desc" }
      },
      {
        expression: "resourceGroup",
        options: { top: 3, sortBy: "tolower(resourceGroup)", sortOrder: "asc" }
      },
      {
        expression: "resourceGroup",
        options: { top: 3, filter: "resourceGroup contains 'test'" }
      }
    ],
    query:
      "Resources | where type =~ 'Microsoft.Compute/virtualMachines' | project id, name, location, resourceGroup, properties.storageProfile.osDisk.osType | limit 5",
    subscriptions: ["cfbbd179-59d2-4052-aa06-9270a38aa9d6"]
  };
  const credential = new DefaultAzureCredential();
  const client = new ResourceGraphClient(credential);
  const result = await client.resources(query);
  console.log(result);
}

queryWithAFacetRequest().catch(console.error);

/**
 * This sample demonstrates how to Queries the resources managed by Azure Resource Manager for scopes specified in the request.
 *
 * @summary Queries the resources managed by Azure Resource Manager for scopes specified in the request.
 * x-ms-original-file: specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/preview/2021-06-01-preview/examples/ResourcesRandomPageQuery.json
 */
async function randomPageQuery() {
  const query: QueryRequest = {
    options: { skip: 10, top: 2 },
    query:
      "Resources | where name contains 'test' | project id, name, type, location",
    subscriptions: ["cfbbd179-59d2-4052-aa06-9270a38aa9d6"]
  };
  const credential = new DefaultAzureCredential();
  const client = new ResourceGraphClient(credential);
  const result = await client.resources(query);
  console.log(result);
}

randomPageQuery().catch(console.error);

/**
 * This sample demonstrates how to Queries the resources managed by Azure Resource Manager for scopes specified in the request.
 *
 * @summary Queries the resources managed by Azure Resource Manager for scopes specified in the request.
 * x-ms-original-file: specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/preview/2021-06-01-preview/examples/ResourcesSummarizeQuery.json
 */
async function summarizeResourcesByLocation() {
  const query: QueryRequest = {
    query:
      "Resources | project id, name, type, location | summarize by location",
    subscriptions: ["cfbbd179-59d2-4052-aa06-9270a38aa9d6"]
  };
  const credential = new DefaultAzureCredential();
  const client = new ResourceGraphClient(credential);
  const result = await client.resources(query);
  console.log(result);
}

summarizeResourcesByLocation().catch(console.error);
