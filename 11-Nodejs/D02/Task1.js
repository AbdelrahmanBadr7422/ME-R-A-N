// Event
const EventEmitter = require("events");
const myEvent = new EventEmitter();

myEvent.once("firstEvent", () => {
  console.log("This is first event");
});

myEvent.emit("firstEvent");