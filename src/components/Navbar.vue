<template>
  <header>
    <nav class=" z-20 w-full absolute">
      <Container>
        <div
          class="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative"
        >
          <input
            aria-hidden="true"
            type="checkbox"
            name="toggle_nav"
            id="toggle_nav"
            class="hidden peer"
          />
          <div
            class="relative z-20 w-full flex justify-between lg:w-max md:px-0"
          >
            <div class="relative flex items-center lg:hidden max-h-10">
              <label
                role="button"
                for="toggle_nav"
                aria-label="humburger"
                id="hamburger"
                class="relative p-6 -mr-6"
              >
                <div
                  aria-hidden="true"
                  id="line"
                  class="m-auto h-0.5 w-5 rounded bg-hitam dark:bg-gray-300 transition duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  id="line2"
                  class="m-auto mt-2 h-0.5 w-5 rounded bg-hitam dark:bg-gray-300 transition duration-300"
                ></div>
              </label>
            </div>
          </div>
          <div
            aria-hidden="true"
            class="fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-sm origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden dark:bg-gray-900/70"
          ></div>
          <div
            class="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1 absolute top-full left-0 transition-all duration-300 scale-95 origin-top lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none dark:shadow-none dark:bg-gray-800 dark:border-gray-700"
          >
            <div
              class="text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0"
            >
              <ul
                class="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0"
              >
                <li>
                  <a
                    href="#education"
                    class="block md:px-4 transition hover:text-merah font-poppins font-semibold"
                  >
                    <span>Pendidikan</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#skill"
                    class="block md:px-4 transition hover:text-merah font-poppins font-semibold"
                  >
                    <span>Skill</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#tools"
                    class="block md:px-4 transition hover:text-merah font-poppins font-semibold"
                  >
                    <span>Tools</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#documentation"
                    class="block md:px-4 md:mr-0 transition hover:text-merah font-poppins font-semibold"
                  >
                    <span>Dokumentasi</span>
                  </a>
                </li>
              </ul>
            </div>

            <div class="mt-12 lg:mt-0 flex justify-center items-center lg:mr-4">
              <input
                type="checkbox"
                value="synthwave"
                class="toggle bg-yellow-300 hover:bg-yellow-400 border-birumuda [--tglbg:theme(colors.birumuda)] checked:bg-blue-300 checked:hover:bg-blue-400 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2"
              />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  </header>
</template>

<style>
#toggle_nav:checked ~ div #hamburger #line {
  @apply rotate-45 translate-y-1.5;
}

#toggle_nav:checked ~ div #hamburger #line2 {
  @apply -rotate-45 -translate-y-1;
}
</style>
