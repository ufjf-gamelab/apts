# Planejamento do APTS

## Prototipação da UI

- [x] Estabelecer tipografia
- [x] Definir paleta de cores
- [x] Definir sombras
- [x] Definir bordas
- [x] Escolher biblioteca de ícones
- [ ] Componentes
  - [x] Ícone
  - [x] Texto
  - [x] Campo de texto
  - [x] Botão
  - [x] Caixa
  - [x] Pesquisa
    - [x] Barra
    - [x] Itens
- [ ] Terminal
- [ ] Peças
  - [ ] Cabeçalho
    - [ ] Breadcrumb
      - [ ] Retrato
      - [ ] Paisagem
    - [x] Título da página
    - [x] Subtítulo para ação
    - [ ] Botões de ação
      - [ ] Retrato
      - [x] Paisagem
  - [x] Conteúdo de texto
  - [ ] Formulário
  - [ ] Descrição do jogo
- [ ] Páginas
  - [x] Regras do Jogo (JS)
    - [x] Listar
    - [x] Visualizar
    - [x] Criar
    - [x] Editar
  - [ ] Implementação estrutural do jogo (Arquitetura da Rede)
    - [ ] Listar
    - [ ] Filtrar
    - [ ] Criar
    - [ ] Históricos de partidas
      - [ ] Listar
      - [ ] Criar
        - [ ] Selecionar modelo
        - [ ] Definir parâmetros de relevância para salvar no BD
      - [ ] Editar
      - [ ] Visualizar
        - [ ] Informações do modelo
          - [ ] Parâmetros estruturais
          - [ ] Registro de treinamento
          - [ ] Estatísticas de treinamento
  - [ ] Jogar partida "manual"
    - [ ] Escolher cada modelo a ser incluído na partida
    - [ ] Mostrar avaliação gerada pelos agentes passo-a-passo
  - [ ] Analisar estatísticas
    - [ ] Comparar históricos de partidas de play data
    - [ ] Selecionar parâmetros de interesse
    - [ ] Plotar gráficos
  - [ ] Modelo da rede
    - [ ] Listar
      - [ ] Filtrar
    - [ ] Visualizar
      - [ ] Informações do modelo
        - [ ] Parâmetros estruturais
        - [ ] Registro de treinamento
        - [ ] Estatísticas de treinamento
    - [ ] Criar / Treinar
      - [ ] Com outro modelo como base
      - [ ] Gerar mais de um modelo em diferentes gerações
    - [ ] Editar

## Implantação da UI

- [ ] Componentes
  - [x] Ícone
  - [x] Texto
  - [-] Campo de texto
  - [-] Botão
  - [x] Caixa
  - [-] Pesquisa
    - [-] Barra
    - [-] Itens

## Descrição de jogos

- [ ] Definir linguagem de descrição de jogos
- [ ] Tradução para a Engine AlphaZero (modelo do estado em canais para a ResNet)
- [ ] Interfaces com o jogo
  - [ ] Jogo
  - [ ] Estado

## Engine AlphaZero

- [x] Estabelecer diagrama dos dados voláteis
- [ ] ResNet
  - [x] Estabelecer forma de entrada
  - [x] Implementar construção
  - [ ] Estudar implementação de mais de três canais
- [x] MCTS
  - [x] Implementar nó
  - [x] Implementar processo de busca
  - [x] Implementar MCTS + ResNet
- [x] Processo de treinamento
  - [x] Estabelecer forma de entrada
  - [x] Estabelecer etapas
    - [x] Transformação inicial
    - [x] Backbone
    - [x] Heads
      - [x] Policy
      - [x] Value
- [ ] Container para o modelo de ResNet
  - [ ] Estabelecer dados relevantes

## Persistência

- [ ] Estabelecer modelo de dados persistentes
  - [ ] Jogo (regras)
  - [ ] Implementação estrutural do jogo
  - [ ] Modelo (container da rede)
  - [ ] Partidas salvas
- [ ] Decidir biblioteca de banco de dados
- [ ] Implementar métodos de manipulação interna
  - [ ] Inserção
  - [ ] Obtenção
  - [ ] Edição
  - [ ] Deleção
- [ ] Implementar métodos de manipulação externa
- [ ] Exportação
- [ ] Importação

## Implementação da interface

- [ ] Criar componentes e páginas
- [ ] Implementar execução por WebWorkers
  - [ ] Jogar partidas
  - [ ] Criação de histórico de partidas
  - [ ] Geração / treinamento de modelo
