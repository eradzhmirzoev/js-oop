const divClock = document.querySelector('.clock');

function Clock(divClock) {
    this.arr = [];

    this.pushArr = function() {
        let li = document.createElement('li');
        this.arr.push(li);
    };
    
    this.changeOption = function(e) {
        for(let i = 0; i < this.arr.length; i++) {
            this.arr[i].classList.toggle('short-format');
        }
    };

    divClock.addEventListener('click', this.changeOption.bind(this));

    this.showTime = function() {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i].className !== 'short-format') {
                this.arr[i].innerHTML = new Date().toTimeString().split(' ')[0];
            } else {
                this.arr[i].innerHTML = new Date().toTimeString().split(' ')[0].substring(0,5);
            }
            divClock.append(this.arr[i]);
        }
    };

    this.render = function() {
        this.pushArr();
        setInterval(()=> this.showTime(), 1000);
    };
}

let clock = new Clock(divClock);


clock.render();
clock.render();
clock.render();


