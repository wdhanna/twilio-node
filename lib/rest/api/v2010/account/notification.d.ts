/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import V2010 = require('../../V2010');
import deserialize = require('../../../../base/deserialize');
import serialize = require('../../../../base/serialize');
import values = require('../../../../base/values');

/**
 * @description Initialize the NotificationList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique sid that identifies this account
 */
declare function NotificationList(version: V2010, accountSid: string): NotificationListInstance;

interface NotificationListInstance {
  /* jshint ignore:start */
  /**
   * Streams NotificationInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.NotificationList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {number} [opts.log] - Filter by log level
   * @param {Date} [opts.messageDateBefore] - Filter by date
   * @param {Date} [opts.messageDate] - Filter by date
   * @param {Date} [opts.messageDateAfter] - Filter by date
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
  NotificationListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of NotificationInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.NotificationList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  NotificationListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new NotificationPage(this._version, payload, this._solution));
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
   * @description Lists NotificationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.NotificationList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {number} [opts.log] - Filter by log level
   * @param {Date} [opts.messageDateBefore] - Filter by date
   * @param {Date} [opts.messageDate] - Filter by date
   * @param {Date} [opts.messageDateAfter] - Filter by date
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
  NotificationListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of NotificationInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.NotificationList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {number} [opts.log] - Filter by log level
   * @param {Date} [opts.messageDateBefore] - Filter by date
   * @param {Date} [opts.messageDate] - Filter by date
   * @param {Date} [opts.messageDateAfter] - Filter by date
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  NotificationListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Log': _.get(opts, 'log'),
      'MessageDate<': serialize.iso8601Date(_.get(opts, 'messageDateBefore')),
      'MessageDate': serialize.iso8601Date(_.get(opts, 'messageDate')),
      'MessageDate>': serialize.iso8601Date(_.get(opts, 'messageDateAfter')),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new NotificationPage(this._version, payload, this._solution));
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


declare class NotificationPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.NotificationPage
   * @augments Page
   * @description Initialize the NotificationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of NotificationInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.NotificationPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class NotificationInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.NotificationInstance
   * @description Initialize the NotificationContext
   *
   * @property accountSid - The unique sid that identifies this account
   * @property apiVersion - The version of the Twilio API in use
   * @property callSid - The string that uniquely identifies the call
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property errorCode - A unique error code corresponding to the notification
   * @property log - An integer log level
   * @property messageDate - The date the notification was generated
   * @property messageText - The text of the notification.
   * @property moreInfo - A URL for more information about the error code
   * @property requestMethod - HTTP method used with the request url
   * @property requestUrl - URL of the resource that generated the notification
   * @property requestVariables - Twilio-generated HTTP variables sent to the server
   * @property responseBody - The HTTP body returned by your server.
   * @property responseHeaders - The HTTP headers returned by your server.
   * @property sid - A string that uniquely identifies this notification
   * @property uri - The URI for this resource
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique sid that identifies this account
   * @param sid - Fetch by unique notification Sid
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, sid: sid);

  _proxy?: NotificationContext;
  /**
   * fetch a NotificationInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.NotificationInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a NotificationInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.NotificationInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the NotificationInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.NotificationInstance
   * @instance
   */
  toJSON();
}


declare class NotificationContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.NotificationContext
   * @description Initialize the NotificationContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique notification Sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, sid: sid);

  /**
   * fetch a NotificationInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.NotificationContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a NotificationInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.NotificationContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { NotificationContext, NotificationInstance, NotificationList, NotificationListInstance, NotificationPage }
