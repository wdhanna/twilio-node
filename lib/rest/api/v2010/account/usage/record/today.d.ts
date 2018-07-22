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
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: TodayListInstanceEachOptions, callback?: (item: TodayInstance, done: (err?: Error) => void) => void): void;
  /**
   * Retrieve a single target page of TodayInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: TodayPage) => any): Promise<TodayPage>;
  /**
   * Lists TodayInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: TodayListInstanceOptions, callback?: (error: Error | null, items: TodayInstance[]) => any): Promise<TodayInstance[]>;
  /**
   * Retrieve a single page of TodayInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: TodayListInstancePageOptions, callback?: (error: Error | null, items: TodayPage) => any): Promise<TodayPage>;
}


declare class TodayPage extends Page<V2010, TodayPayload, TodayResource, TodayInstance> {
  /**
   * Initialize the TodayPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: TodaySolution);

  /**
   * Build an instance of TodayInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: TodayPayload): TodayInstance;
}


declare class TodayInstance extends SerializableClass {
  /**
   * Initialize the TodayContext
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
  constructor(version: V2010, payload: TodayPayload, accountSid: string);

  accountSid: string;
  apiVersion: string;
  category: today.category;
  count: string;
  countUnit: string;
  description: string;
  endDate: Date;
  price: number;
  priceUnit: string;
  startDate: Date;
  subresourceUris: string;
  uri: string;
  usage: string;
  usageUnit: string;
}

export { TodayInstance, TodayList, TodayListInstance, TodayListInstanceEachOptions, TodayListInstanceOptions, TodayListInstancePageOptions, TodayPage, TodayPayload, TodayResource, TodaySolution }
