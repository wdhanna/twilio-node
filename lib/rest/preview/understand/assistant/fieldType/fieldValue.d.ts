/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Understand = require('../../../Understand');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the FieldValueList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param assistantSid - The unique ID of the Assistant.
 * @param fieldTypeSid - The unique ID of the Field Type associated with this Field Value.
 */
declare function FieldValueList(version: Understand, assistantSid: string, fieldTypeSid: string): FieldValueListInstance;

interface FieldValueListInstance {
  /* jshint ignore:start */
  /**
   * create a FieldValueInstance
   *
   * @function create
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeContext.FieldValueList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.language - An ISO language-country string of the value.
   * @param {string} opts.value -
   *          A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
   * @param {string} [opts.synonymOf] -
   *          A value that indicates this field value is a synonym of. Empty if the value is not a synonym.
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed FieldValueInstance
   */
  /* jshint ignore:end */
  FieldValueListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.language)) {
      throw new Error('Required parameter "opts.language" missing.');
    }
    if (_.isUndefined(opts.value)) {
      throw new Error('Required parameter "opts.value" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'Language': _.get(opts, 'language'),
      'Value': _.get(opts, 'value'),
      'SynonymOf': _.get(opts, 'synonymOf')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new FieldValueInstance(
        this._version,
        payload,
        this._solution.assistantSid,
        this._solution.fieldTypeSid,
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
   * Streams FieldValueInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeContext.FieldValueList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.language] -
   *          An ISO language-country string of the value. For example: en-US
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
  FieldValueListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of FieldValueInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeContext.FieldValueList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  FieldValueListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new FieldValuePage(this._version, payload, this._solution));
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
   * @description Lists FieldValueInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeContext.FieldValueList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.language] -
   *          An ISO language-country string of the value. For example: en-US
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
  FieldValueListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of FieldValueInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeContext.FieldValueList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.language] -
   *          An ISO language-country string of the value. For example: en-US
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  FieldValueListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Language': _.get(opts, 'language'),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new FieldValuePage(this._version, payload, this._solution));
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


declare class FieldValuePage extends Page {
  /**
   * @constructor Twilio.Preview.Understand.AssistantContext.FieldTypeContext.FieldValuePage
   * @augments Page
   * @description Initialize the FieldValuePage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Understand, response: object, solution: object);

  /**
   * Build an instance of FieldValueInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeContext.FieldValuePage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class FieldValueInstance {
  /**
   * @constructor Twilio.Preview.Understand.AssistantContext.FieldTypeContext.FieldValueInstance
   * @description Initialize the FieldValueContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property accountSid - The unique ID of the Account that created this Field Value.
   * @property dateCreated - The date that this resource was created
   * @property dateUpdated - The date that this resource was last updated
   * @property fieldTypeSid - The unique ID of the Field Type associated with this Field Value.
   * @property language - An ISO language-country string of the value.
   * @property assistantSid - The unique ID of the Assistant.
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property value - The Field Value itself.
   * @property url - The url
   * @property synonymOf - A value that indicates this field value is a synonym of. Empty if the value is not a synonym.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param assistantSid - The unique ID of the Assistant.
   * @param fieldTypeSid - The unique ID of the Field Type associated with this Field Value.
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Understand, payload: object, assistantSid: sid, fieldTypeSid: sid, sid: sid_like);

  _proxy?: FieldValueContext;
  /**
   * fetch a FieldValueInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeContext.FieldValueInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a FieldValueInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeContext.FieldValueInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the FieldValueInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeContext.FieldValueInstance
   * @instance
   */
  toJSON();
}


declare class FieldValueContext {
  /**
   * @constructor Twilio.Preview.Understand.AssistantContext.FieldTypeContext.FieldValueContext
   * @description Initialize the FieldValueContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param assistantSid - The assistant_sid
   * @param fieldTypeSid - The field_type_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Understand, assistantSid: sid_like, fieldTypeSid: sid_like, sid: sid_like);

  /**
   * fetch a FieldValueInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeContext.FieldValueContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a FieldValueInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Understand.AssistantContext.FieldTypeContext.FieldValueContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { FieldValueContext, FieldValueInstance, FieldValueList, FieldValueListInstance, FieldValuePage }
