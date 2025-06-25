---
layout: default
title: Publications
permalink: /publications/
---

<section class="pt-32 pb-16 px-8 md:px-16 bg-white">
  <h1 class="text-4xl font-bold mb-6">Publications</h1>

  <!-- Profile Cards -->
  <div class="grid sm:grid-cols-3 gap-6 my-10 text-sm">
    <!-- ORCID -->
    <a href="https://orcid.org/0000-0002-7499-5122" target="_blank" rel="noopener" class="flex items-center gap-3 p-4 border rounded-lg hover:shadow-md transition">
      <img src="{{ '/assets/logos/orcid.svg' | relative_url }}" alt="ORCID" class="w-6 h-6">
      <div>
        <div class="font-semibold text-gray-800">ORCID</div>
      </div>
    </a>

    <!-- Google Scholar -->
    <a href="https://scholar.google.com/citations?user=oEKx5dUAAAAJ&hl" target="_blank" rel="noopener" class="flex items-center gap-3 p-4 border rounded-lg hover:shadow-md transition">
      <img src="{{ '/assets/logos/google-scholar-logo.png' | relative_url }}" alt="Google Scholar" class="w-6 h-6">
      <div>
        <div class="font-semibold text-gray-800">Google Scholar</div>
      </div>
    </a>

    <!-- PubMed -->
    <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Akshay+Pujari" target="_blank" rel="noopener" class="flex items-center gap-3 p-4 border rounded-lg hover:shadow-md transition">
      <img src="{{ '/assets/logos/pubmed-logo.png' | relative_url }}" alt="PubMed" class="w-6 h-6">
      <div>
        <div class="font-semibold text-gray-800">PubMed</div>
      </div>
    </a>
  </div>

  <!-- Publications List -->
  <div class="space-y-10">
    {% assign sorted_pubs = site.publications | sort: 'year' | reverse %}
    {% for pub in sorted_pubs %}
      <div class="border-l-4 border-blue-600 pl-6">
        <h2 class="text-xl font-semibold">{{ pub.title }}</h2>
        <p class="text-gray-700">
          {{ pub.authors }}.
          <em>{{ pub.journal }}</em>,
          {{ pub.year }}.
          {% if pub.doi %}
            <a href="{{ pub.doi }}" class="text-blue-600 hover:underline" target="_blank">DOI</a>
          {% endif %}
        </p>
      </div>
    {% endfor %}
  </div>
</section>