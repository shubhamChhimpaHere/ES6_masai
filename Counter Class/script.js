class Counter {
    constructor(result, autobtn) {
        this.count = 0;
        this.clearId = null;

    }

    auto() {

        if (autobtn.textContent === 'Start') {

            autobtn.innerHTML = `<h1>Stop</h1>`;

            this.clearId = setInterval(() => {
                this.count++;
                result.textContent = counter.count;
            }, 1000);

        } else {
            clearInterval(this.clearId);
            autobtn.innerHTML = `<h1>Start</h1>`;
        }

    }

    increase() {

        this.count = ++this.count;
        result.textContent = this.count;
        clearInterval(this.clearId);
        autobtn.innerHTML = `<h1>Start</h1>`;

    }

    decrease() {


        this.count = --this.count < 0 ? 0 : this.count;
        result.textContent = this.count;
        clearInterval(this.clearId);
        autobtn.innerHTML = `<h1>Start</h1>`;
    
    }
}


let result = document.getElementById('result');
let autobtn = document.getElementById('auto');
let decreasebtn = document.getElementById('decrease');
let increasebtn = document.getElementById('increase');



let counter = new Counter(result, auto);


autobtn.addEventListener('click', () => {
    counter.auto();
})

decreasebtn.addEventListener('click', () => {
    counter.decrease();

})

increasebtn.addEventListener('click', () => {
    counter.increase();
})