<template>
  <div class="about">

    <div class="aboutContent">


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
                    <span class="box-2">  
                        <span class="aboutMenu">
                            Hi their!  
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M250.8 1.4c-35.2-3.7-66.6 21.8-70.3 57L174 119 156.7 69.6C145 36.3 108.4 18.8 75.1 30.5S24.2 78.8 35.9 112.1L88.7 262.2C73.5 276.7 64 297.3 64 320v0 24c0 92.8 75.2 168 168 168h48c92.8 0 168-75.2 168-168V272 256 224c0-35.3-28.7-64-64-64c-7.9 0-15.4 1.4-22.4 4c-10.4-21.3-32.3-36-57.6-36c-.7 0-1.5 0-2.2 0l5.9-56.3c3.7-35.2-21.8-66.6-57-70.3zm-.2 155.4C243.9 166.9 240 179 240 192v48c0 .7 0 1.4 0 2c-5.1-1.3-10.5-2-16-2h-7.4l-5.4-15.3 17-161.3c.9-8.8 8.8-15.2 17.6-14.2s15.2 8.8 14.2 17.6l-9.5 90.1zM111.4 85.6L165.7 240H144c-4 0-8 .3-11.9 .9L81.2 96.2c-2.9-8.3 1.5-17.5 9.8-20.4s17.5 1.5 20.4 9.8zM288 192c0-8.8 7.2-16 16-16s16 7.2 16 16v32 16c0 8.8-7.2 16-16 16s-16-7.2-16-16V192zm38.4 108c10.4 21.3 32.3 36 57.6 36c5.5 0 10.9-.7 16-2v10c0 66.3-53.7 120-120 120H232c-66.3 0-120-53.7-120-120l0-24 0 0c0-17.7 14.3-32 32-32h80c8.8 0 16 7.2 16 16s-7.2 16-16 16H184c-13.3 0-24 10.7-24 24s10.7 24 24 24h40c35.3 0 64-28.7 64-64c0-.7 0-1.4 0-2c5.1 1.3 10.5 2 16 2c7.9 0 15.4-1.4 22.4-4zM400 272c0 8.8-7.2 16-16 16s-16-7.2-16-16V240 224c0-8.8 7.2-16 16-16s16 7.2 16 16v32 16z"/></svg>
                            </span>
                        </span>

                    </span>
                </div>
            </div>


        <div class="aboutText">
            <!--
            <span class="aboutMenu">
                Hi their!  
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path d="M250.8 1.4c-35.2-3.7-66.6 21.8-70.3 57L174 119 156.7 69.6C145 36.3 108.4 18.8 75.1 30.5S24.2 78.8 35.9 112.1L88.7 262.2C73.5 276.7 64 297.3 64 320v0 24c0 92.8 75.2 168 168 168h48c92.8 0 168-75.2 168-168V272 256 224c0-35.3-28.7-64-64-64c-7.9 0-15.4 1.4-22.4 4c-10.4-21.3-32.3-36-57.6-36c-.7 0-1.5 0-2.2 0l5.9-56.3c3.7-35.2-21.8-66.6-57-70.3zm-.2 155.4C243.9 166.9 240 179 240 192v48c0 .7 0 1.4 0 2c-5.1-1.3-10.5-2-16-2h-7.4l-5.4-15.3 17-161.3c.9-8.8 8.8-15.2 17.6-14.2s15.2 8.8 14.2 17.6l-9.5 90.1zM111.4 85.6L165.7 240H144c-4 0-8 .3-11.9 .9L81.2 96.2c-2.9-8.3 1.5-17.5 9.8-20.4s17.5 1.5 20.4 9.8zM288 192c0-8.8 7.2-16 16-16s16 7.2 16 16v32 16c0 8.8-7.2 16-16 16s-16-7.2-16-16V192zm38.4 108c10.4 21.3 32.3 36 57.6 36c5.5 0 10.9-.7 16-2v10c0 66.3-53.7 120-120 120H232c-66.3 0-120-53.7-120-120l0-24 0 0c0-17.7 14.3-32 32-32h80c8.8 0 16 7.2 16 16s-7.2 16-16 16H184c-13.3 0-24 10.7-24 24s10.7 24 24 24h40c35.3 0 64-28.7 64-64c0-.7 0-1.4 0-2c5.1 1.3 10.5 2 16 2c7.9 0 15.4-1.4 22.4-4zM400 272c0 8.8-7.2 16-16 16s-16-7.2-16-16V240 224c0-8.8 7.2-16 16-16s16 7.2 16 16v32 16z"/></svg>
                </span>
            </span>
            -->
            <p class="aboutMe">
                I am an undergraduate software developer at the Open University of Sri Lanka, where I am pursuing a Bachelor of Software Engineering degree. <br><br> I have a passion for creating innovative and user-friendly applications that solve real-world problems. I have experience in programming languages, such as JavaScript ,Python. <br> I am always eager to learn new skills and technologies, and I enjoy collaborating with other developers and clients. <br><br> My goal is to become a proficient and professional software engineer who can contribute to the advancement of the software industry in Sri Lanka and beyond. <br><br>
                If you are likes My work reach out and say "Hey!". I look forward to hearing from you!
                <br>
            </p>
        </div>
    </div>
    <div class="skills">




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
                    <span class="box-2">  
                        <span class="aboutMenu">
                            Skills  
                            <span>
                                <svg style="color: black;" width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 16C14 17.1046 13.1046 18 12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.2091 20 16 18.2091 16 16C16 13.7909 14.2091 12 12 12ZM14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8Z" fill="currentColor" /></svg>
                            </span>
                        </span>

                    </span>
                </div>
            </div>

       
        <div class="skillBox">

            <img src="../assets/css.png" alt="" class="skillImage">
            <img src="../assets/html.png" alt="" class="skillImage" style="width:185px;">
            <img src="../assets/js.png" alt="" class="skillImage" style="width:120px;">
            <img src="../assets/python.png" alt="" class="skillImage" style="width:200px;">
            <img src="../assets/logo.png" alt="" style="width: 130px; height: 130px; margin-top: 50px;">

        </div>
    </div>
    <div class="thisWebsite">
        <div class="skills box-23" style="">


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
                    <span class="box-2">  
                        <span class="aboutMenu">
                            This Website.. 
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#DE3163" class="bi bi-braces-asterisk" viewBox="0 0 16 16" style="color: black;"><path fill-rule="evenodd" d="M1.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C2.25 2 1.49 2.759 1.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6ZM14.886 7.9v.164c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456v-1.3c-1.114 0-1.49-.362-1.49-1.456V4.352C14.51 2.759 13.75 2 12.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6ZM7.5 11.5V9.207l-1.621 1.621-.707-.707L6.792 8.5H4.5v-1h2.293L5.172 5.879l.707-.707L7.5 6.792V4.5h1v2.293l1.621-1.621.707.707L9.208 7.5H11.5v1H9.207l1.621 1.621-.707.707L8.5 9.208V11.5h-1Z"></path></svg>
                            </span>
                        </span>

                    </span>
                </div>
            </div>


           



            <p class="aboutMe" style="">
                Discover my world of creativity and innovation through my personal portfolio website. I've brought together the power of HTML, CSS, Node.js, and Vue.js to create a dynamic and visually appealing platform that showcases my skills, projects, and passion for web development. <br><br>
                Explore a collection of my finest projects, each crafted with attention to detail and designed to solve real-world problems. Dive into my background in the this section to learn more about my journey, skills, and aspirations. Whether you're a potential employer, collaborator, or simply someone interested in my work, this website serves as a window into my expertise and a gateway to connect with me. <br><br>
                Join me on this digital journey and get inspired by the possibilities of web development. Welcome to my world of innovation and creativity!
                <br><br>
                Yours faithfully, 
                <br>
                Vishwa Prabhath.
            </p>
            <div class="box-1 box-1x">
                <img src="../assets/css.png" alt="" class="skillImage">
                <img src="../assets/html.png" alt="" class="skillImage" style="width:185px;">
                <img src="../assets/js.png" alt="" class="skillImage" style="width:120px;">
                <img src="https://pluralsight2.imgix.net/paths/images/nodejs-45adbe594d.png" alt="" class="skillImage" style="width: 220px;">
                <img src="../assets/logo.png" alt="" style="width: 130px; height: 130px; margin-top: 50px;">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.box-23{
    justify-content: flex-start; 
    padding-left: 5px;
}

.skillsH1, .aboutMenu{
    width: 100%;
    color: #DE3163;
}

.about{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:flex-start;
    gap: 20px;
}

.aboutContent{
    width: 620px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color:  #ECF0F1;
    border-radius: 10px;
}

.aboutMenu{
    font-size: 30px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items:flex-start;
    gap: 10px;
    color: black;
}

.aboutMe{
    font-size: 20px;
    text-align: left;
}

.aboutText{
    display: flex;
    flex-direction: column;
    align-items:flex-start;

}

.skills{
    width: 630px;
    background-color:  #ECF0F1;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    border-radius: 10px;
    padding: 40px;
    gap: 30px;
}


.skills h1{
    display: flex;
    justify-content:flex-start;
    gap: 5px;
    align-items: center;
}


.skillImage{
    width: 150px;
}

.skillBox{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
}

.box-1{
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
}

@media screen and (max-width:414px) {
    .aboutContent {
        width: 85vw;
        padding: 13px;
    }

    .skills {
        width: 87vw;
        border-radius: 10px;
        padding: 6px;
    }

    .skillBox{
        gap: 0;
    }

    .skillsH1{
        width: 90%;
        color: #DE3163;
    }
    .skills h1 {
        justify-content: center;
    }

    .aboutMe{
        width: 95%;
    }

    .box-1{
        gap: unset;
    }
    .box-1x{
        display: none;
    }

}

</style>