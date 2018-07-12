/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import V1 = require('../V1');
import deserialize = require('../../../base/deserialize');
import serialize = require('../../../base/serialize');
import values = require('../../../base/values');
import { ParticipantList } from './room/roomParticipant';
import { RoomRecordingList } from './room/recording';


/**
 * Options to pass to update
 *
 * @property status - Set to completed to end the Room.
 */
export interface UpdateOptions {
  status: room.room_status;
}

/**
 * Options to pass to update
 *
 * @property status - Set to completed to end the Room.
 */
export interface UpdateOptions {
  status: room.room_status;
}


declare class RoomPage extends Page {
  /**
   * @constructor Twilio.Video.V1.RoomPage
   * @augments Page
   * @description Initialize the RoomPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Video.V1, response: object, solution: object);

  /**
   * Build an instance of RoomInstance
   *
   * @function getInstance
   * @memberof Twilio.Video.V1.RoomPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}

declare class RoomInstance {
  /**
   * @constructor Twilio.Video.V1.RoomInstance
   * @description Initialize the RoomContext
   *
   * @property sid - A system-generated 34-character string that uniquely identifies this resource.
   * @property status - A string representing the status of the Room.
   * @property dateCreated - The date that this resource was created, given as a UTC ISO 8601 Timestamp.
   * @property dateUpdated - The date that this resource was last updated, given as a UTC ISO 8601 Timestamp.
   * @property accountSid - The unique ID of the Account associated with this Room.
   * @property enableTurn - Enable Twilio's Network Traversal TURN service.
   * @property uniqueName - A developer-supplied Name of the Room.
   * @property statusCallback - A URL that Twilio sends asynchronous webhook requests to on every Room event.
   * @property statusCallbackMethod - HTTP method Twilio should use when requesting the above URL.
   * @property endTime - The end time of the Room, given as a UTC ISO 8601 Timestamp.
   * @property duration - The duration of the Room in seconds.
   * @property type - Type of Room, either peer-to-peer or group.
   * @property maxParticipants - Maximum number of concurrent Participants allowed in the Room.
   * @property recordParticipantsOnConnect - Start recording when Participants connect.
   * @property videoCodecs - The video_codecs
   * @property mediaRegion - Region for the media server in Group Rooms.
   * @property url - The absolute URL for this resource.
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Twilio.Video.V1, payload: object, sid: sid_like);

  _proxy?: RoomContext;
  /**
   * fetch a RoomInstance
   *
   * @function fetch
   * @memberof Twilio.Video.V1.RoomInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the participants
   *
   * @function participants
   * @memberof Twilio.Video.V1.RoomInstance
   * @instance
   */
  participants();
  /**
   * Access the recordings
   *
   * @function recordings
   * @memberof Twilio.Video.V1.RoomInstance
   * @instance
   */
  recordings();
  /**
   * Produce a plain JSON object version of the RoomInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Video.V1.RoomInstance
   * @instance
   */
  toJSON();
  /**
   * update a RoomInstance
   *
   * @function update
   * @memberof Twilio.Video.V1.RoomInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}

declare class RoomContext {
  /**
   * @constructor Twilio.Video.V1.RoomContext
   * @description Initialize the RoomContext
   *
   * @property recordings - recordings resource
   * @property participants - participants resource
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.Video.V1, sid: sid_like);

  /**
   * fetch a RoomInstance
   *
   * @function fetch
   * @memberof Twilio.Video.V1.RoomContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  participants?: Twilio.Video.V1.RoomContext.ParticipantList;
  recordings?: Twilio.Video.V1.RoomContext.RoomRecordingList;
  /**
   * update a RoomInstance
   *
   * @function update
   * @memberof Twilio.Video.V1.RoomContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}

export { RoomContext, RoomInstance, RoomList, RoomPage }
