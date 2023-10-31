var CountdownTimer = /** @class */ (function () {
    function CountdownTimer(targetDate) {
        this.targetDate = targetDate;
    }
    CountdownTimer.prototype.start = function () {
        var _this = this;
        setInterval(function () {
            var currentDate = new Date();
            var timeLeft = _this.targetDate.getTime() - currentDate.getTime();
            if (timeLeft <= 0) {
                console.log('Countdown Timer Expired!');
            }
            else {
                var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
                console.log("Time Left: ".concat(days, "d ").concat(hours, "h ").concat(minutes, "m ").concat(seconds, "s"));
            }
        }, 1000);
    };
    return CountdownTimer;
}());
var targetDate = new Date('2023-11-30T23:59:59');
var timer = new CountdownTimer(targetDate);
timer.start();
