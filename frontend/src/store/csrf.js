import Cookies from 'js-cookie'; // used to extract the XSRF-TOKEN

export async function csrfFetch(url, options = {}) {
    // set options.method to 'GET' if there is no method
    options.method = options.method || 'GET';

    // set option.headers to an empty object if there is no header 

    options.headers = options.headers || {};

    // if the options.method is not 'GET', then set teh 'Content-Type' header to 'application/json' and set the 'XSRF-TOKEN' header to the value of the "XSRF-TOKEN" cookie

    if (options.method.toUpperCase() !== 'GET') {
        options.headers['Content-Type'] =
          options.headers['Content-Type'] || 'application/json';
        options.headers['XSRF-Token'] = Cookies.get('XSRF-TOKEN');
      }

    // call the default windos fetch with the url and the option passed in
    const res = await window.fetch(url, options);

    // if the response is above above or equal to 400, then throw error with the error being the resonpons 

    if (res.status >= 400) throw res;

    // if the response status code is under 400 retur the response to the next promise chain 
    
    return res;
}

// call this to get the "XSRF-TOKEN" cookie, should only be used in development
export function restoreCSRF() {
    return csrfFetch('/api/csrf/restore');
  }
