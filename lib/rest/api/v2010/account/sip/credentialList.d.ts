/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import V2010 = require('../../../V2010');
import { CredentialList } from './credentialList/credential';
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the CredentialListList
 *
 * @param version - Version of the resource
 * @param accountSid - A 34 character string that uniquely identifies this resource.
 */
declare function CredentialListList(version: V2010, accountSid: string): CredentialListListInstance;

interface CredentialListListInstance {
  /* jshint ignore:start */
  /**
   * create a CredentialListInstance
   *
   * @function create
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.CredentialListList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.friendlyName - Human readable descriptive text
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed CredentialListInstance
   */
  /* jshint ignore:end */
  CredentialListListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.friendlyName)) {
      throw new Error('Required parameter "opts.friendlyName" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({'FriendlyName': _.get(opts, 'friendlyName')});

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new CredentialListInstance(
        this._version,
        payload,
        this._solution.accountSid,
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
   * Streams CredentialListInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.CredentialListList
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
  CredentialListListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of CredentialListInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.CredentialListList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  CredentialListListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new CredentialListPage(this._version, payload, this._solution));
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
   * @description Lists CredentialListInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.CredentialListList
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
  CredentialListListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of CredentialListInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.CredentialListList
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
  CredentialListListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new CredentialListPage(this._version, payload, this._solution));
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
 * @property friendlyName - Human readable descriptive text
 */
export interface UpdateOptions {
  friendlyName: string;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - Human readable descriptive text
 */
export interface UpdateOptions {
  friendlyName: string;
}


declare class CredentialListPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.SipContext.CredentialListPage
   * @augments Page
   * @description Initialize the CredentialListPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of CredentialListInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.CredentialListPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class CredentialListInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.SipContext.CredentialListInstance
   * @description Initialize the CredentialListContext
   *
   * @property accountSid - The unique sid that identifies this account
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property friendlyName - Human readable descriptive text
   * @property sid - A string that uniquely identifies this credential
   * @property subresourceUris - The subresource_uris
   * @property uri - The URI for this resource
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - A 34 character string that uniquely identifies this resource.
   * @param sid - Fetch by unique credential list Sid
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, sid: sid);

  _proxy?: CredentialListContext;
  /**
   * Access the credentials
   *
   * @function credentials
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.CredentialListInstance
   * @instance
   */
  credentials();
  /**
   * fetch a CredentialListInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.CredentialListInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a CredentialListInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.CredentialListInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the CredentialListInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.CredentialListInstance
   * @instance
   */
  toJSON();
  /**
   * update a CredentialListInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.CredentialListInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}


declare class CredentialListContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.SipContext.CredentialListContext
   * @description Initialize the CredentialListContext
   *
   * @property credentials - credentials resource
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique credential list Sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, sid: sid);

  credentials?: Twilio.Api.V2010.AccountContext.SipContext.CredentialListContext.CredentialList;
  /**
   * fetch a CredentialListInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.CredentialListContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a CredentialListInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.CredentialListContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a CredentialListInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.CredentialListContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}

export { CredentialListContext, CredentialListInstance, CredentialListList, CredentialListListInstance, CredentialListPage }
