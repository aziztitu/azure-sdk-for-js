/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { EventGridManagementClient } = require("@azure/arm-eventgrid");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Asynchronously creates or updates an event subscription of a namespace topic with the specified parameters. Existing event subscriptions will be updated with this API.
 *
 * @summary Asynchronously creates or updates an event subscription of a namespace topic with the specified parameters. Existing event subscriptions will be updated with this API.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2023-12-15-preview/examples/NamespaceTopicEventSubscriptions_CreateOrUpdate.json
 */
async function namespaceTopicEventSubscriptionsCreateOrUpdate() {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] || "8f6b6269-84f2-4d09-9e31-1127efcd1e40";
  const resourceGroupName = process.env["EVENTGRID_RESOURCE_GROUP"] || "examplerg";
  const namespaceName = "examplenamespace2";
  const topicName = "examplenamespacetopic2";
  const eventSubscriptionName = "examplenamespacetopicEventSub2";
  const eventSubscriptionInfo = {
    deliveryConfiguration: {
      deliveryMode: "Queue",
      queue: {
        eventTimeToLive: "P1D",
        maxDeliveryCount: 4,
        receiveLockDurationInSeconds: 60,
      },
    },
    eventDeliverySchema: "CloudEventSchemaV1_0",
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.namespaceTopicEventSubscriptions.beginCreateOrUpdateAndWait(
    resourceGroupName,
    namespaceName,
    topicName,
    eventSubscriptionName,
    eventSubscriptionInfo,
  );
  console.log(result);
}

async function main() {
  namespaceTopicEventSubscriptionsCreateOrUpdate();
}

main().catch(console.error);
