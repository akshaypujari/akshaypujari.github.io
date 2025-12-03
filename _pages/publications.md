---
layout: default
title: Publications
permalink: /publications/
---

<section class="pt-32 pb-16 px-8 md:px-16 bg-white">
  <h1 class="text-4xl font-bold mb-6">Publications</h1>

 <!-- Profile ID Cards -->
<div class="grid sm:grid-cols-3 gap-6 my-12 text-sm">
  <!-- ORCiD -->
  <a href="https://orcid.org/0000-0002-7499-5122" target="_blank" rel="noopener"
     class="group bg-white p-5 rounded-2xl border border-gray-200 hover:border-blue-500 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center space-x-4">
    <div class="p-4 bg-green-50 rounded-full group-hover:bg-green-100 flex items-center justify-center">
      <img src="{{ '/assets/logos/orcid.svg' | relative_url }}" alt="ORCiD" class="w-8 h-8">
    </div>
    <div>
      <p class="text-gray-900 font-semibold">ORCiD</p>
      <p class="text-gray-500 text-xs">Researcher ID Profile</p>
    </div>
  </a>

  <!-- Google Scholar -->
  <a href="https://scholar.google.com/citations?user=oEKx5dUAAAAJ&hl" target="_blank" rel="noopener"
     class="group bg-white p-5 rounded-2xl border border-gray-200 hover:border-blue-500 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center space-x-4">
    <div class="p-4 bg-blue-50 rounded-full group-hover:bg-blue-100 flex items-center justify-center">
      <img src="{{ '/assets/logos/google-scholar-logo.svg' | relative_url }}" alt="Google Scholar" class="w-8 h-8">
    </div>
    <div>
      <p class="text-gray-900 font-semibold">Google Scholar</p>
      <p class="text-gray-500 text-xs">Citations & Metrics</p>
    </div>
  </a>

  <!-- PubMed -->
  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Akshay+Pujari" target="_blank" rel="noopener"
     class="group bg-white p-5 rounded-2xl border border-gray-200 hover:border-blue-500 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center space-x-4">
    <div class="p-4 bg-indigo-50 rounded-full group-hover:bg-indigo-100 flex items-center justify-center">
      <img src="{{ '/assets/logos/pubmed-logo.svg' | relative_url }}" alt="PubMed" class="w-8 h-8">
    </div>
    <div>
      <p class="text-gray-900 font-semibold">PubMed</p>
      <p class="text-gray-500 text-xs">Peer-reviewed Works</p>
    </div>
  </a>
</div>

  <!-- Publications List -->
  <div class="space-y-10">
    {% assign sorted_pubs = site.publications | sort: 'year' | reverse %}
    {% for pub in sorted_pubs %}
      <article class="border-l-4 border-blue-600 pl-6">
        <!-- Title -->
        <h2 class="text-xl font-semibold leading-snug">
          {{ pub.title }}
        </h2>
        <!-- Authors -->
        <p class="mt-1 text-gray-500">
          {{ pub.authors | replace: 'Akshay Pujari', '<strong class="underline">Akshay Pujari</strong>' }}.
        </p>
        <!-- Journal / Year / DOI -->
        <p class="mt-1 text-gray-700">
          <em>{{ pub.journal }}</em>, {{ pub.year }}.
          {% if pub.doi %}
            <a
              href="{{ pub.doi }}"
              class="ml-2 text-blue-600 hover:underline"
              target="_blank"
              rel="noopener"
            >
              <strong>DOI</strong>
            </a>
          {% endif %}
        </p>
      </article>
    {% endfor %}
  </div>
</section>