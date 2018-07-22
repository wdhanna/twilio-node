/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import AccSecurity = require('../AccSecurity');
import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import { SerializableClass } from '../../../interfaces';
import { VerificationCheckList } from './service/verificationCheck';
import { VerificationList } from './service/verification';

/**
 * @description Initialize the ServiceList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function ServiceList(version: AccSecurity): ServiceListInstance;

interface ServiceResource {
  account_sid: string;
  code_length: number;
  date_created: Date;
  date_updated: Date;
  links: string;
  name: string;
  sid: string;
  url: string;
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
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: ServiceListInstanceCreateOptions, callback?: (error: Error | null, items: ServiceListInstance) => any): Promise<ServiceInstance>;
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
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: ServiceListInstanceEachOptions, callback?: (item: ServiceInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a service
   *
   * @param sid - Verification Service Instance SID.
   */
  get(sid: string): ServiceContext;
  /**
   * Retrieve a single target page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
  /**
   * Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: ServiceListInstanceOptions, callback?: (error: Error | null, items: ServiceInstance[]) => any): Promise<ServiceInstance[]>;
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: ServiceListInstancePageOptions, callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
}

/**
 * Options to pass to update
 *
 * @property name - Friendly name of the service
 * @property codeLength - Length of verification code. Valid values are 4-10
 */
interface ServiceInstanceUpdateOptions {
  codeLength?: number;
  name?: string;
}

/**
 * Options to pass to update
 *
 * @property name - Friendly name of the service
 * @property codeLength - Length of verification code. Valid values are 4-10
 */
interface ServiceInstanceUpdateOptions {
  codeLength?: number;
  name?: string;
}


declare class ServicePage extends Page<AccSecurity, ServicePayload, ServiceResource, ServiceInstance> {
  /**
   * Initialize the ServicePagePLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: AccSecurity, response: Response<string>, solution: ServiceSolution);

  /**
   * Build an instance of ServiceInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ServicePayload): ServiceInstance;
}


declare class ServiceInstance extends SerializableClass {
  /**
   * Initialize the ServiceContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - A string that uniquely identifies this Service.
   * @property accountSid - Account Sid.
   * @property name - Friendly name of the service
   * @property codeLength - Length of verification code. Valid values are 4-10
   * @property dateCreated - The date this Service was created
   * @property dateUpdated - The date this Service was updated
   * @property url - The url
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - Verification Service Instance SID.
   */
  constructor(version: AccSecurity, payload: ServicePayload, sid: string);

  private _proxy: ServiceContext;
  accountSid: string;
  codeLength: number;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ServiceInstance) => any): void;
  links: string;
  name: string;
  sid: string;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ServiceInstanceUpdateOptions, callback?: (error: Error | null, items: ServiceInstance) => any): void;
  url: string;
  /**
   * Access the verificationChecks
   */
  verificationChecks();
  /**
   * Access the verifications
   */
  verifications();
}


declare class ServiceContext {
  /**
   * Initialize the ServiceContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property verifications - verifications resource
   * @property verificationChecks - verificationChecks resource
   *
   * @param version - Version of the resource
   * @param sid - Verification Service Instance SID.
   */
  constructor(version: AccSecurity, sid: string);

  /**
   * fetch a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ServiceInstance) => any): void;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ServiceInstanceUpdateOptions, callback?: (error: Error | null, items: ServiceInstance) => any): void;
  verificationChecks?: Twilio.Preview.AccSecurity.ServiceContext.VerificationCheckList;
  verifications?: Twilio.Preview.AccSecurity.ServiceContext.VerificationList;
}

export { ServiceContext, ServiceInstance, ServiceList, ServiceListInstance, ServiceListInstanceCreateOptions, ServiceListInstanceEachOptions, ServiceListInstanceOptions, ServiceListInstancePageOptions, ServicePage, ServicePayload, ServiceResource, ServiceSolution }
