/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import DeployedDevices = require('../../DeployedDevices');
import Page = require('../../../../base/Page');
import serialize = require('../../../../base/serialize');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the DeviceList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param fleetSid - The unique identifier of the Fleet.
 */
declare function DeviceList(version: DeployedDevices, fleetSid: string): DeviceListInstance;

interface DeviceListInstance {
  /* jshint ignore:start */
  /**
   * create a DeviceInstance
   *
   * @function create
   * @memberof Twilio.Preview.DeployedDevices.FleetContext.DeviceList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.uniqueName] - A unique, addressable name of this Device.
   * @param {string} [opts.friendlyName] -
   *          A human readable description for this Device.
   * @param {string} [opts.identity] - An identifier of the Device user.
   * @param {string} [opts.deploymentSid] - The unique SID of the Deployment group.
   * @param {boolean} [opts.enabled] - The enabled
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed DeviceInstance
   */
  /* jshint ignore:end */
  DeviceListInstance.create = function create(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'UniqueName': _.get(opts, 'uniqueName'),
      'FriendlyName': _.get(opts, 'friendlyName'),
      'Identity': _.get(opts, 'identity'),
      'DeploymentSid': _.get(opts, 'deploymentSid'),
      'Enabled': serialize.bool(_.get(opts, 'enabled'))
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new DeviceInstance(
        this._version,
        payload,
        this._solution.fleetSid,
        this._solution.sid
      ));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };
  /* jshint ignore:start */
  /**
   * Streams DeviceInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Preview.DeployedDevices.FleetContext.DeviceList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.deploymentSid] -
   *          Find all Devices grouped under the specified Deployment.
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         each() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         each() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   *         callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  /* jshint ignore:end */
  DeviceListInstance.each = function each(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    if (opts.callback) {
      callback = opts.callback;
    }
    if (_.isUndefined(callback)) {
      throw new Error('Callback function must be provided');
    }

    var done = false;
    var currentPage = 1;
    var currentResource = 0;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    function onComplete(error) {
      done = true;
      if (_.isFunction(opts.done)) {
        opts.done(error);
      }
    }

    function fetchNextPage(fn) {
      var promise = fn();
      if (_.isUndefined(promise)) {
        onComplete();
        return;
      }

      promise.then(function(page) {
        _.each(page.instances, function(instance) {
          if (done || (!_.isUndefined(opts.limit) && currentResource >= opts.limit)) {
            done = true;
            return false;
          }

          currentResource++;
          callback(instance, onComplete);
        });

        if ((limits.pageLimit && limits.pageLimit <= currentPage)) {
          onComplete();
        } else if (!done) {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        }
      });

      promise.catch(onComplete);
    }

    fetchNextPage(_.bind(this.page, this, _.merge(opts, limits)));
  };
  /* jshint ignore:start */
  /**
   * Retrieve a single target page of DeviceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Preview.DeployedDevices.FleetContext.DeviceList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  DeviceListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new DevicePage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };
  /* jshint ignore:start */
  /**
   * @description Lists DeviceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Preview.DeployedDevices.FleetContext.DeviceList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.deploymentSid] -
   *          Find all Devices grouped under the specified Deployment.
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no page_size is defined but a limit is defined,
   *         list() will attempt to read the limit with the most
   *         efficient page size, i.e. min(limit, 1000)
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  DeviceListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource, done) {
      allResources.push(resource);

      if (!_.isUndefined(opts.limit) && allResources.length === opts.limit) {
        done();
      }
    };

    opts.done = function(error) {
      if (_.isUndefined(error)) {
        deferred.resolve(allResources);
      } else {
        deferred.reject(error);
      }
    };

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    this.each(opts);
    return deferred.promise;
  };
  /* jshint ignore:start */
  /**
   * Retrieve a single page of DeviceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Preview.DeployedDevices.FleetContext.DeviceList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.deploymentSid] -
   *          Find all Devices grouped under the specified Deployment.
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  DeviceListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'DeploymentSid': _.get(opts, 'deploymentSid'),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new DevicePage(this._version, payload, this._solution));
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

/**
 * Options to pass to update
 *
 * @property friendlyName - A human readable description for this Device.
 * @property identity - An identifier of the Device user.
 * @property deploymentSid - The unique SID of the Deployment group.
 * @property enabled - The enabled
 */
export interface UpdateOptions {
  deploymentSid?: string;
  enabled?: boolean;
  friendlyName?: string;
  identity?: string;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - A human readable description for this Device.
 * @property identity - An identifier of the Device user.
 * @property deploymentSid - The unique SID of the Deployment group.
 * @property enabled - The enabled
 */
export interface UpdateOptions {
  deploymentSid?: string;
  enabled?: boolean;
  friendlyName?: string;
  identity?: string;
}


declare class DevicePage extends Page {
  /**
   * @constructor Twilio.Preview.DeployedDevices.FleetContext.DevicePage
   * @augments Page
   * @description Initialize the DevicePage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.DeployedDevices, response: object, solution: object);

  /**
   * Build an instance of DeviceInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.DeployedDevices.FleetContext.DevicePage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class DeviceInstance {
  /**
   * @constructor Twilio.Preview.DeployedDevices.FleetContext.DeviceInstance
   * @description Initialize the DeviceContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - A string that uniquely identifies this Device.
   * @property url - URL of this Device.
   * @property uniqueName - A unique, addressable name of this Device.
   * @property friendlyName - A human readable description for this Device
   * @property fleetSid - The unique identifier of the Fleet.
   * @property enabled - Device enabled flag.
   * @property accountSid - The unique SID that identifies this Account.
   * @property identity - An identifier of the Device user.
   * @property deploymentSid - The unique SID of the Deployment group.
   * @property dateCreated - The date this Device was created.
   * @property dateUpdated - The date this Device was updated.
   * @property dateAuthenticated - The date this Device was authenticated.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param fleetSid - The unique identifier of the Fleet.
   * @param sid - A string that uniquely identifies the Device.
   */
  constructor(version: Twilio.Preview.DeployedDevices, payload: object, fleetSid: sid_like, sid: sid_like);

  _proxy?: DeviceContext;
  /**
   * fetch a DeviceInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.DeployedDevices.FleetContext.DeviceInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a DeviceInstance
   *
   * @function remove
   * @memberof Twilio.Preview.DeployedDevices.FleetContext.DeviceInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the DeviceInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.DeployedDevices.FleetContext.DeviceInstance
   * @instance
   */
  toJSON();
  /**
   * update a DeviceInstance
   *
   * @function update
   * @memberof Twilio.Preview.DeployedDevices.FleetContext.DeviceInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class DeviceContext {
  /**
   * @constructor Twilio.Preview.DeployedDevices.FleetContext.DeviceContext
   * @description Initialize the DeviceContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param fleetSid - The fleet_sid
   * @param sid - A string that uniquely identifies the Device.
   */
  constructor(version: Twilio.Preview.DeployedDevices, fleetSid: sid_like, sid: sid_like);

  /**
   * fetch a DeviceInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.DeployedDevices.FleetContext.DeviceContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a DeviceInstance
   *
   * @function remove
   * @memberof Twilio.Preview.DeployedDevices.FleetContext.DeviceContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a DeviceInstance
   *
   * @function update
   * @memberof Twilio.Preview.DeployedDevices.FleetContext.DeviceContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { DeviceContext, DeviceInstance, DeviceList, DeviceListInstance, DevicePage }
