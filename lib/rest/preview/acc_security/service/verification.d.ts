/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import AccSecurity = require('../../AccSecurity');
import Page = require('../../../../base/Page');
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the VerificationList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param serviceSid - Service Sid.
 */
declare function VerificationList(version: AccSecurity, serviceSid: string): VerificationListInstance;

interface VerificationResource {
  account_sid: string;
  channel: VerificationChannel;
  date_created: Date;
  date_updated: Date;
  service_sid: string;
  sid: string;
  status: string;
  to: string;
  valid: boolean;
}

interface VerificationListInstance {
  /* jshint ignore:start */
  /**
   * create a VerificationInstance
   *
   * @function create
   * @memberof Twilio.Preview.AccSecurity.ServiceContext.VerificationList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.to - To phonenumber
   * @param {string} opts.channel - sms or call
   * @param {string} [opts.customMessage] - A custom message for this verification
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed VerificationInstance
   */
  /* jshint ignore:end */
  VerificationListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.to)) {
      throw new Error('Required parameter "opts.to" missing.');
    }
    if (_.isUndefined(opts.channel)) {
      throw new Error('Required parameter "opts.channel" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'To': _.get(opts, 'to'),
      'Channel': _.get(opts, 'channel'),
      'CustomMessage': _.get(opts, 'customMessage')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new VerificationInstance(this._version, payload));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };
}


declare class VerificationPage extends Page {
  /**
   * @constructor Twilio.Preview.AccSecurity.ServiceContext.VerificationPage
   * @augments Page
   * @description Initialize the VerificationPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.AccSecurity, response: object, solution: object);

  /**
   * Build an instance of VerificationInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.AccSecurity.ServiceContext.VerificationPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class VerificationInstance {
  /**
   * @constructor Twilio.Preview.AccSecurity.ServiceContext.VerificationInstance
   * @description Initialize the VerificationContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - A string that uniquely identifies this Verification.
   * @property serviceSid - Service Sid.
   * @property accountSid - Account Sid.
   * @property to - To phonenumber
   * @property channel - sms or call
   * @property status - pending, approved, denied or expired
   * @property valid - successful verification
   * @property dateCreated - The date this Verification was created
   * @property dateUpdated - The date this Verification was updated
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   */
  constructor(version: Twilio.Preview.AccSecurity, payload: object, serviceSid: sid);

  /**
   * Produce a plain JSON object version of the VerificationInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.AccSecurity.ServiceContext.VerificationInstance
   * @instance
   */
  toJSON();
}

export { VerificationInstance, VerificationList, VerificationListInstance, VerificationPage, VerificationResource }
