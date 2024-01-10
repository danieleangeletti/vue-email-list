const { createApp } = Vue;

createApp({
    data(){
        return {
            emails: []
        };
    },
    mounted(){
        for (let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                const casual_email = res.data.response;
                this.emails.push(casual_email);
            })
        };
    }
}).mount('#app');