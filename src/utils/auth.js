import {  tokenName ,inviteCode} from "@/settings";

export function getToken() {
  return  localStorage.getItem(tokenName);
}

/**
 *
 * @param {string} token
 */
export function setToken(token) {
  return  localStorage.setItem(tokenName, token); //设置token

}
/**
 *
 * @param {string||parseInt} id
 */
export function setInviteCode(id) {
  return  localStorage.setItem(inviteCode, id); //设置邀请人

}

export function removeToken() {
  return localStorage.removeItem(tokenName);
}
