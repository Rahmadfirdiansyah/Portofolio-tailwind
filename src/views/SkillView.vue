<template>
  <section id="skill">
    <div class="container mx-auto">
      <div class="px-4">
        <p class="font-poppins font-semibold text-merah text-2xl">SKILL</p>
      </div>
      <div class="px-4 py-3 space-y-4">
        <div class="flex gap-10">
          <div class=" w-28 ">
            <h1 class="font-poppins font-semibold">FrontEnd</h1>
          </div>
          <progress
            class="progress progress-error w-screen my-auto"
            value="50"
            max="100"
          ></progress>
        </div>
        <div class="flex gap-10">
          <div class=" w-28 ">
            <h1 class="font-poppins font-semibold">Backend</h1>
          </div>
          <progress
            class="progress progress-error w-screen my-auto"
            value="40"
            max="100"
          ></progress>
        </div>
        <div class="flex gap-10">
          <div class=" w-28 ">
            <h1 class="font-poppins font-semibold">Design</h1>
          </div>
          <progress
            class="progress progress-error w-screen my-auto"
            value="60"
            max="100"
          ></progress>
        </div>
      </div>
    </div>
  </section>
</template>
