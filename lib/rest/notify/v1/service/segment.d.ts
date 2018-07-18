/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the SegmentList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - The service_sid
 */
declare function SegmentList(version: V1, serviceSid: string): SegmentListInstance;

interface SegmentResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  service_sid: string;
  sid: string;
  unique_name: string;
}

interface SegmentPayload extends SegmentResource, Page.TwilioResponsePayload {
}

interface SegmentSolution {
  serviceSid?: string;
}

interface SegmentListInstance {
  /**
   * Streams SegmentInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Notify.V1.ServiceContext.SegmentList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Retrieve a single target page of SegmentInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Notify.V1.ServiceContext.SegmentList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists SegmentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Notify.V1.ServiceContext.SegmentList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of SegmentInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Notify.V1.ServiceContext.SegmentList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  page(opts?: object, callback?: function);
}


declare class SegmentPage extends Page {
  /**
   * @constructor Twilio.Notify.V1.ServiceContext.SegmentPage
   * @augments Page
   * @description Initialize the SegmentPage
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Notify.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of SegmentInstance
   *
   * @function getInstance
   * @memberof Twilio.Notify.V1.ServiceContext.SegmentPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class SegmentInstance {
  /**
   * @constructor Twilio.Notify.V1.ServiceContext.SegmentInstance
   * @description Initialize the SegmentContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - The sid
   * @property accountSid - The account_sid
   * @property serviceSid - The service_sid
   * @property uniqueName - The unique_name
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   */
  constructor(version: Twilio.Notify.V1, payload: object, serviceSid: sid);

  /**
   * Produce a plain JSON object version of the SegmentInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Notify.V1.ServiceContext.SegmentInstance
   * @instance
   */
  toJSON();
}

export { SegmentInstance, SegmentList, SegmentListInstance, SegmentPage, SegmentPayload, SegmentResource, SegmentSolution }
