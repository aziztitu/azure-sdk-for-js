/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ServerCollector,
  ServerCollectorsListByProjectOptionalParams,
  ServerCollectorsGetOptionalParams,
  ServerCollectorsGetResponse,
  ServerCollectorsCreateOptionalParams,
  ServerCollectorsCreateResponse,
  ServerCollectorsDeleteOptionalParams,
  ServerCollectorsDeleteResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ServerCollectors. */
export interface ServerCollectors {
  /**
   * Get a list of Server collector.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param options The options parameters.
   */
  listByProject(
    resourceGroupName: string,
    projectName: string,
    options?: ServerCollectorsListByProjectOptionalParams
  ): PagedAsyncIterableIterator<ServerCollector>;
  /**
   * Get a Server collector.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param serverCollectorName Unique name of a Server collector within a project.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    projectName: string,
    serverCollectorName: string,
    options?: ServerCollectorsGetOptionalParams
  ): Promise<ServerCollectorsGetResponse>;
  /**
   * Create or Update Server collector
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param serverCollectorName Unique name of a Server collector within a project.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    projectName: string,
    serverCollectorName: string,
    options?: ServerCollectorsCreateOptionalParams
  ): Promise<ServerCollectorsCreateResponse>;
  /**
   * Delete a Server collector from the project.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param serverCollectorName Unique name of a Server collector within a project.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    projectName: string,
    serverCollectorName: string,
    options?: ServerCollectorsDeleteOptionalParams
  ): Promise<ServerCollectorsDeleteResponse>;
}
