/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import deserialize = require('../../../../base/deserialize');
import serialize = require('../../../../base/serialize');
import values = require('../../../../base/values');


/**
 * Options to pass to update
 *
 * @property permission - A permission this role should have.
 */
export interface UpdateOptions {
  permission: string|list;
}

/**
 * Options to pass to update
 *
 * @property permission - A permission this role should have.
 */
export interface UpdateOptions {
  permission: string|list;
}


declare class RolePage extends Page {
  /**
   * @constructor Twilio.IpMessaging.V1.ServiceContext.RolePage
   * @augments Page
   * @description Initialize the RolePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.IpMessaging.V1, response: object, solution: object);

  /**
   * Build an instance of RoleInstance
   *
   * @function getInstance
   * @memberof Twilio.IpMessaging.V1.ServiceContext.RolePage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}

declare class RoleInstance {
  /**
   * @constructor Twilio.IpMessaging.V1.ServiceContext.RoleInstance
   * @description Initialize the RoleContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property accountSid - The unique id of the Account responsible for this role.
   * @property serviceSid - The unique id of the Service this role belongs to.
   * @property friendlyName - The human-readable name of this role.
   * @property type - What kind of role this is.
   * @property permissions - A JSON array of the permissions this role has.
   * @property dateCreated - The date that this resource was created in ISO 8601 format.
   * @property dateUpdated - The date that this resource was last updated in ISO 8601 format.
   * @property url - An absolute URL for this role.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The unique id of the Service this role belongs to.
   * @param sid - The sid
   */
  constructor(version: Twilio.IpMessaging.V1, payload: object, serviceSid: sid, sid: sid);

  _proxy?: RoleContext;
  /**
   * fetch a RoleInstance
   *
   * @function fetch
   * @memberof Twilio.IpMessaging.V1.ServiceContext.RoleInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a RoleInstance
   *
   * @function remove
   * @memberof Twilio.IpMessaging.V1.ServiceContext.RoleInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the RoleInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.IpMessaging.V1.ServiceContext.RoleInstance
   * @instance
   */
  toJSON();
  /**
   * update a RoleInstance
   *
   * @function update
   * @memberof Twilio.IpMessaging.V1.ServiceContext.RoleInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}

declare class RoleContext {
  /**
   * @constructor Twilio.IpMessaging.V1.ServiceContext.RoleContext
   * @description Initialize the RoleContext
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.IpMessaging.V1, serviceSid: sid, sid: sid);

  /**
   * fetch a RoleInstance
   *
   * @function fetch
   * @memberof Twilio.IpMessaging.V1.ServiceContext.RoleContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a RoleInstance
   *
   * @function remove
   * @memberof Twilio.IpMessaging.V1.ServiceContext.RoleContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a RoleInstance
   *
   * @function update
   * @memberof Twilio.IpMessaging.V1.ServiceContext.RoleContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}

export { RoleContext, RoleInstance, RoleList, RolePage }
