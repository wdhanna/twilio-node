/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import V1 = require('../V1');
import serialize = require('../../../base/serialize');
import { ListEachOptions, ListOptions, PageOptions } from '../../../interfaces';
import { SerializableClass } from '../../../interfaces';

/**
 * @description Initialize the RecordingList
 *
 * @param version - Version of the resource
 */
declare function RecordingList(version: V1): RecordingListInstance;

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
   * @memberof Twilio.Video.V1.RecordingList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {recording.status} [opts.status] -
   *          Only show Recordings with the given status.
   * @param {string} [opts.sourceSid] -
   *          Only show the Recordings with the given source Sid.
   * @param {string|list} [opts.groupingSid] -
   *          Only show Recordings that have this GroupingSid.
   * @param {Date} [opts.dateCreatedAfter] -
   *          Only show Recordings that started on or after this ISO8601 date-time.
   * @param {Date} [opts.dateCreatedBefore] -
   *          Only show Recordings that started before this this ISO8601 date-time.
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
   * @memberof Twilio.Video.V1.RecordingList
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
   * @memberof Twilio.Video.V1.RecordingList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {recording.status} [opts.status] -
   *          Only show Recordings with the given status.
   * @param {string} [opts.sourceSid] -
   *          Only show the Recordings with the given source Sid.
   * @param {string|list} [opts.groupingSid] -
   *          Only show Recordings that have this GroupingSid.
   * @param {Date} [opts.dateCreatedAfter] -
   *          Only show Recordings that started on or after this ISO8601 date-time.
   * @param {Date} [opts.dateCreatedBefore] -
   *          Only show Recordings that started before this this ISO8601 date-time.
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
   * @memberof Twilio.Video.V1.RecordingList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {recording.status} [opts.status] -
   *          Only show Recordings with the given status.
   * @param {string} [opts.sourceSid] -
   *          Only show the Recordings with the given source Sid.
   * @param {string|list} [opts.groupingSid] -
   *          Only show Recordings that have this GroupingSid.
   * @param {Date} [opts.dateCreatedAfter] -
   *          Only show Recordings that started on or after this ISO8601 date-time.
   * @param {Date} [opts.dateCreatedBefore] -
   *          Only show Recordings that started before this this ISO8601 date-time.
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
      'Status': _.get(opts, 'status'),
      'SourceSid': _.get(opts, 'sourceSid'),
      'GroupingSid': serialize.map(_.get(opts, 'groupingSid'), function(e) { return e; }),
      'DateCreatedAfter': serialize.iso8601DateTime(_.get(opts, 'dateCreatedAfter')),
      'DateCreatedBefore': serialize.iso8601DateTime(_.get(opts, 'dateCreatedBefore')),
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
   * @constructor Twilio.Video.V1.RecordingPage
   * @augments Page
   * @description Initialize the RecordingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Video.V1, response: object, solution: object);

  /**
   * Build an instance of RecordingInstance
   *
   * @function getInstance
   * @memberof Twilio.Video.V1.RecordingPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class RecordingInstance {
  /**
   * @constructor Twilio.Video.V1.RecordingInstance
   * @description Initialize the RecordingContext
   *
   * @property accountSid - Twilio Account SID.
   * @property status - The status of the Recording.
   * @property dateCreated - Date when the media recording began writing.
   * @property sid - A 34-character string that uniquely identifies this Recording.
   * @property sourceSid - A 34-character string that uniquely identifies the source of this Recording.
   * @property size - Size of the recorded track, in bytes.
   * @property url - The absolute URL for this resource.
   * @property type - Indicates the media type for this recording.
   * @property duration - Duration of the Recording in seconds.
   * @property containerFormat - The file format for this Recording.
   * @property codec - The codec used to encode the track.
   * @property groupingSids - A list of Sids related to this Recording.
   * @property trackName - The name that was given to the source track of this recording.
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The Recording Sid that uniquely identifies the Recording to fetch.
   */
  constructor(version: Twilio.Video.V1, payload: object, sid: sid);

  _proxy?: RecordingContext;
  /**
   * fetch a RecordingInstance
   *
   * @function fetch
   * @memberof Twilio.Video.V1.RecordingInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a RecordingInstance
   *
   * @function remove
   * @memberof Twilio.Video.V1.RecordingInstance
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
   * @memberof Twilio.Video.V1.RecordingInstance
   * @instance
   */
  toJSON();
}


declare class RecordingContext {
  /**
   * @constructor Twilio.Video.V1.RecordingContext
   * @description Initialize the RecordingContext
   *
   * @param version - Version of the resource
   * @param sid - The Recording Sid that uniquely identifies the Recording to fetch.
   */
  constructor(version: Twilio.Video.V1, sid: sid);

  /**
   * fetch a RecordingInstance
   *
   * @function fetch
   * @memberof Twilio.Video.V1.RecordingContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a RecordingInstance
   *
   * @function remove
   * @memberof Twilio.Video.V1.RecordingContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { RecordingContext, RecordingInstance, RecordingList, RecordingListInstance, RecordingPage }
