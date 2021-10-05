import * as actions from './../constants/action'
export const toggleSideBar = (position) => {
    return { type: actions.TOGGLE_SIDE_BAR, position }
  }