/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import deserialize = require('../../../base/deserialize');
import serialize = require('../../../base/serialize');
import values = require('../../../base/values');
import { DependentHostedNumberOrderList } from './authorizationDocument/dependentHostedNumberOrder';


/**
 * Options to pass to update
 *
 * @property hostedNumberOrderSids - A list of HostedNumberOrder sids.
 * @property addressSid - Address sid.
 * @property email - Email.
 * @property ccEmails - A list of emails.
 * @property status - The Status of this AuthorizationDocument.
 */
export interface UpdateOptions {
  addressSid?: string;
  ccEmails?: string|list;
  email?: string;
  hostedNumberOrderSids?: string|list;
  status?: authorization_document.status;
}

/**
 * Options to pass to update
 *
 * @property hostedNumberOrderSids - A list of HostedNumberOrder sids.
 * @property addressSid - Address sid.
 * @property email - Email.
 * @property ccEmails - A list of emails.
 * @property status - The Status of this AuthorizationDocument.
 */
export interface UpdateOptions {
  addressSid?: string;
  ccEmails?: string|list;
  email?: string;
  hostedNumberOrderSids?: string|list;
  status?: authorization_document.status;
}


declare class AuthorizationDocumentPage extends Page {
  /**
   * @constructor Twilio.Preview.HostedNumbers.AuthorizationDocumentPage
   * @augments Page
   * @description Initialize the AuthorizationDocumentPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.HostedNumbers, response: object, solution: object);

  /**
   * Build an instance of AuthorizationDocumentInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.HostedNumbers.AuthorizationDocumentPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}

declare class AuthorizationDocumentInstance {
  /**
   * @constructor Twilio.Preview.HostedNumbers.AuthorizationDocumentInstance
   * @description Initialize the AuthorizationDocumentContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - AuthorizationDocument sid.
   * @property addressSid - Address sid.
   * @property status - The Status of this AuthorizationDocument.
   * @property email - Email.
   * @property ccEmails - A list of emails.
   * @property dateCreated - The date this AuthorizationDocument was created.
   * @property dateUpdated - The date this AuthorizationDocument was updated.
   * @property url - The url
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - AuthorizationDocument sid.
   */
  constructor(version: Twilio.Preview.HostedNumbers, payload: object, sid: sid);

  _proxy?: AuthorizationDocumentContext;
  /**
   * Access the dependentHostedNumberOrders
   *
   * @function dependentHostedNumberOrders
   * @memberof Twilio.Preview.HostedNumbers.AuthorizationDocumentInstance
   * @instance
   */
  dependentHostedNumberOrders();
  /**
   * fetch a AuthorizationDocumentInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.HostedNumbers.AuthorizationDocumentInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the AuthorizationDocumentInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.HostedNumbers.AuthorizationDocumentInstance
   * @instance
   */
  toJSON();
  /**
   * update a AuthorizationDocumentInstance
   *
   * @function update
   * @memberof Twilio.Preview.HostedNumbers.AuthorizationDocumentInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

declare class AuthorizationDocumentContext {
  /**
   * @constructor Twilio.Preview.HostedNumbers.AuthorizationDocumentContext
   * @description Initialize the AuthorizationDocumentContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property dependentHostedNumberOrders - dependentHostedNumberOrders resource
   *
   * @param version - Version of the resource
   * @param sid - AuthorizationDocument sid.
   */
  constructor(version: Twilio.Preview.HostedNumbers, sid: sid);

  dependentHostedNumberOrders?: Twilio.Preview.HostedNumbers.AuthorizationDocumentContext.DependentHostedNumberOrderList;
  /**
   * fetch a AuthorizationDocumentInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.HostedNumbers.AuthorizationDocumentContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * update a AuthorizationDocumentInstance
   *
   * @function update
   * @memberof Twilio.Preview.HostedNumbers.AuthorizationDocumentContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { AuthorizationDocumentContext, AuthorizationDocumentInstance, AuthorizationDocumentList, AuthorizationDocumentPage }
