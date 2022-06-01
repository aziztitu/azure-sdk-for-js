/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  IntegrationRuntimeStatusGetOptionalParams,
  IntegrationRuntimeStatusGetResponse
} from "../models";

/** Interface representing a IntegrationRuntimeStatusOperations. */
export interface IntegrationRuntimeStatusOperations {
  /**
   * Get the integration runtime status
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param integrationRuntimeName Integration runtime name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    integrationRuntimeName: string,
    options?: IntegrationRuntimeStatusGetOptionalParams
  ): Promise<IntegrationRuntimeStatusGetResponse>;
}
