<template>
  <br>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <div class="w-1/5 bg-gray-200">
  <ul class="p-4">
    <li class="mb-4">
      <a href="#" class="block text-gray-600 hover:text-black">Dashboard</a>
    </li>
    <li class="mb-4">
      <a href="#" class="block text-gray-600 hover:text-black">Carnival</a>
    </li>
    <li class="mb-4">
      <a href="#" class="block text-gray-600 hover:text-black">Analytics</a>
    </li>
    <!-- <li class="mb-4">
      <a href="#" class="block text-gray-600 hover:text-black">Revenue</a>
    </li> -->
    <li class="mb-8">
      <a href="#" class="block text-gray-600 hover:text-black">Support Tickets</a>
    </li>
  </ul>
  <!-- Move Logout to the bottom with more margin -->
  <ul class="p-4 mt-auto">
    <li class="mt-60">
      <a href="/login" class="block text-gray-600 hover:text-black">Logout</a>
    </li>
  </ul>
</div>

    <!-- Content -->
    <div class="flex-1 bg-gray-100 p-12">
      <div class="grid grid-cols-3 gap-8">
        <!-- Card 1 -->
        <div class="border border-gray-200 bg-white shadow-lg rounded-lg p-6">
          <div class="flex items-center justify-center h-16 w-16 bg-gradient-to-tr from-gray-700 to-gray-400 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <p class="text-right text-sm font-light mb-1">Pageviews</p>
          <h4 class="text-2xl font-semibold tracking-tighter xl:text-2xl mb-2">14,000</h4>
          <p class="text-xs font-light"><span class="text-green-600 font-bold">+22% </span>vs last month</p>
        </div>

        <!-- Card 2 -->
        <div class="border border-gray-200 bg-white shadow-lg rounded-lg p-6">
          <div class="flex items-center justify-center h-16 w-16 bg-gradient-to-tr from-blue-700 to-blue-500 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <p class="text-right text-sm font-light mb-1">Users</p>
          <h4 class="text-2xl font-semibold tracking-tighter xl:text-2xl mb-2">2,300</h4>
          <p class="text-xs font-light"><span class="text-green-600 font-bold">+3% </span>vs last month</p>
        </div>

        <!-- Card 3 -->
        <div class="border border-gray-200 bg-white shadow-lg rounded-lg p-6">
          <div class="flex items-center justify-center h-16 w-16 bg-gradient-to-tr from-emerald-700 to-emerald-500 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p class="text-right text-sm font-light mb-1">Sales</p>
          <h4 class="text-2xl font-semibold tracking-tighter xl:text-2xl mb-2">$5,360</h4>
          <p class="text-xs font-light"><span class="text-red-600 font-bold">-3% </span>vs last month</p>
        </div>
      </div>
    </div>
  </div>
</template>