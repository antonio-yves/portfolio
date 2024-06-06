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
          <UIExperienceCard
              position="Product Owner"
              company-name="Engeselt Softwares"
              period="June 2023 - Present"
              image-path="engeselt-softwares.jpg">
            <template v-slot:text>
              As a Product Owner, my main role is to coordinate the development of the product, from defining requirements to validating functionalities. I prioritize the backlog, facilitate communication, guide the team, and iterate based on feedback. My goal is to ensure that we continuously deliver value to customers, adapting the roadmap as needed.
            </template>
          </UIExperienceCard>
          <UIExperienceCard
              position="Software Developer"
              company-name="Engeselt Softwares"
              period="August 2022 - June 2023"
              image-path="engeselt-softwares.jpg">
            <template v-slot:text>
              Responsible for developing and maintaining the features of the company's ERP system, using the Python programming language along with the Django and Django Rest Frameworks. I implement and manage Docker containers to ensure a consistent and isolated execution environment. Additionally, I utilize the Celery framework to orchestrate asynchronous tasks, ensuring that the system is highly efficient and scalable. My responsibilities range from designing and implementing new features to troubleshooting and optimizing system performance.
            </template>
          </UIExperienceCard>
          <UIExperienceCard
              position="Intern, Software Developer"
              company-name="Hospital Napoleão Laureano"
              period="June 2021 - August 2022"
              image-path="hnl-logo.jpg">
            <template v-slot:text>
              I developed several systems in a hospital environment, including a Kanban board using Flask and Oracle for tracking hospitalized patients, fed by the MV2000 system. I created a system to generate a list of APACs produced in the current month. I developed a corporate intranet with Django and MySQL, integrating authentication via Active Directory, to facilitate internal communication among employees. I built a DHCP machine management system using Django and Shell Script, allowing insertion, updating, and querying of devices on the hospital's network, as well as restarting altered services. Finally, I developed a customized reporting system with Flask, enabling export to Excel or on-screen viewing.
            </template>
          </UIExperienceCard>
          <UIExperienceCard
              position="Intern, Software Developer"
              company-name="IFPB"
              period="May 2018 - October 2018"
              image-path="ifpb.png">
            <template v-slot:text>
              Development of a web system for the faculty of the Federal Institute of Education of Paraíba, Cajazeiras campus, to request document printing in an online and efficient manner. This system was designed exclusively for faculty use, aiming to streamline the request process and improve the efficiency of meeting their needs.
            </template>
          </UIExperienceCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>
