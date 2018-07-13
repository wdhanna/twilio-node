/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import V2010 = require('../../../V2010');
import deserialize = require('../../../../../base/deserialize');
import serialize = require('../../../../../base/serialize');
import values = require('../../../../../base/values');

/**
 * @description Initialize the MobileList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique sid that identifies this account
 */
declare function MobileList(version: V2010, accountSid: string): MobileListInstance;

interface MobileListInstance {
  /* jshint ignore:start */
  /**
   * create a MobileInstance
   *
   * @function create
   * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.MobileList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.phoneNumber - The phone number you want to purchase.
   * @param {string} [opts.apiVersion] -
   *          The Twilio REST API version to use for incoming calls made to this number.
   * @param {string} [opts.friendlyName] -
   *          A human readable description of the new incoming phone number.
   * @param {string} [opts.smsApplicationSid] -
   *          The 34 character sid of the application Twilio should use to handle SMSs sent to the new number.
   * @param {string} [opts.smsFallbackMethod] -
   *          The HTTP method that should be used to request the SmsFallbackUrl.
   * @param {string} [opts.smsFallbackUrl] -
   *          A URL that Twilio will request if an error occurs requesting or executing the TwiML defined by SmsUrl.
   * @param {string} [opts.smsMethod] -
   *          The HTTP method that should be used to request the SmsUrl.
   * @param {string} [opts.smsUrl] -
   *          The URL that Twilio should request when somebody sends an SMS to the phone number.
   * @param {string} [opts.statusCallback] -
   *          The URL that Twilio will request to pass status parameters to your application.
   * @param {string} [opts.statusCallbackMethod] -
   *          The HTTP method Twilio will use to make requests to the StatusCallback URL.
   * @param {string} [opts.voiceApplicationSid] -
   *          The 34 character sid of the application Twilio should use to handle phone calls to the new number.
   * @param {boolean} [opts.voiceCallerIdLookup] -
   *          Do a lookup of a caller's name from the CNAM database and post it to your app.
   * @param {string} [opts.voiceFallbackMethod] -
   *          The HTTP method that should be used to request the VoiceFallbackUrl.
   * @param {string} [opts.voiceFallbackUrl] -
   *          A URL that Twilio will request if an error occurs requesting or executing the TwiML at Url.
   * @param {string} [opts.voiceMethod] -
   *          The HTTP method that should be used to request the VoiceUrl.
   * @param {string} [opts.voiceUrl] -
   *          The URL that Twilio should request when somebody dials the new phone number.
   * @param {string} [opts.identitySid] - The identity_sid
   * @param {string} [opts.addressSid] -
   *          The 34 character sid of the address Twilio should associate with the number.
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed MobileInstance
   */
  /* jshint ignore:end */
  MobileListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.phoneNumber)) {
      throw new Error('Required parameter "opts.phoneNumber" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'PhoneNumber': _.get(opts, 'phoneNumber'),
      'ApiVersion': _.get(opts, 'apiVersion'),
      'FriendlyName': _.get(opts, 'friendlyName'),
      'SmsApplicationSid': _.get(opts, 'smsApplicationSid'),
      'SmsFallbackMethod': _.get(opts, 'smsFallbackMethod'),
      'SmsFallbackUrl': _.get(opts, 'smsFallbackUrl'),
      'SmsMethod': _.get(opts, 'smsMethod'),
      'SmsUrl': _.get(opts, 'smsUrl'),
      'StatusCallback': _.get(opts, 'statusCallback'),
      'StatusCallbackMethod': _.get(opts, 'statusCallbackMethod'),
      'VoiceApplicationSid': _.get(opts, 'voiceApplicationSid'),
      'VoiceCallerIdLookup': serialize.bool(_.get(opts, 'voiceCallerIdLookup')),
      'VoiceFallbackMethod': _.get(opts, 'voiceFallbackMethod'),
      'VoiceFallbackUrl': _.get(opts, 'voiceFallbackUrl'),
      'VoiceMethod': _.get(opts, 'voiceMethod'),
      'VoiceUrl': _.get(opts, 'voiceUrl'),
      'IdentitySid': _.get(opts, 'identitySid'),
      'AddressSid': _.get(opts, 'addressSid')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new MobileInstance(this._version, payload));
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
   * Streams MobileInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.MobileList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {boolean} [opts.beta] - Include phone numbers new to the Twilio platform.
   * @param {string} [opts.friendlyName] -
   *          Only show the incoming phone number resources with friendly names that exactly match this name.
   * @param {string} [opts.phoneNumber] -
   *          Only show the incoming phone number resources that match this pattern.
   * @param {string} [opts.origin] -
   *          Include phone numbers based on the origin, by default, phone numbers of all origin are included.
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
  MobileListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of MobileInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.MobileList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  MobileListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new MobilePage(this._version, payload, this._solution));
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
   * @description Lists MobileInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.MobileList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {boolean} [opts.beta] - Include phone numbers new to the Twilio platform.
   * @param {string} [opts.friendlyName] -
   *          Only show the incoming phone number resources with friendly names that exactly match this name.
   * @param {string} [opts.phoneNumber] -
   *          Only show the incoming phone number resources that match this pattern.
   * @param {string} [opts.origin] -
   *          Include phone numbers based on the origin, by default, phone numbers of all origin are included.
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
  MobileListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of MobileInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.MobileList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {boolean} [opts.beta] - Include phone numbers new to the Twilio platform.
   * @param {string} [opts.friendlyName] -
   *          Only show the incoming phone number resources with friendly names that exactly match this name.
   * @param {string} [opts.phoneNumber] -
   *          Only show the incoming phone number resources that match this pattern.
   * @param {string} [opts.origin] -
   *          Include phone numbers based on the origin, by default, phone numbers of all origin are included.
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  MobileListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Beta': serialize.bool(_.get(opts, 'beta')),
      'FriendlyName': _.get(opts, 'friendlyName'),
      'PhoneNumber': _.get(opts, 'phoneNumber'),
      'Origin': _.get(opts, 'origin'),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new MobilePage(this._version, payload, this._solution));
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


declare class MobilePage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.MobilePage
   * @augments Page
   * @description Initialize the MobilePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of MobileInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.MobilePage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class MobileInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.MobileInstance
   * @description Initialize the MobileContext
   *
   * @property accountSid - The unique id of the Account responsible for this phone number.
   * @property addressSid - The 34 character sid of the address associated with this number.
   * @property addressRequirements - This indicates whether the phone number requires you or your customer to have an Address registered with Twilio.
   * @property apiVersion - Calls to this phone number will start a new TwiML session with this API version.
   * @property beta - Phone numbers new to the Twilio platform are marked as beta.
   * @property capabilities - This is a set of boolean properties that indicate whether a phone number can receive calls or messages.
   * @property dateCreated - The date that this resource was created, given as GMT RFC 2822 format.
   * @property dateUpdated - The date that this resource was last updated, given as GMT RFC 2822 format.
   * @property friendlyName - A human readable descriptive text for this resource, up to 64 characters long.
   * @property identitySid - The identity_sid
   * @property phoneNumber - The incoming phone number.
   * @property origin - Twilio owned phone numbers are marked as twilio while hosted phone numbers are marked as hosted.
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property smsApplicationSid - The 34 character sid of the application Twilio should use to handle SMSs sent to this number.
   * @property smsFallbackMethod - The HTTP method Twilio will use when requesting the above URL.
   * @property smsFallbackUrl - The URL that Twilio will request if an error occurs retrieving or executing the TwiML from SmsUrl.
   * @property smsMethod - The HTTP method Twilio will use when making requests to the SmsUrl.
   * @property smsUrl - The URL Twilio will request when receiving an incoming SMS message to this number.
   * @property statusCallback - The URL that Twilio will request to pass status parameters to your application.
   * @property statusCallbackMethod - The HTTP method Twilio will use to make requests to the StatusCallback URL.
   * @property trunkSid - The 34 character sid of the Trunk Twilio should use to handle phone calls to this number.
   * @property uri - The URI for this resource, relative to https://api.
   * @property voiceApplicationSid - The 34 character sid of the application Twilio should use to handle phone calls to this number.
   * @property voiceCallerIdLookup - Look up the caller's caller-ID name from the CNAM database.
   * @property voiceFallbackMethod - The HTTP method Twilio will use when requesting the VoiceFallbackUrl.
   * @property voiceFallbackUrl - The URL that Twilio will request if an error occurs retrieving or executing the TwiML requested by Url.
   * @property voiceMethod - The HTTP method Twilio will use when requesting the above Url.
   * @property voiceUrl - The URL Twilio will request when this phone number receives a call.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique sid that identifies this account
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid);

  /**
   * Produce a plain JSON object version of the MobileInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.IncomingPhoneNumberContext.MobileInstance
   * @instance
   */
  toJSON();
}

export { MobileInstance, MobileList, MobileListInstance, MobilePage }
