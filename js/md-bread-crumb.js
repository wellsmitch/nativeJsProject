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
        collapse: {
          type: Boolean,
          default: false
        },
        breadcrumbdata:{
            type: Array,
            default: []
        }
    },
    data: function () {
        return {}
    },
    watch: {},
    methods: {
        sideCollapse: function () {
            this.sideCollapse = !this.collapse;
        },
        breadCrumbClick: function (item) {
            this.$emit("bread-crumb-click", item);
        }
    },
    mounted: function () {

    }
});
