var posts=["2026/01/10/这是一篇新博文/","2026/01/09/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };