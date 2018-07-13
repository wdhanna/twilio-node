/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import V1 = require('../../V1');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the IpAccessControlListList
 *
 * @param version - Version of the resource
 * @param trunkSid - The unique sid that identifies the associated Trunk
 */
declare function IpAccessControlListList(version: V1, trunkSid: string): IpAccessControlListListInstance;

export interface IpAccessControlListResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  sid: string;
  trunk_sid: string;
  url: string;
}

interface IpAccessControlListListInstance {
  /* jshint ignore:start */
  /**
   * create a IpAccessControlListInstance
   *
   * @function create
   * @memberof Twilio.Trunking.V1.TrunkContext.IpAccessControlListList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.ipAccessControlListSid -
   *          The SID of the IP Access Control List that you want to associate with this trunk.
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed IpAccessControlListInstance
   */
  /* jshint ignore:end */
  IpAccessControlListListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.ipAccessControlListSid)) {
      throw new Error('Required parameter "opts.ipAccessControlListSid" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({'IpAccessControlListSid': _.get(opts, 'ipAccessControlListSid')});

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new IpAccessControlListInstance(
        this._version,
        payload,
        this._solution.trunkSid,
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
   * Streams IpAccessControlListInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Trunking.V1.TrunkContext.IpAccessControlListList
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
  IpAccessControlListListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of IpAccessControlListInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Trunking.V1.TrunkContext.IpAccessControlListList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  IpAccessControlListListInstance.getPage = function getPage(targetUrl, callback)
                                                              {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new IpAccessControlListPage(this._version, payload, this._solution));
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
   * @description Lists IpAccessControlListInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Trunking.V1.TrunkContext.IpAccessControlListList
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
  IpAccessControlListListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of IpAccessControlListInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Trunking.V1.TrunkContext.IpAccessControlListList
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
  IpAccessControlListListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new IpAccessControlListPage(this._version, payload, this._solution));
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


declare class IpAccessControlListPage extends Page {
  /**
   * @constructor Twilio.Trunking.V1.TrunkContext.IpAccessControlListPage
   * @augments Page
   * @description Initialize the IpAccessControlListPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Trunking.V1, response: object, solution: object);

  /**
   * Build an instance of IpAccessControlListInstance
   *
   * @function getInstance
   * @memberof Twilio.Trunking.V1.TrunkContext.IpAccessControlListPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class IpAccessControlListInstance {
  /**
   * @constructor Twilio.Trunking.V1.TrunkContext.IpAccessControlListInstance
   * @description Initialize the IpAccessControlListContext
   *
   * @property accountSid - The unique sid that identifies this account
   * @property sid - A string that uniquely identifies this resource
   * @property trunkSid - The unique sid that identifies the associated Trunk
   * @property friendlyName - A human readable description of this resource
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param trunkSid - The unique sid that identifies the associated Trunk
   * @param sid - The sid
   */
  constructor(version: Twilio.Trunking.V1, payload: object, trunkSid: sid, sid: sid);

  _proxy?: IpAccessControlListContext;
  /**
   * fetch a IpAccessControlListInstance
   *
   * @function fetch
   * @memberof Twilio.Trunking.V1.TrunkContext.IpAccessControlListInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a IpAccessControlListInstance
   *
   * @function remove
   * @memberof Twilio.Trunking.V1.TrunkContext.IpAccessControlListInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the IpAccessControlListInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Trunking.V1.TrunkContext.IpAccessControlListInstance
   * @instance
   */
  toJSON();
}


declare class IpAccessControlListContext {
  /**
   * @constructor Twilio.Trunking.V1.TrunkContext.IpAccessControlListContext
   * @description Initialize the IpAccessControlListContext
   *
   * @param version - Version of the resource
   * @param trunkSid - The trunk_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Trunking.V1, trunkSid: sid, sid: sid);

  /**
   * fetch a IpAccessControlListInstance
   *
   * @function fetch
   * @memberof Twilio.Trunking.V1.TrunkContext.IpAccessControlListContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a IpAccessControlListInstance
   *
   * @function remove
   * @memberof Twilio.Trunking.V1.TrunkContext.IpAccessControlListContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { IpAccessControlListContext, IpAccessControlListInstance, IpAccessControlListList, IpAccessControlListListInstance, IpAccessControlListPage, IpAccessControlListResource }
