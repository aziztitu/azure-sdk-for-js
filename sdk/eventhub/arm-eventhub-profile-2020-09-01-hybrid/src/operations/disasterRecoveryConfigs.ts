/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DisasterRecoveryConfigs } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { EventHubManagementClient } from "../eventHubManagementClient";
import {
  AuthorizationRule,
  DisasterRecoveryConfigsListAuthorizationRulesNextOptionalParams,
  DisasterRecoveryConfigsListAuthorizationRulesOptionalParams,
  DisasterRecoveryConfigsListAuthorizationRulesResponse,
  DisasterRecoveryConfigsGetAuthorizationRuleOptionalParams,
  DisasterRecoveryConfigsGetAuthorizationRuleResponse,
  DisasterRecoveryConfigsListKeysOptionalParams,
  DisasterRecoveryConfigsListKeysResponse,
  DisasterRecoveryConfigsListAuthorizationRulesNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DisasterRecoveryConfigs operations. */
export class DisasterRecoveryConfigsImpl implements DisasterRecoveryConfigs {
  private readonly client: EventHubManagementClient;

  /**
   * Initialize a new instance of the class DisasterRecoveryConfigs class.
   * @param client Reference to the service client
   */
  constructor(client: EventHubManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of authorization rules for a Namespace.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param alias The Disaster Recovery configuration name
   * @param options The options parameters.
   */
  public listAuthorizationRules(
    resourceGroupName: string,
    namespaceName: string,
    alias: string,
    options?: DisasterRecoveryConfigsListAuthorizationRulesOptionalParams
  ): PagedAsyncIterableIterator<AuthorizationRule> {
    const iter = this.listAuthorizationRulesPagingAll(
      resourceGroupName,
      namespaceName,
      alias,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listAuthorizationRulesPagingPage(
          resourceGroupName,
          namespaceName,
          alias,
          options
        );
      }
    };
  }

  private async *listAuthorizationRulesPagingPage(
    resourceGroupName: string,
    namespaceName: string,
    alias: string,
    options?: DisasterRecoveryConfigsListAuthorizationRulesOptionalParams
  ): AsyncIterableIterator<AuthorizationRule[]> {
    let result = await this._listAuthorizationRules(
      resourceGroupName,
      namespaceName,
      alias,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listAuthorizationRulesNext(
        resourceGroupName,
        namespaceName,
        alias,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listAuthorizationRulesPagingAll(
    resourceGroupName: string,
    namespaceName: string,
    alias: string,
    options?: DisasterRecoveryConfigsListAuthorizationRulesOptionalParams
  ): AsyncIterableIterator<AuthorizationRule> {
    for await (const page of this.listAuthorizationRulesPagingPage(
      resourceGroupName,
      namespaceName,
      alias,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of authorization rules for a Namespace.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param alias The Disaster Recovery configuration name
   * @param options The options parameters.
   */
  private _listAuthorizationRules(
    resourceGroupName: string,
    namespaceName: string,
    alias: string,
    options?: DisasterRecoveryConfigsListAuthorizationRulesOptionalParams
  ): Promise<DisasterRecoveryConfigsListAuthorizationRulesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, alias, options },
      listAuthorizationRulesOperationSpec
    );
  }

  /**
   * Gets an AuthorizationRule for a Namespace by rule name.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param alias The Disaster Recovery configuration name
   * @param authorizationRuleName The authorization rule name.
   * @param options The options parameters.
   */
  getAuthorizationRule(
    resourceGroupName: string,
    namespaceName: string,
    alias: string,
    authorizationRuleName: string,
    options?: DisasterRecoveryConfigsGetAuthorizationRuleOptionalParams
  ): Promise<DisasterRecoveryConfigsGetAuthorizationRuleResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        alias,
        authorizationRuleName,
        options
      },
      getAuthorizationRuleOperationSpec
    );
  }

  /**
   * Gets the primary and secondary connection strings for the Namespace.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param alias The Disaster Recovery configuration name
   * @param authorizationRuleName The authorization rule name.
   * @param options The options parameters.
   */
  listKeys(
    resourceGroupName: string,
    namespaceName: string,
    alias: string,
    authorizationRuleName: string,
    options?: DisasterRecoveryConfigsListKeysOptionalParams
  ): Promise<DisasterRecoveryConfigsListKeysResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        alias,
        authorizationRuleName,
        options
      },
      listKeysOperationSpec
    );
  }

  /**
   * ListAuthorizationRulesNext
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param alias The Disaster Recovery configuration name
   * @param nextLink The nextLink from the previous successful call to the ListAuthorizationRules method.
   * @param options The options parameters.
   */
  private _listAuthorizationRulesNext(
    resourceGroupName: string,
    namespaceName: string,
    alias: string,
    nextLink: string,
    options?: DisasterRecoveryConfigsListAuthorizationRulesNextOptionalParams
  ): Promise<DisasterRecoveryConfigsListAuthorizationRulesNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, alias, nextLink, options },
      listAuthorizationRulesNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listAuthorizationRulesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}/authorizationRules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AuthorizationRuleListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.alias
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getAuthorizationRuleOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}/authorizationRules/{authorizationRuleName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AuthorizationRule
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.authorizationRuleName,
    Parameters.alias
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listKeysOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}/authorizationRules/{authorizationRuleName}/listKeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AccessKeys
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.authorizationRuleName,
    Parameters.alias
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAuthorizationRulesNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AuthorizationRuleListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.namespaceName,
    Parameters.alias
  ],
  headerParameters: [Parameters.accept],
  serializer
};
