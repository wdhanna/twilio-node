/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import V1 = require('../../V1');
import serialize = require('../../../../base/serialize');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { PublishedTrackList } from './roomParticipant/roomParticipantPublishedTrack';
import { SerializableClass } from '../../../../interfaces';
import { SubscribedTrackList } from './roomParticipant/roomParticipantSubscribedTrack';

/**
 * @description Initialize the ParticipantList
 *
 * @param version - Version of the resource
 * @param roomSid - A system-generated 34-character string that uniquely identifies.
 */
declare function ParticipantList(version: V1, roomSid: string): ParticipantListInstance;

export interface ParticipantResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  duration: number;
  end_time: Date;
  identity: string;
  links: string;
  room_sid: string;
  sid: string;
  start_time: Date;
  status: ParticipantStatus;
  url: string;
}

interface ParticipantListInstance {
  /* jshint ignore:start */
  /**
   * Streams ParticipantInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Video.V1.RoomContext.ParticipantList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {participant.status} [opts.status] -
   *          Only show Participants with the given Status.
   * @param {string} [opts.identity] -
   *          Only show Participants that connected to the Room using the provided Identity.
   * @param {Date} [opts.dateCreatedAfter] -
   *          Only show Participants that started after this date, given as an UTC ISO 8601 Timestamp.
   * @param {Date} [opts.dateCreatedBefore] -
   *          Only show Participants that started before this date, given as an UTC ISO 8601 Timestamp.
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
  ParticipantListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of ParticipantInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Video.V1.RoomContext.ParticipantList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ParticipantListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new ParticipantPage(this._version, payload, this._solution));
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
   * @description Lists ParticipantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Video.V1.RoomContext.ParticipantList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {participant.status} [opts.status] -
   *          Only show Participants with the given Status.
   * @param {string} [opts.identity] -
   *          Only show Participants that connected to the Room using the provided Identity.
   * @param {Date} [opts.dateCreatedAfter] -
   *          Only show Participants that started after this date, given as an UTC ISO 8601 Timestamp.
   * @param {Date} [opts.dateCreatedBefore] -
   *          Only show Participants that started before this date, given as an UTC ISO 8601 Timestamp.
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
  ParticipantListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of ParticipantInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Video.V1.RoomContext.ParticipantList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {participant.status} [opts.status] -
   *          Only show Participants with the given Status.
   * @param {string} [opts.identity] -
   *          Only show Participants that connected to the Room using the provided Identity.
   * @param {Date} [opts.dateCreatedAfter] -
   *          Only show Participants that started after this date, given as an UTC ISO 8601 Timestamp.
   * @param {Date} [opts.dateCreatedBefore] -
   *          Only show Participants that started before this date, given as an UTC ISO 8601 Timestamp.
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ParticipantListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Status': _.get(opts, 'status'),
      'Identity': _.get(opts, 'identity'),
      'DateCreatedAfter': serialize.iso8601DateTime(_.get(opts, 'dateCreatedAfter')),
      'DateCreatedBefore': serialize.iso8601DateTime(_.get(opts, 'dateCreatedBefore')),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new ParticipantPage(this._version, payload, this._solution));
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
 * @property status - Set to disconnected to remove participant.
 */
export interface UpdateOptions {
  status?: participant.status;
}

/**
 * Options to pass to update
 *
 * @property status - Set to disconnected to remove participant.
 */
export interface UpdateOptions {
  status?: participant.status;
}


declare class ParticipantPage extends Page {
  /**
   * @constructor Twilio.Video.V1.RoomContext.ParticipantPage
   * @augments Page
   * @description Initialize the ParticipantPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Video.V1, response: object, solution: object);

  /**
   * Build an instance of ParticipantInstance
   *
   * @function getInstance
   * @memberof Twilio.Video.V1.RoomContext.ParticipantPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class ParticipantInstance {
  /**
   * @constructor Twilio.Video.V1.RoomContext.ParticipantInstance
   * @description Initialize the ParticipantContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property roomSid - A system-generated 34-character string that uniquely identifies.
   * @property accountSid - The unique ID of the Account associated with this Room.
   * @property status - A string representing the status of the Participant.
   * @property identity - The unique name identifier that is assigned to this Participant.
   * @property dateCreated - The date that this resource was created, given as a UTC ISO 8601 Timestamp.
   * @property dateUpdated - The date that this resource was last updated, given as a UTC ISO 8601 Timestamp.
   * @property startTime - The time of Participant connected to the Room, given as a UTC ISO 8601 Timestamp.
   * @property endTime - The time of Participant disconnected from the Room, given as a UTC ISO 8601 Timestamp.
   * @property duration - Duration of time in seconds this Participant was connected.
   * @property url - The absolute URL for this resource.
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param roomSid - A system-generated 34-character string that uniquely identifies.
   * @param sid - The sid
   */
  constructor(version: Twilio.Video.V1, payload: object, roomSid: sid, sid: sid_like);

  _proxy?: ParticipantContext;
  /**
   * fetch a ParticipantInstance
   *
   * @function fetch
   * @memberof Twilio.Video.V1.RoomContext.ParticipantInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the publishedTracks
   *
   * @function publishedTracks
   * @memberof Twilio.Video.V1.RoomContext.ParticipantInstance
   * @instance
   */
  publishedTracks();
  /**
   * Access the subscribedTracks
   *
   * @function subscribedTracks
   * @memberof Twilio.Video.V1.RoomContext.ParticipantInstance
   * @instance
   */
  subscribedTracks();
  /**
   * Produce a plain JSON object version of the ParticipantInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Video.V1.RoomContext.ParticipantInstance
   * @instance
   */
  toJSON();
  /**
   * update a ParticipantInstance
   *
   * @function update
   * @memberof Twilio.Video.V1.RoomContext.ParticipantInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class ParticipantContext {
  /**
   * @constructor Twilio.Video.V1.RoomContext.ParticipantContext
   * @description Initialize the ParticipantContext
   *
   * @property publishedTracks - publishedTracks resource
   * @property subscribedTracks - subscribedTracks resource
   *
   * @param version - Version of the resource
   * @param roomSid - The room_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Video.V1, roomSid: sid_like, sid: sid_like);

  /**
   * fetch a ParticipantInstance
   *
   * @function fetch
   * @memberof Twilio.Video.V1.RoomContext.ParticipantContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  publishedTracks?: Twilio.Video.V1.RoomContext.ParticipantContext.PublishedTrackList;
  subscribedTracks?: Twilio.Video.V1.RoomContext.ParticipantContext.SubscribedTrackList;
  /**
   * update a ParticipantInstance
   *
   * @function update
   * @memberof Twilio.Video.V1.RoomContext.ParticipantContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { ParticipantContext, ParticipantInstance, ParticipantList, ParticipantListInstance, ParticipantPage, ParticipantResource }
