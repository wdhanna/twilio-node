/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import deserialize = require('../../../../base/deserialize');
import serialize = require('../../../../base/serialize');
import values = require('../../../../base/values');
import { PublishedTrackList } from './roomParticipant/roomParticipantPublishedTrack';
import { SubscribedTrackList } from './roomParticipant/roomParticipantSubscribedTrack';


/**
 * Options to pass to update
 *
 * @property status - Set to disconnected to remove participant.
 */
export interface UpdateOptions {
  status?: participant.status;
}

/**
 * Options to pass to update
 *
 * @property status - Set to disconnected to remove participant.
 */
export interface UpdateOptions {
  status?: participant.status;
}


declare class ParticipantPage extends Page {
  /**
   * @constructor Twilio.Video.V1.RoomContext.ParticipantPage
   * @augments Page
   * @description Initialize the ParticipantPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Video.V1, response: object, solution: object);

  /**
   * Build an instance of ParticipantInstance
   *
   * @function getInstance
   * @memberof Twilio.Video.V1.RoomContext.ParticipantPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}

declare class ParticipantInstance {
  /**
   * @constructor Twilio.Video.V1.RoomContext.ParticipantInstance
   * @description Initialize the ParticipantContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property roomSid - A system-generated 34-character string that uniquely identifies.
   * @property accountSid - The unique ID of the Account associated with this Room.
   * @property status - A string representing the status of the Participant.
   * @property identity - The unique name identifier that is assigned to this Participant.
   * @property dateCreated - The date that this resource was created, given as a UTC ISO 8601 Timestamp.
   * @property dateUpdated - The date that this resource was last updated, given as a UTC ISO 8601 Timestamp.
   * @property startTime - The time of Participant connected to the Room, given as a UTC ISO 8601 Timestamp.
   * @property endTime - The time of Participant disconnected from the Room, given as a UTC ISO 8601 Timestamp.
   * @property duration - Duration of time in seconds this Participant was connected.
   * @property url - The absolute URL for this resource.
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param roomSid - A system-generated 34-character string that uniquely identifies.
   * @param sid - The sid
   */
  constructor(version: Twilio.Video.V1, payload: object, roomSid: sid, sid: sid_like);

  _proxy?: ParticipantContext;
  /**
   * fetch a ParticipantInstance
   *
   * @function fetch
   * @memberof Twilio.Video.V1.RoomContext.ParticipantInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the publishedTracks
   *
   * @function publishedTracks
   * @memberof Twilio.Video.V1.RoomContext.ParticipantInstance
   * @instance
   */
  publishedTracks();
  /**
   * Access the subscribedTracks
   *
   * @function subscribedTracks
   * @memberof Twilio.Video.V1.RoomContext.ParticipantInstance
   * @instance
   */
  subscribedTracks();
  /**
   * Produce a plain JSON object version of the ParticipantInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Video.V1.RoomContext.ParticipantInstance
   * @instance
   */
  toJSON();
  /**
   * update a ParticipantInstance
   *
   * @function update
   * @memberof Twilio.Video.V1.RoomContext.ParticipantInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

declare class ParticipantContext {
  /**
   * @constructor Twilio.Video.V1.RoomContext.ParticipantContext
   * @description Initialize the ParticipantContext
   *
   * @property publishedTracks - publishedTracks resource
   * @property subscribedTracks - subscribedTracks resource
   *
   * @param version - Version of the resource
   * @param roomSid - The room_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Video.V1, roomSid: sid_like, sid: sid_like);

  /**
   * fetch a ParticipantInstance
   *
   * @function fetch
   * @memberof Twilio.Video.V1.RoomContext.ParticipantContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  publishedTracks?: Twilio.Video.V1.RoomContext.ParticipantContext.PublishedTrackList;
  subscribedTracks?: Twilio.Video.V1.RoomContext.ParticipantContext.SubscribedTrackList;
  /**
   * update a ParticipantInstance
   *
   * @function update
   * @memberof Twilio.Video.V1.RoomContext.ParticipantContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { ParticipantContext, ParticipantInstance, ParticipantList, ParticipantPage }
