/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import V1 = require('../../../V1');
import serialize = require('../../../../../base/serialize');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the DocumentPermissionList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - Sync Service Instance SID.
 * @param documentSid - Sync Document SID.
 */
declare function DocumentPermissionList(version: V1, serviceSid: string, documentSid: string): DocumentPermissionListInstance;

interface DocumentPermissionResource {
  account_sid: string;
  document_sid: string;
  identity: string;
  manage: boolean;
  read: boolean;
  service_sid: string;
  url: string;
  write: boolean;
}

interface DocumentPermissionListInstance {
  /* jshint ignore:start */
  /**
   * Streams DocumentPermissionInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Sync.V1.ServiceContext.DocumentContext.DocumentPermissionList
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
  DocumentPermissionListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of DocumentPermissionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Sync.V1.ServiceContext.DocumentContext.DocumentPermissionList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  DocumentPermissionListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new DocumentPermissionPage(this._version, payload, this._solution));
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
   * @description Lists DocumentPermissionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Sync.V1.ServiceContext.DocumentContext.DocumentPermissionList
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
  DocumentPermissionListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of DocumentPermissionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Sync.V1.ServiceContext.DocumentContext.DocumentPermissionList
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
  DocumentPermissionListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new DocumentPermissionPage(this._version, payload, this._solution));
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
 * @property read - Read access.
 * @property write - Write access.
 * @property manage - Manage access.
 */
export interface UpdateOptions {
  manage: boolean;
  read: boolean;
  write: boolean;
}

/**
 * Options to pass to update
 *
 * @property read - Read access.
 * @property write - Write access.
 * @property manage - Manage access.
 */
export interface UpdateOptions {
  manage: boolean;
  read: boolean;
  write: boolean;
}


declare class DocumentPermissionPage extends Page {
  /**
   * @constructor Twilio.Sync.V1.ServiceContext.DocumentContext.DocumentPermissionPage
   * @augments Page
   * @description Initialize the DocumentPermissionPage
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Sync.V1, response: object, solution: object);

  /**
   * Build an instance of DocumentPermissionInstance
   *
   * @function getInstance
   * @memberof Twilio.Sync.V1.ServiceContext.DocumentContext.DocumentPermissionPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class DocumentPermissionInstance {
  /**
   * @constructor Twilio.Sync.V1.ServiceContext.DocumentContext.DocumentPermissionInstance
   * @description Initialize the DocumentPermissionContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property accountSid - Twilio Account SID.
   * @property serviceSid - Sync Service Instance SID.
   * @property documentSid - Sync Document SID.
   * @property identity - Identity of the user to whom the Sync Document Permission applies.
   * @property read - Read access.
   * @property write - Write access.
   * @property manage - Manage access.
   * @property url - URL of this Sync Document Permission.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Sync Service Instance SID.
   * @param documentSid - Sync Document SID.
   * @param identity - Identity of the user to whom the Sync Document Permission applies.
   */
  constructor(version: Twilio.Sync.V1, payload: object, serviceSid: sid, documentSid: sid, identity: string);

  _proxy?: DocumentPermissionContext;
  /**
   * fetch a DocumentPermissionInstance
   *
   * @function fetch
   * @memberof Twilio.Sync.V1.ServiceContext.DocumentContext.DocumentPermissionInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a DocumentPermissionInstance
   *
   * @function remove
   * @memberof Twilio.Sync.V1.ServiceContext.DocumentContext.DocumentPermissionInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the DocumentPermissionInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Sync.V1.ServiceContext.DocumentContext.DocumentPermissionInstance
   * @instance
   */
  toJSON();
  /**
   * update a DocumentPermissionInstance
   *
   * @function update
   * @memberof Twilio.Sync.V1.ServiceContext.DocumentContext.DocumentPermissionInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}


declare class DocumentPermissionContext {
  /**
   * @constructor Twilio.Sync.V1.ServiceContext.DocumentContext.DocumentPermissionContext
   * @description Initialize the DocumentPermissionContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param serviceSid - Sync Service Instance SID or unique name.
   * @param documentSid - Sync Document SID or unique name.
   * @param identity - Identity of the user to whom the Sync Document Permission applies.
   */
  constructor(version: Twilio.Sync.V1, serviceSid: sid_like, documentSid: sid_like, identity: string);

  /**
   * fetch a DocumentPermissionInstance
   *
   * @function fetch
   * @memberof Twilio.Sync.V1.ServiceContext.DocumentContext.DocumentPermissionContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a DocumentPermissionInstance
   *
   * @function remove
   * @memberof Twilio.Sync.V1.ServiceContext.DocumentContext.DocumentPermissionContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a DocumentPermissionInstance
   *
   * @function update
   * @memberof Twilio.Sync.V1.ServiceContext.DocumentContext.DocumentPermissionContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}

export { DocumentPermissionContext, DocumentPermissionInstance, DocumentPermissionList, DocumentPermissionListInstance, DocumentPermissionPage, DocumentPermissionResource }
