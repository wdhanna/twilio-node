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
 * @description Initialize the PhoneNumberList
 *
 * @param version - Version of the resource
 * @param trunkSid - The trunk_sid
 */
declare function PhoneNumberList(version: V1, trunkSid: string): PhoneNumberListInstance;

export interface PhoneNumberResource {
  account_sid: string;
  address_requirements: PhoneNumberAddressRequirement;
  api_version: string;
  beta: boolean;
  capabilities: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  links: string;
  phone_number: string;
  sid: string;
  sms_application_sid: string;
  sms_fallback_method: string;
  sms_fallback_url: string;
  sms_method: string;
  sms_url: string;
  status_callback: string;
  status_callback_method: string;
  trunk_sid: string;
  url: string;
  voice_application_sid: string;
  voice_caller_id_lookup: boolean;
  voice_fallback_method: string;
  voice_fallback_url: string;
  voice_method: string;
  voice_url: string;
}

interface PhoneNumberListInstance {
  /* jshint ignore:start */
  /**
   * create a PhoneNumberInstance
   *
   * @function create
   * @memberof Twilio.Trunking.V1.TrunkContext.PhoneNumberList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.phoneNumberSid -
   *          The SID of the Incoming Phone Number that you want to associate with this trunk.
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed PhoneNumberInstance
   */
  /* jshint ignore:end */
  PhoneNumberListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.phoneNumberSid)) {
      throw new Error('Required parameter "opts.phoneNumberSid" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({'PhoneNumberSid': _.get(opts, 'phoneNumberSid')});

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new PhoneNumberInstance(
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
   * Streams PhoneNumberInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Trunking.V1.TrunkContext.PhoneNumberList
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
  PhoneNumberListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of PhoneNumberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Trunking.V1.TrunkContext.PhoneNumberList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  PhoneNumberListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new PhoneNumberPage(this._version, payload, this._solution));
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
   * @description Lists PhoneNumberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Trunking.V1.TrunkContext.PhoneNumberList
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
  PhoneNumberListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of PhoneNumberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Trunking.V1.TrunkContext.PhoneNumberList
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
  PhoneNumberListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new PhoneNumberPage(this._version, payload, this._solution));
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


declare class PhoneNumberPage extends Page {
  /**
   * @constructor Twilio.Trunking.V1.TrunkContext.PhoneNumberPage
   * @augments Page
   * @description Initialize the PhoneNumberPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Trunking.V1, response: object, solution: object);

  /**
   * Build an instance of PhoneNumberInstance
   *
   * @function getInstance
   * @memberof Twilio.Trunking.V1.TrunkContext.PhoneNumberPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class PhoneNumberInstance {
  /**
   * @constructor Twilio.Trunking.V1.TrunkContext.PhoneNumberInstance
   * @description Initialize the PhoneNumberContext
   *
   * @property accountSid - The account_sid
   * @property addressRequirements - The address_requirements
   * @property apiVersion - The api_version
   * @property beta - The beta
   * @property capabilities - The capabilities
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property friendlyName - The friendly_name
   * @property links - The links
   * @property phoneNumber - The phone_number
   * @property sid - The sid
   * @property smsApplicationSid - The sms_application_sid
   * @property smsFallbackMethod - The sms_fallback_method
   * @property smsFallbackUrl - The sms_fallback_url
   * @property smsMethod - The sms_method
   * @property smsUrl - The sms_url
   * @property statusCallback - The status_callback
   * @property statusCallbackMethod - The status_callback_method
   * @property trunkSid - The trunk_sid
   * @property url - The url
   * @property voiceApplicationSid - The voice_application_sid
   * @property voiceCallerIdLookup - The voice_caller_id_lookup
   * @property voiceFallbackMethod - The voice_fallback_method
   * @property voiceFallbackUrl - The voice_fallback_url
   * @property voiceMethod - The voice_method
   * @property voiceUrl - The voice_url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param trunkSid - The trunk_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Trunking.V1, payload: object, trunkSid: sid, sid: sid);

  _proxy?: PhoneNumberContext;
  /**
   * fetch a PhoneNumberInstance
   *
   * @function fetch
   * @memberof Twilio.Trunking.V1.TrunkContext.PhoneNumberInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a PhoneNumberInstance
   *
   * @function remove
   * @memberof Twilio.Trunking.V1.TrunkContext.PhoneNumberInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the PhoneNumberInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Trunking.V1.TrunkContext.PhoneNumberInstance
   * @instance
   */
  toJSON();
}


declare class PhoneNumberContext {
  /**
   * @constructor Twilio.Trunking.V1.TrunkContext.PhoneNumberContext
   * @description Initialize the PhoneNumberContext
   *
   * @param version - Version of the resource
   * @param trunkSid - The trunk_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Trunking.V1, trunkSid: sid, sid: sid);

  /**
   * fetch a PhoneNumberInstance
   *
   * @function fetch
   * @memberof Twilio.Trunking.V1.TrunkContext.PhoneNumberContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a PhoneNumberInstance
   *
   * @function remove
   * @memberof Twilio.Trunking.V1.TrunkContext.PhoneNumberContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { PhoneNumberContext, PhoneNumberInstance, PhoneNumberList, PhoneNumberListInstance, PhoneNumberPage, PhoneNumberResource }
