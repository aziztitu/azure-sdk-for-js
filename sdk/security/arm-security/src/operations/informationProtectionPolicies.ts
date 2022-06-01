/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { InformationProtectionPolicies } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityCenter } from "../securityCenter";
import {
  InformationProtectionPolicy,
  InformationProtectionPoliciesListNextOptionalParams,
  InformationProtectionPoliciesListOptionalParams,
  InformationProtectionPolicyName,
  InformationProtectionPoliciesGetOptionalParams,
  InformationProtectionPoliciesGetResponse,
  InformationProtectionPoliciesCreateOrUpdateOptionalParams,
  InformationProtectionPoliciesCreateOrUpdateResponse,
  InformationProtectionPoliciesListResponse,
  InformationProtectionPoliciesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing InformationProtectionPolicies operations. */
export class InformationProtectionPoliciesImpl
  implements InformationProtectionPolicies {
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class InformationProtectionPolicies class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * Information protection policies of a specific management group.
   * @param scope Scope of the query, can be subscription
   *              (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   *              (/providers/Microsoft.Management/managementGroups/mgName).
   * @param options The options parameters.
   */
  public list(
    scope: string,
    options?: InformationProtectionPoliciesListOptionalParams
  ): PagedAsyncIterableIterator<InformationProtectionPolicy> {
    const iter = this.listPagingAll(scope, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(scope, options);
      }
    };
  }

  private async *listPagingPage(
    scope: string,
    options?: InformationProtectionPoliciesListOptionalParams
  ): AsyncIterableIterator<InformationProtectionPolicy[]> {
    let result = await this._list(scope, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(scope, continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    scope: string,
    options?: InformationProtectionPoliciesListOptionalParams
  ): AsyncIterableIterator<InformationProtectionPolicy> {
    for await (const page of this.listPagingPage(scope, options)) {
      yield* page;
    }
  }

  /**
   * Details of the information protection policy.
   * @param scope Scope of the query, can be subscription
   *              (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   *              (/providers/Microsoft.Management/managementGroups/mgName).
   * @param informationProtectionPolicyName Name of the information protection policy.
   * @param options The options parameters.
   */
  get(
    scope: string,
    informationProtectionPolicyName: InformationProtectionPolicyName,
    options?: InformationProtectionPoliciesGetOptionalParams
  ): Promise<InformationProtectionPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      { scope, informationProtectionPolicyName, options },
      getOperationSpec
    );
  }

  /**
   * Details of the information protection policy.
   * @param scope Scope of the query, can be subscription
   *              (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   *              (/providers/Microsoft.Management/managementGroups/mgName).
   * @param informationProtectionPolicyName Name of the information protection policy.
   * @param informationProtectionPolicy Information protection policy.
   * @param options The options parameters.
   */
  createOrUpdate(
    scope: string,
    informationProtectionPolicyName: InformationProtectionPolicyName,
    informationProtectionPolicy: InformationProtectionPolicy,
    options?: InformationProtectionPoliciesCreateOrUpdateOptionalParams
  ): Promise<InformationProtectionPoliciesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        scope,
        informationProtectionPolicyName,
        informationProtectionPolicy,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Information protection policies of a specific management group.
   * @param scope Scope of the query, can be subscription
   *              (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   *              (/providers/Microsoft.Management/managementGroups/mgName).
   * @param options The options parameters.
   */
  private _list(
    scope: string,
    options?: InformationProtectionPoliciesListOptionalParams
  ): Promise<InformationProtectionPoliciesListResponse> {
    return this.client.sendOperationRequest(
      { scope, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param scope Scope of the query, can be subscription
   *              (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   *              (/providers/Microsoft.Management/managementGroups/mgName).
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    scope: string,
    nextLink: string,
    options?: InformationProtectionPoliciesListNextOptionalParams
  ): Promise<InformationProtectionPoliciesListNextResponse> {
    return this.client.sendOperationRequest(
      { scope, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Security/informationProtectionPolicies/{informationProtectionPolicyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.InformationProtectionPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion7],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.informationProtectionPolicyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Security/informationProtectionPolicies/{informationProtectionPolicyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.InformationProtectionPolicy
    },
    201: {
      bodyMapper: Mappers.InformationProtectionPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.informationProtectionPolicy,
  queryParameters: [Parameters.apiVersion7],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.informationProtectionPolicyName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Security/informationProtectionPolicies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.InformationProtectionPolicyList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion7],
  urlParameters: [Parameters.$host, Parameters.scope],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.InformationProtectionPolicyList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion7],
  urlParameters: [Parameters.$host, Parameters.nextLink, Parameters.scope],
  headerParameters: [Parameters.accept],
  serializer
};
