<template>
    <q-item clickable v-ripple tag="a" :target="target" :href="link">
        <q-item-section v-if="icon" avatar>
            <q-icon :name="icon" />
        </q-item-section>
        <q-item-section>
            <q-item-label>{{ title }}</q-item-label>
            <q-item-label v-if="caption" caption>{{ caption }}</q-item-label>
        </q-item-section>
    </q-item>
</template>

<script>
export default {
    name: "MainMenuLink",
    props: {
        title: {
            type: String,
            required: true
        },
        caption: {
            type: String,
            default: ""
        },
        link: {
            type: String,
            default: "#"
        },
        icon: {
            type: String,
            default: ""
        },
        target: {
            type: String,
            default: "_self"
        }
    }
};
</script>
