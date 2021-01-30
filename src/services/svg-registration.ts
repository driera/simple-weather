import Vue from 'vue';

const requireComponent = require.context(
    '@/components/svg/',
    false,
    /.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
    if(!fileName) return;
    const componentConfig = requireComponent(fileName);
    // @ts-ignore
    const componentName = fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '');

    Vue.component(`icon-${componentName}`, componentConfig.default || componentConfig);
});
