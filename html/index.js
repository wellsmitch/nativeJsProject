function getIndexId() {
    return "index_" + Math.random().toString().substr(2, 16).toString();
}

var indexPageVm = new Vue({
    el: "#layoutPageId",
    data: function () {
        return {
            menuData: [
                {
                    name: "导航一",
                    index: getIndexId(),
                    url: "#",
                    iconName: "el-icon-location",
                    children: [
                        {
                            name: "首页",
                            index: getIndexId(),
                            url: "./首页.html",
                            iconName: "el-icon-location",
                        },
                        {
                            name: "活动列表",
                            index: getIndexId(),
                            url: "./活动列表.html",
                            iconName: "el-icon-location",
                        },
                        {
                            name: "活动内容",
                            index: getIndexId(),
                            url: "#",
                            iconName: "el-icon-location",
                            children: [
                                {
                                    name: "活动详情",
                                    index: getIndexId(),
                                    url: "./活动详情.html",
                                    iconName: "el-icon-location",
                                },
                            ]
                        },
                    ]
                },
                {
                    name: "导航二",
                    index: getIndexId(),
                    iconName: "el-icon-menu",
                },
                {
                    name: "导航三",
                    index: getIndexId(),
                    iconName: "el-icon-document",
                },
                {
                    name: "导航四",
                    index: getIndexId(),
                    iconName: "el-icon-setting",
                },
            ],
            windowList: [],
            isCollapse: true,
            menuOpenDefault: {},
            iframeWindowService: null,
        }
    },
    methods: {
        // 点击侧边菜单
        setMenuDefaultActive: function (obj) {
            var that = this;
            that.windowList = [];
            this.getMenuDefaultList(this.menuData, obj, function (res) {
                if (res.length > 0) {
                    that.menuOpenDefault = res[res.length - 1];
                    that.windowList = res;
                    window.top.PubSub.publish("windowList", that.windowList);
                }
            })
        },
        buildWindowList: function () {
            this.iframeWindowService = new ContentWindow(this.windowList);
        },
        handleOpen:function() {

        },
        handleClose:function() {

        },

        // 通过激活菜单名称获取打开的菜单层级列表
        getMenuDefaultList: function (treeData, obj, cb) {
            var that = this;
            treeData.map(function (m) {
                if (m.name === obj.name) {
                    cb([m]);
                } else {
                    if (m.children) {
                        that.getMenuDefaultList(m.children, obj, function (res) {
                            res.unshift(m);
                            cb(res)
                        })
                    }
                }
            })
        },

        // 从页面内部打开新页面
        openPage: function (pageObj) {
            var that = this;
            this.windowList.push(pageObj);
            that.menuOpenDefault = pageObj
        },

        pageIndexShow: function () {
            this.setMenuDefaultActive({
                name: "活动详情"
            })
        }
    },
    mounted: function () {
        this.windowList.push = function () {
            
        }
        this.buildWindowList();
        this.pageIndexShow()
    }
});