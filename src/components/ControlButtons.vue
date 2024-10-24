<template>
    <div class="button-group">
        <button class="btn btn__start" @click="startFetching">Старт</button>
        <button class="btn btn__stop" @click="stopFetching">Стоп</button>
    </div>
</template>

<script>
    export default {
        methods: {
            startFetching() {
                this.$emit('start');
            },
            stopFetching() {
                this.$emit('stop');
            }
        }
    };
</script>

<style scoped>
    .button-group {
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
    }

    .btn {
        padding: 10px 20px;
        cursor: pointer;
        border: none;
        background-color: #007bff;
        color: white;
        font-size: 16px;
    }

    .btn:hover {
        background-color: #0056b3;
    }

    .btn__start {
        border-radius: 15px 0 0 15px;
        border-right: 1px solid white;
    }
    .btn__stop {
        border-radius: 0 15px 15px 0;
        border-left: 1px solid white;

    }
</style>
