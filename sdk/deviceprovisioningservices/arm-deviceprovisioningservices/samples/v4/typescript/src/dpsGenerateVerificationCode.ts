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
 * This sample demonstrates how to Generate verification code for Proof of Possession.
 *
 * @summary Generate verification code for Proof of Possession.
 * x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/stable/2021-10-15/examples/DPSGenerateVerificationCode.json
 */
import { IotDpsClient } from "@azure/arm-deviceprovisioningservices";
import { DefaultAzureCredential } from "@azure/identity";

async function dpsGenerateVerificationCode() {
  const subscriptionId = "91d12660-3dec-467a-be2a-213b5544ddc0";
  const certificateName = "cert";
  const ifMatch = "AAAAAAAADGk=";
  const resourceGroupName = "myResourceGroup";
  const provisioningServiceName = "myFirstProvisioningService";
  const credential = new DefaultAzureCredential();
  const client = new IotDpsClient(credential, subscriptionId);
  const result = await client.dpsCertificate.generateVerificationCode(
    certificateName,
    ifMatch,
    resourceGroupName,
    provisioningServiceName
  );
  console.log(result);
}

dpsGenerateVerificationCode().catch(console.error);
