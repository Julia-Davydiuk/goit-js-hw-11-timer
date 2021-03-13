class CountdownTimer {
    constructor({selector, targetDate}) {
      this.selector = selector;
      this.targetDate = targetDate;
      this.days = document.querySelector(`${this.selector} [data-value="days"]`);
      this.hours = document.querySelector(
        `${this.selector} [data-value="hours"]`,
      );
      this.mins = document.querySelector(`${this.selector} [data-value="mins"]`);
      this.secs = document.querySelector(`${this.selector} [data-value="secs"]`);
    }
  
    updateTimer({ days, hours, mins, secs }) {
      this.days.textContent = days;
      this.hours.textContent = hours;
      this.mins.textContent = mins;
      this.secs.textContent = secs;
    }
  
    timer() {
      setInterval(() => {
        const currentTime = Date.now();
        const time = updateClock(this.targetDate - currentTime);
        this.updateTimer(time);
      }, 1000);
    }
  }

      function pad(value) {
      return String(value).padStart(2, '0');
    }
  
    const updateClock = time => {
        const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = pad(
          Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        );
        const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
          return { days, hours, mins, secs };
    }
  
  const newTimer = new CountdownTimer({
      selector: '#timer-1',
      targetDate: new Date('Apr 1, 2021'),
    });
  
  newTimer.timer();