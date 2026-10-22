<template>
    <div id="background-gallery"></div>
</template>

<script>
import $ from "../jquery";
import "vegas/dist/vegas.js";
export default {
    name: "BackgroundGallery",
    mounted() {
        const files = [
          "jr-korpa-xbQct4_Hymg-unsplash.jpg",
          "jr-korpa-UmPCUdbjaOU-unsplash.jpg",
          "jr-korpa-v-z9KOf02eM-unsplash.jpg",
          "jr-korpa-DJmj7op4P-M-unsplash.jpg",
          "jr-korpa-I7NNdMspF0M-unsplash.jpg",
          "jr-korpa-k9TDpGMDavs-unsplash.jpg"
];
        const images = files.map(file => ({ src: '/statics/img/gallery/' + file }));

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
    beforeUnmount() {
        $("#background-gallery").vegas("destroy");
    },
    data() {
        return {};
    }
};
</script>
