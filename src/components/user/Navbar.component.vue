<script setup lang="ts">

</script>

<template>
    <div class="navbar">
        <h1 class="logo">HMOOB</h1>
        <div class="menu">
            <a>HMOOB</a>
            <a>HU NKAUJ</a>
            <a>KEV LOM ZEM</a>
            <a>NTXHAIS ZOO NKAUJ</a>
        </div>
        <div class="box-btn">
            <button class="btn-signin">Sign In</button>
            <button class="btn-signup">Sign Up</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 100px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        background-color: rgb(0, 0, 0, 0.1);
        // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        & h1 {
            color: #fff;
        }
        & .menu {
            display: flex;
            gap: 20px;
            & a {
                text-decoration: none;
                color: #f7f4f4;
                font-size: 16px;
                font-weight: 500;
                &:hover {
                    color: #007BFF;
                    cursor: pointer;
                }
            }
        }
        & .box-btn {
            display: flex;
            gap: 10px;
            & .btn-signin, & .btn-signup {
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: 500;
                cursor: pointer;
            }

            & .btn-signin {
                background-color: #007BFF;
                color: #fff;
            }
            & .btn-signup {
                background-color: #28A745;
                color: #fff;
            }
        }
    }
</style>