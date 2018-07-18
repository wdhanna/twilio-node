/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import serialize = require('../../../../../base/serialize');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the MobileList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique sid that identifies this account
 */
declare function MobileList(version: V2010, accountSid: string): MobileListInstance;

interface MobileResource {
  account_sid: string;
  address_requirements: MobileAddressRequirement;
  address_sid: string;
  api_version: string;
  beta: boolean;
  capabilities: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  identity_sid: string;
  origin: string;
  phone_number: string;
  sid: string;
  sms_application_sid: string;
  sms_fallback_method: string;
  sms_fallback_url: string;
  sms_method: string;
  sms_url: string;
  status_callback: string;
  status_callback_method: string;
  trunk_sid: string;
  uri: string;
  voice_application_sid: string;
  voice_caller_id_lookup: boolean;
  voice_fallback_method: string;
  voice_fallback_url: string;
  voice_method: string;
  voice_url: string;
}

interface MobilePayload extends MobileResource, Page.TwilioResponsePayload {
}

interface MobileSolution {
  accountSid?: string;
}

interface MobileListInstance {
  /**
   * create a MobileInstance
   *
   * @function create
   * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.MobileList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  create(opts: object, callback?: function);
  /**
   * Streams MobileInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.MobileList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Retrieve a single target page of MobileInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.MobileList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists MobileInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.MobileList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of MobileInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.MobileList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  page(opts?: object, callback?: function);
}


declare class MobilePage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.MobilePage
   * @augments Page
   * @description Initialize the MobilePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: Response<string>, solution: object);

  /**
   * Build an instance of MobileInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.MobilePage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class MobileInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.MobileInstance
   * @description Initialize the MobileContext
   *
   * @property accountSid - The unique id of the Account responsible for this phone number.
   * @property addressSid - The 34 character sid of the address associated with this number.
   * @property addressRequirements - This indicates whether the phone number requires you or your customer to have an Address registered with Twilio.
   * @property apiVersion - Calls to this phone number will start a new TwiML session with this API version.
   * @property beta - Phone numbers new to the Twilio platform are marked as beta.
   * @property capabilities - This is a set of boolean properties that indicate whether a phone number can receive calls or messages.
   * @property dateCreated - The date that this resource was created, given as GMT RFC 2822 format.
   * @property dateUpdated - The date that this resource was last updated, given as GMT RFC 2822 format.
   * @property friendlyName - A human readable descriptive text for this resource, up to 64 characters long.
   * @property identitySid - The identity_sid
   * @property phoneNumber - The incoming phone number.
   * @property origin - Twilio owned phone numbers are marked as twilio while hosted phone numbers are marked as hosted.
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property smsApplicationSid - The 34 character sid of the application Twilio should use to handle SMSs sent to this number.
   * @property smsFallbackMethod - The HTTP method Twilio will use when requesting the above URL.
   * @property smsFallbackUrl - The URL that Twilio will request if an error occurs retrieving or executing the TwiML from SmsUrl.
   * @property smsMethod - The HTTP method Twilio will use when making requests to the SmsUrl.
   * @property smsUrl - The URL Twilio will request when receiving an incoming SMS message to this number.
   * @property statusCallback - The URL that Twilio will request to pass status parameters to your application.
   * @property statusCallbackMethod - The HTTP method Twilio will use to make requests to the StatusCallback URL.
   * @property trunkSid - The 34 character sid of the Trunk Twilio should use to handle phone calls to this number.
   * @property uri - The URI for this resource, relative to https://api.
   * @property voiceApplicationSid - The 34 character sid of the application Twilio should use to handle phone calls to this number.
   * @property voiceCallerIdLookup - Look up the caller's caller-ID name from the CNAM database.
   * @property voiceFallbackMethod - The HTTP method Twilio will use when requesting the VoiceFallbackUrl.
   * @property voiceFallbackUrl - The URL that Twilio will request if an error occurs retrieving or executing the TwiML requested by Url.
   * @property voiceMethod - The HTTP method Twilio will use when requesting the above Url.
   * @property voiceUrl - The URL Twilio will request when this phone number receives a call.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique sid that identifies this account
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid);

  /**
   * Produce a plain JSON object version of the MobileInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.MobileInstance
   * @instance
   */
  toJSON();
}

export { MobileInstance, MobileList, MobileListInstance, MobilePage, MobilePayload, MobileResource, MobileSolution }
