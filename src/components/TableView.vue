<template>
  <a-table
    :columns="columns"
    :data-source="data"
    :expandRowByClick="true"
    @expand="zi"
  >
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'action'">
        <a>Delete</a>
      </template>
    </template>
    <template #expandedRowRender="{ record }">
      <!-- <p style="margin: 0">
        {{ record.name }}
      </p> -->
      <a-table
        :columns="columns"
        :data-source="data"
        :size="'small'"
        :expand-row-by-click="false"
        :expandRowByClick="true"
      />
      <!-- {{record}} -->

    </template>
  </a-table>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name', fixed: true },
  { title: 'Age', dataIndex: '', key: 'age' },
  { title: 'Address', dataIndex: '', key: 'address' },
  { title: 'Action', key: 'action' },
]

const data = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description:
      'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description:
      'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    description:
      'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
  },
]

export default defineComponent({
  setup() {
    const data2 = reactive({ value: null })
    const zi = (expanded, record) => {
      if (expanded) {
        data2.value = record
        console.log(record)
      } else {
        data2.value = []
      }
    }

    return {
      data,
      columns,
      data2,
      zi,
    }
  },
})
</script>

