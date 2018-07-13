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
 * @description Initialize the EventList
 *
 * @param version - Version of the resource
 */
declare function EventList(version: V1): EventListInstance;

interface EventResource {
  account_sid: string;
  actor_sid: string;
  actor_type: string;
  description: string;
  event_data: string;
  event_date: Date;
  event_type: string;
  links: string;
  resource_sid: string;
  resource_type: string;
  sid: string;
  source: string;
  source_ip_address: string;
  url: string;
}

interface EventListInstance {
  /* jshint ignore:start */
  /**
   * Streams EventInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Monitor.V1.EventList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.actorSid] - The actor_sid
   * @param {string} [opts.eventType] - The event_type
   * @param {string} [opts.resourceSid] - The resource_sid
   * @param {string} [opts.sourceIpAddress] - The source_ip_address
   * @param {Date} [opts.startDate] - The start_date
   * @param {Date} [opts.endDate] - The end_date
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
  EventListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of EventInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Monitor.V1.EventList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  EventListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new EventPage(this._version, payload, this._solution));
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
   * @description Lists EventInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Monitor.V1.EventList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.actorSid] - The actor_sid
   * @param {string} [opts.eventType] - The event_type
   * @param {string} [opts.resourceSid] - The resource_sid
   * @param {string} [opts.sourceIpAddress] - The source_ip_address
   * @param {Date} [opts.startDate] - The start_date
   * @param {Date} [opts.endDate] - The end_date
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
  EventListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of EventInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Monitor.V1.EventList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.actorSid] - The actor_sid
   * @param {string} [opts.eventType] - The event_type
   * @param {string} [opts.resourceSid] - The resource_sid
   * @param {string} [opts.sourceIpAddress] - The source_ip_address
   * @param {Date} [opts.startDate] - The start_date
   * @param {Date} [opts.endDate] - The end_date
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  EventListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'ActorSid': _.get(opts, 'actorSid'),
      'EventType': _.get(opts, 'eventType'),
      'ResourceSid': _.get(opts, 'resourceSid'),
      'SourceIpAddress': _.get(opts, 'sourceIpAddress'),
      'StartDate': serialize.iso8601DateTime(_.get(opts, 'startDate')),
      'EndDate': serialize.iso8601DateTime(_.get(opts, 'endDate')),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new EventPage(this._version, payload, this._solution));
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


declare class EventPage extends Page {
  /**
   * @constructor Twilio.Monitor.V1.EventPage
   * @augments Page
   * @description Initialize the EventPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Monitor.V1, response: object, solution: object);

  /**
   * Build an instance of EventInstance
   *
   * @function getInstance
   * @memberof Twilio.Monitor.V1.EventPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class EventInstance {
  /**
   * @constructor Twilio.Monitor.V1.EventInstance
   * @description Initialize the EventContext
   *
   * @property accountSid - The account_sid
   * @property actorSid - The actor_sid
   * @property actorType - The actor_type
   * @property description - A human-readable description of the event.  May be null.
   * @property eventData - The event_data
   * @property eventDate - The event_date
   * @property eventType - The event_type
   * @property resourceSid - The resource_sid
   * @property resourceType - The resource_type
   * @property sid - A 34 character string that uniquely identifies this event.
   * @property source - The originating system or interface that caused the event.  web for events caused by user action in the Twilio Console.  api for events caused through a request to the REST API.  twilio for events caused by an automated or internal Twilio system.
   * @property sourceIpAddress - The source_ip_address
   * @property url - The url
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Twilio.Monitor.V1, payload: object, sid: sid);

  _proxy?: EventContext;
  /**
   * fetch a EventInstance
   *
   * @function fetch
   * @memberof Twilio.Monitor.V1.EventInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the EventInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Monitor.V1.EventInstance
   * @instance
   */
  toJSON();
}


declare class EventContext {
  /**
   * @constructor Twilio.Monitor.V1.EventContext
   * @description Initialize the EventContext
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.Monitor.V1, sid: sid);

  /**
   * fetch a EventInstance
   *
   * @function fetch
   * @memberof Twilio.Monitor.V1.EventContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
}

export { EventContext, EventInstance, EventList, EventListInstance, EventPage, EventResource }
