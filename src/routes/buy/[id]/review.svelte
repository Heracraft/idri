<script>
  import {onMount} from "svelte"
  
  import Avatar from "$lib/avatar.svelte"
  import Ratings from "$lib/ratings.svelte"

  export let reviewData
</script>

<div class="w-full p-2">
      <span class="flex items-center mb-2">
        <Avatar config={{src:"https://flowbite.com/docs/images/people/profile-picture-4.jpg"}}/>
        <p class="ml-2 !my-0">{reviewData.user.username}</p>
      </span>
      <Ratings/>
      <p class="!mt-2">{reviewData.content}</p>
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


