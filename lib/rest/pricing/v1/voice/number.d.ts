/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import V1 = require('../../V1');
import values = require('../../../../base/values');

/**
 * @description Initialize the NumberList
 *
 * @param version - Version of the resource
 */
declare function NumberList(version: V1): NumberListInstance;

interface NumberListInstance {
}


declare class NumberPage extends Page {
  /**
   * @constructor Twilio.Pricing.V1.VoiceContext.NumberPage
   * @augments Page
   * @description Initialize the NumberPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Pricing.V1, response: object, solution: object);

  /**
   * Build an instance of NumberInstance
   *
   * @function getInstance
   * @memberof Twilio.Pricing.V1.VoiceContext.NumberPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class NumberInstance {
  /**
   * @constructor Twilio.Pricing.V1.VoiceContext.NumberInstance
   * @description Initialize the NumberContext
   *
   * @property number - The number
   * @property country - Name of the country
   * @property isoCountry - The ISO country code
   * @property outboundCallPrice - See OutboundCallPrice record
   * @property inboundCallPrice - See InboundCallPrice record (returned as null if the Phone Number provided is not a Twilio number owned by this account)
   * @property priceUnit - The currency in which prices are measured, in ISO 4127 format (e.g. usd, eur, jpy).
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param number - The number
   */
  constructor(version: Twilio.Pricing.V1, payload: object, number: phone_number);

  _proxy?: NumberContext;
  /**
   * fetch a NumberInstance
   *
   * @function fetch
   * @memberof Twilio.Pricing.V1.VoiceContext.NumberInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the NumberInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Pricing.V1.VoiceContext.NumberInstance
   * @instance
   */
  toJSON();
}


declare class NumberContext {
  /**
   * @constructor Twilio.Pricing.V1.VoiceContext.NumberContext
   * @description Initialize the NumberContext
   *
   * @param version - Version of the resource
   * @param number - The number
   */
  constructor(version: Twilio.Pricing.V1, number: phone_number);

  /**
   * fetch a NumberInstance
   *
   * @function fetch
   * @memberof Twilio.Pricing.V1.VoiceContext.NumberContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
}

export { NumberContext, NumberInstance, NumberList, NumberListInstance, NumberPage }
