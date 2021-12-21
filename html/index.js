function getIndexId() {
    return "index_"+Math.random().toString().substr(2,16).toString();
}
var indexPageVm = new Vue({
    el: "#project-index-id",
    data: function () {
        return {
            menuData:[
                {
                    name: "导航一",
                    index: getIndexId(),
                    iconName: "el-icon-location",
                    children:[
                        {
                            name: "选项1",
                            index: getIndexId(),
                            iconName: "el-icon-location",
                        },
                        {
                            name: "选项2",
                            index: getIndexId(),
                            iconName: "el-icon-location",
                        },
                        {
                            name: "选项3",
                            index: getIndexId(),
                            iconName: "el-icon-location",
                        },
                        {
                            name: "选项4",
                            index: getIndexId(),
                            iconName: "el-icon-location",
                        }
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
            isCollapse: true
        }
    },
    methods: {
        sideCollapse: function() {
          this.isCollapse = !this.isCollapse
        },
        handleOpen: function (key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose: function (key, keyPath) {
            console.log(key, keyPath);
        }
    },
    mounted: function () {

    }
});
