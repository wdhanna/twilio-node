/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../../base/Page');
import V2010 = require('../../../../V2010');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../../interfaces';
import { SerializableClass } from '../../../../../../interfaces';

/**
 * @description Initialize the AssignedAddOnExtensionList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param accountSid - The Account id that has installed this Add-on
 * @param resourceSid - The Phone Number id that has installed this Add-on
 * @param assignedAddOnSid - A string that uniquely identifies the assigned Add-on installation
 */
declare function AssignedAddOnExtensionList(version: V2010, accountSid: string, resourceSid: string, assignedAddOnSid: string): AssignedAddOnExtensionListInstance;

interface AssignedAddOnExtensionResource {
  account_sid: string;
  assigned_add_on_sid: string;
  enabled: boolean;
  friendly_name: string;
  product_name: string;
  resource_sid: string;
  sid: string;
  unique_name: string;
  uri: string;
}

interface AssignedAddOnExtensionListInstance {
  /* jshint ignore:start */
  /**
   * Streams AssignedAddOnExtensionInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.AssignedAddOnContext.AssignedAddOnExtensionList
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
  AssignedAddOnExtensionListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of AssignedAddOnExtensionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.AssignedAddOnContext.AssignedAddOnExtensionList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  AssignedAddOnExtensionListInstance.getPage = function getPage(targetUrl,
      callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new AssignedAddOnExtensionPage(this._version, payload, this._solution));
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
   * @description Lists AssignedAddOnExtensionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.AssignedAddOnContext.AssignedAddOnExtensionList
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
  AssignedAddOnExtensionListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of AssignedAddOnExtensionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.AssignedAddOnContext.AssignedAddOnExtensionList
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
  AssignedAddOnExtensionListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new AssignedAddOnExtensionPage(this._version, payload, this._solution));
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


declare class AssignedAddOnExtensionPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.AssignedAddOnContext.AssignedAddOnExtensionPage
   * @augments Page
   * @description Initialize the AssignedAddOnExtensionPage
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of AssignedAddOnExtensionInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.AssignedAddOnContext.AssignedAddOnExtensionPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class AssignedAddOnExtensionInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.AssignedAddOnContext.AssignedAddOnExtensionInstance
   * @description Initialize the AssignedAddOnExtensionContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - A string that uniquely identifies this Extension
   * @property accountSid - The Account id that has installed this Add-on
   * @property resourceSid - The Phone Number id that has installed this Add-on
   * @property assignedAddOnSid - A string that uniquely identifies the assigned Add-on installation
   * @property friendlyName - A human-readable description of this Extension
   * @property productName - A human-readable description of the Extension's Product
   * @property uniqueName - The string that uniquely identifies this Extension
   * @property uri - The uri
   * @property enabled - A Boolean indicating if the Extension will be invoked
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The Account id that has installed this Add-on
   * @param resourceSid - The Phone Number id that has installed this Add-on
   * @param assignedAddOnSid - A string that uniquely identifies the assigned Add-on installation
   * @param sid - The unique Extension Sid
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, resourceSid: sid, assignedAddOnSid: sid, sid: sid);

  _proxy?: AssignedAddOnExtensionContext;
  /**
   * fetch a AssignedAddOnExtensionInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.AssignedAddOnContext.AssignedAddOnExtensionInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the AssignedAddOnExtensionInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.AssignedAddOnContext.AssignedAddOnExtensionInstance
   * @instance
   */
  toJSON();
}


declare class AssignedAddOnExtensionContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.AssignedAddOnContext.AssignedAddOnExtensionContext
   * @description Initialize the AssignedAddOnExtensionContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param resourceSid - The resource_sid
   * @param assignedAddOnSid - The assigned_add_on_sid
   * @param sid - The unique Extension Sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, resourceSid: sid, assignedAddOnSid: sid, sid: sid);

  /**
   * fetch a AssignedAddOnExtensionInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.AssignedAddOnContext.AssignedAddOnExtensionContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
}

export { AssignedAddOnExtensionContext, AssignedAddOnExtensionInstance, AssignedAddOnExtensionList, AssignedAddOnExtensionListInstance, AssignedAddOnExtensionPage, AssignedAddOnExtensionResource }
