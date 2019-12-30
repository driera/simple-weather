import Vue from 'vue';

const requireComponent = require.context(
    '@/components/svg/',
    false,
    /.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);
    const componentName = fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '');

    Vue.component(`icon-${componentName}`, componentConfig.default || componentConfig);
});
