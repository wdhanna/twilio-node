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
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the BindingList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - The service_sid
 */
declare function BindingList(version: V1, serviceSid: string): BindingListInstance;

interface BindingResource {
  account_sid: string;
  address: string;
  binding_type: string;
  credential_sid: string;
  date_created: Date;
  date_updated: Date;
  endpoint: string;
  identity: string;
  links: string;
  notification_protocol_version: string;
  service_sid: string;
  sid: string;
  tags: string;
  url: string;
}

interface BindingPayload extends BindingResource, Page.TwilioResponsePayload {
}

interface BindingSolution {
  serviceSid?: string;
}

interface BindingListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): BindingContext;
  /**
   * create a BindingInstance
   *
   * @function create
   * @memberof Twilio.Notify.V1.ServiceContext.BindingList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  create(opts: object, callback?: function);
  /**
   * Streams BindingInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Notify.V1.ServiceContext.BindingList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a binding
   *
   * @function get
   * @memberof Twilio.Notify.V1.ServiceContext.BindingList
   * @instance
   *
   * @param sid - The sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of BindingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Notify.V1.ServiceContext.BindingList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists BindingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Notify.V1.ServiceContext.BindingList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of BindingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Notify.V1.ServiceContext.BindingList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  page(opts?: object, callback?: function);
}


declare class BindingPage extends Page {
  /**
   * @constructor Twilio.Notify.V1.ServiceContext.BindingPage
   * @augments Page
   * @description Initialize the BindingPage
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Notify.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of BindingInstance
   *
   * @function getInstance
   * @memberof Twilio.Notify.V1.ServiceContext.BindingPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class BindingInstance {
  /**
   * @constructor Twilio.Notify.V1.ServiceContext.BindingInstance
   * @description Initialize the BindingContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - The sid
   * @property accountSid - The account_sid
   * @property serviceSid - The service_sid
   * @property credentialSid - The unique identifier of the Credential resource to be used to send notifications to this Binding.
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property notificationProtocolVersion - The version of the protocol used to send the notification.
   * @property endpoint - DEPRECATED*
   * @property identity - The Identity to which this Binding belongs to.
   * @property bindingType - The type of the Binding.
   * @property address - The address specific to the channel.
   * @property tags - The list of tags associated with this Binding.
   * @property url - The url
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Notify.V1, payload: object, serviceSid: sid, sid: sid);

  _proxy?: BindingContext;
  /**
   * fetch a BindingInstance
   *
   * @function fetch
   * @memberof Twilio.Notify.V1.ServiceContext.BindingInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a BindingInstance
   *
   * @function remove
   * @memberof Twilio.Notify.V1.ServiceContext.BindingInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the BindingInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Notify.V1.ServiceContext.BindingInstance
   * @instance
   */
  toJSON();
}


declare class BindingContext {
  /**
   * @constructor Twilio.Notify.V1.ServiceContext.BindingContext
   * @description Initialize the BindingContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Notify.V1, serviceSid: sid, sid: sid);

  /**
   * fetch a BindingInstance
   *
   * @function fetch
   * @memberof Twilio.Notify.V1.ServiceContext.BindingContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a BindingInstance
   *
   * @function remove
   * @memberof Twilio.Notify.V1.ServiceContext.BindingContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { BindingContext, BindingInstance, BindingList, BindingListInstance, BindingPage, BindingPayload, BindingResource, BindingSolution }