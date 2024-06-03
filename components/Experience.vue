<template>
  <section id="experience" class="py-12 px-4 md:py-16 lg:py-32 md:px-6 lg:px-20">
    <div class="container mx-auto">
      <div class="space-y-4 text-center">
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Experience</h2>
        <p class="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          I've had the privilege of working with some amazing companies and teams, where I've honed my skills
          and contributed to the success of various projects.
        </p>
      </div>
      <div class="mt-8 space-y-8">
        <div class="grid gap-4 md:grid-cols-2 md:gap-8">
          <UIExperienceCard position="Product Owner" company-name="Engeselt Softwares" period="June 2023 - Present">
            <img src="~/assets/img/engeselt-softwares.jpg" alt="Engeselt Softwares" class="rounded-md w-[48px] h-[48px]" />
            <template v-slot:text>
              As a Product Owner, my activities involve defining requirements, prioritizing the backlog, facilitating communication, validating functionalities, guiding the team, iterating with feedback, analyzing metrics, and adapting the product roadmap.
            </template>
          </UIExperienceCard>
          <UIExperienceCard position="Software Developer" company-name="Engeselt Softwares" period="August 2022 - June 2023">
            <img src="~/assets/img/engeselt-softwares.jpg" alt="Engeselt Softwares" class="rounded-md w-[48px] h-[48px]" />
            <template v-slot:text>
              Development and maintenance of applications written in Python using the Django framework. Assisting in the development of new features for the Company's ERP.
            </template>
          </UIExperienceCard>
          <UIExperienceCard position="Intern, Software Developer" company-name="Hospital Napoleão Laureano" period="June 2021 - August 2022">
            <img src="~/assets/img/hnl-logo.jpg" alt="Hospital Napoleão Laureano" class="rounded-md w-[48px] h-[48px]" />
            <template v-slot:text>
              Development and maintenance of applications that assist in decision-making for the hospital team and management.
            </template>
          </UIExperienceCard>
          <UIExperienceCard position="Intern, Software Developer" company-name="IFPB" period="May 2018 - October 2018">
            <img src="~/assets/img/ifpb.png" alt="IFPB" class="rounded-md w-[48px] h-[48px]" />
            <template v-slot:text>
              Development and maintenance of applications that assist in decision-making for the hospital team and management.
            </template>
          </UIExperienceCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>
