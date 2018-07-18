/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../../base/Page');
import Response = require('../../../../../../http/response');
import V2010 = require('../../../../V2010');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../../interfaces';
import { SerializableClass } from '../../../../../../interfaces';

/**
 * @description Initialize the IpAccessControlListMappingList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique id of the Account that responsible for this resource.
 * @param domainSid - A string that uniquely identifies the SIP Domain
 */
declare function IpAccessControlListMappingList(version: V2010, accountSid: string, domainSid: string): IpAccessControlListMappingListInstance;

interface IpAccessControlListMappingResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  sid: string;
  subresource_uris: string;
  uri: string;
}

interface IpAccessControlListMappingPayload extends IpAccessControlListMappingResource, Page.TwilioResponsePayload {
}

interface IpAccessControlListMappingSolution {
  accountSid?: string;
  domainSid?: string;
}

interface IpAccessControlListMappingListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): IpAccessControlListMappingContext;
  /**
   * create a IpAccessControlListMappingInstance
   *
   * @function create
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainContext.IpAccessControlListMappingList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  create(opts: object, callback?: function);
  /**
   * Streams IpAccessControlListMappingInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainContext.IpAccessControlListMappingList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a ip_access_control_list_mapping
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainContext.IpAccessControlListMappingList
   * @instance
   *
   * @param sid - The sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of IpAccessControlListMappingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainContext.IpAccessControlListMappingList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists IpAccessControlListMappingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainContext.IpAccessControlListMappingList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of IpAccessControlListMappingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainContext.IpAccessControlListMappingList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  page(opts?: object, callback?: function);
}


declare class IpAccessControlListMappingPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.SipContext.DomainContext.IpAccessControlListMappingPage
   * @augments Page
   * @description Initialize the IpAccessControlListMappingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: Response<string>, solution: object);

  /**
   * Build an instance of IpAccessControlListMappingInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainContext.IpAccessControlListMappingPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class IpAccessControlListMappingInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.SipContext.DomainContext.IpAccessControlListMappingInstance
   * @description Initialize the IpAccessControlListMappingContext
   *
   * @property accountSid - The unique id of the Account that responsible for this resource.
   * @property dateCreated - The date that this resource was created, given as GMT in RFC 2822 format.
   * @property dateUpdated - The date that this resource was last updated, given as GMT in RFC 2822 format.
   * @property friendlyName - A human readable descriptive text for this resource, up to 64 characters long.
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property uri - The URI for this resource, relative to https://api.twilio.com
   * @property subresourceUris - The subresource_uris
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique id of the Account that responsible for this resource.
   * @param domainSid - A string that uniquely identifies the SIP Domain
   * @param sid - The sid
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, domainSid: sid, sid: sid);

  _proxy?: IpAccessControlListMappingContext;
  /**
   * fetch a IpAccessControlListMappingInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainContext.IpAccessControlListMappingInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a IpAccessControlListMappingInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainContext.IpAccessControlListMappingInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the IpAccessControlListMappingInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainContext.IpAccessControlListMappingInstance
   * @instance
   */
  toJSON();
}


declare class IpAccessControlListMappingContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.SipContext.DomainContext.IpAccessControlListMappingContext
   * @description Initialize the IpAccessControlListMappingContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param domainSid - The domain_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, domainSid: sid, sid: sid);

  /**
   * fetch a IpAccessControlListMappingInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainContext.IpAccessControlListMappingContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a IpAccessControlListMappingInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainContext.IpAccessControlListMappingContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { IpAccessControlListMappingContext, IpAccessControlListMappingInstance, IpAccessControlListMappingList, IpAccessControlListMappingListInstance, IpAccessControlListMappingPage, IpAccessControlListMappingPayload, IpAccessControlListMappingResource, IpAccessControlListMappingSolution }