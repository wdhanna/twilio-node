/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import V1 = require('../V1');
import deserialize = require('../../../base/deserialize');
import serialize = require('../../../base/serialize');
import values = require('../../../base/values');
import { FaxMediaList } from './fax/faxMedia';


/**
 * Options to pass to update
 *
 * @property status - The updated status of this fax
 */
export interface UpdateOptions {
  status?: fax.update_status;
}

/**
 * Options to pass to update
 *
 * @property status - The updated status of this fax
 */
export interface UpdateOptions {
  status?: fax.update_status;
}


declare class FaxPage extends Page {
  /**
   * @constructor Twilio.Fax.V1.FaxPage
   * @augments Page
   * @description Initialize the FaxPage
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Fax.V1, response: object, solution: object);

  /**
   * Build an instance of FaxInstance
   *
   * @function getInstance
   * @memberof Twilio.Fax.V1.FaxPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}

declare class FaxInstance {
  /**
   * @constructor Twilio.Fax.V1.FaxInstance
   * @description Initialize the FaxContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - A string that uniquely identifies this fax.
   * @property accountSid - Account SID
   * @property from - The party that sent the fax
   * @property to - The party that received the fax
   * @property quality - The quality of this fax
   * @property mediaSid - Media SID
   * @property mediaUrl - URL pointing to fax media
   * @property numPages - Number of pages
   * @property duration - The time taken to transmit the fax
   * @property status - The status of this fax
   * @property direction - The direction of this fax
   * @property apiVersion - The API version used
   * @property price - Fax transmission price
   * @property priceUnit - Currency used for billing
   * @property dateCreated - The date this fax was created
   * @property dateUpdated - The date this fax was updated
   * @property links - Nested resource URLs
   * @property url - The URL of this resource
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - A string that uniquely identifies this fax.
   */
  constructor(version: Twilio.Fax.V1, payload: object, sid: sid);

  _proxy?: FaxContext;
  /**
   * fetch a FaxInstance
   *
   * @function fetch
   * @memberof Twilio.Fax.V1.FaxInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the media
   *
   * @function media
   * @memberof Twilio.Fax.V1.FaxInstance
   * @instance
   */
  media();
  /**
   * remove a FaxInstance
   *
   * @function remove
   * @memberof Twilio.Fax.V1.FaxInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the FaxInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Fax.V1.FaxInstance
   * @instance
   */
  toJSON();
  /**
   * update a FaxInstance
   *
   * @function update
   * @memberof Twilio.Fax.V1.FaxInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

declare class FaxContext {
  /**
   * @constructor Twilio.Fax.V1.FaxContext
   * @description Initialize the FaxContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property media - media resource
   *
   * @param version - Version of the resource
   * @param sid - A string that uniquely identifies this fax.
   */
  constructor(version: Twilio.Fax.V1, sid: sid);

  /**
   * fetch a FaxInstance
   *
   * @function fetch
   * @memberof Twilio.Fax.V1.FaxContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  media?: Twilio.Fax.V1.FaxContext.FaxMediaList;
  /**
   * remove a FaxInstance
   *
   * @function remove
   * @memberof Twilio.Fax.V1.FaxContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a FaxInstance
   *
   * @function update
   * @memberof Twilio.Fax.V1.FaxContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { FaxContext, FaxInstance, FaxList, FaxPage }
