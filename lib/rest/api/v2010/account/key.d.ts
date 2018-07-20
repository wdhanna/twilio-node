/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2010 = require('../../V2010');
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the KeyList
 *
 * @param version - Version of the resource
 * @param accountSid - A 34 character string that uniquely identifies this resource.
 */
declare function KeyList(version: V2010, accountSid: string): KeyListInstance;

interface KeyResource {
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  sid: string;
}

interface KeyPayload extends KeyResource, Page.TwilioResponsePayload {
}

interface KeySolution {
  accountSid?: string;
}

interface KeyListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): KeyContext;
  /**
   * Streams KeyInstance records from the API.
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
  each(opts?: KeyListInstanceEachOptions, callback?: (item: KeyInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a key
   *
   * @param sid - The sid
   */
  get(sid: string): KeyContext;
  /**
   * Retrieve a single target page of KeyInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: KeyPage) => any): Promise<KeyPage>;
  /**
   * Lists KeyInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: KeyListInstanceOptions, callback?: (error: Error | null, items: KeyInstance[]) => any): Promise<KeyInstance[]>;
  /**
   * Retrieve a single page of KeyInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: KeyListInstancePageOptions, callback?: (error: Error | null, items: KeyPage) => any): Promise<KeyPage>;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - A descriptive string for this resource, chosen by your application, up to 64 characters long.
 */
interface KeyInstanceUpdateOptions {
  friendlyName?: string;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - A descriptive string for this resource, chosen by your application, up to 64 characters long.
 */
interface KeyInstanceUpdateOptions {
  friendlyName?: string;
}


declare class KeyPage extends Page<V2010, KeyPayload, KeyResource, KeyInstance> {
  /**
   * Initialize the KeyPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: KeySolution);

  /**
   * Build an instance of KeyInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: KeyPayload): KeyInstance;
}


declare class KeyInstance extends SerializableClass {
  /**
   * Initialize the KeyContext
   *
   * @property sid - A 34 character string that uniquely identifies this API Key.
   * @property friendlyName - A descriptive string for this resource, chosen by your application, up to 64 characters long.
   * @property dateCreated - The date-time this API Key was created, given as a RFC 2822 Timestamp.
   * @property dateUpdated - The date-time this API Key was most recently updated, given as a  RFC 2822 Timestamp.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - A 34 character string that uniquely identifies this resource.
   * @param sid - The sid
   */
  constructor(version: V2010, payload: KeyPayload, accountSid: string, sid: string);

  private _proxy: KeyContext;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a KeyInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: KeyInstance) => any): void;
  friendlyName: string;
  /**
   * remove a KeyInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: KeyInstance) => any): void;
  sid: string;
  /**
   * Produce a plain JSON object version of the KeyInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  /**
   * update a KeyInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: KeyInstanceUpdateOptions, callback?: (error: Error | null, items: KeyInstance) => any): void;
}


declare class KeyContext {
  /**
   * Initialize the KeyContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - The sid
   */
  constructor(version: V2010, accountSid: string, sid: string);

  /**
   * fetch a KeyInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: KeyInstance) => any): void;
  /**
   * remove a KeyInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: KeyInstance) => any): void;
  /**
   * update a KeyInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: KeyInstanceUpdateOptions, callback?: (error: Error | null, items: KeyInstance) => any): void;
}

export { KeyContext, KeyInstance, KeyList, KeyListInstance, KeyListInstanceEachOptions, KeyListInstanceOptions, KeyListInstancePageOptions, KeyPage, KeyPayload, KeyResource, KeySolution }
