/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the AwsList
 *
 * @param version - Version of the resource
 */
declare function AwsList(version: V1): AwsListInstance;

interface AwsResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  sid: string;
  url: string;
}

interface AwsPayload extends AwsResource, Page.TwilioResponsePayload {
}

interface AwsSolution {
}

interface AwsListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): AwsContext;
  /**
   * create a AwsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: AwsListInstanceCreateOptions, callback?: (error: Error | null, items: AwsListInstance) => any): Promise<AwsInstance>;
  /**
   * Streams AwsInstance records from the API.
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
  each(opts?: AwsListInstanceEachOptions, callback?: (item: AwsInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a aws
   *
   * @param sid - The sid
   */
  get(sid: string): AwsContext;
  /**
   * Retrieve a single target page of AwsInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: AwsPage) => any): Promise<AwsPage>;
  /**
   * Lists AwsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: AwsListInstanceOptions, callback?: (error: Error | null, items: AwsInstance[]) => any): Promise<AwsInstance[]>;
  /**
   * Retrieve a single page of AwsInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: AwsListInstancePageOptions, callback?: (error: Error | null, items: AwsPage) => any): Promise<AwsPage>;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - The friendly_name
 */
interface AwsInstanceUpdateOptions {
  friendlyName?: string;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - The friendly_name
 */
interface AwsInstanceUpdateOptions {
  friendlyName?: string;
}


declare class AwsPage extends Page<V1, AwsPayload, AwsResource, AwsInstance> {
  /**
   * Initialize the AwsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: AwsSolution);

  /**
   * Build an instance of AwsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AwsPayload): AwsInstance;
}


declare class AwsInstance extends SerializableClass {
  /**
   * Initialize the AwsContext
   *
   * @property sid - The sid
   * @property accountSid - The account_sid
   * @property friendlyName - The friendly_name
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: V1, payload: AwsPayload, sid: string);

  private _proxy: AwsContext;
  accountSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a AwsInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AwsInstance) => any): void;
  friendlyName: string;
  /**
   * remove a AwsInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: AwsInstance) => any): void;
  sid: string;
  /**
   * update a AwsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: AwsInstanceUpdateOptions, callback?: (error: Error | null, items: AwsInstance) => any): void;
  url: string;
}


declare class AwsContext {
  /**
   * Initialize the AwsContext
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: V1, sid: string);

  /**
   * fetch a AwsInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AwsInstance) => any): void;
  /**
   * remove a AwsInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: AwsInstance) => any): void;
  /**
   * update a AwsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: AwsInstanceUpdateOptions, callback?: (error: Error | null, items: AwsInstance) => any): void;
}

export { AwsContext, AwsInstance, AwsList, AwsListInstance, AwsListInstanceCreateOptions, AwsListInstanceEachOptions, AwsListInstanceOptions, AwsListInstancePageOptions, AwsPage, AwsPayload, AwsResource, AwsSolution }
