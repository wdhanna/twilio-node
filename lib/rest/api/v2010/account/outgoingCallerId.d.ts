/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import V2010 = require('../../V2010');
import deserialize = require('../../../../base/deserialize');
import values = require('../../../../base/values');


/**
 * Options to pass to update
 *
 * @property friendlyName - A human readable description of the caller ID
 */
export interface UpdateOptions {
  friendlyName?: string;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - A human readable description of the caller ID
 */
export interface UpdateOptions {
  friendlyName?: string;
}


declare class OutgoingCallerIdPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.OutgoingCallerIdPage
   * @augments Page
   * @description Initialize the OutgoingCallerIdPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of OutgoingCallerIdInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.OutgoingCallerIdPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}

declare class OutgoingCallerIdInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.OutgoingCallerIdInstance
   * @description Initialize the OutgoingCallerIdContext
   *
   * @property sid - A string that uniquely identifies this outgoing-caller-ids
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property friendlyName - A human readable description for this resource
   * @property accountSid - The unique sid that identifies this account
   * @property phoneNumber - The incoming phone number
   * @property uri - The URI for this resource
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique sid that identifies this account
   * @param sid - Fetch by unique outgoing-caller-id Sid
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, sid: sid);

  _proxy?: OutgoingCallerIdContext;
  /**
   * fetch a OutgoingCallerIdInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.OutgoingCallerIdInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a OutgoingCallerIdInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.OutgoingCallerIdInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the OutgoingCallerIdInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.OutgoingCallerIdInstance
   * @instance
   */
  toJSON();
  /**
   * update a OutgoingCallerIdInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.OutgoingCallerIdInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

declare class OutgoingCallerIdContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.OutgoingCallerIdContext
   * @description Initialize the OutgoingCallerIdContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique outgoing-caller-id Sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, sid: sid);

  /**
   * fetch a OutgoingCallerIdInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.OutgoingCallerIdContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a OutgoingCallerIdInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.OutgoingCallerIdContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a OutgoingCallerIdInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.OutgoingCallerIdContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { OutgoingCallerIdContext, OutgoingCallerIdInstance, OutgoingCallerIdList, OutgoingCallerIdPage }
