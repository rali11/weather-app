<template>
  <ul class="search-list">
    <li 
      v-for="(item, index) in listData"
      :key="index"
      @click="eventClick($event.target, item)"
      class="search-list__item"
    >
      {{ item.name }}, {{ item.state }}, {{ item.country }}
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
        default:() => {},
        type:Object,
      },
      loading:{
        default:true,
        type:Boolean,
      }
    },
    data(){
      return {
        elementClicked:null,
      }
    },
    watch:{
      listData(){
        this.elementClicked?.classList.remove('search-list--clicked'); 
      },
      loading(newVal){
        newVal 
        ?(this.elementClicked.classList.add('search-list--loading') )
        :(this.elementClicked.classList.remove('search-list--loading'));        
      }
    },
    methods:{
      eventClick(element, item){
        this.elementClicked?.classList.remove('search-list--clicked');
        this.elementClicked = element;
        this.elementClicked.classList.add('search-list--clicked');
        this.$emit('change', item);
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
  .search-list--clicked {
    border-style: solid;
    border-width: 1px;
    border-color: #E7E7EB;
  }
  .search-list__item:not(.search-list--loading):hover::after, 
  .search-list--clicked:not(.search-list--loading)::after {
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
  .search-list--loading::after {
    content: "\e863";
    font-family: "Material Icons";
    display: flex;
    align-items: center;
    right: 1rem;
    top:0;
    position: absolute;
    font-size: 1.5rem;
    height: 100%;
    color:#616475;
    animation: lds-dual-ring .8s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>