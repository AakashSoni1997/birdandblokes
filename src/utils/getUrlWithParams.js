/**
 * Creates a URL with path and query parameters.
 *
 * @param {string} baseUrl - The base URL with placeholders for path parameters (e.g., '/api/users/:id').
 * @param {Object} pathParams - An object representing the path parameters.
 * @param {Object} queryParams - An object representing the query parameters.
 * @return {string} - The constructed URL with path and query parameters.
 */
export const getUrlWithParams = (baseUrl, pathParams = {}, queryParams = {}) => {
  // Replace path parameters in the URL
  let url = baseUrl;
  Object.keys(pathParams).forEach(key => {
    url = url.replace(`:${key}`, pathParams[key]);
  });

  // Construct the URL object to handle query parameters
  const urlObject = new URL(url, window.location.origin);
  Object.keys(queryParams).forEach(key => {
    urlObject.searchParams.append(key, queryParams[key]);
  });

  return urlObject.toString();
};
