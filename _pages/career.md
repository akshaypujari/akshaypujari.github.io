---
layout: page
title: Career
permalink: /career/
---

{% assign industry = site.data.career.industry %}
{% assign education = site.data.career.education %}

<section class="pt-32 pb-16 px-8 md:px-16 bg-white">
  <h2 class="text-3xl font-semibold mb-12 text-center">Career Journey</h2>

  <!-- Industry Experience -->
  <h3 class="text-xl font-bold text-gray-700 mb-6">Industry Experience</h3>
  <div class="space-y-16">
    {% for job in industry %}
      <div class="grid md:grid-cols-6 gap-6 bg-gray-50 p-8 rounded-xl shadow-lg animate-fadeIn">
        <div class="md:col-span-1 flex justify-center md:justify-start">
          <div class="logo-box">
            <img src="{{ '/assets/logos/' | append: job.logo | relative_url }}" alt="{{ job.company }} Logo" class="object-contain w-full h-full">
          </div>
        </div>
        <div class="md:col-span-4 space-y-2">
          <p class="text-lg font-semibold text-gray-800">{{ job.company }}</p>
          <p class="text-sm italic text-gray-600">{{ job.title }}</p>
          <ul class="list-disc list-inside space-y-1 text-sm text-gray-700">
            {% for point in job.points %}
              <li>{{ point }}</li>
            {% endfor %}
          </ul>
        </div>
        <div class="md:col-span-1 text-sm text-gray-500 text-right md:text-left">{{ job.years }}</div>
      </div>
    {% endfor %}
  </div>

  <!-- Education & Research -->
  <h3 class="text-xl font-bold text-gray-700 mt-20 mb-6">Education & Research</h3>
  <div class="space-y-16">
    {% for edu in education %}
      <div class="grid md:grid-cols-6 gap-6 bg-white p-8 rounded-xl shadow-lg animate-fadeIn">
        <div class="md:col-span-1 flex justify-center md:justify-start">
          <div class="logo-box">
            <img src="{{ '/assets/logos/' | append: edu.logo | relative_url }}" alt="{{ edu.org }} Logo" class="object-contain w-full h-full">
          </div>
        </div>
        <div class="md:col-span-4 space-y-2">
          <p class="text-lg font-semibold text-gray-800">{{ edu.org }}</p>
          <p class="text-sm italic text-gray-600">{{ edu.title }}</p>
          <ul class="list-disc list-inside space-y-1 text-sm text-gray-700">
            {% for point in edu.points %}
              <li>{{ point }}</li>
            {% endfor %}
          </ul>
        </div>
        <div class="md:col-span-1 text-sm text-gray-500 text-right md:text-left">{{ edu.years }}</div>
      </div>
    {% endfor %}
  </div>
</section>
