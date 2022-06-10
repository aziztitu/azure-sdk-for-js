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
 * This sample demonstrates how to The operation to get the VMSS VM run command.
 *
 * @summary The operation to get the VMSS VM run command.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-11-01/examples/runCommands/GetVirtualMachineScaleSetVMRunCommands.json
 */
const { ComputeManagementClient } = require("@azure/arm-compute");
const { DefaultAzureCredential } = require("@azure/identity");

async function getVirtualMachineScaleSetVMRunCommands() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const vmScaleSetName = "myvmScaleSet";
  const instanceId = "0";
  const runCommandName = "myRunCommand";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSetVMRunCommands.get(
    resourceGroupName,
    vmScaleSetName,
    instanceId,
    runCommandName
  );
  console.log(result);
}

getVirtualMachineScaleSetVMRunCommands().catch(console.error);