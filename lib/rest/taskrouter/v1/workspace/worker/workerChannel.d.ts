/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import V1 = require('../../../V1');
import deserialize = require('../../../../../base/deserialize');
import serialize = require('../../../../../base/serialize');
import values = require('../../../../../base/values');


/**
 * Options to pass to update
 *
 * @property capacity - The total number of Tasks worker should handle for this TaskChannel type.
 * @property available - Toggle the availability of the WorkerChannel.
 */
export interface UpdateOptions {
  available?: boolean;
  capacity?: number;
}

/**
 * Options to pass to update
 *
 * @property capacity - The total number of Tasks worker should handle for this TaskChannel type.
 * @property available - Toggle the availability of the WorkerChannel.
 */
export interface UpdateOptions {
  available?: boolean;
  capacity?: number;
}


declare class WorkerChannelPage extends Page {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkerChannelPage
   * @augments Page
   * @description Initialize the WorkerChannelPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Taskrouter.V1, response: object, solution: object);

  /**
   * Build an instance of WorkerChannelInstance
   *
   * @function getInstance
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkerChannelPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}

declare class WorkerChannelInstance {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkerChannelInstance
   * @description Initialize the WorkerChannelContext
   *
   * @property accountSid - The unique ID of the Account that owns this WorkerChannel.
   * @property assignedTasks - The total number of tasks assigned to Worker for this TaskChannel type.
   * @property available - Boolean value indicating whether the worker should receive Tasks of this TaskChannel type.
   * @property availableCapacityPercentage - The current available capacity between 0 to 100 for this TaskChannel.
   * @property configuredCapacity - The current configured capacity for the WorkerChannel.
   * @property dateCreated - The date this Activity was created.
   * @property dateUpdated - The date this Activity was updated.
   * @property sid - The unique ID for this WorkerChannel.
   * @property taskChannelSid - The unique ID of the TaskChannel.
   * @property taskChannelUniqueName - The unique name of TaskChannel, such as 'voice', 'sms', etc.
   * @property workerSid - The unique ID of the Worker that this WorkerChannel belongs to.
   * @property workspaceSid - The unique ID of the Workspace that this WorkerChannel belongs to.
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The unique ID of the Workspace that this WorkerChannel belongs to.
   * @param workerSid - The unique ID of the Worker that this WorkerChannel belongs to.
   * @param sid - The sid
   */
  constructor(version: Twilio.Taskrouter.V1, payload: object, workspaceSid: sid, workerSid: sid, sid: sid_like);

  _proxy?: WorkerChannelContext;
  /**
   * fetch a WorkerChannelInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkerChannelInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the WorkerChannelInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkerChannelInstance
   * @instance
   */
  toJSON();
  /**
   * update a WorkerChannelInstance
   *
   * @function update
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkerChannelInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

declare class WorkerChannelContext {
  /**
   * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkerChannelContext
   * @description Initialize the WorkerChannelContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   * @param workerSid - The worker_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Taskrouter.V1, workspaceSid: sid, workerSid: sid, sid: sid_like);

  /**
   * fetch a WorkerChannelInstance
   *
   * @function fetch
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkerChannelContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * update a WorkerChannelInstance
   *
   * @function update
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkerChannelContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { WorkerChannelContext, WorkerChannelInstance, WorkerChannelList, WorkerChannelPage }
