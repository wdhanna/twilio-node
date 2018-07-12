/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Wireless = require('../Wireless');
import deserialize = require('../../../base/deserialize');
import values = require('../../../base/values');



declare class CommandPage extends Page {
  /**
   * @constructor Twilio.Preview.Wireless.CommandPage
   * @augments Page
   * @description Initialize the CommandPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Wireless, response: object, solution: object);

  /**
   * Build an instance of CommandInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.Wireless.CommandPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}

declare class CommandInstance {
  /**
   * @constructor Twilio.Preview.Wireless.CommandInstance
   * @description Initialize the CommandContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - The sid
   * @property accountSid - The account_sid
   * @property deviceSid - The device_sid
   * @property simSid - The sim_sid
   * @property command - The command
   * @property commandMode - The command_mode
   * @property status - The status
   * @property direction - The direction
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Wireless, payload: object, sid: sid);

  _proxy?: CommandContext;
  /**
   * fetch a CommandInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Wireless.CommandInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the CommandInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.Wireless.CommandInstance
   * @instance
   */
  toJSON();
}

declare class CommandContext {
  /**
   * @constructor Twilio.Preview.Wireless.CommandContext
   * @description Initialize the CommandContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Wireless, sid: sid);

  /**
   * fetch a CommandInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Wireless.CommandContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
}

export { CommandContext, CommandInstance, CommandList, CommandPage }
