/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import Understand = require('../../../Understand');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the FieldList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param assistantSid - The unique ID of the parent Assistant.
 * @param intentSid - The unique ID of the Intent associated with this Field.
 */
declare function FieldList(version: Understand, assistantSid: string, intentSid: string): FieldListInstance;

interface FieldResource {
  account_sid: string;
  assistant_sid: string;
  date_created: Date;
  date_updated: Date;
  field_type: string;
  intent_sid: string;
  sid: string;
  unique_name: string;
  url: string;
}

interface FieldPayload extends FieldResource, Page.TwilioResponsePayload {
}

interface FieldSolution {
  assistantSid?: string;
  intentSid?: string;
}

interface FieldListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): FieldContext;
  /**
   * create a FieldInstance
   *
   * @function create
   * @memberof Twilio.Preview.Understand.AssistantContext.IntentContext.FieldList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  create(opts: object, callback?: function);
  /**
   * Streams FieldInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Preview.Understand.AssistantContext.IntentContext.FieldList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a field
   *
   * @function get
   * @memberof Twilio.Preview.Understand.AssistantContext.IntentContext.FieldList
   * @instance
   *
   * @param sid - The sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of FieldInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Preview.Understand.AssistantContext.IntentContext.FieldList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists FieldInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Preview.Understand.AssistantContext.IntentContext.FieldList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of FieldInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Preview.Understand.AssistantContext.IntentContext.FieldList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  page(opts?: object, callback?: function);
}


declare class FieldPage extends Page {
  /**
   * @constructor Twilio.Preview.Understand.AssistantContext.IntentContext.FieldPage
   * @augments Page
   * @description Initialize the FieldPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Understand, response: Response<string>, solution: object);

  /**
   * Build an instance of FieldInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.Understand.AssistantContext.IntentContext.FieldPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class FieldInstance {
  /**
   * @constructor Twilio.Preview.Understand.AssistantContext.IntentContext.FieldInstance
   * @description Initialize the FieldContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property accountSid - The unique ID of the Account that created this Field.
   * @property dateCreated - The date that this resource was created
   * @property dateUpdated - The date that this resource was last updated
   * @property fieldType - The Field Type of this field. It can be any Built-in Field Type or unique_name or the Field Type sid of a custom Field Type.
   * @property intentSid - The unique ID of the Intent associated with this Field.
   * @property assistantSid - The unique ID of the parent Assistant.
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property uniqueName - A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param assistantSid - The unique ID of the parent Assistant.
   * @param intentSid - The unique ID of the Intent associated with this Field.
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Understand, payload: object, assistantSid: sid, intentSid: sid, sid: sid_like);

  _proxy?: FieldContext;
  /**
   * fetch a FieldInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Understand.AssistantContext.IntentContext.FieldInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a FieldInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Understand.AssistantContext.IntentContext.FieldInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the FieldInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.Understand.AssistantContext.IntentContext.FieldInstance
   * @instance
   */
  toJSON();
}


declare class FieldContext {
  /**
   * @constructor Twilio.Preview.Understand.AssistantContext.IntentContext.FieldContext
   * @description Initialize the FieldContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param assistantSid - The assistant_sid
   * @param intentSid - The intent_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Understand, assistantSid: sid_like, intentSid: sid_like, sid: sid_like);

  /**
   * fetch a FieldInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Understand.AssistantContext.IntentContext.FieldContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a FieldInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Understand.AssistantContext.IntentContext.FieldContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { FieldContext, FieldInstance, FieldList, FieldListInstance, FieldPage, FieldPayload, FieldResource, FieldSolution }