class CountdownTimer {
    targetDate: Date;
  
    constructor(targetDate: Date) {
      this.targetDate = targetDate;
    }
  
    start() {
      setInterval(() => {
        const currentDate = new Date();
        const timeLeft = this.targetDate.getTime() - currentDate.getTime();
  
        if (timeLeft <= 0) {
          console.log('Countdown Timer Expired!');
        } else {
          const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
          console.log(`Time Left: ${days}d ${hours}h ${minutes}m ${seconds}s`);
        }
      }, 1000);
    }
  }
  
  const targetDate = new Date('2023-11-30T23:59:59');
  const timer = new CountdownTimer(targetDate);
  timer.start();
  