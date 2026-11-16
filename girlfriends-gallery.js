(() => {
  const people = [
    ['Blackbury Coltz', 'blackbury-coltz.png'],
    ['Soul paw wolves', 'soul-paw-wolves.jpg'],
    ['Friendzy34', 'friendzy34.png'],
    ['Royalgayness', 'royalgayness.png']
  ];
  const style = document.createElement('style');
  style.textContent = `.girlfriend-grid .girlfriend-card{padding:14px 14px 22px;overflow:hidden}
  .girlfriend-card img{width:100%;height:290px;object-fit:cover;border-radius:13px;display:block;background:#100b20}
  .girlfriend-card h3{margin:15px 8px 0}
  @media(max-width:720px){.girlfriend-card img{height:auto;aspect-ratio:1.4}}`;
  document.head.append(style);
  function updateStory() {
    if (location.hash !== '#story') return;
    const heading = [...document.querySelectorAll('#main h2')].find(h => h.textContent.includes('Four Special People'));
    if (!heading) return;
    heading.innerHTML = 'My Four Girlfriends <em>♡</em>';
    const section = heading.closest('section');
    if (!section || section.dataset.girlfriendsUpdated) return;
    section.dataset.girlfriendsUpdated = 'true';
    const description = section.querySelector('.section-lead');
    if (description) description.textContent = 'Four special people in my life, each represented by their own artwork.';
    const grid = section.querySelector('.grid');
    if (!grid) return;
    grid.classList.add('girlfriend-grid');
    grid.replaceChildren();
    for (const [name, filename] of people) {
      const card = document.createElement('article');
      card.className = 'card girlfriend-card';
      const img = document.createElement('img');
      img.src = '/assets/girlfriends/' + filename;
      img.alt = 'Artwork for ' + name;
      img.loading = 'lazy';
      const title = document.createElement('h3');
      title.textContent = name;
      card.append(img,title);
      grid.append(card);
    }
  }
  window.addEventListener('hashchange', updateStory);
  updateStory();
})();
