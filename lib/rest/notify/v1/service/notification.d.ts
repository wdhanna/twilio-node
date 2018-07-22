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
 * @description Initialize the NotificationList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - The service_sid
 */
declare function NotificationList(version: V1, serviceSid: string): NotificationListInstance;

interface NotificationResource {
  account_sid: string;
  action: string;
  alexa: string;
  apn: string;
  body: string;
  data: string;
  date_created: Date;
  facebook_messenger: string;
  fcm: string;
  gcm: string;
  identities: string;
  priority: NotificationPriority;
  segments: string;
  service_sid: string;
  sid: string;
  sms: string;
  sound: string;
  tags: string;
  title: string;
  ttl: number;
}

interface NotificationPayload extends NotificationResource, Page.TwilioResponsePayload {
}

interface NotificationSolution {
  serviceSid?: string;
}

interface NotificationListInstance {
  /**
   * create a NotificationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: NotificationListInstanceCreateOptions, callback?: (error: Error | null, items: NotificationListInstance) => any): Promise<NotificationInstance>;
}


declare class NotificationPage extends Page<V1, NotificationPayload, NotificationResource, NotificationInstance> {
  /**
   * Initialize the NotificationPagePLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: NotificationSolution);

  /**
   * Build an instance of NotificationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: NotificationPayload): NotificationInstance;
}


declare class NotificationInstance extends SerializableClass {
  /**
   * Initialize the NotificationContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - The sid
   * @property accountSid - The account_sid
   * @property serviceSid - The service_sid
   * @property dateCreated - The date_created
   * @property identities - List of Identities.
   * @property tags - List of Tags
   * @property segments - The segments
   * @property priority - Two priorities defined: low and high.
   * @property ttl - This parameter specifies how long the notification is valid.
   * @property title - Indicates the notification title.
   * @property body - Indicates the notification body text.
   * @property sound - Indicates a sound to be played.
   * @property action - Specifies the actions to be displayed for the notification.
   * @property data - This parameter specifies the custom key-value pairs of the notification's payload.
   * @property apn - APNS specific payload that overrides corresponding attributes in a generic payload for Bindings with the apn BindingType.
   * @property gcm - GCM specific payload that overrides corresponding attributes in generic payload for Bindings with gcm BindingType.
   * @property fcm - FCM specific payload that overrides corresponding attributes in generic payload for Bindings with fcm BindingType.
   * @property sms - SMS specific payload that overrides corresponding attributes in generic payload for Bindings with sms BindingType.
   * @property facebookMessenger - Messenger specific payload that overrides corresponding attributes in generic payload for Bindings with facebook-messenger BindingType.
   * @property alexa - The alexa
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   */
  constructor(version: V1, payload: NotificationPayload, serviceSid: string);

  accountSid: string;
  action: string;
  alexa: string;
  apn: string;
  body: string;
  data: string;
  dateCreated: Date;
  facebookMessenger: string;
  fcm: string;
  gcm: string;
  identities: string;
  priority: notification.priority;
  segments: string;
  serviceSid: string;
  sid: string;
  sms: string;
  sound: string;
  tags: string;
  title: string;
  ttl: number;
}

export { NotificationInstance, NotificationList, NotificationListInstance, NotificationListInstanceCreateOptions, NotificationPage, NotificationPayload, NotificationResource, NotificationSolution }
