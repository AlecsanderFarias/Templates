export function getMeRequest() {
  console.log('action');

  return {
    type: '@user/GET_ME_REQUEST',
  };
}

export function getMeSuccess(me) {
  return {
    type: '@user/GET_ME_SUCCESS',
    payload: { me },
  };
}

export function updateMeRequest(data) {
  return {
    type: '@user/UPDATE_ME_REQUEST',
    payload: data,
  };
}

export function getMeFail() {
  return {
    type: '@user/GET_ME_FAIL',
  };
}
