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
import { BindingList } from './service/binding';
import { ListEachOptions, ListOptions, PageOptions } from '../../../interfaces';
import { NotificationList } from './service/notification';
import { SegmentList } from './service/segment';
import { SerializableClass } from '../../../interfaces';
import { UserList } from './service/user';

/**
 * @description Initialize the ServiceList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 */
declare function ServiceList(version: V1): ServiceListInstance;

interface ServiceResource {
  account_sid: string;
  alexa_skill_id: string;
  apn_credential_sid: string;
  date_created: Date;
  date_updated: Date;
  default_alexa_notification_protocol_version: string;
  default_apn_notification_protocol_version: string;
  default_fcm_notification_protocol_version: string;
  default_gcm_notification_protocol_version: string;
  facebook_messenger_page_id: string;
  fcm_credential_sid: string;
  friendly_name: string;
  gcm_credential_sid: string;
  links: string;
  log_enabled: boolean;
  messaging_service_sid: string;
  sid: string;
  url: string;
}

interface ServicePayload extends ServiceResource, Page.TwilioResponsePayload {
}

interface ServiceSolution {
}

interface ServiceListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ServiceContext;
  /**
   * create a ServiceInstance
   *
   * @function create
   * @memberof Twilio.Notify.V1.ServiceList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  create(opts?: object, callback?: function);
  /**
   * Streams ServiceInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Notify.V1.ServiceList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a service
   *
   * @function get
   * @memberof Twilio.Notify.V1.ServiceList
   * @instance
   *
   * @param sid - The sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Notify.V1.ServiceList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Notify.V1.ServiceList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Notify.V1.ServiceList
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
 * @property friendlyName - Human-readable name for this service instance
 * @property apnCredentialSid - The SID of the default Credential to be used for APN Bindings
 * @property gcmCredentialSid - The SID of the default Credential to be used for GCM Bindings
 * @property messagingServiceSid - The SID of the Messaging Service to be used for SMS Bindings.
 * @property facebookMessengerPageId - The Page ID to be used to send for Facebook Messenger Bindings.
 * @property defaultApnNotificationProtocolVersion - The version of the protocol to be used for sending APNS notifications.
 * @property defaultGcmNotificationProtocolVersion - The version of the protocol to be used for sending GCM notifications.
 * @property fcmCredentialSid - The SID of the default Credential to be used for FCM Bindings
 * @property defaultFcmNotificationProtocolVersion - The version of the protocol to be used for sending FCM notifications.
 * @property logEnabled - The log_enabled
 * @property alexaSkillId - The alexa_skill_id
 * @property defaultAlexaNotificationProtocolVersion - The default_alexa_notification_protocol_version
 */
export interface UpdateOptions {
  alexaSkillId?: string;
  apnCredentialSid?: string;
  defaultAlexaNotificationProtocolVersion?: string;
  defaultApnNotificationProtocolVersion?: string;
  defaultFcmNotificationProtocolVersion?: string;
  defaultGcmNotificationProtocolVersion?: string;
  facebookMessengerPageId?: string;
  fcmCredentialSid?: string;
  friendlyName?: string;
  gcmCredentialSid?: string;
  logEnabled?: boolean;
  messagingServiceSid?: string;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - Human-readable name for this service instance
 * @property apnCredentialSid - The SID of the default Credential to be used for APN Bindings
 * @property gcmCredentialSid - The SID of the default Credential to be used for GCM Bindings
 * @property messagingServiceSid - The SID of the Messaging Service to be used for SMS Bindings.
 * @property facebookMessengerPageId - The Page ID to be used to send for Facebook Messenger Bindings.
 * @property defaultApnNotificationProtocolVersion - The version of the protocol to be used for sending APNS notifications.
 * @property defaultGcmNotificationProtocolVersion - The version of the protocol to be used for sending GCM notifications.
 * @property fcmCredentialSid - The SID of the default Credential to be used for FCM Bindings
 * @property defaultFcmNotificationProtocolVersion - The version of the protocol to be used for sending FCM notifications.
 * @property logEnabled - The log_enabled
 * @property alexaSkillId - The alexa_skill_id
 * @property defaultAlexaNotificationProtocolVersion - The default_alexa_notification_protocol_version
 */
export interface UpdateOptions {
  alexaSkillId?: string;
  apnCredentialSid?: string;
  defaultAlexaNotificationProtocolVersion?: string;
  defaultApnNotificationProtocolVersion?: string;
  defaultFcmNotificationProtocolVersion?: string;
  defaultGcmNotificationProtocolVersion?: string;
  facebookMessengerPageId?: string;
  fcmCredentialSid?: string;
  friendlyName?: string;
  gcmCredentialSid?: string;
  logEnabled?: boolean;
  messagingServiceSid?: string;
}


declare class ServicePage extends Page {
  /**
   * @constructor Twilio.Notify.V1.ServicePage
   * @augments Page
   * @description Initialize the ServicePage
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Notify.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of ServiceInstance
   *
   * @function getInstance
   * @memberof Twilio.Notify.V1.ServicePage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class ServiceInstance {
  /**
   * @constructor Twilio.Notify.V1.ServiceInstance
   * @description Initialize the ServiceContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - The sid
   * @property accountSid - The account_sid
   * @property friendlyName - Human-readable name for this service instance
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property apnCredentialSid - The SID of the Credential to be used for APN Bindings.
   * @property gcmCredentialSid - The SID of the Credential to be used for GCM Bindings.
   * @property fcmCredentialSid - The SID of the Credential to be used for FCM Bindings.
   * @property messagingServiceSid - The SID of the Messaging Service to be used for SMS Bindings.
   * @property facebookMessengerPageId - The Page ID to be used to send for Facebook Messenger Bindings.
   * @property defaultApnNotificationProtocolVersion - The version of the protocol to be used for sending APNS notifications.
   * @property defaultGcmNotificationProtocolVersion - The version of the protocol to be used for sending GCM notifications.
   * @property defaultFcmNotificationProtocolVersion - The version of the protocol to be used for sending FCM notifications.
   * @property logEnabled - The log_enabled
   * @property url - The url
   * @property links - The links
   * @property alexaSkillId - The alexa_skill_id
   * @property defaultAlexaNotificationProtocolVersion - The default_alexa_notification_protocol_version
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Twilio.Notify.V1, payload: object, sid: sid);

  _proxy?: ServiceContext;
  /**
   * Access the bindings
   *
   * @function bindings
   * @memberof Twilio.Notify.V1.ServiceInstance
   * @instance
   */
  bindings();
  /**
   * fetch a ServiceInstance
   *
   * @function fetch
   * @memberof Twilio.Notify.V1.ServiceInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the notifications
   *
   * @function notifications
   * @memberof Twilio.Notify.V1.ServiceInstance
   * @instance
   */
  notifications();
  /**
   * remove a ServiceInstance
   *
   * @function remove
   * @memberof Twilio.Notify.V1.ServiceInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Access the segments
   *
   * @function segments
   * @memberof Twilio.Notify.V1.ServiceInstance
   * @instance
   */
  segments();
  /**
   * Produce a plain JSON object version of the ServiceInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Notify.V1.ServiceInstance
   * @instance
   */
  toJSON();
  /**
   * update a ServiceInstance
   *
   * @function update
   * @memberof Twilio.Notify.V1.ServiceInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
  /**
   * Access the users
   *
   * @function users
   * @memberof Twilio.Notify.V1.ServiceInstance
   * @instance
   */
  users();
}


declare class ServiceContext {
  /**
   * @constructor Twilio.Notify.V1.ServiceContext
   * @description Initialize the ServiceContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property bindings - bindings resource
   * @property notifications - notifications resource
   * @property users - users resource
   * @property segments - segments resource
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.Notify.V1, sid: sid);

  bindings?: Twilio.Notify.V1.ServiceContext.BindingList;
  /**
   * fetch a ServiceInstance
   *
   * @function fetch
   * @memberof Twilio.Notify.V1.ServiceContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  notifications?: Twilio.Notify.V1.ServiceContext.NotificationList;
  /**
   * remove a ServiceInstance
   *
   * @function remove
   * @memberof Twilio.Notify.V1.ServiceContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  segments?: Twilio.Notify.V1.ServiceContext.SegmentList;
  /**
   * update a ServiceInstance
   *
   * @function update
   * @memberof Twilio.Notify.V1.ServiceContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
  users?: Twilio.Notify.V1.ServiceContext.UserList;
}

export { ServiceContext, ServiceInstance, ServiceList, ServiceListInstance, ServicePage, ServicePayload, ServiceResource, ServiceSolution }