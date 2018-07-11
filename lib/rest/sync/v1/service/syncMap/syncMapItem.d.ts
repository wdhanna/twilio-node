/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import deserialize = require('../../../../../base/deserialize');
import serialize = require('../../../../../base/serialize');
import values = require('../../../../../base/values');


/**
 * Options to pass to update
 *
 * @property data - Contains an arbitrary JSON object to be stored in this Map Item.
 * @property ttl - New time-to-live of this Map in seconds.
 */
export interface UpdateOptions {
  data?: string;
  ttl?: number;
}

/**
 * Options to pass to update
 *
 * @property data - Contains an arbitrary JSON object to be stored in this Map Item.
 * @property ttl - New time-to-live of this Map in seconds.
 */
export interface UpdateOptions {
  data?: string;
  ttl?: number;
}


declare class SyncMapItemPage extends Page {
  /**
   * @constructor Twilio.Sync.V1.ServiceContext.SyncMapContext.SyncMapItemPage
   * @augments Page
   * @description Initialize the SyncMapItemPage
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Sync.V1, response: object, solution: object);

  /**
   * Build an instance of SyncMapItemInstance
   *
   * @function getInstance
   * @memberof Twilio.Sync.V1.ServiceContext.SyncMapContext.SyncMapItemPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}

declare class SyncMapItemInstance {
  /**
   * @constructor Twilio.Sync.V1.ServiceContext.SyncMapContext.SyncMapItemInstance
   * @description Initialize the SyncMapItemContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property key - The unique user-defined key of this Map Item.
   * @property accountSid - The unique SID identifier of the Twilio Account.
   * @property serviceSid - The unique SID identifier of the Service Instance that hosts this Map object.
   * @property mapSid - The unique 34-character SID identifier of the Map containing this Item.
   * @property url - The absolute URL for this Map.
   * @property revision - Contains the current revision of this Map, represented by a string identifier.
   * @property data - Contains arbitrary user-defined, schema-less data that this Map Item stores, represented by a JSON object, up to 16KB.
   * @property dateExpires - Contains the date this Map expires and gets deleted automatically.
   * @property dateCreated - The date this Map was created, given in UTC ISO 8601 format.
   * @property dateUpdated - Specifies the date this Map was last updated, given in UTC ISO 8601 format.
   * @property createdBy - The identity of the Map creator.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The unique SID identifier of the Service Instance that hosts this Map object.
   * @param mapSid - The unique 34-character SID identifier of the Map containing this Item.
   * @param key - The key
   */
  constructor(version: Twilio.Sync.V1, payload: object, serviceSid: sid, mapSid: sid, key: string);

  _proxy?: SyncMapItemContext;
  /**
   * fetch a SyncMapItemInstance
   *
   * @function fetch
   * @memberof Twilio.Sync.V1.ServiceContext.SyncMapContext.SyncMapItemInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a SyncMapItemInstance
   *
   * @function remove
   * @memberof Twilio.Sync.V1.ServiceContext.SyncMapContext.SyncMapItemInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the SyncMapItemInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Sync.V1.ServiceContext.SyncMapContext.SyncMapItemInstance
   * @instance
   */
  toJSON();
  /**
   * update a SyncMapItemInstance
   *
   * @function update
   * @memberof Twilio.Sync.V1.ServiceContext.SyncMapContext.SyncMapItemInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

declare class SyncMapItemContext {
  /**
   * @constructor Twilio.Sync.V1.ServiceContext.SyncMapContext.SyncMapItemContext
   * @description Initialize the SyncMapItemContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param mapSid - The map_sid
   * @param key - The key
   */
  constructor(version: Twilio.Sync.V1, serviceSid: sid_like, mapSid: sid_like, key: string);

  /**
   * fetch a SyncMapItemInstance
   *
   * @function fetch
   * @memberof Twilio.Sync.V1.ServiceContext.SyncMapContext.SyncMapItemContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a SyncMapItemInstance
   *
   * @function remove
   * @memberof Twilio.Sync.V1.ServiceContext.SyncMapContext.SyncMapItemContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a SyncMapItemInstance
   *
   * @function update
   * @memberof Twilio.Sync.V1.ServiceContext.SyncMapContext.SyncMapItemContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { SyncMapItemContext, SyncMapItemInstance, SyncMapItemList, SyncMapItemPage }
