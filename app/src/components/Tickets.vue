<script>
    import Loader from './Loader.vue';
    import BackdropImage from './BackdropImage.vue';
    import Poster from './Poster.vue';
    import ChooseTime from './ChooseTime.vue';
    import ChooseTicket from './ChooseTicket.vue';
    export default {
        data() {
            return {
                hasDetails: false,
                isLoading: true,
                person: "Person",
                student: "Student"
            }
        },
        created() {
            const movieId = this.$route.params.id;
            console.log(movieId);
            this.$store.dispatch('fetchMovieDetails', this.movieId).then(() => {});
            this.$store.dispatch('fetchMovieTimes', this.movieId).then(() => {
                this.isLoading = false;
                this.hasDetails = true;
            });
        },
        computed: {
            movieId() {
                return this.$route.params.id;
            },
            movie() {
                return this.$store.state.movieDetails[this.movieId];
            },
            times() {
                return this.$store.state.movieTimes[this.movieId];
            }
        },
        components: {
            Loader,
            BackdropImage, 
            Poster,
            ChooseTime,
            ChooseTicket
        }
    }
</script>

<template>
    <section>        
        <loader v-if="isLoading" />
        <section v-if="hasDetails">
            <backdrop-image :imageName="movie.backdrop_path" />
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <poster :posterName="movie.poster_path" /> 
                    </div>
                    <div class="col-sm-8 tickets">
                        <h2>{{movie.title}}</h2>
                        <p>{{movie.overview}}</p>
                        <choose-time />
                        <choose-ticket :title="person" :price="10" />
                        <choose-ticket :title="student" :price="8" />
                        <a class="btn btn-success get-seat">Select your seat</a>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<style>
    .container {
        color: #ffffff;
        padding: 30px;
    } 
    .get-seat {
        position: absolute;
        left: 20px;
        bottom: -70px;
    }

</style>