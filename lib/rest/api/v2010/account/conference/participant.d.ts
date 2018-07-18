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
 * @description Initialize the ParticipantList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique sid that identifies this account
 * @param conferenceSid - A string that uniquely identifies this conference
 */
declare function ParticipantList(version: V2010, accountSid: string, conferenceSid: string): ParticipantListInstance;

interface ParticipantResource {
  account_sid: string;
  call_sid: string;
  conference_sid: string;
  date_created: Date;
  date_updated: Date;
  end_conference_on_exit: boolean;
  hold: boolean;
  muted: boolean;
  start_conference_on_enter: boolean;
  status: ParticipantStatus;
  uri: string;
}

interface ParticipantPayload extends ParticipantResource, Page.TwilioResponsePayload {
}

interface ParticipantSolution {
  accountSid?: string;
  conferenceSid?: string;
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
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantList
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
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantList
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
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantList
   * @instance
   *
   * @param callSid - Fetch by unique participant Call SID
   */
  get(callSid: string);
  /**
   * Retrieve a single target page of ParticipantInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantList
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
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantList
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
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantList
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
 * @property muted - Indicates if the participant should be muted
 * @property hold - Specifying true will hold the participant, while false will un-hold.
 * @property holdUrl - The 'HoldUrl' attribute lets you specify a URL for music that plays when a participant is held.
 * @property holdMethod - Specify GET or POST, defaults to GET
 * @property announceUrl - The 'AnnounceUrl' attribute lets you specify a URL for announcing something to the participant.
 * @property announceMethod - Specify GET or POST, defaults to POST
 */
export interface UpdateOptions {
  announceMethod?: string;
  announceUrl?: string;
  hold?: boolean;
  holdMethod?: string;
  holdUrl?: string;
  muted?: boolean;
}

/**
 * Options to pass to update
 *
 * @property muted - Indicates if the participant should be muted
 * @property hold - Specifying true will hold the participant, while false will un-hold.
 * @property holdUrl - The 'HoldUrl' attribute lets you specify a URL for music that plays when a participant is held.
 * @property holdMethod - Specify GET or POST, defaults to GET
 * @property announceUrl - The 'AnnounceUrl' attribute lets you specify a URL for announcing something to the participant.
 * @property announceMethod - Specify GET or POST, defaults to POST
 */
export interface UpdateOptions {
  announceMethod?: string;
  announceUrl?: string;
  hold?: boolean;
  holdMethod?: string;
  holdUrl?: string;
  muted?: boolean;
}


declare class ParticipantPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantPage
   * @augments Page
   * @description Initialize the ParticipantPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: Response<string>, solution: object);

  /**
   * Build an instance of ParticipantInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class ParticipantInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantInstance
   * @description Initialize the ParticipantContext
   *
   * @property accountSid - The unique sid that identifies this account
   * @property callSid - A string that uniquely identifies this call
   * @property conferenceSid - A string that uniquely identifies this conference
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property endConferenceOnExit - Indicates if the endConferenceOnExit was set
   * @property muted - Indicates if the participant is muted
   * @property hold - true if this participant is currently held.
   * @property startConferenceOnEnter - Indicates if the startConferenceOnEnter attribute was set
   * @property status - The status
   * @property uri - The URI for this resource
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique sid that identifies this account
   * @param conferenceSid - A string that uniquely identifies this conference
   * @param callSid - Fetch by unique participant Call SID
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, conferenceSid: sid, callSid: sid);

  _proxy?: ParticipantContext;
  /**
   * fetch a ParticipantInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a ParticipantInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantInstance
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
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantInstance
   * @instance
   */
  toJSON();
  /**
   * update a ParticipantInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class ParticipantContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantContext
   * @description Initialize the ParticipantContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param conferenceSid - The string that uniquely identifies this conference
   * @param callSid - Fetch by unique participant Call SID
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, conferenceSid: sid, callSid: sid);

  /**
   * fetch a ParticipantInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a ParticipantInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a ParticipantInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { ParticipantContext, ParticipantInstance, ParticipantList, ParticipantListInstance, ParticipantPage, ParticipantPayload, ParticipantResource, ParticipantSolution }