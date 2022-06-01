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
  ManagedHsm,
  ManagedHsmsListByResourceGroupOptionalParams,
  ManagedHsmsListBySubscriptionOptionalParams,
  DeletedManagedHsm,
  ManagedHsmsListDeletedOptionalParams,
  ManagedHsmsCreateOrUpdateOptionalParams,
  ManagedHsmsCreateOrUpdateResponse,
  ManagedHsmsUpdateOptionalParams,
  ManagedHsmsUpdateResponse,
  ManagedHsmsDeleteOptionalParams,
  ManagedHsmsGetOptionalParams,
  ManagedHsmsGetResponse,
  ManagedHsmsGetDeletedOptionalParams,
  ManagedHsmsGetDeletedResponse,
  ManagedHsmsPurgeDeletedOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ManagedHsms. */
export interface ManagedHsms {
  /**
   * The List operation gets information about the managed HSM Pools associated with the subscription and
   * within the specified resource group.
   * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: ManagedHsmsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<ManagedHsm>;
  /**
   * The List operation gets information about the managed HSM Pools associated with the subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: ManagedHsmsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<ManagedHsm>;
  /**
   * The List operation gets information about the deleted managed HSMs associated with the subscription.
   * @param options The options parameters.
   */
  listDeleted(
    options?: ManagedHsmsListDeletedOptionalParams
  ): PagedAsyncIterableIterator<DeletedManagedHsm>;
  /**
   * Create or update a managed HSM Pool in the specified subscription.
   * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
   * @param name Name of the managed HSM Pool
   * @param parameters Parameters to create or update the managed HSM Pool
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    name: string,
    parameters: ManagedHsm,
    options?: ManagedHsmsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ManagedHsmsCreateOrUpdateResponse>,
      ManagedHsmsCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update a managed HSM Pool in the specified subscription.
   * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
   * @param name Name of the managed HSM Pool
   * @param parameters Parameters to create or update the managed HSM Pool
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    name: string,
    parameters: ManagedHsm,
    options?: ManagedHsmsCreateOrUpdateOptionalParams
  ): Promise<ManagedHsmsCreateOrUpdateResponse>;
  /**
   * Update a managed HSM Pool in the specified subscription.
   * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
   * @param name Name of the managed HSM Pool
   * @param parameters Parameters to patch the managed HSM Pool
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    name: string,
    parameters: ManagedHsm,
    options?: ManagedHsmsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ManagedHsmsUpdateResponse>,
      ManagedHsmsUpdateResponse
    >
  >;
  /**
   * Update a managed HSM Pool in the specified subscription.
   * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
   * @param name Name of the managed HSM Pool
   * @param parameters Parameters to patch the managed HSM Pool
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    name: string,
    parameters: ManagedHsm,
    options?: ManagedHsmsUpdateOptionalParams
  ): Promise<ManagedHsmsUpdateResponse>;
  /**
   * Deletes the specified managed HSM Pool.
   * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
   * @param name The name of the managed HSM Pool to delete
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    name: string,
    options?: ManagedHsmsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes the specified managed HSM Pool.
   * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
   * @param name The name of the managed HSM Pool to delete
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    name: string,
    options?: ManagedHsmsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets the specified managed HSM Pool.
   * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
   * @param name The name of the managed HSM Pool.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    name: string,
    options?: ManagedHsmsGetOptionalParams
  ): Promise<ManagedHsmsGetResponse>;
  /**
   * Gets the specified deleted managed HSM.
   * @param name The name of the deleted managed HSM.
   * @param location The location of the deleted managed HSM.
   * @param options The options parameters.
   */
  getDeleted(
    name: string,
    location: string,
    options?: ManagedHsmsGetDeletedOptionalParams
  ): Promise<ManagedHsmsGetDeletedResponse>;
  /**
   * Permanently deletes the specified managed HSM.
   * @param name The name of the soft-deleted managed HSM.
   * @param location The location of the soft-deleted managed HSM.
   * @param options The options parameters.
   */
  beginPurgeDeleted(
    name: string,
    location: string,
    options?: ManagedHsmsPurgeDeletedOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Permanently deletes the specified managed HSM.
   * @param name The name of the soft-deleted managed HSM.
   * @param location The location of the soft-deleted managed HSM.
   * @param options The options parameters.
   */
  beginPurgeDeletedAndWait(
    name: string,
    location: string,
    options?: ManagedHsmsPurgeDeletedOptionalParams
  ): Promise<void>;
}
