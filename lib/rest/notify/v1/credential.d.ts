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

/**
 * @description Initialize the CredentialList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 */
declare function CredentialList(version: V1): CredentialListInstance;

interface CredentialListInstance {
  /* jshint ignore:start */
  /**
   * create a CredentialInstance
   *
   * @function create
   * @memberof Twilio.Notify.V1.CredentialList
   * @instance
   *
   * @param {object} opts - ...
   * @param {credential.push_service} opts.type -
   *          Credential type, one of "gcm", "fcm", or "apn"
   * @param {string} [opts.friendlyName] - Friendly name for stored credential
   * @param {string} [opts.certificate] -
   *          [APN only] URL encoded representation of the certificate.
   * @param {string} [opts.privateKey] -
   *          [APN only] URL encoded representation of the private key.
   * @param {boolean} [opts.sandbox] -
   *          [APN only] use this credential for sending to production or sandbox APNs
   * @param {string} [opts.apiKey] -
   *          [GCM only] This is the "Server key" of your project from Firebase console under Settings / Cloud messaging.
   * @param {string} [opts.secret] -
   *          [FCM only] This is the "Server key" of your project from Firebase console under Settings / Cloud messaging.
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed CredentialInstance
   */
  /* jshint ignore:end */
  CredentialListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.type)) {
      throw new Error('Required parameter "opts.type" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'Type': _.get(opts, 'type'),
      'FriendlyName': _.get(opts, 'friendlyName'),
      'Certificate': _.get(opts, 'certificate'),
      'PrivateKey': _.get(opts, 'privateKey'),
      'Sandbox': serialize.bool(_.get(opts, 'sandbox')),
      'ApiKey': _.get(opts, 'apiKey'),
      'Secret': _.get(opts, 'secret')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new CredentialInstance(this._version, payload, this._solution.sid));
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
   * Streams CredentialInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Notify.V1.CredentialList
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
  CredentialListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of CredentialInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Notify.V1.CredentialList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  CredentialListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new CredentialPage(this._version, payload, this._solution));
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
   * @description Lists CredentialInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Notify.V1.CredentialList
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
  CredentialListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of CredentialInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Notify.V1.CredentialList
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
  CredentialListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new CredentialPage(this._version, payload, this._solution));
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
 * @property friendlyName - Friendly name for stored credential
 * @property certificate - [APN only] URL encoded representation of the certificate.
 * @property privateKey - [APN only] URL encoded representation of the private key.
 * @property sandbox - [APN only] use this credential for sending to production or sandbox APNs
 * @property apiKey - [GCM only] This is the "Server key" of your project from Firebase console under Settings / Cloud messaging.
 * @property secret - [FCM only] This is the "Server key" of your project from Firebase console under Settings / Cloud messaging.
 */
export interface UpdateOptions {
  apiKey?: string;
  certificate?: string;
  friendlyName?: string;
  privateKey?: string;
  sandbox?: boolean;
  secret?: string;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - Friendly name for stored credential
 * @property certificate - [APN only] URL encoded representation of the certificate.
 * @property privateKey - [APN only] URL encoded representation of the private key.
 * @property sandbox - [APN only] use this credential for sending to production or sandbox APNs
 * @property apiKey - [GCM only] This is the "Server key" of your project from Firebase console under Settings / Cloud messaging.
 * @property secret - [FCM only] This is the "Server key" of your project from Firebase console under Settings / Cloud messaging.
 */
export interface UpdateOptions {
  apiKey?: string;
  certificate?: string;
  friendlyName?: string;
  privateKey?: string;
  sandbox?: boolean;
  secret?: string;
}


declare class CredentialPage extends Page {
  /**
   * @constructor Twilio.Notify.V1.CredentialPage
   * @augments Page
   * @description Initialize the CredentialPage
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Notify.V1, response: object, solution: object);

  /**
   * Build an instance of CredentialInstance
   *
   * @function getInstance
   * @memberof Twilio.Notify.V1.CredentialPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class CredentialInstance {
  /**
   * @constructor Twilio.Notify.V1.CredentialInstance
   * @description Initialize the CredentialContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - The sid
   * @property accountSid - The account_sid
   * @property friendlyName - Friendly name for stored credential
   * @property type - Credential type, one of "gcm", "fcm", or "apn"
   * @property sandbox - [APN only] use this credential for sending to production or sandbox APNs
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Twilio.Notify.V1, payload: object, sid: sid);

  _proxy?: CredentialContext;
  /**
   * fetch a CredentialInstance
   *
   * @function fetch
   * @memberof Twilio.Notify.V1.CredentialInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a CredentialInstance
   *
   * @function remove
   * @memberof Twilio.Notify.V1.CredentialInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the CredentialInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Notify.V1.CredentialInstance
   * @instance
   */
  toJSON();
  /**
   * update a CredentialInstance
   *
   * @function update
   * @memberof Twilio.Notify.V1.CredentialInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class CredentialContext {
  /**
   * @constructor Twilio.Notify.V1.CredentialContext
   * @description Initialize the CredentialContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.Notify.V1, sid: sid);

  /**
   * fetch a CredentialInstance
   *
   * @function fetch
   * @memberof Twilio.Notify.V1.CredentialContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a CredentialInstance
   *
   * @function remove
   * @memberof Twilio.Notify.V1.CredentialContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a CredentialInstance
   *
   * @function update
   * @memberof Twilio.Notify.V1.CredentialContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { CredentialContext, CredentialInstance, CredentialList, CredentialListInstance, CredentialPage }
