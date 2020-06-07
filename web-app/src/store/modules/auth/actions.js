export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSucess(token, me) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, me },
  };
}

export function signUpRequest(info, navigation) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: info,
    navigation,
  };
}

export function signUpSuccess() {
  return {
    type: '@auth/SIGN_UP_SUCCESS',
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
