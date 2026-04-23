const balanceMarkdown = String.raw`# The Last Sin - Documento Oficial de Balanceamento

Este documento e o guia oficial de leitura para a equipe de Game Design de The Last Sin. Ele resume, em linguagem de design, todos os valores atuais de balanceamento central do projeto e deve permanecer sempre sincronizado com o arquivo fonte de tuning do jogo.

## Player Upgrade Stats

| Atributo | Valor Atual | O que faz (Descrição) | Dica de Ajuste |
| --- | --- | --- | --- |
| Modificador de Dano | 1.0x | Multiplicador global do dano causado pelo player. | Se aumentar, cada golpe causa mais dano de forma geral. Se diminuir, toda a progressão ofensiva do jogador fica mais lenta. |
| Modificador de Velocidade de Ataque | 1.0x | Multiplicador global da velocidade de ataque do player. | Se aumentar, o player ataca com mais frequência. Se diminuir, o combate fica mais cadenciado e punitivo. |
| Velocidade de Movimento | 5 | Velocidade base de movimento do player. | Se aumentar, o jogador kiteia e reposiciona com mais facilidade. Se diminuir, a pressão da horda sobe bastante. |
| Regeneração de Vida | 0 por segundo | Quantidade de vida regenerada por segundo. | Se aumentar, a sobrevivência fora de combate melhora. Se diminuir ou zerar, o sustain precisa vir de outras fontes. |
| Armadura | 0 | Reducao plana de dano recebida pelo player. | Se aumentar, muitos acertos fracos passam a doer menos. Se diminuir, o jogador fica mais vulnerável a enxames. |
| Vida Máxima | 100 | Vida maxima base do player. | Se aumentar, o jogador aguenta mais erros e bursts. Se diminuir, cada acerto inimigo fica mais importante. |
| Área de Ataque | 1.0x | Multiplicador da area e alcance dos ataques. | Se aumentar, o cone do golpe cobre mais espaço. Se diminuir, o combate exige mais precisão de posicionamento. |
| Força de Knockback | 1.0x | Forca base de empurrao aplicada nos inimigos. | Se aumentar, o soco parece mais pesado e controla melhor a horda. Se diminuir, os inimigos encostam com mais frequência. |
| Chance Crítica | 0% | Chance percentual de acerto critico. | Se aumentar, o dano fica mais explosivo e menos previsível. Se diminuir, o output ofensivo fica mais estável. |
| Dano Crítico | 1.5x | Multiplicador aplicado quando o ataque crita. | Se aumentar, cada crítico vira um pico de dano mais impactante. Se diminuir, os críticos continuam úteis, mas menos decisivos. |

## Timing

| Atributo | Valor Atual | O que faz (Descrição) | Dica de Ajuste |
| --- | --- | --- | --- |
| Intervalo Base de Spawn de Inimigos | 1.25s | Intervalo base entre spawns de inimigos. | Se aumentar, a arena respira mais. Se diminuir, a pressão da horda cresce mais cedo. |
| Intervalo Base de Spawn de Baús | 20s | Intervalo base entre spawns de baus. | Se aumentar, os recursos especiais aparecem com menos frequência. Se diminuir, a run fica mais generosa em oportunidades de loot. |
| Intervalo Base entre Ataques | 1.35s | Tempo base entre ataques automaticos do player. | Se aumentar, o combate inicial fica mais lento e o soco parece mais pesado. Se diminuir, o personagem entra em ação com mais constância e o ritmo fica mais arcade. |

## Economy

| Atributo | Valor Atual | O que faz (Descrição) | Dica de Ajuste |
| --- | --- | --- | --- |
| XP por Gema | 10 | Quantidade de XP concedida por cada gema coletada. | Se aumentar, o leveling acelera bastante. Se diminuir, a progressão de nível fica mais demorada. |
| Fragmentos de Alma por Drop | 1 | Quantidade de Fragmentos de Alma concedida por drop. | Se aumentar, a meta-progressão avança mais rápido. Se diminuir, o progresso permanente exige mais runs. |

## Leveling Math

| Atributo | Valor Atual | O que faz (Descrição) | Dica de Ajuste |
| --- | --- | --- | --- |
| XP para chegar ao Nível 2 | 50 | Quantidade de XP necessaria para sair do nivel 1 e chegar ao nivel 2. | Se aumentar, o primeiro level up demora mais. Se diminuir, a run entrega recompensa mais cedo. |
| Crescimento do XP por Nível | 1.2x | Multiplicador aplicado ao XP necessario a cada novo nivel. | Se aumentar, os níveis altos ficam muito mais difíceis de alcançar. Se diminuir, a curva de progressão fica mais suave. |

## Combat Defaults

| Atributo | Valor Atual | O que faz (Descrição) | Dica de Ajuste |
| --- | --- | --- | --- |
| Vida Base do Inimigo | 3 HP | Vida base de cada inimigo antes do escalonamento infinito da run. | Se aumentar, a horda fica mais resistente desde o começo. Se diminuir, o jogador limpa grupos com mais facilidade. |
| Dano Base do Ataque | 1 | Dano base do ataque automatico antes dos multiplicadores. | Se aumentar, o combate inicial fica mais forte sem depender de upgrades. Se diminuir, a build precisa escalar mais para engrenar. |
| Alcance Base do Ataque | 1.75 | Alcance base do ataque corpo a corpo. | Se aumentar, o soco acerta de mais longe. Se diminuir, o jogador precisa se expor mais para bater. |
| Raio Base de Detecção de Alvos | 5 | Raio usado para procurar alvos antes do golpe. | Se aumentar, o auto-ataque encontra alvos de mais longe. Se diminuir, ele demora mais para “enxergar” algo relevante. |
| Abertura do Cone de Ataque | 75 graus | Abertura angular do cone de ataque. | Se aumentar, o golpe cobre mais largura. Se diminuir, o ataque fica mais focado e direcional. |
| Duração do Flash da Hitbox | 0.2s | Duracao do efeito visual temporario do golpe. | Se aumentar, o feedback visual fica mais claro, porém mais chamativo. Se diminuir, o efeito fica mais discreto. |
| Segmentos Visuais do Cone | 12 | Quantidade de segmentos usados para desenhar o cone visual. | Se aumentar, o cone fica mais suave visualmente. Se diminuir, ele fica mais simples e econômico. |

## Difficulty Scaling

| Atributo | Valor Atual | O que faz (Descrição) | Dica de Ajuste |
| --- | --- | --- | --- |
| Intervalo de Escalonamento da Horda | 60s | Intervalo em segundos entre cada aumento global de dificuldade da horda. | Se aumentar, a dificuldade demora mais para subir. Se diminuir, a run acelera sua pressão mais cedo. |
| Multiplicador de Vida por Escalonamento | 1.2x | Multiplicador aplicado na vida dos inimigos a cada novo nivel da horda. | Se aumentar, os inimigos escalam muito mais rápido. Se diminuir, a run fica menos agressiva no longo prazo. |
| Multiplicador de Ritmo de Spawn | 0.9x | Multiplicador aplicado no intervalo de spawn para acelerar a horda com o tempo. | Se diminuir mais, os spawns aceleram de forma mais agressiva. Se aproximar de 1.0x, a escalada de pressão fica mais controlada. |

## Enemy AI States

| Atributo | Valor Atual | O que faz (Descrição) | Dica de Ajuste |
| --- | --- | --- | --- |
| Tempo de Espera ao Nascer | 1.0s | Tempo em que o inimigo permanece parado antes de iniciar a perseguicao apos nascer. | Se aumentar, o jogador ganha uma janela maior para reagir ao spawn. Se diminuir, a pressão começa quase imediatamente. |
| Duração do Atordoamento por Knockback | 0.4s | Tempo em que o inimigo fica atordoado sem retomar a perseguicao apos sofrer repulsao. | Se aumentar, o controle de grupo do player fica mais forte. Se diminuir, os inimigos retomam a perseguição mais rápido. |

## Spawner Offsets

| Atributo | Valor Atual | O que faz (Descrição) | Dica de Ajuste |
| --- | --- | --- | --- |
| Margem Extra de Spawn de Inimigos | 2.5 | Margem extra alem da camera para spawn de inimigos. | Se aumentar, os inimigos surgem mais fora da tela. Se diminuir, eles podem aparecer mais perto da borda visível. |
| Distância Mínima de Spawn de Inimigos | 9 | Distancia minima para inimigos surgirem longe do player. | Se aumentar, o jogador ganha mais tempo de reação. Se diminuir, a horda entra em contato mais rápido. |
| Margem Extra de Spawn de Baús | 2.5 | Margem extra alem da camera para spawn de baus. | Se aumentar, os baús aparecem mais afastados da visão imediata. Se diminuir, podem surgir mais cedo no campo do jogador. |

## Pickup Behaviour

| Atributo | Valor Atual | O que faz (Descrição) | Dica de Ajuste |
| --- | --- | --- | --- |
| Raio de Coleta de Pickups | 3 | Distancia em que pickups comecam a ser atraidos pelo player. | Se aumentar, coletar recursos fica mais confortável. Se diminuir, o jogador precisa passar mais perto dos drops. |
| Velocidade de Movimento dos Pickups | 8 | Velocidade de movimento dos pickups enquanto sao atraidos. | Se aumentar, os itens “voam” mais rapidamente para o jogador. Se diminuir, a coleta fica mais lenta e visível. |

## Loot Table Weights

| Atributo | Valor Atual | O que faz (Descrição) | Dica de Ajuste |
| --- | --- | --- | --- |
| Peso de Gema de XP | 80 pontos de peso | Peso relativo usado para o bau sortear gemas de experiencia. | Se aumentar, baús tendem a premiar mais progressão de nível. Se diminuir, abre mais espaço para outros tipos de drop. |
| Peso de Fragmento de Alma | 15 pontos de peso | Peso relativo usado para o bau sortear Fragmentos de Alma. | Se aumentar, a meta-progressão aparece com mais frequência nas runs. Se diminuir, Fragmentos de Alma ficam mais raros. |
| Peso do Ímã de XP | 5 pontos de peso | Peso relativo usado para o bau sortear o pickup de ima de XP. | Se aumentar, a run ganha mais momentos de coleta em massa. Se diminuir, o ímã vira um evento mais raro e especial. |

## Magnet Settings

| Atributo | Valor Atual | O que faz (Descrição) | Dica de Ajuste |
| --- | --- | --- | --- |
| Velocidade do Puxão do Ímã | 15 | Velocidade aplicada nas gemas quando o item de ima ativa a perseguicao total. | Se aumentar, as gemas chegam quase instantaneamente ao jogador. Se diminuir, o efeito do ímã fica mais suave e visual. |

## Chest Rewards

| Atributo | Valor Atual | O que faz (Descrição) | Dica de Ajuste |
| --- | --- | --- | --- |
| Chance de Fragmento de Alma no Baú | 30% | Chance do bau dropar Fragmento de Alma em vez de XP. | Se aumentar, os baús passam a favorecer mais a meta-progressão. Se diminuir, tendem a entregar mais recompensa imediata de run. |
| Quantidade de Gemas Geradas pelo Baú | 3 | Quantidade de gemas de XP geradas quando o bau cai em XP. | Se aumentar, quebrar um baú fica mais recompensador. Se diminuir, o baú entrega uma explosão menor de XP. |
| Raio de Dispersão Inicial do Drop | 0.6 | Raio de dispersao inicial dos drops gerados pelo bau. | Se aumentar, os itens se espalham mais na cena. Se diminuir, eles caem mais concentrados. |
| Raio de Prioridade para Mirar em Baús | 3 | Distancia em que baus passam a ter prioridade sobre inimigos na mira automatica. | Se aumentar, o player vai focar baús com mais frequência. Se diminuir, o auto-ataque tende a permanecer focado na horda. |
| Raio de Espalhamento Visual do Loot | 1.2 | Raio de espalhamento visual aplicado aos drops gerados pelos baus. | Se aumentar, os drops ficam mais separados e legíveis. Se diminuir, eles caem mais agrupados. |

## Object Pooling

| Atributo | Valor Atual | O que faz (Descrição) | Dica de Ajuste |
| --- | --- | --- | --- |
| Tamanho Inicial da Pool de Inimigos | 48 | Quantidade inicial de inimigos preparados na pool da arena. | Se aumentar, reduz o risco de expansão em tempo real, mas consome mais memória. Se diminuir, economiza memória, mas pode exigir mais crescimento da pool durante a run. |
| Tamanho Inicial da Pool de Baús | 20 | Quantidade inicial de baus preparados na pool da arena. | Se aumentar, mais baús ficam prontos sem custo em runtime. Se diminuir, a pool pode precisar crescer em runs longas. |
| Tamanho Inicial da Pool de Gemas de XP | 80 | Quantidade inicial de gemas de XP preparadas na pool. | Se aumentar, explosões grandes de loot ficam mais seguras. Se diminuir, a pool pode expandir em momentos de coleta intensa. |
| Tamanho Inicial da Pool de Fragmentos de Alma | 24 | Quantidade inicial de Fragmentos de Alma preparados na pool. | Se aumentar, mais pickups raros ficam pré-carregados. Se diminuir, a memória cai, mas a expansão dinâmica pode acontecer antes. |
| Tamanho Inicial da Pool de Ímãs | 12 | Quantidade inicial de pickups de ima preparados na pool da arena. | Se aumentar, eventos de ímã sucessivos ficam cobertos sem expansão. Se diminuir, é mais leve, mas menos folgado para testes extremos. |

## Meta-Progression (Costs)

| Atributo | Valor Atual | O que faz (Descrição) | Dica de Ajuste |
| --- | --- | --- | --- |
| Custo Base do Upgrade de Dano | 50 | Custo base do primeiro upgrade permanente de dano na Loja de Almas. | Se aumentar, o jogador demora mais para sentir avanço ofensivo permanente. Se diminuir, o dano vira um investimento inicial mais acessível. |
| Escala de Custo do Upgrade de Dano | 1.5x | Multiplicador que encarece cada novo nivel permanente de dano. | Se aumentar, os níveis altos de dano ficam caros muito rápido. Se diminuir, a árvore ofensiva fica viável por mais tempo. |
| Custo Base do Upgrade de Vida | 30 | Custo base do primeiro upgrade permanente de vida maxima na Loja de Almas. | Se aumentar, a sobrevivência permanente demora mais para entrar na build. Se diminuir, vida vira uma escolha segura logo cedo. |
| Escala de Custo do Upgrade de Vida | 1.3x | Multiplicador que encarece cada novo nivel permanente de vida maxima. | Se aumentar, o preço da defesa cresce mais cedo. Se diminuir, acumular vida ao longo de várias runs fica mais amigável. |

## Meta-Progression (Bonuses)

| Atributo | Valor Atual | O que faz (Descrição) | Dica de Ajuste |
| --- | --- | --- | --- |
| Bônus de Dano por Nível Permanente | 0.1x | Bonus permanente de dano aplicado ao player por nivel comprado na loja. | Se aumentar, cada compra de dano tem impacto mais perceptível. Se diminuir, será preciso investir em vários níveis para notar diferença. |
| Bônus de Vida por Nível Permanente | 10 HP | Bonus permanente de vida maxima aplicado ao player por nivel comprado na loja. | Se aumentar, cada compra de vida deixa a run mais tolerante a erro. Se diminuir, a progressão defensiva fica mais gradual. |

## Unlocks & Milestones

| Atributo | Valor Atual | O que faz (Descrição) | Dica de Ajuste |
| --- | --- | --- | --- |
| Abates para Liberar o Ímã | 100 | Quantidade de inimigos derrotados globalmente necessaria para liberar o drop do item de ima nos baus. | Se aumentar, o ímã vira uma recompensa de longo prazo e aparece mais tarde na progressão. Se diminuir, o jogador acessa mais cedo um pico forte de coleta e snowball. |

## Ailments & Status Effects

| Atributo | Valor Atual | O que faz (Descrição) | Dica de Ajuste |
| --- | --- | --- | --- |
| Intervalo de Tick de Veneno | 1.0s | Intervalo em segundos entre cada aplicacao de dano continuo de veneno ou queimadura. | Se aumentar, o dano ao longo do tempo fica mais espaçado e suave. Se diminuir, as condicoes ofensivas pressionam muito mais rapido. |
| Multiplicador de Lentidao do Congelamento | 0.0x | Multiplicador de velocidade usado quando o inimigo esta congelado, em que zero significa totalmente parado. | Se aproximar de 0, o congelamento vira controle total de grupo. Se aproximar de 1, ele passa a ser mais um atraso leve do que uma parada real. |`;

const patchNotes = [
  {
    hash: "5fc7ef8",
    date: "20/04/2026",
    title: "Object pooling, upgrade engine e core loop do lobby",
    summary:
      "Estrutura a run e o retorno ao lobby, adiciona pooling, centraliza balanceamento e cria a base de progressão permanente com Soul Fragments.",
    sections: [
      {
        name: "Cenas & Core Loop",
        items: [
          "Renomeada `SampleScene` para `Combat`.",
          "Criada cena `Lobby` com portal (`RunPortal.cs`) para transição de volta ao combate.",
          "Adicionada lógica de Game Over (`PlayerStats.cs`) que redireciona o jogador para o Lobby ao morrer.",
          "Adicionada trava no `PlayerMeleeAutoAttack.cs` para impedir ataques enquanto estiver no Lobby."
        ]
      },
      {
        name: "Sistemas & Arquitetura",
        items: [
          "Implementado `GameBalanceData` (ScriptableObject) centralizando variáveis de balanceamento, timing e economia.",
          "Implementado `ObjectPoolManager` para instanciar e reciclar inimigos, baús, XP e moedas, otimizando o Garbage Collector.",
          "Criado `UpgradeEngine` acoplado ao Player para escalar status na run sem sobrescrever a base de balanceamento.",
          "Implementado `SaveManager` usando PlayerPrefs para persistência da moeda permanente."
        ]
      },
      {
        name: "Combate & Entidades",
        items: [
          "Física de inimigos corrigida para corpo sólido dinâmico com `Rigidbody2D` e `BoxCollider2D` sem trigger.",
          "Lógica de dano e knockback por contato ajustada via `OnCollisionStay2D`.",
          "Adicionados baús destrutíveis (`Chest.cs`, `ChestSpawner.cs`) que dropam XP Gems e Soul Fragments.",
          "Atualizado raycast do soco em cone para detectar e causar dano a baús."
        ]
      },
      {
        name: "Ferramentas de Desenvolvimento",
        items: [
          "Criado Dev Menu in-game (`DevMenuManager`) ativado pela tecla `H` sem pausar o tempo.",
          "Adicionados botões de teste rápido na UI para spawn de baú, dano, área e armadura."
        ]
      }
    ]
  },
  {
    hash: "5fc7ef8",
    date: "22/04/2026",
    title: "Motor de efeitos temporários, loot table e mecânica do ímã",
    summary:
      "Expande o combate com buffs temporários, weighted drops e um pickup de magnetismo voltado para fluxo de coleta e legibilidade de recompensa.",
    sections: [
      {
        name: "Sistemas & Arquitetura",
        items: [
          "Criado `PlayerStatusEffects` para gerenciar buffs e debuffs temporários com expiração matemática automática.",
          "Refatorado `PlayerStats`, `PlayerController` e auto-ataque para somarem base, upgrades da run e efeitos temporários.",
          "Implementado sistema de pesos no `Chest.cs` via `GetRandomDropTag()`."
        ]
      },
      {
        name: "Gameplay & Mecânicas",
        items: [
          "Adicionado item `Ímã de XP` (`MagnetItem.cs`).",
          "Ao ser coletado, o ímã busca todas as `ExperienceGem` ativas na pool e força perseguição ao player.",
          "Adicionada lógica de perseguição no `ExperienceGem.cs` com `SetTarget`.",
          "Adicionado sistema de espalhamento visual no drop dos baús."
        ]
      },
      {
        name: "Ferramentas de Desenvolvimento",
        items: [
          "Adicionado botão para forçar drop do ímã via pool.",
          "Adicionado botão para chuva de 10 gemas simultâneas em posições aleatórias.",
          "Adicionado botão para testar buff de velocidade por 3 segundos."
        ]
      },
      {
        name: "Balanceamento",
        items: [
          "Adicionadas variáveis de peso para XP, Soul e Magnet no `GameBalanceData.cs`.",
          "Adicionada velocidade de atração do ímã (`magnetPullSpeed`) e raio de espalhamento do loot (`lootScatterRadius`)."
        ]
      }
    ]
  },
  {
    hash: "4cb32ab",
    date: "23/04/2026",
    title: "Motor de conditions, DoT e arma de veneno no dev menu",
    summary:
      "Coloca o projeto em direção a um combate mais sistêmico, com status ofensivos, preparação para freeze e uma arma de teste para validar ailment gameplay.",
    sections: [
      {
        name: "Sistemas & Arquitetura",
        items: [
          "Criado o motor de status e debuffs com `EnemyStatusManager`, `AilmentType` e `ActiveAilment`.",
          "Implementada matemática de Damage over Time que drena a vida dos inimigos independentemente de ataques físicos.",
          "Integrado o multiplicador de velocidade `GetSpeedMultiplier` na FSM dos inimigos para futuros efeitos de congelamento.",
          "Refatorado `EnemyStats` para limpar o histórico de debuffs ao devolver o inimigo para a pool."
        ]
      },
      {
        name: "Armas & Gameplay",
        items: [
          "Expandido o `WeaponManager` com suporte para injeção dinâmica de armas em tempo de execução via `AddWeapon`.",
          "Criada a `PoisonAuraWeapon`, arma de teste que aplica Veneno em área através de `Physics2D.OverlapCircleAll`."
        ]
      },
      {
        name: "Ferramentas de Desenvolvimento",
        items: [
          "Adicionado o botão `Btn_AddPoisonAura` ao painel de debug para testes de armas secundárias em tempo real."
        ]
      },
      {
        name: "Balanceamento & Documentação",
        items: [
          "Adicionadas as variáveis `poisonTickRate` e `freezeSlowdownMultiplier` no `GameBalanceData.cs`.",
          "Sincronização automática aplicada no `GameBalance_DesignDoc.md` para manter a manutenção do documento."
        ]
      }
    ]
  }
];

const parseBalanceMarkdown = (markdown) => {
  const lines = markdown.split("\n");
  const title = lines.find((line) => line.startsWith("# "))?.replace("# ", "").trim() ?? "";
  const descriptionLines = [];
  const sections = [];
  let currentSection = null;

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index].trim();

    if (!line) {
      continue;
    }

    if (line.startsWith("## ")) {
      currentSection = {
        title: line.replace("## ", "").trim(),
        headers: [],
        rows: []
      };
      sections.push(currentSection);
      continue;
    }

    if (!currentSection && !line.startsWith("# ")) {
      descriptionLines.push(line);
      continue;
    }

    if (!currentSection || !line.startsWith("|")) {
      continue;
    }

    const nextLine = lines[index + 1]?.trim() ?? "";

    if (!currentSection.headers.length && nextLine.startsWith("| ---")) {
      currentSection.headers = line.split("|").map((cell) => cell.trim()).filter(Boolean);
      index += 1;
      continue;
    }

    if (currentSection.headers.length) {
      const values = line.split("|").map((cell) => cell.trim()).filter(Boolean);
      if (values.length === currentSection.headers.length) {
        currentSection.rows.push(values);
      }
    }
  }

  return {
    title,
    description: descriptionLines.join(" "),
    sections
  };
};

const slugify = (value) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const parsedBalance = parseBalanceMarkdown(balanceMarkdown);
const totalRows = parsedBalance.sections.reduce((sum, section) => sum + section.rows.length, 0);

const stats = [
  { label: "Categorias de Balance", value: parsedBalance.sections.length },
  { label: "Parâmetros de Tuning", value: totalRows },
  { label: "Commits Documentados", value: patchNotes.length },
  { label: "Última Atualização", value: "23/04/2026" }
];

const statsGrid = document.getElementById("stats-grid");

stats.forEach((stat) => {
  const card = document.createElement("article");
  card.innerHTML = `<span>${stat.label}</span><strong>${stat.value}</strong>`;
  statsGrid.appendChild(card);
});

const tocList = document.getElementById("toc-list");
const balanceSectionsRoot = document.getElementById("balance-sections");

parsedBalance.sections.forEach((section) => {
  const sectionId = slugify(section.title);
  const tocLink = document.createElement("a");
  tocLink.href = `#${sectionId}`;
  tocLink.textContent = section.title;
  tocList.appendChild(tocLink);

  const card = document.createElement("article");
  card.className = "table-card";
  card.id = sectionId;

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  const headRow = document.createElement("tr");
  section.headers.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    headRow.appendChild(th);
  });
  thead.appendChild(headRow);

  section.rows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.dataset.search = row.join(" ").toLowerCase();

    row.forEach((cell, index) => {
      const td = document.createElement("td");
      td.dataset.label = section.headers[index];
      td.innerHTML = index === 1 ? `<span class="value-pill">${cell}</span>` : cell;
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });

  table.appendChild(thead);
  table.appendChild(tbody);

  card.innerHTML = `
    <div class="panel-label">Balance Category</div>
    <h3>${section.title}</h3>
    <div class="table-wrap"></div>
  `;
  card.querySelector(".table-wrap").appendChild(table);
  balanceSectionsRoot.appendChild(card);
});

const timelineRoot = document.getElementById("timeline");

patchNotes.forEach((entry) => {
  const card = document.createElement("article");
  card.className = "timeline-card";
  card.dataset.search = JSON.stringify(entry).toLowerCase();

  const sectionsMarkup = entry.sections
    .map(
      (section) => `
        <section class="timeline-section">
          <h4>${section.name}</h4>
          <ul>
            ${section.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </section>
      `
    )
    .join("");

  card.innerHTML = `
    <div class="timeline-top">
      <div>
        <div class="panel-label">Patch Record</div>
        <h3>${entry.title}</h3>
      </div>
      <div class="timeline-meta">
        <span class="tag"><strong>Hash</strong><span>${entry.hash}</span></span>
        <span class="tag"><strong>Data</strong><span>${entry.date}</span></span>
      </div>
    </div>
    <p class="timeline-summary">${entry.summary}</p>
    <div class="timeline-sections">${sectionsMarkup}</div>
  `;

  timelineRoot.appendChild(card);
});

const balanceCards = Array.from(document.querySelectorAll(".table-card"));
const searchInput = document.getElementById("search-input");
const clearSearch = document.getElementById("clear-search");
const matchCopy = document.getElementById("match-copy");
const balanceEmpty = document.getElementById("balance-empty");

const applyBalanceFilter = () => {
  const query = searchInput.value.trim().toLowerCase();
  let visibleRows = 0;

  balanceCards.forEach((card) => {
    const rows = Array.from(card.querySelectorAll("tbody tr"));
    let sectionVisibleRows = 0;

    rows.forEach((row) => {
      const isVisible = !query || row.dataset.search.includes(query);
      row.classList.toggle("hidden", !isVisible);
      if (isVisible) {
        visibleRows += 1;
        sectionVisibleRows += 1;
      }
    });

    card.hidden = sectionVisibleRows === 0;
  });

  balanceEmpty.hidden = visibleRows !== 0;
  matchCopy.textContent = query
    ? `${visibleRows} parâmetro(s) encontrados em ${balanceCards.filter((card) => !card.hidden).length} seção(ões).`
    : `${totalRows} parâmetros distribuídos em ${parsedBalance.sections.length} categorias.`;
};

searchInput.addEventListener("input", applyBalanceFilter);
clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  applyBalanceFilter();
});

const patchCards = Array.from(document.querySelectorAll(".timeline-card"));
const patchSearch = document.getElementById("patch-search");
const clearPatchSearch = document.getElementById("clear-patch-search");
const patchMatchCopy = document.getElementById("patch-match-copy");
const patchEmpty = document.getElementById("patch-empty");

const applyPatchFilter = () => {
  const query = patchSearch.value.trim().toLowerCase();
  let visibleCards = 0;

  patchCards.forEach((card) => {
    const isVisible = !query || card.dataset.search.includes(query);
    card.classList.toggle("hidden", !isVisible);
    if (isVisible) {
      visibleCards += 1;
    }
  });

  patchEmpty.hidden = visibleCards !== 0;
  patchMatchCopy.textContent = query
    ? `${visibleCards} commit(s) correspondem ao filtro atual.`
    : `${patchNotes.length} commits estruturados para review da equipe.`;
};

patchSearch.addEventListener("input", applyPatchFilter);
clearPatchSearch.addEventListener("click", () => {
  patchSearch.value = "";
  applyPatchFilter();
});

const tabButtons = Array.from(document.querySelectorAll(".tab-btn"));
const views = Array.from(document.querySelectorAll(".view"));
const navViewButtons = Array.from(document.querySelectorAll(".nav-view-btn"));

const activateView = (targetId) => {
  tabButtons.forEach((item) => item.classList.toggle("active", item.dataset.viewTarget === targetId));
  views.forEach((view) => view.classList.toggle("active", view.id === targetId));
  document.getElementById(targetId).scrollIntoView({ behavior: "smooth", block: "start" });
};

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activateView(button.dataset.viewTarget);
  });
});

navViewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activateView(button.dataset.viewTarget);
  });
});

applyBalanceFilter();
applyPatchFilter();
