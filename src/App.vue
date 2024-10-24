<template>
    <div :class="theme">
        <ThemeToggle @toggleTheme="toggleTheme"/>
        <h1>График и таблица с обновляемыми данными</h1>
        <ControlButtons @start="startFetching" @stop="stopFetching"/>
        <LineChart :dataProps="dataProps" :dataOptions="dataOptions" :highlightIndex="highlightIndex"/>
        <DataTable :rows="tableData" @rowHover="onRowHover"/>
    </div>
</template>

<script>
    // import { fetchData } from '@/api/loadData';
    import { fetchData } from '@/api/loadDataLocal';
    import ControlButtons from '@/components/ControlButtons'
    import DataTable from '@/components/DataTable'
    import LineChart from '@/components/LineChart'
    import ThemeToggle from '@/components/ThemeToggle'

    export default {
        name: 'App',
        components: {
            ControlButtons,
            DataTable,
            LineChart,
            ThemeToggle,
        },
        data() {
            return {
                tableData: [],
                dataProps: {
                    labels: [],
                    datasets: [
                        {
                            label: '',
                            backgroundColor: '#66f82c',
                            borderColor: '#0052A8',
                            data: []
                        }
                    ]
                },
                dataOptions: {
                    responsive: true,
                    elements: {
                        point: {
                            radius: 4,
                            hoverRadius: 12,
                            hoverBackgroundColor: 'rgba(255, 99, 132, 0.8)',
                        },
                        line: {
                            tension: 0.4,
                        },
                    },
                },
                highlightIndex: null,
                fetchingInterval: null,
                theme: 'light',
            }
        },
        methods: {
            startFetching() {
                if (!this.fetchingInterval) {
                    this.fetchData();
                    this.fetchingInterval = setInterval(this.fetchData, 1000);
                }
            },
            stopFetching() {
                clearInterval(this.fetchingInterval);
                this.fetchingInterval = null;
            },
            async fetchData() {
                try {
                    const data = await fetchData();
                    const curData = JSON.parse(JSON.stringify(this.dataProps.datasets[0].data));
                    curData.push(data.value);
                    this.tableData.push(data);
                    this.dataProps.labels.push(data.time);
                    this.dataProps.datasets[0].data = curData;
                } catch (error) {
                    console.error('Ошибка при получении данных:', error);
                }
            },
            onRowHover(index) {
                this.highlightIndex = index;
            },
            toggleTheme(darkMode) {
                this.theme = darkMode ? 'dark' : 'light';
            }
        },
        beforeUnmount() {
            if (this.fetchingInterval) {
                clearInterval(this.fetchingInterval);
            }
        }
    }
</script>

<style scoped>

    .light {
        background-color: white;
        color: black;
    }

    .dark {
        background-color: #2a2a2a;
        color: white;
        height: 100vh;
    }

    h1 {
        text-align: center;
        font-size: 28px;
        margin: 20px 15px;
    }

</style>
