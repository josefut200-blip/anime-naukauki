window.CATALOGO = {
  "123": {
    "nome": "Black Clover Dublado",
    "ano": 2017,
    "tags": [
      "Ação",
      "Demônios",
      "Fantasia",
      "Magia",
      "Shounen"
    ],
    "capa": "https://m.media-amazon.com/images/I/91dyTOTuCjL._AC_UF1000,1000_QL80_.jpg",
    "banner": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsaP6fSJfXngDKCPkXjbCEkfeChE8SL8-QNsUz0NHAG2989I4I6trmOXkv&s=10",
    "sinopse": "Assistir Black Clover Dublado,  Num mundo onde magia é tudo, Asta e Yuno são abandonados em uma igreja no mesmo dia. Enquanto Yuno possui poderes mágicos excepcionais, Asta é a única pessoa do mundo todo desprovida desse dom. Aos quinze anos, ambos recebem grimórios – livros mágicos que amplificam os poderes do detentor. Asta recebe um raro grimório de anti-magia, capaz de negar e repelir os feitiços do oponente. Dois opostos que nutrem uma rivalidade amigável, Yuno e Asta estão prontos para encarar os mais difíceis desafios para conquistar seu sonho em comum: tornar-se o Rei dos Feiticeiros. Desistir não é opção!",
    "episodios": [
      {
        "numero": 1,
        "tipo": "iframe",
        "url": "https://player.vimeo.com/video/650514380?h=ffa88cffd9"
      },
      {
        "numero": 2,
        "tipo": "iframe",
        "url": "https://player.vimeo.com/video/650888893?h=4917c020af"
      },
      {
        "numero": 3,
        "tipo": "mp4",
        "url": "https://rr1---sn-3xiauxaxjvh-pb0e.googlevideo.com/videoplayback?expire=1795830239&ei=X8EJa6jtH-iokNQP69aqgQE&ip=168.121.251.132&id=f4d1343bf8c85c25&itag=18&source=blogger&requiressl=yes&xpc=Egho7Zf3LnoBAQ==&cps=153&met=1795801439,&mh=cB&mm=31&mn=sn-3xiauxaxjvh-pb0e&ms=au&mv=m&mvi=1&pl=25&rms=au,au&susc=bl&svpuc=1&eaua=KylxTqAsYQM&mime=video/mp4&vprv=1&rqh=1&dur=1444.211&lmt=1534473586325335&mt=1795801149&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,susc,svpuc,eaua,mime,vprv,rqh,dur,lmt&sig=AE0s2JYwRAIgL-nIamX7-6lHBxLOvhHiyx4tsirY0KULyOZhedYd7ZgCIHbRzCYvOPI-938sxLq62EntoUFPSVY7VElE0v3-CEo-&lsparams=cps,met,mh,mm,mn,ms,mv,mvi,pl,rms&lsig=APaTxxMwRgIhAO6O4vMZefjRVW9yvI15T0-lu9TbJkGHD7qu9-zqezKQAiEAtuNwm3CQI-QI7liD-UucW2n4Hhoqh2K045N9u7OUc1g=&cpn=e2z2XhfwuQnSzzoH&c=WEB_EMBEDDED_PLAYER&cver=1.20261122.05.00"
      }
    ]
  }
};

window.VIDEO_LIBRARY = window.VIDEO_LIBRARY || {};
Object.entries(window.CATALOGO).forEach(([animeId, anime]) => {
  window.VIDEO_LIBRARY[animeId] = window.VIDEO_LIBRARY[animeId] || {};
  (anime.episodios || []).forEach((episode) => {
    window.VIDEO_LIBRARY[animeId][episode.numero] = { type: episode.tipo, src: episode.url };
  });
});

