/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Marketplace = require('../../Marketplace');
import Page = require('../../../../base/Page');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the AvailableAddOnExtensionList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param availableAddOnSid - The available_add_on_sid
 */
declare function AvailableAddOnExtensionList(version: Marketplace, availableAddOnSid: string): AvailableAddOnExtensionListInstance;

interface AvailableAddOnExtensionListInstance {
  /* jshint ignore:start */
  /**
   * Streams AvailableAddOnExtensionInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Preview.Marketplace.AvailableAddOnContext.AvailableAddOnExtensionList
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
  AvailableAddOnExtensionListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of AvailableAddOnExtensionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Preview.Marketplace.AvailableAddOnContext.AvailableAddOnExtensionList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  AvailableAddOnExtensionListInstance.getPage = function getPage(targetUrl,
      callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new AvailableAddOnExtensionPage(this._version, payload, this._solution));
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
   * @description Lists AvailableAddOnExtensionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Preview.Marketplace.AvailableAddOnContext.AvailableAddOnExtensionList
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
  AvailableAddOnExtensionListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of AvailableAddOnExtensionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Preview.Marketplace.AvailableAddOnContext.AvailableAddOnExtensionList
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
  AvailableAddOnExtensionListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new AvailableAddOnExtensionPage(this._version, payload, this._solution));
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


declare class AvailableAddOnExtensionPage extends Page {
  /**
   * @constructor Twilio.Preview.Marketplace.AvailableAddOnContext.AvailableAddOnExtensionPage
   * @augments Page
   * @description Initialize the AvailableAddOnExtensionPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Marketplace, response: object, solution: object);

  /**
   * Build an instance of AvailableAddOnExtensionInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.Marketplace.AvailableAddOnContext.AvailableAddOnExtensionPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class AvailableAddOnExtensionInstance {
  /**
   * @constructor Twilio.Preview.Marketplace.AvailableAddOnContext.AvailableAddOnExtensionInstance
   * @description Initialize the AvailableAddOnExtensionContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - A string that uniquely identifies this Extension
   * @property availableAddOnSid - The available_add_on_sid
   * @property friendlyName - A human-readable description of this Extension
   * @property productName - A human-readable description of the Extension's Product
   * @property uniqueName - The string that uniquely identifies this Extension
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param availableAddOnSid - The available_add_on_sid
   * @param sid - The unique Extension Sid
   */
  constructor(version: Twilio.Preview.Marketplace, payload: object, availableAddOnSid: sid, sid: sid);

  _proxy?: AvailableAddOnExtensionContext;
  /**
   * fetch a AvailableAddOnExtensionInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Marketplace.AvailableAddOnContext.AvailableAddOnExtensionInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the AvailableAddOnExtensionInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.Marketplace.AvailableAddOnContext.AvailableAddOnExtensionInstance
   * @instance
   */
  toJSON();
}


declare class AvailableAddOnExtensionContext {
  /**
   * @constructor Twilio.Preview.Marketplace.AvailableAddOnContext.AvailableAddOnExtensionContext
   * @description Initialize the AvailableAddOnExtensionContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param availableAddOnSid - The available_add_on_sid
   * @param sid - The unique Extension Sid
   */
  constructor(version: Twilio.Preview.Marketplace, availableAddOnSid: sid, sid: sid);

  /**
   * fetch a AvailableAddOnExtensionInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Marketplace.AvailableAddOnContext.AvailableAddOnExtensionContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
}

export { AvailableAddOnExtensionContext, AvailableAddOnExtensionInstance, AvailableAddOnExtensionList, AvailableAddOnExtensionListInstance, AvailableAddOnExtensionPage }
