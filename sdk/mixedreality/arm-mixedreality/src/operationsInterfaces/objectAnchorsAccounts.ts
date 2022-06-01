/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ObjectAnchorsAccount,
  ObjectAnchorsAccountsListBySubscriptionOptionalParams,
  ObjectAnchorsAccountsListByResourceGroupOptionalParams,
  ObjectAnchorsAccountsDeleteOptionalParams,
  ObjectAnchorsAccountsGetOptionalParams,
  ObjectAnchorsAccountsGetResponse,
  ObjectAnchorsAccountsUpdateOptionalParams,
  ObjectAnchorsAccountsUpdateResponse,
  ObjectAnchorsAccountsCreateOptionalParams,
  ObjectAnchorsAccountsCreateResponse,
  ObjectAnchorsAccountsListKeysOptionalParams,
  ObjectAnchorsAccountsListKeysResponse,
  AccountKeyRegenerateRequest,
  ObjectAnchorsAccountsRegenerateKeysOptionalParams,
  ObjectAnchorsAccountsRegenerateKeysResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ObjectAnchorsAccounts. */
export interface ObjectAnchorsAccounts {
  /**
   * List Object Anchors Accounts by Subscription
   * @param options The options parameters.
   */
  listBySubscription(
    options?: ObjectAnchorsAccountsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<ObjectAnchorsAccount>;
  /**
   * List Resources by Resource Group
   * @param resourceGroupName Name of an Azure resource group.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: ObjectAnchorsAccountsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<ObjectAnchorsAccount>;
  /**
   * Delete an Object Anchors Account.
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Name of an Mixed Reality Account.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    options?: ObjectAnchorsAccountsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Retrieve an Object Anchors Account.
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Name of an Mixed Reality Account.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    options?: ObjectAnchorsAccountsGetOptionalParams
  ): Promise<ObjectAnchorsAccountsGetResponse>;
  /**
   * Updating an Object Anchors Account
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Name of an Mixed Reality Account.
   * @param objectAnchorsAccount Object Anchors Account parameter.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    accountName: string,
    objectAnchorsAccount: ObjectAnchorsAccount,
    options?: ObjectAnchorsAccountsUpdateOptionalParams
  ): Promise<ObjectAnchorsAccountsUpdateResponse>;
  /**
   * Creating or Updating an object anchors Account.
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Name of an Mixed Reality Account.
   * @param objectAnchorsAccount Object Anchors Account parameter.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    accountName: string,
    objectAnchorsAccount: ObjectAnchorsAccount,
    options?: ObjectAnchorsAccountsCreateOptionalParams
  ): Promise<ObjectAnchorsAccountsCreateResponse>;
  /**
   * List Both of the 2 Keys of an object anchors Account
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Name of an Mixed Reality Account.
   * @param options The options parameters.
   */
  listKeys(
    resourceGroupName: string,
    accountName: string,
    options?: ObjectAnchorsAccountsListKeysOptionalParams
  ): Promise<ObjectAnchorsAccountsListKeysResponse>;
  /**
   * Regenerate specified Key of an object anchors Account
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Name of an Mixed Reality Account.
   * @param regenerate Required information for key regeneration.
   * @param options The options parameters.
   */
  regenerateKeys(
    resourceGroupName: string,
    accountName: string,
    regenerate: AccountKeyRegenerateRequest,
    options?: ObjectAnchorsAccountsRegenerateKeysOptionalParams
  ): Promise<ObjectAnchorsAccountsRegenerateKeysResponse>;
}
