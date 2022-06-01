/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  FileServer,
  StorSimpleManagementClient
} from "@azure/arm-storsimple1200series";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates or updates the file server.
 *
 * @summary Creates or updates the file server.
 * x-ms-original-file: specification/storSimple1200Series/resource-manager/Microsoft.StorSimple/stable/2016-10-01/examples/FileServersCreateOrUpdate.json
 */
async function fileServersCreateOrUpdate() {
  const subscriptionId = "9eb689cd-7243-43b4-b6f6-5c65cb296641";
  const deviceName = "HSDK-4XY4FI2IVG";
  const fileServerName = "HSDK-4XY4FI2IVG";
  const resourceGroupName = "ResourceGroupForSDKTest";
  const managerName = "hAzureSDKOperations";
  const fileServer: FileServer = {
    name: "HSDK-4XY4FI2IVG",
    description: "Demo FileServer for SDK Test",
    backupScheduleGroupId:
      "/subscriptions/9eb689cd-7243-43b4-b6f6-5c65cb296641/resourceGroups/ResourceGroupForSDKTest/providers/Microsoft.StorSimple/managers/hAzureSDKOperations/devices/hsdk-4xy4fi2ivg/backupScheduleGroups/BackupSchGroupForSDKTest",
    domainName: "fareast.corp.microsoft.com",
    storageDomainId:
      "/subscriptions/9eb689cd-7243-43b4-b6f6-5c65cb296641/resourceGroups/ResourceGroupForSDKTest/providers/Microsoft.StorSimple/managers/hAzureSDKOperations/storageDomains/sd-fs-HSDK-4XY4FI2IVG"
  };
  const credential = new DefaultAzureCredential();
  const client = new StorSimpleManagementClient(credential, subscriptionId);
  const result = await client.fileServers.beginCreateOrUpdateAndWait(
    deviceName,
    fileServerName,
    resourceGroupName,
    managerName,
    fileServer
  );
  console.log(result);
}

fileServersCreateOrUpdate().catch(console.error);
