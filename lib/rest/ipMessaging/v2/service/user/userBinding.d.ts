/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2 = require('../../../V2');
import serialize = require('../../../../../base/serialize');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the UserBindingList
 *
 * @param version - Version of the resource
 * @param serviceSid - The unique id of the Service this binding belongs to.
 * @param userSid - The unique id of the User for this binding.
 */
declare function UserBindingList(version: V2, serviceSid: string, userSid: string): UserBindingListInstance;

interface UserBindingResource {
  account_sid: string;
  binding_type: UserBindingBindingType;
  credential_sid: string;
  date_created: Date;
  date_updated: Date;
  endpoint: string;
  identity: string;
  message_types: string;
  service_sid: string;
  sid: string;
  url: string;
  user_sid: string;
}

interface UserBindingPayload extends UserBindingResource, Page.TwilioResponsePayload {
}

interface UserBindingSolution {
  serviceSid?: string;
  userSid?: string;
}

interface UserBindingListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): UserBindingContext;
  /**
   * Streams UserBindingInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.IpMessaging.V2.ServiceContext.UserContext.UserBindingList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a user_binding
   *
   * @function get
   * @memberof Twilio.IpMessaging.V2.ServiceContext.UserContext.UserBindingList
   * @instance
   *
   * @param sid - The sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of UserBindingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.IpMessaging.V2.ServiceContext.UserContext.UserBindingList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists UserBindingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.IpMessaging.V2.ServiceContext.UserContext.UserBindingList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of UserBindingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.IpMessaging.V2.ServiceContext.UserContext.UserBindingList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  page(opts?: object, callback?: function);
}


declare class UserBindingPage extends Page {
  /**
   * @constructor Twilio.IpMessaging.V2.ServiceContext.UserContext.UserBindingPage
   * @augments Page
   * @description Initialize the UserBindingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.IpMessaging.V2, response: Response<string>, solution: object);

  /**
   * Build an instance of UserBindingInstance
   *
   * @function getInstance
   * @memberof Twilio.IpMessaging.V2.ServiceContext.UserContext.UserBindingPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class UserBindingInstance {
  /**
   * @constructor Twilio.IpMessaging.V2.ServiceContext.UserContext.UserBindingInstance
   * @description Initialize the UserBindingContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property accountSid - The unique id of the Account responsible for this binding.
   * @property serviceSid - The unique id of the Service this binding belongs to.
   * @property dateCreated - The date that this resource was created.
   * @property dateUpdated - The date that this resource was last updated.
   * @property endpoint - The unique endpoint identifier for this Binding.
   * @property identity - A unique string identifier for the Binding for this User in this Service.
   * @property userSid - The unique id of the User for this binding.
   * @property credentialSid - The unique id of the Credential for this binding.
   * @property bindingType - The push technology to use for this binding.
   * @property messageTypes - List of message types for this binding.
   * @property url - An absolute URL for this binding.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The unique id of the Service this binding belongs to.
   * @param userSid - The unique id of the User for this binding.
   * @param sid - The sid
   */
  constructor(version: Twilio.IpMessaging.V2, payload: object, serviceSid: sid, userSid: sid, sid: sid);

  _proxy?: UserBindingContext;
  /**
   * fetch a UserBindingInstance
   *
   * @function fetch
   * @memberof Twilio.IpMessaging.V2.ServiceContext.UserContext.UserBindingInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a UserBindingInstance
   *
   * @function remove
   * @memberof Twilio.IpMessaging.V2.ServiceContext.UserContext.UserBindingInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the UserBindingInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.IpMessaging.V2.ServiceContext.UserContext.UserBindingInstance
   * @instance
   */
  toJSON();
}


declare class UserBindingContext {
  /**
   * @constructor Twilio.IpMessaging.V2.ServiceContext.UserContext.UserBindingContext
   * @description Initialize the UserBindingContext
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param userSid - The user_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.IpMessaging.V2, serviceSid: sid, userSid: sid_like, sid: sid);

  /**
   * fetch a UserBindingInstance
   *
   * @function fetch
   * @memberof Twilio.IpMessaging.V2.ServiceContext.UserContext.UserBindingContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a UserBindingInstance
   *
   * @function remove
   * @memberof Twilio.IpMessaging.V2.ServiceContext.UserContext.UserBindingContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { UserBindingContext, UserBindingInstance, UserBindingList, UserBindingListInstance, UserBindingPage, UserBindingPayload, UserBindingResource, UserBindingSolution }