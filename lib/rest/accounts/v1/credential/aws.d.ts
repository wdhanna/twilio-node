/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import deserialize = require('../../../../base/deserialize');
import values = require('../../../../base/values');


/**
 * Options to pass to update
 *
 * @property friendlyName - The friendly_name
 */
export interface UpdateOptions {
  friendlyName?: string;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - The friendly_name
 */
export interface UpdateOptions {
  friendlyName?: string;
}


declare class AwsPage extends Page {
  /**
   * @constructor Twilio.Accounts.V1.CredentialContext.AwsPage
   * @augments Page
   * @description Initialize the AwsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Accounts.V1, response: object, solution: object);

  /**
   * Build an instance of AwsInstance
   *
   * @function getInstance
   * @memberof Twilio.Accounts.V1.CredentialContext.AwsPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}

declare class AwsInstance {
  /**
   * @constructor Twilio.Accounts.V1.CredentialContext.AwsInstance
   * @description Initialize the AwsContext
   *
   * @property sid - The sid
   * @property accountSid - The account_sid
   * @property friendlyName - The friendly_name
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Twilio.Accounts.V1, payload: object, sid: sid);

  _proxy?: AwsContext;
  /**
   * fetch a AwsInstance
   *
   * @function fetch
   * @memberof Twilio.Accounts.V1.CredentialContext.AwsInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a AwsInstance
   *
   * @function remove
   * @memberof Twilio.Accounts.V1.CredentialContext.AwsInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the AwsInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Accounts.V1.CredentialContext.AwsInstance
   * @instance
   */
  toJSON();
  /**
   * update a AwsInstance
   *
   * @function update
   * @memberof Twilio.Accounts.V1.CredentialContext.AwsInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

declare class AwsContext {
  /**
   * @constructor Twilio.Accounts.V1.CredentialContext.AwsContext
   * @description Initialize the AwsContext
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.Accounts.V1, sid: sid);

  /**
   * fetch a AwsInstance
   *
   * @function fetch
   * @memberof Twilio.Accounts.V1.CredentialContext.AwsContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a AwsInstance
   *
   * @function remove
   * @memberof Twilio.Accounts.V1.CredentialContext.AwsContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a AwsInstance
   *
   * @function update
   * @memberof Twilio.Accounts.V1.CredentialContext.AwsContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { AwsContext, AwsInstance, AwsList, AwsPage }
