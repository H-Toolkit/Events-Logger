import eventsLogger from '../src/main';

// Test case: remove all invalid files name
import { EventEmitter } from 'events';

// console.log('EventEmitter', );

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
eventsLogger(myEmitter);

myEmitter.on('event_name', () => {
	console.log('Event processes!');
});

myEmitter.emit('event_name');
