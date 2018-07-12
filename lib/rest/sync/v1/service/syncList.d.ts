/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import V1 = require('../../V1');
import deserialize = require('../../../../base/deserialize');
import values = require('../../../../base/values');
import { SyncListItemList } from './syncList/syncListItem';
import { SyncListPermissionList } from './syncList/syncListPermission';


/**
 * Options to pass to update
 *
 * @property ttl - Time-to-live of this List in seconds, defaults to no expiration.
 */
export interface UpdateOptions {
  ttl?: number;
}

/**
 * Options to pass to update
 *
 * @property ttl - Time-to-live of this List in seconds, defaults to no expiration.
 */
export interface UpdateOptions {
  ttl?: number;
}


declare class SyncListPage extends Page {
  /**
   * @constructor Twilio.Sync.V1.ServiceContext.SyncListPage
   * @augments Page
   * @description Initialize the SyncListPage
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Sync.V1, response: object, solution: object);

  /**
   * Build an instance of SyncListInstance
   *
   * @function getInstance
   * @memberof Twilio.Sync.V1.ServiceContext.SyncListPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}

declare class SyncListInstance {
  /**
   * @constructor Twilio.Sync.V1.ServiceContext.SyncListInstance
   * @description Initialize the SyncListContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - The unique 34-character SID identifier of the List.
   * @property uniqueName - The unique and addressable name of this List.
   * @property accountSid - The unique SID identifier of the Twilio Account.
   * @property serviceSid - The unique SID identifier of the Service Instance that hosts this List object.
   * @property url - The absolute URL for this List.
   * @property links - A dictionary of URL links to nested resources of this List.
   * @property revision - Contains the current revision of this List, represented by a string identifier.
   * @property dateExpires - Contains the date this List expires and gets deleted automatically.
   * @property dateCreated - The date this List was created, given in UTC ISO 8601 format.
   * @property dateUpdated - Specifies the date this List was last updated, given in UTC ISO 8601 format.
   * @property createdBy - The identity of the List creator.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The unique SID identifier of the Service Instance that hosts this List object.
   * @param sid - The sid
   */
  constructor(version: Twilio.Sync.V1, payload: object, serviceSid: sid, sid: sid_like);

  _proxy?: SyncListContext;
  /**
   * fetch a SyncListInstance
   *
   * @function fetch
   * @memberof Twilio.Sync.V1.ServiceContext.SyncListInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a SyncListInstance
   *
   * @function remove
   * @memberof Twilio.Sync.V1.ServiceContext.SyncListInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Access the syncListItems
   *
   * @function syncListItems
   * @memberof Twilio.Sync.V1.ServiceContext.SyncListInstance
   * @instance
   */
  syncListItems();
  /**
   * Access the syncListPermissions
   *
   * @function syncListPermissions
   * @memberof Twilio.Sync.V1.ServiceContext.SyncListInstance
   * @instance
   */
  syncListPermissions();
  /**
   * Produce a plain JSON object version of the SyncListInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Sync.V1.ServiceContext.SyncListInstance
   * @instance
   */
  toJSON();
  /**
   * update a SyncListInstance
   *
   * @function update
   * @memberof Twilio.Sync.V1.ServiceContext.SyncListInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

declare class SyncListContext {
  /**
   * @constructor Twilio.Sync.V1.ServiceContext.SyncListContext
   * @description Initialize the SyncListContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property syncListItems - syncListItems resource
   * @property syncListPermissions - syncListPermissions resource
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Sync.V1, serviceSid: sid_like, sid: sid_like);

  /**
   * fetch a SyncListInstance
   *
   * @function fetch
   * @memberof Twilio.Sync.V1.ServiceContext.SyncListContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a SyncListInstance
   *
   * @function remove
   * @memberof Twilio.Sync.V1.ServiceContext.SyncListContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  syncListItems?: Twilio.Sync.V1.ServiceContext.SyncListContext.SyncListItemList;
  syncListPermissions?: Twilio.Sync.V1.ServiceContext.SyncListContext.SyncListPermissionList;
  /**
   * update a SyncListInstance
   *
   * @function update
   * @memberof Twilio.Sync.V1.ServiceContext.SyncListContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { SyncListContext, SyncListInstance, SyncListList, SyncListPage }
