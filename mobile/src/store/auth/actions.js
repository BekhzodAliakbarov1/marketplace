import api from '@common/api';

// import IdentityApi from '@common/services/IdentityApi';

export async function register({ commit }, userData) {
  try {
    await api.register(userData);
    commit('setIsAuthorized', true);
  } catch {
    commit('setIsAuthorized', false);
    throw new Error('Could not register');
  }
}

export async function login({ commit }, credentials) {
  try {
    console.log('LOGIN ACTION');
    await api.login(credentials);
    // const me = await IdentityApi.me();
    commit('setIsAuthorized', true);
  } catch {
    commit('setIsAuthorized', false);
    throw new Error('Could not login');
  }
}

export async function logout({ commit }) {
  await api.logout();
  commit('setIsAuthorized', false);
}
