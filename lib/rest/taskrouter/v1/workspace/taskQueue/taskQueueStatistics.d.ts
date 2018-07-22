/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the TaskQueueStatisticsList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The workspace_sid
 * @param taskQueueSid - The task_queue_sid
 */
declare function TaskQueueStatisticsList(version: V1, workspaceSid: string, taskQueueSid: string): TaskQueueStatisticsListInstance;

interface TaskQueueStatisticsResource {
  account_sid: string;
  cumulative: string;
  realtime: string;
  task_queue_sid: string;
  url: string;
  workspace_sid: string;
}

interface TaskQueueStatisticsPayload extends TaskQueueStatisticsResource, Page.TwilioResponsePayload {
}

interface TaskQueueStatisticsSolution {
  taskQueueSid?: string;
  workspaceSid?: string;
}

interface TaskQueueStatisticsListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): TaskQueueStatisticsContext;
  /**
   * Constructs a task_queue_statistics
   */
  get(): TaskQueueStatisticsContext;
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
interface TaskQueueStatisticsInstanceFetchOptions {
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
interface TaskQueueStatisticsInstanceFetchOptions {
  endDate?: Date;
  minutes?: number;
  splitByWaitTime?: string;
  startDate?: Date;
  taskChannel?: string;
}


declare class TaskQueueStatisticsPage extends Page<V1, TaskQueueStatisticsPayload, TaskQueueStatisticsResource, TaskQueueStatisticsInstance> {
  /**
   * Initialize the TaskQueueStatisticsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: TaskQueueStatisticsSolution);

  /**
   * Build an instance of TaskQueueStatisticsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: TaskQueueStatisticsPayload): TaskQueueStatisticsInstance;
}


declare class TaskQueueStatisticsInstance extends SerializableClass {
  /**
   * Initialize the TaskQueueStatisticsContext
   *
   * @property accountSid - The account_sid
   * @property cumulative - The cumulative
   * @property realtime - The realtime
   * @property taskQueueSid - The task_queue_sid
   * @property workspaceSid - The workspace_sid
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The workspace_sid
   * @param taskQueueSid - The task_queue_sid
   */
  constructor(version: V1, payload: TaskQueueStatisticsPayload, workspaceSid: string, taskQueueSid: string);

  private _proxy: TaskQueueStatisticsContext;
  accountSid: string;
  cumulative: string;
  /**
   * fetch a TaskQueueStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: TaskQueueStatisticsInstanceFetchOptions, callback?: (error: Error | null, items: TaskQueueStatisticsInstance) => any): void;
  realtime: string;
  taskQueueSid: string;
  url: string;
  workspaceSid: string;
}


declare class TaskQueueStatisticsContext {
  /**
   * Initialize the TaskQueueStatisticsContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   * @param taskQueueSid - The task_queue_sid
   */
  constructor(version: V1, workspaceSid: string, taskQueueSid: string);

  /**
   * fetch a TaskQueueStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: TaskQueueStatisticsInstanceFetchOptions, callback?: (error: Error | null, items: TaskQueueStatisticsInstance) => any): void;
}

export { TaskQueueStatisticsContext, TaskQueueStatisticsInstance, TaskQueueStatisticsList, TaskQueueStatisticsListInstance, TaskQueueStatisticsPage, TaskQueueStatisticsPayload, TaskQueueStatisticsResource, TaskQueueStatisticsSolution }
