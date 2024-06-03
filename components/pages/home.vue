<!-- @format -->

<template>
    <div class="w-full h-full main">
        <div class="box w-full bg-no-repeat bg-cover relative overflow-hidden" :style="{backgroundImage: `url(${bg})`}">
            <div class="header w-full flex justify-center items-center text-[16px] relative">
                <div class="header-title w-[30%] bg-cover relative" :style="{backgroundImage: `url(${head})`}">
                    <div class="w-full white font-black flex justify-center items-center title-color text-[1rem]">
                        Teen Patti
                    </div>
                </div>
                <div class="w-[16%] absolute right-[18%] bottom-0">
                    <div class="header-coint bg-cover w-full relative" :style="{backgroundImage: `url(${cointBg})`}">
                        <div class="white font-black text-[1rem]">1234</div>
                    </div>
                </div>
                <div class="close absolute bottom-0 h-full right-[30px]">
                    <base-img class="h-[140%]" name="tp_xuanchang_guanbi_btn" type="png" path="images" />
                </div>
            </div>
            <div class="w-full flex justify-center items-center flex-1 white">
                <div class="absolute w-[47%] left-[3%]">
                    <div
                        class="content-bg w-full bg-cover relative"
                        :style="{backgroundImage: `url(${contentBg})`}"
                    ></div>
                </div>
                <div class="absolute w-[60%] top-0 h-full flex justify-center items-center right-[10%]">
                    <div class="flex flex-row w-full gap-[5%]">
                        <div
                            class="header-chang1_bg w-[34%] bg-cover relative"
                            :style="{backgroundImage: `url(${chang1_bg})`}"
                        >
                            <div class="absolute top-[7%] left-[5%] w-[40%]">
                                <base-img class="w-[80%]" name="tp_xuanchang_hot_icon" type="png" path="images" />
                            </div>
                        </div>
                        <div class="w-[63.5%] absolute right-0 top-[20%] grid grid-cols-2 gap-[5%] place-items-end">
                            <div
                                class="header-chang2_bg bg-cover w-full relative"
                                :style="{backgroundImage: `url(${chang2_bg})`}"
                            >
                                <div class="cont-title absolute top-[6%] left-[16%]">Primary</div>
                                <div class="w-full h-full flex flex-col justify-center items-center gap-[5%] pt-[18%]">
                                    <div
                                        class="tp_xuanchang_xxd2_bg w-[80%] bg-cover relative"
                                        :style="{backgroundImage: `url(${tp_xuanchang_xxd2_bg})`}"
                                    >
                                        <div class="w-full flex flex-row">
                                            <span class="px-[15px]">Boot:</span>
                                            <span class="flex-1 flex justify-center items-center">1231</span>
                                        </div>
                                    </div>
                                    <div
                                        class="tp_xuanchang_xxd2_bg w-[80%] bg-cover relative"
                                        :style="{backgroundImage: `url(${tp_xuanchang_xxd2_bg})`}"
                                    >
                                        <div class="w-full flex flex-row">
                                            <span class="px-[15px]">Boot:</span>
                                            <span class="flex-1 flex justify-center items-center">1231</span>
                                        </div>
                                    </div>
                                    <div
                                        class="tp_xuanchang_join_btn w-[80%] bg-cover relative"
                                        :style="{backgroundImage: `url(${tp_xuanchang_join_btn})`}"
                                    >
                                        <div class="w-full flex flex-row justify-center items-center gap-[5px]">
                                            <base-img
                                                class="w-[10%]"
                                                name="tp_xuanchang_jiantou_icon"
                                                type="png"
                                                path="images"
                                            />
                                            <span class="font-black join-text">JOIN</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="header-chang2_bg bg-cover w-full relative"
                                :style="{backgroundImage: `url(${chang2_bg})`}"
                            ></div>
                            <div
                                class="header-chang2_bg bg-cover w-full relative"
                                :style="{backgroundImage: `url(${chang2_bg})`}"
                            ></div>
                            <div
                                class="header-chang2_bg bg-cover w-full relative"
                                :style="{backgroundImage: `url(${chang2_bg})`}"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const route = useRoute();
    let datas = ref("");
    let gameURL = useGameURL();
    let {params, query, path, hash} = route;
    const {$importImage} = useNuxtApp();
    const bg = $importImage("tp_xuanchang_di_bg", "jpg", "images");
    const head = $importImage("tp_xuanchang_btxxd_bg", "png", "images");
    const cointBg = $importImage("tp_xuanchang_jbxxd_bg", "png", "images");
    const contentBg = $importImage("tp_xuanchang_xingxiang_icon", "png", "images");
    const chang1_bg = $importImage("tp_xuanchang_chang1_bg", "png", "images");
    const chang2_bg = $importImage("tp_xuanchang_chang2_bg", "png", "images");
    const tp_xuanchang_xxd2_bg = $importImage("tp_xuanchang_xxd2_bg", "png", "images");
    const tp_xuanchang_join_btn = $importImage("tp_xuanchang_join_btn", "png", "images");
    const playFn = () => {
        navigateTo({
            path: "/game",
        });
    };
    const closeFn = () => {
        window.location.replace("lua://Close.api.command");
    };
    const resizeFn = () => {
        document.getElementsByTagName("html")[0].style.fontSize = (window.innerWidth / 750) * 10 + "px";
    };
    onMounted(() => {
        document.getElementsByTagName("html")[0].style.fontSize = (window.innerWidth / 750) * 10 + "px";
        window.addEventListener("resize", resizeFn);
    });
</script>

<style lang="scss" scoped>
    .main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .box {
            display: flex;
            flex-direction: column;
            align-items: center;
            aspect-ratio: 2.17 / 1;
            .header {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .header-title {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                aspect-ratio: 8.5 / 1;
                .title-color {
                    text-shadow: 2px 2px #9729db, -2px -2px #9729db;
                }
            }

            .header-coint {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                aspect-ratio: 5.4 / 1;
            }

            .content-bg {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                aspect-ratio: 1.1 / 1;
            }
            .header-chang1_bg {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                aspect-ratio: 0.6 / 1;
            }
            .header-chang2_bg {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                aspect-ratio: 1.23 / 1;
            }

            .tp_xuanchang_xxd2_bg {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                aspect-ratio: 6.1 / 1;
            }
            .tp_xuanchang_join_btn {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                aspect-ratio: 4.7 / 1;
            }
            .join-text {
                text-shadow: 2px 2px #ba7e40, -2px -2px #ba7e40;
            }
        }
        button {
            background-color: #ccc;
            padding: 5px 15px;
            border-radius: 4px;
        }
        .white {
            color: #ffffff;
        }
    }
</style>
