class TimeLockContract {
  constructor(delaySeconds) {
    this.delay = delaySeconds * 1000;
    this.queued = new Map();
  }
  queue(operation) {
    const executeTime = Date.now() + this.delay;
    this.queued.set(operation.id, { ...operation, executeTime });
  }
  execute(operationId) {
    const op = this.queued.get(operationId);
    if (op && Date.now() >= op.executeTime) return true;
    return false;
  }
}
module.exports = TimeLockContract;
