/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import serialize = require('../../../base/serialize');
import { SerializableClass } from '../../../interfaces';

/**
 * @description Initialize the RecordingList
 *
 * @param version - Version of the resource
 */
declare function RecordingList(version: V1): RecordingListInstance;

interface RecordingResource {
  account_sid: string;
  codec: RecordingCodec;
  container_format: RecordingFormat;
  date_created: Date;
  duration: number;
  grouping_sids: string;
  links: string;
  sid: string;
  size: number;
  source_sid: string;
  status: RecordingStatus;
  track_name: string;
  type: RecordingType;
  url: string;
}

interface RecordingPayload extends RecordingResource, Page.TwilioResponsePayload {
}

interface RecordingSolution {
}

interface RecordingListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): RecordingContext;
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
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: RecordingListInstanceEachOptions, callback?: (item: RecordingInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a recording
   *
   * @param sid - The Recording Sid that uniquely identifies the Recording to fetch.
   */
  get(sid: string): RecordingContext;
  /**
   * Retrieve a single target page of RecordingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: RecordingPage) => any): Promise<RecordingPage>;
  /**
   * Lists RecordingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: RecordingListInstanceOptions, callback?: (error: Error | null, items: RecordingInstance[]) => any): Promise<RecordingInstance[]>;
  /**
   * Retrieve a single page of RecordingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: RecordingListInstancePageOptions, callback?: (error: Error | null, items: RecordingPage) => any): Promise<RecordingPage>;
}


declare class RecordingPage extends Page<V1, RecordingPayload, RecordingResource, RecordingInstance> {
  /**
   * Initialize the RecordingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: RecordingSolution);

  /**
   * Build an instance of RecordingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: RecordingPayload): RecordingInstance;
}


declare class RecordingInstance extends SerializableClass {
  /**
   * Initialize the RecordingContext
   *
   * @property accountSid - Twilio Account SID.
   * @property status - The status of the Recording.
   * @property dateCreated - Date when the media recording began writing.
   * @property sid - A 34-character string that uniquely identifies this Recording.
   * @property sourceSid - A 34-character string that uniquely identifies the source of this Recording.
   * @property size - Size of the recorded track, in bytes.
   * @property url - The absolute URL for this resource.
   * @property type - Indicates the media type for this recording.
   * @property duration - Duration of the Recording in seconds.
   * @property containerFormat - The file format for this Recording.
   * @property codec - The codec used to encode the track.
   * @property groupingSids - A list of Sids related to this Recording.
   * @property trackName - The name that was given to the source track of this recording.
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The Recording Sid that uniquely identifies the Recording to fetch.
   */
  constructor(version: V1, payload: RecordingPayload, sid: string);

  private _proxy: RecordingContext;
  accountSid: string;
  codec: recording.codec;
  containerFormat: recording.format;
  dateCreated: Date;
  duration: number;
  /**
   * fetch a RecordingInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: RecordingInstance) => any): void;
  groupingSids: string;
  links: string;
  /**
   * remove a RecordingInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: RecordingInstance) => any): void;
  sid: string;
  size: number;
  sourceSid: string;
  status: recording.status;
  trackName: string;
  type: recording.type;
  url: string;
}


declare class RecordingContext {
  /**
   * Initialize the RecordingContext
   *
   * @param version - Version of the resource
   * @param sid - The Recording Sid that uniquely identifies the Recording to fetch.
   */
  constructor(version: V1, sid: string);

  /**
   * fetch a RecordingInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: RecordingInstance) => any): void;
  /**
   * remove a RecordingInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: RecordingInstance) => any): void;
}

export { RecordingContext, RecordingInstance, RecordingList, RecordingListInstance, RecordingListInstanceEachOptions, RecordingListInstanceOptions, RecordingListInstancePageOptions, RecordingPage, RecordingPayload, RecordingResource, RecordingSolution }
