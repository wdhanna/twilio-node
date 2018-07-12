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



declare class AuthorizedConnectAppPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.AuthorizedConnectAppPage
   * @augments Page
   * @description Initialize the AuthorizedConnectAppPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of AuthorizedConnectAppInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.AuthorizedConnectAppPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}

declare class AuthorizedConnectAppInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.AuthorizedConnectAppInstance
   * @description Initialize the AuthorizedConnectAppContext
   *
   * @property accountSid - The unique sid that identifies this account
   * @property connectAppCompanyName - The company name set for this Connect App.
   * @property connectAppDescription - Human readable description of the app
   * @property connectAppFriendlyName - A human readable name for the Connect App.
   * @property connectAppHomepageUrl - The public URL for this Connect App.
   * @property connectAppSid - A string that uniquely identifies this app
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property permissions - Permissions authorized to this app
   * @property uri - The URI for this resource
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique sid that identifies this account
   * @param connectAppSid - The connect_app_sid
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, connectAppSid: sid);

  _proxy?: AuthorizedConnectAppContext;
  /**
   * fetch a AuthorizedConnectAppInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.AuthorizedConnectAppInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the AuthorizedConnectAppInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.AuthorizedConnectAppInstance
   * @instance
   */
  toJSON();
}

declare class AuthorizedConnectAppContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.AuthorizedConnectAppContext
   * @description Initialize the AuthorizedConnectAppContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param connectAppSid - The connect_app_sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, connectAppSid: sid);

  /**
   * fetch a AuthorizedConnectAppInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.AuthorizedConnectAppContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
}

export { AuthorizedConnectAppContext, AuthorizedConnectAppInstance, AuthorizedConnectAppList, AuthorizedConnectAppPage }
