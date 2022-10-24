<template>
  <ul class="search-list">
    <li 
      v-for="(item, index) in listData"
      :key="index"
      @click="$emit('change',item.id.toString(10))"
      class="search-list__item"
    >
      {{ item.city }}
    </li>    
  </ul>
</template>

<script>
  export default {
    model:{
      prop:'value',
      event:'change'
    },
    props:{
      listData:{
        default:function(){
          return [];
        },
        type:Array,
      },
      value:{
        default:'',
        type:String,
      }
    }
  }
</script>

<style scoped>
  .search-list {
    list-style: none;   
    color: #E7E7EB; 
  }
  .search-list__item {      
    padding: 1.4rem;
    margin: 2rem 0;
    position: relative;
  }
  .search-list__item:hover {  
    border-style: solid;
    border-width: 1px;
    border-color: #616475;
  }
  .search-list__item:hover::after {
    content: '\e5cc';
    font-family: "Material Icons";
    font-size: 1.5rem;
    color: #616475; 
    position: absolute;
    right: 1rem;
    top:0;
    height: 100%;
    display: flex;
    align-items: center;
  }
</style>