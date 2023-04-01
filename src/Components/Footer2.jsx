import React from "react";

export default function Footer2() {
  return (
    <footer class="bg-neutral-200 text-center text-white dark:bg-neutral-600 dark:text-neutral-200">
      <div class="container p-6">
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div class="mb-6 lg:mb-0">
            <img
              src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
              class="w-full rounded-md shadow-lg"
            />
          </div>
          <div class="mb-6 lg:mb-0">
            <img
              src="https://tecdn.b-cdn.net/img/new/fluid/city/111.webp"
              class="w-full rounded-md shadow-lg"
            />
          </div>
          <div class="mb-6 lg:mb-0">
            <img
              src="https://tecdn.b-cdn.net/img/new/fluid/city/112.webp"
              class="w-full rounded-md shadow-lg"
            />
          </div>
          <div class="mb-6 lg:mb-0">
            <img
              src="https://tecdn.b-cdn.net/img/new/fluid/city/114.webp"
              class="w-full rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>

      <div class="bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
        © 2023 Copyright:
        <a class="dark:text-neutral-400" href="https://tailwind-elements.com/">
          Tailwind Elements
        </a>
      </div>
    </footer>
  );
}
