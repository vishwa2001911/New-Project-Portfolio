<template>
    <header >
        <nav :style="{backgroundColor:mode.bgColor}">
            <div class="navIcon" style="margin-left: 20px; font-weight: bold;" >
                Vishwa Prabhath
            </div>
            <div class="theamIcon" style="margin-right: 20px; cursor: pointer;" @click="ChangeMode">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-palette-fill" viewBox="0 0 16 16">
                  <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                </svg>
            </div>
        </nav>
        <div class="headerMainContent">
                <div class="cover">
                    <img src="https://media.tenor.com/wIa91mot0tAAAAAd/pixel-city-chill.gif" alt="" class="coverimg">
                    <img src="../assets/my.jpg" alt="" class="profileImage">
                </div>
            <div class="headerContent">
            <button class="followButton" :style="{backgroundColor:mode.buttonColor}" onclick = "window.location.href='https://www.linkedin.com/in/vishwa-prabhath-jayasinghe-b5202615b/';">
                <span class="followBtnIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                </span>
                <span>Follow</span>
            </button>
            <div class="mainText">
                <h1 class="ProfileName">Vishwa Prabhath</h1>
                <h5 class="quate">Brings ideas to life with code!</h5>
                <p class="JobTitles">
                    Frontend Developer, Undergraduate at Open University of Sri Lanka (Bachelor of Software Engineering (BSEHons))
                </p>
            </div>
            <ul class="Discription">
                <li>
                    <a @click.prevent="" href="" class="discriptionA">
                        <div class="discriptionIcon">

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suitcase-lg-fill" viewBox="0 0 16 16">
                              <path d="M7 0a2 2 0 0 0-2 2H1.5A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14H2a.5.5 0 0 0 1 0h10a.5.5 0 0 0 1 0h.5a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2H11a2 2 0 0 0-2-2H7ZM6 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1H6ZM3 13V3h1v10H3Zm9 0V3h1v10h-1Z"/>
                            </svg>
                        </div>
                        <h5 class="DiscriptionTitle">Available</h5>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/vishwa2001911" class="discriptionA" :style="{color:mode.buttonColor}" target="_blank">
                        <div class="discriptionIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                        </div>
                        <h5 class="DiscriptionTitle">GitHub</h5>
                    </a>
                </li>
                <li>
                    <a @click.prevent="" href="" class="discriptionA">
                        <div class="discriptionIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-balloon" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M8 9.984C10.403 9.506 12 7.48 12 5a4 4 0 0 0-8 0c0 2.48 1.597 4.506 4 4.984ZM13 5c0 2.837-1.789 5.227-4.52 5.901l.244.487a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.244-.487C4.789 10.227 3 7.837 3 5a5 5 0 0 1 10 0Zm-6.938-.495a2.003 2.003 0 0 1 1.443-1.443C7.773 2.994 8 2.776 8 2.5c0-.276-.226-.504-.498-.459a3.003 3.003 0 0 0-2.46 2.461c-.046.272.182.498.458.498s.494-.227.562-.495Z"/>
                            </svg>
                        </div>
                        <h5 class="DiscriptionTitle">Frebruary 17</h5>
                    </a>
                </li>
                <li>
                    <a @click.prevent="" href="" class="discriptionA">
                        <div class="discriptionIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar4-range" viewBox="0 0 16 16">
                              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
                              <path d="M9 7.5a.5.5 0 0 1 .5-.5H15v2H9.5a.5.5 0 0 1-.5-.5v-1zm-2 3v1a.5.5 0 0 1-.5.5H1v-2h5.5a.5.5 0 0 1 .5.5z"/>
                            </svg>
                        </div>
                        <h5 class="DiscriptionTitle">Joined Jan 2023</h5>
                    </a>
                </li>
            </ul>
            <div class="ContactByEmail">
                <div class="emailTitle">Keep up to date with my latest projects and adventures!</div>
                
                <form class="emailForm" @submit.prevent="sendMail">
                     <input class="inputEmail" type="email" name="message" placeholder="Email Address." v-model="eMailAddress" required >
                     <input type="submit" class="emailSubmit" value="submit" :style="{backgroundColor:mode.buttonColor}">
                </form>
                <span class="EmailSpam">
                    *No spam.
                </span>
            </div>
            <ul class="routBox">
                <li v-for="(item, index) in routItems" :key="index" >
                    <a href="" class="routBoxLink "    :class="[ {'eactive': indexNum== index}]" @click.prevent="sendRoute(index)">{{ item }}</a>
                </li>
                <!--
                <li><a href="" class="routBoxLink">About</a></li>
                <li><a href="" class="routBoxLink">Education</a></li>
                <li><a href="" class="routBoxLink">Feedback</a></li>
                -->
            </ul>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    props:[
        'mode'
    ],
    data() {
        return {
            routItems:[ 'Feed', 'About', 'Education', 'Feedback'],
            indexNum:0,
            activColor:'',
            eMailAddress:'',
        }
    },
    methods:{
        sendRoute(index){
            this.indexNum = index;
            this.$emit('sendRoute',index)
            this.changeActiveColor(index);
        },
        changeActiveColor(index){
            this.activColor = {
                "border-bottom": 'solid palevioletred 3px'
            }
        },
        ChangeMode(){
            this.$emit('changeMode');
        },
        async sendMail(){
            try {
                const res = await emailjs.send("service_teaugkp","template_f1fpbe7",{
                            from_name: "Portfolio",
                            message: this.eMailAddress,
                            reply_to: "vprabhath937@gmail.com",
                            });
                alert("You are Connected!")
            } catch (error) {
                console.log(error);
            }
        }
    }

}


</script>

<style>



.eactive{
    border-bottom: solid palevioletred 3px;
}






.quate{
    font-size: 25px;
}



nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 50px;
    background-color: whitesmoke;
    position: fixed;
    top: 0;
    left: 0;
    -webkit-box-shadow: 2px 5px 5px -4px rgba(0,0,0,0.42);
    -moz-box-shadow: 2px 5px 5px -4px rgba(0,0,0,0.42);
    box-shadow: 2px 5px 5px -4px rgba(0,0,0,0.42);
    z-index: 3;
}

.headerMainContent{
    margin-top: 53px;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.profileImage{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: solid black 5px;
}

.cover{
    position: relative;
    width: 650px;
}

.profileImage{
    position: absolute;
    bottom: -64px;
    left: 34px;
}

.headerContent{
    width: 650px;
    position: relative;
    padding-top: 50px;
    
}

.followButton{
    width: 100px;
    height: 40px;
    background-color: palevioletred;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: none;
    border-radius: 20px;
    position: absolute;
    right: 10px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    color: whitesmoke;
    transition: 0.4s;
}

.followButton:hover{
    background-color: #DE3163;
    -webkit-box-shadow: 10px 12px 16px -12px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 12px 16px -12px rgba(0,0,0,0.75);
    box-shadow: 10px 12px 16px -12px rgba(0,0,0,0.75);
}

.emailSubmit:hover{
    background-color: #DE3163;
}


.theamIcon span svg:hover{
    color: #DE3163;
}

.mainText{
    text-align: left;
    margin-left: 20px;
    color: #566573;
}

.discriptionA{
    display: flex;
    width: 145px;
    height: 20px;
    justify-content:center;
    gap: 10px;
    align-items: center;
    text-decoration: none;
    font-size: 18px;
    font-weight: normal;
    color: gray;

}

.Discription{
    display: flex;
    width: 80%;
    justify-content: space-evenly;
    gap: 20px;
    align-items: center;
    margin: 30px 0 30px 0;
}

.Discription li{
    list-style: none;
}

.DiscriptionTitle{
   padding-bottom: 5px;
}

.emailTitle{
    font-size: 20px;
    margin: 20px 0 20px 0;
    color:black;
}

.inputEmail{
    width: 300px;
    height: 34px;
    outline: none;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: #FDFEFE;
    color: #7B7D7D;
    border: none;
    font-size: 17px;
    text-align: center;
    cursor: pointer;
    font-weight: bold;
}

.emailSubmit{
    width: 90px;
    height: 36px;
    font-size: 15px;
    font-weight: bold;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border: none;
    color: whitesmoke;
    background-color: palevioletred;
    margin: 10px 0 10px 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
}

.emailForm{
    display: flex;
    justify-content: center;
    align-items: center;

}

.EmailSpam{
    font-size: 15px;
}

.routBox{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 0;
    padding-left: 0;
}

.routBox li{
    width: 25%;
    height: 40px;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.4s;
}

.routBox li:hover{
    background-color: #F0F3F4;
}

.routBox li a {
    text-decoration: none;
    padding: 10px;
    color: #566573;
    font-weight: bold;
    font-size: 20px;
}


@media screen and (max-width: 414px) {
    nav{
        width: 100vw;
        position: fixed;
    }


    .headerMainContent,.headerContent{
        width: 100vw;
    }

    .coverimg{
        width: 100vw;
    }

    .mainText{
        width: 90%;
    }

    .profileImage {
        position: absolute;
        bottom: -57px;
        left: 154px;
    }

    .profileImage {
        width: 130px;
        height: 130px;
        border-radius: 50%;
        border: solid black 5px;
    }

    .followButton {
        height: 39px;
        right: 17px;
        top: 7px;
    }

    .ProfileName{
        margin: 10px 0 0 0;
        color: black;
        font-size: 35px;
    }

    .quate{
        font-size: 20px;
        font-weight: normal;
        margin: 5px 0 20px 0;
    }

    .Discription {
        width: 100%;
        gap: 4px;
        flex-wrap: wrap;
        margin: 6px 0 6px 0;
        padding-left: 0;
    }

    .JobTitles{
        font-size: 20px;
    }

    .inputEmail{
        width: 200px;
    }

    .routBox{
        margin-left: 5px;
        margin-right: 5px;
        width: 95%;
        font-size: 18px;
        
    }

    .routBox li {
        width: unset;
    }

    .emailTitle{
        font-size: 17px;
    }
    

}

</style>