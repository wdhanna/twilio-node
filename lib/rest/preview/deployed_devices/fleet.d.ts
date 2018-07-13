/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import DeployedDevices = require('../DeployedDevices');
import Page = require('../../../base/Page');
import { CertificateList } from './fleet/certificate';
import { DeploymentList } from './fleet/deployment';
import { DeviceList } from './fleet/device';
import { KeyList } from './fleet/key';
import { ListEachOptions, ListOptions, PageOptions } from '../../../interfaces';
import { SerializableClass } from '../../../interfaces';

/**
 * @description Initialize the FleetList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function FleetList(version: DeployedDevices): FleetListInstance;

interface FleetListInstance {
  /* jshint ignore:start */
  /**
   * create a FleetInstance
   *
   * @function create
   * @memberof Twilio.Preview.DeployedDevices.FleetList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.friendlyName] -
   *          A human readable description for this Fleet.
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed FleetInstance
   */
  /* jshint ignore:end */
  FleetListInstance.create = function create(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({'FriendlyName': _.get(opts, 'friendlyName')});

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new FleetInstance(this._version, payload, this._solution.sid));
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
   * Streams FleetInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Preview.DeployedDevices.FleetList
   * @instance
   *
   * @param {object} [opts] - ...
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
  FleetListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of FleetInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Preview.DeployedDevices.FleetList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  FleetListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new FleetPage(this._version, payload, this._solution));
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
   * @description Lists FleetInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Preview.DeployedDevices.FleetList
   * @instance
   *
   * @param {object} [opts] - ...
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
  FleetListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of FleetInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Preview.DeployedDevices.FleetList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  FleetListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new FleetPage(this._version, payload, this._solution));
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

export { FleetContext, FleetInstance, FleetList, FleetListInstance, FleetPage }
