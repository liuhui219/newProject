<!-- @format -->

<template>
    <NuxtLayout>
        <LazyHome />
    </NuxtLayout>
</template>

<script setup lang="ts">
    onMounted(() => {
        window.addEventListener("message", games.handleIframeMsg);
    });
</script>

<style></style>
