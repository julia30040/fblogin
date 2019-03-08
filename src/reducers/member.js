import {
  MEMBER_UPDATE_SELECTED_CANDIDATES,
  MEMBER_LOGIN,
} from '../actions/member.js';

const initialValues = {
  me: {
    id: '',
    name: '',
    email: '',
    accessToken: '',
  },
  selectedCandidates: [],
}

function member(state = initialValues, action) {
  // For now, don't handle any actions
  // and just return the state given to us.
  switch (action.type[0]) {
    case MEMBER_LOGIN:
      return {
        ...state,
        me: {
          id: action.member.id,
          name: action.member.name,
          email: action.member.email,
          accessToken: action.member.accessToken,
        },
      }
    case MEMBER_UPDATE_SELECTED_CANDIDATES:
      return {
        ...state,
        selectedCandidates: [
          ...action.selectedCandidates,
        ],
      }
    default:

  }

  return state
}

export default member;
