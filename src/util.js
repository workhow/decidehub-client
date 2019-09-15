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
    const parts = window.location.host.split(".");
    if (parts.length <= 2) return "";
    return parts[0];
  },
  getQueryParams: function() {
    const result = {};
    const paramList = window.location.search.slice(1).split("&");
    for (var i = 0; i < paramList.length; i++) {
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
  }
};
