const bypassFn = function (req, res, proxyOptions) {
  req.headers["Authorization"] = "Basic ZHVwYToxMjM=";
  req.headers["X-API-KEY"] = 'VwYTpkMTQyM3Nzcw';
  const cookie = req.headers["cookie"] || req.headers["Cookie"];
  if (cookie) {
    const idx = cookie.indexOf('AUTHA=');
    if (idx >= 0) {
      delete req.headers["cookie"];
      req.headers["Cookie"] = cookie.substring(idx);
      console.log(req.headers["Cookie"]);
    } else {
      delete req.headers["cookie"];
      delete req.headers["Cookie"];
    }
  }
};

const PROXY_CONFIG = {
  "/petclinic/api":     {
    target:       "http://localhost:9966/",
    changeOrigin: true,
    secure:       false,
    bypass:       bypassFn,
  },
}

module.exports = PROXY_CONFIG;
