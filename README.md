# KageStream

Catálogo estático de animes para GitHub Pages. As informações de anime são consultadas na Jikan API v4; vídeos autorizados são cadastrados manualmente no painel.

## Publicar um anime ou episódio

1. Abra `admin.html` e entre com a senha definida no topo de `app.js`.
2. Cadastre ou edite o anime e seus episódios. Os dados ficam no `localStorage` deste navegador.
3. Use o botão de exportação para baixar o catálogo (`catalogo.js`, quando aplicável).
4. Substitua o arquivo exportado no repositório `anime-naukauki`.
5. Faça commit e aguarde a propagação do GitHub Pages.

Exportar o arquivo não publica automaticamente. O site público só muda depois que o arquivo é commitado no repositório.

## Analytics Umami

O front-end envia o evento `play_episode` ao Umami quando o usuário inicia um episódio pelos controles principais. As propriedades enviadas são:

- `animeId`: número do ID do anime no MyAnimeList;
- `episode`: número do episódio;
- `type`: atualmente `play`.

O painel também mantém uma cópia local limitada dos eventos em `localStorage` (`kage-analytics`) para métricas demonstrativas do admin. Usuários globais e dados agregados dependem do Umami ou de um backend.

## Limitação da senha do admin

A senha do painel é uma barreira client-side contra acesso casual. Como o site é estático, a senha fica no JavaScript enviado ao navegador e não deve ser tratada como autenticação real. Para proteger dados de verdade, será necessário um backend ou serviço de autenticação.

## Migração futura para dados compartilhados

Para permitir que vídeos, favoritos, usuários e permissões sejam compartilhados entre dispositivos sem commit manual, o projeto pode migrar para um backend gratuito ou com camada gratuita, como Firebase (Authentication + Firestore/Storage) ou Supabase (Auth + Postgres + Storage). O plano recomendado é: criar autenticação de administrador, mover o catálogo para uma tabela/coleção, validar URLs no servidor, trocar o `localStorage` por consultas autenticadas e manter o GitHub Pages apenas como front-end.

## Supabase: catálogo compartilhado

O projeto agora contém a base da integração com Supabase. Para ativá-la:

1. Crie um projeto Supabase e execute o arquivo `supabase.sql` no SQL Editor.
2. Crie o usuário administrador em Authentication → Users e desative o cadastro público.
3. Preencha `supabase-config.js` com a Project URL e a chave anon/publishable pública. Nunca use a `service_role` key no front-end.
4. Publique os arquivos no GitHub Pages. O login do admin e os novos cadastros passarão a usar o banco compartilhado.

Com o Supabase configurado, visitantes leem `series` e `episodios` imediatamente e o admin grava novos animes e episódios sem exportar `catalogo.js`. O `catalogo.js` continua como fallback estático durante a migração.

