import * as chalk from 'chalk';

let start: number = Date.now();

export default (objToLog: any, _loggerName?: string) => {
	const emit = objToLog && objToLog.emit;
	if (typeof emit !== 'function') return;

	objToLog.emit = function (event: string, ...args: any) {
		const end = Date.now();
		const diff = start === null ? 0 : end - start;
		start = end;

		console.error(
			chalk.yellow((_loggerName || objToLog.constructor.name) + ':'),
			chalk.white(event),
			args && args.join().length < 300 ? chalk.gray('(' + args.join(', ') + ')') : '',
			chalk.red('interval: +' + diff + 'ms')
		);

		return emit.apply(this, arguments);
	};
};
