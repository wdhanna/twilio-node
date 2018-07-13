/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import V2010 = require('../../V2010');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the OutgoingCallerIdList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique sid that identifies this account
 */
declare function OutgoingCallerIdList(version: V2010, accountSid: string): OutgoingCallerIdListInstance;

export interface OutgoingCallerIdResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  phone_number: string;
  sid: string;
  uri: string;
}

interface OutgoingCallerIdListInstance {
  /* jshint ignore:start */
  /**
   * Streams OutgoingCallerIdInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.OutgoingCallerIdList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.phoneNumber] - Filter by phone number
   * @param {string} [opts.friendlyName] - Filter by friendly name
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
  OutgoingCallerIdListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of OutgoingCallerIdInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.OutgoingCallerIdList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  OutgoingCallerIdListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new OutgoingCallerIdPage(this._version, payload, this._solution));
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
   * @description Lists OutgoingCallerIdInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.OutgoingCallerIdList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.phoneNumber] - Filter by phone number
   * @param {string} [opts.friendlyName] - Filter by friendly name
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
  OutgoingCallerIdListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of OutgoingCallerIdInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.OutgoingCallerIdList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.phoneNumber] - Filter by phone number
   * @param {string} [opts.friendlyName] - Filter by friendly name
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  OutgoingCallerIdListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'PhoneNumber': _.get(opts, 'phoneNumber'),
      'FriendlyName': _.get(opts, 'friendlyName'),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new OutgoingCallerIdPage(this._version, payload, this._solution));
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
 * @property friendlyName - A human readable description of the caller ID
 */
export interface UpdateOptions {
  friendlyName?: string;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - A human readable description of the caller ID
 */
export interface UpdateOptions {
  friendlyName?: string;
}


declare class OutgoingCallerIdPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.OutgoingCallerIdPage
   * @augments Page
   * @description Initialize the OutgoingCallerIdPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of OutgoingCallerIdInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.OutgoingCallerIdPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class OutgoingCallerIdInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.OutgoingCallerIdInstance
   * @description Initialize the OutgoingCallerIdContext
   *
   * @property sid - A string that uniquely identifies this outgoing-caller-ids
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property friendlyName - A human readable description for this resource
   * @property accountSid - The unique sid that identifies this account
   * @property phoneNumber - The incoming phone number
   * @property uri - The URI for this resource
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique sid that identifies this account
   * @param sid - Fetch by unique outgoing-caller-id Sid
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, sid: sid);

  _proxy?: OutgoingCallerIdContext;
  /**
   * fetch a OutgoingCallerIdInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.OutgoingCallerIdInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a OutgoingCallerIdInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.OutgoingCallerIdInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the OutgoingCallerIdInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.OutgoingCallerIdInstance
   * @instance
   */
  toJSON();
  /**
   * update a OutgoingCallerIdInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.OutgoingCallerIdInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class OutgoingCallerIdContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.OutgoingCallerIdContext
   * @description Initialize the OutgoingCallerIdContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique outgoing-caller-id Sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, sid: sid);

  /**
   * fetch a OutgoingCallerIdInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.OutgoingCallerIdContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a OutgoingCallerIdInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.OutgoingCallerIdContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a OutgoingCallerIdInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.OutgoingCallerIdContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { OutgoingCallerIdContext, OutgoingCallerIdInstance, OutgoingCallerIdList, OutgoingCallerIdListInstance, OutgoingCallerIdPage, OutgoingCallerIdResource }
