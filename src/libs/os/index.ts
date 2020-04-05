import * as os from 'os';

import { OperationSystemTypes } from '../../constants/enums';

export class OS {
	static currentRunningOs(): OperationSystemTypes {
		return OperationSystemTypes[os.type()];
	}
}
