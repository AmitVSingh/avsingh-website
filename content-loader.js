const escapeHtml = value => String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));

fetch('content.json').then(response => {
  if (!response.ok) throw new Error('Could not load content.json');
  return response.json();
}).then(content => {
  const p = content.profile;
  document.title = `${p.name} — ${p.role}`;
  document.getElementById('role').textContent = p.role;
  document.getElementById('headline').innerHTML = `${escapeHtml(p.headlineBefore)} <em>${escapeHtml(p.headlineHighlight)}</em> ${escapeHtml(p.headlineAfter)}`;
  document.getElementById('summary').textContent = p.summary;
  document.querySelectorAll('[data-email]').forEach(link => link.href = `mailto:${p.email}`);
  document.getElementById('focus-areas').innerHTML = content.focusAreas.map(item => `<div><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.detail)}</span></div>`).join('');
  document.getElementById('work-title').textContent = content.selectedWork.title;
  document.getElementById('work-intro').textContent = content.selectedWork.intro;
  document.getElementById('work-cards').innerHTML = content.selectedWork.items.map(item => `<article class="card"><span class="num">${escapeHtml(item.label)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.description)}</p><div class="tags">${item.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}</div></article>`).join('');
  document.getElementById('journey-title').textContent = content.journey.title;
  document.getElementById('journey-intro').textContent = content.journey.intro;
  document.getElementById('timeline').innerHTML = content.journey.stages.map(stage => `<div class="phase"><time>${escapeHtml(stage.label)}</time><h3>${escapeHtml(stage.title)}</h3><p>${escapeHtml(stage.description)}</p></div>`).join('');
  document.getElementById('principle').textContent = `“${content.journey.principle}”`;
  document.getElementById('principle-detail').textContent = content.journey.principleDetail;
  document.getElementById('research-title').textContent = content.research.title;
  document.getElementById('research-paragraphs').innerHTML = content.research.paragraphs.map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join('');
  document.getElementById('thesis-link').href = content.research.thesisUrl;
  document.getElementById('cap-grid').querySelectorAll('.cap').forEach((element, index) => {
    const item = content.capabilities[index];
    if (item) { element.querySelector('h3').textContent = item.title; element.querySelector('p').textContent = item.description; }
  });
  document.getElementById('contact-title').textContent = content.contact;
  document.getElementById('copyright').textContent = `© ${content.copyrightYear} ${p.name}`;
  document.getElementById('github-link').href = p.github;
  document.getElementById('linkedin-link').href = p.linkedin;
}).catch(error => console.error(error));
