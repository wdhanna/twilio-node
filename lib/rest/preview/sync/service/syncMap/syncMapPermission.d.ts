/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Sync = require('../../../Sync');
import serialize = require('../../../../../base/serialize');
import values = require('../../../../../base/values');


/**
 * Options to pass to update
 *
 * @property read - Read access.
 * @property write - Write access.
 * @property manage - Manage access.
 */
export interface UpdateOptions {
  manage: boolean;
  read: boolean;
  write: boolean;
}

/**
 * Options to pass to update
 *
 * @property read - Read access.
 * @property write - Write access.
 * @property manage - Manage access.
 */
export interface UpdateOptions {
  manage: boolean;
  read: boolean;
  write: boolean;
}


declare class SyncMapPermissionPage extends Page {
  /**
   * @constructor Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapPermissionPage
   * @augments Page
   * @description Initialize the SyncMapPermissionPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Sync, response: object, solution: object);

  /**
   * Build an instance of SyncMapPermissionInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapPermissionPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}

declare class SyncMapPermissionInstance {
  /**
   * @constructor Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapPermissionInstance
   * @description Initialize the SyncMapPermissionContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property accountSid - Twilio Account SID.
   * @property serviceSid - Sync Service Instance SID.
   * @property mapSid - Sync Map SID.
   * @property identity - Identity of the user to whom the Sync Map Permission applies.
   * @property read - Read access.
   * @property write - Write access.
   * @property manage - Manage access.
   * @property url - URL of this Sync Map Permission.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Sync Service Instance SID.
   * @param mapSid - Sync Map SID.
   * @param identity - Identity of the user to whom the Sync Map Permission applies.
   */
  constructor(version: Twilio.Preview.Sync, payload: object, serviceSid: sid, mapSid: sid, identity: string);

  _proxy?: SyncMapPermissionContext;
  /**
   * fetch a SyncMapPermissionInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapPermissionInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a SyncMapPermissionInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapPermissionInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the SyncMapPermissionInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapPermissionInstance
   * @instance
   */
  toJSON();
  /**
   * update a SyncMapPermissionInstance
   *
   * @function update
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapPermissionInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}

declare class SyncMapPermissionContext {
  /**
   * @constructor Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapPermissionContext
   * @description Initialize the SyncMapPermissionContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param mapSid - Sync Map SID or unique name.
   * @param identity - Identity of the user to whom the Sync Map Permission applies.
   */
  constructor(version: Twilio.Preview.Sync, serviceSid: sid, mapSid: sid_like, identity: string);

  /**
   * fetch a SyncMapPermissionInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapPermissionContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a SyncMapPermissionInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapPermissionContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a SyncMapPermissionInstance
   *
   * @function update
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncMapContext.SyncMapPermissionContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}

export { SyncMapPermissionContext, SyncMapPermissionInstance, SyncMapPermissionList, SyncMapPermissionPage }
