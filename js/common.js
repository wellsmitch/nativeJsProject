function Request(locationHref) {
    this.locationHref = locationHref;
    this.searchList = locationHref.split("?")[1].split("&");

}

Request.prototype.setValue = function (key, value) {
    var d = this.searchList.map(function (s) {
        var tempS = "";
        if (key === s.split("=")[0]) {
            tempS = key + "=" + value
        } else {
            tempS = s
        }
        return 123
    });
    var host_ = this.locationHref.split("?")[0];
    return host_ + "?" + d.join("&");
};


Request.prototype.getValue = function (key, value) {
    var val = "";
    this.searchList.forEach(function (s) {
        var s_ = s.split("=");
        if (key === s_[0]) {
            val = s_[1]
        }
    });
    return val
};
