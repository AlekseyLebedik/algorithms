class loggerStep {
  steps = 0;

  add() {
    this.steps += 1;
  }

  logged() {
    console.log("You did steps ", this.steps);
  }
}

export default loggerStep;
