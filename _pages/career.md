---
layout: page
title: Career
permalink: /career/
---

{% assign industry = site.data.career.industry %}
{% assign education = site.data.career.education %}

<section class="pt-32 pb-20 px-8 md:px-16 bg-white">
  <h2 class="text-3xl font-semibold mb-12 text-center">Career Journey</h2>

  <!-- Industry Experience -->
  <div class="space-y-12">
    {% for job in industry %}
      <div class="flex flex-col md:flex-row md:items-start gap-6 border-b pb-6">
        <div class="flex-shrink-0 w-16 h-16">
          <img src="{{ '/assets/logos/' | append: job.logo | relative_url }}" alt="{{ job.company }}" class="object-contain h-full w-full">
        </div>
        <div class="flex-1">
          <div class="flex flex-col md:flex-row md:justify-between md:items-center">
            <h3 class="text-lg font-bold text-gray-800">{{ job.company }}</h3>
            <p class="text-sm text-gray-500 md:text-right">{{ job.years }}</p>
          </div>
          <p class="text-sm italic text-gray-600">{{ job.title }}</p>
          <ul class="list-disc list-inside mt-2 text-sm text-gray-700">
            {% for point in job.points %}
              <li>{{ point }}</li>
            {% endfor %}
          </ul>
        </div>
      </div>
    {% endfor %}
  </div>

  <h3 class="text-xl font-bold text-gray-700 mt-20 mb-6">Education & Research</h3>

  <!-- Education -->
  <div class="space-y-12">
    {% for edu in education %}
      <div class="flex flex-col md:flex-row md:items-start gap-6 border-b pb-6">
        <div class="flex-shrink-0 w-16 h-16">
          <img src="{{ '/assets/logos/' | append: edu.logo | relative_url }}" alt="{{ edu.org }}" class="object-contain h-full w-full">
        </div>
        <div class="flex-1">
          <div class="flex flex-col md:flex-row md:justify-between md:items-center">
            <h3 class="text-lg font-bold text-gray-800">{{ edu.org }}</h3>
            <p class="text-sm text-gray-500 md:text-right">{{ edu.years }}</p>
          </div>
          <p class="text-sm italic text-gray-600">{{ edu.title }}</p>
          <ul class="list-disc list-inside mt-2 text-sm text-gray-700">
            {% for point in edu.points %}
              <li>{{ point }}</li>
            {% endfor %}
          </ul>
        </div>
      </div>
    {% endfor %}
  </div>
</section>
