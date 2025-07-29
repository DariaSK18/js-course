<template>
    <div class="car">
        <div class="car_image">
            <img :src="autoData.image" alt="Image">
        </div>
        <div class="car_info info">
            <h4 class="info_title">{{ autoData.title }}</h4>
            <p class="info_price">{{ autoData.price }} $</p>
            <p class="info_mileage"><b>Mileage :</b> {{ autoData.mileage }}</p>
            <p class="info_year"><b>Year :</b> {{ autoData.year }}</p>
        </div>
        <!-- {{ autoData }} -->
    </div>
</template>

<script>
    export default {
        name:'SingleAutoCard',
        props: {
            autoData: {
                type: Object,
                default: () => ({})
            },
        },
    }
</script>

<style lang="scss" scoped>
.car {
    display: flex;
    justify-content: space-between;
    gap: 5px;
    width: 400px;
		// .car_image

		&_image {
            border: 1px solid black;
            width: 160px;
            display: flex;
            img{
                width: 100%;
                object-position: center;
                object-fit: contain;
            }
		}
}
.info {
display: grid;
justify-items: center;
grid-template-columns: repeat(2, 1fr);
justify-content: space-between;
		// .info_title

		&_title {
            grid-column: span 2;
            color: rgb(89, 89, 230);
            font-size: 20px;
		}

		// .info_price

		&_price {
            grid-column: span 2;
            color: rgb(126, 205, 7);
            font-size: 20px;
            font-weight: 700;
		}
}

</style>