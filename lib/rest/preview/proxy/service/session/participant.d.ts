/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Proxy = require('../../../Proxy');
import Response = require('../../../../../http/response');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
import { MessageInteractionList } from './participant/messageInteraction';
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the ParticipantList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param serviceSid - Service Sid.
 * @param sessionSid - Session Sid.
 */
declare function ParticipantList(version: Proxy, serviceSid: string, sessionSid: string): ParticipantListInstance;

interface ParticipantResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  identifier: string;
  links: string;
  participant_type: ParticipantParticipantType;
  proxy_identifier: string;
  service_sid: string;
  session_sid: string;
  sid: string;
  url: string;
}

interface ParticipantPayload extends ParticipantResource, Page.TwilioResponsePayload {
}

interface ParticipantSolution {
  serviceSid?: string;
  sessionSid?: string;
}

interface ParticipantListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ParticipantContext;
  /**
   * create a ParticipantInstance
   *
   * @function create
   * @memberof Twilio.Preview.Proxy.ServiceContext.SessionContext.ParticipantList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  create(opts: object, callback?: function);
  /**
   * Streams ParticipantInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Preview.Proxy.ServiceContext.SessionContext.ParticipantList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a participant
   *
   * @function get
   * @memberof Twilio.Preview.Proxy.ServiceContext.SessionContext.ParticipantList
   * @instance
   *
   * @param sid - A string that uniquely identifies this Participant.
   */
  get(sid: string);
  /**
   * Retrieve a single target page of ParticipantInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Preview.Proxy.ServiceContext.SessionContext.ParticipantList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists ParticipantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Preview.Proxy.ServiceContext.SessionContext.ParticipantList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of ParticipantInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Preview.Proxy.ServiceContext.SessionContext.ParticipantList
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
 * @property participantType - The Type of this Participant
 * @property identifier - The Participant's contact identifier, normally a phone number.
 * @property friendlyName - A human readable description of this resource
 */
export interface UpdateOptions {
  friendlyName?: string;
  identifier?: string;
  participantType?: participant.participant_type;
}

/**
 * Options to pass to update
 *
 * @property participantType - The Type of this Participant
 * @property identifier - The Participant's contact identifier, normally a phone number.
 * @property friendlyName - A human readable description of this resource
 */
export interface UpdateOptions {
  friendlyName?: string;
  identifier?: string;
  participantType?: participant.participant_type;
}


declare class ParticipantPage extends Page {
  /**
   * @constructor Twilio.Preview.Proxy.ServiceContext.SessionContext.ParticipantPage
   * @augments Page
   * @description Initialize the ParticipantPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Proxy, response: Response<string>, solution: object);

  /**
   * Build an instance of ParticipantInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.Proxy.ServiceContext.SessionContext.ParticipantPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class ParticipantInstance {
  /**
   * @constructor Twilio.Preview.Proxy.ServiceContext.SessionContext.ParticipantInstance
   * @description Initialize the ParticipantContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - A string that uniquely identifies this Participant.
   * @property sessionSid - Session Sid.
   * @property serviceSid - Service Sid.
   * @property accountSid - Account Sid.
   * @property friendlyName - A human readable description of this resource
   * @property participantType - The Type of this Participant
   * @property identifier - The Participant's contact identifier, normally a phone number.
   * @property proxyIdentifier - What this Participant communicates with, normally a phone number.
   * @property dateCreated - The date this Participant was created
   * @property dateUpdated - The date this Participant was updated
   * @property url - The URL of this resource.
   * @property links - Nested resource URLs.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   * @param sessionSid - Session Sid.
   * @param sid - A string that uniquely identifies this Participant.
   */
  constructor(version: Twilio.Preview.Proxy, payload: object, serviceSid: sid, sessionSid: sid, sid: sid);

  _proxy?: ParticipantContext;
  /**
   * fetch a ParticipantInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Proxy.ServiceContext.SessionContext.ParticipantInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the messageInteractions
   *
   * @function messageInteractions
   * @memberof Twilio.Preview.Proxy.ServiceContext.SessionContext.ParticipantInstance
   * @instance
   */
  messageInteractions();
  /**
   * remove a ParticipantInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Proxy.ServiceContext.SessionContext.ParticipantInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the ParticipantInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.Proxy.ServiceContext.SessionContext.ParticipantInstance
   * @instance
   */
  toJSON();
  /**
   * update a ParticipantInstance
   *
   * @function update
   * @memberof Twilio.Preview.Proxy.ServiceContext.SessionContext.ParticipantInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class ParticipantContext {
  /**
   * @constructor Twilio.Preview.Proxy.ServiceContext.SessionContext.ParticipantContext
   * @description Initialize the ParticipantContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property messageInteractions - messageInteractions resource
   *
   * @param version - Version of the resource
   * @param serviceSid - Service Sid.
   * @param sessionSid - Session Sid.
   * @param sid - A string that uniquely identifies this Participant.
   */
  constructor(version: Twilio.Preview.Proxy, serviceSid: sid, sessionSid: sid, sid: sid);

  /**
   * fetch a ParticipantInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Proxy.ServiceContext.SessionContext.ParticipantContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  messageInteractions?: Twilio.Preview.Proxy.ServiceContext.SessionContext.ParticipantContext.MessageInteractionList;
  /**
   * remove a ParticipantInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Proxy.ServiceContext.SessionContext.ParticipantContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a ParticipantInstance
   *
   * @function update
   * @memberof Twilio.Preview.Proxy.ServiceContext.SessionContext.ParticipantContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { ParticipantContext, ParticipantInstance, ParticipantList, ParticipantListInstance, ParticipantPage, ParticipantPayload, ParticipantResource, ParticipantSolution }