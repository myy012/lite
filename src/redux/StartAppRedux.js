/**
 * @desc [For Rehydration redux]
 * @author [xiongjiangang]
 */
import CreateAction from './utils/CreateAction';

const STARTAPP = 'STARTAPP';

export const StartAppTypes = {
   	STARTAPP
};

export const StartAppActions = {
   	startApp: CreateAction(STARTAPP)
};
