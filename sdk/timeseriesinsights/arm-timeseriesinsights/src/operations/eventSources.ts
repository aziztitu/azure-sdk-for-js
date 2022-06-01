/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { EventSources } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { TimeSeriesInsightsClient } from "../timeSeriesInsightsClient";
import {
  EventSourceCreateOrUpdateParametersUnion,
  EventSourcesCreateOrUpdateOptionalParams,
  EventSourcesCreateOrUpdateResponse,
  EventSourcesGetOptionalParams,
  EventSourcesGetResponse,
  EventSourceUpdateParametersUnion,
  EventSourcesUpdateOptionalParams,
  EventSourcesUpdateResponse,
  EventSourcesDeleteOptionalParams,
  EventSourcesListByEnvironmentOptionalParams,
  EventSourcesListByEnvironmentResponse
} from "../models";

/** Class containing EventSources operations. */
export class EventSourcesImpl implements EventSources {
  private readonly client: TimeSeriesInsightsClient;

  /**
   * Initialize a new instance of the class EventSources class.
   * @param client Reference to the service client
   */
  constructor(client: TimeSeriesInsightsClient) {
    this.client = client;
  }

  /**
   * Create or update an event source under the specified environment.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   *                        specified resource group.
   * @param eventSourceName Name of the event source.
   * @param parameters Parameters for creating an event source resource.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    environmentName: string,
    eventSourceName: string,
    parameters: EventSourceCreateOrUpdateParametersUnion,
    options?: EventSourcesCreateOrUpdateOptionalParams
  ): Promise<EventSourcesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        environmentName,
        eventSourceName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Gets the event source with the specified name in the specified environment.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   *                        specified resource group.
   * @param eventSourceName The name of the Time Series Insights event source associated with the
   *                        specified environment.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    environmentName: string,
    eventSourceName: string,
    options?: EventSourcesGetOptionalParams
  ): Promise<EventSourcesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, environmentName, eventSourceName, options },
      getOperationSpec
    );
  }

  /**
   * Updates the event source with the specified name in the specified subscription, resource group, and
   * environment.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   *                        specified resource group.
   * @param eventSourceName The name of the Time Series Insights event source associated with the
   *                        specified environment.
   * @param eventSourceUpdateParameters Request object that contains the updated information for the
   *                                    event source.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    environmentName: string,
    eventSourceName: string,
    eventSourceUpdateParameters: EventSourceUpdateParametersUnion,
    options?: EventSourcesUpdateOptionalParams
  ): Promise<EventSourcesUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        environmentName,
        eventSourceName,
        eventSourceUpdateParameters,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * Deletes the event source with the specified name in the specified subscription, resource group, and
   * environment
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   *                        specified resource group.
   * @param eventSourceName The name of the Time Series Insights event source associated with the
   *                        specified environment.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    environmentName: string,
    eventSourceName: string,
    options?: EventSourcesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, environmentName, eventSourceName, options },
      deleteOperationSpec
    );
  }

  /**
   * Lists all the available event sources associated with the subscription and within the specified
   * resource group and environment.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   *                        specified resource group.
   * @param options The options parameters.
   */
  listByEnvironment(
    resourceGroupName: string,
    environmentName: string,
    options?: EventSourcesListByEnvironmentOptionalParams
  ): Promise<EventSourcesListByEnvironmentResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, environmentName, options },
      listByEnvironmentOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/eventSources/{eventSourceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.EventSourceResource
    },
    201: {
      bodyMapper: Mappers.EventSourceResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.environmentName1,
    Parameters.eventSourceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/eventSources/{eventSourceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EventSourceResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.environmentName1,
    Parameters.eventSourceName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/eventSources/{eventSourceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.EventSourceResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.eventSourceUpdateParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.environmentName1,
    Parameters.eventSourceName1
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/eventSources/{eventSourceName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.environmentName1,
    Parameters.eventSourceName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByEnvironmentOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/eventSources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EventSourceListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.environmentName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
