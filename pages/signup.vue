<template>
  <!-- Signup page using tailwind -->
  <div class="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 sm:px-6 lg:px-8">
    <div class="w-full max-w-md px-4 py-8 bg-white border-2 border-gray-300 rounded-lg shadow-md sm:px-10">
      <div class="mt-4 text-center">
        <h2 class="text-3xl font-extrabold text-gray-900">
          Sign up for an account
        </h2>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 3a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm3.293 1.293a1 1 0 011.414 0L12 8.586l5.293-5.293a1 1 0 111.414 1.414l-5.293 5.293 5.293 5.293a1 1 0 01-1.414 1.414L12 11.414l-5.293 5.293a1 1 0 01-1.414-1.414L10.586 10 5.293 4.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Sign up
          </button>
        </div>
      </form>
    </div>
  </div>
</template>