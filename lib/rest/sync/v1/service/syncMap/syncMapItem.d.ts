/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import V1 = require('../../../V1');
import deserialize = require('../../../../../base/deserialize');
import serialize = require('../../../../../base/serialize');
import values = require('../../../../../base/values');

/**
 * @description Initialize the SyncMapItemList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - The unique SID identifier of the Service Instance that hosts this Map object.
 * @param mapSid - The unique 34-character SID identifier of the Map containing this Item.
 */
declare function SyncMapItemList(version: V1, serviceSid: string, mapSid: string): SyncMapItemListInstance;

interface SyncMapItemListInstance {
  /* jshint ignore:start */
  /**
   * create a SyncMapItemInstance
   *
   * @function create
   * @memberof Twilio.Sync.V1.ServiceContext.SyncMapContext.SyncMapItemList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.key - The unique user-defined key of this Map Item.
   * @param {string} opts.data -
   *          Contains arbitrary user-defined, schema-less data that this Map Item stores, represented by a JSON object, up to 16KB.
   * @param {number} [opts.ttl] -
   *          Time-to-live of this Map in seconds, defaults to no expiration.
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed SyncMapItemInstance
   */
  /* jshint ignore:end */
  SyncMapItemListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.key)) {
      throw new Error('Required parameter "opts.key" missing.');
    }
    if (_.isUndefined(opts.data)) {
      throw new Error('Required parameter "opts.data" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'Key': _.get(opts, 'key'),
      'Data': serialize.object(_.get(opts, 'data')),
      'Ttl': _.get(opts, 'ttl')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new SyncMapItemInstance(
        this._version,
        payload,
        this._solution.serviceSid,
        this._solution.mapSid,
        this._solution.key
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
   * Streams SyncMapItemInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Sync.V1.ServiceContext.SyncMapContext.SyncMapItemList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {sync_map_item.query_result_order} [opts.order] -
   *          A string; asc or desc. Map Items are ordered lexicographically by Item key.
   * @param {string} [opts.from] - The Item key offset (including the specified key).
   * @param {sync_map_item.query_from_bound_type} [opts.bounds] - The bounds
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
  SyncMapItemListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of SyncMapItemInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Sync.V1.ServiceContext.SyncMapContext.SyncMapItemList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  SyncMapItemListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new SyncMapItemPage(this._version, payload, this._solution));
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
   * @description Lists SyncMapItemInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Sync.V1.ServiceContext.SyncMapContext.SyncMapItemList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {sync_map_item.query_result_order} [opts.order] -
   *          A string; asc or desc. Map Items are ordered lexicographically by Item key.
   * @param {string} [opts.from] - The Item key offset (including the specified key).
   * @param {sync_map_item.query_from_bound_type} [opts.bounds] - The bounds
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
  SyncMapItemListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of SyncMapItemInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Sync.V1.ServiceContext.SyncMapContext.SyncMapItemList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {sync_map_item.query_result_order} [opts.order] -
   *          A string; asc or desc. Map Items are ordered lexicographically by Item key.
   * @param {string} [opts.from] - The Item key offset (including the specified key).
   * @param {sync_map_item.query_from_bound_type} [opts.bounds] - The bounds
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  SyncMapItemListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Order': _.get(opts, 'order'),
      'From': _.get(opts, 'from'),
      'Bounds': _.get(opts, 'bounds'),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new SyncMapItemPage(this._version, payload, this._solution));
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

export { SyncMapItemContext, SyncMapItemInstance, SyncMapItemList, SyncMapItemListInstance, SyncMapItemPage }
