(function initKageDatabase() {
  const config = window.KAGE_CONFIG || {};
  const configured = Boolean(window.supabase && config.url && config.anonKey && !config.url.includes('SEU-PROJETO') && !config.anonKey.includes('SUA_CHAVE'));
  const client = configured ? window.supabase.createClient(config.url, config.anonKey) : null;

  function paraEmbed(url) {
    const value = String(url || '').trim();
    const yt = value.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/i);
    if (yt) return `https://www.youtube-nocookie.com/embed/${yt[1]}?rel=0&modestbranding=1`;
    const vm = value.match(/vimeo\.com\/(?:video\/)?(\d+)/i);
    if (vm) return `https://player.vimeo.com/video/${vm[1]}`;
    return null;
  }

  async function listarCatalogo() {
    if (!client) return [];
    const { data, error } = await client.from('series').select('*, episodios(*)').order('criado_em', { ascending: false });
    if (error) throw error;
    return (data || []).map(series => ({ ...series, episodios: (series.episodios || []).sort((a, b) => a.numero - b.numero) }));
  }

  async function entrar(email, senha) {
    if (!client) throw new Error('Supabase ainda não foi configurado.');
    const { error } = await client.auth.signInWithPassword({ email, password: senha });
    if (error) throw error;
  }

  async function sair() { if (client) await client.auth.signOut(); }
  async function estaLogado() { if (!client) return false; const { data } = await client.auth.getSession(); return Boolean(data.session); }
  async function salvarSerie(payload) { const { data, error } = await client.from('series').insert(payload).select().single(); if (error) throw error; return data; }
  async function salvarEpisodio(payload) { if (!paraEmbed(payload.video_url)) throw new Error('Use um link do YouTube ou Vimeo.'); const { data, error } = await client.from('episodios').insert(payload).select().single(); if (error) throw error; return data; }
  async function removerSerie(id) { const { error } = await client.from('series').delete().eq('id', id); if (error) throw error; }
  async function removerEpisodio(id) { const { error } = await client.from('episodios').delete().eq('id', id); if (error) throw error; }

  window.kageDB = { client, configured, paraEmbed, listarCatalogo, entrar, sair, estaLogado, salvarSerie, salvarEpisodio, removerSerie, removerEpisodio };
})();

