import { Actions, BaseAction } from '../../Actions';
import { createSimpleAction } from '../../utils/createSimpleAction';

export type AppLoadingAction = BaseAction<Actions.APP_LOADING>;

export const appLoading: () => AppLoadingAction = createSimpleAction(Actions.APP_LOADING);
