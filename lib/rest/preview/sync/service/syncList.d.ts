/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Sync = require('../../Sync');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { SerializableClass } from '../../../../interfaces';
import { SyncListItemList } from './syncList/syncListItem';
import { SyncListPermissionList } from './syncList/syncListPermission';

/**
 * @description Initialize the SyncListList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param serviceSid - The service_sid
 */
declare function SyncListList(version: Sync, serviceSid: string): SyncListListInstance;

interface SyncListListInstance {
  /* jshint ignore:start */
  /**
   * create a SyncListInstance
   *
   * @function create
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.uniqueName] - The unique_name
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed SyncListInstance
   */
  /* jshint ignore:end */
  SyncListListInstance.create = function create(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({'UniqueName': _.get(opts, 'uniqueName')});

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new SyncListInstance(
        this._version,
        payload,
        this._solution.serviceSid,
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
   * Streams SyncListInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListList
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
  SyncListListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of SyncListInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  SyncListListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new SyncListPage(this._version, payload, this._solution));
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
   * @description Lists SyncListInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListList
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
  SyncListListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of SyncListInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListList
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
  SyncListListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new SyncListPage(this._version, payload, this._solution));
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


declare class SyncListPage extends Page {
  /**
   * @constructor Twilio.Preview.Sync.ServiceContext.SyncListPage
   * @augments Page
   * @description Initialize the SyncListPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Sync, response: object, solution: object);

  /**
   * Build an instance of SyncListInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class SyncListInstance {
  /**
   * @constructor Twilio.Preview.Sync.ServiceContext.SyncListInstance
   * @description Initialize the SyncListContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - The sid
   * @property uniqueName - The unique_name
   * @property accountSid - The account_sid
   * @property serviceSid - The service_sid
   * @property url - The url
   * @property links - The links
   * @property revision - The revision
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property createdBy - The created_by
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Sync, payload: object, serviceSid: sid, sid: sid_like);

  _proxy?: SyncListContext;
  /**
   * fetch a SyncListInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a SyncListInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Access the syncListItems
   *
   * @function syncListItems
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListInstance
   * @instance
   */
  syncListItems();
  /**
   * Access the syncListPermissions
   *
   * @function syncListPermissions
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListInstance
   * @instance
   */
  syncListPermissions();
  /**
   * Produce a plain JSON object version of the SyncListInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListInstance
   * @instance
   */
  toJSON();
}


declare class SyncListContext {
  /**
   * @constructor Twilio.Preview.Sync.ServiceContext.SyncListContext
   * @description Initialize the SyncListContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property syncListItems - syncListItems resource
   * @property syncListPermissions - syncListPermissions resource
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Sync, serviceSid: sid, sid: sid_like);

  /**
   * fetch a SyncListInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a SyncListInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Sync.ServiceContext.SyncListContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  syncListItems?: Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListItemList;
  syncListPermissions?: Twilio.Preview.Sync.ServiceContext.SyncListContext.SyncListPermissionList;
}

export { SyncListContext, SyncListInstance, SyncListList, SyncListListInstance, SyncListPage }
