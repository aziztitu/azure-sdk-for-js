/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  PrivateLinkResourcesListByVaultOptionalParams,
  PrivateLinkResourcesListByVaultResponse
} from "../models";

/** Interface representing a PrivateLinkResources. */
export interface PrivateLinkResources {
  /**
   * Gets the private link resources supported for the key vault.
   * @param resourceGroupName Name of the resource group that contains the key vault.
   * @param vaultName The name of the key vault.
   * @param options The options parameters.
   */
  listByVault(
    resourceGroupName: string,
    vaultName: string,
    options?: PrivateLinkResourcesListByVaultOptionalParams
  ): Promise<PrivateLinkResourcesListByVaultResponse>;
}
