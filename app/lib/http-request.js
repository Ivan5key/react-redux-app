'use strict';
import _ from 'lodash';

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
}

const defaultParams = {
  executor: null,
  url: 'http://localhost:3000',
  method: null,
  headers: {header: 'Content-Type', value: 'application/json'},
  body: null,
  responseType: null,
  dynamicSegments: [],
  queryParams: []
 // bodyProcessor: identity,
 // responseProcessor: identity
};

function statusCode(statusCode) {
  const ok = (statusCode == 200) ? true : false;
  console.log(ok);
  return ok;
}

function addQueryParams(url, queryParams) {
  const part = _.map(queryParams, (key, value) => {
      return `${value}=${key}`;
  });
  return url + (part.length !== 0 ? '?' + chanks.join('&') : '')
};

export default class Http {
    constructor (params = defaultParams) {
        this.internals = () => params;
    }

    Header(header, value) {
        const headers = this.internals().headers.concat({header, value});
        return new Http(Object.assign({}, this.internals(), {headers}));
    }
    Method(method) {
        return new Http(Object.assign({}, this.internals(), {method}));
    }
    Url(url) {
        return new Http(Object.assign({}, this.internals(), {url}));
    }
    queryParams(query) {
        let {url} = this.internals();
        let queryParams = addQueryParams(url, query);
        return new Http(Object.assign({}, this.internals(), {queryParams}));
    }
    Body(body) {
        return new Http(Object.assign({}, this.internals(), {body}));
    }
    jsonBody(jsonBody) {
        let body = JSON.stringify(jsonBody);
        return new Http(Object.assign({}, this.internals(), {body}));
    }
    Exec(){
        const {headers, method, url, body, queryParams} = this.internals();
        console.log(queryParams);
        var xmlhttp = getXmlHttp();
        xmlhttp.open(method, url, true);

        xmlhttp.setRequestHeader(headers.header, headers.value);
        xmlhttp.setRequestHeader('Authorization', 'Token');

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4) {
                if(statusCode(xmlhttp.status)) {
                    console.log(xmlhttp.responseText);
                    status = xmlhttp.status;
                } else {
                    status = xmlhttp.status;
                }
            }
        };
        xmlhttp.send(body);
        return (Object.assign({}, this.internals(), {status}));
    }
};
