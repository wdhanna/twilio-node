/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import V1 = require('../V1');
import deserialize = require('../../../base/deserialize');
import serialize = require('../../../base/serialize');
import values = require('../../../base/values');
import { ActivityList } from './workspace/activity';
import { EventList } from './workspace/event';
import { TaskChannelList } from './workspace/taskChannel';
import { TaskList } from './workspace/task';
import { TaskQueueList } from './workspace/taskQueue';
import { WorkerList } from './workspace/worker';
import { WorkflowList } from './workspace/workflow';
import { WorkspaceCumulativeStatisticsList } from './workspace/workspaceCumulativeStatistics';
import { WorkspaceRealTimeStatisticsList } from './workspace/workspaceRealTimeStatistics';
import { WorkspaceStatisticsList } from './workspace/workspaceStatistics';

/**
 * @description Initialize the WorkspaceList
 *
 * @param version - Version of the resource
 */
declare function WorkspaceList(version: V1): WorkspaceListInstance;

interface WorkspaceListInstance {
  /* jshint ignore:start */
  /**
   * create a WorkspaceInstance
   *
   * @function create
   * @memberof Twilio.Taskrouter.V1.WorkspaceList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.friendlyName - Human readable description of this workspace
   * @param {string} [opts.eventCallbackUrl] -
   *          If provided, the Workspace will publish events to this URL.
   * @param {string} [opts.eventsFilter] -
   *          Use this parameter to receive webhooks on EventCallbackUrl for specific events on a workspace.
   * @param {boolean} [opts.multiTaskEnabled] -
   *          Multi tasking allows workers to handle multiple tasks simultaneously.
   * @param {string} [opts.template] - One of the available template names.
   * @param {workspace.queue_order} [opts.prioritizeQueueOrder] -
   *          Use this parameter to configure whether to prioritize LIFO or FIFO when workers are receiving Tasks from combination of LIFO and FIFO TaskQueues.
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed WorkspaceInstance
   */
  /* jshint ignore:end */
  WorkspaceListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.friendlyName)) {
      throw new Error('Required parameter "opts.friendlyName" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': _.get(opts, 'friendlyName'),
      'EventCallbackUrl': _.get(opts, 'eventCallbackUrl'),
      'EventsFilter': _.get(opts, 'eventsFilter'),
      'MultiTaskEnabled': serialize.bool(_.get(opts, 'multiTaskEnabled')),
      'Template': _.get(opts, 'template'),
      'PrioritizeQueueOrder': _.get(opts, 'prioritizeQueueOrder')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new WorkspaceInstance(this._version, payload, this._solution.sid));
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
   * Streams WorkspaceInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Taskrouter.V1.WorkspaceList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.friendlyName] - Filter by a workspace's friendly name.
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
  WorkspaceListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of WorkspaceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Taskrouter.V1.WorkspaceList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  WorkspaceListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new WorkspacePage(this._version, payload, this._solution));
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
   * @description Lists WorkspaceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Taskrouter.V1.WorkspaceList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.friendlyName] - Filter by a workspace's friendly name.
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
  WorkspaceListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of WorkspaceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Taskrouter.V1.WorkspaceList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.friendlyName] - Filter by a workspace's friendly name.
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  WorkspaceListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': _.get(opts, 'friendlyName'),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new WorkspacePage(this._version, payload, this._solution));
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
 * @property defaultActivitySid - The ID of the Activity that will be used when new Workers are created in this Workspace.
 * @property eventCallbackUrl - The Workspace will publish events to this URL.
 * @property eventsFilter - Use this parameter to receive webhooks on EventCallbackUrl for specific events on a workspace.
 * @property friendlyName - Human readable description of this workspace
 * @property multiTaskEnabled - Enable or Disable Multitasking by passing either true or False with the POST request.
 * @property timeoutActivitySid - The ID of the Activity that will be assigned to a Worker when a Task reservation times out without a response.
 * @property prioritizeQueueOrder - Use this parameter to configure whether to prioritize LIFO or FIFO when workers are receiving Tasks from combination of LIFO and FIFO TaskQueues.
 */
export interface UpdateOptions {
  defaultActivitySid?: string;
  eventCallbackUrl?: string;
  eventsFilter?: string;
  friendlyName?: string;
  multiTaskEnabled?: boolean;
  prioritizeQueueOrder?: workspace.queue_order;
  timeoutActivitySid?: string;
}

/**
 * Options to pass to update
 *
 * @property defaultActivitySid - The ID of the Activity that will be used when new Workers are created in this Workspace.
 * @property eventCallbackUrl - The Workspace will publish events to this URL.
 * @property eventsFilter - Use this parameter to receive webhooks on EventCallbackUrl for specific events on a workspace.
 * @property friendlyName - Human readable description of this workspace
 * @property multiTaskEnabled - Enable or Disable Multitasking by passing either true or False with the POST request.
 * @property timeoutActivitySid - The ID of the Activity that will be assigned to a Worker when a Task reservation times out without a response.
 * @property prioritizeQueueOrder - Use this parameter to configure whether to prioritize LIFO or FIFO when workers are receiving Tasks from combination of LIFO and FIFO TaskQueues.
 */
export interface UpdateOptions {
  defaultActivitySid?: string;
  eventCallbackUrl?: string;
  eventsFilter?: string;
  friendlyName?: string;
  multiTaskEnabled?: boolean;
  prioritizeQueueOrder?: workspace.queue_order;
  timeoutActivitySid?: string;
}


declare class WorkspacePage extends Page {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspacePage
   * @augments Page
   * @description Initialize the WorkspacePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Taskrouter.V1, response: object, solution: object);

  /**
   * Build an instance of WorkspaceInstance
   *
   * @function getInstance
   * @memberof Twilio.Taskrouter.V1.WorkspacePage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class WorkspaceInstance {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceInstance
   * @description Initialize the WorkspaceContext
   *
   * @property accountSid - The ID of the account that owns this Workflow
   * @property dateCreated - The time the Workspace was created, given as GMT in ISO 8601 format.
   * @property dateUpdated - The time the Workspace was last updated, given as GMT in ISO 8601 format.
   * @property defaultActivityName - The human readable name of the default activity.
   * @property defaultActivitySid - The ID of the Activity that will be used when new Workers are created in this Workspace.
   * @property eventCallbackUrl - If provided, the Workspace will publish events to this URL.
   * @property eventsFilter - Use this parameter to receive webhooks on EventCallbackUrl for specific events on a workspace.
   * @property friendlyName - Filter by a workspace's friendly name.
   * @property multiTaskEnabled - Multi tasking allows workers to handle multiple tasks simultaneously.
   * @property sid - The unique ID of the Workspace
   * @property timeoutActivityName - The human readable name of the timeout activity.
   * @property timeoutActivitySid - The ID of the Activity that will be assigned to a Worker when a Task reservation times out without a response.
   * @property prioritizeQueueOrder - Use this parameter to configure whether to prioritize LIFO or FIFO when workers are receiving Tasks from combination of LIFO and FIFO TaskQueues.
   * @property url - The url
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Twilio.Taskrouter.V1, payload: object, sid: sid);

  _proxy?: WorkspaceContext;
  /**
   * Access the activities
   *
   * @function activities
   * @memberof Twilio.Taskrouter.V1.WorkspaceInstance
   * @instance
   */
  activities();
  /**
   * Access the cumulativeStatistics
   *
   * @function cumulativeStatistics
   * @memberof Twilio.Taskrouter.V1.WorkspaceInstance
   * @instance
   */
  cumulativeStatistics();
  /**
   * Access the events
   *
   * @function events
   * @memberof Twilio.Taskrouter.V1.WorkspaceInstance
   * @instance
   */
  events();
  /**
   * fetch a WorkspaceInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the realTimeStatistics
   *
   * @function realTimeStatistics
   * @memberof Twilio.Taskrouter.V1.WorkspaceInstance
   * @instance
   */
  realTimeStatistics();
  /**
   * remove a WorkspaceInstance
   *
   * @function remove
   * @memberof Twilio.Taskrouter.V1.WorkspaceInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Access the statistics
   *
   * @function statistics
   * @memberof Twilio.Taskrouter.V1.WorkspaceInstance
   * @instance
   */
  statistics();
  /**
   * Access the taskChannels
   *
   * @function taskChannels
   * @memberof Twilio.Taskrouter.V1.WorkspaceInstance
   * @instance
   */
  taskChannels();
  /**
   * Access the taskQueues
   *
   * @function taskQueues
   * @memberof Twilio.Taskrouter.V1.WorkspaceInstance
   * @instance
   */
  taskQueues();
  /**
   * Access the tasks
   *
   * @function tasks
   * @memberof Twilio.Taskrouter.V1.WorkspaceInstance
   * @instance
   */
  tasks();
  /**
   * Produce a plain JSON object version of the WorkspaceInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Taskrouter.V1.WorkspaceInstance
   * @instance
   */
  toJSON();
  /**
   * update a WorkspaceInstance
   *
   * @function update
   * @memberof Twilio.Taskrouter.V1.WorkspaceInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
  /**
   * Access the workers
   *
   * @function workers
   * @memberof Twilio.Taskrouter.V1.WorkspaceInstance
   * @instance
   */
  workers();
  /**
   * Access the workflows
   *
   * @function workflows
   * @memberof Twilio.Taskrouter.V1.WorkspaceInstance
   * @instance
   */
  workflows();
}


declare class WorkspaceContext {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext
   * @description Initialize the WorkspaceContext
   *
   * @property activities - activities resource
   * @property events - events resource
   * @property tasks - tasks resource
   * @property taskQueues - taskQueues resource
   * @property workers - workers resource
   * @property workflows - workflows resource
   * @property statistics - statistics resource
   * @property realTimeStatistics - realTimeStatistics resource
   * @property cumulativeStatistics - cumulativeStatistics resource
   * @property taskChannels - taskChannels resource
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.Taskrouter.V1, sid: sid);

  activities?: Twilio.Taskrouter.V1.WorkspaceContext.ActivityList;
  cumulativeStatistics?: Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceCumulativeStatisticsList;
  events?: Twilio.Taskrouter.V1.WorkspaceContext.EventList;
  /**
   * fetch a WorkspaceInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  realTimeStatistics?: Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceRealTimeStatisticsList;
  /**
   * remove a WorkspaceInstance
   *
   * @function remove
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  statistics?: Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceStatisticsList;
  taskChannels?: Twilio.Taskrouter.V1.WorkspaceContext.TaskChannelList;
  taskQueues?: Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueList;
  tasks?: Twilio.Taskrouter.V1.WorkspaceContext.TaskList;
  /**
   * update a WorkspaceInstance
   *
   * @function update
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
  workers?: Twilio.Taskrouter.V1.WorkspaceContext.WorkerList;
  workflows?: Twilio.Taskrouter.V1.WorkspaceContext.WorkflowList;
}

export { WorkspaceContext, WorkspaceInstance, WorkspaceList, WorkspaceListInstance, WorkspacePage }
