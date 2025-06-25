---
layout: default
title: Publications
permalink: /publications/
---

<section class="pt-32 pb-16 px-8 md:px-16 bg-white">
  <h1 class="text-4xl font-bold mb-12">Publications</h1>
  <div class="space-y-10">
    {% for pub in site.publications %}
      <div class="border-l-4 border-blue-600 pl-6">
        <h2 class="text-xl font-semibold">{{ pub.title }}</h2>
        <p class="text-gray-700">{{ pub.authors }}. <em>{{ pub.journal }}</em>, {{ pub.year }}.
          {% if pub.doi %}
            <a href="{{ pub.doi }}" class="text-blue-600 hover:underline" target="_blank">DOI</a>
          {% endif %}
        </p>
      </div>
    {% endfor %}
  </div>
</section>