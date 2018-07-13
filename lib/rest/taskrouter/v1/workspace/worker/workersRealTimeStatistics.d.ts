/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import V1 = require('../../../V1');
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the WorkersRealTimeStatisticsList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The workspace_sid
 */
declare function WorkersRealTimeStatisticsList(version: V1, workspaceSid: string): WorkersRealTimeStatisticsListInstance;

interface WorkersRealTimeStatisticsResource {
  account_sid: string;
  activity_statistics: string;
  total_workers: number;
  url: string;
  workspace_sid: string;
}

interface WorkersRealTimeStatisticsListInstance {
}

/**
 * Options to pass to fetch
 *
 * @property taskChannel - Filter cumulative statistics by TaskChannel.
 */
export interface FetchOptions {
  taskChannel?: string;
}

/**
 * Options to pass to fetch
 *
 * @property taskChannel - Filter cumulative statistics by TaskChannel.
 */
export interface FetchOptions {
  taskChannel?: string;
}


declare class WorkersRealTimeStatisticsPage extends Page {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsPage
   * @augments Page
   * @description Initialize the WorkersRealTimeStatisticsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Taskrouter.V1, response: object, solution: object);

  /**
   * Build an instance of WorkersRealTimeStatisticsInstance
   *
   * @function getInstance
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class WorkersRealTimeStatisticsInstance {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsInstance
   * @description Initialize the WorkersRealTimeStatisticsContext
   *
   * @property accountSid - The account_sid
   * @property activityStatistics - The current Worker status count breakdown by Activity
   * @property totalWorkers - The total number of Workers
   * @property workspaceSid - The workspace_sid
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The workspace_sid
   */
  constructor(version: Twilio.Taskrouter.V1, payload: object, workspaceSid: sid);

  _proxy?: WorkersRealTimeStatisticsContext;
  /**
   * fetch a WorkersRealTimeStatisticsInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: object, callback?: function);
  /**
   * Produce a plain JSON object version of the WorkersRealTimeStatisticsInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsInstance
   * @instance
   */
  toJSON();
}


declare class WorkersRealTimeStatisticsContext {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsContext
   * @description Initialize the WorkersRealTimeStatisticsContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   */
  constructor(version: Twilio.Taskrouter.V1, workspaceSid: sid);

  /**
   * fetch a WorkersRealTimeStatisticsInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersRealTimeStatisticsContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: object, callback?: function);
}

export { WorkersRealTimeStatisticsContext, WorkersRealTimeStatisticsInstance, WorkersRealTimeStatisticsList, WorkersRealTimeStatisticsListInstance, WorkersRealTimeStatisticsPage, WorkersRealTimeStatisticsResource }
