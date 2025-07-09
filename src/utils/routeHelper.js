// src/utils/routeHelper.js
import DynamicPage from '../components/DynamicPage.vue'

export const getMenuItems = () => [];

export function addNewPage(router, menuItems) {

    let newIndex = menuItems.length + 1;
    const newPageName = `页面 ${newIndex}`;
    const newPagePath = `/page${newIndex}`;

    // 添加新菜单项
    menuItems.push({ index: newPagePath, name: newPageName });

    // 动态添加新路由
    router.addRoute({
        path: newPagePath,
        component: DynamicPage,
    });
}

export function removeLastPage(router, menuItems) {
    if (menuItems.length > 3) {
        const lastItem = menuItems.pop();
        router.removeRoute(lastItem.index);
    }
}