
<script>
    import Poster from './Poster.vue';
    export default {
        name: 'Movie',
        props: {
            movie: { 
                type: Object,
                required: true
            }
        },
        components: {
            Poster,
        },
        computed: {
            movieDetailsPath() {
                return `/movie/${this.movie.id}`;
            }
        }
    }    
</script>

<template>
 <div class="card">
    <router-link :to="movieDetailsPath">
        <poster class="card-img-top" :posterName="movie.poster_path" :alt="movie.original_title" />
    </router-link>
    <div class="card-block">
        <h4 class="card-title">{{movie.original_title}}</h4>
        <p class="card-text">{{movie.overview}}</p>
    </div>
    <div class="card-footer">
        <small class="text-muted">Average rating: {{movie.vote_average.toFixed(1)}}</small>
    </div>
  </div>
</template>

<style>
    .card {
        min-width: 250px;
        margin-bottom: 30px;
        border: 1px solid rgba(0,0,0,.125);
        border-radius: .25rem;
    }
    .card img {
        width: 100%;
    }
    .card-footer {
        padding: .75rem 1.25rem;
        background-color: #f7f7f9;
        border-top: 1px solid rgba(0,0,0,.125);
    }
</style>
