---
layout: default
permalink: /
title: Akshay Pujari — Portfolio
description: Experienced data scientist and software engineer in biotech, building AI-driven tools to unify biology, chemistry and computation.
---

<section class="py-24 px-6 md:px-16 bg-gradient-to-br from-white via-gray-50 to-white">
  <div class="max-w-5xl mx-auto">
    <h2 class="text-5xl font-extrabold text-center text-gray-800 mb-16 tracking-tight">
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