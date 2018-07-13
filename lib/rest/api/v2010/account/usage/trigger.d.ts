/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import V2010 = require('../../../V2010');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the TriggerList
 *
 * @param version - Version of the resource
 * @param accountSid - A 34 character string that uniquely identifies this resource.
 */
declare function TriggerList(version: V2010, accountSid: string): TriggerListInstance;

interface TriggerResource {
  account_sid: string;
  api_version: string;
  callback_method: string;
  callback_url: string;
  current_value: string;
  date_created: Date;
  date_fired: Date;
  date_updated: Date;
  friendly_name: string;
  recurring: TriggerRecurring;
  sid: string;
  trigger_by: TriggerTriggerField;
  trigger_value: string;
  uri: string;
  usage_category: TriggerUsageCategory;
  usage_record_uri: string;
}

interface TriggerListInstance {
  /* jshint ignore:start */
  /**
   * create a TriggerInstance
   *
   * @function create
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.TriggerList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.callbackUrl -
   *          URL Twilio will request when the trigger fires
   * @param {string} opts.triggerValue - the value at which the trigger will fire
   * @param {trigger.usage_category} opts.usageCategory -
   *          The usage category the trigger watches
   * @param {string} [opts.callbackMethod] - HTTP method to use with callback_url
   * @param {string} [opts.friendlyName] -
   *          A user-specified, human-readable name for the trigger.
   * @param {trigger.recurring} [opts.recurring] - How this trigger recurs
   * @param {trigger.trigger_field} [opts.triggerBy] -
   *          The field in the UsageRecord that fires the trigger
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed TriggerInstance
   */
  /* jshint ignore:end */
  TriggerListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.callbackUrl)) {
      throw new Error('Required parameter "opts.callbackUrl" missing.');
    }
    if (_.isUndefined(opts.triggerValue)) {
      throw new Error('Required parameter "opts.triggerValue" missing.');
    }
    if (_.isUndefined(opts.usageCategory)) {
      throw new Error('Required parameter "opts.usageCategory" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'CallbackUrl': _.get(opts, 'callbackUrl'),
      'TriggerValue': _.get(opts, 'triggerValue'),
      'UsageCategory': _.get(opts, 'usageCategory'),
      'CallbackMethod': _.get(opts, 'callbackMethod'),
      'FriendlyName': _.get(opts, 'friendlyName'),
      'Recurring': _.get(opts, 'recurring'),
      'TriggerBy': _.get(opts, 'triggerBy')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new TriggerInstance(
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
   * Streams TriggerInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.TriggerList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {trigger.recurring} [opts.recurring] - Filter by recurring
   * @param {trigger.trigger_field} [opts.triggerBy] - Filter by trigger by
   * @param {trigger.usage_category} [opts.usageCategory] - Filter by Usage Category
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
  TriggerListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of TriggerInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.TriggerList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  TriggerListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new TriggerPage(this._version, payload, this._solution));
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
   * @description Lists TriggerInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.TriggerList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {trigger.recurring} [opts.recurring] - Filter by recurring
   * @param {trigger.trigger_field} [opts.triggerBy] - Filter by trigger by
   * @param {trigger.usage_category} [opts.usageCategory] - Filter by Usage Category
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
  TriggerListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of TriggerInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.TriggerList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {trigger.recurring} [opts.recurring] - Filter by recurring
   * @param {trigger.trigger_field} [opts.triggerBy] - Filter by trigger by
   * @param {trigger.usage_category} [opts.usageCategory] - Filter by Usage Category
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  TriggerListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Recurring': _.get(opts, 'recurring'),
      'TriggerBy': _.get(opts, 'triggerBy'),
      'UsageCategory': _.get(opts, 'usageCategory'),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new TriggerPage(this._version, payload, this._solution));
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
 * @property callbackMethod - HTTP method to use with callback_url
 * @property callbackUrl - URL Twilio will request when the trigger fires
 * @property friendlyName - A user-specified, human-readable name for the trigger.
 */
export interface UpdateOptions {
  callbackMethod?: string;
  callbackUrl?: string;
  friendlyName?: string;
}

/**
 * Options to pass to update
 *
 * @property callbackMethod - HTTP method to use with callback_url
 * @property callbackUrl - URL Twilio will request when the trigger fires
 * @property friendlyName - A user-specified, human-readable name for the trigger.
 */
export interface UpdateOptions {
  callbackMethod?: string;
  callbackUrl?: string;
  friendlyName?: string;
}


declare class TriggerPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.UsageContext.TriggerPage
   * @augments Page
   * @description Initialize the TriggerPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of TriggerInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.TriggerPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class TriggerInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.UsageContext.TriggerInstance
   * @description Initialize the TriggerContext
   *
   * @property accountSid - The account this trigger monitors.
   * @property apiVersion - The api_version
   * @property callbackMethod - HTTP method to use with callback_url
   * @property callbackUrl - URL Twilio will request when the trigger fires
   * @property currentValue - The current value of the field the trigger is watching.
   * @property dateCreated - The date this resource was created
   * @property dateFired - The date the trigger was last fired
   * @property dateUpdated - The date this resource was last updated
   * @property friendlyName - A user-specified, human-readable name for the trigger.
   * @property recurring - How this trigger recurs
   * @property sid - The trigger's unique Sid
   * @property triggerBy - The field in the UsageRecord that fires the trigger
   * @property triggerValue - the value at which the trigger will fire
   * @property uri - The URI for this resource
   * @property usageCategory - The usage category the trigger watches
   * @property usageRecordUri - The URI of the UsageRecord this trigger is watching
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - A 34 character string that uniquely identifies this resource.
   * @param sid - Fetch by unique usage-trigger Sid
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, sid: sid);

  _proxy?: TriggerContext;
  /**
   * fetch a TriggerInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.TriggerInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a TriggerInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.TriggerInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the TriggerInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.TriggerInstance
   * @instance
   */
  toJSON();
  /**
   * update a TriggerInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.TriggerInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class TriggerContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.UsageContext.TriggerContext
   * @description Initialize the TriggerContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique usage-trigger Sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, sid: sid);

  /**
   * fetch a TriggerInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.TriggerContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a TriggerInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.TriggerContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a TriggerInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.TriggerContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { TriggerContext, TriggerInstance, TriggerList, TriggerListInstance, TriggerPage, TriggerResource }
