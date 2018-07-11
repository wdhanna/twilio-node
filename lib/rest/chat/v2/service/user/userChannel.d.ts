/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import deserialize = require('../../../../../base/deserialize');
import values = require('../../../../../base/values');



declare class UserChannelPage extends Page {
  /**
   * @constructor Twilio.Chat.V2.ServiceContext.UserContext.UserChannelPage
   * @augments Page
   * @description Initialize the UserChannelPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Chat.V2, response: object, solution: object);

  /**
   * Build an instance of UserChannelInstance
   *
   * @function getInstance
   * @memberof Twilio.Chat.V2.ServiceContext.UserContext.UserChannelPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}

declare class UserChannelInstance {
  /**
   * @constructor Twilio.Chat.V2.ServiceContext.UserContext.UserChannelInstance
   * @description Initialize the UserChannelContext
   *
   * @property accountSid - The unique id of the Account responsible for this channel.
   * @property serviceSid - The unique id of the Service this channel belongs to.
   * @property channelSid - The unique id of a Channel.
   * @property memberSid - The unique id of this User as a Member in this Channel.
   * @property status - The status of the User on this Channel.
   * @property lastConsumedMessageIndex - The index of the last read Message in this Channel for this User.
   * @property unreadMessagesCount - The count of unread Messages in this Channel for this User.
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The unique id of the Service this channel belongs to.
   * @param userSid - A 34 character string that uniquely identifies this resource.
   */
  constructor(version: Twilio.Chat.V2, payload: object, serviceSid: sid, userSid: sid);

  /**
   * Produce a plain JSON object version of the UserChannelInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Chat.V2.ServiceContext.UserContext.UserChannelInstance
   * @instance
   */
  toJSON();
}

export { UserChannelInstance, UserChannelList, UserChannelPage }
