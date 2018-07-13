/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import HostedNumbers = require('../../HostedNumbers');
import Page = require('../../../../base/Page');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the DependentHostedNumberOrderList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param signingDocumentSid - LOA document sid.
 */
declare function DependentHostedNumberOrderList(version: HostedNumbers, signingDocumentSid: string): DependentHostedNumberOrderListInstance;

interface DependentHostedNumberOrderListInstance {
  /* jshint ignore:start */
  /**
   * Streams DependentHostedNumberOrderInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Preview.HostedNumbers.AuthorizationDocumentContext.DependentHostedNumberOrderList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {dependent_hosted_number_order.status} [opts.status] -
   *          The Status of this HostedNumberOrder.
   * @param {string} [opts.phoneNumber] - An E164 formatted phone number.
   * @param {string} [opts.incomingPhoneNumberSid] - IncomingPhoneNumber sid.
   * @param {string} [opts.friendlyName] -
   *          A human readable description of this resource.
   * @param {string} [opts.uniqueName] -
   *          A unique, developer assigned name of this HostedNumberOrder.
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
  DependentHostedNumberOrderListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of DependentHostedNumberOrderInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Preview.HostedNumbers.AuthorizationDocumentContext.DependentHostedNumberOrderList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  DependentHostedNumberOrderListInstance.getPage = function getPage(targetUrl,
      callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new DependentHostedNumberOrderPage(this._version, payload, this._solution));
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
   * @description Lists DependentHostedNumberOrderInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Preview.HostedNumbers.AuthorizationDocumentContext.DependentHostedNumberOrderList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {dependent_hosted_number_order.status} [opts.status] -
   *          The Status of this HostedNumberOrder.
   * @param {string} [opts.phoneNumber] - An E164 formatted phone number.
   * @param {string} [opts.incomingPhoneNumberSid] - IncomingPhoneNumber sid.
   * @param {string} [opts.friendlyName] -
   *          A human readable description of this resource.
   * @param {string} [opts.uniqueName] -
   *          A unique, developer assigned name of this HostedNumberOrder.
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
  DependentHostedNumberOrderListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of DependentHostedNumberOrderInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Preview.HostedNumbers.AuthorizationDocumentContext.DependentHostedNumberOrderList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {dependent_hosted_number_order.status} [opts.status] -
   *          The Status of this HostedNumberOrder.
   * @param {string} [opts.phoneNumber] - An E164 formatted phone number.
   * @param {string} [opts.incomingPhoneNumberSid] - IncomingPhoneNumber sid.
   * @param {string} [opts.friendlyName] -
   *          A human readable description of this resource.
   * @param {string} [opts.uniqueName] -
   *          A unique, developer assigned name of this HostedNumberOrder.
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  DependentHostedNumberOrderListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Status': _.get(opts, 'status'),
      'PhoneNumber': _.get(opts, 'phoneNumber'),
      'IncomingPhoneNumberSid': _.get(opts, 'incomingPhoneNumberSid'),
      'FriendlyName': _.get(opts, 'friendlyName'),
      'UniqueName': _.get(opts, 'uniqueName'),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new DependentHostedNumberOrderPage(this._version, payload, this._solution));
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


declare class DependentHostedNumberOrderPage extends Page {
  /**
   * @constructor Twilio.Preview.HostedNumbers.AuthorizationDocumentContext.DependentHostedNumberOrderPage
   * @augments Page
   * @description Initialize the DependentHostedNumberOrderPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.HostedNumbers, response: object, solution: object);

  /**
   * Build an instance of DependentHostedNumberOrderInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.HostedNumbers.AuthorizationDocumentContext.DependentHostedNumberOrderPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class DependentHostedNumberOrderInstance {
  /**
   * @constructor Twilio.Preview.HostedNumbers.AuthorizationDocumentContext.DependentHostedNumberOrderInstance
   * @description Initialize the DependentHostedNumberOrderContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - HostedNumberOrder sid.
   * @property accountSid - Account sid.
   * @property incomingPhoneNumberSid - IncomingPhoneNumber sid.
   * @property addressSid - Address sid.
   * @property signingDocumentSid - LOA document sid.
   * @property phoneNumber - An E164 formatted phone number.
   * @property capabilities - A mapping of phone number capabilities.
   * @property friendlyName - A human readable description of this resource.
   * @property uniqueName - A unique, developer assigned name of this HostedNumberOrder.
   * @property status - The Status of this HostedNumberOrder.
   * @property failureReason - Why a hosted_number_order reached status "action-required"
   * @property dateCreated - The date this HostedNumberOrder was created.
   * @property dateUpdated - The date this HostedNumberOrder was updated.
   * @property verificationAttempts - The number of attempts made to verify ownership of the phone number.
   * @property email - Email.
   * @property ccEmails - A list of emails.
   * @property verificationType - The method used for verifying ownership of the number to be hosted.
   * @property verificationDocumentSid - Verification Document Sid.
   * @property extension - Phone extension to use for ownership verification call.
   * @property callDelay - Seconds (0-30) to delay ownership verification call by.
   * @property verificationCode - The digits passed during the ownership verification call.
   * @property verificationCallSids - List of IDs for ownership verification calls.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param signingDocumentSid - LOA document sid.
   */
  constructor(version: Twilio.Preview.HostedNumbers, payload: object, signingDocumentSid: sid);

  /**
   * Produce a plain JSON object version of the DependentHostedNumberOrderInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.HostedNumbers.AuthorizationDocumentContext.DependentHostedNumberOrderInstance
   * @instance
   */
  toJSON();
}

export { DependentHostedNumberOrderInstance, DependentHostedNumberOrderList, DependentHostedNumberOrderListInstance, DependentHostedNumberOrderPage }
