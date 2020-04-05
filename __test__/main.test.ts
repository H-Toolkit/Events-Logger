import eventsLogger from '../src/main';

// Test case: remove all invalid files name
import { EventEmitter } from 'events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Bind the events logger
eventsLogger(myEmitter);

myEmitter.on('event_name', () => {
	console.log('Event processes!');
});

// Every 500 mile-second emit the event
const func = () =>
	setTimeout(() => {
		myEmitter.emit('event_name', () => [{ x: 'Hello there', y: [2, true] }]);
		func();
	}, Math.floor(Math.random() * 3e3));
func();

// myEmitter.emit('event_name');
