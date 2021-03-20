<template>
    <div>
        <div class="container">
            <div class="forms-container">
                <div class="signin">
                    <form action="" class="sign-in-form">
                        <img
                            src="./../assets/logo-login-crop.png"
                            alt=""
                            class="logo-image title animate-pulse"
                        />
                        <div class="input-field">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-6 h-6 m-auto"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path
                                    d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                                ></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div class="input-field">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-6 h-6 m-auto"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <rect
                                    x="3"
                                    y="11"
                                    width="18"
                                    height="11"
                                    rx="2"
                                    ry="2"
                                ></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                            <input type="password" placeholder="Password" />
                        </div>
                        <!-- <input type="submit" value="Sign In" class="btn solid"> -->
                        <button type="submit" class="btn from-bottom">
                            Sign In
                        </button>
                    </form>
                </div>
            </div>

            <div class="panels-container animate_animated animate__fadeInUpBig">
                <div class="panel left-panel">
                    <div
                        class="content animate__animated animate__fadeInDown animate__slow"
                    >
                        <h3>
                            <span>Aplikasi</span>
                            <span class="p-center">Program</span>
                            <span
                                >Pelatihan <span class="p-center"></span
                            ></span>
                        </h3>
                    </div>

                    <!-- <img src="./../../assets/img/logo-login.png" class="image animate__animated animate__backInUp animate__delay-1s"> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }
}

.animate-bounce {
    animation: bounce 1s infinite;
}

@keyframes bounce {
    0%,
    100% {
        transform: translateY(-25%);
        animationtimingfunction: cubic-bezier(0.8, 0, 1, 1);
    }

    50% {
        transform: translateY(0);
        animationtimingfunction: cubic-bezier(0, 0, 0.2, 1);
    }
}

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body,
input {
    font-family: "Poppins", sans-serif;
}

.container {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: #fff;
    overflow: hidden;
    background: url("./../assets/double-bubble-outline.png");
}

.container:before {
    content: "";
    position: absolute;
    width: 2000px;
    height: 2000px;
    border-radius: 50%;
    background: linear-gradient(-45deg, #e54035, #f95e54);
    top: -10%;
    right: 48%;
    transform: translateY(-50%);
    z-index: 6;
}

.forms-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    animation: fadeInRight;
    animation-duration: 2s;
}

.signin {
    position: absolute;
    top: 50%;
    left: 75%;
    transform: translate(-50%, -50%);
    width: 50%;
    display: grid;
    grid-template-columns: 1fr;
    z-index: 5;
}

form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 5rem;
    overflow: hidden;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
}

form.sign-in-form {
    z-index: 2;
}

.title {
    font-size: 2.2rem;
    color: #444;
    margin-bottom: 10px;
}

.input-field {
    max-width: 380px;
    width: 100%;
    height: 55px;
    background-color: #f0f0f0;
    margin: 10px 0;
    border-radius: 55px;
    display: grid;
    grid-template-columns: 15% 85%;
    padding: 0 0.4rem;
}

.input-field svg {
    text-align: center;
    line-height: 55px;
    color: #acacac;
    font-size: 1.1rem;
}

.input-field input {
    background: none;
    outline: none;
    border: none;
    line-height: 1;
    font-weight: 600;
    font-size: 1.1rem;
    color: #333;
}

.input-field input::placeholder {
    color: #aaa;
    font-weight: 500;
}

.btn {
    width: 150px;
    height: 49px;
    border: none;
    outline: none;
    border-radius: 49px;
    cursor: pointer;
    background-color: #f95e54;
    color: rgba(255, 255, 255, 0.4);
    margin: 10px 0;
    transition: color 0.2s linear;
    transition: 0.4s linear;
}

.btn:hover {
    color: rgb(255, 255, 255, 1);
    background-color: #e54035;
}

.panels-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    z-index: 7;
}

.left-panel {
    pointer-events: all;
    padding: 3rem 17% 2rem 12%;
}

.panel .content {
    color: #fff;
}

.panel h3 {
    font-weight: 600;
    line-height: 1;
    font-size: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.panel .p-center {
    font-weight: 700;
    color: #222;
}

.panel span {
    display: inline-block;
    padding: 0.5rem 0;
}

.panel p {
    font-size: 0.95rem;
    padding: 0.7rem 0 0 0;
}

.image {
    width: 60%;
    -webkit-filter: drop-shadow(3px 3px 3px #222);
    filter: drop-shadow(3px 3px 3px #222);
}

.logo-image {
    width: 40%;
    padding-bottom: 1rem;
}

@media (max-width: 870px) {
    .container {
        min-height: 800px;
        height: 100vh;
    }

    .container:before {
        width: 1500px;
        height: 1500px;
        left: 30%;
        bottom: 68%;
        transform: translateX(-50%);
        right: initial;
        top: initial;
    }

    .signin {
        width: 100%;
        left: 50%;
        top: 95%;
        transform: translate(-50%, -100%);
    }

    .panels-container {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 2fr 1fr;
    }

    .panel {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 2.5rem 8%;
    }

    .panel .content {
        padding-right: 15%;
    }

    .panel h3 {
        font-size: 1.2rem;
    }

    .panel p {
        font-size: 0.7rem;
        padding: 0.5rem 0;
    }

    .image {
        width: 200px;
    }

    .left-panel {
        grid-row: 1 / 2;
    }

    .right-panel .content,
    .right-panel .image {
        transform: translateX(0);
    }
}

@media (max-width: 570px) {
    form {
        padding: 0 1.5rem;
    }

    .image {
        display: none;
    }

    .panel .content {
        padding: 0.5rem 1rem;
    }

    .container:before {
        bottom: 72%;
        left: 50%;
    }
}
</style>
