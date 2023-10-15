<template>
    <swiper :style="{
        '--swiper-navigation-color': '#CDA274',
        '--swiper-pagination-color': '#CDA274',
    }" :zoom="true" :navigation="true" :pagination="{
    clickable: true,
}" :modules="modules" class="mySwiper">
        <swiper-slide v-for="picture in sliderPictures" :key="picture.id">
            <div class="swiper-zoom-container">
                <img class="swiper-slide__img" :src="picture.src" :alt="picture.alt" />
            </div>
        </swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';


// import required modules
import { Navigation, Pagination } from 'swiper';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [ Navigation, Pagination],
        };
    },
    props: {
        sliderPictures:{
            type: Array,
            required: true
        }
    }
};
</script>