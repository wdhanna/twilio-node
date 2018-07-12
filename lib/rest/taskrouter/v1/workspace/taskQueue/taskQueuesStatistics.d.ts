/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import V1 = require('../../../V1');
import serialize = require('../../../../../base/serialize');
import values = require('../../../../../base/values');



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

export { TaskQueuesStatisticsInstance, TaskQueuesStatisticsList, TaskQueuesStatisticsPage }
