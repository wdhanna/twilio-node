/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../../base/Page');
import Response = require('../../../../../../http/response');
import V2010 = require('../../../../V2010');
import serialize = require('../../../../../../base/serialize');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../../interfaces';
import { SerializableClass } from '../../../../../../interfaces';

/**
 * @description Initialize the TodayList
 *
 * @param version - Version of the resource
 * @param accountSid - A 34 character string that uniquely identifies this resource.
 */
declare function TodayList(version: V2010, accountSid: string): TodayListInstance;

interface TodayResource {
  account_sid: string;
  api_version: string;
  category: TodayCategory;
  count: string;
  count_unit: string;
  description: string;
  end_date: Date;
  price: number;
  price_unit: string;
  start_date: Date;
  subresource_uris: string;
  uri: string;
  usage: string;
  usage_unit: string;
}

interface TodayPayload extends TodayResource, Page.TwilioResponsePayload {
}

interface TodaySolution {
  accountSid?: string;
}

interface TodayListInstance {
  /**
   * Streams TodayInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.TodayList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Retrieve a single target page of TodayInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.TodayList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists TodayInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.TodayList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of TodayInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.TodayList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  page(opts?: object, callback?: function);
}


declare class TodayPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.TodayPage
   * @augments Page
   * @description Initialize the TodayPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: Response<string>, solution: object);

  /**
   * Build an instance of TodayInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.TodayPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class TodayInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.TodayInstance
   * @description Initialize the TodayContext
   *
   * @property accountSid - The Account that accrued the usage.
   * @property apiVersion - The api_version
   * @property category - The category of usage.
   * @property count - The number of usage events.
   * @property countUnit - The units in which Count is measured.
   * @property description - A human-readable description of the usage category.
   * @property endDate - The last date for which usage is included in this UsageRecord, formatted as YYYY-MM-DD.
   * @property price - The total price of the usage, in the currency associated with the account.
   * @property priceUnit - The currency in which Price is measured, in ISO 4127 format.
   * @property startDate - The first date for which usage is included in this UsageRecord, formatted as YYYY-MM-DD.
   * @property subresourceUris - Subresource Uris for this UsageRecord.
   * @property uri - The URI that returns only this UsageRecord, relative to https://api.
   * @property usage - The amount of billed usage.
   * @property usageUnit - The units in which Usage is measured.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - A 34 character string that uniquely identifies this resource.
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid);

  /**
   * Produce a plain JSON object version of the TodayInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.TodayInstance
   * @instance
   */
  toJSON();
}

export { TodayInstance, TodayList, TodayListInstance, TodayPage, TodayPayload, TodayResource, TodaySolution }
