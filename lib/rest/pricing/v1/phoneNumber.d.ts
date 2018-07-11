/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import { CountryList } from './phoneNumber/country';



declare class PhoneNumberPage extends Page {
  /**
   * @constructor Twilio.Pricing.V1.PhoneNumberPage
   * @augments Page
   * @description Initialize the PhoneNumberPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Pricing.V1, response: object, solution: object);

  /**
   * Build an instance of PhoneNumberInstance
   *
   * @function getInstance
   * @memberof Twilio.Pricing.V1.PhoneNumberPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}

declare class PhoneNumberInstance {
  /**
   * @constructor Twilio.Pricing.V1.PhoneNumberInstance
   * @description Initialize the PhoneNumberContext
   *
   * @property name - The name
   * @property url - The url
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   */
  constructor(version: Twilio.Pricing.V1, payload: object);

  /**
   * Produce a plain JSON object version of the PhoneNumberInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Pricing.V1.PhoneNumberInstance
   * @instance
   */
  toJSON();
}

export { PhoneNumberInstance, PhoneNumberList, PhoneNumberPage }
