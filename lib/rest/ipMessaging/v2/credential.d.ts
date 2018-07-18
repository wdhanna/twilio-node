/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V2 = require('../V2');
import serialize = require('../../../base/serialize');
import { ListEachOptions, ListOptions, PageOptions } from '../../../interfaces';
import { SerializableClass } from '../../../interfaces';

/**
 * @description Initialize the CredentialList
 *
 * @param version - Version of the resource
 */
declare function CredentialList(version: V2): CredentialListInstance;

interface CredentialResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  sandbox: string;
  sid: string;
  type: CredentialPushService;
  url: string;
}

interface CredentialPayload extends CredentialResource, Page.TwilioResponsePayload {
}

interface CredentialSolution {
}

interface CredentialListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): CredentialContext;
  /**
   * create a CredentialInstance
   *
   * @function create
   * @memberof Twilio.IpMessaging.V2.CredentialList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  create(opts: object, callback?: function);
  /**
   * Streams CredentialInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.IpMessaging.V2.CredentialList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a credential
   *
   * @function get
   * @memberof Twilio.IpMessaging.V2.CredentialList
   * @instance
   *
   * @param sid - The sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of CredentialInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.IpMessaging.V2.CredentialList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists CredentialInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.IpMessaging.V2.CredentialList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of CredentialInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.IpMessaging.V2.CredentialList
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
 * @property friendlyName - Friendly name for stored credential
 * @property certificate - [APN only] URL encoded representation of the certificate, e.
 * @property privateKey - [APN only] URL encoded representation of the private key, e.
 * @property sandbox - [APN only] use this credential for sending to production or sandbox APNs
 * @property apiKey - [GCM only] This is the "API key" for project from Google Developer console for your GCM Service application credential
 * @property secret - [FCM only] This is the "Server key" of your project from Firebase console under Settings / Cloud messaging.
 */
export interface UpdateOptions {
  apiKey?: string;
  certificate?: string;
  friendlyName?: string;
  privateKey?: string;
  sandbox?: boolean;
  secret?: string;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - Friendly name for stored credential
 * @property certificate - [APN only] URL encoded representation of the certificate, e.
 * @property privateKey - [APN only] URL encoded representation of the private key, e.
 * @property sandbox - [APN only] use this credential for sending to production or sandbox APNs
 * @property apiKey - [GCM only] This is the "API key" for project from Google Developer console for your GCM Service application credential
 * @property secret - [FCM only] This is the "Server key" of your project from Firebase console under Settings / Cloud messaging.
 */
export interface UpdateOptions {
  apiKey?: string;
  certificate?: string;
  friendlyName?: string;
  privateKey?: string;
  sandbox?: boolean;
  secret?: string;
}


declare class CredentialPage extends Page {
  /**
   * @constructor Twilio.IpMessaging.V2.CredentialPage
   * @augments Page
   * @description Initialize the CredentialPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.IpMessaging.V2, response: Response<string>, solution: object);

  /**
   * Build an instance of CredentialInstance
   *
   * @function getInstance
   * @memberof Twilio.IpMessaging.V2.CredentialPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class CredentialInstance {
  /**
   * @constructor Twilio.IpMessaging.V2.CredentialInstance
   * @description Initialize the CredentialContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property accountSid - The unique id of the Account responsible for this resource.
   * @property friendlyName - The human-readable name of this resource.
   * @property type - Indicates which push notifications service this credential is for - either gcm, fcm, or apn
   * @property sandbox - [APN only] true when this resource should use the sandbox APN service.
   * @property dateCreated - The date that this resource was created.
   * @property dateUpdated - The date that this resource was last updated.
   * @property url - An absolute URL for this credential resource.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Twilio.IpMessaging.V2, payload: object, sid: sid);

  _proxy?: CredentialContext;
  /**
   * fetch a CredentialInstance
   *
   * @function fetch
   * @memberof Twilio.IpMessaging.V2.CredentialInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a CredentialInstance
   *
   * @function remove
   * @memberof Twilio.IpMessaging.V2.CredentialInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the CredentialInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.IpMessaging.V2.CredentialInstance
   * @instance
   */
  toJSON();
  /**
   * update a CredentialInstance
   *
   * @function update
   * @memberof Twilio.IpMessaging.V2.CredentialInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class CredentialContext {
  /**
   * @constructor Twilio.IpMessaging.V2.CredentialContext
   * @description Initialize the CredentialContext
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.IpMessaging.V2, sid: sid);

  /**
   * fetch a CredentialInstance
   *
   * @function fetch
   * @memberof Twilio.IpMessaging.V2.CredentialContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a CredentialInstance
   *
   * @function remove
   * @memberof Twilio.IpMessaging.V2.CredentialContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a CredentialInstance
   *
   * @function update
   * @memberof Twilio.IpMessaging.V2.CredentialContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { CredentialContext, CredentialInstance, CredentialList, CredentialListInstance, CredentialPage, CredentialPayload, CredentialResource, CredentialSolution }