/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ProjectFile,
  FilesListOptionalParams,
  FilesGetOptionalParams,
  FilesGetResponse,
  FilesCreateOrUpdateOptionalParams,
  FilesCreateOrUpdateResponse,
  FilesDeleteOptionalParams,
  FilesUpdateOptionalParams,
  FilesUpdateResponse,
  FilesReadOptionalParams,
  FilesReadResponse,
  FilesReadWriteOptionalParams,
  FilesReadWriteResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Files. */
export interface Files {
  /**
   * The project resource is a nested resource representing a stored migration project. This method
   * returns a list of files owned by a project resource.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param options The options parameters.
   */
  list(
    groupName: string,
    serviceName: string,
    projectName: string,
    options?: FilesListOptionalParams
  ): PagedAsyncIterableIterator<ProjectFile>;
  /**
   * The files resource is a nested, proxy-only resource representing a file stored under the project
   * resource. This method retrieves information about a file.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param fileName Name of the File
   * @param options The options parameters.
   */
  get(
    groupName: string,
    serviceName: string,
    projectName: string,
    fileName: string,
    options?: FilesGetOptionalParams
  ): Promise<FilesGetResponse>;
  /**
   * The PUT method creates a new file or updates an existing one.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param fileName Name of the File
   * @param parameters Information about the file
   * @param options The options parameters.
   */
  createOrUpdate(
    groupName: string,
    serviceName: string,
    projectName: string,
    fileName: string,
    parameters: ProjectFile,
    options?: FilesCreateOrUpdateOptionalParams
  ): Promise<FilesCreateOrUpdateResponse>;
  /**
   * This method deletes a file.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param fileName Name of the File
   * @param options The options parameters.
   */
  delete(
    groupName: string,
    serviceName: string,
    projectName: string,
    fileName: string,
    options?: FilesDeleteOptionalParams
  ): Promise<void>;
  /**
   * This method updates an existing file.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param fileName Name of the File
   * @param parameters Information about the file
   * @param options The options parameters.
   */
  update(
    groupName: string,
    serviceName: string,
    projectName: string,
    fileName: string,
    parameters: ProjectFile,
    options?: FilesUpdateOptionalParams
  ): Promise<FilesUpdateResponse>;
  /**
   * This method is used for requesting storage information using which contents of the file can be
   * downloaded.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param fileName Name of the File
   * @param options The options parameters.
   */
  read(
    groupName: string,
    serviceName: string,
    projectName: string,
    fileName: string,
    options?: FilesReadOptionalParams
  ): Promise<FilesReadResponse>;
  /**
   * This method is used for requesting information for reading and writing the file content.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param fileName Name of the File
   * @param options The options parameters.
   */
  readWrite(
    groupName: string,
    serviceName: string,
    projectName: string,
    fileName: string,
    options?: FilesReadWriteOptionalParams
  ): Promise<FilesReadWriteResponse>;
}
