<template>
    <div class="container">
        <div class="item" >
            <div class="item_picture">
                <img :src="laptop.image" alt="Image">
            </div>
            <div class="item_title">
                {{ laptop.name }}
            </div>
            <div class="item_price">
                {{ laptop.price }}$
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ListElement',
        props: {
            laptop: {
                type: Object,
                default: () => ({})
            },
        },
    }
</script>

<style scoped>
.container {
    width: 250px;
    max-height: 250px;
    border: 1px solid black;
    border-radius: 20px;
    padding: 10px;
    text-align: center;
    overflow: hidden;
}
.item {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-self: center;
    margin: 0 auto;
}
.item_picture {
    width: 150px;
}
img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
</style>