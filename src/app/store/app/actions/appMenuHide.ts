import { Actions, BaseAction } from '../../Actions';
import { createSimpleAction } from '../../utils/createSimpleAction';

export type AppMenuHideAction = BaseAction<Actions.APP_MENU_HIDE>;

export const appMenuHide: () => AppMenuHideAction = createSimpleAction(Actions.APP_MENU_HIDE);
