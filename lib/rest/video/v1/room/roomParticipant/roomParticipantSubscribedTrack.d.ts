/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import V1 = require('../../../V1');
import deserialize = require('../../../../../base/deserialize');
import serialize = require('../../../../../base/serialize');
import values = require('../../../../../base/values');

/**
 * @description Initialize the SubscribedTrackList
 *
 * @param version - Version of the resource
 * @param roomSid - The room_sid
 * @param subscriberSid - The subscriber_sid
 */
declare function SubscribedTrackList(version: V1, roomSid: string, subscriberSid: string): SubscribedTrackListInstance;

interface SubscribedTrackListInstance {
  /* jshint ignore:start */
  /**
   * Streams SubscribedTrackInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Video.V1.RoomContext.ParticipantContext.SubscribedTrackList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {Date} [opts.dateCreatedAfter] - The date_created_after
   * @param {Date} [opts.dateCreatedBefore] - The date_created_before
   * @param {string} [opts.track] - The track
   * @param {string} [opts.publisher] - The publisher
   * @param {subscribed_track.kind} [opts.kind] - The kind
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
  SubscribedTrackListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of SubscribedTrackInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Video.V1.RoomContext.ParticipantContext.SubscribedTrackList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  SubscribedTrackListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new SubscribedTrackPage(this._version, payload, this._solution));
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
   * @description Lists SubscribedTrackInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Video.V1.RoomContext.ParticipantContext.SubscribedTrackList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {Date} [opts.dateCreatedAfter] - The date_created_after
   * @param {Date} [opts.dateCreatedBefore] - The date_created_before
   * @param {string} [opts.track] - The track
   * @param {string} [opts.publisher] - The publisher
   * @param {subscribed_track.kind} [opts.kind] - The kind
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
  SubscribedTrackListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of SubscribedTrackInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Video.V1.RoomContext.ParticipantContext.SubscribedTrackList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {Date} [opts.dateCreatedAfter] - The date_created_after
   * @param {Date} [opts.dateCreatedBefore] - The date_created_before
   * @param {string} [opts.track] - The track
   * @param {string} [opts.publisher] - The publisher
   * @param {subscribed_track.kind} [opts.kind] - The kind
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  SubscribedTrackListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'DateCreatedAfter': serialize.iso8601DateTime(_.get(opts, 'dateCreatedAfter')),
      'DateCreatedBefore': serialize.iso8601DateTime(_.get(opts, 'dateCreatedBefore')),
      'Track': _.get(opts, 'track'),
      'Publisher': _.get(opts, 'publisher'),
      'Kind': _.get(opts, 'kind'),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new SubscribedTrackPage(this._version, payload, this._solution));
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
   * update a SubscribedTrackInstance
   *
   * @function update
   * @memberof Twilio.Video.V1.RoomContext.ParticipantContext.SubscribedTrackList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.track] - The track
   * @param {string} [opts.publisher] - The publisher
   * @param {subscribed_track.kind} [opts.kind] - The kind
   * @param {subscribed_track.status} [opts.status] - The status
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed SubscribedTrackInstance
   */
  /* jshint ignore:end */
  SubscribedTrackListInstance.update = function update(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Track': _.get(opts, 'track'),
      'Publisher': _.get(opts, 'publisher'),
      'Kind': _.get(opts, 'kind'),
      'Status': _.get(opts, 'status')
    });

    var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new SubscribedTrackInstance(this._version, payload));
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


declare class SubscribedTrackPage extends Page {
  /**
   * @constructor Twilio.Video.V1.RoomContext.ParticipantContext.SubscribedTrackPage
   * @augments Page
   * @description Initialize the SubscribedTrackPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Video.V1, response: object, solution: object);

  /**
   * Build an instance of SubscribedTrackInstance
   *
   * @function getInstance
   * @memberof Twilio.Video.V1.RoomContext.ParticipantContext.SubscribedTrackPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class SubscribedTrackInstance {
  /**
   * @constructor Twilio.Video.V1.RoomContext.ParticipantContext.SubscribedTrackInstance
   * @description Initialize the SubscribedTrackContext
   *
   * @property sid - The sid
   * @property roomSid - The room_sid
   * @property name - The name
   * @property publisherSid - The publisher_sid
   * @property subscriberSid - The subscriber_sid
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property enabled - The enabled
   * @property kind - The kind
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param roomSid - The room_sid
   * @param subscriberSid - The subscriber_sid
   */
  constructor(version: Twilio.Video.V1, payload: object, roomSid: sid, subscriberSid: sid);

  /**
   * Produce a plain JSON object version of the SubscribedTrackInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Video.V1.RoomContext.ParticipantContext.SubscribedTrackInstance
   * @instance
   */
  toJSON();
}

export { SubscribedTrackInstance, SubscribedTrackList, SubscribedTrackListInstance, SubscribedTrackPage }
