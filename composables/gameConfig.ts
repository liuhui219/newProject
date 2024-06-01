/** @format */

export const games = {
    gameURL: () => useState("game-URL", () => ""),
    gameUID: () => useState("game-UID", () => 1522367),
    handleIframeMsg: (event) => {
        let data = event.data;

        const router = useRouter();
        if (typeof data == "string") {
            if (data == "ToCloseWebView") {
                //EASYGAME
                // closePopup("game-drawer");
                //navigateTo("/");

                if (router?.options?.history?.state?.position > 1) {
                    router.back();
                } else {
                    navigateTo("/");
                }
            }
        }
    },

    isPositiveInteger: (num) => {
        return /^\d+$/.test(num);
    },

    init: () => {
        let url = "";

        return url;
    },

    leaveGame: () => {
        console.log("离开页面");
    },
};
