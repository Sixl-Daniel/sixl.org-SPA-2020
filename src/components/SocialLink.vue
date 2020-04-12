<template>
    <q-btn :target="target" :type="type" :href="link" :color="color" :icon="icon" round push />
</template>

<script>
export default {
    name: "SocialLink",
    props: {
        link: {
            type: String,
            default: "#"
        },
        icon: {
            type: String,
            default: "fas fa-question"
        },
        target: {
            type: String,
            default: "_blank"
        },
        type: {
            type: String,
            default: "a"
        },
        color: {
            type: String,
            default: "primary"
        }
    }
};
</script>
