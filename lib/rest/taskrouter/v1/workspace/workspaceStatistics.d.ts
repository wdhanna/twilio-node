/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import V1 = require('../../V1');
import serialize = require('../../../../base/serialize');
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the WorkspaceStatisticsList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The workspace_sid
 */
declare function WorkspaceStatisticsList(version: V1, workspaceSid: string): WorkspaceStatisticsListInstance;

interface WorkspaceStatisticsResource {
  account_sid: string;
  cumulative: string;
  realtime: string;
  url: string;
  workspace_sid: string;
}

interface WorkspaceStatisticsListInstance {
}

/**
 * Options to pass to fetch
 *
 * @property minutes - Filter cumulative statistics by up to 'x' minutes in the past.
 * @property startDate - Filter cumulative statistics by a start date.
 * @property endDate - Filter cumulative statistics by an end date.
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
 * @property minutes - Filter cumulative statistics by up to 'x' minutes in the past.
 * @property startDate - Filter cumulative statistics by a start date.
 * @property endDate - Filter cumulative statistics by an end date.
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


declare class WorkspaceStatisticsPage extends Page {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceStatisticsPage
   * @augments Page
   * @description Initialize the WorkspaceStatisticsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Taskrouter.V1, response: object, solution: object);

  /**
   * Build an instance of WorkspaceStatisticsInstance
   *
   * @function getInstance
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceStatisticsPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class WorkspaceStatisticsInstance {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceStatisticsInstance
   * @description Initialize the WorkspaceStatisticsContext
   *
   * @property realtime - The realtime
   * @property cumulative - The cumulative
   * @property accountSid - The account_sid
   * @property workspaceSid - The workspace_sid
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The workspace_sid
   */
  constructor(version: Twilio.Taskrouter.V1, payload: object, workspaceSid: sid);

  _proxy?: WorkspaceStatisticsContext;
  /**
   * fetch a WorkspaceStatisticsInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceStatisticsInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: object, callback?: function);
  /**
   * Produce a plain JSON object version of the WorkspaceStatisticsInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceStatisticsInstance
   * @instance
   */
  toJSON();
}


declare class WorkspaceStatisticsContext {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceStatisticsContext
   * @description Initialize the WorkspaceStatisticsContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   */
  constructor(version: Twilio.Taskrouter.V1, workspaceSid: sid);

  /**
   * fetch a WorkspaceStatisticsInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkspaceStatisticsContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: object, callback?: function);
}

export { WorkspaceStatisticsContext, WorkspaceStatisticsInstance, WorkspaceStatisticsList, WorkspaceStatisticsListInstance, WorkspaceStatisticsPage, WorkspaceStatisticsResource }
