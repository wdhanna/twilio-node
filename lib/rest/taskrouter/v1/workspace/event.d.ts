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
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the EventList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The unique ID of the Workspace
 */
declare function EventList(version: V1, workspaceSid: string): EventListInstance;

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
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.EventList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {Date} [opts.endDate] - Filter events by an end date.
   * @param {string} [opts.eventType] -
   *          Filter events by those of a certain event type
   * @param {number} [opts.minutes] - Filter events by up to 'x' minutes in the past.
   * @param {string} [opts.reservationSid] -
   *          Filter events by those pertaining to a particular reservation
   * @param {Date} [opts.startDate] - Filter events by a start date.
   * @param {string} [opts.taskQueueSid] -
   *          Filter events by those pertaining to a particular queue
   * @param {string} [opts.taskSid] -
   *          Filter events by those pertaining to a particular task
   * @param {string} [opts.workerSid] -
   *          Filter events by those pertaining to a particular worker
   * @param {string} [opts.workflowSid] - The workflow_sid
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
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.EventList
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
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.EventList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {Date} [opts.endDate] - Filter events by an end date.
   * @param {string} [opts.eventType] -
   *          Filter events by those of a certain event type
   * @param {number} [opts.minutes] - Filter events by up to 'x' minutes in the past.
   * @param {string} [opts.reservationSid] -
   *          Filter events by those pertaining to a particular reservation
   * @param {Date} [opts.startDate] - Filter events by a start date.
   * @param {string} [opts.taskQueueSid] -
   *          Filter events by those pertaining to a particular queue
   * @param {string} [opts.taskSid] -
   *          Filter events by those pertaining to a particular task
   * @param {string} [opts.workerSid] -
   *          Filter events by those pertaining to a particular worker
   * @param {string} [opts.workflowSid] - The workflow_sid
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
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.EventList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {Date} [opts.endDate] - Filter events by an end date.
   * @param {string} [opts.eventType] -
   *          Filter events by those of a certain event type
   * @param {number} [opts.minutes] - Filter events by up to 'x' minutes in the past.
   * @param {string} [opts.reservationSid] -
   *          Filter events by those pertaining to a particular reservation
   * @param {Date} [opts.startDate] - Filter events by a start date.
   * @param {string} [opts.taskQueueSid] -
   *          Filter events by those pertaining to a particular queue
   * @param {string} [opts.taskSid] -
   *          Filter events by those pertaining to a particular task
   * @param {string} [opts.workerSid] -
   *          Filter events by those pertaining to a particular worker
   * @param {string} [opts.workflowSid] - The workflow_sid
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
      'EndDate': serialize.iso8601DateTime(_.get(opts, 'endDate')),
      'EventType': _.get(opts, 'eventType'),
      'Minutes': _.get(opts, 'minutes'),
      'ReservationSid': _.get(opts, 'reservationSid'),
      'StartDate': serialize.iso8601DateTime(_.get(opts, 'startDate')),
      'TaskQueueSid': _.get(opts, 'taskQueueSid'),
      'TaskSid': _.get(opts, 'taskSid'),
      'WorkerSid': _.get(opts, 'workerSid'),
      'WorkflowSid': _.get(opts, 'workflowSid'),
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
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.EventPage
   * @augments Page
   * @description Initialize the EventPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Taskrouter.V1, response: object, solution: object);

  /**
   * Build an instance of EventInstance
   *
   * @function getInstance
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.EventPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class EventInstance {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.EventInstance
   * @description Initialize the EventContext
   *
   * @property accountSid - The account owning this event
   * @property actorSid - The actor_sid
   * @property actorType - The actor_type
   * @property actorUrl - The actor_url
   * @property description - A description of the event
   * @property eventData - Data about this specific event.
   * @property eventDate - The time this event was sent
   * @property eventType - An identifier for this event
   * @property resourceSid - The sid of the object this event is most relevant to
   * @property resourceType - The type of object this event is most relevant to
   * @property resourceUrl - The resource_url
   * @property sid - The sid
   * @property source - The source
   * @property sourceIpAddress - The source_ip_address
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The unique ID of the Workspace
   * @param sid - The sid
   */
  constructor(version: Twilio.Taskrouter.V1, payload: object, workspaceSid: sid, sid: sid);

  _proxy?: EventContext;
  /**
   * fetch a EventInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.EventInstance
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
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.EventInstance
   * @instance
   */
  toJSON();
}


declare class EventContext {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.EventContext
   * @description Initialize the EventContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Taskrouter.V1, workspaceSid: sid, sid: sid);

  /**
   * fetch a EventInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.EventContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
}

export { EventContext, EventInstance, EventList, EventListInstance, EventPage }
