/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import serialize = require('../../../../base/serialize');
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the WorkspaceCumulativeStatisticsList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The workspace_sid
 */
declare function WorkspaceCumulativeStatisticsList(version: V1, workspaceSid: string): WorkspaceCumulativeStatisticsListInstance;

interface WorkspaceCumulativeStatisticsResource {
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
  tasks_canceled: number;
  tasks_completed: number;
  tasks_created: number;
  tasks_deleted: number;
  tasks_moved: number;
  tasks_timed_out_in_workflow: number;
  url: string;
  wait_duration_until_accepted: string;
  wait_duration_until_canceled: string;
  workspace_sid: string;
}

interface WorkspaceCumulativeStatisticsPayload extends WorkspaceCumulativeStatisticsResource, Page.TwilioResponsePayload {
}

interface WorkspaceCumulativeStatisticsSolution {
  workspaceSid?: string;
}

interface WorkspaceCumulativeStatisticsListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): WorkspaceCumulativeStatisticsContext;
  /**
   * Constructs a workspace_cumulative_statistics
   */
  get(): WorkspaceCumulativeStatisticsContext;
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
interface WorkspaceCumulativeStatisticsInstanceFetchOptions {
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
interface WorkspaceCumulativeStatisticsInstanceFetchOptions {
  endDate?: Date;
  minutes?: number;
  splitByWaitTime?: string;
  startDate?: Date;
  taskChannel?: string;
}


declare class WorkspaceCumulativeStatisticsPage extends Page<V1, WorkspaceCumulativeStatisticsPayload, WorkspaceCumulativeStatisticsResource, WorkspaceCumulativeStatisticsInstance> {
  /**
   * Initialize the WorkspaceCumulativeStatisticsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: WorkspaceCumulativeStatisticsSolution);

  /**
   * Build an instance of WorkspaceCumulativeStatisticsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WorkspaceCumulativeStatisticsPayload): WorkspaceCumulativeStatisticsInstance;
}


declare class WorkspaceCumulativeStatisticsInstance extends SerializableClass {
  /**
   * Initialize the WorkspaceCumulativeStatisticsContext
   *
   * @property accountSid - The account_sid
   * @property avgTaskAcceptanceTime - The average time from Task creation to acceptance
   * @property startTime - The start_time
   * @property endTime - The end_time
   * @property reservationsCreated - The total number of Reservations that were created for Workers
   * @property reservationsAccepted - The total number of Reservations accepted by Workers
   * @property reservationsRejected - The total number of Reservations that were rejected
   * @property reservationsTimedOut - The total number of Reservations that were timed out
   * @property reservationsCanceled - The total number of Reservations that were canceled
   * @property reservationsRescinded - The total number of Reservations that were rescinded
   * @property splitByWaitTime - The splits of the tasks canceled and accepted based on the provided SplitByWaitTime parameter.
   * @property waitDurationUntilAccepted - The wait duration stats for tasks that were accepted.
   * @property waitDurationUntilCanceled - The wait duration stats for tasks that were canceled.
   * @property tasksCanceled - The total number of Tasks that were canceled
   * @property tasksCompleted - The total number of Tasks that were completed
   * @property tasksCreated - The total number of Tasks created
   * @property tasksDeleted - The total number of Tasks that were deleted
   * @property tasksMoved - The total number of Tasks that were moved from one queue to another
   * @property tasksTimedOutInWorkflow - The total number of Tasks that were timed out of their Workflows
   * @property workspaceSid - The workspace_sid
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The workspace_sid
   */
  constructor(version: V1, payload: WorkspaceCumulativeStatisticsPayload, workspaceSid: string);

  private _proxy: WorkspaceCumulativeStatisticsContext;
  accountSid: string;
  avgTaskAcceptanceTime: number;
  endTime: Date;
  /**
   * fetch a WorkspaceCumulativeStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: WorkspaceCumulativeStatisticsInstanceFetchOptions, callback?: (error: Error | null, items: WorkspaceCumulativeStatisticsInstance) => any): void;
  reservationsAccepted: number;
  reservationsCanceled: number;
  reservationsCreated: number;
  reservationsRejected: number;
  reservationsRescinded: number;
  reservationsTimedOut: number;
  splitByWaitTime: string;
  startTime: Date;
  tasksCanceled: number;
  tasksCompleted: number;
  tasksCreated: number;
  tasksDeleted: number;
  tasksMoved: number;
  tasksTimedOutInWorkflow: number;
  url: string;
  waitDurationUntilAccepted: string;
  waitDurationUntilCanceled: string;
  workspaceSid: string;
}


declare class WorkspaceCumulativeStatisticsContext {
  /**
   * Initialize the WorkspaceCumulativeStatisticsContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   */
  constructor(version: V1, workspaceSid: string);

  /**
   * fetch a WorkspaceCumulativeStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: WorkspaceCumulativeStatisticsInstanceFetchOptions, callback?: (error: Error | null, items: WorkspaceCumulativeStatisticsInstance) => any): void;
}

export { WorkspaceCumulativeStatisticsContext, WorkspaceCumulativeStatisticsInstance, WorkspaceCumulativeStatisticsList, WorkspaceCumulativeStatisticsListInstance, WorkspaceCumulativeStatisticsPage, WorkspaceCumulativeStatisticsPayload, WorkspaceCumulativeStatisticsResource, WorkspaceCumulativeStatisticsSolution }
