<!-- @format -->

<template>
    <client-only
        ><div class="mobile-root">
            <main class="mobile-container-main overscroll-none">
                <NuxtPage />
            </main></div
    ></client-only>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
    .mobile-root {
        width: 100%;
        height: 100%;

        position: relative;
    }
    .mobile-container-main {
        width: 100%;
        height: 100%;
    }
</style>
