/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import {
  EdgeModulesImpl,
  PipelineTopologiesImpl,
  LivePipelinesImpl,
  PipelineJobsImpl,
  LivePipelineOperationStatusesImpl,
  PipelineJobOperationStatusesImpl,
  OperationsImpl,
  VideoAnalyzersImpl,
  PrivateLinkResourcesImpl,
  PrivateEndpointConnectionsImpl,
  OperationStatusesImpl,
  OperationResultsImpl,
  VideoAnalyzerOperationStatusesImpl,
  VideoAnalyzerOperationResultsImpl,
  LocationsImpl,
  VideosImpl,
  AccessPoliciesImpl
} from "./operations";
import {
  EdgeModules,
  PipelineTopologies,
  LivePipelines,
  PipelineJobs,
  LivePipelineOperationStatuses,
  PipelineJobOperationStatuses,
  Operations,
  VideoAnalyzers,
  PrivateLinkResources,
  PrivateEndpointConnections,
  OperationStatuses,
  OperationResults,
  VideoAnalyzerOperationStatuses,
  VideoAnalyzerOperationResults,
  Locations,
  Videos,
  AccessPolicies
} from "./operationsInterfaces";
import { VideoAnalyzerManagementClientOptionalParams } from "./models";

export class VideoAnalyzerManagementClient extends coreClient.ServiceClient {
  $host: string;
  subscriptionId: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the VideoAnalyzerManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The ID of the target subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: VideoAnalyzerManagementClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: VideoAnalyzerManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-videoanalyzer/1.0.0-beta.2`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    if (!options.credentialScopes) {
      options.credentialScopes = ["https://management.azure.com/.default"];
    }
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint || "https://management.azure.com"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2021-11-01-preview";
    this.edgeModules = new EdgeModulesImpl(this);
    this.pipelineTopologies = new PipelineTopologiesImpl(this);
    this.livePipelines = new LivePipelinesImpl(this);
    this.pipelineJobs = new PipelineJobsImpl(this);
    this.livePipelineOperationStatuses = new LivePipelineOperationStatusesImpl(
      this
    );
    this.pipelineJobOperationStatuses = new PipelineJobOperationStatusesImpl(
      this
    );
    this.operations = new OperationsImpl(this);
    this.videoAnalyzers = new VideoAnalyzersImpl(this);
    this.privateLinkResources = new PrivateLinkResourcesImpl(this);
    this.privateEndpointConnections = new PrivateEndpointConnectionsImpl(this);
    this.operationStatuses = new OperationStatusesImpl(this);
    this.operationResults = new OperationResultsImpl(this);
    this.videoAnalyzerOperationStatuses = new VideoAnalyzerOperationStatusesImpl(
      this
    );
    this.videoAnalyzerOperationResults = new VideoAnalyzerOperationResultsImpl(
      this
    );
    this.locations = new LocationsImpl(this);
    this.videos = new VideosImpl(this);
    this.accessPolicies = new AccessPoliciesImpl(this);
  }

  edgeModules: EdgeModules;
  pipelineTopologies: PipelineTopologies;
  livePipelines: LivePipelines;
  pipelineJobs: PipelineJobs;
  livePipelineOperationStatuses: LivePipelineOperationStatuses;
  pipelineJobOperationStatuses: PipelineJobOperationStatuses;
  operations: Operations;
  videoAnalyzers: VideoAnalyzers;
  privateLinkResources: PrivateLinkResources;
  privateEndpointConnections: PrivateEndpointConnections;
  operationStatuses: OperationStatuses;
  operationResults: OperationResults;
  videoAnalyzerOperationStatuses: VideoAnalyzerOperationStatuses;
  videoAnalyzerOperationResults: VideoAnalyzerOperationResults;
  locations: Locations;
  videos: Videos;
  accessPolicies: AccessPolicies;
}
