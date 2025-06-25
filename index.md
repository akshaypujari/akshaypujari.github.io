---
layout: home
permalink: /
---

<section class="relative min-h-screen flex items-center justify-center text-white pt-24">
  <div class="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800"></div>
  <div class="relative text-center px-6 z-10 animate-fadeIn">
    <h1 class="text-4xl md:text-6xl font-bold mb-4">Akshay Pujari</h1>
    <p class="text-lg md:text-xl max-w-2xl mx-auto">
      Data Scientist ∙ Software Engineer ∙ Bioinformatician ∙ Creative Technologist
    </p>
  </div>
</section>

<section class="py-16 px-8 md:px-16 bg-white text-center">
  <h2 class="text-3xl font-semibold mb-8">About Me</h2>
  <div class="max-w-3xl mx-auto text-lg space-y-6 text-left md:text-center">
    <p>
      Computational scientist with expertise in developing advanced data processing pipelines, algorithms, visualizations, and software tools to support diverse research teams in biotech. Proficient in integrating and analyzing diverse data and technologies, including multi-omics, NGS, imaging, chemoinformatics, alongside in-silico, in-vitro, and in-vivo experiments to drive data and literature-driven research.
    </p>
    <p>
      – Data Scientist II / Software Engineer II at Rubedo Life Sciences primarily working on developing ALEMBIC, an AI-driven discovery and analysis platform based on a synergy between sophisticated computational algorithms, biology and chemistry. Previously, Research Associate II at DiCE Therapeutics.
    </p>
    <p>
      – Graduated from the University of Massachusetts, Amherst. Primary research in the Vascular Biology and Biofluids Laboratory focused on understanding the lymphatic system, integrating in-vivo, ex-vivo experimentation and deep computational analysis. Educational background encompasses coursework in engineering, biology, and computer science.
    </p>
    <p>
      – Passionate about unification of disciplines to solve new problems relevant in understanding and improving human life.
    </p>
  </div>
</section>

<section class="py-16 px-8 md:px-16 bg-gray-50 text-center">
  <h2 class="text-2xl font-semibold mb-6 text-gray-800">Location & Time</h2>

  <!-- Map -->
  <div class="mb-8">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0194081824963!2d-122.41941528468145!3d37.77492977975938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b3d59b3ff%3A0x57c1e7c676e2f91!2sSan%20Francisco%20Bay%20Area!5e0!3m2!1sen!2sus!4v1682609095615!5m2!1sen!2sus" 
      width="100%" 
      height="300" 
      style="border:0; border-radius: 12px;" 
      allowfullscreen="" 
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>

  <!-- Timezone -->
  <div id="local-time" class="text-xl font-medium text-gray-700">
    Local time: <span id="time-display">Loading...</span>
  </div>

  <script>
    function updateTime() {
      const options = {
        timeZone: 'America/Los_Angeles',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      };
      const now = new Date().toLocaleTimeString('en-US', options);
      document.getElementById('time-display').textContent = now;
    }
    updateTime();
    setInterval(updateTime, 60000); // update every 60 seconds
  </script>
</section>