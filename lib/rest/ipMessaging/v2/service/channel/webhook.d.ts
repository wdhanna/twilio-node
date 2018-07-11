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
 * @property "configuration.url" - The configuration.url
 * @property "configuration.method" - The configuration.method
 * @property "configuration.filters" - The configuration.filters
 * @property "configuration.triggers" - The configuration.triggers
 * @property "configuration.flowSid" - The configuration.flow_sid
 * @property "configuration.retryCount" - The configuration.retry_count
 */
export interface UpdateOptions {
  "configuration.filters"?: string|list;
  "configuration.flowSid"?: string;
  "configuration.method"?: webhook.method;
  "configuration.retryCount"?: number;
  "configuration.triggers"?: string|list;
  "configuration.url"?: string;
}

/**
 * Options to pass to update
 *
 * @property "configuration.url" - The configuration.url
 * @property "configuration.method" - The configuration.method
 * @property "configuration.filters" - The configuration.filters
 * @property "configuration.triggers" - The configuration.triggers
 * @property "configuration.flowSid" - The configuration.flow_sid
 * @property "configuration.retryCount" - The configuration.retry_count
 */
export interface UpdateOptions {
  "configuration.filters"?: string|list;
  "configuration.flowSid"?: string;
  "configuration.method"?: webhook.method;
  "configuration.retryCount"?: number;
  "configuration.triggers"?: string|list;
  "configuration.url"?: string;
}


declare class WebhookPage extends Page {
  /**
   * @constructor Twilio.IpMessaging.V2.ServiceContext.ChannelContext.WebhookPage
   * @augments Page
   * @description Initialize the WebhookPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.IpMessaging.V2, response: object, solution: object);

  /**
   * Build an instance of WebhookInstance
   *
   * @function getInstance
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.WebhookPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}

declare class WebhookInstance {
  /**
   * @constructor Twilio.IpMessaging.V2.ServiceContext.ChannelContext.WebhookInstance
   * @description Initialize the WebhookContext
   *
   * @property sid - The sid
   * @property accountSid - The account_sid
   * @property serviceSid - The service_sid
   * @property channelSid - The channel_sid
   * @property type - The type
   * @property url - The url
   * @property configuration - The configuration
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   * @param channelSid - The channel_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.IpMessaging.V2, payload: object, serviceSid: sid, channelSid: sid, sid: sid);

  _proxy?: WebhookContext;
  /**
   * fetch a WebhookInstance
   *
   * @function fetch
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.WebhookInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a WebhookInstance
   *
   * @function remove
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.WebhookInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the WebhookInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.WebhookInstance
   * @instance
   */
  toJSON();
  /**
   * update a WebhookInstance
   *
   * @function update
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.WebhookInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

declare class WebhookContext {
  /**
   * @constructor Twilio.IpMessaging.V2.ServiceContext.ChannelContext.WebhookContext
   * @description Initialize the WebhookContext
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param channelSid - The channel_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.IpMessaging.V2, serviceSid: sid, channelSid: sid_like, sid: sid);

  /**
   * fetch a WebhookInstance
   *
   * @function fetch
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.WebhookContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a WebhookInstance
   *
   * @function remove
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.WebhookContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a WebhookInstance
   *
   * @function update
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.WebhookContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { WebhookContext, WebhookInstance, WebhookList, WebhookPage }
