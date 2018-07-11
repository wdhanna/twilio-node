/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import deserialize = require('../../../../base/deserialize');
import values = require('../../../../base/values');



declare class DayPage extends Page {
  /**
   * @constructor Twilio.Preview.BulkExports.ExportContext.DayPage
   * @augments Page
   * @description Initialize the DayPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.BulkExports, response: object, solution: object);

  /**
   * Build an instance of DayInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.BulkExports.ExportContext.DayPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}

declare class DayInstance {
  /**
   * @constructor Twilio.Preview.BulkExports.ExportContext.DayInstance
   * @description Initialize the DayContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property redirectTo - The redirect_to
   * @property day - The day
   * @property size - The size
   * @property resourceType - The resource_type
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param resourceType - The resource_type
   */
  constructor(version: Twilio.Preview.BulkExports, payload: object, resourceType: string);

  /**
   * Produce a plain JSON object version of the DayInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.BulkExports.ExportContext.DayInstance
   * @instance
   */
  toJSON();
}

export { DayInstance, DayList, DayPage }
