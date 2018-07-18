/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import BulkExports = require('../../BulkExports');
import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the DayList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param resourceType - The resource_type
 */
declare function DayList(version: BulkExports, resourceType: string): DayListInstance;

interface DayResource {
  day?: string;
  redirect_to?: string;
  resource_type?: string;
  size?: number;
}

interface DayPayload extends DayResource, Page.TwilioResponsePayload {
}

interface DaySolution {
  resourceType?: string;
}

interface DayListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): DayContext;
  /**
   * Streams DayInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Preview.BulkExports.ExportContext.DayList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Retrieve a single target page of DayInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Preview.BulkExports.ExportContext.DayList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists DayInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Preview.BulkExports.ExportContext.DayList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of DayInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Preview.BulkExports.ExportContext.DayList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  page(opts?: object, callback?: function);
}


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
  constructor(version: Twilio.Preview.BulkExports, response: Response<string>, solution: object);

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

export { DayInstance, DayList, DayListInstance, DayPage, DayPayload, DayResource, DaySolution }