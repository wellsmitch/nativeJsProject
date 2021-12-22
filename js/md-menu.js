var mdMenuTemplate = `
<div>
    <template v-for="(menuInfo, menuIndex) in menudata">
        <template  v-if="menuInfo.children">
            <el-submenu :index="menuInfo.index">
                    <template  slot="title">
                        <i :class="menuInfo.iconName"></i>
                        <span slot="title">{{menuInfo.name}}</span>
                    </template>
                <md-menu v-if="menuInfo.children" :menudata="menuInfo.children" :iscollapse="iscollapse"></md-menu>
            </el-submenu>
        </template>
        <template v-else>
           <el-menu-item :index="menuInfo.index" :key="menuIndex" @click="menuTap(menuInfo)">
                <i :class="menuInfo.iconName"></i>
                <span slot="title">{{menuInfo.name}}</span>
           </el-menu-item>
        </template>
    </template>
</div>

`;
Vue.component("MdMenu", {
    name: "MdMenu",
    template: mdMenuTemplate,
    props: {
        menudata: {
            type: Array,
            default: []
        },
        iscollapse: {
            type: Boolean,
            default: false
        }
    },
    data: function () {
        return {}
    },
    watch: {},
    methods: {
        menuTap: function (menuInfo) {
            indexPageVm.setMenuDefaultActive(menuInfo);
        }
    },
    mounted: function () {
        console.log(this.menudata);
    }
});
