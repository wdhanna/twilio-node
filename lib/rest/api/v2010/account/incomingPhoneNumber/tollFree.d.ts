/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import deserialize = require('../../../../../base/deserialize');
import serialize = require('../../../../../base/serialize');
import values = require('../../../../../base/values');



declare class TollFreePage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.TollFreePage
   * @augments Page
   * @description Initialize the TollFreePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of TollFreeInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.TollFreePage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}

declare class TollFreeInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.TollFreeInstance
   * @description Initialize the TollFreeContext
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
   * Produce a plain JSON object version of the TollFreeInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.TollFreeInstance
   * @instance
   */
  toJSON();
}

export { TollFreeInstance, TollFreeList, TollFreePage }
