/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/hostSettingsMappers";
import * as Parameters from "../models/parameters";
import { AzureBotServiceContext } from "../azureBotServiceContext";

/** Class representing a HostSettings. */
export class HostSettings {
  private readonly client: AzureBotServiceContext;

  /**
   * Create a HostSettings.
   * @param {AzureBotServiceContext} client Reference to the service client.
   */
  constructor(client: AzureBotServiceContext) {
    this.client = client;
  }

  /**
   * Get per subscription settings needed to host bot in compute resource such as Azure App Service
   * @param [options] The optional parameters
   * @returns Promise<Models.HostSettingsGetResponse>
   */
  get(options?: msRest.RequestOptionsBase): Promise<Models.HostSettingsGetResponse>;
  /**
   * @param callback The callback
   */
  get(callback: msRest.ServiceCallback<Models.HostSettingsResponse>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  get(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.HostSettingsResponse>): void;
  get(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.HostSettingsResponse>, callback?: msRest.ServiceCallback<Models.HostSettingsResponse>): Promise<Models.HostSettingsGetResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getOperationSpec,
      callback) as Promise<Models.HostSettingsGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.BotService/hostSettings",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.HostSettingsResponse
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
