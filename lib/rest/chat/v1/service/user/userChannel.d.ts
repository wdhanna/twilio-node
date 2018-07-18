/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the UserChannelList
 *
 * @param version - Version of the resource
 * @param serviceSid - The service_sid
 * @param userSid - A 34 character string that uniquely identifies this resource.
 */
declare function UserChannelList(version: V1, serviceSid: string, userSid: string): UserChannelListInstance;

interface UserChannelResource {
  account_sid: string;
  channel_sid: string;
  last_consumed_message_index: number;
  links: string;
  member_sid: string;
  service_sid: string;
  status: UserChannelChannelStatus;
  unread_messages_count: number;
}

interface UserChannelPayload extends UserChannelResource, Page.TwilioResponsePayload {
}

interface UserChannelSolution {
  serviceSid?: string;
  userSid?: string;
}

interface UserChannelListInstance {
  /**
   * Streams UserChannelInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Chat.V1.ServiceContext.UserContext.UserChannelList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Retrieve a single target page of UserChannelInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Chat.V1.ServiceContext.UserContext.UserChannelList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists UserChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Chat.V1.ServiceContext.UserContext.UserChannelList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of UserChannelInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Chat.V1.ServiceContext.UserContext.UserChannelList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  page(opts?: object, callback?: function);
}


declare class UserChannelPage extends Page {
  /**
   * @constructor Twilio.Chat.V1.ServiceContext.UserContext.UserChannelPage
   * @augments Page
   * @description Initialize the UserChannelPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Chat.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of UserChannelInstance
   *
   * @function getInstance
   * @memberof Twilio.Chat.V1.ServiceContext.UserContext.UserChannelPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class UserChannelInstance {
  /**
   * @constructor Twilio.Chat.V1.ServiceContext.UserContext.UserChannelInstance
   * @description Initialize the UserChannelContext
   *
   * @property accountSid - The account_sid
   * @property serviceSid - The service_sid
   * @property channelSid - The channel_sid
   * @property memberSid - The member_sid
   * @property status - The status
   * @property lastConsumedMessageIndex - The last_consumed_message_index
   * @property unreadMessagesCount - The unread_messages_count
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   * @param userSid - A 34 character string that uniquely identifies this resource.
   */
  constructor(version: Twilio.Chat.V1, payload: object, serviceSid: sid, userSid: sid);

  /**
   * Produce a plain JSON object version of the UserChannelInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Chat.V1.ServiceContext.UserContext.UserChannelInstance
   * @instance
   */
  toJSON();
}

export { UserChannelInstance, UserChannelList, UserChannelListInstance, UserChannelPage, UserChannelPayload, UserChannelResource, UserChannelSolution }
