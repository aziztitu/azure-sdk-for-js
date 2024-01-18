// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * THIS IS AN AUTO-GENERATED FILE - DO NOT EDIT!
 *
 * Any changes you make here may be lost.
 *
 * If you need to make changes, please do so in the original source file, \{project-root\}/sources/custom
 */
/** The request details to use when creating a new assistant. */
export interface AssistantCreationOptions {
  /** The ID of the model to use. */
  model: string;
  /** The name of the new assistant. */
  name?: string;
  /** The description of the new assistant. */
  description?: string;
  /** The system instructions for the new assistant to use. */
  instructions?: string;
  /** The collection of tools to enable for the new assistant. */
  tools?: ToolDefinition[];
  /** A list of previously uploaded file IDs to attach to the assistant. */
  fileIds?: string[];
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string>;
}

/** The input definition information for a code interpreter tool as used to configure an assistant. */
export interface CodeInterpreterToolDefinition {
  /** The object type, which is always 'code_interpreter'. */
  type: "code_interpreter";
}

/** The input definition information for a retrieval tool as used to configure an assistant. */
export interface RetrievalToolDefinition {
  /** The object type, which is always 'retrieval'. */
  type: "retrieval";
}

/** The input definition information for a function tool as used to configure an assistant. */
export interface FunctionToolDefinition {
  /** The object type, which is always 'function'. */
  type: "function";
  /** The definition of the concrete function that the function tool should call. */
  function: FunctionDefinition;
}

/** The input definition information for a function. */
export interface FunctionDefinition {
  /** The name of the function to be called. */
  name: string;
  /** A description of what the function does, used by the model to choose when and how to call the function. */
  description: string;
  /** The parameters the functions accepts, described as a JSON Schema object. */
  parameters: unknown;
}

/** Represents an assistant that can call the model and use tools. */
export interface Assistant {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The Unix timestamp, in seconds, representing when this object was created. */
  createdAt: Date;
  /** The name of the assistant. */
  name: string | null;
  /** The description of the assistant. */
  description: string | null;
  /** The ID of the model to use. */
  model: string;
  /** The system instructions for the assistant to use. */
  instructions: string | null;
  /** The collection of tools enabled for the assistant. */
  tools: ToolDefinition[];
  /** A list of attached file IDs, ordered by creation date in ascending order. */
  fileIds: string[];
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string>;
}

/** The request details to use when modifying an existing assistant. */
export interface AssistantModificationOptions {
  /** The ID of the model to use. */
  model?: string;
  /** The modified name for the assistant to use. */
  name?: string;
  /** The modified description for the assistant to use. */
  description?: string;
  /** The modified system instructions for the new assistant to use. */
  instructions?: string;
  /** The modified collection of tools to enable for the assistant. */
  tools?: ToolDefinition[];
  /** The modified list of previously uploaded fileIDs to attach to the assistant. */
  fileIds?: string[];
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string>;
}

/** An abstract representation of an OpenAI deletion operation result status. */
export interface DeletionStatus {
  /** A value indicating whether deletion was successful. */
  deleted: boolean;
}

/** The status of an assistant deletion operation. */
export interface AssistantDeletionStatus extends DeletionStatus {}

/** Information about a file attached to an assistant, as used by tools that can read files. */
export interface AssistantFile {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The Unix timestamp, in seconds, representing when this object was created. */
  createdAt: Date;
  /** The assistant ID that the file is attached to. */
  assistantId: string;
}

/** The status of an assistant file deletion operation. */
export interface AssistantFileDeletionStatus extends DeletionStatus {}

/** The details used to create a new assistant thread. */
export interface AssistantThreadCreationOptions {
  /** The messages to associate with the new thread. */
  messages?: {
    /** The role associated with the assistant thread message. */
    role: string;
    /** The list of content items associated with the assistant thread message. */
    content: string;
  }[];
  /** A set of key/value pairs used to store additional information about the object. */
  metadata?: Record<string, string>;
}

/** A single message within an assistant thread. */
export interface ThreadMessage {
  /** The identifier, which can be referenced in API endpoints. */
  id?: string;
  /** The Unix timestamp, in seconds, representing when this object was created. */
  createdAt?: Date;
  /** The ID of the thread that this message belongs to. */
  threadId?: string;
  /** The role associated with the assistant thread message. */
  role: string;
  /** The list of content items associated with the assistant thread message. */
  content: MessageContent[];
  /** If applicable, the ID of the assistant that authored this message. */
  assistantId?: string;
  /** If applicable, the ID of the run associated with the authoring of this message. */
  runId?: string;
  /** The IDs for the files associated with this message. */
  fileIds?: string[];
  /** A set of key/value pairs used to store additional information about the object. */
  metadata?: Record<string, string>;
}

/** A representation of a textual item of thread message content. */
export interface MessageTextContent {
  /** The object type, which is always 'text'. */
  type: "text";
  /** The text and associated annotations for this thread message content item. */
  text: MessageTextDetails;
}

/** The text and associated annotations for a single item of assistant thread message content. */
export interface MessageTextDetails {
  /** The text data. */
  value: string;
  /** A list of annotations associated with this text. */
  annotations: MessageTextAnnotation[];
}

/** An abstract representation of an annotation to text thread message content. */
export interface MessageTextAnnotationParent {
  /** the discriminator possible values: file_citation, file_path */
  type: string;
  /** The textual content associated with this text annotation item. */
  text: string;
  /** The first text index associated with this text annotation. */
  startIndex: number;
  /** The last text index associated with this text annotation. */
  endIndex: number;
}

/** A citation within the message that points to a specific quote from a specific File associated with the assistant or the message. Generated when the assistant uses the 'retrieval' tool to search files. */
export interface MessageFileCitationTextAnnotation extends MessageTextAnnotationParent {
  /** The object type, which is always 'file_citation'. */
  type: "file_citation";
  /**
   * A citation within the message that points to a specific quote from a specific file.
   * Generated when the assistant uses the "retrieval" tool to search files.
   */
  fileCitation: MessageTextFileCitationDetails;
}

/** A representation of a file-based text citation, as used in a file-based annotation of text thread message content. */
export interface MessageTextFileCitationDetails {
  /** The ID of the file associated with this citation. */
  fileId: string;
  /** The specific quote cited in the associated file. */
  quote: string;
}

/** A citation within the message that points to a file located at a specific path. */
export interface MessageFilePathTextAnnotation extends MessageTextAnnotationParent {
  /** The object type, which is always 'file_path'. */
  type: "file_path";
  /** A URL for the file that's generated when the assistant used the code_interpreter tool to generate a file. */
  filePath: MessageFilePathDetails;
}

/** An encapsulation of an image file ID, as used by message image content. */
export interface MessageFilePathDetails {
  /** The ID of the specific file that the citation is from. */
  fileId: string;
}

/** A representation of image file content in a thread message. */
export interface MessageImageFileContent {
  /** The object type, which is always 'image_file'. */
  type: "image_file";
  /** The image file for this thread message content item. */
  imageFile: MessageImageFileDetails;
}

/** An image reference, as represented in thread message content. */
export interface MessageImageFileDetails {
  /** The ID for the file associated with this image. */
  fileId: string;
}

/** Information about a single thread associated with an assistant. */
export interface AssistantThread {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The Unix timestamp, in seconds, representing when this object was created. */
  createdAt: Date;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string>;
}

/** The status of a thread deletion operation. */
export interface ThreadDeletionStatus extends DeletionStatus {}

/** Information about a file attached to an assistant thread message. */
export interface MessageFile {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The Unix timestamp, in seconds, representing when this object was created. */
  createdAt: Date;
  /** The ID of the message that this file is attached to. */
  messageId: string;
}

/** Data representing a single evaluation run of an assistant thread. */
export interface ThreadRun {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The ID of the thread associated with this run. */
  threadId: string;
  /** The ID of the assistant associated with the thread this run was performed against. */
  assistantId: string;
  /** The status of the assistant thread run. */
  status: RunStatus;
  /** The details of the action required for the assistant thread run to continue. */
  requiredAction?: RequiredAction;
  /** The last error, if any, encountered by this assistant thread run. */
  lastError?: RunError;
  /** The ID of the model to use. */
  model: string;
  /** The overriden system instructions used for this assistant thread run. */
  instructions: string;
  /** The overriden enabled tools used for this assistant thread run. */
  tools: ToolDefinition[];
  /** A list of attached file IDs, ordered by creation date in ascending order. */
  fileIds: string[];
  /** The Unix timestamp, in seconds, representing when this object was created. */
  createdAt: Date;
  /** The Unix timestamp, in seconds, representing when this item expires. */
  expiresAt: Date | null;
  /** The Unix timestamp, in seconds, representing when this item was started. */
  startedAt: Date | null;
  /** The Unix timestamp, in seconds, representing when this completed. */
  completedAt: Date | null;
  /** The Unix timestamp, in seconds, representing when this was cancelled. */
  cancelledAt: Date | null;
  /** The Unix timestamp, in seconds, representing when this failed. */
  failedAt: Date | null;
  /** A set of key/value pairs used to store additional information about the object. */
  metadata?: Record<string, string>;
}

/** An abstract representation of a required action for an assistant thread run to continue. */
export interface RequiredAction {
  /** the discriminator possible values: submit_tool_outputs */
  type: string;
  submitToolOutputs?: SubmitToolOutputsDetails;
}

/** The details describing tools that should be called to submit tool outputs. */
export interface SubmitToolOutputsDetails {
  /** The list of tool calls that must be resolved for the assistant thread run to continue. */
  toolCalls: ToolCall[];
}

/**
 * An abstract representation a tool call, issued by the model in evaluation of a configured tool definition, that must
 * be fulfilled and have its outputs submitted before the model can continue.
 */
export interface ToolCall {
  /** the discriminator possible values code_interpreter, retrieval, function */
  type: string;
  /** The ID of the tool call. This ID must be referenced when you submit tool outputs. */
  id: string;
/** The key/value pairs produced by the retrieval tool. */
  retrieval?: Record<string, string>;
  /** The detailed information about the function called by the model. */
  function?: FunctionToolCallDetails;
  /** The details of the tool call to the code interpreter tool. */
  codeInterpreter?: CodeInterpreterToolCallDetails;
}

/**
 * A tool call to a code interpreter tool, issued by the model in evaluation of a configured code interpreter tool, that
 * represents submitted output needed or already fulfilled by the tool for the model to continue.
 */
export interface CodeInterpreterToolCall extends ToolCall {
  /** The object type, which is always 'code_interpreter'. */
  type: "code_interpreter";
  /** The details of the tool call to the code interpreter tool. */
  codeInterpreter: CodeInterpreterToolCallDetails;
}

/** The detailed information about a code interpreter invocation by the model. */
export interface CodeInterpreterToolCallDetails {
  /** The input provided by the model to the code interpreter tool. */
  input: string;
  /** The outputs produced by the code interpreter tool back to the model in response to the tool call. */
  outputs: CodeInterpreterToolCallOutput[];
}

/** An abstract representation of an emitted output from a code interpreter tool. */
export interface CodeInterpreterToolCallOutput {
  /** the discriminator possible values logs, image */
  type: string;
/** The serialized log output emitted by the code interpreter. */
  logs?: string;
  /** Referential information for the image associated with this output. */
  image?: CodeInterpreterImageReference;
}

/** A representation of a log output emitted by a code interpreter tool in response to a tool call by the model. */
export interface CodeInterpreterLogOutput extends CodeInterpreterToolCallOutput {
  /** The object type, which is always 'logs'. */
  type: "logs";
  /** The serialized log output emitted by the code interpreter. */
  logs: string;
}

/** A representation of an image output emitted by a code interpreter tool in response to a tool call by the model. */
export interface CodeInterpreterImageOutput extends CodeInterpreterToolCallOutput {
  /** The object type, which is always 'image'. */
  type: "image";
  /** Referential information for the image associated with this output. */
  image: CodeInterpreterImageReference;
}

/** An image reference emitted by a code interpreter tool in response to a tool call by the model. */
export interface CodeInterpreterImageReference {
  /** The ID of the file associated with this image. */
  fileId: string;
}

/**
 * A tool call to a retrieval tool, issued by the model in evaluation of a configured retrieval tool, that represents
 * submitted output needed or already fulfilled by the tool for the model to continue.
 */
export interface RetrievalToolCall extends ToolCall {
  /** The object type, which is always 'retrieval'. */
  type: "retrieval";
  /** The key/value pairs produced by the retrieval tool. */
  retrieval: Record<string, string>;
}

/**
 * A tool call to a function tool, issued by the model in evaluation of a configured function tool, that represents
 * given function inputs and submitted function outputs needed or already fulfilled by the tool for the model to continue.
 */
export interface FunctionToolCall extends ToolCall {
  /** The object type, which is always 'function'. */
  type: "function";
  /** The detailed information about the function called by the model. */
  function: FunctionToolCallDetails;
}

/** The detailed information about the function called by the model. */
export interface FunctionToolCallDetails {
  /** The name of the function. */
  name: string;
  /** The arguments that the model requires are provided to the named function. */
  arguments: string;
  /** The output of the function, only populated for function calls that have already have had their outputs submitted. */
  output?: string | null;
}

/** The details of an error as encountered by an assistant thread run. */
export interface RunError {
  /** The status for the error. */
  code: string;
  /** The human-readable text associated with the error. */
  message: string;
}

/** The details of an error as encountered by an assistant thread run. */
export interface RunError {
  /** The status for the error. */
  code: string;
  /** The human-readable text associated with the error. */
  message: string;
}

/** The data provided during a tool outputs submission to resolve pending tool calls and allow the model to continue. */
export interface ToolOutput {
  /** The ID of the tool call being resolved, as provided in the tool calls of a required action from a run. */
  toolCallId?: string;
  /** The output from the tool to be submitted. */
  output?: string;
}

/** The details used when creating and immediately running a new assistant thread. */
export interface CreateAndRunThreadOptions {
  /** The ID of the assistant for which the thread should be created. */
  assistantId: string;
  /** The details used to create the new thread. */
  thread?: AssistantThreadCreationOptions;
  /** The overridden model that the assistant should use to run the thread. */
  model?: string;
  /** The overridden system instructions the assistant should use to run the thread. */
  instructions?: string;
  /** The overridden list of enabled tools the assistant should use to run the thread. */
  tools?: ToolDefinition[];
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string>;
}

/** Detailed information about a single step of an assistant thread run. */
export interface RunStep {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The type of run step, which can be either message_creation or tool_calls. */
  type: RunStepType;
  /** The ID of the assistant associated with the run step. */
  assistantId: string;
  /** The ID of the thread that was run. */
  threadId: string;
  /** The ID of the run that this run step is a part of. */
  runId: string;
  /** The status of this run step. */
  status: RunStepStatus;
  /** The details for this run step. */
  stepDetails: RunStepDetails;
  /** If applicable, information about the last error encountered by this run step. */
  lastError: RunStepError | null;
  /** The Unix timestamp, in seconds, representing when this object was created. */
  createdAt: Date;
  /** The Unix timestamp, in seconds, representing when this item expired. */
  expiredAt: Date | null;
  /** The Unix timestamp, in seconds, representing when this completed. */
  completedAt: Date | null;
  /** The Unix timestamp, in seconds, representing when this was cancelled. */
  cancelledAt: Date | null;
  /** The Unix timestamp, in seconds, representing when this failed. */
  failedAt: Date | null;
  /** A set of up to 16 key/value pairs that can be attached to an object, used for storing additional information about that object in a structured format. Keys may be up to 64 characters in length and values may be up to 512 characters in length. */
  metadata?: Record<string, string>;
}

/** An abstract representation of the details for a run step. */
export interface RunStepDetails {
  /** the discriminator possible values: message_creation, tool_calls */
  type: RunStepType;
/** A list tool call details for this run step. */
  toolCalls?: ToolCall[];
  /** Information about the message creation associated with this run step. */
  messageCreation?: RunStepMessageCreationReference;
}

/** The detailed information associated with a message creation run step. */
export interface RunStepMessageCreationDetails extends RunStepDetails {
  /** The object type, which is always 'message_creation'. */
  type: "message_creation";
  /** Information about the message creation associated with this run step. */
  messageCreation: RunStepMessageCreationReference;
}

/** The details of a message created as a part of a run step. */
export interface RunStepMessageCreationReference {
  /** The ID of the message created by this run step. */
  messageId: string;
}

/** The detailed information associated with a run step calling tools. */
export interface RunStepToolCallDetails extends RunStepDetails {
  /** The object type, which is always 'tool_calls'. */
  type: "tool_calls";
  /** A list tool call details for this run step. */
  toolCalls: ToolCall[];
}

/** The error information associated with a failed run step. */
export interface RunStepError {
  /** The error code for this error. */
  code: RunStepErrorCode;
  /** The human-readable text associated with this error. */
  message: string;
}

/** The error information associated with a failed run step. */
export interface RunStepError {
  /** The error code for this error. */
  code: RunStepErrorCode;
  /** The human-readable text associated with this error. */
  message: string;
}

/** The response data from a file list operation. */
export interface FileListResponse {
  /** The files returned for the request. */
  data: InputFile[];
}

/** Represents an assistant that can call the model and use tools. */
export interface InputFile {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The size of the file, in bytes. */
  bytes: number;
  /** The name of the file. */
  filename: string;
  /** The Unix timestamp, in seconds, representing when this object was created. */
  createdAt: Date;
  /** The intended purpose of a file. */
  purpose: FilePurpose;
}

/** A status response from a file deletion operation. */
export interface FileDeletionStatus extends DeletionStatus {
  /** The ID of the deleted file. */
  id: string;
}

/** An abstract representation of a single item of thread message content. */
export interface MessageContent {
  /** the discriminator possible values image_file, text */
  type: string;
  imageFile?: MessageImageFileDetails;
  text?: MessageTextDetails;
  fileIds?: string[];
  metadata?: Record<string, string>;
}

/** An abstract representation of an annotation to text thread message content. */
export interface ThreadMessageTextAnnotation {
  /** the discriminator possible values file_citation, file_path */
  type: string;
  /** The textual content associated with this text annotation item. */
  text: string;
  /** The first text index associated with this text annotation. */
  startIndex: number;
  /** The last text index associated with this text annotation. */
  endIndex: number;
}

/** The response data for a requested list of items. */
export interface ListResponseOf<T> {
  /** The requested list of items. */
  data: T[];
  /** The first ID represented in this list. */
  firstId: string;
  /** The last ID represented in this list. */
  lastId: string;
  /** A value indicating whether there are additional values available not captured in this list. */
  hasMore: boolean;
}

/** An abstract representation of an input tool definition that an assistant can use. */
export interface ToolDefinition {
  /** the discriminator possible values code_interpreter, retrieval, function */
  type: string;
  function?: FunctionDefinition;
}

/** The possible values for roles attributed to messages in a thread. */
/** "user", "assistant" */
export type MessageRole = string;
/** Possible values for the status of an assistant thread run. */
/** "queued", "in_progress", "requires_action", "cancelling", "cancelled", "failed", "completed", "expired" */
export type RunStatus = string;
/** The possible types of run steps. */
/** "message_creation", "tool_calls" */
export type RunStepType = string;
/** Possible values for the status of a run step. */
/** "in_progress", "cancelled", "failed", "completed", "expired" */
export type RunStepStatus = string;
/** Possible error code values attributable to a failed run step. */
/** "server_error", "rate_limit_exceeded" */
export type RunStepErrorCode = string;
/** The possible values denoting the intended usage of a file. */
/** "fine-tune", "fine-tune-results", "assistants", "assistants_output" */
export type FilePurpose = string;
/** The available sorting options when requesting a list of response objects. */
/** "asc", "desc" */
export type ListSortOrder = string;
/** Base type for MessageTextAnnotation */
export type MessageTextAnnotation =
  | MessageFileCitationTextAnnotation
  | MessageFilePathTextAnnotation
  | MessageTextAnnotationParent;
/** Base type for MessageContentParent */
export type MessageContentParent =
  | MessageTextContent 
  | MessageImageFileContent;
/** Base type for ToolDefinitionParent */
export type ToolDefinitionParent =
  | CodeInterpreterToolDefinition 
  | RetrievalToolDefinition 
  | FunctionToolDefinition;