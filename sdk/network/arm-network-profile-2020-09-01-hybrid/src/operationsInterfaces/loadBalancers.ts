/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  LoadBalancer,
  LoadBalancersListAllOptionalParams,
  LoadBalancersListOptionalParams,
  LoadBalancersDeleteOptionalParams,
  LoadBalancersGetOptionalParams,
  LoadBalancersGetResponse,
  LoadBalancersCreateOrUpdateOptionalParams,
  LoadBalancersCreateOrUpdateResponse,
  TagsObject,
  LoadBalancersUpdateTagsOptionalParams,
  LoadBalancersUpdateTagsResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a LoadBalancers. */
export interface LoadBalancers {
  /**
   * Gets all the load balancers in a subscription.
   * @param options The options parameters.
   */
  listAll(
    options?: LoadBalancersListAllOptionalParams
  ): PagedAsyncIterableIterator<LoadBalancer>;
  /**
   * Gets all the load balancers in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    options?: LoadBalancersListOptionalParams
  ): PagedAsyncIterableIterator<LoadBalancer>;
  /**
   * Deletes the specified load balancer.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    loadBalancerName: string,
    options?: LoadBalancersDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes the specified load balancer.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    loadBalancerName: string,
    options?: LoadBalancersDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets the specified load balancer.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    loadBalancerName: string,
    options?: LoadBalancersGetOptionalParams
  ): Promise<LoadBalancersGetResponse>;
  /**
   * Creates or updates a load balancer.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param parameters Parameters supplied to the create or update load balancer operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    loadBalancerName: string,
    parameters: LoadBalancer,
    options?: LoadBalancersCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LoadBalancersCreateOrUpdateResponse>,
      LoadBalancersCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a load balancer.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param parameters Parameters supplied to the create or update load balancer operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    loadBalancerName: string,
    parameters: LoadBalancer,
    options?: LoadBalancersCreateOrUpdateOptionalParams
  ): Promise<LoadBalancersCreateOrUpdateResponse>;
  /**
   * Updates a load balancer tags.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param parameters Parameters supplied to update load balancer tags.
   * @param options The options parameters.
   */
  beginUpdateTags(
    resourceGroupName: string,
    loadBalancerName: string,
    parameters: TagsObject,
    options?: LoadBalancersUpdateTagsOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LoadBalancersUpdateTagsResponse>,
      LoadBalancersUpdateTagsResponse
    >
  >;
  /**
   * Updates a load balancer tags.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param parameters Parameters supplied to update load balancer tags.
   * @param options The options parameters.
   */
  beginUpdateTagsAndWait(
    resourceGroupName: string,
    loadBalancerName: string,
    parameters: TagsObject,
    options?: LoadBalancersUpdateTagsOptionalParams
  ): Promise<LoadBalancersUpdateTagsResponse>;
}
