<script>
    export default {
        name: 'Movie',
        props: {
            movie: { 
                type: Object,
                required: true
            }
        },
        computed: {
            posterPath() {
                return `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`;
            },
            movieDetailsPath() {
                return `/movie/${this.movie.id}`;
            }
        }
    }    
</script>

<template>
 <div class="card">
    <router-link :to="movieDetailsPath">
        <img class="card-img-top" :src="posterPath" :alt="movie.original_title">
    </router-link>
    <div class="card-block">
        <h4 class="card-title">{{movie.original_title}}</h4>
        <p class="card-text">{{movie.overview}}</p>
    </div>
    <div class="card-footer">
        <small class="text-muted">Average rating: {{movie.vote_average.toFixed(2)}}</small>
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
