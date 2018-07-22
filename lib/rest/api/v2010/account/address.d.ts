/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2010 = require('../../V2010');
import serialize = require('../../../../base/serialize');
import { DependentPhoneNumberList } from './address/dependentPhoneNumber';
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the AddressList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique id of the Account responsible for this address.
 */
declare function AddressList(version: V2010, accountSid: string): AddressListInstance;

interface AddressResource {
  account_sid: string;
  city: string;
  customer_name: string;
  date_created: Date;
  date_updated: Date;
  emergency_enabled: boolean;
  friendly_name: string;
  iso_country: string;
  postal_code: string;
  region: string;
  sid: string;
  street: string;
  uri: string;
  validated: boolean;
}

interface AddressPayload extends AddressResource, Page.TwilioResponsePayload {
}

interface AddressSolution {
  accountSid?: string;
}

interface AddressListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): AddressContext;
  /**
   * create a AddressInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: AddressListInstanceCreateOptions, callback?: (error: Error | null, items: AddressListInstance) => any): Promise<AddressInstance>;
  /**
   * Streams AddressInstance records from the API.
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
  each(opts?: AddressListInstanceEachOptions, callback?: (item: AddressInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a address
   *
   * @param sid - The sid
   */
  get(sid: string): AddressContext;
  /**
   * Retrieve a single target page of AddressInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: AddressPage) => any): Promise<AddressPage>;
  /**
   * Lists AddressInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: AddressListInstanceOptions, callback?: (error: Error | null, items: AddressInstance[]) => any): Promise<AddressInstance[]>;
  /**
   * Retrieve a single page of AddressInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: AddressListInstancePageOptions, callback?: (error: Error | null, items: AddressPage) => any): Promise<AddressPage>;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - A human-readable description of the address.
 * @property customerName - Your name or business name, or that of your customer.
 * @property street - The number and street address where you or your customer is located.
 * @property city - The city in which you or your customer is located.
 * @property region - The state or region in which you or your customer is located.
 * @property postalCode - The postal code in which you or your customer is located.
 * @property emergencyEnabled - The emergency_enabled
 * @property autoCorrectAddress - If you don't set a value for this parameter, or if you set it to true, then the system will, if necessary, auto-correct the address you provide.
 */
interface AddressInstanceUpdateOptions {
  autoCorrectAddress?: boolean;
  city?: string;
  customerName?: string;
  emergencyEnabled?: boolean;
  friendlyName?: string;
  postalCode?: string;
  region?: string;
  street?: string;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - A human-readable description of the address.
 * @property customerName - Your name or business name, or that of your customer.
 * @property street - The number and street address where you or your customer is located.
 * @property city - The city in which you or your customer is located.
 * @property region - The state or region in which you or your customer is located.
 * @property postalCode - The postal code in which you or your customer is located.
 * @property emergencyEnabled - The emergency_enabled
 * @property autoCorrectAddress - If you don't set a value for this parameter, or if you set it to true, then the system will, if necessary, auto-correct the address you provide.
 */
interface AddressInstanceUpdateOptions {
  autoCorrectAddress?: boolean;
  city?: string;
  customerName?: string;
  emergencyEnabled?: boolean;
  friendlyName?: string;
  postalCode?: string;
  region?: string;
  street?: string;
}


declare class AddressPage extends Page<V2010, AddressPayload, AddressResource, AddressInstance> {
  /**
   * Initialize the AddressPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: AddressSolution);

  /**
   * Build an instance of AddressInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AddressPayload): AddressInstance;
}


declare class AddressInstance extends SerializableClass {
  /**
   * Initialize the AddressContext
   *
   * @property accountSid - The unique id of the Account responsible for this address.
   * @property city - The city in which you or your customer is located.
   * @property customerName - Your name or business name, or that of your customer.
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property friendlyName - A human-readable description of the address.
   * @property isoCountry - The ISO country code of your or your customer's address.
   * @property postalCode - The postal code in which you or your customer is located.
   * @property region - The state or region in which you or your customer is located.
   * @property sid - A 34 character string that uniquely identifies this address.
   * @property street - The number and street address where you or your customer is located.
   * @property uri - The URI for this resource, relative to https://api.
   * @property emergencyEnabled - This is a value that indicates if emergency calling has been enabled on this number.
   * @property validated - In some countries, addresses are validated to comply with local regulation.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique id of the Account responsible for this address.
   * @param sid - The sid
   */
  constructor(version: V2010, payload: AddressPayload, accountSid: string, sid: string);

  private _proxy: AddressContext;
  accountSid: string;
  city: string;
  customerName: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * Access the dependentPhoneNumbers
   */
  dependentPhoneNumbers();
  emergencyEnabled: boolean;
  /**
   * fetch a AddressInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AddressInstance) => any): void;
  friendlyName: string;
  isoCountry: string;
  postalCode: string;
  region: string;
  /**
   * remove a AddressInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: AddressInstance) => any): void;
  sid: string;
  street: string;
  /**
   * update a AddressInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: AddressInstanceUpdateOptions, callback?: (error: Error | null, items: AddressInstance) => any): void;
  uri: string;
  validated: boolean;
}


declare class AddressContext {
  /**
   * Initialize the AddressContext
   *
   * @property dependentPhoneNumbers - dependentPhoneNumbers resource
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - The sid
   */
  constructor(version: V2010, accountSid: string, sid: string);

  dependentPhoneNumbers?: Twilio.Api.V2010.AccountContext.AddressContext.DependentPhoneNumberList;
  /**
   * fetch a AddressInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AddressInstance) => any): void;
  /**
   * remove a AddressInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: AddressInstance) => any): void;
  /**
   * update a AddressInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: AddressInstanceUpdateOptions, callback?: (error: Error | null, items: AddressInstance) => any): void;
}

export { AddressContext, AddressInstance, AddressList, AddressListInstance, AddressListInstanceCreateOptions, AddressListInstanceEachOptions, AddressListInstanceOptions, AddressListInstancePageOptions, AddressPage, AddressPayload, AddressResource, AddressSolution }
