<script setup lang="ts">

</script>

<template>
    <div class="card">
        <h1>COV NTXHAIS ZOO NKAUJ 2024 - 2025</h1>
        <p class="line"></p>
        <p class="title">Ntawm No Yog Peb Cov Ntxhais Zoo Nkauj Nyob Lub Tshiab Peb Caug Xyoo No.</p>
        <div class="box-profile">
            <div class="profile">
                <img src="../../assets/img/profile-2.jpg" alt="User 1" />
                <div class="footer">
                    <div class="info">
                        <p class="date">31-Sep-20</p>
                        <p class="name">HNUB VANG</p>
                    </div>
                    <div class="start">
                        ***
                    </div>
                </div>
            </div>
             <div class="profile">
                <img src="../../assets/img/profile-1.jpg" alt="User 1" />
                <div class="footer">
                    <div class="info">
                        <p class="date">31-Sep-20</p>
                        <p class="name">HNUB VANG</p>
                    </div>
                    <div class="start">
                        ***
                    </div>
                </div>
            </div>
            <div class="profile">
                <img src="../../assets/img/profile-3.jpg" alt="User 1" />
                <div class="footer">
                    <div class="info">
                        <p class="date">31-Sep-20</p>
                        <p class="name">HNUB VANG</p>
                    </div>
                    <div class="start">
                        ***
                    </div>
                </div>
            </div>
            <div class="profile">
                <img src="../../assets/img/profile-4.jpg" alt="User 1" />
                <div class="footer">
                    <div class="info">
                        <p class="date">31-Sep-20</p>
                        <p class="name">HNUB VANG</p>
                    </div>
                    <div class="start">
                        ***
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .card {
        width: 100%;
        text-align: center;
        padding: 20px 0;
        & h1 {
            font-size: 20px;
            font-weight: bold;
            color: #333;
            margin-bottom: 5px;
        }
        & .title {
            font-size: 14px;
            margin-top: 5px;
        }
        & .line {
            width: 20%;
            border-right: 50px solid transparent;
            border-left: 50px solid transparent;
            border-top: 1.5px solid #e7d403;
            margin: 0 auto;
        }
        & .box-profile {
            display: grid;  
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            margin-top: 20px;
            max-width: 80%;
            margin: 0 auto;
            padding: 10px 0;
            & .profile {
                margin-top: 30px;
                width: 100%;
                height: 350px;
                border-radius: 10px;
                overflow: hidden;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                transition: transform 0.3s;
                &:hover {
                    transform: scale(1.05);
                }
                & img {
                    width: 100%;
                    height: 80%;
                    object-fit: cover;
                    object-position: top;
                   border-top-left-radius: 5px;
                   border-top-right-radius: 5px;
                }
                & .footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px;
                    & .info {
                        text-align: left;
                        & .date {
                            font-size: 14px;
                            color: #9b9797;
                        }
                         & .name {
                            font-size: 14px;
                            color: #333;
                        }
                    }
                    & .start {
                        font-size: 20px;
                        color: #e7d403;
                    }
                }
            }
        }
    }
</style>