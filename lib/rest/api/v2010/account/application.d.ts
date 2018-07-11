/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import deserialize = require('../../../../base/deserialize');
import serialize = require('../../../../base/serialize');
import values = require('../../../../base/values');


/**
 * Options to pass to update
 *
 * @property friendlyName - Human readable description of this resource
 * @property apiVersion - The API version to use
 * @property voiceUrl - URL Twilio will make requests to when relieving a call
 * @property voiceMethod - HTTP method to use with the URL
 * @property voiceFallbackUrl - Fallback URL
 * @property voiceFallbackMethod - HTTP method to use with the fallback url
 * @property statusCallback - URL to hit with status updates
 * @property statusCallbackMethod - HTTP method to use with the status callback
 * @property voiceCallerIdLookup - True or False
 * @property smsUrl - URL Twilio will request when receiving an SMS
 * @property smsMethod - HTTP method to use with sms_url
 * @property smsFallbackUrl - Fallback URL if there's an error parsing TwiML
 * @property smsFallbackMethod - HTTP method to use with sms_fallback_method
 * @property smsStatusCallback - URL Twilio with request with status updates
 * @property messageStatusCallback - URL to make requests to with status updates
 */
export interface UpdateOptions {
  apiVersion?: string;
  friendlyName?: string;
  messageStatusCallback?: string;
  smsFallbackMethod?: string;
  smsFallbackUrl?: string;
  smsMethod?: string;
  smsStatusCallback?: string;
  smsUrl?: string;
  statusCallback?: string;
  statusCallbackMethod?: string;
  voiceCallerIdLookup?: boolean;
  voiceFallbackMethod?: string;
  voiceFallbackUrl?: string;
  voiceMethod?: string;
  voiceUrl?: string;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - Human readable description of this resource
 * @property apiVersion - The API version to use
 * @property voiceUrl - URL Twilio will make requests to when relieving a call
 * @property voiceMethod - HTTP method to use with the URL
 * @property voiceFallbackUrl - Fallback URL
 * @property voiceFallbackMethod - HTTP method to use with the fallback url
 * @property statusCallback - URL to hit with status updates
 * @property statusCallbackMethod - HTTP method to use with the status callback
 * @property voiceCallerIdLookup - True or False
 * @property smsUrl - URL Twilio will request when receiving an SMS
 * @property smsMethod - HTTP method to use with sms_url
 * @property smsFallbackUrl - Fallback URL if there's an error parsing TwiML
 * @property smsFallbackMethod - HTTP method to use with sms_fallback_method
 * @property smsStatusCallback - URL Twilio with request with status updates
 * @property messageStatusCallback - URL to make requests to with status updates
 */
export interface UpdateOptions {
  apiVersion?: string;
  friendlyName?: string;
  messageStatusCallback?: string;
  smsFallbackMethod?: string;
  smsFallbackUrl?: string;
  smsMethod?: string;
  smsStatusCallback?: string;
  smsUrl?: string;
  statusCallback?: string;
  statusCallbackMethod?: string;
  voiceCallerIdLookup?: boolean;
  voiceFallbackMethod?: string;
  voiceFallbackUrl?: string;
  voiceMethod?: string;
  voiceUrl?: string;
}


declare class ApplicationPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.ApplicationPage
   * @augments Page
   * @description Initialize the ApplicationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of ApplicationInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.ApplicationPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}

declare class ApplicationInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.ApplicationInstance
   * @description Initialize the ApplicationContext
   *
   * @property accountSid - A string that uniquely identifies this resource
   * @property apiVersion - The API version to use
   * @property dateCreated - Date this resource was created
   * @property dateUpdated - Date this resource was last updated
   * @property friendlyName - Human readable description of this resource
   * @property messageStatusCallback - URL to make requests to with status updates
   * @property sid - A string that uniquely identifies this resource
   * @property smsFallbackMethod - HTTP method to use with sms_fallback_method
   * @property smsFallbackUrl - Fallback URL if there's an error parsing TwiML
   * @property smsMethod - HTTP method to use with sms_url
   * @property smsStatusCallback - URL Twilio with request with status updates
   * @property smsUrl - URL Twilio will request when receiving an SMS
   * @property statusCallback - URL to hit with status updates
   * @property statusCallbackMethod - HTTP method to use with the status callback
   * @property uri - URI for this resource
   * @property voiceCallerIdLookup - True or False
   * @property voiceFallbackMethod - HTTP method to use with the fallback url
   * @property voiceFallbackUrl - Fallback URL
   * @property voiceMethod - HTTP method to use with the URL
   * @property voiceUrl - URL Twilio will make requests to when relieving a call
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - A string that uniquely identifies this resource
   * @param sid - Fetch by unique Application Sid
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, sid: sid);

  _proxy?: ApplicationContext;
  /**
   * fetch a ApplicationInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.ApplicationInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a ApplicationInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.ApplicationInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the ApplicationInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.ApplicationInstance
   * @instance
   */
  toJSON();
  /**
   * update a ApplicationInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.ApplicationInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

declare class ApplicationContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.ApplicationContext
   * @description Initialize the ApplicationContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique Application Sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, sid: sid);

  /**
   * fetch a ApplicationInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.ApplicationContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a ApplicationInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.ApplicationContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a ApplicationInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.ApplicationContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { ApplicationContext, ApplicationInstance, ApplicationList, ApplicationPage }
