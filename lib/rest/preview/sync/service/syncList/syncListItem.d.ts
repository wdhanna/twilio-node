/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import Sync = require('../../../Sync');
import serialize = require('../../../../../base/serialize');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the SyncListItemList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param serviceSid - The service_sid
 * @param listSid - The list_sid
 */
declare function SyncListItemList(version: Sync, serviceSid: string, listSid: string): SyncListItemListInstance;

interface SyncListItemResource {
  account_sid: string;
  created_by: string;
  data: string;
  date_created: Date;
  date_updated: Date;
  index: number;
  list_sid: string;
  revision: string;
  service_sid: string;
  url: string;
}

interface SyncListItemPayload extends SyncListItemResource, Page.TwilioResponsePayload {
}

interface SyncListItemSolution {
  listSid?: string;
  serviceSid?: string;
}

interface SyncListItemListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): SyncListItemContext;
  /**
   * create a SyncListItemInstance
   *
   * @function create
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  create(opts: object, callback?: function);
  /**
   * Streams SyncListItemInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a sync_list_item
   *
   * @function get
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemList
   * @instance
   *
   * @param index - The index
   */
  get(index: string);
  /**
   * Retrieve a single target page of SyncListItemInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists SyncListItemInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of SyncListItemInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  page(opts?: object, callback?: function);
}

/**
 * Options to pass to update
 *
 * @property data - The data
 */
export interface UpdateOptions {
  data: string;
}

/**
 * Options to pass to update
 *
 * @property data - The data
 */
export interface UpdateOptions {
  data: string;
}


declare class SyncListItemPage extends Page {
  /**
   * @constructor Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemPage
   * @augments Page
   * @description Initialize the SyncListItemPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Sync, response: Response<string>, solution: object);

  /**
   * Build an instance of SyncListItemInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class SyncListItemInstance {
  /**
   * @constructor Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemInstance
   * @description Initialize the SyncListItemContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property index - The index
   * @property accountSid - The account_sid
   * @property serviceSid - The service_sid
   * @property listSid - The list_sid
   * @property url - The url
   * @property revision - The revision
   * @property data - The data
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property createdBy - The created_by
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   * @param listSid - The list_sid
   * @param index - The index
   */
  constructor(version: Twilio.Preview.Sync, payload: object, serviceSid: sid, listSid: sid, index: integer);

  _proxy?: SyncListItemContext;
  /**
   * fetch a SyncListItemInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a SyncListItemInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the SyncListItemInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemInstance
   * @instance
   */
  toJSON();
  /**
   * update a SyncListItemInstance
   *
   * @function update
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}


declare class SyncListItemContext {
  /**
   * @constructor Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemContext
   * @description Initialize the SyncListItemContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param listSid - The list_sid
   * @param index - The index
   */
  constructor(version: Twilio.Preview.Sync, serviceSid: sid, listSid: sid_like, index: integer);

  /**
   * fetch a SyncListItemInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a SyncListItemInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a SyncListItemInstance
   *
   * @function update
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}

export { SyncListItemContext, SyncListItemInstance, SyncListItemList, SyncListItemListInstance, SyncListItemPage, SyncListItemPayload, SyncListItemResource, SyncListItemSolution }