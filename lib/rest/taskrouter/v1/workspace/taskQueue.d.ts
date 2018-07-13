/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import V1 = require('../../V1');
import deserialize = require('../../../../base/deserialize');
import values = require('../../../../base/values');
import { TaskQueueCumulativeStatisticsList } from './taskQueue/taskQueueCumulativeStatistics';
import { TaskQueueRealTimeStatisticsList } from './taskQueue/taskQueueRealTimeStatistics';
import { TaskQueueStatisticsList } from './taskQueue/taskQueueStatistics';

/**
 * @description Initialize the TaskQueueList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The ID of the Workspace that owns this TaskQueue
 */
declare function TaskQueueList(version: V1, workspaceSid: string): TaskQueueListInstance;

interface TaskQueueListInstance {
  /* jshint ignore:start */
  /**
   * create a TaskQueueInstance
   *
   * @function create
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.friendlyName - Human readable description of this TaskQueue
   * @param {string} opts.reservationActivitySid -
   *          ActivitySID to assign workers once a task is reserved for them
   * @param {string} opts.assignmentActivitySid -
   *          ActivitySID to assign workers once a task is assigned for them
   * @param {string} [opts.targetWorkers] -
   *          A string describing the Worker selection criteria for any Tasks that enter this TaskQueue.
   * @param {number} [opts.maxReservedWorkers] -
   *          The maximum amount of workers to create reservations for the assignment of a task while in this queue.
   * @param {task_queue.task_order} [opts.taskOrder] -
   *          TaskOrder will determine which order the Tasks will be assigned to Workers.
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed TaskQueueInstance
   */
  /* jshint ignore:end */
  TaskQueueListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.friendlyName)) {
      throw new Error('Required parameter "opts.friendlyName" missing.');
    }
    if (_.isUndefined(opts.reservationActivitySid)) {
      throw new Error('Required parameter "opts.reservationActivitySid" missing.');
    }
    if (_.isUndefined(opts.assignmentActivitySid)) {
      throw new Error('Required parameter "opts.assignmentActivitySid" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': _.get(opts, 'friendlyName'),
      'ReservationActivitySid': _.get(opts, 'reservationActivitySid'),
      'AssignmentActivitySid': _.get(opts, 'assignmentActivitySid'),
      'TargetWorkers': _.get(opts, 'targetWorkers'),
      'MaxReservedWorkers': _.get(opts, 'maxReservedWorkers'),
      'TaskOrder': _.get(opts, 'taskOrder')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new TaskQueueInstance(
        this._version,
        payload,
        this._solution.workspaceSid,
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
   * Streams TaskQueueInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.friendlyName] -
   *          Filter by a human readable description of a TaskQueue
   * @param {string} [opts.evaluateWorkerAttributes] -
   *          Provide a Worker attributes expression, and this will return the list of TaskQueues that would distribute tasks to a worker with these attributes.
   * @param {string} [opts.workerSid] - The worker_sid
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
  TaskQueueListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of TaskQueueInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  TaskQueueListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new TaskQueuePage(this._version, payload, this._solution));
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
   * @description Lists TaskQueueInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.friendlyName] -
   *          Filter by a human readable description of a TaskQueue
   * @param {string} [opts.evaluateWorkerAttributes] -
   *          Provide a Worker attributes expression, and this will return the list of TaskQueues that would distribute tasks to a worker with these attributes.
   * @param {string} [opts.workerSid] - The worker_sid
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
  TaskQueueListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of TaskQueueInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.friendlyName] -
   *          Filter by a human readable description of a TaskQueue
   * @param {string} [opts.evaluateWorkerAttributes] -
   *          Provide a Worker attributes expression, and this will return the list of TaskQueues that would distribute tasks to a worker with these attributes.
   * @param {string} [opts.workerSid] - The worker_sid
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  TaskQueueListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': _.get(opts, 'friendlyName'),
      'EvaluateWorkerAttributes': _.get(opts, 'evaluateWorkerAttributes'),
      'WorkerSid': _.get(opts, 'workerSid'),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new TaskQueuePage(this._version, payload, this._solution));
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
 * @property friendlyName - Human readable description of this TaskQueue
 * @property targetWorkers - A string describing the Worker selection criteria for any Tasks that enter this TaskQueue.
 * @property reservationActivitySid - ActivitySID that will be assigned to Workers when they are reserved for a task from this TaskQueue.
 * @property assignmentActivitySid - ActivitySID that will be assigned to Workers when they are assigned a task from this TaskQueue.
 * @property maxReservedWorkers - The maximum amount of workers to create reservations for the assignment of a task while in this queue.
 * @property taskOrder - TaskOrder will determine which order the Tasks will be assigned to Workers.
 */
export interface UpdateOptions {
  assignmentActivitySid?: string;
  friendlyName?: string;
  maxReservedWorkers?: number;
  reservationActivitySid?: string;
  targetWorkers?: string;
  taskOrder?: task_queue.task_order;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - Human readable description of this TaskQueue
 * @property targetWorkers - A string describing the Worker selection criteria for any Tasks that enter this TaskQueue.
 * @property reservationActivitySid - ActivitySID that will be assigned to Workers when they are reserved for a task from this TaskQueue.
 * @property assignmentActivitySid - ActivitySID that will be assigned to Workers when they are assigned a task from this TaskQueue.
 * @property maxReservedWorkers - The maximum amount of workers to create reservations for the assignment of a task while in this queue.
 * @property taskOrder - TaskOrder will determine which order the Tasks will be assigned to Workers.
 */
export interface UpdateOptions {
  assignmentActivitySid?: string;
  friendlyName?: string;
  maxReservedWorkers?: number;
  reservationActivitySid?: string;
  targetWorkers?: string;
  taskOrder?: task_queue.task_order;
}


declare class TaskQueuePage extends Page {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueuePage
   * @augments Page
   * @description Initialize the TaskQueuePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Taskrouter.V1, response: object, solution: object);

  /**
   * Build an instance of TaskQueueInstance
   *
   * @function getInstance
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueuePage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class TaskQueueInstance {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueInstance
   * @description Initialize the TaskQueueContext
   *
   * @property accountSid - The ID of the Account that owns this TaskQueue
   * @property assignmentActivitySid - ActivitySID to assign workers once a task is assigned for them
   * @property assignmentActivityName - The assignment_activity_name
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property friendlyName - Filter by a human readable description of a TaskQueue
   * @property maxReservedWorkers - The maximum amount of workers to create reservations for the assignment of a task while in this queue.
   * @property reservationActivitySid - ActivitySID to assign workers once a task is reserved for them
   * @property reservationActivityName - The reservation_activity_name
   * @property sid - The unique ID of the TaskQueue
   * @property targetWorkers - A string describing the Worker selection criteria for any Tasks that enter this TaskQueue.
   * @property taskOrder - TaskOrder will determine which order the Tasks will be assigned to Workers.
   * @property url - The url
   * @property workspaceSid - The ID of the Workspace that owns this TaskQueue
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The ID of the Workspace that owns this TaskQueue
   * @param sid - The sid
   */
  constructor(version: Twilio.Taskrouter.V1, payload: object, workspaceSid: sid, sid: sid);

  _proxy?: TaskQueueContext;
  /**
   * Access the cumulativeStatistics
   *
   * @function cumulativeStatistics
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueInstance
   * @instance
   */
  cumulativeStatistics();
  /**
   * fetch a TaskQueueInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the realTimeStatistics
   *
   * @function realTimeStatistics
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueInstance
   * @instance
   */
  realTimeStatistics();
  /**
   * remove a TaskQueueInstance
   *
   * @function remove
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Access the statistics
   *
   * @function statistics
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueInstance
   * @instance
   */
  statistics();
  /**
   * Produce a plain JSON object version of the TaskQueueInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueInstance
   * @instance
   */
  toJSON();
  /**
   * update a TaskQueueInstance
   *
   * @function update
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class TaskQueueContext {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext
   * @description Initialize the TaskQueueContext
   *
   * @property statistics - statistics resource
   * @property realTimeStatistics - realTimeStatistics resource
   * @property cumulativeStatistics - cumulativeStatistics resource
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Taskrouter.V1, workspaceSid: sid, sid: sid);

  cumulativeStatistics?: Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueCumulativeStatisticsList;
  /**
   * fetch a TaskQueueInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  realTimeStatistics?: Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueRealTimeStatisticsList;
  /**
   * remove a TaskQueueInstance
   *
   * @function remove
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  statistics?: Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsList;
  /**
   * update a TaskQueueInstance
   *
   * @function update
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { TaskQueueContext, TaskQueueInstance, TaskQueueList, TaskQueueListInstance, TaskQueuePage }
