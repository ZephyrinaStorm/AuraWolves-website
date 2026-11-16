/* Aura Wolf — SoulPaws Wolves story update. Load AFTER script.js and other page extensions. */
(() => {
  if (typeof pages === 'undefined' || typeof render !== 'function') return;
  const story = `
    <div class="banner-strip" role="img" aria-label="Aura Wolf neon community banner"></div>
    <section class="page-head"><span class="pill">♡ MY HEART, MY JOURNEY</span>
      <h1>My Story: A Journey of <span class="gradient">Love, Hope & Growth</span></h1>
      <p>Some chapters of life are difficult to put into words. This is my little corner of the world to share the love, the lessons, and the people who give my journey meaning.</p>
    </section>
    <section class="section"><span class="pill">FROM MY HEART</span><h2>Learning to Grow, One Day at a Time</h2>
      <div class="card"><p>My journey has never been about having a perfect story. It's about discovering who I am, finding the courage to keep moving forward, and learning that even the smallest moments of kindness can leave a lasting mark on a heart.</p>
      <p>There are days when life feels bright and full of possibilities, and days when the road ahead feels uncertain. Through it all, I want to hold on to what matters most: being true to myself, treating others with love, and appreciating those who bring warmth into my world.</p>
      <p>This page is a reflection of that journey — a place for gratitude, tenderness, hope, and the beautiful possibility of becoming a better version of myself.</p></div>
    </section>
    <section class="section"><span class="pill">♡ ONE SPECIAL PERSON</span><h2>SoulPaws Wolves <em>♡</em></h2>
      <div class="card soulpaws-feature"><img src="/assets/soulpaws-wolves-story.png" alt="Neon purple and pink wolf character artwork representing SoulPaws Wolves" loading="lazy" />
      <div><h3>My Only Girlfriend — SoulPaws Wolves</h3>
      <p>Some people hold a place in your heart that words can barely describe. SoulPaws Wolves is the one special girlfriend I want to celebrate here — with affection, appreciation, and all the warmth this little space can hold.</p>
      <p>Love can be found in the simplest things: a thoughtful word, a moment of understanding, a shared smile, or the comfort of knowing someone matters to you. Those moments deserve to be treasured.</p>
      <p>If there is one thing I want this page to express, it is how meaningful it can be to care deeply for someone. This is my heartfelt tribute to SoulPaws Wolves — a name that belongs in this chapter of my story.</p>
      <p class="soulpaws-signoff">With love, gratitude, and a heart full of hope. ♡</p></div></div>
    </section>
    <section class="section"><h2>Family, Friendship & The People Who Matter</h2>
      <div class="card"><p>My story is also shaped by the people who have offered encouragement, patience, and kindness along the way. Every kind word and every moment of support can make a difference, even when it seems small.</p>
      <p>I want to keep building a life and a community where people feel welcomed, appreciated, and free to be themselves. The love we share, the friendships we nurture, and the hope we carry forward are all part of what makes this journey worth telling.</p></div>
    </section>
    <section class="section"><div class="note">“My story is still being written, and I want its next chapters to be filled with kindness, courage, and love.” ♡</div></section>`;
  pages.story = () => story;
  const style = document.createElement('style');
  style.textContent = `.soulpaws-feature{display:grid;grid-template-columns:minmax(240px,0.9fr) minmax(0,1.1fr);align-items:center;gap:28px;padding:22px}.soulpaws-feature img{display:block;width:100%;max-width:470px;aspect-ratio:1/1;object-fit:cover;border-radius:22px;box-shadow:0 0 36px rgba(236,48,241,.23)}.soulpaws-feature p{margin:14px 0;line-height:1.85}.soulpaws-feature h3{font-size:1.5rem}.soulpaws-signoff{color:#f7a9f8;font-weight:700}@media(max-width:760px){.soulpaws-feature{grid-template-columns:1fr;padding:15px}.soulpaws-feature img{margin:auto}}`;
  document.head.appendChild(style);
  if ((location.hash || '#home').toLowerCase() === '#story') render();
})();
