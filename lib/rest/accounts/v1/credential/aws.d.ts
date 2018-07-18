/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
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
   * @function create
   * @memberof Twilio.Accounts.V1.CredentialContext.AwsList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  create(opts: object, callback?: function);
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
   * @function each
   * @memberof Twilio.Accounts.V1.CredentialContext.AwsList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a aws
   *
   * @function get
   * @memberof Twilio.Accounts.V1.CredentialContext.AwsList
   * @instance
   *
   * @param sid - The sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of AwsInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Accounts.V1.CredentialContext.AwsList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists AwsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Accounts.V1.CredentialContext.AwsList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of AwsInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Accounts.V1.CredentialContext.AwsList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  page(opts?: object, callback?: function);
}

/**
 * Options to pass to update
 *
 * @property friendlyName - The friendly_name
 */
export interface UpdateOptions {
  friendlyName?: string;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - The friendly_name
 */
export interface UpdateOptions {
  friendlyName?: string;
}


declare class AwsPage extends Page {
  /**
   * @constructor Twilio.Accounts.V1.CredentialContext.AwsPage
   * @augments Page
   * @description Initialize the AwsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Accounts.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of AwsInstance
   *
   * @function getInstance
   * @memberof Twilio.Accounts.V1.CredentialContext.AwsPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class AwsInstance {
  /**
   * @constructor Twilio.Accounts.V1.CredentialContext.AwsInstance
   * @description Initialize the AwsContext
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
  constructor(version: Twilio.Accounts.V1, payload: object, sid: sid);

  _proxy?: AwsContext;
  /**
   * fetch a AwsInstance
   *
   * @function fetch
   * @memberof Twilio.Accounts.V1.CredentialContext.AwsInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a AwsInstance
   *
   * @function remove
   * @memberof Twilio.Accounts.V1.CredentialContext.AwsInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the AwsInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Accounts.V1.CredentialContext.AwsInstance
   * @instance
   */
  toJSON();
  /**
   * update a AwsInstance
   *
   * @function update
   * @memberof Twilio.Accounts.V1.CredentialContext.AwsInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class AwsContext {
  /**
   * @constructor Twilio.Accounts.V1.CredentialContext.AwsContext
   * @description Initialize the AwsContext
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.Accounts.V1, sid: sid);

  /**
   * fetch a AwsInstance
   *
   * @function fetch
   * @memberof Twilio.Accounts.V1.CredentialContext.AwsContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a AwsInstance
   *
   * @function remove
   * @memberof Twilio.Accounts.V1.CredentialContext.AwsContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a AwsInstance
   *
   * @function update
   * @memberof Twilio.Accounts.V1.CredentialContext.AwsContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { AwsContext, AwsInstance, AwsList, AwsListInstance, AwsPage, AwsPayload, AwsResource, AwsSolution }