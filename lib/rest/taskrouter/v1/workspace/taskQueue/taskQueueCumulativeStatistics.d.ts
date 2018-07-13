/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import V1 = require('../../../V1');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the TaskQueueCumulativeStatisticsList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The workspace_sid
 * @param taskQueueSid - The task_queue_sid
 */
declare function TaskQueueCumulativeStatisticsList(version: V1, workspaceSid: string, taskQueueSid: string): TaskQueueCumulativeStatisticsListInstance;

export interface TaskQueueCumulativeStatisticsResource {
  account_sid: string;
  avg_task_acceptance_time: number;
  end_time: Date;
  reservations_accepted: number;
  reservations_canceled: number;
  reservations_created: number;
  reservations_rejected: number;
  reservations_rescinded: number;
  reservations_timed_out: number;
  split_by_wait_time: string;
  start_time: Date;
  task_queue_sid: string;
  tasks_canceled: number;
  tasks_completed: number;
  tasks_deleted: number;
  tasks_entered: number;
  tasks_moved: number;
  url: string;
  wait_duration_until_accepted: string;
  wait_duration_until_canceled: string;
  workspace_sid: string;
}

interface TaskQueueCumulativeStatisticsListInstance {
}

/**
 * Options to pass to fetch
 *
 * @property endDate - Filter cumulative statistics by an end date.
 * @property minutes - Filter cumulative statistics by up to 'x' minutes in the past.
 * @property startDate - Filter cumulative statistics by a start date.
 * @property taskChannel - Filter real-time and cumulative statistics by TaskChannel.
 * @property splitByWaitTime - A comma separated values for viewing splits of tasks canceled and accepted above the given threshold in seconds.
 */
export interface FetchOptions {
  endDate?: Date;
  minutes?: number;
  splitByWaitTime?: string;
  startDate?: Date;
  taskChannel?: string;
}

/**
 * Options to pass to fetch
 *
 * @property endDate - Filter cumulative statistics by an end date.
 * @property minutes - Filter cumulative statistics by up to 'x' minutes in the past.
 * @property startDate - Filter cumulative statistics by a start date.
 * @property taskChannel - Filter real-time and cumulative statistics by TaskChannel.
 * @property splitByWaitTime - A comma separated values for viewing splits of tasks canceled and accepted above the given threshold in seconds.
 */
export interface FetchOptions {
  endDate?: Date;
  minutes?: number;
  splitByWaitTime?: string;
  startDate?: Date;
  taskChannel?: string;
}


declare class TaskQueueCumulativeStatisticsPage extends Page {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueCumulativeStatisticsPage
   * @augments Page
   * @description Initialize the TaskQueueCumulativeStatisticsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Taskrouter.V1, response: object, solution: object);

  /**
   * Build an instance of TaskQueueCumulativeStatisticsInstance
   *
   * @function getInstance
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueCumulativeStatisticsPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class TaskQueueCumulativeStatisticsInstance {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueCumulativeStatisticsInstance
   * @description Initialize the TaskQueueCumulativeStatisticsContext
   *
   * @property accountSid - The account_sid
   * @property avgTaskAcceptanceTime - The average time from Task creation to reservation acceptance while in this TaskQueue
   * @property startTime - The start_time
   * @property endTime - The end_time
   * @property reservationsCreated - The total number of Reservations that were created for Tasks while in this TaskQueue
   * @property reservationsAccepted - The total number of Reservations that were accepted for Tasks while in this TaskQueue
   * @property reservationsRejected - The total number of Reservations that were rejected for Tasks while in this TaskQueue
   * @property reservationsTimedOut - The total number of Reservations that were timed out for Tasks while in this TaskQueue
   * @property reservationsCanceled - The total number of Reservations that were canceled for Tasks while in this TaskQueue
   * @property reservationsRescinded - The total number of Reservations that were rescinded
   * @property splitByWaitTime - The splits of the tasks canceled and accepted based on the provided SplitByWaitTime parameter
   * @property taskQueueSid - The task_queue_sid
   * @property waitDurationUntilAccepted - The wait duration stats for tasks that were accepted while in this TaskQueue
   * @property waitDurationUntilCanceled - The wait duration stats for tasks that were canceled while in this TaskQueue
   * @property tasksCanceled - The total number of Tasks canceled while in this TaskQueue
   * @property tasksCompleted - The total number of Tasks completed while in this TaskQueue
   * @property tasksDeleted - The total number of Tasks that were deleted while in this TaskQueue
   * @property tasksEntered - The total number of Tasks entered into this TaskQueue
   * @property tasksMoved - The total number of Tasks moved to another TaskQueue from this TaskQueue
   * @property workspaceSid - The workspace_sid
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The workspace_sid
   * @param taskQueueSid - The task_queue_sid
   */
  constructor(version: Twilio.Taskrouter.V1, payload: object, workspaceSid: sid, taskQueueSid: sid);

  _proxy?: TaskQueueCumulativeStatisticsContext;
  /**
   * fetch a TaskQueueCumulativeStatisticsInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueCumulativeStatisticsInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: object, callback?: function);
  /**
   * Produce a plain JSON object version of the TaskQueueCumulativeStatisticsInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueCumulativeStatisticsInstance
   * @instance
   */
  toJSON();
}


declare class TaskQueueCumulativeStatisticsContext {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueCumulativeStatisticsContext
   * @description Initialize the TaskQueueCumulativeStatisticsContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   * @param taskQueueSid - The task_queue_sid
   */
  constructor(version: Twilio.Taskrouter.V1, workspaceSid: sid, taskQueueSid: sid);

  /**
   * fetch a TaskQueueCumulativeStatisticsInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueCumulativeStatisticsContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: object, callback?: function);
}

export { TaskQueueCumulativeStatisticsContext, TaskQueueCumulativeStatisticsInstance, TaskQueueCumulativeStatisticsList, TaskQueueCumulativeStatisticsListInstance, TaskQueueCumulativeStatisticsPage, TaskQueueCumulativeStatisticsResource }
