/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import serialize = require('../../../../../base/serialize');
import values = require('../../../../../base/values');


/**
 * Options to pass to fetch
 *
 * @property minutes - Filter cumulative statistics by up to 'x' minutes in the past.
 * @property startDate - Filter cumulative statistics by a start date.
 * @property endDate - Filter cumulative statistics by a end date.
 * @property taskQueueSid - Filter the real-time and cumulative statistics based on Workers tied to a particular queue
 * @property taskQueueName - Filter the real-time and cumulative statistics based on Workers tied to a particular queue
 * @property friendlyName - The friendly_name
 * @property taskChannel - Filter cumulative statistics by TaskChannel.
 */
export interface FetchOptions {
  endDate?: Date;
  friendlyName?: string;
  minutes?: number;
  startDate?: Date;
  taskChannel?: string;
  taskQueueName?: string;
  taskQueueSid?: string;
}

/**
 * Options to pass to fetch
 *
 * @property minutes - Filter cumulative statistics by up to 'x' minutes in the past.
 * @property startDate - Filter cumulative statistics by a start date.
 * @property endDate - Filter cumulative statistics by a end date.
 * @property taskQueueSid - Filter the real-time and cumulative statistics based on Workers tied to a particular queue
 * @property taskQueueName - Filter the real-time and cumulative statistics based on Workers tied to a particular queue
 * @property friendlyName - The friendly_name
 * @property taskChannel - Filter cumulative statistics by TaskChannel.
 */
export interface FetchOptions {
  endDate?: Date;
  friendlyName?: string;
  minutes?: number;
  startDate?: Date;
  taskChannel?: string;
  taskQueueName?: string;
  taskQueueSid?: string;
}


declare class WorkersStatisticsPage extends Page {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersStatisticsPage
   * @augments Page
   * @description Initialize the WorkersStatisticsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Taskrouter.V1, response: object, solution: object);

  /**
   * Build an instance of WorkersStatisticsInstance
   *
   * @function getInstance
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersStatisticsPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}

declare class WorkersStatisticsInstance {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersStatisticsInstance
   * @description Initialize the WorkersStatisticsContext
   *
   * @property realtime - The realtime
   * @property cumulative - The cumulative
   * @property accountSid - The account_sid
   * @property workspaceSid - The workspace_sid
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The ID of the Workflow this worker is associated with
   */
  constructor(version: Twilio.Taskrouter.V1, payload: object, workspaceSid: sid);

  _proxy?: WorkersStatisticsContext;
  /**
   * fetch a WorkersStatisticsInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersStatisticsInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: object, callback?: function);
  /**
   * Produce a plain JSON object version of the WorkersStatisticsInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersStatisticsInstance
   * @instance
   */
  toJSON();
}

declare class WorkersStatisticsContext {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersStatisticsContext
   * @description Initialize the WorkersStatisticsContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   */
  constructor(version: Twilio.Taskrouter.V1, workspaceSid: sid);

  /**
   * fetch a WorkersStatisticsInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersStatisticsContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: object, callback?: function);
}

export { WorkersStatisticsContext, WorkersStatisticsInstance, WorkersStatisticsList, WorkersStatisticsPage }
