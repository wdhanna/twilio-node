/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import deserialize = require('../../../../base/deserialize');
import values = require('../../../../base/values');



declare class PhoneNumberPage extends Page {
  /**
   * @constructor Twilio.Preview.Proxy.ServiceContext.PhoneNumberPage
   * @augments Page
   * @description Initialize the PhoneNumberPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Proxy, response: object, solution: object);

  /**
   * Build an instance of PhoneNumberInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.Proxy.ServiceContext.PhoneNumberPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}

declare class PhoneNumberInstance {
  /**
   * @constructor Twilio.Preview.Proxy.ServiceContext.PhoneNumberInstance
   * @description Initialize the PhoneNumberContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - A string that uniquely identifies this resource
   * @property accountSid - Account Sid.
   * @property serviceSid - Service Sid.
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property phoneNumber - The phone number
   * @property countryCode - The ISO 3166-1 alpha-2 country code
   * @property capabilities - Indicate if a phone can receive calls or messages
   * @property url - The URL of this resource.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   * @param sid - Fetch by unique phone-number Sid
   */
  constructor(version: Twilio.Preview.Proxy, payload: object, serviceSid: sid, sid: sid);

  _proxy?: PhoneNumberContext;
  /**
   * fetch a PhoneNumberInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Proxy.ServiceContext.PhoneNumberInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a PhoneNumberInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Proxy.ServiceContext.PhoneNumberInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the PhoneNumberInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.Proxy.ServiceContext.PhoneNumberInstance
   * @instance
   */
  toJSON();
}

declare class PhoneNumberContext {
  /**
   * @constructor Twilio.Preview.Proxy.ServiceContext.PhoneNumberContext
   * @description Initialize the PhoneNumberContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param sid - Fetch by unique phone-number Sid
   */
  constructor(version: Twilio.Preview.Proxy, serviceSid: sid, sid: sid);

  /**
   * fetch a PhoneNumberInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Proxy.ServiceContext.PhoneNumberContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a PhoneNumberInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Proxy.ServiceContext.PhoneNumberContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { PhoneNumberContext, PhoneNumberInstance, PhoneNumberList, PhoneNumberPage }
