<template>
    <div class="canvas">
        <Line ref="lineChart" :data="chartData" :options="chartOptions" />
    </div>
</template>

<script>
    import {
        Chart as ChartJS,
        CategoryScale,
        LinearScale,
        LineElement,
        PointElement,
        Title,
        Tooltip,
        Legend
    } from 'chart.js'
    import { Line } from 'vue-chartjs'

    ChartJS.register(
        CategoryScale,
        LinearScale,
        LineElement,
        PointElement,
        Title,
        Tooltip,
        Legend
    );

    export default {
        name: 'LineChart',
        props: {
            dataProps: {
                type: Object,
                required: true
            },
            dataOptions: {
                type: Object,
            },
            highlightIndex: {
                type: Number,
            }
        },
        components: { Line },

        methods: {
            drawVerticalLine() {
                if (this.highlightIndex !== null) {
                    const chartInstance = this.$refs.lineChart.chart;
                    const meta = chartInstance.getDatasetMeta(0);
                    const point = meta.data[this.highlightIndex];

                    chartInstance.clear();
                    chartInstance.draw();

                    if (point) {
                        const ctx = chartInstance.ctx;
                        const { top, bottom } = chartInstance.chartArea;

                        ctx.save();
                        ctx.beginPath();
                        ctx.moveTo(point.x, top);
                        ctx.lineTo(point.x, bottom);
                        ctx.lineWidth = 3;
                        ctx.strokeStyle = 'rgba(255, 99, 132, 0.8)';
                        ctx.stroke();
                        ctx.restore();
                    }
                }
            },
        },
        computed: {
            chartData() { return this.dataProps },
            chartOptions() { return this.dataOptions }
        },
        watch: {
            dataProps:{
                handler(newData) {
                    const chartInstance = this.$refs.lineChart.chart;
                    chartInstance.data = newData;
                    chartInstance.update('none');
                    this.drawVerticalLine();
                },
                deep: true,
            },
            highlightIndex() {
                this.drawVerticalLine();
            }

        },
    }
</script>

<style scoped>
    .canvas {
        max-height: 50vh;
        position: relative;
        display: flex;
        justify-content: center;
    }
</style>
