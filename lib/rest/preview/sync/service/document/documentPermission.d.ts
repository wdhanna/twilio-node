/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import Sync = require('../../../Sync');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the DocumentPermissionList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param serviceSid - Sync Service Instance SID.
 * @param documentSid - Sync Document SID.
 */
declare function DocumentPermissionList(version: Sync, serviceSid: string, documentSid: string): DocumentPermissionListInstance;

interface DocumentPermissionResource {
  account_sid: string;
  document_sid: string;
  identity: string;
  manage: boolean;
  read: boolean;
  service_sid: string;
  url: string;
  write: boolean;
}

interface DocumentPermissionPayload extends DocumentPermissionResource, Page.TwilioResponsePayload {
}

interface DocumentPermissionSolution {
  documentSid?: string;
  serviceSid?: string;
}

interface DocumentPermissionListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): DocumentPermissionContext;
  /**
   * Streams DocumentPermissionInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: DocumentPermissionListInstanceEachOptions, callback?: (item: DocumentPermissionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a document_permission
   *
   * @param identity - Identity of the user to whom the Sync Document Permission applies.
   */
  get(identity: string): DocumentPermissionContext;
  /**
   * Retrieve a single target page of DocumentPermissionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: DocumentPermissionPage) => any): Promise<DocumentPermissionPage>;
  /**
   * Lists DocumentPermissionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: DocumentPermissionListInstanceOptions, callback?: (error: Error | null, items: DocumentPermissionInstance[]) => any): Promise<DocumentPermissionInstance[]>;
  /**
   * Retrieve a single page of DocumentPermissionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: DocumentPermissionListInstancePageOptions, callback?: (error: Error | null, items: DocumentPermissionPage) => any): Promise<DocumentPermissionPage>;
}

/**
 * Options to pass to update
 *
 * @property read - Read access.
 * @property write - Write access.
 * @property manage - Manage access.
 */
interface DocumentPermissionInstanceUpdateOptions {
  manage: boolean;
  read: boolean;
  write: boolean;
}

/**
 * Options to pass to update
 *
 * @property read - Read access.
 * @property write - Write access.
 * @property manage - Manage access.
 */
interface DocumentPermissionInstanceUpdateOptions {
  manage: boolean;
  read: boolean;
  write: boolean;
}


declare class DocumentPermissionPage extends Page<Sync, DocumentPermissionPayload, DocumentPermissionResource, DocumentPermissionInstance> {
  /**
   * Initialize the DocumentPermissionPagePLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Sync, response: Response<string>, solution: DocumentPermissionSolution);

  /**
   * Build an instance of DocumentPermissionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: DocumentPermissionPayload): DocumentPermissionInstance;
}


declare class DocumentPermissionInstance extends SerializableClass {
  /**
   * Initialize the DocumentPermissionContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property accountSid - Twilio Account SID.
   * @property serviceSid - Sync Service Instance SID.
   * @property documentSid - Sync Document SID.
   * @property identity - Identity of the user to whom the Sync Document Permission applies.
   * @property read - Read access.
   * @property write - Write access.
   * @property manage - Manage access.
   * @property url - URL of this Sync Document Permission.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Sync Service Instance SID.
   * @param documentSid - Sync Document SID.
   * @param identity - Identity of the user to whom the Sync Document Permission applies.
   */
  constructor(version: Sync, payload: DocumentPermissionPayload, serviceSid: string, documentSid: string, identity: string);

  private _proxy: DocumentPermissionContext;
  accountSid: string;
  documentSid: string;
  /**
   * fetch a DocumentPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: DocumentPermissionInstance) => any): void;
  identity: string;
  manage: boolean;
  read: boolean;
  /**
   * remove a DocumentPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: DocumentPermissionInstance) => any): void;
  serviceSid: string;
  /**
   * Produce a plain JSON object version of the DocumentPermissionInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  /**
   * update a DocumentPermissionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: DocumentPermissionInstanceUpdateOptions, callback?: (error: Error | null, items: DocumentPermissionInstance) => any): void;
  url: string;
  write: boolean;
}


declare class DocumentPermissionContext {
  /**
   * Initialize the DocumentPermissionContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param documentSid - Sync Document SID or unique name.
   * @param identity - Identity of the user to whom the Sync Document Permission applies.
   */
  constructor(version: Sync, serviceSid: string, documentSid: string, identity: string);

  /**
   * fetch a DocumentPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: DocumentPermissionInstance) => any): void;
  /**
   * remove a DocumentPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: DocumentPermissionInstance) => any): void;
  /**
   * update a DocumentPermissionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: DocumentPermissionInstanceUpdateOptions, callback?: (error: Error | null, items: DocumentPermissionInstance) => any): void;
}

export { DocumentPermissionContext, DocumentPermissionInstance, DocumentPermissionList, DocumentPermissionListInstance, DocumentPermissionListInstanceEachOptions, DocumentPermissionListInstanceOptions, DocumentPermissionListInstancePageOptions, DocumentPermissionPage, DocumentPermissionPayload, DocumentPermissionResource, DocumentPermissionSolution }
