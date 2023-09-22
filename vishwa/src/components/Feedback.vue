<template>

    <div class="FeedbackMain">

        <div class="Feedback">
            <div class="feedbackP">
                <img src="../assets/my.jpg" alt="" class="FeedbackPost">
                <div class="feedProfileBox">
                    <span style="display: flex; align-items: center;">
                        <span class="user">Vishwa Prabhath</span>
                        <span style="margin-right: 10px; color: #02BAFF ;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                              <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                            </svg>
                        </span>
                        <span class="userDate" style="font-size: 13px;">6 Jan 2023</span>
                    </span>
                    <span style="text-align: left;">Wanna leave me a message? Fill in this form</span>
                </div>
            </div>
            <div class="Form" @submit.prevent="postData()">
                <form action="" class="form">
                <h3 class="GestBookFormTitle" style="font-size: 20px;">
                    Guest Book Form

                </h3>
                <span class="formInstructions" >Fill in this form and I'll get your guestbook entry added.</span>
                <input type="text" placeholder="First Name" required v-model="message.name">
                <input type="text" placeholder="Phone Number" required v-model="message.phone">
                <input type="text" placeholder="Your URL (site, etc.)" required v-model="message.url">
                <input type="text" placeholder="Organisation" required v-model="message.organization">
                <input type="text" placeholder="Your Avatar URL" required v-model="message.avatarUrl">
                <textarea name="" id="" cols="30" rows="3" placeholder="Your message" style="height: 50px;" v-model="message.message"></textarea>
                <input type="submit" placeholder="Submit" class="formSubmit" style="color: aliceblue;">
            </form>
            </div>
        </div>

        <!---->


        <div class="Feedback" v-for="(item, index) in serverData" :key="index">
            <div class="feedbackP">
                <img :src='item.avatarUrl' alt="" class="FeedbackPost" >
                <div class="feedProfileBox">
                    <span style="display: flex; align-items: center;">
                        <span class="user">{{ item.name }}</span>
                        <span style="margin-right: 5px; color: #02BAFF ;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                              <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                            </svg>
                        </span>
                        <span class="userDate" style="font-size: 13px;">{{ item.date }}</span>
                    </span>
                    <span style="text-align: left;">
                        {{ item.message }}
                    </span>
                </div>
                <a :href="item.url" target="_blank" class="feedbackPostUrl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                    </svg> 
                </a>
                <span class="removeItem" @click.prevent="removeItem(item.phone)">
                    x
                </span>
            </div>
        </div>
        
        <!---->

    </div>
  
</template>

<script>
import axios, { Axios } from 'axios'


export default {
    data() {
        return {
            message:{
                name:'',
                phone:'',
                url:'',
                organization:'',
                avatarUrl:'',
                message:'',
                date:''
            },
            serverUrl:'https://node-portfolio-ifko.onrender.com/',
            serverData:[],
        }
    },
    methods: {
        async postData(){
            this.getDate()
            try {
                const response = await axios.post(this.serverUrl,this.message);
                const res = await response.data;
                console.log(res);

                this.resetForm();
                this.getData();
            } catch (error) {
                console.log(error)
            }
        },
        async getData(){
            try {

                const res = await axios.get(this.serverUrl);
                const response = await res.data;
                this.serverData = await response.data;
                console.log(this.serverData);

            } catch (error) {
                console.log(error)
            }
        },
        resetForm(){
            this.message = {
                name:'',
                phone:'',
                url:'',
                organization:'',
                avatarUrl:'',
                message:'',
                date:''
            }
        },
        getDate(){
            const d = new Date();

            const m = {
                    1:"Jan",
                    2:"Feb",
                    3:"March",
                    4:"Apr",
                    5:"May",
                    6:"June",
                    8:"July",
                    9:"Sep",
                    10:"Oct",
                    11:"Nov",
                    12:"Des"
                }

                let year = d.getFullYear();
                let day = d.getDate();
                let month = d.getMonth();

                this.message.date = `${day} ${m[month+1]} ${year}`;
        },
        async removeItem(phone){

            console.log(phone)
            try {
                const response = await axios.delete("https://node-portfolio-ifko.onrender.com/", { data:{"phone":phone}, headers: { "Authorization": "***" } });
                const res = await response.data;
                console.log(res);
                
            } catch (error) {
                console.log(error);
            }
            this.getData();
        }
    },
    created() {
        this.getData();
    },
    //onBeforeMount(){
    //    this.getData();
    //}

}
</script>

<style>

.FeedbackMain{
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    
}

.Feedback{
    display: flex;
    width: 620px;
    padding: 40px;
    flex-direction: column;
    background-color: #ECF0F1;
    border-radius: 10px;
    position: relative;
}

.FeedbackPost{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: solid black 3px;
}

.feedbackP{
    display: flex;
    cursor: pointer;
    
}

.user{
 
    color: black;
    font-style: italic;
    font-weight: bold;
    font-size: 17px;
    margin-right: 10px;
}

.feedProfileBox{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 5px;
    margin-left: 10px;
    
}

.Form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    width: 70%;
    padding: 20px 30px 30px 20px;
    margin-top: 30px;
    text-align: left;
    background-color: #CACFD2;
    border-radius: 10px;
    transition: 0.4s;
}

.form:hover{
    -webkit-box-shadow: 2px 3px 5px -2px rgba(123,125,125,1);
    -moz-box-shadow: 2px 3px 5px -2px rgba(123,125,125,1);
    box-shadow: 2px 3px 5px -2px rgba(123,125,125,1);
}

.form input, textarea{
    height: 30px;
    padding: 5px 0 5px 20px;
    font-size: 17px;
    border-radius: 10px;
    border: none;
    outline: none;
    color:#909497 ;
}

.formSubmit{
    background-color: palevioletred;
    color: whitesmoke;
    font-weight: bolder;
    cursor: pointer;
}

.feedbackPostUrl{
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 35px;
    height: 35px;
    transition: 0.4s;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
}

.removeItem{
    position: absolute;
    right: 10px;
    top: 10px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #CACFD2;
    font-size: 20px;
    transition: 0.4s;
    border-radius: 10px;
}


.feedbackPostUrl:hover, .removeItem:hover {
    background-color: #D7DBDD;
    color: #02BAFF ;
}


@media screen and (max-width: 414px) {
    .Feedback {
        width: 85vw;
        padding: 13px;
    }

    .form{
        width: 85%;
    }

    .form h3{
        margin: 0;
    }

    .user {
        font-size: 15px;
        margin-right: 6px;
        text-align: left;
        max-width: 128px;
    }
}










</style>