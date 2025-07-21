---
layout: default
permalink: /
title: Akshay Pujari — Portfolio
description: Experienced data scientist and software engineer in biotech, building AI-driven tools to unify biology, chemistry and computation.
---

<!-- <section id="about" class="py-24 px-6 md:px-16 bg-gradient-to-br from-white via-gray-50 to-white scroll-mt-24">
  <div class="max-w-5xl mx-auto">
    <h2 class="text-5xl font-extrabold text-center text-primary mb-16 tracking-tight">
      About Me
    </h2>

    <div class="relative">
      <p class="text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-12">
        Computational scientist with expertise in developing advanced data processing pipelines, algorithms, visualizations, and software tools to support diverse research teams in biotech. Proficient in integrating and analyzing diverse data and technologies, including multi-omics, NGS, imaging, chemoinformatics, alongside in-silico, in-vitro, and in-vivo experiments to drive data and literature-driven research.
      </p>

      <ul class="space-y-10 max-w-3xl mx-auto">
        <li class="flex items-start">
          <span class="mt-2 w-2 h-2 bg-gray-500 rounded-full flex-shrink-0"></span>
          <div class="ml-3 text-gray-800 text-lg leading-relaxed">
            Data Scientist II / Software Engineer II at Rubedo Life Sciences primarily working on developing ALEMBIC, an AI-driven discovery and analysis platform based on a synergy between sophisticated computational algorithms, biology and chemistry. Previously, Research Associate II at DiCE Therapeutics.
          </div>
        </li>
        <li class="flex items-start">
          <span class="mt-2 w-2 h-2 bg-gray-500 rounded-full flex-shrink-0"></span>
          <div class="ml-3 text-gray-800 text-lg leading-relaxed">
            Graduated from the University of Massachusetts, Amherst. Primary research in the Vascular Biology and Biofluids Laboratory focused on understanding the lymphatic system, integrating in-vivo, ex-vivo experimentation and deep computational analysis. Educational background encompasses coursework in engineering, biology, and computer science.
          </div>
        </li>
        <li class="flex items-start">
          <span class="mt-2 w-2 h-2 bg-gray-500 rounded-full flex-shrink-0"></span>
          <div class="ml-3 text-gray-800 text-lg leading-relaxed">
            Passionate about unification of disciplines to solve new problems relevant in understanding and improving human life.
          </div>
        </li>
      </ul>
    </div>
  </div>
</section> -->

<section id="about" class="py-24 px-6 md:px-16 bg-gradient-to-br from-white via-gray-50 to-white scroll-mt-24">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-5xl font-extrabold text-center text-primary mb-16 tracking-tight" data-aos="fade-down">
      About Me
    </h2>

    <p class="text-2xl text-gray-800 leading-relaxed text-center max-w-4xl mx-auto mb-20" data-aos="fade-up" data-aos-delay="100">
      Computational scientist with expertise in developing advanced data processing pipelines, algorithms, visualizations, and software tools to support diverse research teams in biotech. Proficient in integrating and analyzing diverse data and technologies, including multi-omics, NGS, imaging, chemoinformatics, alongside in-silico, in-vitro, and in-vivo experiments to drive data and literature-driven research.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
      <!-- Card 1: Professional Roles and Current Focus -->
      <div class="bg-white shadow-md rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all"
           data-aos="fade-up" data-aos-delay="200">
        <h3 class="text-xl font-semibold text-primary mb-4 flex items-center">
          <i class="fas fa-microscope mr-2 text-primary"></i> Professional Roles & Focus
        </h3>
        <ul class="list-disc pl-5 text-gray-800 text-base leading-relaxed space-y-3">
          <li>
            Data Scientist II / Software Engineer II at Rubedo Life Sciences primarily working on developing ALEMBIC, an AI-driven discovery and analysis platform based on a synergy between sophisticated computational algorithms, biology and chemistry.
          </li>
          <li>
            Previously, Research Associate II at DiCE Therapeutics.
          </li>
          <li>
            Current focus includes building reproducible, scalable tools that help unify biology, chemistry, and computation across research pipelines.
          </li>
        </ul>
      </div>

      <!-- Card 2: Academic and Research Background -->
      <div class="bg-white shadow-md rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all"
           data-aos="fade-up" data-aos-delay="300">
        <h3 class="text-xl font-semibold text-primary mb-4 flex items-center">
          <i class="fas fa-graduation-cap mr-2 text-primary"></i> Academic & Research
        </h3>
        <p class="text-gray-800 text-base leading-relaxed">
          Graduated from the University of Massachusetts, Amherst. Primary research in the Vascular Biology and Biofluids Laboratory focused on understanding the lymphatic system, integrating in-vivo, ex-vivo experimentation and deep computational analysis. Educational background encompasses coursework in engineering, biology, and computer science.
        </p>
      </div>

      <!-- Card 3: Core Values -->
      <div class="bg-white shadow-md rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all"
           data-aos="fade-up" data-aos-delay="400">
        <h3 class="text-xl font-semibold text-primary mb-4 flex items-center">
          <i class="fas fa-compass mr-2 text-primary"></i> Core Values
        </h3>
        <p class="text-gray-800 text-base leading-relaxed">
          Passionate about unification of disciplines to solve new problems relevant in understanding and improving human life.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="py-8 bg-white text-center text-gray-700">
  <p class="text-lg md:text-xl font-medium">
    📍 Based in the <strong>San Francisco Bay Area</strong> · 🕒 Local time: <span id="local-time" class="font-semibold">Loading...</span>
  </p>

  <script>
    function updateTime() {
      const options = {
        timeZone: 'America/Los_Angeles',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      };
      const now = new Date().toLocaleTimeString('en-US', options);
      document.getElementById('local-time').textContent = now;
    }
    updateTime();
    setInterval(updateTime, 60000);
  </script>
</section>
