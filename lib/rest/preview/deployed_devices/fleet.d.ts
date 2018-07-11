/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import deserialize = require('../../../base/deserialize');
import values = require('../../../base/values');
import { CertificateList } from './fleet/certificate';
import { DeploymentList } from './fleet/deployment';
import { DeviceList } from './fleet/device';
import { KeyList } from './fleet/key';


/**
 * Options to pass to update
 *
 * @property friendlyName - A human readable description for this Fleet.
 * @property defaultDeploymentSid - A default Deployment SID.
 */
export interface UpdateOptions {
  defaultDeploymentSid?: string;
  friendlyName?: string;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - A human readable description for this Fleet.
 * @property defaultDeploymentSid - A default Deployment SID.
 */
export interface UpdateOptions {
  defaultDeploymentSid?: string;
  friendlyName?: string;
}


declare class FleetPage extends Page {
  /**
   * @constructor Twilio.Preview.DeployedDevices.FleetPage
   * @augments Page
   * @description Initialize the FleetPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.DeployedDevices, response: object, solution: object);

  /**
   * Build an instance of FleetInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.DeployedDevices.FleetPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}

declare class FleetInstance {
  /**
   * @constructor Twilio.Preview.DeployedDevices.FleetInstance
   * @description Initialize the FleetContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - A string that uniquely identifies this Fleet.
   * @property url - URL of this Fleet.
   * @property uniqueName - A unique, addressable name of this Fleet.
   * @property friendlyName - A human readable description for this Fleet.
   * @property accountSid - The unique SID that identifies this Account.
   * @property defaultDeploymentSid - The unique SID that identifies this Fleet's default Deployment.
   * @property dateCreated - The date this Fleet was created.
   * @property dateUpdated - The date this Fleet was updated.
   * @property links - Nested resource URLs.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - A string that uniquely identifies the Fleet.
   */
  constructor(version: Twilio.Preview.DeployedDevices, payload: object, sid: sid_like);

  _proxy?: FleetContext;
  /**
   * Access the certificates
   *
   * @function certificates
   * @memberof Twilio.Preview.DeployedDevices.FleetInstance
   * @instance
   */
  certificates();
  /**
   * Access the deployments
   *
   * @function deployments
   * @memberof Twilio.Preview.DeployedDevices.FleetInstance
   * @instance
   */
  deployments();
  /**
   * Access the devices
   *
   * @function devices
   * @memberof Twilio.Preview.DeployedDevices.FleetInstance
   * @instance
   */
  devices();
  /**
   * fetch a FleetInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.DeployedDevices.FleetInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the keys
   *
   * @function keys
   * @memberof Twilio.Preview.DeployedDevices.FleetInstance
   * @instance
   */
  keys();
  /**
   * remove a FleetInstance
   *
   * @function remove
   * @memberof Twilio.Preview.DeployedDevices.FleetInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the FleetInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.DeployedDevices.FleetInstance
   * @instance
   */
  toJSON();
  /**
   * update a FleetInstance
   *
   * @function update
   * @memberof Twilio.Preview.DeployedDevices.FleetInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

declare class FleetContext {
  /**
   * @constructor Twilio.Preview.DeployedDevices.FleetContext
   * @description Initialize the FleetContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property devices - devices resource
   * @property deployments - deployments resource
   * @property certificates - certificates resource
   * @property keys - keys resource
   *
   * @param version - Version of the resource
   * @param sid - A string that uniquely identifies the Fleet.
   */
  constructor(version: Twilio.Preview.DeployedDevices, sid: sid_like);

  certificates?: Twilio.Preview.DeployedDevices.FleetContext.CertificateList;
  deployments?: Twilio.Preview.DeployedDevices.FleetContext.DeploymentList;
  devices?: Twilio.Preview.DeployedDevices.FleetContext.DeviceList;
  /**
   * fetch a FleetInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.DeployedDevices.FleetContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  keys?: Twilio.Preview.DeployedDevices.FleetContext.KeyList;
  /**
   * remove a FleetInstance
   *
   * @function remove
   * @memberof Twilio.Preview.DeployedDevices.FleetContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a FleetInstance
   *
   * @function update
   * @memberof Twilio.Preview.DeployedDevices.FleetContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { FleetContext, FleetInstance, FleetList, FleetPage }
