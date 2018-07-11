/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import deserialize = require('../../../../../base/deserialize');
import serialize = require('../../../../../base/serialize');
import values = require('../../../../../base/values');


/**
 * Options to pass to update
 *
 * @property roleSid - The role to be assigned to this member.
 * @property lastConsumedMessageIndex - Field used to specify the last consumed Message index for the Channel for this Member.
 * @property lastConsumptionTimestamp - ISO8601 time indicating the last datetime the Member consumed a Message in the Channel.
 * @property dateCreated - The ISO8601 time specifying the datetime the Members should be set as being created.
 * @property dateUpdated - The ISO8601 time specifying the datetime the Member should be set as having been last updated.
 */
export interface UpdateOptions {
  dateCreated?: Date;
  dateUpdated?: Date;
  lastConsumedMessageIndex?: number;
  lastConsumptionTimestamp?: Date;
  roleSid?: string;
}

/**
 * Options to pass to update
 *
 * @property roleSid - The role to be assigned to this member.
 * @property lastConsumedMessageIndex - Field used to specify the last consumed Message index for the Channel for this Member.
 * @property lastConsumptionTimestamp - ISO8601 time indicating the last datetime the Member consumed a Message in the Channel.
 * @property dateCreated - The ISO8601 time specifying the datetime the Members should be set as being created.
 * @property dateUpdated - The ISO8601 time specifying the datetime the Member should be set as having been last updated.
 */
export interface UpdateOptions {
  dateCreated?: Date;
  dateUpdated?: Date;
  lastConsumedMessageIndex?: number;
  lastConsumptionTimestamp?: Date;
  roleSid?: string;
}


declare class MemberPage extends Page {
  /**
   * @constructor Twilio.Chat.V2.ServiceContext.ChannelContext.MemberPage
   * @augments Page
   * @description Initialize the MemberPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Chat.V2, response: object, solution: object);

  /**
   * Build an instance of MemberInstance
   *
   * @function getInstance
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelContext.MemberPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}

declare class MemberInstance {
  /**
   * @constructor Twilio.Chat.V2.ServiceContext.ChannelContext.MemberInstance
   * @description Initialize the MemberContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property accountSid - The unique id of the Account responsible for this member.
   * @property channelSid - The unique id of the Channel for this member.
   * @property serviceSid - The unique id of the Service this member belongs to.
   * @property identity - A unique string identifier for this User in this Service.
   * @property dateCreated - The date that this resource was created.
   * @property dateUpdated - The date that this resource was last updated.
   * @property roleSid - The Role assigned to this member.
   * @property lastConsumedMessageIndex - An Integer representing index of the last Message this Member has read within this Channel
   * @property lastConsumptionTimestamp - An ISO8601 based timestamp string representing the datetime of the last Message read event for this Member within this Channel
   * @property url - An absolute URL for this member.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The unique id of the Service this member belongs to.
   * @param channelSid - The unique id of the Channel for this member.
   * @param sid - The sid
   */
  constructor(version: Twilio.Chat.V2, payload: object, serviceSid: sid, channelSid: sid, sid: sid_like);

  _proxy?: MemberContext;
  /**
   * fetch a MemberInstance
   *
   * @function fetch
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelContext.MemberInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a MemberInstance
   *
   * @function remove
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelContext.MemberInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the MemberInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelContext.MemberInstance
   * @instance
   */
  toJSON();
  /**
   * update a MemberInstance
   *
   * @function update
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelContext.MemberInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

declare class MemberContext {
  /**
   * @constructor Twilio.Chat.V2.ServiceContext.ChannelContext.MemberContext
   * @description Initialize the MemberContext
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param channelSid - The channel_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Chat.V2, serviceSid: sid, channelSid: sid_like, sid: sid_like);

  /**
   * fetch a MemberInstance
   *
   * @function fetch
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelContext.MemberContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a MemberInstance
   *
   * @function remove
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelContext.MemberContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a MemberInstance
   *
   * @function update
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelContext.MemberContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { MemberContext, MemberInstance, MemberList, MemberPage }
