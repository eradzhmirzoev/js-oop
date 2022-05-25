function Clock(clockNode) {
    this.clockNode = clockNode;

    this.clockNode.addEventListener('click', (event) => {
        event.target.classList.toggle('short-format');  
    });
}

Clock.prototype.startClock = function() {
    let date = new Date().toTimeString().split(' ')[0];

    if(this.clockNode.classList.contains('short-format')) {
        date = new Date().toTimeString().split(' ')[0].substring(0,5);
    }

    this.clockNode.innerHTML = date;
}

Clock.prototype.render = function() {
    setInterval(()=> this.startClock(), 1000);
}

let clock1 = new Clock(document.querySelector('.clock1'));
let clock2 = new Clock(document.querySelector('.clock2'));
let clock3 = new Clock(document.querySelector('.clock3'));

clock1.render();
clock2.render();
clock3.render();





