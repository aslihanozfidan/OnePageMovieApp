<script>
    export default {  
        props:{
            title: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
            ticketCount: null
            }
        },  
        methods: {
            decreaseTicket: function() {
                if(this.ticketCount > 0) {
                    return this.ticketCount -= 1;
                } else if(this.ticketCount === 0) {
                    return this.ticketCount = null;
                }         
            },
            increaseTicket: function() {
                return this.ticketCount += 1;
            }
        }
    }
</script>

<template>
    <section class="choose-ticket">
        <a @click="decreaseTicket">-</a>
        <div class="text-price">
            <span>{{ticketCount}} {{title}}</span>
            </br>
            <span>{{price}} TL</span>
        </div>
        <a @click="increaseTicket">+</a>
    </section>
</template>

<style>
    .choose-ticket > {
        float: left;
    }
    .choose-ticket {
        position: relative;
        clear: both;
        padding-top: 20px;
    }
    .text-price {
        float: left;
        text-align: center;
        padding: 0px 20px 0px 20px;
    }
    .text-price span:first-child {
        font-weight: bold;
    }
    .choose-ticket a {
        float: left;
        display: block;
        width: 30px;
        height: 30px;
        border-radius: 20px;
        text-align: center;
        line-height: 26px;
        text-decoration: none;
        color: #ffffff;
        border: 1px solid #ffffff;
        cursor: pointer;
    }
</style>