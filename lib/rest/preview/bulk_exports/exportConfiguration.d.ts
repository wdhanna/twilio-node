/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import BulkExports = require('../BulkExports');
import Page = require('../../../base/Page');
import serialize = require('../../../base/serialize');
import { SerializableClass } from '../../../interfaces';

/**
 * @description Initialize the ExportConfigurationList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function ExportConfigurationList(version: BulkExports): ExportConfigurationListInstance;

interface ExportConfigurationListInstance {
}

/**
 * Options to pass to update
 *
 * @property enabled - The enabled
 * @property webhookUrl - The webhook_url
 * @property webhookMethod - The webhook_method
 */
export interface UpdateOptions {
  enabled?: boolean;
  webhookMethod?: string;
  webhookUrl?: string;
}

/**
 * Options to pass to update
 *
 * @property enabled - The enabled
 * @property webhookUrl - The webhook_url
 * @property webhookMethod - The webhook_method
 */
export interface UpdateOptions {
  enabled?: boolean;
  webhookMethod?: string;
  webhookUrl?: string;
}


declare class ExportConfigurationPage extends Page {
  /**
   * @constructor Twilio.Preview.BulkExports.ExportConfigurationPage
   * @augments Page
   * @description Initialize the ExportConfigurationPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.BulkExports, response: object, solution: object);

  /**
   * Build an instance of ExportConfigurationInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.BulkExports.ExportConfigurationPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class ExportConfigurationInstance {
  /**
   * @constructor Twilio.Preview.BulkExports.ExportConfigurationInstance
   * @description Initialize the ExportConfigurationContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property enabled - The enabled
   * @property webhookUrl - The webhook_url
   * @property webhookMethod - The webhook_method
   * @property resourceType - The resource_type
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param resourceType - The resource_type
   */
  constructor(version: Twilio.Preview.BulkExports, payload: object, resourceType: string);

  _proxy?: ExportConfigurationContext;
  /**
   * fetch a ExportConfigurationInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.BulkExports.ExportConfigurationInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the ExportConfigurationInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.BulkExports.ExportConfigurationInstance
   * @instance
   */
  toJSON();
  /**
   * update a ExportConfigurationInstance
   *
   * @function update
   * @memberof Twilio.Preview.BulkExports.ExportConfigurationInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class ExportConfigurationContext {
  /**
   * @constructor Twilio.Preview.BulkExports.ExportConfigurationContext
   * @description Initialize the ExportConfigurationContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param resourceType - The resource_type
   */
  constructor(version: Twilio.Preview.BulkExports, resourceType: string);

  /**
   * fetch a ExportConfigurationInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.BulkExports.ExportConfigurationContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * update a ExportConfigurationInstance
   *
   * @function update
   * @memberof Twilio.Preview.BulkExports.ExportConfigurationContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { ExportConfigurationContext, ExportConfigurationInstance, ExportConfigurationList, ExportConfigurationListInstance, ExportConfigurationPage }
