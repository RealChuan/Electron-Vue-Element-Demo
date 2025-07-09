<template>
    <div>
        <h1>页面 {{ pageName }}</h1>
        <p>这是第 {{ pageName }} 个页面内容。</p>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const pageName = ref(route.path.replace('/page', '') || '新页面');

watch(
    () => route.path,
    (newPath) => {
        pageName.value = newPath.replace('/page', '') || '新页面';
        console.log(`当前页面名称: ${pageName.value}`);
    }
);
</script>