<template>
    <div class="theme-toggle">
        <label>
            <input type="checkbox" v-model="darkMode" @change="toggleTheme">
            {{ darkMode ? 'Темная тема' : 'Светлая тема' }}
        </label>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                darkMode: false
            };
        },
        methods: {
            toggleTheme() {
                this.$emit('toggleTheme', this.darkMode);
            }
        }
    };
</script>

<style scoped>
    .theme-toggle {
        text-align: right;
        margin-bottom: 20px;
    }
</style>
