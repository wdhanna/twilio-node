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
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the LocalList
 *
 * @param version - Version of the resource
 * @param accountSid - The 34 character string that uniquely identifies your account.
 * @param countryCode - The ISO Country code to lookup phone numbers for.
 */
declare function LocalList(version: V2010, accountSid: string, countryCode: string): LocalListInstance;

interface LocalResource {
  address_requirements: string;
  beta: boolean;
  capabilities: string;
  friendly_name: string;
  iso_country: string;
  lata: string;
  latitude: number;
  locality: string;
  longitude: number;
  phone_number: string;
  postal_code: string;
  rate_center: string;
  region: string;
}

interface LocalPayload extends LocalResource, Page.TwilioResponsePayload {
}

interface LocalSolution {
  accountSid?: string;
  countryCode?: string;
}

interface LocalListInstance {
  /**
   * Streams LocalInstance records from the API.
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
  each(opts?: LocalListInstanceEachOptions, callback?: (item: LocalInstance, done: (err?: Error) => void) => void): void;
  /**
   * Retrieve a single target page of LocalInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: LocalPage) => any): Promise<LocalPage>;
  /**
   * Lists LocalInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: LocalListInstanceOptions, callback?: (error: Error | null, items: LocalInstance[]) => any): Promise<LocalInstance[]>;
  /**
   * Retrieve a single page of LocalInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: LocalListInstancePageOptions, callback?: (error: Error | null, items: LocalPage) => any): Promise<LocalPage>;
}


declare class LocalPage extends Page<V2010, LocalPayload, LocalResource, LocalInstance> {
  /**
   * Initialize the LocalPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: LocalSolution);

  /**
   * Build an instance of LocalInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: LocalPayload): LocalInstance;
}


declare class LocalInstance extends SerializableClass {
  /**
   * Initialize the LocalContext
   *
   * @property friendlyName - A nicely-formatted version of the phone number.
   * @property phoneNumber - The phone number, in E.
   * @property lata - The LATA of this phone number.
   * @property locality - The locality/city of this phone number.
   * @property rateCenter - The rate center of this phone number.
   * @property latitude - The latitude coordinate of this phone number.
   * @property longitude - The longitude coordinate of this phone number.
   * @property region - The two-letter state or province abbreviation of this phone number.
   * @property postalCode - The postal code of this phone number.
   * @property isoCountry - The ISO country code of this phone number.
   * @property addressRequirements - This indicates whether the phone number requires you or your customer to have an Address registered with Twilio.
   * @property beta - Phone numbers new to the Twilio platform are marked as beta.
   * @property capabilities - This is a set of boolean properties that indicate whether a phone number can receive calls or messages.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The 34 character string that uniquely identifies your account.
   * @param countryCode - The ISO Country code to lookup phone numbers for.
   */
  constructor(version: V2010, payload: LocalPayload, accountSid: string, countryCode: string);

  addressRequirements: string;
  beta: boolean;
  capabilities: string;
  friendlyName: string;
  isoCountry: string;
  lata: string;
  latitude: number;
  locality: string;
  longitude: number;
  phoneNumber: string;
  postalCode: string;
  rateCenter: string;
  region: string;
  /**
   * Produce a plain JSON object version of the LocalInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
}

export { LocalInstance, LocalList, LocalListInstance, LocalListInstanceEachOptions, LocalListInstanceOptions, LocalListInstancePageOptions, LocalPage, LocalPayload, LocalResource, LocalSolution }
