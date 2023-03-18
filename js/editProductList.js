import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js';

const apiRoot = 'https://vue3-course-api.hexschool.io/v2/';
const aipPath = 'jamievue'

const app = createApp({
  data() {
    return {
      products: []
    };
  },
  methods: {
      checkLogin(){
          const url = `${apiRoot}api/user/check`;

          axios.post(url)
              .then((res)=>{                          
              })
              .catch(err=>{
                  window.location = './login.html';
              });
      }
  },
  mounted() {
      //取登入token
      const token = document.cookie.replace((/(?:(?:^|.*;\s*)hexschool\s*\=\s*([^;]*).*$)|^.*$/, "$1"))
                      .replace("hexschool=","");
      //axios預設帶token
      axios.defaults.headers.common['Authorization']=token;
      this.checkLogin();
  },
});

app.mount("#app");
