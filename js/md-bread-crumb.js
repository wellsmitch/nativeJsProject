var breadCrumbTemplate = `
    <div class="project-bread-crumb">
        <div class="side-collapse-btn el-icon-s-fold" @click="sideCollapse"></div>
        <el-breadcrumb>
            <el-breadcrumb-item v-for="(item,index) in breadcrumbdata" @click="breadCrumbClick(item)" class="is-link" :key="index">
            <span @click="breadCrumbClick(item)">{{item.name}}</span>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
`;
Vue.component("BreadCrumb", {
    name: "BreadCrumb",
    template: breadCrumbTemplate,
    props: {

    },
    data: function () {
        return {
            breadcrumbdata: JSON.parse(JSON.stringify(window.top.indexPageVm.windowList))
        }
    },
    watch: {},
    methods: {
        sideCollapse: function () {
            window.top.indexPageVm.isCollapse = !window.top.indexPageVm.isCollapse;
        },
        breadCrumbClick: function (item) {
            var targetMenuIndex = null;
            var windowList_ = this.breadcrumbdata;
            windowList_.map(function (w, i) {
                if (w.index === item.index) {
                    targetMenuIndex = i;
                }
            });
            windowList_.splice(targetMenuIndex + 1, windowList_.length - (targetMenuIndex + 1));
            window.top.indexPageVm.windowList = windowList_;
            var hasUrlPageList = windowList_.filter(function (ele) {
                return ele.url && ele.url != "#";
            });

            window.top.indexPageVm.menuOpenDefault = hasUrlPageList[0];

            if(hasUrlPageList.length === 0) {
                window.top.location.reload()
            }

            this.$emit("bread-crumb-click", item);
        }
    },
    mounted: function () {
        var that = this;
    },
    updated: function () {
    }
});
