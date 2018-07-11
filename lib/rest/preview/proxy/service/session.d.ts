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
import { InteractionList } from './session/interaction';
import { ParticipantList } from './session/participant';


/**
 * Options to pass to update
 *
 * @property uniqueName - A unique, developer assigned name of this Session.
 * @property ttl - How long will this session stay open, in seconds.
 * @property status - The Status of this Session
 * @property participants - The participants
 */
export interface UpdateOptions {
  participants?: string|list;
  status?: session.status;
  ttl?: number;
  uniqueName?: string;
}

/**
 * Options to pass to update
 *
 * @property uniqueName - A unique, developer assigned name of this Session.
 * @property ttl - How long will this session stay open, in seconds.
 * @property status - The Status of this Session
 * @property participants - The participants
 */
export interface UpdateOptions {
  participants?: string|list;
  status?: session.status;
  ttl?: number;
  uniqueName?: string;
}


declare class SessionPage extends Page {
  /**
   * @constructor Twilio.Preview.Proxy.ServiceContext.SessionPage
   * @augments Page
   * @description Initialize the SessionPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Proxy, response: object, solution: object);

  /**
   * Build an instance of SessionInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.Proxy.ServiceContext.SessionPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}

declare class SessionInstance {
  /**
   * @constructor Twilio.Preview.Proxy.ServiceContext.SessionInstance
   * @description Initialize the SessionContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - A string that uniquely identifies this Session.
   * @property serviceSid - Service Sid.
   * @property accountSid - Account Sid.
   * @property uniqueName - A unique, developer assigned name of this Session.
   * @property ttl - How long will this session stay open, in seconds.
   * @property status - The Status of this Session
   * @property startTime - The date this Session was started
   * @property endTime - The date this Session was ended
   * @property dateCreated - The date this Session was created
   * @property dateUpdated - The date this Session was updated
   * @property url - The URL of this Session.
   * @property links - Nested resource URLs.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   * @param sid - A string that uniquely identifies this Session.
   */
  constructor(version: Twilio.Preview.Proxy, payload: object, serviceSid: sid, sid: sid_like);

  _proxy?: SessionContext;
  /**
   * fetch a SessionInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Proxy.ServiceContext.SessionInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the interactions
   *
   * @function interactions
   * @memberof Twilio.Preview.Proxy.ServiceContext.SessionInstance
   * @instance
   */
  interactions();
  /**
   * Access the participants
   *
   * @function participants
   * @memberof Twilio.Preview.Proxy.ServiceContext.SessionInstance
   * @instance
   */
  participants();
  /**
   * remove a SessionInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Proxy.ServiceContext.SessionInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the SessionInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.Proxy.ServiceContext.SessionInstance
   * @instance
   */
  toJSON();
  /**
   * update a SessionInstance
   *
   * @function update
   * @memberof Twilio.Preview.Proxy.ServiceContext.SessionInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

declare class SessionContext {
  /**
   * @constructor Twilio.Preview.Proxy.ServiceContext.SessionContext
   * @description Initialize the SessionContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property interactions - interactions resource
   * @property participants - participants resource
   *
   * @param version - Version of the resource
   * @param serviceSid - Service Sid.
   * @param sid - A string that uniquely identifies this Session.
   */
  constructor(version: Twilio.Preview.Proxy, serviceSid: sid, sid: sid_like);

  /**
   * fetch a SessionInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Proxy.ServiceContext.SessionContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  interactions?: Twilio.Preview.Proxy.ServiceContext.SessionContext.InteractionList;
  participants?: Twilio.Preview.Proxy.ServiceContext.SessionContext.ParticipantList;
  /**
   * remove a SessionInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Proxy.ServiceContext.SessionContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a SessionInstance
   *
   * @function update
   * @memberof Twilio.Preview.Proxy.ServiceContext.SessionContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { SessionContext, SessionInstance, SessionList, SessionPage }
