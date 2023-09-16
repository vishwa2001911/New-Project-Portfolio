<template>
  <div class="feeds">
    
  <!----> 
  
  <!---->

  <div class="feedBox">
    <div class="pinnedSlot">
        <div class="pinnedIcon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-fill" viewBox="0 0 16 16">
              <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z"/>
            </svg>
        </div>
        <span class="pinnedText">Pinned Cheep</span>
    </div>
    <div class="feedBoxProfile">

        <!--Profile Info-->

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
                        
                        <span>
                            Feeling
                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cup-hot-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5Z"/>
                                <path d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z"/>
                            </svg>
                        </span>
                        
                    </span>
                </div>
            </div>

        <!---->

            <div class="feedMainTextBox">
        <h1 class="feedTitle">Hello World</h1>
        <p class="feedText">
            This is my site where I try and post about what I'm up to and how to do things with code. You can follow along with RSS by hitting the "Follow" button up above. Or if you're only interested in stuff I wrote about, check out /writing.
        </p>
    </div>
    <img src="https://jhey.dev/media/image/enhanced/202301gde-dinner-750x500.avif" alt="" class="feedImage">
    <div class="reactBox">
        <span class="permalink">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
              <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
              <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
            </svg>
        </span>
        <span class="react">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
        </span>
    </div>

    </div>
    
  </div>


  <!---->
  </div>
</template>

<script>
export default {

}
</script>

<style>

.feeds{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:flex-start;
    gap: 20px;
    
}

.feedBox{
    width: 620px;
    padding: 40px;
    transition: 0.4s;
    border: none;
    border-radius: 10px;
    cursor: pointer;

}

.feedBox:hover{
    background-color: #ECF0F1;
    -webkit-box-shadow: 2px 3px 5px -2px rgba(123,125,125,1);
    -moz-box-shadow: 2px 3px 5px -2px rgba(123,125,125,1);
    box-shadow: 2px 3px 5px -2px rgba(123,125,125,1);
}

.pinnedSlot{
    display: flex;
    justify-content:flex-start;
    align-items:flex-start;
    gap: 10px;
}

.pinnedText{
    font-size: 13px;
}



.feedProfileInfo{
    display: flex;
    align-items: flex-start;

}

.feedProfile-box{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    margin-left: 70px;
}

.feedDate{
    font-size: 10px;
}

.feedBoxeProfileImag{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    top: 0px;
    left: 0px;
    border: solid black 3px;
}

.feedProfileName{
    font-size: 18px;
    color: black;
    font-family:monospace;
}

.feedFeelingBox{
    width: 80px;
    border: none;
    background-color: palevioletred;
    border-radius: 20px;
    padding: 4px;
    display: flex;
    justify-content:space-around;
    align-items: center;
    color: whitesmoke;
    margin: 20px 0 10px 10px;
}

.feedMainTextBox{
    width: 600px;
    text-align: left;
    margin-left: 20px;
}

.feedImage{
    width: 600px;
    border-radius: 10px;
}

.reactBox{
    display: flex;
    justify-content:flex-end;
    align-items: center;
    margin-right: 20px;
    margin-top: 10px;
    gap: 5px;
}

.box-2{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

</style>