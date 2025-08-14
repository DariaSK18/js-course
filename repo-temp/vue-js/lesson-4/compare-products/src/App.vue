<template>
  <phones-compare :phone-items="productsList"/>
  <recently-viewed class="container" :viewed-items-list="laptopsList"/>
</template>

<script>
import PhonesCompare from './components/PhonesCompare/'
import RecentlyViewed from './components/RecentlyViewed/'

export default {
  name: 'App',
  components: {
    PhonesCompare,
    RecentlyViewed,
  },
  data() {
    return {
      productsList: [
        {
          id: 1,
          image: "https://tesco.scene7.com/is/image/tescomobile/1_A16-5G_Front-Back_Blue-Black_1500x2000?qlt=100&wid=600&ts=1752458405015&$Height-400$&dpr=off",
        },
        {
          id: 2,
          image: "https://media.johnlewiscontent.com/i/JohnLewis/mobiles-nav-card-apple-v3-130924?fmt=auto",
        },
        {
          id: 3,
          image: "https://media.very.co.uk/i/very/VPZ3C_SQ1_0000000063_PINK_SLf?$roundel_very$&p1_img=blank_apple&fmt=auto"
        }
      ],
      laptopsList: [
        {
          id: 1,
          name: "Dell Inspiron 15",
          oldPrice: null,
          price: 15000,
          favorite: true,
          available: true,
          image: "https://marketing.brain.com.ua/static/articles_description_ru/img_20200622150017.jpeg",
        },
        {
          id: 2,
          name: "HP Pavilion 14",
          oldPrice: 15500,
          price: 13500,
          favorite: false,
          available: false,
          image: "https://mobikoff.com.ua/pub/media/magefan_blog/best-laptops.jpg"
        },
        {
          id: 3,
          name: "Lenovo ThinkPad X1",
          oldPrice: 15500,
          price: 25000,
          favorite: true,
          available: false,
          image: "https://www.mobile-review.com/articles/2020/image/echo-102/pic/4.jpg",
        },
        {
          id: 4,
          name: "Apple MacBook Air",
          oldPrice: null,
          price: 40000,
          favorite: true,
          available: true,
          image: "https://www.mobile-review.com/articles/2020/image/echo-102/pic/4.jpg",
        },
        {
          id: 5,
          name: "Asus VivoBook S15",
          oldPrice: null,
          price: 18000,
          favorite: false,
          available: true,
          image: "https://www.mobile-review.com/articles/2020/image/echo-102/pic/4.jpg",
        }
      ]
    }
  },
}
</script>

<style scoped>
.container {
  display: flex;
  gap: 10px;
}
</style>
