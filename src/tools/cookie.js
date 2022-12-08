import Cookies from 'js-cookie'

// idMd5
const idMd5 = 'idMd5';
export function getIdMd5() {
    return Cookies.get(idMd5)
}
export function setIdMd5(value) {
    return Cookies.set(idMd5, value)
}
export function removeIdMd5() {
    return Cookies.remove(idMd5)
}

// idCard
const idCard = 'idCard';
export function getIdCard() {
    return Cookies.get(idCard)
}
export function setIdCard(value) {
    return Cookies.set(idCard, value)
}
export function removeIdCard() {
    return Cookies.remove(idCard)
}

// name
const name = 'name';
export function getName() {
    return Cookies.get(name)
}
export function setName(value) {
    return Cookies.set(name, value)
}
export function removeName() {
    return Cookies.remove(name)
}

// mobile
const mobile = 'mobile';
export function getMobile() {
    return Cookies.get(mobile)
}
export function setMobile(value) {
    return Cookies.set(mobile, value)
}
export function removeMobile() {
    return Cookies.remove(mobile)
}

// token
const TokenKey = 'token';
export function getToken() {
    return Cookies.get(TokenKey)
}
export function setToken(value) {
    return Cookies.set(TokenKey, value)
}
export function removeToken() {
    return Cookies.remove(TokenKey)
}

//token过期时间
const expireTime = 'expireTime';
export function getExpiresTime() {
    return Cookies.get(expireTime)
}
export function setExpiresTime(value) {
    return Cookies.set(expireTime, value)
}
export function removeExpiresTime() {
    return Cookies.remove(expireTime)
}

// bidHelper
const bidHelper = 'bidHelper';
export function getBidHelper() {
    return Cookies.get(bidHelper) || '{}'
}
export function setBidHelper(value) {
    return Cookies.set(bidHelper, value)
}
export function removeBidHelper() {
    return Cookies.remove(bidHelper)
}

// issueDates
const issueDates = 'issueDates';
export function getIssueDate() {
    return Cookies.get(issueDates) || '{}'
}
export function setIssueDates(value) {
    return Cookies.set(issueDates, value)
}
export function removeIssueDates() {
    return Cookies.remove(issueDates)
}
