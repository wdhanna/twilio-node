/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import deserialize = require('../../../../base/deserialize');
import values = require('../../../../base/values');



declare class ShortCodePage extends Page {
  /**
   * @constructor Twilio.Proxy.V1.ServiceContext.ShortCodePage
   * @augments Page
   * @description Initialize the ShortCodePage
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Proxy.V1, response: object, solution: object);

  /**
   * Build an instance of ShortCodeInstance
   *
   * @function getInstance
   * @memberof Twilio.Proxy.V1.ServiceContext.ShortCodePage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}

declare class ShortCodeInstance {
  /**
   * @constructor Twilio.Proxy.V1.ServiceContext.ShortCodeInstance
   * @description Initialize the ShortCodeContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - A string that uniquely identifies this Short Code.
   * @property accountSid - Account Sid.
   * @property serviceSid - Service Sid.
   * @property dateCreated - The date this Short Code was added to the service
   * @property dateUpdated - The date this Short Code was updated
   * @property shortCode - Shortcode.
   * @property isoCountry - ISO Country Code,
   * @property capabilities - A list of capabilities.
   * @property url - The URL of this resource.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   * @param sid - A string that uniquely identifies this Short Code.
   */
  constructor(version: Twilio.Proxy.V1, payload: object, serviceSid: sid, sid: sid);

  _proxy?: ShortCodeContext;
  /**
   * fetch a ShortCodeInstance
   *
   * @function fetch
   * @memberof Twilio.Proxy.V1.ServiceContext.ShortCodeInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a ShortCodeInstance
   *
   * @function remove
   * @memberof Twilio.Proxy.V1.ServiceContext.ShortCodeInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the ShortCodeInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Proxy.V1.ServiceContext.ShortCodeInstance
   * @instance
   */
  toJSON();
}

declare class ShortCodeContext {
  /**
   * @constructor Twilio.Proxy.V1.ServiceContext.ShortCodeContext
   * @description Initialize the ShortCodeContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param serviceSid - Service Sid.
   * @param sid - A string that uniquely identifies this Short Code.
   */
  constructor(version: Twilio.Proxy.V1, serviceSid: sid, sid: sid);

  /**
   * fetch a ShortCodeInstance
   *
   * @function fetch
   * @memberof Twilio.Proxy.V1.ServiceContext.ShortCodeContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a ShortCodeInstance
   *
   * @function remove
   * @memberof Twilio.Proxy.V1.ServiceContext.ShortCodeContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { ShortCodeContext, ShortCodeInstance, ShortCodeList, ShortCodePage }
