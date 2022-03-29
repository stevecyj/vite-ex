<script>
export default {
    name: 'HomeView',
    setup() {
        return {
            dataSource: [
                {
                    key: '1',
                    name: '胡彦斌',
                    age: 32,
                    address: '西湖区湖底公园1号',
                    quarter: 'Q1',
                    EPS2019: '2',
                },
                {
                    key: '2',
                    name: '胡彦祖',
                    age: 42,
                    address: '西湖区湖底公园1号',
                    quarter: 'Q2',
                    EPS2019: '2',
                },
            ],

            columns: [
                {
                    title: '季度',
                    dataIndex: 'quarter',
                    key: 'quarter',
                },
                {
                    title: '2019 EPS',
                    dataIndex: 'EPS2019',
                    key: 'EPS2019',
                },
                {
                    title: '2021 EPS',
                    dataIndex: 'address',
                    key: 'address',
                },
                {
                    title: '2022 EPS',
                    dataIndex: 'address',
                    key: 'address',
                },
            ],
        }
    },
}
</script>
<template>
  <div>Homehahahahahahah, jojojojo, hahahahah</div>
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <a-button type="primary">Primary Button</a-button>
  <a-button>Default Button</a-button>
  <a-button type="dashed">Dashed Button</a-button>
  <a-button type="text">Text Button</a-button>
  <a-button type="link">Link Button</a-button>
  <a-divider />
  <a-table
    :dataSource="dataSource"
    :columns="columns"
  />
</template>