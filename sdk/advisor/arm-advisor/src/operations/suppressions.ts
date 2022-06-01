/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Suppressions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AdvisorManagementClient } from "../advisorManagementClient";
import {
  SuppressionContract,
  SuppressionsListNextOptionalParams,
  SuppressionsListOptionalParams,
  SuppressionsGetOptionalParams,
  SuppressionsGetResponse,
  SuppressionsCreateOptionalParams,
  SuppressionsCreateResponse,
  SuppressionsDeleteOptionalParams,
  SuppressionsListResponse,
  SuppressionsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Suppressions operations. */
export class SuppressionsImpl implements Suppressions {
  private readonly client: AdvisorManagementClient;

  /**
   * Initialize a new instance of the class Suppressions class.
   * @param client Reference to the service client
   */
  constructor(client: AdvisorManagementClient) {
    this.client = client;
  }

  /**
   * Retrieves the list of snoozed or dismissed suppressions for a subscription. The snoozed or dismissed
   * attribute of a recommendation is referred to as a suppression.
   * @param options The options parameters.
   */
  public list(
    options?: SuppressionsListOptionalParams
  ): PagedAsyncIterableIterator<SuppressionContract> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: SuppressionsListOptionalParams
  ): AsyncIterableIterator<SuppressionContract[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: SuppressionsListOptionalParams
  ): AsyncIterableIterator<SuppressionContract> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Obtains the details of a suppression.
   * @param resourceUri The fully qualified Azure Resource Manager identifier of the resource to which
   *                    the recommendation applies.
   * @param recommendationId The recommendation ID.
   * @param name The name of the suppression.
   * @param options The options parameters.
   */
  get(
    resourceUri: string,
    recommendationId: string,
    name: string,
    options?: SuppressionsGetOptionalParams
  ): Promise<SuppressionsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, recommendationId, name, options },
      getOperationSpec
    );
  }

  /**
   * Enables the snoozed or dismissed attribute of a recommendation. The snoozed or dismissed attribute
   * is referred to as a suppression. Use this API to create or update the snoozed or dismissed status of
   * a recommendation.
   * @param resourceUri The fully qualified Azure Resource Manager identifier of the resource to which
   *                    the recommendation applies.
   * @param recommendationId The recommendation ID.
   * @param name The name of the suppression.
   * @param suppressionContract The snoozed or dismissed attribute; for example, the snooze duration.
   * @param options The options parameters.
   */
  create(
    resourceUri: string,
    recommendationId: string,
    name: string,
    suppressionContract: SuppressionContract,
    options?: SuppressionsCreateOptionalParams
  ): Promise<SuppressionsCreateResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, recommendationId, name, suppressionContract, options },
      createOperationSpec
    );
  }

  /**
   * Enables the activation of a snoozed or dismissed recommendation. The snoozed or dismissed attribute
   * of a recommendation is referred to as a suppression.
   * @param resourceUri The fully qualified Azure Resource Manager identifier of the resource to which
   *                    the recommendation applies.
   * @param recommendationId The recommendation ID.
   * @param name The name of the suppression.
   * @param options The options parameters.
   */
  delete(
    resourceUri: string,
    recommendationId: string,
    name: string,
    options?: SuppressionsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceUri, recommendationId, name, options },
      deleteOperationSpec
    );
  }

  /**
   * Retrieves the list of snoozed or dismissed suppressions for a subscription. The snoozed or dismissed
   * attribute of a recommendation is referred to as a suppression.
   * @param options The options parameters.
   */
  private _list(
    options?: SuppressionsListOptionalParams
  ): Promise<SuppressionsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: SuppressionsListNextOptionalParams
  ): Promise<SuppressionsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/{resourceUri}/providers/Microsoft.Advisor/recommendations/{recommendationId}/suppressions/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SuppressionContract
    },
    404: {
      bodyMapper: Mappers.ArmErrorResponse,
      isError: true
    },
    default: {
      bodyMapper: Mappers.ArmErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.name,
    Parameters.resourceUri,
    Parameters.recommendationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/{resourceUri}/providers/Microsoft.Advisor/recommendations/{recommendationId}/suppressions/{name}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SuppressionContract
    },
    404: {
      bodyMapper: Mappers.ArmErrorResponse,
      isError: true
    },
    default: {
      bodyMapper: Mappers.ArmErrorResponse
    }
  },
  requestBody: Parameters.suppressionContract,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.name,
    Parameters.resourceUri,
    Parameters.recommendationId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/{resourceUri}/providers/Microsoft.Advisor/recommendations/{recommendationId}/suppressions/{name}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ArmErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.name,
    Parameters.resourceUri,
    Parameters.recommendationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Advisor/suppressions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SuppressionContractListResult
    },
    default: {
      bodyMapper: Mappers.ArmErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.top,
    Parameters.skipToken
  ],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SuppressionContractListResult
    },
    default: {
      bodyMapper: Mappers.ArmErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.top,
    Parameters.skipToken
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
