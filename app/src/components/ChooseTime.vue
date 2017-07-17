<script>
    export default {  
        created() {
            const movieId = this.$route.params.id;
            this.$store.dispatch('fetchMovieTimes', this.movieId).then(() => {});
        },
        computed: {
            movieId() {
                return this.$route.params.id;
            },
            times() {
                return this.$store.state.movieTimes[this.movieId];
            }
        },
    }
</script>

<template>
    <section class="choose-time">
        <h4>{{times.hallName}}</h4>
        <ul>
            <a v-for="time in times.times">
                <li>{{time}}</li>
            </a>
        </ul>
    </section>
</template>

<style>
   .choose-time ul {
        list-style: none;
        padding: 0px;
    }

    .choose-time ul a {
        float:left;
        border: 1px solid #ffffff;
        border-radius: 20px;
        padding: 5px 20px 5px 20px;
        margin-right:5px;
        color: #ffffff;
        text-decoration: none;
    }

    .choose-time ul a:hover {
        background-color: #ffffff;
        color: rgba(0,0,0,0.5);
    }
</style>