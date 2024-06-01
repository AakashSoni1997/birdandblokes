import axios from 'axios'
import { getUrlWithParams } from "../utils/getUrlWithParams"
import { handleResponse, handleError } from "../utils/responseHandlers"

const getToken = () => {
  const token = localStorage.getItem('token')
  if (!token) {
    throw new Error('Token not found in localStorage')
  }
  return token
}



const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/events'
})

axiosInstance.interceptors.request.use(config => {
  const token = getToken()
  config.headers.Authorization = `Bearer ${token}`
  config.headers['Content-Type'] = 'application/json'
  return config
})

export const getEventList = async (url) => {
  try {
    const response = await axios.get(url)
    console.log("response", response)
    return handleResponse(response)
  } catch (error) {
    return handleError(error)
  }
}

export const getEventListById = async (url, pathParams = {}, queryParams = {}) => {
  const fullUrl = getUrlWithParams(url, pathParams, queryParams);
  try {
    const response = await axios.get(fullUrl);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

export const updateEventListById = async (url, pathParams = {}, queryParams = {}, body) => {
  const fullUrl = getUrlWithParams(url, pathParams, queryParams);
  try {
    const response = await axios.put(fullUrl, body);
    console.log("response", response)
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};
