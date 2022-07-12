---
title: 同一功能vue2和vue3代码对比
date: 2022-07-04 09:11:59
permalink: /pages/417f97/
categories:
  - 《Vue》笔记
  - vue2转vue3你需要知道的
tags:
  - 
---
## 功能点对比


## 功能展示
功能最好包含生命周期、子组件父组件通信 <br/>
<img src="/img/vue2-vue3_1.png" class="panda no-zoom" style="width: 50%;">
## vue2+ts实现
子组件 `todoItem`
```vue
<template>
  <div class='todo-item'>
    <div>{{index}}、{{item.name}}</div>
    <i class="icon icon-mianxing-jian-quxiao icon-self" @click="deleteItem"></i>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ItemType } from '../typings';
@Component({
  name: 'TodoItem'
})
export default class TodoItem extends Vue {
  @Prop({type: Object, default: () => ({})}) item!: ItemType;
  @Prop({type: Number, default: 1}) index!: number;

  deleteItem() {
    this.$emit('deleteItem');
  }
}
</script>
<style lang='less' scoped>
.todo-item{
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  font-size: 28px;
  border-radius: 8px;
  .icon-self{
    font-size: 30px;
    color: #ffffff;
  }
}
</style>

```
父组件 `todoList`
```vue
<template>
  <div class='todo-list'>
    <div class="title">TODO</div>
    <todo-item v-for="(item, index) in list" :key="index"
    :index="index + 1" :item="item" @deleteItem="deleteItem(index)"></todo-item>
    <div class="add-wrap">
      <input type="text" v-model="name" class="input-self" placeholder="请输入" />
      <div class="add-button" @click="addTodo">增加<i class="icon icon-mianxing-tianjia add-icon"></i></div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { ItemType } from './typings';
import TodoItem from './components/todoItem.vue';

@Component({
  name: 'TodoList',
  components: {
    TodoItem
  }
})
export default class TodoList extends Vue {
  list: ItemType[] = [];
  name: string = '';

  addTodo() {
    if (!this.name) return;
    this.list.push({
      name: this.name
    });
    this.name = '';
  }

  deleteItem(index: number) {
    this.list.splice(index, 1);
  }
}
</script>
<style lang='less' scoped>
.todo-list{
  box-sizing: border-box;
  min-height: 100vh;
  background: linear-gradient(#dfe3f3,#7691ec);
  padding: 24px 32px;
  .title{
    font-size: 32px;
    font-weight: bold;
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .add-wrap{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .input-self{
    border: none;
    width: 80%;
    height: 66px;
    border-radius: 8px;
    outline: none;
    font-size: 28px;
    padding: 0 8px;
    box-sizing: border-box;
  }
  .add-button{
    font-size: 28px;
    background-color: #1DB270;
    width: 120px;
    height: 66px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    margin-left: 16px;
    box-sizing: border-box;
    .add-icon{
      font-size: 28px;
      margin-left: 8px;
    }
  }
}
</style>
```

## vue3+ts实现
子组件 `todoItem`

```tsx
import { defineComponent } from 'vue';
import './index.less';

export default defineComponent({
  name: 'TodoList',
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: Number, 
      default: 1
    }
  },
  emits: ['deleteItem'],
  setup(props, {emit}) {
    const deleteItem = () => {
      emit('deleteItem');
    }

    return () => (
      <div class="todo-item">
        <div>{props.index}、{props.item.name}</div>
        <i class="icon icon-mianxing-jian-quxiao icon-self" onClick={deleteItem}></i>
      </div>
    );
  }
})
```

父组件 `todoList`
```vue
<template>
  <div class='todo-list'>
    <div class="title">TODO</div>
    <todo-item v-for="(item, index) in list" :key="index"
    :index="index + 1" :item="item" @deleteItem="deleteItem(index)"></todo-item>
    <div class="add-wrap">
      <input type="text" v-model="name" class="input-self" placeholder="请输入" />
      <div class="add-button" @click="addTodo">增加<i class="icon icon-mianxing-tianjia add-icon"></i></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import TodoItem from '../TodoItem';
import { ItemType } from '../types';

const list = ref<ItemType[]>([]);
const name = ref<string>('');

const addTodo = () => {
  if (!name.value) return;

  list.value.push({
    name: name.value
  });
  name.value = '';
}

const deleteItem = (index: number) => {
  list.value.splice(index, 1);
}

</script>
<style lang="less" scoped>
.todo-list{
  box-sizing: border-box;
  min-height: 100vh;
  background: linear-gradient(#dfe3f3,#7691ec);
  padding: 12px 16px;
  .title{
    font-size: 16px;
    font-weight: bold;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .add-wrap{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .input-self{
    border: none;
    width: 80%;
    height: 33px;
    border-radius: 4px;
    outline: none;
    font-size: 14px;
    padding: 0 4px;
    box-sizing: border-box;
  }
  .add-button{
    font-size: 14px;
    background-color: #1DB270;
    width: 60px;
    height: 33px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    margin-left: 8px;
    box-sizing: border-box;
    cursor: pointer;
    .add-icon{
      font-size: 14px;
      margin-left: 4px;
    }
  }
}
</style>
```