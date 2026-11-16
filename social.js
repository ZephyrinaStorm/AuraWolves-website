(() => {
  const twitch = 'https://www.twitch.tv/loveaurawolves/';
  const youtube = 'https://www.youtube.com/@LoveAuraWolves';
  const socialPage = () => `<section class="page-head"><span class="pill">✦ STAY CONNECTED</span><h1>Follow Aura Wolf <span class="gradient">Online</span></h1><p>Catch livestreams on Twitch and videos on YouTube. Join the community and follow along!</p></section>
  <section class="section"><div class="grid two">
  <article class="card"><div class="icon">🎮</div><h2>Twitch</h2><p>LoveAuraWolves</p><p style="margin-top:18px">Watch livestreams, hang out, and chat with the community.</p><p style="margin-top:22px"><a class="btn" href="${twitch}" target="_blank" rel="noopener noreferrer">Watch on Twitch ↗</a></p></article>
  <article class="card"><div class="icon">▶</div><h2>YouTube</h2><p>@LoveAuraWolves</p><p style="margin-top:18px">Find videos, gaming content and channel updates.</p><p style="margin-top:22px"><a class="btn" href="${youtube}" target="_blank" rel="noopener noreferrer">Visit YouTube ↗</a></p></article>
  </div></section><section class="section"><div class="card feature"><img src="/assets/logo.png" alt="Aura Wolf logo"><div><h2>Be part of our pack</h2><p class="section-lead">You can also meet the community on Discord.</p><a class="btn alt" href="#discord">Join our Discord →</a></div></div></section>`;
  pages.social = socialPage;
  const baseHome = pages.home;
  pages.home = () => baseHome() + `<section class="section"><span class="pill">✦ FOLLOW ALONG</span><h2>Find Aura Wolf <em>on Social Media</em></h2><p class="section-lead">Livestreams, videos and more from LoveAuraWolves.</p><div class="actions"><a class="btn" href="${twitch}" target="_blank" rel="noopener noreferrer">🎮 Follow on Twitch ↗</a><a class="btn alt" href="${youtube}" target="_blank" rel="noopener noreferrer">▶ Subscribe on YouTube ↗</a><a class="btn alt" href="#social">All social links →</a></div></section>`;
  // The original script already called render(). Re-render to show the extended homepage.
  render();
})();