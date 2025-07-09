<template>
  <el-container style="height: calc(100vh - 20px); display: flex; border: 1px solid #dcdfe6;">
    <!-- 左侧菜单区域，独立滚动 -->
    <el-aside width="200px" style="border-right: 1px solid #dcdfe6; display: flex; flex-direction: column;">
      <!-- 菜单区域，设置固定高度和滚动 -->
      <div style="overflow-y: auto; height: calc(100% - 60px);">
        <el-menu :default-active="$route.path" router style="border: none; height: 100%;">
          <el-menu-item v-for="item in menuItems" :key="item.index" :index="item.index">
            {{ item.name }}
          </el-menu-item>
        </el-menu>
      </div>
      <!-- 添加按钮固定在底部 -->
      <div style="margin-top: 10px;">
        <button @click="handleAddNewPage" style="width: 100%; margin-bottom: 10px;">添加新页面</button>
        <button @click="handleRemoveLastPage" style="width: 100%;">删除最后一个页面</button>
      </div>
    </el-aside>

    <!-- 右侧内容区域，独立滚动 -->
    <el-main style="flex: 1; overflow-y: auto;">
      <!-- 内容区域，设置高度和滚动 -->
      <router-view />
    </el-main>
  </el-container>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getMenuItems, addNewPage, removeLastPage } from './utils/routeHelper';

const menuItems = ref(getMenuItems());
const router = useRouter();

function handleAddNewPage() {
  addNewPage(router, menuItems.value);
}

function handleRemoveLastPage() {
  removeLastPage(router, menuItems.value);
}

// 默认添加3个页面
for (let i = 1; i <= 3; i++) {
  addNewPage(router, menuItems.value);
}

</script>