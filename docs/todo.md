# Planejamento do APTS

## Prototipação da UI

- [X] Estabelecer tipografia
- [X] Definir paleta de cores
- [X] Definir sombras
- [X] Definir bordas
- [X] Escolher biblioteca de ícones
- [ ] Componentes
  - [X] Ícone
  - [X] Texto
  - [X] Campo de texto
  - [X] Botão
  - [X] Caixa
  - [X] Pesquisa
    - [X] Barra
    - [X] Itens
- [ ] Terminal
- [ ] Peças
  - [ ] Cabeçalho
    - [ ] Breadcrumb
      - [ ] Retrato
      - [ ] Paisagem
    - [X] Título da página
    - [X] Subtítulo para ação
    - [ ] Botões de ação
      - [ ] Retrato
      - [X] Paisagem
  - [X] Conteúdo de texto
  - [ ] Formulário
  - [ ] Descrição do jogo
- [ ] Páginas
  - [X] Regras do Jogo (JS)
    - [X] Listar
    - [X] Visualizar
    - [X] Criar
    - [X] Editar
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

## Descrição de jogos

- [ ] Definir linguagem de descrição de jogos
- [ ] Tradução para a Engine AlphaZero (modelo do estado em canais para a ResNet)
- [ ] Interfaces com o jogo
  - [ ] Jogo
  - [ ] Estado

## Engine AlphaZero

- [X] Estabelecer diagrama dos dados voláteis
- [ ] ResNet
  - [X] Estabelecer forma de entrada
  - [X] Implementar construção
  - [ ] Estudar implementação de mais de três canais
- [X] MCTS
  - [X] Implementar nó
  - [X] Implementar processo de busca
  - [X] Implementar MCTS + ResNet
- [X] Processo de treinamento
  - [X] Estabelecer forma de entrada
  - [X] Estabelecer etapas
    - [X] Transformação inicial
    - [X] Backbone
    - [X] Heads
      - [X] Policy
      - [X] Value
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
