<template>
  <div class="hidden w-64 border-r border-gray-700 bg-gray-900 text-white lg:block">
    <div class="flex flex-col w-64 h-screen fixed">
      <div class="flex items-center justify-center border-b py-5 border-gray-700">
        <img src="~/assets/img/logo-white.svg" alt="Antonio Yves Logo" width="200px"/>
      </div>
      <div class="flex flex-1 flex-col justify-between overflow-auto py-6 px-3">
        <nav>
          <ul class="space-y-2">
            <li>
              <a class="flex items-center space-x-2 rounded-md px-3 py-2 hover:bg-gray-800" href="#home" rel="ugc">
                <IconsHome class="w-[24px] h-[24px]" />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a class="flex items-center space-x-2 rounded-md px-3 py-2 hover:bg-gray-800" href="#technologies" rel="ugc">
                <IconsTerminal2 class="w-[24px] h-[24px]" />
                <span>Technologies</span>
              </a>
            </li>
            <li>
              <a class="flex items-center space-x-2 rounded-md px-3 py-2 hover:bg-gray-800" href="#experience" rel="ugc">
                <IconsBuildingEstate class="w-[24px] h-[24px]" />
                <span>Experience</span>
              </a>
            </li>
<!--            <li>-->
<!--              <a class="flex items-center space-x-2 rounded-md px-3 py-2 hover:bg-gray-800" href="#projects" rel="ugc">-->
<!--                <IconsSourceCode class="w-[24px] h-[24px]" />-->
<!--                <span>Projects</span>-->
<!--              </a>-->
<!--            </li>-->
<!--            <li>-->
<!--              <a class="flex items-center space-x-2 rounded-md px-3 py-2 hover:bg-gray-800" href="#contact" rel="ugc">-->
<!--                <IconsMail class="w-[24px] h-[24px]" />-->
<!--                <span>Contact</span>-->
<!--              </a>-->
<!--            </li>-->
          </ul>
        </nav>
        <div class="flex flex-col px-3">
          <span class="text-sm text-gray-500 py-2">Useful Links</span>
          <a class="flex items-center space-x-2 hover:text-gray-400" href="pdf/Resume_Antonio_Yves.pdf" target="_blank">
            <span>Access CV</span> <IconsExternalLink class="w-[16px] h-[16px]" />
          </a>
          <div class="flex space-x-2 py-4">
            <a href="https://github.com/antonio-yves" class="hover:text-gray-400" target="_blank">
              <IconsBrandGithub class="w-[20px] h-[20px]" />
            </a>
            <a href="https://linkedin.com/in/antonio-yves" class="hover:text-gray-400" target="_blank">
              <IconsBrandLinkedIn class="w-[20px] h-[20px]" />
            </a>
            <a href="https://instagram.com/yvessousa" class="hover:text-gray-400" target="_blank">
              <IconsBrandInstagram class="w-[20px] h-[20px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
