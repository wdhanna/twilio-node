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
 * @description Initialize the TaskQueuesStatisticsList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The ID of the Workspace that owns this TaskQueue
 */
declare function TaskQueuesStatisticsList(version: V1, workspaceSid: string): TaskQueuesStatisticsListInstance;

export interface TaskQueuesStatisticsResource {
  account_sid: string;
  cumulative: string;
  realtime: string;
  task_queue_sid: string;
  workspace_sid: string;
}

interface TaskQueuesStatisticsListInstance {
  /* jshint ignore:start */
  /**
   * Streams TaskQueuesStatisticsInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueuesStatisticsList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {Date} [opts.endDate] - Filter cumulative statistics by an end date.
   * @param {string} [opts.friendlyName] -
   *          Filter the TaskQueue stats based on a TaskQueue's name
   * @param {number} [opts.minutes] -
   *          Filter cumulative statistics by up to 'x' minutes in the past.
   * @param {Date} [opts.startDate] - Filter cumulative statistics by a start date.
   * @param {string} [opts.taskChannel] -
   *          Filter real-time and cumulative statistics by TaskChannel.
   * @param {string} [opts.splitByWaitTime] -
   *          A comma separated values for viewing splits of tasks canceled and accepted above the given threshold in seconds.
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
  TaskQueuesStatisticsListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of TaskQueuesStatisticsInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueuesStatisticsList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  TaskQueuesStatisticsListInstance.getPage = function getPage(targetUrl, callback)
                                                               {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new TaskQueuesStatisticsPage(this._version, payload, this._solution));
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
   * @description Lists TaskQueuesStatisticsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueuesStatisticsList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {Date} [opts.endDate] - Filter cumulative statistics by an end date.
   * @param {string} [opts.friendlyName] -
   *          Filter the TaskQueue stats based on a TaskQueue's name
   * @param {number} [opts.minutes] -
   *          Filter cumulative statistics by up to 'x' minutes in the past.
   * @param {Date} [opts.startDate] - Filter cumulative statistics by a start date.
   * @param {string} [opts.taskChannel] -
   *          Filter real-time and cumulative statistics by TaskChannel.
   * @param {string} [opts.splitByWaitTime] -
   *          A comma separated values for viewing splits of tasks canceled and accepted above the given threshold in seconds.
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
  TaskQueuesStatisticsListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of TaskQueuesStatisticsInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueuesStatisticsList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {Date} [opts.endDate] - Filter cumulative statistics by an end date.
   * @param {string} [opts.friendlyName] -
   *          Filter the TaskQueue stats based on a TaskQueue's name
   * @param {number} [opts.minutes] -
   *          Filter cumulative statistics by up to 'x' minutes in the past.
   * @param {Date} [opts.startDate] - Filter cumulative statistics by a start date.
   * @param {string} [opts.taskChannel] -
   *          Filter real-time and cumulative statistics by TaskChannel.
   * @param {string} [opts.splitByWaitTime] -
   *          A comma separated values for viewing splits of tasks canceled and accepted above the given threshold in seconds.
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  TaskQueuesStatisticsListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'EndDate': serialize.iso8601DateTime(_.get(opts, 'endDate')),
      'FriendlyName': _.get(opts, 'friendlyName'),
      'Minutes': _.get(opts, 'minutes'),
      'StartDate': serialize.iso8601DateTime(_.get(opts, 'startDate')),
      'TaskChannel': _.get(opts, 'taskChannel'),
      'SplitByWaitTime': _.get(opts, 'splitByWaitTime'),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new TaskQueuesStatisticsPage(this._version, payload, this._solution));
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


declare class TaskQueuesStatisticsPage extends Page {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueuesStatisticsPage
   * @augments Page
   * @description Initialize the TaskQueuesStatisticsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Taskrouter.V1, response: object, solution: object);

  /**
   * Build an instance of TaskQueuesStatisticsInstance
   *
   * @function getInstance
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueuesStatisticsPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class TaskQueuesStatisticsInstance {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueuesStatisticsInstance
   * @description Initialize the TaskQueuesStatisticsContext
   *
   * @property accountSid - The account_sid
   * @property cumulative - The cumulative
   * @property realtime - The realtime
   * @property taskQueueSid - The task_queue_sid
   * @property workspaceSid - The workspace_sid
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The ID of the Workspace that owns this TaskQueue
   */
  constructor(version: Twilio.Taskrouter.V1, payload: object, workspaceSid: sid);

  /**
   * Produce a plain JSON object version of the TaskQueuesStatisticsInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueuesStatisticsInstance
   * @instance
   */
  toJSON();
}

export { TaskQueuesStatisticsInstance, TaskQueuesStatisticsList, TaskQueuesStatisticsListInstance, TaskQueuesStatisticsPage, TaskQueuesStatisticsResource }
