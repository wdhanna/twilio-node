/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import serialize = require('../../../../../base/serialize');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the MediaList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique sid that identifies this account
 * @param messageSid - A string that uniquely identifies this message
 */
declare function MediaList(version: V2010, accountSid: string, messageSid: string): MediaListInstance;

interface MediaResource {
  account_sid: string;
  content_type: string;
  date_created: Date;
  date_updated: Date;
  parent_sid: string;
  sid: string;
  uri: string;
}

interface MediaPayload extends MediaResource, Page.TwilioResponsePayload {
}

interface MediaSolution {
  accountSid?: string;
  messageSid?: string;
}

interface MediaListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): MediaContext;
  /**
   * Streams MediaInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.MessageContext.MediaList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a media
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.MessageContext.MediaList
   * @instance
   *
   * @param sid - Fetch by unique media Sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of MediaInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.MessageContext.MediaList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists MediaInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.MessageContext.MediaList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of MediaInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.MessageContext.MediaList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  page(opts?: object, callback?: function);
}


declare class MediaPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.MessageContext.MediaPage
   * @augments Page
   * @description Initialize the MediaPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: Response<string>, solution: object);

  /**
   * Build an instance of MediaInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.MessageContext.MediaPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class MediaInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.MessageContext.MediaInstance
   * @description Initialize the MediaContext
   *
   * @property accountSid - The unique sid that identifies this account
   * @property contentType - The default mime-type of the media
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property parentSid - The unique id of the resource that created the media.
   * @property sid - A string that uniquely identifies this media
   * @property uri - The URI for this resource
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique sid that identifies this account
   * @param messageSid - A string that uniquely identifies this message
   * @param sid - Fetch by unique media Sid
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, messageSid: sid, sid: sid);

  _proxy?: MediaContext;
  /**
   * fetch a MediaInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.MessageContext.MediaInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a MediaInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.MessageContext.MediaInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the MediaInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.MessageContext.MediaInstance
   * @instance
   */
  toJSON();
}


declare class MediaContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.MessageContext.MediaContext
   * @description Initialize the MediaContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param messageSid - The message_sid
   * @param sid - Fetch by unique media Sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, messageSid: sid, sid: sid);

  /**
   * fetch a MediaInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.MessageContext.MediaContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a MediaInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.MessageContext.MediaContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { MediaContext, MediaInstance, MediaList, MediaListInstance, MediaPage, MediaPayload, MediaResource, MediaSolution }