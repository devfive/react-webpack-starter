import { Actions, BaseAction } from '../../Actions';
import { createSimpleAction } from '../../utils/createSimpleAction';

export type AppMenuShowAction = BaseAction<Actions.APP_MENU_SHOW>;

export const appMenuShow: () => AppMenuShowAction = createSimpleAction(Actions.APP_MENU_SHOW);
