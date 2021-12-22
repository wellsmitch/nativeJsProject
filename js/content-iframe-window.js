function ContentWindow(windowList) {
    this.windowList = windowList || [];
}

ContentWindow.prototype.open = function (windowUrl, windowId, option) {
    var windowObj = {
        url: windowUrl,
        windowId: windowId,
    };
    this.windowList.push(Object.assign(windowObj, option));
    return this
};
ContentWindow.prototype.back = function (windowObj) {
    return this.windowList.pop();
};
ContentWindow.prototype.switchToWindow = function (windowObj) {
    if (!windowObj) {
        console.error("视图对象不能为空")
    }
    if (!windowObj.id) {
        console.error("视图对象id不能为空")
    }
    var targetWindowIndex = null;
    this.windowList.map(function (ele, index) {
        if (ele.id === windowObj.id) {
            targetWindowIndex = index
        }
    });
    if (targetWindowIndex != null) {
        this.windowList.splice(targetWindowIndex, this.windowList.length - (targetWindowIndex + 1))
    }
};
ContentWindow.prototype.reload = function (windowObj) {
    var l = this.windowList.filter(function (w) {
        return w.id === windowObj.id
    });
    if (l.indexOf("?") > -1) {
        l.src = l.src + "&"

    } else {
        l.src = l.src + "?pageversion=" + l.id
    }
};
ContentWindow.prototype.getWindowList = function () {
    return this.windowList
};
