<script setup lang="ts">

</script>

<template>
    <div class="banner">
        <img src="../../assets/img//banner.jpg" alt="Banner" class="banner-image"/>
        <div class="content">
            <h1>Hi, NYOB ZOO IB TSOOM HMOOB...!</h1>
            <p class="description">
                ZOO SIAB TXAIS TOS PEB IB TSOOM HMOOB <br>
                PEB LUB TSHIAB PEB CAUG XYOO 2024 - 2025 LOS TXAG LAWM
            </p>
            <button class="btn-info">NKAUJ HMOOB 52</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .banner {
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.3);
        }
        & .banner-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
        }
        & .content {
            position: absolute;
            top: 60%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
            text-align: center;
            z-index: 2;
            & .description {
               margin-top: 20px;
            }
            & h1 {
                font-size: 40px;
                font-weight: bold;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            }
            & .btn-info {
                margin-top: 20px;
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: 500;
                cursor: pointer;
                background-color: #ebedf0;
                color: #0b0b0b;
                transition: background-color 0.3s ease;
            }
        }
    }
</style>