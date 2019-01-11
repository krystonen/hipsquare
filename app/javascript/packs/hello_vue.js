/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

// import Vue from 'vue'
// import App from '../app.vue'

// document.addEventListener('DOMContentLoaded', () => {
//   const el = document.body.appendChild(document.createElement('hello'))
//   const app = new Vue({
//     el,
//     render: h => h(App)
//   })

//   console.log(app)
// })

// The above code uses Vue without the compiler, which means you cannot
// use Vue to target elements in your existing html templates. You would
// need to always use single file components.
// To be able to target elements in your existing html/erb templates,
// comment out the above code and uncomment the below
// Add <%= javascript_pack_tag 'hello_vue' %> to your layout
// Then add this markup to your html template:
//
// <div id='hello'>
//   {{message}}
//   <app></app>
// </div>

// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'

// document.addEventListener('DOMContentLoaded', () => {



//   Vue.component('venue-item', {
//       props: ['venue'],
//       template: '#venue-template'
//     })

//     var venue = new Vue({
//       el: '#venue',

//       data: {
//         foursquare: []
//       },

//       created: function () {
//         this.fetchData();
//       },

//       methods: {
//         fetchData: function () {
//            // var myRequest = new Request("https://api.foursquare.com/v2/venues/explore?client_id=BWDSBR1WRNK53B4IL3TI4NFEKY1P430OZF3QTDZ4DETEFI5E&client_secret=C4Z1NP4CWF2YOPXQ03SVEAL1PQYZ0NASJKXC04GYP5LY1Z1X&ll=" + lat + "," + long + "&v=20181203");
//           var myRequest = new Request("/foursquare.json");

//           fetch(myRequest)
//           .then(function(response) { return response.json(); })
//           .then((data) => {
//             this.foursquare = data.response.groups[0].items.slice(0,9)
//           })
//         }
//       }
//   })
// })


//
// If the using turbolinks, install 'vue-turbolinks':
//
// yarn add 'vue-turbolinks'
//
// Then uncomment the code block below:
//
// import TurbolinksAdapter from 'vue-turbolinks'
// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'

// Vue.use(TurbolinksAdapter)

// document.addEventListener('turbolinks:load', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
