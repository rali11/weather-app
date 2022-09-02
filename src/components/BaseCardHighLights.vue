<template>
  <article class="card">
    <p>
      Tue, 9 Jun
    </p>
    <img 
      src="../assets/img/LightCloud.png" 
      alt=""
    >
    <div class="temp">
      <p>
        16°C
      </p>
      <p>
        11°C
      </p>
    </div>
  </article>
</template>

<script>
export default {

}
</script>

<style>
  .card {
    background-color: #1E213A;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: #E7E7EB;
    padding: 18px 22px;
    text-align: center;
    width:120px;
    font-size: 1rem;
    line-height: 19px;
  }
  img {
    width: 66.51px;
    height: 62px;
    margin-bottom: 31px;
    margin-top:9px;
  }
  p {
    margin: 0;
  }
  .temp {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }  
  .temp > p:nth-child(2){
    color:#A09FB1;
  }
</style>