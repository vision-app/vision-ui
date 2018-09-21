module.exports = {
    version: '>=0.7.7',
    type: 'library',
    lint: true,
    webpack: {
        output: {
            publicPath: '/vusion-ui/',
        },
    },
    webpackDevServer: {
        historyApiFallback: {
            index: '/vusion-ui/',
        },
    },
    docs: {
        title: 'Vusion UI 组件库',
        logo: '组件库',
        mode: 'history',
        base: '/vusion-ui/',
        navbar: [
            { text: '组件', to: '/components' },
            { text: '演示', to: '/demo' },
        ],
        components: [
            { group: 'Guide', name: 'quickstart', alias: '快速开始', path: './docs/views/guide/quickstart.md' },
            { group: 'Guide', name: 'pattern', alias: '设计模式', path: './docs/views/guide/pattern.md' },
            { group: 'Guide', name: 'changelog', alias: '更新日志', href: 'https://github.com/vusion/vusion-ui/releases', target: '_blank' },
            { group: 'Basic', name: 'scheme', alias: '设计规范', path: './src/base/SCHEME.md' },
            { group: 'Basic', name: 'typography', alias: '排版', path: 'proto-ui.vusion/src/base/TYPOGRAPHY.md' },
            { group: 'Basic', name: 'u-text', alias: '文本' },
            { group: 'Basic', name: 'u-link', alias: '链接' },
            { group: 'Basic', name: 'u-button', alias: '按钮' },
            { group: 'Basic', name: 'u-badge', alias: '徽章' },
            { group: 'Basic', name: 'u-label', alias: '标签' },
            { group: 'Basic', name: 'u-tags', alias: '标签组' },
            { group: 'Basic', name: 'u-icon', alias: '图标', path: 'i-line-awesome.vue/README.md' },
            { group: 'Basic', name: 'u-status-icon', alias: '状态图标' },
            { group: 'Basic', name: 'u-logo', alias: '标识' },
            { group: 'Layout', name: 'u-linear-layout', alias: '线性布局' },
            { group: 'Layout', name: 'u-grid-layout', alias: '栅格布局' },
            { group: 'Layout', name: 'u-desc-list', alias: '描述列表' },
            { group: 'Layout', name: 'u-info-list', alias: '详情列表' },
            { group: 'Layout', name: 'u-table', alias: '表格' },
            { group: 'Navigation', name: 'u-navbar', alias: '导航栏' },
            { group: 'Navigation', name: 'u-sidebar', alias: '侧边栏' },
            { group: 'Navigation', name: 'u-menu', alias: '菜单' },
            { group: 'Navigation', name: 'u-subnav', alias: '子导航' },
            { group: 'Navigation', name: 'u-tabs', alias: '标签页' },
            { group: 'Navigation', name: 'u-subtabs', alias: '子标签页' },
            { group: 'Navigation', name: 'u-steps', alias: '步骤条' },
            { group: 'Navigation', name: 'u-crumb', alias: '面包屑' },
            { group: 'Navigation', name: 'u-pagination', alias: '翻页器' },
            { group: 'Navigation', name: 'u-actions', alias: '操作列表' },
            { group: 'Form', name: 'u-form', alias: '表单' },
            { group: 'Form', name: 'u-input', alias: '单行输入' },
            { group: 'Form', name: 'u-number-input', alias: '数字输入' },
            { group: 'Form', name: 'u-textarea', alias: '多行输入' },
            { group: 'Form', name: 'u-radios', alias: '单选组' },
            { group: 'Form', name: 'u-checkboxes', alias: '多选组' },
            { group: 'Form', name: 'u-switch', alias: '开关' },
            { group: 'Form', name: 'u-select', alias: '选择框' },
            { group: 'Form', name: 'u-cascade-select', alias: '级联选择' },
            { group: 'Form', name: 'u-region-select', alias: '地区选择' },
            { group: 'Form', name: 'u-multi-select', alias: '多项选择' },
            { group: 'Form', name: 'u-color-select', alias: '颜色选择' },
            { group: 'Form', name: 'u-suggest', alias: '自动提示' },
            { group: 'Form', name: 'u-slider', alias: '滑块' },
            { group: 'Form', name: 'u-combo-slider', alias: '复合滑块' },
            { group: 'Form', name: 'u-uploader', alias: '文件上传' },
            { group: 'Data', name: 'u-list-view', alias: '列表选择' },
            { group: 'Data', name: 'u-tree-view', alias: '树型选择' },
            { group: 'Data', name: 'u-table-view', alias: '表格视图' },
            { group: 'Data', name: 'u-table-view-2', alias: '表格视图2' },
            { group: 'Data', name: 'u-capsules', alias: '胶囊' },
            { group: 'Data', name: 'u-cascade-capsules', alias: '级联胶囊' },
            { group: 'Data', name: 'u-pills', alias: '药丸' },
            { group: 'Data', name: 'u-transfer', alias: '穿梭框' },
            { group: 'Data', name: 'u-countup', alias: '数字渐变' },
            { group: 'DateTime', name: 'u-calendar', alias: '日历' },
            { group: 'DateTime', name: 'u-time-picker', alias: '日期选择' },
            { group: 'DateTime', name: 'u-date-picker', alias: '时间选择' },
            { group: 'DateTime', name: 'u-date-time-picker', alias: '时期时间选择' },
            { group: 'Popper', name: 'f-popper', alias: '弹出层' },
            { group: 'Popper', name: 'u-popup', alias: '弹出框' },
            { group: 'Popper', name: 'u-tooltip', alias: '工具提示' },
            { group: 'Feedback', name: 'u-spinner', alias: '加载图标' },
            { group: 'Feedback', name: 'u-loading', alias: '加载中' },
            { group: 'Feedback', name: 'u-placeholder', alias: '占位图' },
            { group: 'Feedback', name: 'u-toast', alias: '吐司提示' },
            { group: 'Feedback', name: 'u-modal', alias: '弹窗' },
            { group: 'Feedback', name: 'u-lightbox', alias: '灯箱' },
            { group: 'Progress & Charts', name: 'u-linear-progress', alias: '线形进度条' },
            { group: 'Progress & Charts', name: 'u-circular-progress', alias: '环形进度条' },
            { group: 'Progress & Charts', name: 'u-water-progress', alias: '水量进度条' },
            { group: 'Progress & Charts', name: 'u-chart', alias: '图表基类' },
            { group: 'Progress & Charts', name: 'u-bar-chart', alias: '柱状图' },
            { group: 'Progress & Charts', name: 'u-xbar-chart', alias: '水平柱状图' },
            { group: 'Progress & Charts', name: 'u-line-chart', alias: '线状图' },
            { group: 'Progress & Charts', name: 'u-pie-chart', alias: '饼状图' },
            { group: 'Progress & Charts', name: 'u-donut-chart', alias: '甜圈图' },
            // { group: 'Extension', name: 'x-ace-editor', alias: '代码编辑器', path: 'x-ace-editor.vue/README.md' },
            { group: 'Mixin & Utils', name: 'm-emitter', alias: '触发器' },
            { group: 'Mixin & Utils', name: 'm-router-item', alias: '路由项' },
            { group: 'Mixin & Utils', name: 'f-collapse-transition', alias: '收缩过渡' },
            { group: 'Mixin & Utils', name: 'f-draggable', alias: '拖拽' },
            { group: 'Mixin & Utils', name: 'f-droppable', alias: '拖放' },
            { group: 'Mixin & Utils', name: 'f-dragger', alias: '拖拽器' },
        ],
    },
};
