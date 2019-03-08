import store from '../reducers/index.js';

export const MEMBER_UPDATE_SELECTED_CANDIDATES = 'MEMBER/UPDATE_SELECTED_CANDIDATES';
export const MEMBER_LOGIN = 'MEMBER/LOGIN';

export function updateMemberSelectedCandidates(selectedCandidates) {
  return () => store.dispatch({
    type: [MEMBER_UPDATE_SELECTED_CANDIDATES],
    selectedCandidates,
  });
}

export function storeLoginMemberData(member) {
  return () => store.dispatch({
    type: [MEMBER_LOGIN],
    member,
  });
}
