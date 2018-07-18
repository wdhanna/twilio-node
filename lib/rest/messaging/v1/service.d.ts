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
import { AlphaSenderList } from './service/alphaSender';
import { ListEachOptions, ListOptions, PageOptions } from '../../../interfaces';
import { PhoneNumberList } from './service/phoneNumber';
import { SerializableClass } from '../../../interfaces';
import { ShortCodeList } from './service/shortCode';

/**
 * @description Initialize the ServiceList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 */
declare function ServiceList(version: V1): ServiceListInstance;

interface ServiceResource {
  account_sid: string;
  area_code_geomatch: boolean;
  date_created: Date;
  date_updated: Date;
  fallback_method: string;
  fallback_to_long_code: boolean;
  fallback_url: string;
  friendly_name: string;
  inbound_method: string;
  inbound_request_url: string;
  links: string;
  mms_converter: boolean;
  scan_message_content: ServiceScanMessageContent;
  sid: string;
  smart_encoding: boolean;
  status_callback: string;
  sticky_sender: boolean;
  synchronous_validation: boolean;
  url: string;
  validity_period: number;
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
   * @memberof Twilio.Messaging.V1.ServiceList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  create(opts: object, callback?: function);
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
   * @memberof Twilio.Messaging.V1.ServiceList
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
   * @memberof Twilio.Messaging.V1.ServiceList
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
   * @memberof Twilio.Messaging.V1.ServiceList
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
   * @memberof Twilio.Messaging.V1.ServiceList
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
   * @memberof Twilio.Messaging.V1.ServiceList
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
 * @property friendlyName - The friendly_name
 * @property inboundRequestUrl - The inbound_request_url
 * @property inboundMethod - The inbound_method
 * @property fallbackUrl - The fallback_url
 * @property fallbackMethod - The fallback_method
 * @property statusCallback - The status_callback
 * @property stickySender - The sticky_sender
 * @property mmsConverter - The mms_converter
 * @property smartEncoding - The smart_encoding
 * @property scanMessageContent - The scan_message_content
 * @property fallbackToLongCode - The fallback_to_long_code
 * @property areaCodeGeomatch - The area_code_geomatch
 * @property validityPeriod - The validity_period
 * @property synchronousValidation - The synchronous_validation
 */
export interface UpdateOptions {
  areaCodeGeomatch?: boolean;
  fallbackMethod?: string;
  fallbackToLongCode?: boolean;
  fallbackUrl?: string;
  friendlyName?: string;
  inboundMethod?: string;
  inboundRequestUrl?: string;
  mmsConverter?: boolean;
  scanMessageContent?: service.scan_message_content;
  smartEncoding?: boolean;
  statusCallback?: string;
  stickySender?: boolean;
  synchronousValidation?: boolean;
  validityPeriod?: number;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - The friendly_name
 * @property inboundRequestUrl - The inbound_request_url
 * @property inboundMethod - The inbound_method
 * @property fallbackUrl - The fallback_url
 * @property fallbackMethod - The fallback_method
 * @property statusCallback - The status_callback
 * @property stickySender - The sticky_sender
 * @property mmsConverter - The mms_converter
 * @property smartEncoding - The smart_encoding
 * @property scanMessageContent - The scan_message_content
 * @property fallbackToLongCode - The fallback_to_long_code
 * @property areaCodeGeomatch - The area_code_geomatch
 * @property validityPeriod - The validity_period
 * @property synchronousValidation - The synchronous_validation
 */
export interface UpdateOptions {
  areaCodeGeomatch?: boolean;
  fallbackMethod?: string;
  fallbackToLongCode?: boolean;
  fallbackUrl?: string;
  friendlyName?: string;
  inboundMethod?: string;
  inboundRequestUrl?: string;
  mmsConverter?: boolean;
  scanMessageContent?: service.scan_message_content;
  smartEncoding?: boolean;
  statusCallback?: string;
  stickySender?: boolean;
  synchronousValidation?: boolean;
  validityPeriod?: number;
}


declare class ServicePage extends Page {
  /**
   * @constructor Twilio.Messaging.V1.ServicePage
   * @augments Page
   * @description Initialize the ServicePage
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Messaging.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of ServiceInstance
   *
   * @function getInstance
   * @memberof Twilio.Messaging.V1.ServicePage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class ServiceInstance {
  /**
   * @constructor Twilio.Messaging.V1.ServiceInstance
   * @description Initialize the ServiceContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - Unique 34 character ID of the Service.
   * @property accountSid - Unique 34 character ID of the Account that created this Service.
   * @property friendlyName - A human readable descriptive text for this resource, up to 64 characters.
   * @property dateCreated - The date that this resource was created.
   * @property dateUpdated - The date that this resource was last updated.
   * @property inboundRequestUrl - The URL Twilio will make a webhook request to when a message is received by any phone number or short code in your Service.
   * @property inboundMethod - The HTTP method Twilio will use when making requests to the Inbound Request URL.
   * @property fallbackUrl - The URL that Twilio will request if an error occurs when retrieving or executing the TwiML from your Inbound Request URL.
   * @property fallbackMethod - The HTTP method Twilio will use when making requests to the Fallback URL.
   * @property statusCallback - The URL Twilio will make a webhook request to when passing you status updates about the delivery of your messages.
   * @property stickySender - Configuration to enable or disable Sticky Sender on your Service instance.
   * @property mmsConverter - Configuration to enable or disable MMS Converter for messages sent through your Service instance.
   * @property smartEncoding - Configuration to enable or disable Smart Encoding for messages sent through your Service instance.
   * @property scanMessageContent - The scan_message_content
   * @property fallbackToLongCode - Configuration to enable or disable Fallback to Long Code for messages sent through your Service instance.
   * @property areaCodeGeomatch - Configuration to enable or disable Area Code Geomatch on your Service Instance.
   * @property synchronousValidation - The synchronous_validation
   * @property validityPeriod - The number of seconds all messages sent from your Service are valid for.
   * @property url - The url
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Twilio.Messaging.V1, payload: object, sid: sid);

  _proxy?: ServiceContext;
  /**
   * Access the alphaSenders
   *
   * @function alphaSenders
   * @memberof Twilio.Messaging.V1.ServiceInstance
   * @instance
   */
  alphaSenders();
  /**
   * fetch a ServiceInstance
   *
   * @function fetch
   * @memberof Twilio.Messaging.V1.ServiceInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the phoneNumbers
   *
   * @function phoneNumbers
   * @memberof Twilio.Messaging.V1.ServiceInstance
   * @instance
   */
  phoneNumbers();
  /**
   * remove a ServiceInstance
   *
   * @function remove
   * @memberof Twilio.Messaging.V1.ServiceInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Access the shortCodes
   *
   * @function shortCodes
   * @memberof Twilio.Messaging.V1.ServiceInstance
   * @instance
   */
  shortCodes();
  /**
   * Produce a plain JSON object version of the ServiceInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Messaging.V1.ServiceInstance
   * @instance
   */
  toJSON();
  /**
   * update a ServiceInstance
   *
   * @function update
   * @memberof Twilio.Messaging.V1.ServiceInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class ServiceContext {
  /**
   * @constructor Twilio.Messaging.V1.ServiceContext
   * @description Initialize the ServiceContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property phoneNumbers - phoneNumbers resource
   * @property shortCodes - shortCodes resource
   * @property alphaSenders - alphaSenders resource
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.Messaging.V1, sid: sid);

  alphaSenders?: Twilio.Messaging.V1.ServiceContext.AlphaSenderList;
  /**
   * fetch a ServiceInstance
   *
   * @function fetch
   * @memberof Twilio.Messaging.V1.ServiceContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  phoneNumbers?: Twilio.Messaging.V1.ServiceContext.PhoneNumberList;
  /**
   * remove a ServiceInstance
   *
   * @function remove
   * @memberof Twilio.Messaging.V1.ServiceContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  shortCodes?: Twilio.Messaging.V1.ServiceContext.ShortCodeList;
  /**
   * update a ServiceInstance
   *
   * @function update
   * @memberof Twilio.Messaging.V1.ServiceContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { ServiceContext, ServiceInstance, ServiceList, ServiceListInstance, ServicePage, ServicePayload, ServiceResource, ServiceSolution }