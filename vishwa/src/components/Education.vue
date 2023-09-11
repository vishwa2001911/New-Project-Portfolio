<template>
  <div class="EducationMain">
    <div class="Education">
        <div class="eduBox">
            <span class="eduTitle">
                <div class="edu-h1">Education</div>
                <div class="edu-icon" style="color: palevioletred;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
                      <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                    </svg>
                </div>
            </span>
            <div class="box">
                <h3 class="eduBoxTitle">Bachelor of Software Engineering (BSEHons)Undergraduate</h3>
                <h4 class="institute">The Open University of Sri Lanka</h4>
                <span class="eduTime">2022 Nov - Present</span>
                <img src="" alt="" class="instituteImage">
            </div>

            <div class="box">
                <h3 class="eduBoxTitle">G.C.E A/L Examination - Biology Stream</h3>
                <h4 class="institute">Mahanama Collage - Monaragala</h4>
                <span class="eduTime">2017</span>
                <img src="" alt="" class="instituteImage">
            </div>
        </div>
        <div class="eduBox">
            <span class="eduTitle">
                <span class="edu-h1">Certification</span>
                <span class="edu-icon"></span>
            </span>
            <div class="box" v-for="(item, index) in certifications" :key="index">
                <a :href="item.url" target="_blank" style="text-decoration: none; color: black;">
                    <h3 class="eduBoxTitle">{{ item.courseName }}</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                      <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                      <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                    </svg>
                </a>
                <h4 class="institute">{{item.institute}}</h4>
                <span class="eduTime">{{ item.year }}</span>
                <img src="" alt="" class="instituteImage">
            </div>   
        </div>
        <div class="eduBox">
            
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            certifications:[
                {
                    courseName:'Python Programming',
                    institute:'University of Moratuwa',
                    year:'2020 - 2023',
                    url:'https://drive.google.com/file/d/19RP-Qjs1fkCiz3MF1kaw0jTXAI_pN9Qm/view'
                },
                {
                    courseName:'Front End Web Development',
                    institute:'University of Moratuwa',
                    year:'2022 - 2023',
                    url:'https://drive.google.com/file/d/1xNDRCv8dbHRy1D7Ky45NFVZnP6JNMuBJ/view'
                },
                {
                    courseName:'Python for Beginners',
                    institute:'University of Moratuwa',
                    year:'2022',
                    url:'https://drive.google.com/file/d/1c06udR1WUARmeAZFuqBqkuTp8K8UoXUJ/view'
                },
                {
                    courseName:'Web Design for Beginners',
                    institute:'University of Moratuwa',
                    year:'2022',
                    url:'https://drive.google.com/file/d/1xNDRCv8dbHRy1D7Ky45NFVZnP6JNMuBJ/view'
                },
            ]
        }
    },

}
</script>

<style>

.EducationMain{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.Education{
    width: 630px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: left;
}

.eduBox{
    width: 90%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-color: #ECF0F1;
    border-radius: 10px;
}



.eduTitle{
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
}

.edu-h1{
    padding-bottom: 5px;
}

.box{
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    border-radius: 10px;
    transition: 0.4s;
}

.box:hover{
    background-color: #F8F9F9;
}

.eduTime{
    font-size: 15px;
}

.eduBoxTitle, .institute{
    margin: 0;
}

.box a {
    display: flex;
    gap: 5px;
    align-items: center;
}

.box svg{
    fill: palevioletred;
}

</style>