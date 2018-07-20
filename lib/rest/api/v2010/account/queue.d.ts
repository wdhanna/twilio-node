/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2010 = require('../../V2010');
import { MemberList } from './queue/member';
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the QueueList
 *
 * @param version - Version of the resource
 * @param accountSid - The account_sid
 */
declare function QueueList(version: V2010, accountSid: string): QueueListInstance;

interface QueueResource {
  account_sid: string;
  average_wait_time: number;
  current_size: number;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  max_size: number;
  sid: string;
  uri: string;
}

interface QueuePayload extends QueueResource, Page.TwilioResponsePayload {
}

interface QueueSolution {
  accountSid?: string;
}

interface QueueListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): QueueContext;
  /**
   * create a QueueInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: QueueListInstanceCreateOptions, callback?: (error: Error | null, items: QueueListInstance) => any): Promise<QueueInstance>;
  /**
   * Streams QueueInstance records from the API.
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
  each(opts?: QueueListInstanceEachOptions, callback?: (item: QueueInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a queue
   *
   * @param sid - Fetch by unique queue Sid
   */
  get(sid: string): QueueContext;
  /**
   * Retrieve a single target page of QueueInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: QueuePage) => any): Promise<QueuePage>;
  /**
   * Lists QueueInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: QueueListInstanceOptions, callback?: (error: Error | null, items: QueueInstance[]) => any): Promise<QueueInstance[]>;
  /**
   * Retrieve a single page of QueueInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: QueueListInstancePageOptions, callback?: (error: Error | null, items: QueuePage) => any): Promise<QueuePage>;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - A human readable description of the queue
 * @property maxSize - The max number of members allowed in the queue
 */
interface QueueInstanceUpdateOptions {
  friendlyName?: string;
  maxSize?: number;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - A human readable description of the queue
 * @property maxSize - The max number of members allowed in the queue
 */
interface QueueInstanceUpdateOptions {
  friendlyName?: string;
  maxSize?: number;
}


declare class QueuePage extends Page<V2010, QueuePayload, QueueResource, QueueInstance> {
  /**
   * Initialize the QueuePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: QueueSolution);

  /**
   * Build an instance of QueueInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: QueuePayload): QueueInstance;
}


declare class QueueInstance extends SerializableClass {
  /**
   * Initialize the QueueContext
   *
   * @property accountSid - The account_sid
   * @property averageWaitTime - Average wait time of members in the queue
   * @property currentSize - The count of calls currently in the queue.
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property friendlyName - A user-provided string that identifies this queue.
   * @property maxSize - The max number of calls allowed in the queue
   * @property sid - A string that uniquely identifies this queue
   * @property uri - The uri
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique queue Sid
   */
  constructor(version: V2010, payload: QueuePayload, accountSid: string, sid: string);

  private _proxy: QueueContext;
  accountSid: string;
  averageWaitTime: number;
  currentSize: number;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a QueueInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: QueueInstance) => any): void;
  friendlyName: string;
  maxSize: number;
  /**
   * Access the members
   */
  members();
  /**
   * remove a QueueInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: QueueInstance) => any): void;
  sid: string;
  /**
   * Produce a plain JSON object version of the QueueInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  /**
   * update a QueueInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: QueueInstanceUpdateOptions, callback?: (error: Error | null, items: QueueInstance) => any): void;
  uri: string;
}


declare class QueueContext {
  /**
   * Initialize the QueueContext
   *
   * @property members - members resource
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique queue Sid
   */
  constructor(version: V2010, accountSid: string, sid: string);

  /**
   * fetch a QueueInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: QueueInstance) => any): void;
  members?: Twilio.Api.V2010.AccountContext.QueueContext.MemberList;
  /**
   * remove a QueueInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: QueueInstance) => any): void;
  /**
   * update a QueueInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: QueueInstanceUpdateOptions, callback?: (error: Error | null, items: QueueInstance) => any): void;
}

export { QueueContext, QueueInstance, QueueList, QueueListInstance, QueueListInstanceCreateOptions, QueueListInstanceEachOptions, QueueListInstanceOptions, QueueListInstancePageOptions, QueuePage, QueuePayload, QueueResource, QueueSolution }
