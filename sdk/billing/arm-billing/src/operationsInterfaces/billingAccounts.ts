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
  BillingAccount,
  BillingAccountsListOptionalParams,
  InvoiceSectionWithCreateSubPermission,
  BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionOptionalParams,
  BillingAccountsGetOptionalParams,
  BillingAccountsGetResponse,
  BillingAccountUpdateRequest,
  BillingAccountsUpdateOptionalParams,
  BillingAccountsUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a BillingAccounts. */
export interface BillingAccounts {
  /**
   * Lists the billing accounts that a user has access to.
   * @param options The options parameters.
   */
  list(
    options?: BillingAccountsListOptionalParams
  ): PagedAsyncIterableIterator<BillingAccount>;
  /**
   * Lists the invoice sections for which the user has permission to create Azure subscriptions. The
   * operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The options parameters.
   */
  listInvoiceSectionsByCreateSubscriptionPermission(
    billingAccountName: string,
    options?: BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionOptionalParams
  ): PagedAsyncIterableIterator<InvoiceSectionWithCreateSubPermission>;
  /**
   * Gets a billing account by its ID.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The options parameters.
   */
  get(
    billingAccountName: string,
    options?: BillingAccountsGetOptionalParams
  ): Promise<BillingAccountsGetResponse>;
  /**
   * Updates the properties of a billing account. Currently, displayName and address can be updated. The
   * operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param parameters Request parameters that are provided to the update billing account operation.
   * @param options The options parameters.
   */
  beginUpdate(
    billingAccountName: string,
    parameters: BillingAccountUpdateRequest,
    options?: BillingAccountsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<BillingAccountsUpdateResponse>,
      BillingAccountsUpdateResponse
    >
  >;
  /**
   * Updates the properties of a billing account. Currently, displayName and address can be updated. The
   * operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param parameters Request parameters that are provided to the update billing account operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    billingAccountName: string,
    parameters: BillingAccountUpdateRequest,
    options?: BillingAccountsUpdateOptionalParams
  ): Promise<BillingAccountsUpdateResponse>;
}
