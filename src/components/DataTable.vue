<template>
    <div class="table-wrap">
        <table class="table">
            <thead class="table__head">
            <tr>
                <th class="table__head">Время</th>
                <th class="table__head">Значение</th>
            </tr>
            </thead>
            <tbody class="table__body">
            <tr class="table__row"
                v-for="(row, index) in rows" :key="index"
                @mouseover="hoverRow(index)">
                <td class="table__data">{{ row.time }}</td>
                <td class="table__data">{{ row.value }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        props: ['rows'],
        methods: {
            hoverRow(index) {
                this.$emit('rowHover', index);
            }
        }
    };
</script>

<style scoped>
    .table-wrap{
        max-height: 27vh;
        margin-right: 15px;
        margin-bottom: 15px;
        overflow-x: hidden;
        overflow-y: scroll;
    }
    .table {
        width: 100%;
        border-collapse: collapse;
    }

    .table__head {
        background-color: #f8f9fa;
        position: sticky;
        top: 0;
    }

    .dark .table__head{
        background-color: #0052A8;

    }

    .table__head,
    .table__data
    {
        padding: 8px;
        border: 1px solid #ddd;
        text-align: center;
    }

    .table__body .table__row:hover {
        background-color: #f1f1f1;
    }

    .dark .table__body .table__row {
        background-color: #3095e0;
    }

    .dark .table__body .table__row:hover {
        background-color: #F87979;
    }
</style>
