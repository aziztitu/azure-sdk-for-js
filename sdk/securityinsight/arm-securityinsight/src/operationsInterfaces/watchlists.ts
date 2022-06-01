/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Watchlist,
  WatchlistsListOptionalParams,
  WatchlistsGetOptionalParams,
  WatchlistsGetResponse,
  WatchlistsDeleteOptionalParams,
  WatchlistsDeleteResponse,
  WatchlistsCreateOrUpdateOptionalParams,
  WatchlistsCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Watchlists. */
export interface Watchlists {
  /**
   * Gets all watchlists, without watchlist items.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    options?: WatchlistsListOptionalParams
  ): PagedAsyncIterableIterator<Watchlist>;
  /**
   * Gets a watchlist, without its watchlist items.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param watchlistAlias Watchlist Alias
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    watchlistAlias: string,
    options?: WatchlistsGetOptionalParams
  ): Promise<WatchlistsGetResponse>;
  /**
   * Delete a watchlist.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param watchlistAlias Watchlist Alias
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    watchlistAlias: string,
    options?: WatchlistsDeleteOptionalParams
  ): Promise<WatchlistsDeleteResponse>;
  /**
   * Create or update a Watchlist and its Watchlist Items (bulk creation, e.g. through text/csv content
   * type). To create a Watchlist and its Items, we should call this endpoint with either rawContent or a
   * valid SAR URI and contentType properties. The rawContent is mainly used for small watchlist (content
   * size below 3.8 MB). The SAS URI enables the creation of large watchlist, where the content size can
   * go up to 500 MB. The status of processing such large file can be polled through the URL returned in
   * Azure-AsyncOperation header.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param watchlistAlias Watchlist Alias
   * @param watchlist The watchlist
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    watchlistAlias: string,
    watchlist: Watchlist,
    options?: WatchlistsCreateOrUpdateOptionalParams
  ): Promise<WatchlistsCreateOrUpdateResponse>;
}
