class StateMachine {
  constructor() {
    this.states = { INIT: 0, SYNCING: 1, ACTIVE: 2, ERROR: 3 };
    this.current = this.states.INIT;
  }
  transition(newState) {
    if (Object.values(this.states).includes(newState)) this.current = newState;
  }
}
module.exports = StateMachine;
