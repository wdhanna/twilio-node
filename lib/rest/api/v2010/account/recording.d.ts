/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import V2010 = require('../../V2010');
import serialize = require('../../../../base/serialize');
import { AddOnResultList } from './recording/addOnResult';
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { SerializableClass } from '../../../../interfaces';
import { TranscriptionList } from './recording/transcription';

/**
 * @description Initialize the RecordingList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique sid that identifies this account
 */
declare function RecordingList(version: V2010, accountSid: string): RecordingListInstance;

interface RecordingResource {
  account_sid: string;
  api_version: string;
  call_sid: string;
  channels: number;
  conference_sid: string;
  date_created: Date;
  date_updated: Date;
  duration: string;
  encryption_details: string;
  error_code: number;
  price: string;
  price_unit: string;
  sid: string;
  source: RecordingSource;
  start_time: Date;
  status: RecordingStatus;
  subresource_uris: string;
  uri: string;
}

interface RecordingListInstance {
  /* jshint ignore:start */
  /**
   * Streams RecordingInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.RecordingList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {Date} [opts.dateCreatedBefore] - Filter by date created
   * @param {Date} [opts.dateCreated] - Filter by date created
   * @param {Date} [opts.dateCreatedAfter] - Filter by date created
   * @param {string} [opts.callSid] - Filter by call_sid
   * @param {string} [opts.conferenceSid] - The conference_sid
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
  RecordingListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of RecordingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.RecordingList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  RecordingListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new RecordingPage(this._version, payload, this._solution));
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
   * @description Lists RecordingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.RecordingList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {Date} [opts.dateCreatedBefore] - Filter by date created
   * @param {Date} [opts.dateCreated] - Filter by date created
   * @param {Date} [opts.dateCreatedAfter] - Filter by date created
   * @param {string} [opts.callSid] - Filter by call_sid
   * @param {string} [opts.conferenceSid] - The conference_sid
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
  RecordingListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of RecordingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.RecordingList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {Date} [opts.dateCreatedBefore] - Filter by date created
   * @param {Date} [opts.dateCreated] - Filter by date created
   * @param {Date} [opts.dateCreatedAfter] - Filter by date created
   * @param {string} [opts.callSid] - Filter by call_sid
   * @param {string} [opts.conferenceSid] - The conference_sid
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  RecordingListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'DateCreated<': serialize.iso8601DateTime(_.get(opts, 'dateCreatedBefore')),
      'DateCreated': serialize.iso8601DateTime(_.get(opts, 'dateCreated')),
      'DateCreated>': serialize.iso8601DateTime(_.get(opts, 'dateCreatedAfter')),
      'CallSid': _.get(opts, 'callSid'),
      'ConferenceSid': _.get(opts, 'conferenceSid'),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new RecordingPage(this._version, payload, this._solution));
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


declare class RecordingPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.RecordingPage
   * @augments Page
   * @description Initialize the RecordingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of RecordingInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.RecordingPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class RecordingInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.RecordingInstance
   * @description Initialize the RecordingContext
   *
   * @property accountSid - The unique sid that identifies this account
   * @property apiVersion - The version of the API in use during the recording.
   * @property callSid - The unique id for the call leg that corresponds to the recording.
   * @property conferenceSid - The unique id for the conference associated with the recording, if a conference recording.
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property startTime - The start time of the recording, given in RFC 2822 format.
   * @property duration - The length of the recording, in seconds.
   * @property sid - A string that uniquely identifies this recording
   * @property price - The one-time cost of creating this recording.
   * @property priceUnit - The currency used in the Price property.
   * @property status - The status of the recording.
   * @property channels - The number of channels in the final recording file as an integer.
   * @property source - The way in which this recording was created.
   * @property errorCode - More information about the recording failure, if Status is failed.
   * @property uri - The URI for this resource
   * @property encryptionDetails - Details for how to decrypt the recording.
   * @property subresourceUris - The subresource_uris
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique sid that identifies this account
   * @param sid - Fetch by unique recording Sid
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, sid: sid);

  _proxy?: RecordingContext;
  /**
   * Access the addOnResults
   *
   * @function addOnResults
   * @memberof Twilio.Api.V2010.AccountContext.RecordingInstance
   * @instance
   */
  addOnResults();
  /**
   * fetch a RecordingInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.RecordingInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a RecordingInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.RecordingInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the RecordingInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.RecordingInstance
   * @instance
   */
  toJSON();
  /**
   * Access the transcriptions
   *
   * @function transcriptions
   * @memberof Twilio.Api.V2010.AccountContext.RecordingInstance
   * @instance
   */
  transcriptions();
}


declare class RecordingContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.RecordingContext
   * @description Initialize the RecordingContext
   *
   * @property transcriptions - transcriptions resource
   * @property addOnResults - addOnResults resource
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique recording Sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, sid: sid);

  addOnResults?: Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultList;
  /**
   * fetch a RecordingInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.RecordingContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a RecordingInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.RecordingContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  transcriptions?: Twilio.Api.V2010.AccountContext.RecordingContext.TranscriptionList;
}

export { RecordingContext, RecordingInstance, RecordingList, RecordingListInstance, RecordingPage, RecordingResource }
