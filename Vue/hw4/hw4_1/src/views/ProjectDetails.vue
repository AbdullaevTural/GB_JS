<template>
    <div class="project-details__intro">
        <div class="project-details__intro-content"></div>
    </div>
    <div class="project-details center">
        <div v-for="info in getProjectInfo" :key="info.id" class="project-details__content">
            <h2 class="project-details__heading">{{ info.heading }}</h2>
            <div class="project-details__text-box">
                <p class="project-details__text">{{ info.firstparagraph }}</p>
                <p class="project-details__text">{{ info.secondparagraph }}</p>
            </div>
            <Slider :slider-pictures="getSliderPictures"/>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Slider from '../components/TheSlider.vue'

export default {
    name: 'TheProjectDetails',

    components: {
        Slider
    },
    computed: mapGetters(['getProjectInfo', 'getSliderPictures']),
}
</script>