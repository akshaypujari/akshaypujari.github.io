---
layout: page
title: Career
permalink: /career/
---

{% assign industry = site.data.career.industry %}
{% assign education = site.data.career.education %}

<section class="...">
  <h2>Career Journey</h2>

  <h3>Industry Experience</h3>
  <div class="space-y-16">
    {% for job in industry %}
      <div class="grid md:grid-cols-6 gap-6 bg-gray-50 p-8 rounded-xl shadow-lg">
        <div class="md:col-span-1 flex justify-center md:justify-start">
          <img src="{{ '/assets/logos/' | append: job.logo | relative_url }}" class="object-contain max-h-12">
        </div>
        <div class="md:col-span-4 space-y-2">
          <p class="text-lg font-semibold text-gray-800">{{ job.company }}</p>
          <p class="text-sm italic text-gray-600">{{ job.title }}</p>
          <ul class="list-disc list-inside space-y-1 text-sm">
            {% for point in job.points %}
              <li>{{ point }}</li>
            {% endfor %}
          </ul>
        </div>
        <div class="md:col-span-1 text-sm text-gray-500">{{ job.years }}</div>
      </div>
    {% endfor %}
  </div>

  <h3>Education & Research</h3>
  <div class="space-y-16">
    {% for edu in education %}
      <!-- similar block -->
    {% endfor %}
  </div>
</section>
