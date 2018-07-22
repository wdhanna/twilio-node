/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import serialize = require('../../../../base/serialize');
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the RoomRecordingList
 *
 * @param version - Version of the resource
 * @param roomSid - The room_sid
 */
declare function RoomRecordingList(version: V1, roomSid: string): RoomRecordingListInstance;

interface RoomRecordingResource {
  account_sid: string;
  codec: RoomRecordingCodec;
  container_format: RoomRecordingFormat;
  date_created: Date;
  duration: number;
  grouping_sids: string;
  links: string;
  room_sid: string;
  sid: string;
  size: number;
  source_sid: string;
  status: RoomRecordingStatus;
  track_name: string;
  type: RoomRecordingType;
  url: string;
}

interface RoomRecordingPayload extends RoomRecordingResource, Page.TwilioResponsePayload {
}

interface RoomRecordingSolution {
  roomSid?: string;
}

interface RoomRecordingListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): RoomRecordingContext;
  /**
   * Streams RoomRecordingInstance records from the API.
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
  each(opts?: RoomRecordingListInstanceEachOptions, callback?: (item: RoomRecordingInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a room_recording
   *
   * @param sid - The sid
   */
  get(sid: string): RoomRecordingContext;
  /**
   * Retrieve a single target page of RoomRecordingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: RoomRecordingPage) => any): Promise<RoomRecordingPage>;
  /**
   * Lists RoomRecordingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: RoomRecordingListInstanceOptions, callback?: (error: Error | null, items: RoomRecordingInstance[]) => any): Promise<RoomRecordingInstance[]>;
  /**
   * Retrieve a single page of RoomRecordingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: RoomRecordingListInstancePageOptions, callback?: (error: Error | null, items: RoomRecordingPage) => any): Promise<RoomRecordingPage>;
}


declare class RoomRecordingPage extends Page<V1, RoomRecordingPayload, RoomRecordingResource, RoomRecordingInstance> {
  /**
   * Initialize the RoomRecordingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: RoomRecordingSolution);

  /**
   * Build an instance of RoomRecordingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: RoomRecordingPayload): RoomRecordingInstance;
}


declare class RoomRecordingInstance extends SerializableClass {
  /**
   * Initialize the RoomRecordingContext
   *
   * @property accountSid - The account_sid
   * @property status - The status
   * @property dateCreated - The date_created
   * @property sid - The sid
   * @property sourceSid - The source_sid
   * @property size - The size
   * @property url - The url
   * @property type - The type
   * @property duration - The duration
   * @property containerFormat - The container_format
   * @property codec - The codec
   * @property groupingSids - The grouping_sids
   * @property trackName - The track_name
   * @property roomSid - The room_sid
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param roomSid - The room_sid
   * @param sid - The sid
   */
  constructor(version: V1, payload: RoomRecordingPayload, roomSid: string, sid: string);

  private _proxy: RoomRecordingContext;
  accountSid: string;
  codec: room_recording.codec;
  containerFormat: room_recording.format;
  dateCreated: Date;
  duration: number;
  /**
   * fetch a RoomRecordingInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: RoomRecordingInstance) => any): void;
  groupingSids: string;
  links: string;
  roomSid: string;
  sid: string;
  size: number;
  sourceSid: string;
  status: room_recording.status;
  trackName: string;
  type: room_recording.type;
  url: string;
}


declare class RoomRecordingContext {
  /**
   * Initialize the RoomRecordingContext
   *
   * @param version - Version of the resource
   * @param roomSid - The room_sid
   * @param sid - The sid
   */
  constructor(version: V1, roomSid: string, sid: string);

  /**
   * fetch a RoomRecordingInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: RoomRecordingInstance) => any): void;
}

export { RoomRecordingContext, RoomRecordingInstance, RoomRecordingList, RoomRecordingListInstance, RoomRecordingListInstanceEachOptions, RoomRecordingListInstanceOptions, RoomRecordingListInstancePageOptions, RoomRecordingPage, RoomRecordingPayload, RoomRecordingResource, RoomRecordingSolution }
