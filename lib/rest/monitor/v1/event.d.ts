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
import { SerializableClass } from '../../../interfaces';

/**
 * @description Initialize the EventList
 *
 * @param version - Version of the resource
 */
declare function EventList(version: V1): EventListInstance;

interface EventResource {
  account_sid: string;
  actor_sid: string;
  actor_type: string;
  description: string;
  event_data: string;
  event_date: Date;
  event_type: string;
  links: string;
  resource_sid: string;
  resource_type: string;
  sid: string;
  source: string;
  source_ip_address: string;
  url: string;
}

interface EventPayload extends EventResource, Page.TwilioResponsePayload {
}

interface EventSolution {
}

interface EventListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): EventContext;
  /**
   * Streams EventInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: EventListInstanceEachOptions, callback?: (item: EventInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a event
   *
   * @param sid - The sid
   */
  get(sid: string): EventContext;
  /**
   * Retrieve a single target page of EventInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: EventPage) => any): Promise<EventPage>;
  /**
   * Lists EventInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: EventListInstanceOptions, callback?: (error: Error | null, items: EventInstance[]) => any): Promise<EventInstance[]>;
  /**
   * Retrieve a single page of EventInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: EventListInstancePageOptions, callback?: (error: Error | null, items: EventPage) => any): Promise<EventPage>;
}


declare class EventPage extends Page<V1, EventPayload, EventResource, EventInstance> {
  /**
   * Initialize the EventPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: EventSolution);

  /**
   * Build an instance of EventInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: EventPayload): EventInstance;
}


declare class EventInstance extends SerializableClass {
  /**
   * Initialize the EventContext
   *
   * @property accountSid - The account_sid
   * @property actorSid - The actor_sid
   * @property actorType - The actor_type
   * @property description - A human-readable description of the event.  May be null.
   * @property eventData - The event_data
   * @property eventDate - The event_date
   * @property eventType - The event_type
   * @property resourceSid - The resource_sid
   * @property resourceType - The resource_type
   * @property sid - A 34 character string that uniquely identifies this event.
   * @property source - The originating system or interface that caused the event.  web for events caused by user action in the Twilio Console.  api for events caused through a request to the REST API.  twilio for events caused by an automated or internal Twilio system.
   * @property sourceIpAddress - The source_ip_address
   * @property url - The url
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: V1, payload: EventPayload, sid: string);

  private _proxy: EventContext;
  accountSid: string;
  actorSid: string;
  actorType: string;
  description: string;
  eventData: string;
  eventDate: Date;
  eventType: string;
  /**
   * fetch a EventInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: EventInstance) => any): void;
  links: string;
  resourceSid: string;
  resourceType: string;
  sid: string;
  source: string;
  sourceIpAddress: string;
  /**
   * Produce a plain JSON object version of the EventInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  url: string;
}


declare class EventContext {
  /**
   * Initialize the EventContext
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: V1, sid: string);

  /**
   * fetch a EventInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: EventInstance) => any): void;
}

export { EventContext, EventInstance, EventList, EventListInstance, EventListInstanceEachOptions, EventListInstanceOptions, EventListInstancePageOptions, EventPage, EventPayload, EventResource, EventSolution }
