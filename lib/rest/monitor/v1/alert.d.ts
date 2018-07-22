/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import serialize = require('../../../base/serialize');
import { SerializableClass } from '../../../interfaces';

/**
 * @description Initialize the AlertList
 *
 * @param version - Version of the resource
 */
declare function AlertList(version: V1): AlertListInstance;

interface AlertResource {
  account_sid: string;
  alert_text: string;
  api_version: string;
  date_created: Date;
  date_generated: Date;
  date_updated: Date;
  error_code: string;
  log_level: string;
  more_info: string;
  request_method: string;
  request_url: string;
  request_variables?: string;
  resource_sid: string;
  response_body?: string;
  response_headers?: string;
  sid: string;
  url: string;
}

interface AlertPayload extends AlertResource, Page.TwilioResponsePayload {
}

interface AlertSolution {
}

interface AlertListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): AlertContext;
  /**
   * Streams AlertInstance records from the API.
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
  each(opts?: AlertListInstanceEachOptions, callback?: (item: AlertInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a alert
   *
   * @param sid - The sid
   */
  get(sid: string): AlertContext;
  /**
   * Retrieve a single target page of AlertInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: AlertPage) => any): Promise<AlertPage>;
  /**
   * Lists AlertInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: AlertListInstanceOptions, callback?: (error: Error | null, items: AlertInstance[]) => any): Promise<AlertInstance[]>;
  /**
   * Retrieve a single page of AlertInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: AlertListInstancePageOptions, callback?: (error: Error | null, items: AlertPage) => any): Promise<AlertPage>;
}


declare class AlertPage extends Page<V1, AlertPayload, AlertResource, AlertInstance> {
  /**
   * Initialize the AlertPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: AlertSolution);

  /**
   * Build an instance of AlertInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AlertPayload): AlertInstance;
}


declare class AlertInstance extends SerializableClass {
  /**
   * Initialize the AlertContext
   *
   * @property accountSid - The unique id of the Account responsible for this alert.
   * @property alertText - The text of the alert.
   * @property apiVersion - The version of the Twilio API in use when this alert was generated.
   * @property dateCreated - The date that this resource was created, given in ISO 8601 format.
   * @property dateGenerated - The date the alert was actually generated, given in ISO 8601 format.
   * @property dateUpdated - The most recent date that this resource was updated, given in ISO 8601 format.
   * @property errorCode - A unique error code for the error condition.
   * @property logLevel - A string representing the log level.
   * @property moreInfo - A URL for more information about the error condition.
   * @property requestMethod - If the Alert was generated by a request Twilio made to your server, this will be the request method used when Twilio made the request to your server.
   * @property requestUrl - If the Alert was generated by a request Twilio made to your server, this will be the URL on your server that generated the alert.
   * @property requestVariables - The request_variables
   * @property resourceSid - The unique ID of the resource for which the Alert was generated.
   * @property responseBody - The response_body
   * @property responseHeaders - The response_headers
   * @property sid - A 34 character string that uniquely identifies this Alert.
   * @property url - The absolute URL for this resource.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: V1, payload: AlertPayload, sid: string);

  private _proxy: AlertContext;
  accountSid: string;
  alertText: string;
  apiVersion: string;
  dateCreated: Date;
  dateGenerated: Date;
  dateUpdated: Date;
  errorCode: string;
  /**
   * fetch a AlertInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AlertInstance) => any): void;
  logLevel: string;
  moreInfo: string;
  /**
   * remove a AlertInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: AlertInstance) => any): void;
  requestMethod: string;
  requestUrl: string;
  requestVariables: string;
  resourceSid: string;
  responseBody: string;
  responseHeaders: string;
  sid: string;
  url: string;
}


declare class AlertContext {
  /**
   * Initialize the AlertContext
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: V1, sid: string);

  /**
   * fetch a AlertInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AlertInstance) => any): void;
  /**
   * remove a AlertInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: AlertInstance) => any): void;
}

export { AlertContext, AlertInstance, AlertList, AlertListInstance, AlertListInstanceEachOptions, AlertListInstanceOptions, AlertListInstancePageOptions, AlertPage, AlertPayload, AlertResource, AlertSolution }
