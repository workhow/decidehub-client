import config from "./config";

export default {
  pathForSubdomain: function(subdomain, path) {
    return `https://${subdomain}.${config.apiPath}/${path}`;
  },
  pathForCurrentSubdomain: function(path) {
    const subdomain = this.getSubdomain();
    return `https://${subdomain}.${config.apiPath}/${path}`;
  },
  getSubdomain: function() {
    const parts = window.location.hostname.split(".");
    if (parts.length <= 2) return "";
    return parts[0];
  },
  setSubdomain: function(newSubdomain) {
    const parts = window.location.hostname.split(".");
    if (parts.length <= 2) {
      window.location.hostname = `${newSubdomain}.${window.location.hostname}`;
    } else {
      window.location.hostname = `${newSubdomain}.${parts.slice(1).join(".")}`;
    }
  },
  getQueryParams: function() {
    const result = {};
    const paramList = window.location.search.slice(1).split("&");
    for (let i = 0; i < paramList.length; i++) {
      const param = paramList[i];
      if (param.length > 0) {
        const [name, value] = param.split("=");
        result[name] = unescape(value);
      }
    }
    return result;
  },
  authenticationHeaders: function() {
    return {
      Authorization: `Bearer ${localStorage.currentUserToken}`
    };
  },
  signOut: () => {
    localStorage.currentUserToken = "";
  },
  capitalize: str => {
    return str[0].toUpperCase() + str.slice(1);
  }
};
