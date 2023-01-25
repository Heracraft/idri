<script>
  import {onMount} from "svelte"

  import Avatar from "$lib/avatar.svelte";
  import Ratings from "$lib/ratings.svelte";

  let sort="Top reviews"
  let collapse,resize

  onMount(()=>{
    resize=()=>{
            if(collapse.style.display!="flex"){
                collapse.style.display="flex"
            }
            else{
                collapse.style.display="none"
            }
        }
  })
</script>

<div class="flex flex-col justify-center items-center prose-base ">
  <div class="spacer"></div>
  <div class="flex w-full justify-between items-center">
    <h3 class="dark:text-white">Customer Reviews</h3>
    <div class="flex"> 
      <Avatar config={{}}/>
      <div class="relative rounded text-base w-32 ml-3">
        <span class="flex font-semibold items-center outline-neutral-800 outline outline-1 dark:outline dark:bg-neutral-700 p-2 w-full rounded" on:click={()=>resize()}>
          {sort}
          <svg xmlns="http://www.w3.org/2000/svg" class="fill-current" height="24" width="24"><path d="m12 15.375-6-6 1.4-1.4 4.6 4.6 4.6-4.6 1.4 1.4Z"/></svg>
        </span>
        <div class="flex-col hidden absolute w-full mr-2" bind:this={collapse}>
          <span class="p-2 hover:bg-neutral-300 dark:hover:bg-neutral-700 w-full my-1 rounded" on:click={function(){
            sort=this.textContent
            resize()
          }}>
            Top reviews
          </span>
          <span class="p-2 hover:bg-neutral-300 dark:hover:bg-neutral-700 w-full my-1 rounded" on:click={function(){
            sort=this.textContent
            resize()
          }}>Newest</span>
        </div>
      </div>
    </div>
  </div>
  <div class="flex w-full px-5 py-2 my-5">
    <div class="w-full flex flex-col shadow bg-white dark:bg-neutral-700 mx-2 rounded-xl border-solid border-[1px] border-neutral-600 h-48">
      <textarea cols="30" rows="10" value="" class="m-1 outline-none p-3 placeholder:text-current border-b-[1px] border-neutral-600 flex-[9]" placeholder="Write a comment...." style="background: none;"/>
      <button class="button w-fit scale-75 flex-[1]">Post review</button>
    </div>
  </div>
  <div class="flex flex-col w-full">
    <div class="w-full p-2">
      <span class="flex items-center mb-2">
        <Avatar config={{src:"https://flowbite.com/docs/images/people/profile-picture-4.jpg"}}/>
        <p class="ml-2 !my-0">Eda</p>
      </span>
      <Ratings/>
      <p class="!mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam itaque deserunt aliquam et delectus est eaque cum deleniti, necessitatibus minus voluptatibus, sunt corrupti? Provident libero, tempora praesentium illum ipsam magni.</p>
      <div class="flex flex-start">
        <button class="button flex items-center scale-90">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" class="fill-current mr-1"><path d="M18 21H7V8l7-7 1.25 1.25q.175.175.288.475.112.3.112.575v.35L14.55 8H21q.8 0 1.4.6.6.6.6 1.4v2q0 .175-.05.375t-.1.375l-3 7.05q-.225.5-.75.85T18 21Zm-9-2h9l3-7v-2h-9l1.35-5.5L9 8.85ZM9 8.85V19ZM7 8v2H4v9h3v2H2V8Z"/></svg>
          Help full
        </button>
        <button class="button !bg-neutral-600 flex items-center scale-90">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" class="fill-current mr-1"><path d="M12 17q.425 0 .713-.288Q13 16.425 13 16t-.287-.713Q12.425 15 12 15t-.712.287Q11 15.575 11 16t.288.712Q11.575 17 12 17Zm-1-4h2V7h-2Zm-2.75 8L3 15.75v-7.5L8.25 3h7.5L21 8.25v7.5L15.75 21Zm.85-2h5.8l4.1-4.1V9.1L14.9 5H9.1L5 9.1v5.8Zm2.9-7Z"/></svg>
          Report
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  :global(.badge){
    display:none
  }
</style>
