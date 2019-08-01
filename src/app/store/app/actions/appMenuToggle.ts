import { Actions, BaseAction } from '../../Actions';
import { createSimpleAction } from '../../utils/createSimpleAction';

export type AppMenuToggleAction = BaseAction<Actions.APP_MENU_TOGGLE>;

export const appMenuToggle: () => AppMenuToggleAction = createSimpleAction(Actions.APP_MENU_TOGGLE);
