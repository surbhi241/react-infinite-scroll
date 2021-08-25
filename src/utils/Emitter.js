class Emitter{
    constructor(){
        this.subscribers = {};
    }

    subscribe(eventname, callback){
      this.subscribers[eventname] = this.subscribers[eventname] && this.subscribers[eventname].length ? this.subscribers[eventname].push(callback) : [callback];
      return {
          unsubscribe: () => {
              const idx = this.subscribers[eventname].indexOf(callback);
              if(idx > -1){
                this.subscribers[eventname].splice(idx, 1);
              }
          }
      }
    }

    emit(eventname, ...rest){
        if(this.subscribers[eventname]){
           this.subscribers[eventname].forEach(element => {
               element(...rest)
           });
        }
    }
}


// click : [
//     callback, callback, callback
// ]
const emitter = new Emitter();


const cancelSubscription = emitter.subscribe("click", (a) => console.log("console b 1", a))
const cancelSubscription2 = emitter.subscribe("click", (a) => console.log("console b 2", a))


emitter.subscribe("click", (a,b, ...rest) => console.log("console click 3", a, b, ...rest));

emitter.subscribe("view", (a,b, ...rest) => console.log("console view", a, b, ...rest))

emitter.emit("view", "agggg", "bbh", "surbhi", "soni");
cancelSubscription.unsubscribe();
emitter.emit("click", 9 , 10, 11, 24);

