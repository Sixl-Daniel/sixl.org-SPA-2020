<template>
    <div id="background-gallery"></div>
</template>

<script>
export default {
    name: "BackgroundGallery",
    mounted() {
        const images = [];

        // const path = "/statics/img/gallery/bg-gallery-sixl-";
        // const ext = ".jpg";
        // for (let i = 1; i <= 16; i++) images.push({ src: path + i.toString().padStart(2, "0") + ext });

        const path = "https://res.cloudinary.com/sixl/image/upload/";
        const ext = ".jpg";
        const files = [
            "v1584554773/Backgrounds/jr-korpa-xbQct4_Hymg-unsplash",
            "v1584554771/Backgrounds/jr-korpa-UmPCUdbjaOU-unsplash",
            "v1584554771/Backgrounds/jr-korpa-v-z9KOf02eM-unsplash",
            "v1584554771/Backgrounds/jr-korpa-DJmj7op4P-M-unsplash",
            "v1584554771/Backgrounds/jr-korpa-I7NNdMspF0M-unsplash",
            "v1584554554/Backgrounds/jr-korpa-k9TDpGMDavs-unsplash"
        ];
        for (let i = 0; i < files.length; i++)
            images.push({ src: path + files[i] + ext });

        const vegasOptions = {
            overlay: true,
            transition: "fade",
            transitionDuration: 4000,
            delay: 10000,
            color: "black",
            animation: "random",
            animationDuration: 20000,
            slides: images
        };

        $("#background-gallery").vegas(vegasOptions);
    },
    beforeDestroy() {
        $("#background-gallery").vegas("destroy");
    },
    data() {
        return {};
    }
};
</script>
