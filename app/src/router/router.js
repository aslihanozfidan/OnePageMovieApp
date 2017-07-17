import Home from '../components/Home.vue';
import MovieDetails from '../components/MovieDetails.vue';
import Tickets from '../components/Tickets.vue';
4
export default {
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/movie/:id',
      component: MovieDetails,
    },
    {
      path: '/movie/:id/tickets',
      component: Tickets,
    }
  ],
  mode: 'history'
}