/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Studio = require('../Studio');
import deserialize = require('../../../base/deserialize');
import values = require('../../../base/values');
import { EngagementList } from './flow/engagement';



declare class FlowPage extends Page {
  /**
   * @constructor Twilio.Preview.Studio.FlowPage
   * @augments Page
   * @description Initialize the FlowPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Studio, response: object, solution: object);

  /**
   * Build an instance of FlowInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.Studio.FlowPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}

declare class FlowInstance {
  /**
   * @constructor Twilio.Preview.Studio.FlowInstance
   * @description Initialize the FlowContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - A string that uniquely identifies this Flow.
   * @property accountSid - Account Sid.
   * @property friendlyName - A human readable description of this resource.
   * @property status - The Status of this Flow
   * @property debug - Toggle extra logging.
   * @property version - The latest version number of this Flow's definition.
   * @property dateCreated - The date this Flow was created
   * @property dateUpdated - The date this Flow was updated
   * @property url - The URL of this resource.
   * @property links - Nested resource URLs.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Studio, payload: object, sid: sid);

  _proxy?: FlowContext;
  /**
   * Access the engagements
   *
   * @function engagements
   * @memberof Twilio.Preview.Studio.FlowInstance
   * @instance
   */
  engagements();
  /**
   * fetch a FlowInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Studio.FlowInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a FlowInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Studio.FlowInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the FlowInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.Studio.FlowInstance
   * @instance
   */
  toJSON();
}

declare class FlowContext {
  /**
   * @constructor Twilio.Preview.Studio.FlowContext
   * @description Initialize the FlowContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property engagements - engagements resource
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Studio, sid: sid);

  engagements?: Twilio.Preview.Studio.FlowContext.EngagementList;
  /**
   * fetch a FlowInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Studio.FlowContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a FlowInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Studio.FlowContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { FlowContext, FlowInstance, FlowList, FlowPage }
