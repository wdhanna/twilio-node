/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import deserialize = require('../../../base/deserialize');
import serialize = require('../../../base/serialize');
import values = require('../../../base/values');


/**
 * Options to pass to update
 *
 * @property uniqueName - The unique_name
 * @property friendlyName - The friendly_name
 */
export interface UpdateOptions {
  friendlyName?: string;
  uniqueName?: string;
}

/**
 * Options to pass to update
 *
 * @property uniqueName - The unique_name
 * @property friendlyName - The friendly_name
 */
export interface UpdateOptions {
  friendlyName?: string;
  uniqueName?: string;
}


declare class RatePlanPage extends Page {
  /**
   * @constructor Twilio.Preview.Wireless.RatePlanPage
   * @augments Page
   * @description Initialize the RatePlanPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Wireless, response: object, solution: object);

  /**
   * Build an instance of RatePlanInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.Wireless.RatePlanPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}

declare class RatePlanInstance {
  /**
   * @constructor Twilio.Preview.Wireless.RatePlanInstance
   * @description Initialize the RatePlanContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - The sid
   * @property uniqueName - The unique_name
   * @property accountSid - The account_sid
   * @property friendlyName - The friendly_name
   * @property dataEnabled - The data_enabled
   * @property dataMetering - The data_metering
   * @property dataLimit - The data_limit
   * @property messagingEnabled - The messaging_enabled
   * @property voiceEnabled - The voice_enabled
   * @property nationalRoamingEnabled - The national_roaming_enabled
   * @property internationalRoaming - The international_roaming
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Wireless, payload: object, sid: sid_like);

  _proxy?: RatePlanContext;
  /**
   * fetch a RatePlanInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Wireless.RatePlanInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a RatePlanInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Wireless.RatePlanInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the RatePlanInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.Wireless.RatePlanInstance
   * @instance
   */
  toJSON();
  /**
   * update a RatePlanInstance
   *
   * @function update
   * @memberof Twilio.Preview.Wireless.RatePlanInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

declare class RatePlanContext {
  /**
   * @constructor Twilio.Preview.Wireless.RatePlanContext
   * @description Initialize the RatePlanContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Wireless, sid: sid_like);

  /**
   * fetch a RatePlanInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Wireless.RatePlanContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a RatePlanInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Wireless.RatePlanContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a RatePlanInstance
   *
   * @function update
   * @memberof Twilio.Preview.Wireless.RatePlanContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { RatePlanContext, RatePlanInstance, RatePlanList, RatePlanPage }
