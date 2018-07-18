/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import serialize = require('../../../../../base/serialize');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the RecordingList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique sid that identifies this account
 * @param callSid - The unique id for the call leg that corresponds to the recording.
 */
declare function RecordingList(version: V2010, accountSid: string, callSid: string): RecordingListInstance;

interface RecordingResource {
  account_sid: string;
  api_version: string;
  call_sid: string;
  channels: number;
  conference_sid: string;
  date_created: Date;
  date_updated: Date;
  duration: string;
  encryption_details: string;
  error_code: number;
  price: number;
  price_unit: string;
  sid: string;
  source: RecordingSource;
  start_time: Date;
  status: RecordingStatus;
  uri: string;
}

interface RecordingPayload extends RecordingResource, Page.TwilioResponsePayload {
}

interface RecordingSolution {
  accountSid?: string;
  callSid?: string;
}

interface RecordingListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): RecordingContext;
  /**
   * create a RecordingInstance
   *
   * @function create
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.RecordingList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  create(opts?: object, callback?: function);
  /**
   * Streams RecordingInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.RecordingList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a recording
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.RecordingList
   * @instance
   *
   * @param sid - Fetch by unique recording Sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of RecordingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.RecordingList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists RecordingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.RecordingList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of RecordingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.RecordingList
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
 * @property status - The status to change the recording to.
 */
export interface UpdateOptions {
  status: recording.status;
}

/**
 * Options to pass to update
 *
 * @property status - The status to change the recording to.
 */
export interface UpdateOptions {
  status: recording.status;
}


declare class RecordingPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.CallContext.RecordingPage
   * @augments Page
   * @description Initialize the RecordingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: Response<string>, solution: object);

  /**
   * Build an instance of RecordingInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.RecordingPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class RecordingInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.CallContext.RecordingInstance
   * @description Initialize the RecordingContext
   *
   * @property accountSid - The unique sid that identifies this account
   * @property apiVersion - The version of the API in use during the recording.
   * @property callSid - The unique id for the call leg that corresponds to the recording.
   * @property conferenceSid - The unique id for the conference associated with the recording, if a conference recording.
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property startTime - The start time of the recording, given in RFC 2822 format.
   * @property duration - The length of the recording, in seconds.
   * @property sid - A string that uniquely identifies this recording
   * @property price - The one-time cost of creating this recording.
   * @property uri - The URI for this resource
   * @property encryptionDetails - Details for how to decrypt the recording.
   * @property priceUnit - The currency used in the Price property.
   * @property status - The status of the recording.
   * @property channels - The number of channels in the final recording file as an integer.
   * @property source - The way in which this recording was created.
   * @property errorCode - More information about the recording failure, if Status is failed.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique sid that identifies this account
   * @param callSid - The unique id for the call leg that corresponds to the recording.
   * @param sid - Fetch by unique recording Sid
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, callSid: sid, sid: sid);

  _proxy?: RecordingContext;
  /**
   * fetch a RecordingInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.RecordingInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a RecordingInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.RecordingInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the RecordingInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.RecordingInstance
   * @instance
   */
  toJSON();
  /**
   * update a RecordingInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.RecordingInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}


declare class RecordingContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.CallContext.RecordingContext
   * @description Initialize the RecordingContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param callSid - Fetch by unique call Sid for the recording
   * @param sid - Fetch by unique recording Sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, callSid: sid, sid: sid);

  /**
   * fetch a RecordingInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.RecordingContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a RecordingInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.RecordingContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a RecordingInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.RecordingContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}

export { RecordingContext, RecordingInstance, RecordingList, RecordingListInstance, RecordingPage, RecordingPayload, RecordingResource, RecordingSolution }