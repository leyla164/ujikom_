<template>
  <header class="mb-2 px-4 shadow">
  <div class="relative mx-auto flex max-w-screen-lg flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
    <a href="https://flowbite.com/" class="flex items-center">
      <img src="../assets/img/gambar.jpg" class="h-8 mr-3" alt="Flowbite Logo">
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sarvnd</span>
  </a>
    <input class="peer hidden" type="checkbox" id="navbar-open" />
    <label class="absolute right-0 mt-1 cursor-pointer text-xl sm:hidden" for="navbar-open">
      <span class="sr-only">Toggle Navigation</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="currentColor" d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" /></svg>
    </label>
    <nav aria-label="Header Navigation" class="peer-checked:block hidden pl-2 py-6 sm:block sm:py-0">
      <ul class="flex flex-col gap-y-4 sm:flex-row sm:gap-x-8">
        <li class=""><a class="text-gray-600 hover:text-blue-600" href="/">Branda</a></li>
        <li class=""><a class="text-gray-600 hover:text-blue-600" href="/produk">Produk</a></li>
        <!-- <li class=""><a class="text-gray-600 hover:text-blue-600" href="#">Support</a></li> -->
      </ul>
    </nav>
  </div>
</header>

</template>
    
    <script>
    import { mapActions, mapGetters } from 'vuex';
    
    export default {
      computed: {
            ...mapGetters('auth', ['isAuthenticated']),
        },
        methods: {
            ...mapActions('auth', ['logout']),
        },
       
    };
    </script>