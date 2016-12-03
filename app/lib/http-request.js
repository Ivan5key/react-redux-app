'use strict';
import _ from 'lodash';
import { Promise } from 'async-promise';

function getXmlHttp(){
    var xmlhttp;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
};

const defaultParams = {
  executor: null,
  url: 'http://localhost:5001/users',
  method: null,
  headers: {header: 'Content-Type', value: 'application/json'},
  auth: '',
  token: '',
  body: null,
  responseType: null,
  dynamicSegments: [],
  queryParams: []
};

const methodsHandlerMap = {
  GET: getRequest,
  POST: submitRequest,
  PUT: submitRequest,
  DELETE: submitRequest
};

function statusCode(statusCode) {
  const ok = (statusCode == 200) ? true : false;
  return ok;
}

function addQueryParams(url, queryParams) {
  const part = _.map(queryParams, (key, value) => {
      return `${value}=${key}`;
  });
  return url + (part.length !== 0 ? '?' + part.join('&') : '')
};

function submitRequest(headers, method, url, body, auth, callback) {
    return new Promise((resolve, reject) => {
        const xmlhttp = getXmlHttp();

        xmlhttp.open(method, url, true);
        xmlhttp.setRequestHeader(headers.header, headers.value);
        xmlhttp.setRequestHeader(auth.header, auth.value);

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4) {
                if(true) {
                    resolve(xmlhttp.responseText);
                } else {
                    reject(xmlhttp.responseText);
                }
            }
        };
        xmlhttp.send(body);
    });
};

function getRequest(headers, method, url, body, auth) {
    return new Promise((resolve, reject) => {
        const xmlhttp = getXmlHttp();
        xmlhttp.open(method, url, true);
        xmlhttp.setRequestHeader(headers.header, headers.value);
        xmlhttp.setRequestHeader(auth.header, auth.value);
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4) {
                if(xmlhttp.status == 200) {
                    resolve(xmlhttp.responseText);
                } else {
                    reject(xmlhttp.responseText);
                }
            }
        };
        xmlhttp.send(null);
    });
};
class Http {
    constructor (params = defaultParams) {
        this.internals = () => params;
    }
    Header(header, value) {
        const headers = this.internals().headers.concat({header, value});
        return new Http(_.assign({}, this.internals(), {headers}));
    }
    Method(method) {
        return new Http(_.assign({}, this.internals(), {method}));
    }
    Url(url) {
        return new Http(_.assign({}, this.internals(), {url}));
    }
    queryParams(query) {
        let {url} = this.internals();
        let queryParams = addQueryParams(url, query);
        return new Http(_.assign({}, this.internals(), {queryParams}));
    }
    Body(body) {
        return new Http(_.assign({}, this.internals(), {body}));
    }
    jsonBody(jsonBody) {
        let body = JSON.stringify(jsonBody);
        return new Http(_.assign({}, this.internals(), {body}));
    }
    UserAuth(user, pass) {
        let header = "Authorization";
        let value = "Basic " + window.btoa(user + ":" + pass);
        let auth = {header: header, value: value};
        return new Http(_.assign({}, this.internals(), {auth}));
    }
    Auth(token){
        let AuthToken = 'Token' + token;
        return new Http(_.assign({}, this.internals(), {AuthToken}));
    }
    Exec(callback){
        const {headers, method, url, body, queryParams, auth} = this.internals();
        const handler = methodsHandlerMap[method];

        if(!handler){
            throw Error(`Method ${handler} is not supported`);
        }
        const response = handler(headers, method, url, body, auth);
        return response;
    }
};
export default Http;
