/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import V1 = require('../../../V1');
import serialize = require('../../../../../base/serialize');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the ReservationList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The workspace_sid
 * @param workerSid - The worker_sid
 */
declare function ReservationList(version: V1, workspaceSid: string, workerSid: string): ReservationListInstance;

export interface ReservationResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  links: string;
  reservation_status: ReservationStatus;
  sid: string;
  task_sid: string;
  url: string;
  worker_name: string;
  worker_sid: string;
  workspace_sid: string;
}

interface ReservationListInstance {
  /* jshint ignore:start */
  /**
   * Streams ReservationInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.ReservationList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {reservation.status} [opts.reservationStatus] -
   *          Filter by a worker's reservation status
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
  ReservationListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of ReservationInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.ReservationList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ReservationListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new ReservationPage(this._version, payload, this._solution));
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
   * @description Lists ReservationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.ReservationList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {reservation.status} [opts.reservationStatus] -
   *          Filter by a worker's reservation status
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
  ReservationListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of ReservationInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.ReservationList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {reservation.status} [opts.reservationStatus] -
   *          Filter by a worker's reservation status
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ReservationListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'ReservationStatus': _.get(opts, 'reservationStatus'),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new ReservationPage(this._version, payload, this._solution));
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
 * @property reservationStatus - Yes
 * @property workerActivitySid - No
 * @property instruction - Yes
 * @property dequeuePostWorkActivitySid - No
 * @property dequeueFrom - Yes
 * @property dequeueRecord - The dequeue_record
 * @property dequeueTimeout - The dequeue_timeout
 * @property dequeueTo - The dequeue_to
 * @property dequeueStatusCallbackUrl - The dequeue_status_callback_url
 * @property callFrom - Yes
 * @property callRecord - The call_record
 * @property callTimeout - The call_timeout
 * @property callTo - The call_to
 * @property callUrl - Yes
 * @property callStatusCallbackUrl - No
 * @property callAccept - No
 * @property redirectCallSid - The redirect_call_sid
 * @property redirectAccept - The redirect_accept
 * @property redirectUrl - The redirect_url
 * @property to - The to
 * @property from - The from
 * @property statusCallback - The status_callback
 * @property statusCallbackMethod - The status_callback_method
 * @property statusCallbackEvent - The status_callback_event
 * @property timeout - The timeout
 * @property record - The record
 * @property muted - The muted
 * @property beep - The beep
 * @property startConferenceOnEnter - The start_conference_on_enter
 * @property endConferenceOnExit - The end_conference_on_exit
 * @property waitUrl - The wait_url
 * @property waitMethod - The wait_method
 * @property earlyMedia - The early_media
 * @property maxParticipants - The max_participants
 * @property conferenceStatusCallback - The conference_status_callback
 * @property conferenceStatusCallbackMethod - The conference_status_callback_method
 * @property conferenceStatusCallbackEvent - The conference_status_callback_event
 * @property conferenceRecord - The conference_record
 * @property conferenceTrim - The conference_trim
 * @property recordingChannels - The recording_channels
 * @property recordingStatusCallback - The recording_status_callback
 * @property recordingStatusCallbackMethod - The recording_status_callback_method
 * @property conferenceRecordingStatusCallback - The conference_recording_status_callback
 * @property conferenceRecordingStatusCallbackMethod - The conference_recording_status_callback_method
 * @property region - The region
 * @property sipAuthUsername - The sip_auth_username
 * @property sipAuthPassword - The sip_auth_password
 * @property dequeueStatusCallbackEvent - The dequeue_status_callback_event
 * @property postWorkActivitySid - The post_work_activity_sid
 */
export interface UpdateOptions {
  beep?: string;
  callAccept?: boolean;
  callFrom?: string;
  callRecord?: string;
  callStatusCallbackUrl?: string;
  callTimeout?: number;
  callTo?: string;
  callUrl?: string;
  conferenceRecord?: string;
  conferenceRecordingStatusCallback?: string;
  conferenceRecordingStatusCallbackMethod?: string;
  conferenceStatusCallback?: string;
  conferenceStatusCallbackEvent?: reservation.conference_event|list;
  conferenceStatusCallbackMethod?: string;
  conferenceTrim?: string;
  dequeueFrom?: string;
  dequeuePostWorkActivitySid?: string;
  dequeueRecord?: string;
  dequeueStatusCallbackEvent?: string|list;
  dequeueStatusCallbackUrl?: string;
  dequeueTimeout?: number;
  dequeueTo?: string;
  earlyMedia?: boolean;
  endConferenceOnExit?: boolean;
  from?: string;
  instruction?: string;
  maxParticipants?: number;
  muted?: boolean;
  postWorkActivitySid?: string;
  record?: boolean;
  recordingChannels?: string;
  recordingStatusCallback?: string;
  recordingStatusCallbackMethod?: string;
  redirectAccept?: boolean;
  redirectCallSid?: string;
  redirectUrl?: string;
  region?: string;
  reservationStatus?: reservation.status;
  sipAuthPassword?: string;
  sipAuthUsername?: string;
  startConferenceOnEnter?: boolean;
  statusCallback?: string;
  statusCallbackEvent?: reservation.call_status|list;
  statusCallbackMethod?: string;
  timeout?: number;
  to?: string;
  waitMethod?: string;
  waitUrl?: string;
  workerActivitySid?: string;
}

/**
 * Options to pass to update
 *
 * @property reservationStatus - Yes
 * @property workerActivitySid - No
 * @property instruction - Yes
 * @property dequeuePostWorkActivitySid - No
 * @property dequeueFrom - Yes
 * @property dequeueRecord - The dequeue_record
 * @property dequeueTimeout - The dequeue_timeout
 * @property dequeueTo - The dequeue_to
 * @property dequeueStatusCallbackUrl - The dequeue_status_callback_url
 * @property callFrom - Yes
 * @property callRecord - The call_record
 * @property callTimeout - The call_timeout
 * @property callTo - The call_to
 * @property callUrl - Yes
 * @property callStatusCallbackUrl - No
 * @property callAccept - No
 * @property redirectCallSid - The redirect_call_sid
 * @property redirectAccept - The redirect_accept
 * @property redirectUrl - The redirect_url
 * @property to - The to
 * @property from - The from
 * @property statusCallback - The status_callback
 * @property statusCallbackMethod - The status_callback_method
 * @property statusCallbackEvent - The status_callback_event
 * @property timeout - The timeout
 * @property record - The record
 * @property muted - The muted
 * @property beep - The beep
 * @property startConferenceOnEnter - The start_conference_on_enter
 * @property endConferenceOnExit - The end_conference_on_exit
 * @property waitUrl - The wait_url
 * @property waitMethod - The wait_method
 * @property earlyMedia - The early_media
 * @property maxParticipants - The max_participants
 * @property conferenceStatusCallback - The conference_status_callback
 * @property conferenceStatusCallbackMethod - The conference_status_callback_method
 * @property conferenceStatusCallbackEvent - The conference_status_callback_event
 * @property conferenceRecord - The conference_record
 * @property conferenceTrim - The conference_trim
 * @property recordingChannels - The recording_channels
 * @property recordingStatusCallback - The recording_status_callback
 * @property recordingStatusCallbackMethod - The recording_status_callback_method
 * @property conferenceRecordingStatusCallback - The conference_recording_status_callback
 * @property conferenceRecordingStatusCallbackMethod - The conference_recording_status_callback_method
 * @property region - The region
 * @property sipAuthUsername - The sip_auth_username
 * @property sipAuthPassword - The sip_auth_password
 * @property dequeueStatusCallbackEvent - The dequeue_status_callback_event
 * @property postWorkActivitySid - The post_work_activity_sid
 */
export interface UpdateOptions {
  beep?: string;
  callAccept?: boolean;
  callFrom?: string;
  callRecord?: string;
  callStatusCallbackUrl?: string;
  callTimeout?: number;
  callTo?: string;
  callUrl?: string;
  conferenceRecord?: string;
  conferenceRecordingStatusCallback?: string;
  conferenceRecordingStatusCallbackMethod?: string;
  conferenceStatusCallback?: string;
  conferenceStatusCallbackEvent?: reservation.conference_event|list;
  conferenceStatusCallbackMethod?: string;
  conferenceTrim?: string;
  dequeueFrom?: string;
  dequeuePostWorkActivitySid?: string;
  dequeueRecord?: string;
  dequeueStatusCallbackEvent?: string|list;
  dequeueStatusCallbackUrl?: string;
  dequeueTimeout?: number;
  dequeueTo?: string;
  earlyMedia?: boolean;
  endConferenceOnExit?: boolean;
  from?: string;
  instruction?: string;
  maxParticipants?: number;
  muted?: boolean;
  postWorkActivitySid?: string;
  record?: boolean;
  recordingChannels?: string;
  recordingStatusCallback?: string;
  recordingStatusCallbackMethod?: string;
  redirectAccept?: boolean;
  redirectCallSid?: string;
  redirectUrl?: string;
  region?: string;
  reservationStatus?: reservation.status;
  sipAuthPassword?: string;
  sipAuthUsername?: string;
  startConferenceOnEnter?: boolean;
  statusCallback?: string;
  statusCallbackEvent?: reservation.call_status|list;
  statusCallbackMethod?: string;
  timeout?: number;
  to?: string;
  waitMethod?: string;
  waitUrl?: string;
  workerActivitySid?: string;
}


declare class ReservationPage extends Page {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.ReservationPage
   * @augments Page
   * @description Initialize the ReservationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Taskrouter.V1, response: object, solution: object);

  /**
   * Build an instance of ReservationInstance
   *
   * @function getInstance
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.ReservationPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class ReservationInstance {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.ReservationInstance
   * @description Initialize the ReservationContext
   *
   * @property accountSid - The account_sid
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property reservationStatus - Filter by a worker's reservation status
   * @property sid - The sid
   * @property taskSid - The task_sid
   * @property workerName - The worker_name
   * @property workerSid - The worker_sid
   * @property workspaceSid - The workspace_sid
   * @property url - The url
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The workspace_sid
   * @param workerSid - The worker_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Taskrouter.V1, payload: object, workspaceSid: sid, workerSid: sid, sid: sid);

  _proxy?: ReservationContext;
  /**
   * fetch a ReservationInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.ReservationInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the ReservationInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.ReservationInstance
   * @instance
   */
  toJSON();
  /**
   * update a ReservationInstance
   *
   * @function update
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.ReservationInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class ReservationContext {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.ReservationContext
   * @description Initialize the ReservationContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   * @param workerSid - The worker_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Taskrouter.V1, workspaceSid: sid, workerSid: sid, sid: sid);

  /**
   * fetch a ReservationInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.ReservationContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * update a ReservationInstance
   *
   * @function update
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.ReservationContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { ReservationContext, ReservationInstance, ReservationList, ReservationListInstance, ReservationPage, ReservationResource }
