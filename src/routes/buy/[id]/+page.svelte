<script>
  import Reviews from './reviews.svelte';

  import {onMount} from "svelte"
  import anime from "../../../js/anime.es"

  // let coursel

  onMount(()=>{
    anime({
      targets:"#coursel>div",
      translateX:anime.stagger("-100%"),
      duration:500,
      endDelay:4500,
      easing:'linear',
      loop:true,
      delay:anime.stagger(5000)
    })
  })
  // $:{
  //   console.log({coursel});
  // }
</script>

<article class="prose md:prose-xl flex justify-center items-center h-full w-full max-w-fit lg:m-10 mt-5">
<section class="card m-4 w-full md:mx-10 lg:w-10/12 p-2 md:p-5 flex flex-col justify-evenly">
  <h3 class="text-current !mb-2 !my-2">Apple iMac 27”</h3>
  <h4 class="text-current !mb-2">$2999</h4>
    <div class="flex child:flex-shrink-0 overflow-x-hidden" id="coursel">
      <div class="flex dark:bg-neutral-500 bg-neutral-200 h-full w-full justify-center rounded-md">
          <img src="/imac-front-image.png" alt="" />
      </div>
      <div class="flex dark:bg-neutral-500 bg-neutral-200 h-full w-full justify-center rounded-md">
          <img src="/imac-side-image.png" alt="" />
      </div>
      <div class="flex dark:bg-neutral-500 bg-neutral-200 h-full w-full justify-center rounded-md">
          <img src="/imac-back-image.png" alt="" />
      </div>
      <div class="flex dark:bg-neutral-500 bg-neutral-200 h-full w-full justify-center rounded-md">
          <img src="/imac-back-image.png" alt="" />
      </div>
       
    </div>
    <!-- <div class="grid grid-cols-3 md:grid-cols-4 gap-4">
      <div class="dark:bg-neutral-500 bg-neutral-200 h-full w-full aspect-square rounded-md">
          <img src="/imac-front-image.png" alt="" />
      </div>
        <div class="dark:bg-neutral-500 bg-neutral-200 h-full w-full aspect-square rounded-md">
            <img src="/imac-side-image.png" alt="" />
        </div>
        <div class="dark:bg-neutral-500 bg-neutral-200 h-full w-full aspect-square rounded-md">
            <img src="/imac-back-image.png" alt="" />
        </div>
        <div class="dark:bg-neutral-500 bg-neutral-200 h-full w-full aspect-square rounded-md">
            <img src="/imac-back-image.png" alt="" />
        </div>
       
    </div> -->
    <div >
      <h4 class="text-current !mb-2">Details</h4>
      <p class="mb-2 text-neutral-500">Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US..</p>
    </div>
    <div class="mb-4">
      <h4 class="text-current !mt-0 !mb-2">Colors</h4>
      <div class="flex">
        <span class="w-5 p-1 h-5 rounded-full mx-2 bg-cyan-500 block"/>
        <span class="w-5 p-1 h-5 rounded-full mx-2 bg-amber-500 block"/>
        <span class="w-5 p-1 h-5 rounded-full mx-2 bg-zinc-500 block"/>
        <span class="w-5 p-1 h-5 rounded-full mx-2 bg-green-500 block"/>
      </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-4 text-base mb-3">
      <span class="dark:bg-neutral-700 bg-neutral-300 rounded-xl p-3 flex flex-col">
          <p class="font-semibold !my-0">Ships from</p>
          <p class="!my-1 text-neutral-400">Dar es salaam</p>
      </span>
      <span class="dark:bg-neutral-700 bg-neutral-300 rounded-xl p-3 flex flex-col">
          <p class="font-semibold !my-0">Product type</p>
          <p class="!my-1 text-neutral-400">Electronics/PC</p>
      </span>
      <span class="dark:bg-neutral-700 bg-neutral-300 rounded-xl p-3 flex flex-col">
          <p class="font-semibold !my-0">Product State</p>
          <span class="flex w-fit px-2 pr-4 my-1 rounded items-center bg-primary-800 text-white">
            <svg aria-hidden="true" class="w-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <p class="!m-0"><sub class="!static">New</sub></p>
          </span>
      </span>
      <span class="dark:bg-neutral-700 bg-neutral-300 rounded-xl p-3 flex flex-col">
          <p class="font-semibold !my-0">Shipping</p>
          <p class="!my-1 text-neutral-400 flex">
            <svg class="w-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
            National wide
          </p>
      </span>
      
      <span class="dark:bg-neutral-700 bg-neutral-300 rounded-xl p-3 flex flex-col">
          <p class="font-semibold !my-0">Dimensions (cm)</p>
          <p class="!my-1 text-neutral-400">105 x 15 x 23</p>
      </span>
      <span class="dark:bg-neutral-700 bg-neutral-300 rounded-xl p-3 flex flex-col">
          <p class="font-semibold !my-0">Item weight</p>
          <p class="!my-1 text-neutral-400">12kg</p>
      </span>
      
    </div>
    <div class="flex justify-end">
        <button class="button flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current mr-2"><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle><path d="M13 13h2v-2.99h2.99v-2H15V5.03h-2v2.98h-2.99v2H13V13z"></path><path d="M10 17h8a1 1 0 0 0 .93-.64L21.76 9h-2.14l-2.31 6h-6.64L6.18 4.23A2 2 0 0 0 4.33 3H2v2h2.33l4.75 11.38A1 1 0 0 0 10 17z"></path></svg>
          Add to cart
        </button>
    </div>
   <Reviews/>
  </section>
  
</article>
