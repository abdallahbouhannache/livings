<template>
  <figure @click="()=>{ 
    
      console.log(this)
    
    }" :class="['image is-64x64', clss]">
    <img class="is-rounded stickPic"  :src="lSticker" />
    <span class="stInfos">
    <p>{{price}}</p>
    <p>{{discount}}</p>
    </span>
  </figure>

  <!-- require(`../assets/img/${sticker}`) -->
</template>

<script>
export default {
  name:"StickerInfo",
  data:()=>{
return {
  // stickerPicUrl:"../assets/img/sticker.jpg"
  price:0,
  discount:0
}
  },
  props: {
    lSticker: { type: String, default:require("../assets/img/sticker.jpg") },
    clss: { type: String, default: "sticker_RL" },
    stickdata:{type:Object, default () {
        return {
          price: 0,
          discount: 0
        }
      }}
  },
   created() {
     console.log('created')
    //  this.stickerPicUrl=require(this.lSticker) 
    // this.discount=this.stickdata["discount"]
    },
    mounted(){
    console.clear()
    this.price=this.stickdata.price
    this.discount=this.stickdata.discount
    },
  computed:{
  console: () => console,
  window: () => window,
  }
};
</script>

<style scoped>
.sticker_RL {
  position: relative;
  top: 0;
  left: calc(100% - 100px);
  z-index: 8;
}
.sticker_price {
    position: relative;
    top: calc(100% - 200px);
    z-index: 478;
    left: 74%;
}
.stickPic{
  z-index: -10;
}
.stickinfo{
  color:#fff;
  z-index: 5555;
  /* border:1px solid red; */
}
.stInfos>*{color:#fff}
</style>