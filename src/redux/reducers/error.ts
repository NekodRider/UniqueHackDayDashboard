import { AnyAction } from 'redux';

export interface ErrorStatus {
  // loginError: string;
  // registerError: string;

  // newTeamError: string;
  [k: string]: string;
}

export default function loadingStatus(
  state: ErrorStatus = {
    // loginError: '',
    // registerError: '',
    // newTeamError: '',
  },
  action: AnyAction,
) {
  const [, type] = action.type.match(/^([A-Z_]+?)_(SUBMIT_)?FAILED$/) || new Array(3);
  if (type) {
    return {
      ...state,
      [`${type
        .toLowerCase()
        .replace(/_[a-z]/g, (e: string) => e[1].toUpperCase())}Error`]: action.payload,
    };
  }

  return state;
}
