/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  DataContainerData,
  DataContainersListOptionalParams,
  DataContainersDeleteOptionalParams,
  DataContainersGetOptionalParams,
  DataContainersGetResponse,
  DataContainersCreateOrUpdateOptionalParams,
  DataContainersCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DataContainers. */
export interface DataContainers {
  /**
   * List data containers.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    options?: DataContainersListOptionalParams
  ): PagedAsyncIterableIterator<DataContainerData>;
  /**
   * Delete container.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: DataContainersDeleteOptionalParams
  ): Promise<void>;
  /**
   * Get container.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: DataContainersGetOptionalParams
  ): Promise<DataContainersGetResponse>;
  /**
   * Create or update container.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name.
   * @param body Container entity to create or update.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    body: DataContainerData,
    options?: DataContainersCreateOrUpdateOptionalParams
  ): Promise<DataContainersCreateOrUpdateResponse>;
}
