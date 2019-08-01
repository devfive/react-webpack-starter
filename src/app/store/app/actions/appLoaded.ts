import { Actions, BaseAction } from '../../Actions';
import { createSimpleAction } from '../../utils/createSimpleAction';

export type AppLoadedAction = BaseAction<Actions.APP_LOADED>;

export const appLoaded: () => AppLoadedAction = createSimpleAction(Actions.APP_LOADED);
