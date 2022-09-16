/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export type ActionUnion =
  | Action
  | DelayAction
  | DiscreteAction
  | ContinuousAction;

/** Model that represents a list of Capability resources and a link for pagination. */
export interface CapabilityListResult {
  /**
   * List of Capability resources.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: Capability[];
  /**
   * URL to retrieve the next page of Capability resources.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {
  /**
   * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
}

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.). */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

/** The error detail. */
export interface ErrorDetail {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * The error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ErrorDetail[];
  /**
   * The error additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /**
   * The additional info type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly info?: Record<string, unknown>;
}

/** Model that represents a list of Experiment resources and a link for pagination. */
export interface ExperimentListResult {
  /**
   * List of Experiment resources.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: Experiment[];
  /**
   * URL to retrieve the next page of Experiment resources.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** The managed identity of a resource. */
export interface ResourceIdentity {
  /** String of the resource identity type. */
  type: ResourceIdentityType;
  /**
   * GUID that represents the principal ID of this resource identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly principalId?: string;
  /**
   * GUID that represents the tenant ID of this resource identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly tenantId?: string;
}

/** Model that represents a step in the Experiment resource. */
export interface Step {
  /** String of the step name. */
  name: string;
  /** List of branches. */
  branches: Branch[];
}

/** Model that represents a branch in the step. */
export interface Branch {
  /** String of the branch name. */
  name: string;
  /** List of actions. */
  actions: ActionUnion[];
}

/** Model that represents the base action model. */
export interface Action {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "delay" | "discrete" | "continuous";
  /** String that represents a Capability URN. */
  name: string;
}

/** Model that represents a selector in the Experiment resource. */
export interface Selector {
  /** Enum of the selector type. */
  type: SelectorType;
  /** String of the selector ID. */
  id: string;
  /** List of Target references. */
  targets: TargetReference[];
}

/** Model that represents a reference to a Target in the selector. */
export interface TargetReference {
  /** Enum of the Target reference type. */
  type: "ChaosTarget";
  /** String of the resource ID of a Target resource. */
  id: string;
}

/** Model that represents the result of a cancel Experiment operation. */
export interface ExperimentCancelOperationResult {
  /**
   * String of the Experiment name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * URL to retrieve the Experiment status.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly statusUrl?: string;
}

/** Model that represents the result of a start Experiment operation. */
export interface ExperimentStartOperationResult {
  /**
   * String of the Experiment name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * URL to retrieve the Experiment status.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly statusUrl?: string;
}

/** Model that represents a list of Experiment statuses and a link for pagination. */
export interface ExperimentStatusListResult {
  /**
   * List of Experiment statuses.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: ExperimentStatus[];
  /**
   * URL to retrieve the next page of Experiment statuses.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Model that represents the status of a Experiment. */
export interface ExperimentStatus {
  /**
   * String of the resource type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * String of the fully qualified resource ID.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * String of the resource name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * String that represents the status of a Experiment.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly status?: string;
  /**
   * String that represents the created date time of a Experiment.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly createdDateUtc?: Date;
  /**
   * String that represents the end date time of a Experiment.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly endDateUtc?: Date;
}

/** Model that represents a list of Experiment execution details and a link for pagination. */
export interface ExperimentExecutionDetailsListResult {
  /**
   * List of Experiment execution details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: ExperimentExecutionDetails[];
  /**
   * URL to retrieve the next page of Experiment execution details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Model that represents the execution details of a Experiment. */
export interface ExperimentExecutionDetails {
  /**
   * String of the resource type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * String of the fully qualified resource ID.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * String of the resource name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The id of the experiment.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly experimentId?: string;
  /**
   * The value of the status of the experiment execution.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly status?: string;
  /**
   * The reason why the execution failed.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly failureReason?: string;
  /**
   * String that represents the created date time.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly createdDateTime?: Date;
  /**
   * String that represents the last action date time.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastActionDateTime?: Date;
  /**
   * String that represents the start date time.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly startDateTime?: Date;
  /**
   * String that represents the stop date time.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly stopDateTime?: Date;
  /**
   * The information of the experiment run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly runInformation?: ExperimentExecutionDetailsPropertiesRunInformation;
}

/** The information of the experiment run. */
export interface ExperimentExecutionDetailsPropertiesRunInformation {
  /**
   * The steps of the experiment run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly steps?: StepStatus[];
}

/** Model that represents the a list of branches and branch statuses. */
export interface StepStatus {
  /**
   * The name of the step.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly stepName?: string;
  /**
   * The id of the step.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly stepId?: string;
  /**
   * The value of the status of the step.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly status?: string;
  /**
   * The array of branches.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly branches?: BranchStatus[];
}

/** Model that represents the a list of actions and action statuses. */
export interface BranchStatus {
  /**
   * The name of the branch status.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly branchName?: string;
  /**
   * The id of the branch status.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly branchId?: string;
  /**
   * The status of the branch.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly status?: string;
  /**
   * The array of actions.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly actions?: ActionStatus[];
}

/** Model that represents the an action and its status. */
export interface ActionStatus {
  /**
   * The name of the action status.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly actionName?: string;
  /**
   * The id of the action status.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly actionId?: string;
  /**
   * The status of the action.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly status?: string;
  /**
   * String that represents the start time of the action.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly startTime?: Date;
  /**
   * String that represents the end time of the action.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly endTime?: Date;
  /**
   * The array of targets.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly targets?: ExperimentExecutionActionTargetDetailsProperties[];
}

/** Model that represents the Experiment action target details properties model. */
export interface ExperimentExecutionActionTargetDetailsProperties {
  /**
   * The status of the execution.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly status?: string;
  /**
   * The target for the action.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * String that represents the failed date time.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly targetFailedTime?: Date;
  /**
   * String that represents the completed date time.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly targetCompletedTime?: Date;
  /**
   * The error of the action.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly error?: ExperimentExecutionActionTargetDetailsError;
}

/** Model that represents the Experiment action target details error model. */
export interface ExperimentExecutionActionTargetDetailsError {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
}

/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export interface OperationListResult {
  /**
   * List of operations supported by the resource provider
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: Operation[];
  /**
   * URL to get the next set of operation list results (if there are any).
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Details of a REST API operation, returned from the Resource Provider Operations API */
export interface Operation {
  /**
   * The name of the operation, as per Resource-Based Access Control (RBAC). Examples: "Microsoft.Compute/virtualMachines/write", "Microsoft.Compute/virtualMachines/capture/action"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Whether the operation applies to data-plane. This is "true" for data-plane operations and "false" for ARM/control-plane operations.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly isDataAction?: boolean;
  /** Localized display information for this particular operation. */
  display?: OperationDisplay;
  /**
   * The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly origin?: Origin;
  /**
   * Enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly actionType?: ActionType;
}

/** Localized display information for this particular operation. */
export interface OperationDisplay {
  /**
   * The localized friendly form of the resource provider name, e.g. "Microsoft Monitoring Insights" or "Microsoft Compute".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provider?: string;
  /**
   * The localized friendly name of the resource type related to this operation. E.g. "Virtual Machines" or "Job Schedule Collections".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resource?: string;
  /**
   * The concise, localized friendly name for the operation; suitable for dropdowns. E.g. "Create or Update Virtual Machine", "Restart Virtual Machine".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly operation?: string;
  /**
   * The short, localized friendly description of the operation; suitable for tool tips and detailed views.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly description?: string;
}

/** Model that represents a list of Target resources and a link for pagination. */
export interface TargetListResult {
  /**
   * List of Target resources.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: Target[];
  /**
   * URL to retrieve the next page of Target resources.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Model that represents a list of Target Type resources and a link for pagination. */
export interface TargetTypeListResult {
  /**
   * List of Target Type resources.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: TargetType[];
  /**
   * URL to retrieve the next page of Target Type resources.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Model that represents a list of Capability Type resources and a link for pagination. */
export interface CapabilityTypeListResult {
  /**
   * List of Capability Type resources.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: CapabilityType[];
  /**
   * URL to retrieve the next page of Capability Type resources.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Runtime properties of this Capability Type. */
export interface CapabilityTypePropertiesRuntimeProperties {
  /**
   * String of the kind of the resource's action type (continuous or discrete).
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly kind?: string;
}

/** A map to describe the settings of an action. */
export interface KeyValuePair {
  /** The name of the setting for the action. */
  key: string;
  /** The value of the setting for the action. */
  value: string;
}

/** Model that represents a Capability resource. */
export interface Capability extends Resource {
  /**
   * The standard system metadata of a resource type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  /**
   * String of the Publisher that this Capability extends.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly publisher?: string;
  /**
   * String of the Target Type that this Capability extends.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly targetType?: string;
  /**
   * Localized string of the description.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly description?: string;
  /**
   * URL to retrieve JSON schema of the Capability parameters.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly parametersSchema?: string;
  /**
   * String of the URN for this Capability Type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly urn?: string;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** The geo-location where the resource lives */
  location: string;
}

/** Model that represents a Target resource. */
export interface Target extends Resource {
  /**
   * The system metadata of the target resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  /** Location of the target resource. */
  location?: string;
  /** The properties of the target resource. */
  properties: { [propertyName: string]: any };
}

/** Model that represents a Target Type resource. */
export interface TargetType extends Resource {
  /**
   * The system metadata properties of the target type resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  /** Location of the Target Type resource. */
  location?: string;
  /**
   * Localized string of the display name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly displayName?: string;
  /**
   * Localized string of the description.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly description?: string;
  /**
   * URL to retrieve JSON schema of the Target Type properties.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly propertiesSchema?: string;
  /**
   * List of resource types this Target Type can extend.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resourceTypes?: string[];
}

/** Model that represents a Capability Type resource. */
export interface CapabilityType extends Resource {
  /**
   * The system metadata properties of the capability type resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  /** Location of the Capability Type resource. */
  location?: string;
  /**
   * String of the Publisher that this Capability Type extends.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly publisher?: string;
  /**
   * String of the Target Type that this Capability Type extends.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly targetType?: string;
  /**
   * Localized string of the display name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly displayName?: string;
  /**
   * Localized string of the description.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly description?: string;
  /**
   * URL to retrieve JSON schema of the Capability Type parameters.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly parametersSchema?: string;
  /**
   * String of the URN for this Capability Type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly urn?: string;
  /**
   * String of the kind of this Capability Type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly kind?: string;
  /** Runtime properties of this Capability Type. */
  runtimeProperties?: CapabilityTypePropertiesRuntimeProperties;
}

/** Model that represents a delay action. */
export interface DelayAction extends Action {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "delay";
  /** ISO8601 formatted string that represents a duration. */
  duration: string;
}

/** Model that represents a discrete action. */
export interface DiscreteAction extends Action {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "discrete";
  /** List of key value pairs. */
  parameters: KeyValuePair[];
  /** String that represents a selector. */
  selectorId: string;
}

/** Model that represents a continuous action. */
export interface ContinuousAction extends Action {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "continuous";
  /** ISO8601 formatted string that represents a duration. */
  duration: string;
  /** List of key value pairs. */
  parameters: KeyValuePair[];
  /** String that represents a selector. */
  selectorId: string;
}

/** Model that represents a Experiment resource. */
export interface Experiment extends TrackedResource {
  /**
   * The system metadata of the experiment resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  /** The identity of the experiment resource. */
  identity?: ResourceIdentity;
  /** List of steps. */
  steps: Step[];
  /** List of selectors. */
  selectors: Selector[];
  /** A boolean value that indicates if experiment should be started on creation or not. */
  startOnCreation?: boolean;
}

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  /** User */
  User = "User",
  /** Application */
  Application = "Application",
  /** ManagedIdentity */
  ManagedIdentity = "ManagedIdentity",
  /** Key */
  Key = "Key"
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** Known values of {@link Origin} that the service accepts. */
export enum KnownOrigin {
  /** User */
  User = "user",
  /** System */
  System = "system",
  /** UserSystem */
  UserSystem = "user,system"
}

/**
 * Defines values for Origin. \
 * {@link KnownOrigin} can be used interchangeably with Origin,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **user** \
 * **system** \
 * **user,system**
 */
export type Origin = string;

/** Known values of {@link ActionType} that the service accepts. */
export enum KnownActionType {
  /** Internal */
  Internal = "Internal"
}

/**
 * Defines values for ActionType. \
 * {@link KnownActionType} can be used interchangeably with ActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Internal**
 */
export type ActionType = string;
/** Defines values for ResourceIdentityType. */
export type ResourceIdentityType = "None" | "SystemAssigned";
/** Defines values for SelectorType. */
export type SelectorType = "Percent" | "Random" | "Tag" | "List";

/** Optional parameters. */
export interface CapabilitiesListOptionalParams
  extends coreClient.OperationOptions {
  /** String that sets the continuation token. */
  continuationToken?: string;
}

/** Contains response data for the list operation. */
export type CapabilitiesListResponse = CapabilityListResult;

/** Optional parameters. */
export interface CapabilitiesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type CapabilitiesGetResponse = Capability;

/** Optional parameters. */
export interface CapabilitiesDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface CapabilitiesCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type CapabilitiesCreateOrUpdateResponse = Capability;

/** Optional parameters. */
export interface CapabilitiesListNextOptionalParams
  extends coreClient.OperationOptions {
  /** String that sets the continuation token. */
  continuationToken?: string;
}

/** Contains response data for the listNext operation. */
export type CapabilitiesListNextResponse = CapabilityListResult;

/** Optional parameters. */
export interface ExperimentsListAllOptionalParams
  extends coreClient.OperationOptions {
  /** String that sets the continuation token. */
  continuationToken?: string;
  /** Optional value that indicates whether to filter results based on if the Experiment is currently running. If null, then the results will not be filtered. */
  running?: boolean;
}

/** Contains response data for the listAll operation. */
export type ExperimentsListAllResponse = ExperimentListResult;

/** Optional parameters. */
export interface ExperimentsListOptionalParams
  extends coreClient.OperationOptions {
  /** String that sets the continuation token. */
  continuationToken?: string;
  /** Optional value that indicates whether to filter results based on if the Experiment is currently running. If null, then the results will not be filtered. */
  running?: boolean;
}

/** Contains response data for the list operation. */
export type ExperimentsListResponse = ExperimentListResult;

/** Optional parameters. */
export interface ExperimentsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ExperimentsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ExperimentsGetResponse = Experiment;

/** Optional parameters. */
export interface ExperimentsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type ExperimentsCreateOrUpdateResponse = Experiment;

/** Optional parameters. */
export interface ExperimentsCancelOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the cancel operation. */
export type ExperimentsCancelResponse = ExperimentCancelOperationResult;

/** Optional parameters. */
export interface ExperimentsStartOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the start operation. */
export type ExperimentsStartResponse = ExperimentStartOperationResult;

/** Optional parameters. */
export interface ExperimentsListAllStatusesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listAllStatuses operation. */
export type ExperimentsListAllStatusesResponse = ExperimentStatusListResult;

/** Optional parameters. */
export interface ExperimentsGetStatusOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getStatus operation. */
export type ExperimentsGetStatusResponse = ExperimentStatus;

/** Optional parameters. */
export interface ExperimentsListExecutionDetailsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listExecutionDetails operation. */
export type ExperimentsListExecutionDetailsResponse = ExperimentExecutionDetailsListResult;

/** Optional parameters. */
export interface ExperimentsGetExecutionDetailsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getExecutionDetails operation. */
export type ExperimentsGetExecutionDetailsResponse = ExperimentExecutionDetails;

/** Optional parameters. */
export interface ExperimentsListAllNextOptionalParams
  extends coreClient.OperationOptions {
  /** String that sets the continuation token. */
  continuationToken?: string;
  /** Optional value that indicates whether to filter results based on if the Experiment is currently running. If null, then the results will not be filtered. */
  running?: boolean;
}

/** Contains response data for the listAllNext operation. */
export type ExperimentsListAllNextResponse = ExperimentListResult;

/** Optional parameters. */
export interface ExperimentsListNextOptionalParams
  extends coreClient.OperationOptions {
  /** String that sets the continuation token. */
  continuationToken?: string;
  /** Optional value that indicates whether to filter results based on if the Experiment is currently running. If null, then the results will not be filtered. */
  running?: boolean;
}

/** Contains response data for the listNext operation. */
export type ExperimentsListNextResponse = ExperimentListResult;

/** Optional parameters. */
export interface ExperimentsListAllStatusesNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listAllStatusesNext operation. */
export type ExperimentsListAllStatusesNextResponse = ExperimentStatusListResult;

/** Optional parameters. */
export interface ExperimentsListExecutionDetailsNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listExecutionDetailsNext operation. */
export type ExperimentsListExecutionDetailsNextResponse = ExperimentExecutionDetailsListResult;

/** Optional parameters. */
export interface OperationsListAllOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listAll operation. */
export type OperationsListAllResponse = OperationListResult;

/** Optional parameters. */
export interface OperationsListAllNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listAllNext operation. */
export type OperationsListAllNextResponse = OperationListResult;

/** Optional parameters. */
export interface TargetsListOptionalParams extends coreClient.OperationOptions {
  /** String that sets the continuation token. */
  continuationToken?: string;
}

/** Contains response data for the list operation. */
export type TargetsListResponse = TargetListResult;

/** Optional parameters. */
export interface TargetsGetOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type TargetsGetResponse = Target;

/** Optional parameters. */
export interface TargetsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface TargetsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type TargetsCreateOrUpdateResponse = Target;

/** Optional parameters. */
export interface TargetsListNextOptionalParams
  extends coreClient.OperationOptions {
  /** String that sets the continuation token. */
  continuationToken?: string;
}

/** Contains response data for the listNext operation. */
export type TargetsListNextResponse = TargetListResult;

/** Optional parameters. */
export interface TargetTypesListOptionalParams
  extends coreClient.OperationOptions {
  /** String that sets the continuation token. */
  continuationToken?: string;
}

/** Contains response data for the list operation. */
export type TargetTypesListResponse = TargetTypeListResult;

/** Optional parameters. */
export interface TargetTypesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type TargetTypesGetResponse = TargetType;

/** Optional parameters. */
export interface TargetTypesListNextOptionalParams
  extends coreClient.OperationOptions {
  /** String that sets the continuation token. */
  continuationToken?: string;
}

/** Contains response data for the listNext operation. */
export type TargetTypesListNextResponse = TargetTypeListResult;

/** Optional parameters. */
export interface CapabilityTypesListOptionalParams
  extends coreClient.OperationOptions {
  /** String that sets the continuation token. */
  continuationToken?: string;
}

/** Contains response data for the list operation. */
export type CapabilityTypesListResponse = CapabilityTypeListResult;

/** Optional parameters. */
export interface CapabilityTypesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type CapabilityTypesGetResponse = CapabilityType;

/** Optional parameters. */
export interface CapabilityTypesListNextOptionalParams
  extends coreClient.OperationOptions {
  /** String that sets the continuation token. */
  continuationToken?: string;
}

/** Contains response data for the listNext operation. */
export type CapabilityTypesListNextResponse = CapabilityTypeListResult;

/** Optional parameters. */
export interface ChaosManagementClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}