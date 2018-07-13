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
 * @description Initialize the SharedCostList
 *
 * @param version - Version of the resource
 * @param accountSid - The 34 character string that uniquely identifies your account.
 * @param countryCode - The ISO Country code to lookup phone numbers for.
 */
declare function SharedCostList(version: V2010, accountSid: string, countryCode: string): SharedCostListInstance;

interface SharedCostListInstance {
  /* jshint ignore:start */
  /**
   * Streams SharedCostInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.SharedCostList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {number} [opts.areaCode] - The area_code
   * @param {string} [opts.contains] - The contains
   * @param {boolean} [opts.smsEnabled] - The sms_enabled
   * @param {boolean} [opts.mmsEnabled] - The mms_enabled
   * @param {boolean} [opts.voiceEnabled] - The voice_enabled
   * @param {boolean} [opts.excludeAllAddressRequired] -
   *          The exclude_all_address_required
   * @param {boolean} [opts.excludeLocalAddressRequired] -
   *          The exclude_local_address_required
   * @param {boolean} [opts.excludeForeignAddressRequired] -
   *          The exclude_foreign_address_required
   * @param {boolean} [opts.beta] - The beta
   * @param {string} [opts.nearNumber] - The near_number
   * @param {string} [opts.nearLatLong] - The near_lat_long
   * @param {number} [opts.distance] - The distance
   * @param {string} [opts.inPostalCode] - The in_postal_code
   * @param {string} [opts.inRegion] - The in_region
   * @param {string} [opts.inRateCenter] - The in_rate_center
   * @param {string} [opts.inLata] - The in_lata
   * @param {string} [opts.inLocality] - The in_locality
   * @param {boolean} [opts.faxEnabled] - The fax_enabled
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
  SharedCostListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of SharedCostInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.SharedCostList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  SharedCostListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new SharedCostPage(this._version, payload, this._solution));
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
   * @description Lists SharedCostInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.SharedCostList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {number} [opts.areaCode] - The area_code
   * @param {string} [opts.contains] - The contains
   * @param {boolean} [opts.smsEnabled] - The sms_enabled
   * @param {boolean} [opts.mmsEnabled] - The mms_enabled
   * @param {boolean} [opts.voiceEnabled] - The voice_enabled
   * @param {boolean} [opts.excludeAllAddressRequired] -
   *          The exclude_all_address_required
   * @param {boolean} [opts.excludeLocalAddressRequired] -
   *          The exclude_local_address_required
   * @param {boolean} [opts.excludeForeignAddressRequired] -
   *          The exclude_foreign_address_required
   * @param {boolean} [opts.beta] - The beta
   * @param {string} [opts.nearNumber] - The near_number
   * @param {string} [opts.nearLatLong] - The near_lat_long
   * @param {number} [opts.distance] - The distance
   * @param {string} [opts.inPostalCode] - The in_postal_code
   * @param {string} [opts.inRegion] - The in_region
   * @param {string} [opts.inRateCenter] - The in_rate_center
   * @param {string} [opts.inLata] - The in_lata
   * @param {string} [opts.inLocality] - The in_locality
   * @param {boolean} [opts.faxEnabled] - The fax_enabled
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
  SharedCostListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of SharedCostInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.SharedCostList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {number} [opts.areaCode] - The area_code
   * @param {string} [opts.contains] - The contains
   * @param {boolean} [opts.smsEnabled] - The sms_enabled
   * @param {boolean} [opts.mmsEnabled] - The mms_enabled
   * @param {boolean} [opts.voiceEnabled] - The voice_enabled
   * @param {boolean} [opts.excludeAllAddressRequired] -
   *          The exclude_all_address_required
   * @param {boolean} [opts.excludeLocalAddressRequired] -
   *          The exclude_local_address_required
   * @param {boolean} [opts.excludeForeignAddressRequired] -
   *          The exclude_foreign_address_required
   * @param {boolean} [opts.beta] - The beta
   * @param {string} [opts.nearNumber] - The near_number
   * @param {string} [opts.nearLatLong] - The near_lat_long
   * @param {number} [opts.distance] - The distance
   * @param {string} [opts.inPostalCode] - The in_postal_code
   * @param {string} [opts.inRegion] - The in_region
   * @param {string} [opts.inRateCenter] - The in_rate_center
   * @param {string} [opts.inLata] - The in_lata
   * @param {string} [opts.inLocality] - The in_locality
   * @param {boolean} [opts.faxEnabled] - The fax_enabled
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  SharedCostListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'AreaCode': _.get(opts, 'areaCode'),
      'Contains': _.get(opts, 'contains'),
      'SmsEnabled': serialize.bool(_.get(opts, 'smsEnabled')),
      'MmsEnabled': serialize.bool(_.get(opts, 'mmsEnabled')),
      'VoiceEnabled': serialize.bool(_.get(opts, 'voiceEnabled')),
      'ExcludeAllAddressRequired': serialize.bool(_.get(opts, 'excludeAllAddressRequired')),
      'ExcludeLocalAddressRequired': serialize.bool(_.get(opts, 'excludeLocalAddressRequired')),
      'ExcludeForeignAddressRequired': serialize.bool(_.get(opts, 'excludeForeignAddressRequired')),
      'Beta': serialize.bool(_.get(opts, 'beta')),
      'NearNumber': _.get(opts, 'nearNumber'),
      'NearLatLong': _.get(opts, 'nearLatLong'),
      'Distance': _.get(opts, 'distance'),
      'InPostalCode': _.get(opts, 'inPostalCode'),
      'InRegion': _.get(opts, 'inRegion'),
      'InRateCenter': _.get(opts, 'inRateCenter'),
      'InLata': _.get(opts, 'inLata'),
      'InLocality': _.get(opts, 'inLocality'),
      'FaxEnabled': serialize.bool(_.get(opts, 'faxEnabled')),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new SharedCostPage(this._version, payload, this._solution));
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


declare class SharedCostPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.SharedCostPage
   * @augments Page
   * @description Initialize the SharedCostPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of SharedCostInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.SharedCostPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class SharedCostInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.SharedCostInstance
   * @description Initialize the SharedCostContext
   *
   * @property friendlyName - The friendly_name
   * @property phoneNumber - The phone_number
   * @property lata - The lata
   * @property locality - The locality
   * @property rateCenter - The rate_center
   * @property latitude - The latitude
   * @property longitude - The longitude
   * @property region - The region
   * @property postalCode - The postal_code
   * @property isoCountry - The iso_country
   * @property addressRequirements - The address_requirements
   * @property beta - The beta
   * @property capabilities - The capabilities
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The 34 character string that uniquely identifies your account.
   * @param countryCode - The ISO Country code to lookup phone numbers for.
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: account_sid, countryCode: iso_country_code);

  /**
   * Produce a plain JSON object version of the SharedCostInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.SharedCostInstance
   * @instance
   */
  toJSON();
}

export { SharedCostInstance, SharedCostList, SharedCostListInstance, SharedCostPage }
