
# Projeto Trivia

Oitavo projeto de Front-End fornecido pela instituição Trybe realizado em grupo, onde criamos um website de perguntas e respostas.


## Aprendizados

Aprendi a trabalhar em equipe utilzando o React, Redux e RTL.

## Stack utilizada

**Fundamentais:** React, Redux, JS e RTL



## Instalação

Instalação com NPM

```bash
  git@github.com:GuilhermeFMP/Trybe-Trivia-React-Redux.git
  cd Trybe-Trivia-React-Redux
  npm install
```
    
## Autores

- [@guilherme.kuro](https://github.com/GuilhermeFMP)
- [@LucasLomiento](https://github.com/LucasLomiento)
- [@carlospsvieira](https://github.com/carlospsvieira)
- [@ErickLauretti](https://github.com/ErickLauretti)
## Licença

Arquivos como .trybe e trybe.yml

[Trybe](https://www.betrybe.com/)


# Requisitos

## Tela de início/login

>Obs: É necessário que a página de Login tenha o caminho `src/pages/Login.js`

## 1. Crie a tela de login, onde a pessoa que joga deve preencher as informações para iniciar um jogo

**PRIORIDADE 0**

Criar a tela de login contendo as informações de nome e email, onde a pessoa que joga deve conseguir escrever seu nome e email nos inputs e o botão de jogar ("Play") deve estar desabilitado caso não tenha alguma dessas informações.
  
:bulb: Recomendamos que o Redux e o Router sejam configurados nesse requisito, para que os demais possam ser feitos paralelamente!

:warning: **Lembre-se das observações técnicas descritas acima para configurar a `store` do `Redux`.**

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * A pessoa que joga deve conseguir escrever seu nome no input de texto
  * A pessoa que joga deve conseguir escrever seu email no input de email
  * O botão "Play" deve ser desabilitado caso email e/ou nome não estejam preenchidos
  * O campo de texto para o nome deve possuir o atributo `data-testid` com o valor `input-player-name`
  * O campo de texto para o email deve possuir o atributo `data-testid` com o valor `input-gravatar-email`
  * O botão "Play" que leva a pessoa ao jogo deve possuir o atributo `data-testid` com o valor `btn-play`
</details>
<br />

---

## 2. Crie o botão de iniciar o jogo

  **PRIORIDADE 1**
  
  O botão "Play" deve fazer requisição para a API para obter o token e redirecionar a pessoa para tela de jogo

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Ao clicar no botão "Play", uma requisição para a API do Trivia deve ser feita para obter o _token_ de jogador
  * Após clicar no botão "Play", a pessoa deve ser redirecionada para a tela do jogo. O redirecionamento deve acontecer somente após o retorno do token pela API.
  * O _token_ deve ser armazenado e enviado em todas as requisições seguintes.
  * Salve no `localStorage` o valor do _token_ recebido na API do Trivia, utilizando a chave `token`.
</details>
<br />

---

## 3. Crie um botão que leva a pessoa para tela de configuração

  **PRIORIDADE 1**
  
  A tela inicial deve conter um botão que leve para a configuração do jogo

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * O botão que leva a pessoa a tela de configurações deve possuir o atributo `data-testid` com o valor `btn-settings`
  * A tela de configurações deve possuir um título com o atributo `data-testid` contendo o valor `settings-title`
</details>
<br />

---

## 4. Desenvolva testes para atingir 90% de cobertura da tela de Login

> :bulb: Obs: Neste requisito vamos cobrir a nossa tela de login com testes unitários utilizando a biblioteca [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), aproveite essa oportunidade para colocar em prática o [Desenvolvimento Orientado por Testes](https://blog.betrybe.com/tecnologia/tdd-test-driven-development/)

  **PRIORIDADE 1**
  
  Cobertura de testes da tela de Login

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Os testes criados por você não irão influenciar os outros requisitos no avaliador. Você deverá desenvolver seus testes unitários/integração usando a biblioteca React Testing Library, enquanto o avaliador usará a biblioteca [Cypress](https://docs.cypress.io/) para avaliar os requisitos, inclusive os de cobertura.
  * Para os testes passarem é necessário que a página de Login tenha o caminho `src/pages/Login.js`
</details>
<br />

---

## Tela de jogo

>Obs: É necessário que a página de Game tenha o caminho `src/pages/Game.js`

## 5. Crie um _header_ que deve conter as informações da pessoa jogadora

  **PRIORIDADE 1**
  
  O _header_ deve conter as informações sobre a pessoa jogadora, como a imagem do Gravatar, o nome e o placar

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * A imagem do perfil vinda do Gravatar em um elemento que deve possuir o atributo `data-testid` com o valor `header-profile-picture`
  * O nome da pessoa em um elemento que deve possuir o atributo `data-testid` com o valor `header-player-name`
  * O placar zerado em um elemento que deve possuir o atributo `data-testid` com o valor `header-score`
</details>

<br />

---

## 6. Crie a página de jogo que deve conter as informações relacionadas à pergunta

  **PRIORIDADE 1**
  
  Deve ser feita a requisição para a API para popular o jogo com as perguntas, categoria e alternativas

<details><summary> Ilustração:</summary>

  ![img](req6.gif)
</details><br />
<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Acessar o jogo com um token inválido leva a um logout, excluindo o token do `localStorage` e redirecionando a página para a tela de login
  * A pergunta e suas alternativas de resposta devem ser recebidas da API do Trivia
  * Apenas **uma** pergunta deve ser exibida por vez
  * A categoria da pergunta (campo _category_) deve ser exibida em um elemento com o atributo `data-testid` com o valor `question-category` para a pessoa que está jogando
  * O texto da pergunta (campo _question_) deve ser exibido em um elemento com o atributo `data-testid` com o valor `question-text` para a pessoa que está jogando
  * <details><summary> O texto com as alternativas devem ser exibidos seguindo as regras abaixo:</summary>

    * Os botões das alternativas devem ser elementos irmãos; ou seja, não podem estar dentro de outra tag
    * O elemento com a alternativa correta deve possuir o atributo `data-testid` com o valor `correct-answer`
    * Os elementos com as alternativas incorretas devem possuir o atributo `data-testid` com o valor `wrong-answer-${index}`, com `${index}` iniciando com o valor `0`
    * As alternativas devem estar dentro de uma tag que possui o atributo `data-testid` com o valor `answer-options`
    * As alternativas devem ser exibidas em ordem aleatória
    * Dica: utilize botões (`<button/>`) para as alternativas
  </details>
</details>

<br />

---

## 7. Desenvolva o estilo que, ao clicar em uma resposta, a correta deve ficar verde e as incorretas, vermelhas

  **PRIORIDADE 2**
  
  Ao responder a pergunta, se a alternativa for correta, deve ficar verde, caso contrário, vermelha

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Utilize a propriedade css `border` com o valor `3px solid rgb(6, 240, 15)` para a alternativa correta.
  * Utilize a propriedade css `border` com o valor `3px solid red` para as alternativas incorretas.
</details>

<br />

---

## 8. Desenvolva um timer onde a pessoa que joga tem 30 segundos para responder

  **PRIORIDADE 3**
  
  A página deve conter um timer com o tempo máximo de 30 segundos para responder. Caso ultrapasse o tempo, a pergunta é considerada errada

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Caso a pergunta não seja respondida a tempo, a resposta é considerada como errada
  * Respostas incorretas não somam pontos ao placar
  * Um temporizador deve aparecer na tela da pessoa, começando de 30 segundos e indo de forma decrescente até zero
  * Após o tempo se esgotar, todos os botões das alternativas devem ser desabilitados

  :bulb: **Dica**: Lembre-se do `setTimeout` e do `setInterval`
</details>

<br />

---

## 9. Crie o placar com as seguintes características:

  **PRIORIDADE 3**
  
  Ao clicar na resposta correta, pontos devem ser somados no placar da pessoa que está jogando

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Você deve salvar a pontuação **atual** no estado no redux na chave player.score
  * :bulb: Leia a sub-seção Observações técnicas, na seção [:convenience_store: Desenvolvimento](#orientações) para mais detalhes
  * Respostas erradas não devem somar ao placar
  * A fórmula para cálculo dos pontos por pergunta é: `10 + (timer * dificuldade)`, onde timer é o tempo restante no contador de tempo e dificuldade é `hard: 3, medium: 2, easy: 1`, dependendo da pergunta. :bulb: Exemplo: Se no momento da resposta correta o timer estiver contando 17 segundos, e a dificuldade da pergunta é 2 (média), a pontuação deve ser: `10 + (17 * 2) = 44`
</details>

<br />

---

## 10. Crie um botão de `Next` que apareça após a resposta ser dada

  **PRIORIDADE 3**
  
  Deve aparecer um botão de próxima ("Next") pergunta após a resposta ser dada

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * O botão "Next" deve possuir o atributo `data-testid` com o valor `btn-next`
  * Ao clicar nesse botão, a próxima pergunta deve aparecer na tela
</details>

<br />

---

## 11. Desenvolva o jogo de forma que a pessoa jogadora deve responder 5 perguntas no total

  **PRIORIDADE 2**
  
  O jogo deve ser composto por 5 perguntas, onde, a cada nova pergunta, o timer é reiniciado. Após respondê-las, a pessoa que joga deve ser redirecionada para a tela de feedback

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * A cada nova pergunta o temporizador deve ser reiniciado para 30 segundos
  * Após a quinta pergunta, o botão "Next" deve redirecionar a pessoa para a tela de _Feedback_
  * Para perguntas com type:"boolean", mostrar somente 2 campos (um para cada resposta possível)
  * Para perguntas com type:"multiple", mostrar a quantidade necessária de campos (um para cada resposta possível)
</details>

<br />

---

## Tela de feedback

>Obs: É necessário que a página de Feedback tenha o caminho `src/pages/Feedback.js`

## 12. Desenvolva o header de _feedback_ que deve conter as informações da pessoa jogadora

  **PRIORIDADE 2**
  
  A tela de feedback deve conter as informações da pessoa que joga, incluindo o placar com o valor referente ao desempenho no jogo

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * A imagem do perfil vinda do Gravatar em um elemento que deve possuir o atributo `data-testid` com o valor `header-profile-picture`
  * O nome da pessoa em um elemento que deve possuir o atributo `data-testid` com o valor `header-player-name`
  * O placar com o valor **atual** em um elemento que deve possuir o atributo `data-testid` com o valor `header-score`
</details>

<br />

---

## 13. Crie a mensagem de _feedback_ para ser exibida a pessoa usuária

  **PRIORIDADE 1**
  
  A tela de feedback deve exibir uma mensagem relacionada ao desempenho da pessoa que jogou

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * A mensagem deve ser "Could be better..." caso a pessoa acerte menos de 3 perguntas
  * A mensagem deve ser "Well Done!" caso a pessoa acerte 3 perguntas ou mais
  * O elemento da mensagem de _feedback_ deve possuir o atributo `data-testid` com o valor `feedback-text`
</details>

<br />

---

## 14. Exiba as informações relacionadas aos resultados obtidos para a pessoa usuária

  **PRIORIDADE 1**
  
  A tela de feedback deve exibir informações sobre o desempenho da pessoa, como o placar final e o número de perguntas que acertou

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * O placar final deve ser mostrado em um elemento com o atributo `data-testid` com o valor `feedback-total-score`
  * O número de perguntas que a pessoa acertou deve ser exibido em um elemento com o atributo `data-testid` com o valor `feedback-total-question`
  * Os elementos com os `data-testid` devem possuir apenas o número
  * No `estado do redux` as chaves score e assertions devem ser do tipo number
</details>

<br />

---

## 15. Crie a opção para a pessoa jogadora poder jogar novamente

  **PRIORIDADE 3**
  
  A pessoa terá a opção de jogar novamente ("Play Again") que, ao ser clicada, levará para a tela de inicial

<details>
  <summary><strong> Observações técnicas:</strong></summary>
  
  * Ao clicar no botão "Play Again", a pessoa deve ser redirecionada para a tela de início (login)
  * O botão para "Play Again" deve possuir o atributo `data-testid` com o valor `btn-play-again`
</details>

<br />

---

## 16. Crie a opção para a pessoa jogadora poder visualizar a tela de _ranking_

  **PRIORIDADE 3**
  
  Deve existir um botão que redirecione a pessoa para a tela de ranking

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Ao clicar no botão "Ranking", a pessoa deve ser redirecionada para a tela de _ranking_
  * O botão para ir para a tela de _ranking_ deve possuir o atributo `data-testid` com o valor `btn-ranking`
  * A tela de _ranking_ deve possuir um título com o atributo `data-testid` contendo o valor `ranking-title`
</details>

<br />

---

## 17. Desenvolva testes para atingir 90% de cobertura da tela de Feedbacks

> :bulb: Obs: Neste requisito vamos cobrir a nossa tela de Feedbacks com testes unitários utilizando a biblioteca [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), aproveite essa oportunidade para colocar em prática o [Desenvolvimento Orientado por Testes](https://blog.betrybe.com/tecnologia/tdd-test-driven-development/)

  **PRIORIDADE 2**
  
  Cobertura de testes da tela de Feedbacks

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Os testes criados por você não irão influenciar os outros requisitos no avaliador. Você deverá desenvolver seus testes unitários/integração usando a biblioteca React Testing Library, enquanto o avaliador usará a biblioteca [Cypress](https://docs.cypress.io/) para avaliar os requisitos, inclusive os de cobertura.
  * Para os testes passarem é necessário que a página de Feedbacks tenha o caminho `src/pages/Feedback.js`
</details>

<br />

---

## Tela de ranking

>Obs: É necessário que a página de Ranking tenha o caminho `src/pages/Ranking.js`

## 18. Crie um botão para ir ao início

  **PRIORIDADE 2**
  
  O botão deve redirecionar a pessoa para a tela de inicial (login)

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Esse botão deve possuir o atributo `data-testid` com o valor `btn-go-home`
  * Esse botão deve enviar a pessoa para o início (tela de preenchimento dos dados)
</details>

<br />

---

## 19. Crie o conteúdo da tela de _ranking_

  **PRIORIDADE 2**
  
  A tela de ranking deve possuir uma lista com a imagem, nome e pontuação das pessoas que jogaram e deve ficar armazenado no localStorage

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Deve-se mostrar uma lista com a imagem de perfil vinda do Gravatar, nome e pontuação das pessoas que jogaram em ordem decrescente (da maior pontuação para a menor)
  * Os elementos com os nomes das pessoas que jogaram devem possuir o atributo `data-testid` com o valor `player-name-${index}`, onde `${index}` é iniciado em zero
  * Os elementos com as pontuações das pessoas que jogaram devem possuir o atributo `data-testid` com o valor `player-score-${index}`, onde `${index}` é iniciado em zero
  * O ranking deve ser armazenado no navegador através do `localStorage`.
</details>

<br />

---

## 20. Desenvolva testes para atingir 90% de cobertura da tela de Ranking

> :bulb: Obs: Neste requisito vamos cobrir a nossa tela de Ranking com testes unitários utilizando a biblioteca [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), aproveite essa oportunidade para colocar em prática o [Desenvolvimento Orientado por Testes](https://blog.betrybe.com/tecnologia/tdd-test-driven-development/)

  **PRIORIDADE 2**
  
  Cobertura de testes da tela de Ranking

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Os testes criados por você não irão influenciar os outros requisitos no avaliador. Você deverá desenvolver seus testes unitários/integração usando a biblioteca React Testing Library, enquanto o avaliador usará a biblioteca [Cypress](https://docs.cypress.io/) para avaliar os requisitos, inclusive os de cobertura.
  * Para os testes passarem é necessário que a página de Ranking tenha o caminho `src/pages/Ranking.js`
</details>

<br />

---

## Testes da tela de jogo

## 21. Desenvolva testes para atingir 90% de cobertura da tela de Jogo

> :bulb: Obs: Neste requisito vamos cobrir a nossa tela de Jogo com testes unitários utilizando a biblioteca [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), aproveite essa oportunidade para colocar em prática o [Desenvolvimento Orientado por Testes](https://blog.betrybe.com/tecnologia/tdd-test-driven-development/)

  **PRIORIDADE 3**
  
  Cobertura de testes da tela de Jogo

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Os testes criados por você não irão influenciar os outros requisitos no avaliador. Você deverá desenvolver seus testes unitários/integração usando a biblioteca React Testing Library, enquanto o avaliador usará a biblioteca [Cypress](https://docs.cypress.io/) para avaliar os requisitos, inclusive os de cobertura.
  * Para os testes passarem é necessário que a página de Jogo tenha o caminho `src/pages/Game.js`
</details>

<br />

---

## Testes de cobertura da aplicação

## 22. Desenvolva testes para atingir 95% de cobertura total

> :bulb: Obs: Neste requisito vamos cobrir a nossa aplicação com testes unitários utilizando a biblioteca [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), aproveite essa oportunidade para colocar em prática o [Desenvolvimento Orientado por Testes](https://blog.betrybe.com/tecnologia/tdd-test-driven-development/)

  **PRIORIDADE 3**
  
  Cobertura de testes da aplicação

<details>
  <summary><strong> Observações técnicas:</strong></summary>

  * Os testes criados por você não irão influenciar os outros requisitos no avaliador. Você deverá desenvolver seus testes unitários/integração usando a biblioteca React Testing Library, enquanto o avaliador usará a biblioteca [Cypress](https://docs.cypress.io/) para avaliar os requisitos, inclusive os de cobertura.
</details>

<br />
