/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import V1 = require('../V1');
import deserialize = require('../../../base/deserialize');
import serialize = require('../../../base/serialize');
import values = require('../../../base/values');
import { DocumentList } from './service/document';
import { SyncListList } from './service/syncList';
import { SyncMapList } from './service/syncMap';
import { SyncStreamList } from './service/syncStream';

/**
 * @description Initialize the ServiceList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 */
declare function ServiceList(version: V1): ServiceListInstance;

interface ServiceListInstance {
  /* jshint ignore:start */
  /**
   * create a ServiceInstance
   *
   * @function create
   * @memberof Twilio.Sync.V1.ServiceList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.friendlyName] -
   *          Human-readable name for this service instance
   * @param {string} [opts.webhookUrl] -
   *          A URL that will receive event updates when objects are manipulated.
   * @param {boolean} [opts.reachabilityWebhooksEnabled] -
   *          true or false - controls whether this instance fires webhooks when client endpoints connect to Sync
   * @param {boolean} [opts.aclEnabled] -
   *          true or false - determines whether token identities must be granted access to Sync objects via the Permissions API in this Service.
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed ServiceInstance
   */
  /* jshint ignore:end */
  ServiceListInstance.create = function create(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': _.get(opts, 'friendlyName'),
      'WebhookUrl': _.get(opts, 'webhookUrl'),
      'ReachabilityWebhooksEnabled': serialize.bool(_.get(opts, 'reachabilityWebhooksEnabled')),
      'AclEnabled': serialize.bool(_.get(opts, 'aclEnabled'))
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
   * @memberof Twilio.Sync.V1.ServiceList
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
   * @memberof Twilio.Sync.V1.ServiceList
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
   * @memberof Twilio.Sync.V1.ServiceList
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
   * @memberof Twilio.Sync.V1.ServiceList
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
 * @property webhookUrl - A URL that will receive event updates when objects are manipulated.
 * @property friendlyName - Human-readable name for this service instance
 * @property reachabilityWebhooksEnabled - True or false - controls whether this instance fires webhooks when client endpoints connect to Sync
 * @property aclEnabled - true or false - determines whether token identities must be granted access to Sync objects via the Permissions API in this Service.
 */
export interface UpdateOptions {
  aclEnabled?: boolean;
  friendlyName?: string;
  reachabilityWebhooksEnabled?: boolean;
  webhookUrl?: string;
}

/**
 * Options to pass to update
 *
 * @property webhookUrl - A URL that will receive event updates when objects are manipulated.
 * @property friendlyName - Human-readable name for this service instance
 * @property reachabilityWebhooksEnabled - True or false - controls whether this instance fires webhooks when client endpoints connect to Sync
 * @property aclEnabled - true or false - determines whether token identities must be granted access to Sync objects via the Permissions API in this Service.
 */
export interface UpdateOptions {
  aclEnabled?: boolean;
  friendlyName?: string;
  reachabilityWebhooksEnabled?: boolean;
  webhookUrl?: string;
}


declare class ServicePage extends Page {
  /**
   * @constructor Twilio.Sync.V1.ServicePage
   * @augments Page
   * @description Initialize the ServicePage
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Sync.V1, response: object, solution: object);

  /**
   * Build an instance of ServiceInstance
   *
   * @function getInstance
   * @memberof Twilio.Sync.V1.ServicePage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class ServiceInstance {
  /**
   * @constructor Twilio.Sync.V1.ServiceInstance
   * @description Initialize the ServiceContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - The sid
   * @property uniqueName - The unique_name
   * @property accountSid - The account_sid
   * @property friendlyName - Human-readable name for this service instance
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property url - The url
   * @property webhookUrl - A URL that will receive event updates when objects are manipulated.
   * @property reachabilityWebhooksEnabled - true or false - controls whether this instance fires webhooks when client endpoints connect to Sync
   * @property aclEnabled - true or false - determines whether token identities must be granted access to Sync objects via the Permissions API in this Service.
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Twilio.Sync.V1, payload: object, sid: sid_like);

  _proxy?: ServiceContext;
  /**
   * Access the documents
   *
   * @function documents
   * @memberof Twilio.Sync.V1.ServiceInstance
   * @instance
   */
  documents();
  /**
   * fetch a ServiceInstance
   *
   * @function fetch
   * @memberof Twilio.Sync.V1.ServiceInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a ServiceInstance
   *
   * @function remove
   * @memberof Twilio.Sync.V1.ServiceInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Access the syncLists
   *
   * @function syncLists
   * @memberof Twilio.Sync.V1.ServiceInstance
   * @instance
   */
  syncLists();
  /**
   * Access the syncMaps
   *
   * @function syncMaps
   * @memberof Twilio.Sync.V1.ServiceInstance
   * @instance
   */
  syncMaps();
  /**
   * Access the syncStreams
   *
   * @function syncStreams
   * @memberof Twilio.Sync.V1.ServiceInstance
   * @instance
   */
  syncStreams();
  /**
   * Produce a plain JSON object version of the ServiceInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Sync.V1.ServiceInstance
   * @instance
   */
  toJSON();
  /**
   * update a ServiceInstance
   *
   * @function update
   * @memberof Twilio.Sync.V1.ServiceInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class ServiceContext {
  /**
   * @constructor Twilio.Sync.V1.ServiceContext
   * @description Initialize the ServiceContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property documents - documents resource
   * @property syncLists - syncLists resource
   * @property syncMaps - syncMaps resource
   * @property syncStreams - syncStreams resource
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.Sync.V1, sid: sid_like);

  documents?: Twilio.Sync.V1.ServiceContext.DocumentList;
  /**
   * fetch a ServiceInstance
   *
   * @function fetch
   * @memberof Twilio.Sync.V1.ServiceContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a ServiceInstance
   *
   * @function remove
   * @memberof Twilio.Sync.V1.ServiceContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  syncLists?: Twilio.Sync.V1.ServiceContext.SyncListList;
  syncMaps?: Twilio.Sync.V1.ServiceContext.SyncMapList;
  syncStreams?: Twilio.Sync.V1.ServiceContext.SyncStreamList;
  /**
   * update a ServiceInstance
   *
   * @function update
   * @memberof Twilio.Sync.V1.ServiceContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { ServiceContext, ServiceInstance, ServiceList, ServiceListInstance, ServicePage }
