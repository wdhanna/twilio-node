/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import V2010 = require('../../V2010');
import serialize = require('../../../../base/serialize');
import values = require('../../../../base/values');


/**
 * Options to pass to update
 *
 * @property authorizeRedirectUrl - URIL Twilio sends requests when users authorize
 * @property companyName - The company name set for this Connect App.
 * @property deauthorizeCallbackMethod - HTTP method Twilio WIll use making requests to the url
 * @property deauthorizeCallbackUrl - URL Twilio will send a request when a user de-authorizes this app
 * @property description - A more detailed human readable description
 * @property friendlyName - A human readable name for the Connect App.
 * @property homepageUrl - The URL users can obtain more information
 * @property permissions - The set of permissions that your ConnectApp requests.
 */
export interface UpdateOptions {
  authorizeRedirectUrl?: string;
  companyName?: string;
  deauthorizeCallbackMethod?: string;
  deauthorizeCallbackUrl?: string;
  description?: string;
  friendlyName?: string;
  homepageUrl?: string;
  permissions?: connect_app.permission|list;
}

/**
 * Options to pass to update
 *
 * @property authorizeRedirectUrl - URIL Twilio sends requests when users authorize
 * @property companyName - The company name set for this Connect App.
 * @property deauthorizeCallbackMethod - HTTP method Twilio WIll use making requests to the url
 * @property deauthorizeCallbackUrl - URL Twilio will send a request when a user de-authorizes this app
 * @property description - A more detailed human readable description
 * @property friendlyName - A human readable name for the Connect App.
 * @property homepageUrl - The URL users can obtain more information
 * @property permissions - The set of permissions that your ConnectApp requests.
 */
export interface UpdateOptions {
  authorizeRedirectUrl?: string;
  companyName?: string;
  deauthorizeCallbackMethod?: string;
  deauthorizeCallbackUrl?: string;
  description?: string;
  friendlyName?: string;
  homepageUrl?: string;
  permissions?: connect_app.permission|list;
}


declare class ConnectAppPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.ConnectAppPage
   * @augments Page
   * @description Initialize the ConnectAppPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of ConnectAppInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.ConnectAppPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}

declare class ConnectAppInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.ConnectAppInstance
   * @description Initialize the ConnectAppContext
   *
   * @property accountSid - The unique sid that identifies this account
   * @property authorizeRedirectUrl - URIL Twilio sends requests when users authorize
   * @property companyName - The company name set for this Connect App.
   * @property deauthorizeCallbackMethod - HTTP method Twilio will use making requests to the url
   * @property deauthorizeCallbackUrl - URL Twilio will send a request when a user de-authorizes this app
   * @property description - A more detailed human readable description
   * @property friendlyName - A human readable name for the Connect App.
   * @property homepageUrl - The URL users can obtain more information
   * @property permissions - The set of permissions that your ConnectApp requests.
   * @property sid - A string that uniquely identifies this connect-apps
   * @property uri - The URI for this resource
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique sid that identifies this account
   * @param sid - Fetch by unique connect-app Sid
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, sid: sid);

  _proxy?: ConnectAppContext;
  /**
   * fetch a ConnectAppInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.ConnectAppInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the ConnectAppInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.ConnectAppInstance
   * @instance
   */
  toJSON();
  /**
   * update a ConnectAppInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.ConnectAppInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

declare class ConnectAppContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.ConnectAppContext
   * @description Initialize the ConnectAppContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique connect-app Sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, sid: sid);

  /**
   * fetch a ConnectAppInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.ConnectAppContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * update a ConnectAppInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.ConnectAppContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { ConnectAppContext, ConnectAppInstance, ConnectAppList, ConnectAppPage }
