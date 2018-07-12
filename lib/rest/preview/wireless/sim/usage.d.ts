/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Wireless = require('../../Wireless');
import values = require('../../../../base/values');


/**
 * Options to pass to fetch
 *
 * @property end - The end
 * @property start - The start
 */
export interface FetchOptions {
  end?: string;
  start?: string;
}

/**
 * Options to pass to fetch
 *
 * @property end - The end
 * @property start - The start
 */
export interface FetchOptions {
  end?: string;
  start?: string;
}


declare class UsagePage extends Page {
  /**
   * @constructor Twilio.Preview.Wireless.SimContext.UsagePage
   * @augments Page
   * @description Initialize the UsagePage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Wireless, response: object, solution: object);

  /**
   * Build an instance of UsageInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.Wireless.SimContext.UsagePage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}

declare class UsageInstance {
  /**
   * @constructor Twilio.Preview.Wireless.SimContext.UsageInstance
   * @description Initialize the UsageContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property simSid - The sim_sid
   * @property simUniqueName - The sim_unique_name
   * @property accountSid - The account_sid
   * @property period - The period
   * @property commandsUsage - The commands_usage
   * @property commandsCosts - The commands_costs
   * @property dataUsage - The data_usage
   * @property dataCosts - The data_costs
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param simSid - The sim_sid
   */
  constructor(version: Twilio.Preview.Wireless, payload: object, simSid: sid);

  _proxy?: UsageContext;
  /**
   * fetch a UsageInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Wireless.SimContext.UsageInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: object, callback?: function);
  /**
   * Produce a plain JSON object version of the UsageInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.Wireless.SimContext.UsageInstance
   * @instance
   */
  toJSON();
}

declare class UsageContext {
  /**
   * @constructor Twilio.Preview.Wireless.SimContext.UsageContext
   * @description Initialize the UsageContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param simSid - The sim_sid
   */
  constructor(version: Twilio.Preview.Wireless, simSid: sid_like);

  /**
   * fetch a UsageInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Wireless.SimContext.UsageContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: object, callback?: function);
}

export { UsageContext, UsageInstance, UsageList, UsagePage }
