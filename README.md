# Radar dos Achadinhos — Landing Page

Landing page responsiva criada em HTML, CSS e JavaScript puros, sem framework.

## Estrutura

- `index.html` — conteúdo e estrutura da página
- `css/style.css` — identidade visual e responsividade
- `js/config.js` — configuração do link de convite e ID do GA4
- `js/main.js` — botões de WhatsApp, aviso de configuração, ano automático, FAQ e evento de clique
- `whatsapp-ofertas.png` — visual do celular com exemplos ilustrativos de mensagens de ofertas

## Como configurar o WhatsApp

1. Abra `js/config.js`.
2. Cole o link de convite do seu canal/grupo no campo `whatsappInviteUrl`.
3. Salve o arquivo.
4. Teste todos os botões no celular e no desktop.

Exemplo:
```js
window.RADAR_CONFIG = {
  whatsappInviteUrl: "https://chat.whatsapp.com/SEU_CODIGO",
  ga4MeasurementId: ""
};
```

Use o link de convite correto e teste-o antes de publicar. O projeto não cria o grupo/canal automaticamente.

## Google Analytics 4

O arquivo registra o evento `click_whatsapp` se `gtag` estiver instalado na página. O ID em `ga4MeasurementId` é reservado na configuração, mas a instalação do snippet oficial do Google tag ainda precisa ser feita caso você queira usar GA4.

Para instalar:
1. Crie/acesse uma propriedade GA4.
2. Copie o snippet oficial do Google tag.
3. Adicione-o ao `<head>` do `index.html`.
4. Teste `click_whatsapp` no modo DebugView/Tempo real.

O clique no convite não confirma que a pessoa entrou no canal. Não trate esse evento como membro confirmado.

## Teste local

Abra `index.html` no navegador. Para testar de forma mais próxima da publicação, use a extensão Live Server no VS Code ou um servidor local.

## Antes de publicar

- Configure e teste o link do WhatsApp.
- Revise o nome e as informações de contato da marca.
- Adicione uma política de privacidade acessível, conforme os dados e ferramentas que utilizar.
- Confira os termos do programa de afiliados para os canais de divulgação que pretende usar.
- Confirme as afirmações sobre descontos, cupons e produtos; não há preços reais cadastrados nesta página.
- Substitua ou revise as categorias se a operação inicial for focada apenas em um nicho.
- Se usar GA4 ou pixels de publicidade, revise os requisitos aplicáveis de consentimento e privacidade.
