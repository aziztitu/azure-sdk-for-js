/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  SubscriptionsImpl,
  TenantsImpl,
  SubscriptionOperationsImpl,
  OperationsImpl,
  AliasImpl,
  SubscriptionPolicyImpl,
  BillingAccountImpl
} from "./operations";
import {
  Subscriptions,
  Tenants,
  SubscriptionOperations,
  Operations,
  Alias,
  SubscriptionPolicy,
  BillingAccount
} from "./operationsInterfaces";
import { SubscriptionClientOptionalParams } from "./models";

export class SubscriptionClient extends coreClient.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the SubscriptionClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    options?: SubscriptionClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: SubscriptionClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-subscriptions/5.0.2`;
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
      baseUri:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com"
    };
    super(optionsWithDefaults);

    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      const bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
      if (!bearerTokenAuthenticationPolicyFound) {
        this.pipeline.removePolicy({
          name: coreRestPipeline.bearerTokenAuthenticationPolicyName
        });
        this.pipeline.addPolicy(
          coreRestPipeline.bearerTokenAuthenticationPolicy({
            scopes: `${optionsWithDefaults.baseUri}/.default`,
            challengeCallbacks: {
              authorizeRequestOnChallenge:
                coreClient.authorizeRequestOnClaimChallenge
            }
          })
        );
      }
    }

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.subscriptions = new SubscriptionsImpl(this);
    this.tenants = new TenantsImpl(this);
    this.subscriptionOperations = new SubscriptionOperationsImpl(this);
    this.operations = new OperationsImpl(this);
    this.alias = new AliasImpl(this);
    this.subscriptionPolicy = new SubscriptionPolicyImpl(this);
    this.billingAccount = new BillingAccountImpl(this);
  }

  subscriptions: Subscriptions;
  tenants: Tenants;
  subscriptionOperations: SubscriptionOperations;
  operations: Operations;
  alias: Alias;
  subscriptionPolicy: SubscriptionPolicy;
  billingAccount: BillingAccount;
}
