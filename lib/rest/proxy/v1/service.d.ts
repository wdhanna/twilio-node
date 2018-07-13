/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import V1 = require('../V1');
import { ListEachOptions, ListOptions, PageOptions } from '../../../interfaces';
import { PhoneNumberList } from './service/phoneNumber';
import { SerializableClass } from '../../../interfaces';
import { SessionList } from './service/session';
import { ShortCodeList } from './service/shortCode';

/**
 * @description Initialize the ServiceList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 */
declare function ServiceList(version: V1): ServiceListInstance;

interface ServiceResource {
  account_sid: string;
  callback_url: string;
  date_created: Date;
  date_updated: Date;
  default_ttl: number;
  geo_match_level: ServiceGeoMatchLevel;
  intercept_callback_url: string;
  links: string;
  number_selection_behavior: ServiceNumberSelectionBehavior;
  out_of_session_callback_url: string;
  sid: string;
  unique_name: string;
  url: string;
}

interface ServiceListInstance {
  /* jshint ignore:start */
  /**
   * create a ServiceInstance
   *
   * @function create
   * @memberof Twilio.Proxy.V1.ServiceList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.uniqueName -
   *          The human-readable string that uniquely identifies this Service.
   * @param {number} [opts.defaultTtl] -
   *          Default TTL for Sessions in Service, in seconds.
   * @param {string} [opts.callbackUrl] - URL Twilio will send callbacks to
   * @param {service.geo_match_level} [opts.geoMatchLevel] -
   *          Whether proxy number selected must be in the same area code as the participant identifier.
   * @param {service.number_selection_behavior} [opts.numberSelectionBehavior] -
   *          What behavior to use when choosing a proxy number.
   * @param {string} [opts.interceptCallbackUrl] -
   *          A URL for Twilio call before each Interaction.
   * @param {string} [opts.outOfSessionCallbackUrl] -
   *          A URL for Twilio call when a new Interaction has no Session.
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed ServiceInstance
   */
  /* jshint ignore:end */
  ServiceListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.uniqueName)) {
      throw new Error('Required parameter "opts.uniqueName" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'UniqueName': _.get(opts, 'uniqueName'),
      'DefaultTtl': _.get(opts, 'defaultTtl'),
      'CallbackUrl': _.get(opts, 'callbackUrl'),
      'GeoMatchLevel': _.get(opts, 'geoMatchLevel'),
      'NumberSelectionBehavior': _.get(opts, 'numberSelectionBehavior'),
      'InterceptCallbackUrl': _.get(opts, 'interceptCallbackUrl'),
      'OutOfSessionCallbackUrl': _.get(opts, 'outOfSessionCallbackUrl')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new ServiceInstance(this._version, payload, this._solution.sid));
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
   * Streams ServiceInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Proxy.V1.ServiceList
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
  ServiceListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Proxy.V1.ServiceList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ServiceListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new ServicePage(this._version, payload, this._solution));
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
   * @description Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Proxy.V1.ServiceList
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
  ServiceListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Proxy.V1.ServiceList
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
  ServiceListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new ServicePage(this._version, payload, this._solution));
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
 * @property uniqueName - A human-readable description of this resource.
 * @property defaultTtl - Default TTL for Sessions in Service, in seconds.
 * @property callbackUrl - URL Twilio will send callbacks to
 * @property geoMatchLevel - Whether proxy number selected must be in the same area code as the participant identifier.
 * @property numberSelectionBehavior - What behavior to use when choosing a proxy number.
 * @property interceptCallbackUrl - A URL for Twilio call before each Interaction.
 * @property outOfSessionCallbackUrl - A URL for Twilio call when a new Interaction has no Session.
 */
export interface UpdateOptions {
  callbackUrl?: string;
  defaultTtl?: number;
  geoMatchLevel?: service.geo_match_level;
  interceptCallbackUrl?: string;
  numberSelectionBehavior?: service.number_selection_behavior;
  outOfSessionCallbackUrl?: string;
  uniqueName?: string;
}

/**
 * Options to pass to update
 *
 * @property uniqueName - A human-readable description of this resource.
 * @property defaultTtl - Default TTL for Sessions in Service, in seconds.
 * @property callbackUrl - URL Twilio will send callbacks to
 * @property geoMatchLevel - Whether proxy number selected must be in the same area code as the participant identifier.
 * @property numberSelectionBehavior - What behavior to use when choosing a proxy number.
 * @property interceptCallbackUrl - A URL for Twilio call before each Interaction.
 * @property outOfSessionCallbackUrl - A URL for Twilio call when a new Interaction has no Session.
 */
export interface UpdateOptions {
  callbackUrl?: string;
  defaultTtl?: number;
  geoMatchLevel?: service.geo_match_level;
  interceptCallbackUrl?: string;
  numberSelectionBehavior?: service.number_selection_behavior;
  outOfSessionCallbackUrl?: string;
  uniqueName?: string;
}


declare class ServicePage extends Page {
  /**
   * @constructor Twilio.Proxy.V1.ServicePage
   * @augments Page
   * @description Initialize the ServicePage
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Proxy.V1, response: object, solution: object);

  /**
   * Build an instance of ServiceInstance
   *
   * @function getInstance
   * @memberof Twilio.Proxy.V1.ServicePage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class ServiceInstance {
  /**
   * @constructor Twilio.Proxy.V1.ServiceInstance
   * @description Initialize the ServiceContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - A string that uniquely identifies this Service.
   * @property uniqueName - A human-readable description of this resource.
   * @property accountSid - Account Sid.
   * @property callbackUrl - URL Twilio will send callbacks to
   * @property defaultTtl - Default TTL for a Session, in seconds.
   * @property numberSelectionBehavior - What behavior to use when choosing a proxy number.
   * @property geoMatchLevel - Whether proxy number selected must be in the same area code as the participant identifier.
   * @property interceptCallbackUrl - A URL for Twilio call before each Interaction.
   * @property outOfSessionCallbackUrl - A URL for Twilio call when a new Interaction has no Session.
   * @property dateCreated - The date this Service was created
   * @property dateUpdated - The date this Service was last updated
   * @property url - The URL of this resource.
   * @property links - Nested resource URLs.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - A string that uniquely identifies this Service.
   */
  constructor(version: Twilio.Proxy.V1, payload: object, sid: sid_like);

  _proxy?: ServiceContext;
  /**
   * fetch a ServiceInstance
   *
   * @function fetch
   * @memberof Twilio.Proxy.V1.ServiceInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the phoneNumbers
   *
   * @function phoneNumbers
   * @memberof Twilio.Proxy.V1.ServiceInstance
   * @instance
   */
  phoneNumbers();
  /**
   * remove a ServiceInstance
   *
   * @function remove
   * @memberof Twilio.Proxy.V1.ServiceInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Access the sessions
   *
   * @function sessions
   * @memberof Twilio.Proxy.V1.ServiceInstance
   * @instance
   */
  sessions();
  /**
   * Access the shortCodes
   *
   * @function shortCodes
   * @memberof Twilio.Proxy.V1.ServiceInstance
   * @instance
   */
  shortCodes();
  /**
   * Produce a plain JSON object version of the ServiceInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Proxy.V1.ServiceInstance
   * @instance
   */
  toJSON();
  /**
   * update a ServiceInstance
   *
   * @function update
   * @memberof Twilio.Proxy.V1.ServiceInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class ServiceContext {
  /**
   * @constructor Twilio.Proxy.V1.ServiceContext
   * @description Initialize the ServiceContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sessions - sessions resource
   * @property phoneNumbers - phoneNumbers resource
   * @property shortCodes - shortCodes resource
   *
   * @param version - Version of the resource
   * @param sid - A string that uniquely identifies this Service.
   */
  constructor(version: Twilio.Proxy.V1, sid: sid_like);

  /**
   * fetch a ServiceInstance
   *
   * @function fetch
   * @memberof Twilio.Proxy.V1.ServiceContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  phoneNumbers?: Twilio.Proxy.V1.ServiceContext.PhoneNumberList;
  /**
   * remove a ServiceInstance
   *
   * @function remove
   * @memberof Twilio.Proxy.V1.ServiceContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  sessions?: Twilio.Proxy.V1.ServiceContext.SessionList;
  shortCodes?: Twilio.Proxy.V1.ServiceContext.ShortCodeList;
  /**
   * update a ServiceInstance
   *
   * @function update
   * @memberof Twilio.Proxy.V1.ServiceContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { ServiceContext, ServiceInstance, ServiceList, ServiceListInstance, ServicePage, ServiceResource }
