import * as path from 'path';

import { commonRegex } from '../../constants/common-regex';
import { PathType } from '../../constants/enums';

export class Names {
	static validFileName(fileName: string): string {
		return this._removeExtraSpaces(fileName.replace(commonRegex.invalidFilesName, ''));
	}

	static toValidDirPath(dirPath: string): string {
		const pathType = path.isAbsolute(dirPath) ? PathType.absolute : PathType.relative;
		const _removeInvalidSymbols = dirPath.replace(commonRegex.invalidDirPath[pathType], '');
		const _removeInvalidDirEnds = this._removeInvalidDirEnds(_removeInvalidSymbols);
		return this._removeExtraSpaces(_removeInvalidDirEnds);
	}

	private static _removeInvalidDirEnds(dirPath: string): string {
		return dirPath.replace(commonRegex.invalidDirsEnd, '$1');
	}

	private static _removeExtraSpaces(fileName: string): string {
		return fileName.replace(commonRegex.extraSpaces, ' ');
	}
}
