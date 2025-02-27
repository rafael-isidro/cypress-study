Feature: Login

Scenario: [CT-001] Validar login com sucesso
    Given Estou na pagina de login e possuo cadastro no sistema
    When Informo Username, Password validos
    And clico no botão 'Log In'
    Then Devo me logar no sistema

Scenario: [CT-002] Verificar login com username invalido
    Given Estou na pagina de login e possuo cadastro no sistema
    When Informo Username invalido, Password valido
    And clico no botão 'Log In'
    Then Deve ser exibida mensagem de erro

Scenario: [CT-003] Verificar login com password invalido
    Given Estou na pagina de login e possuo cadastro no sistema
    When Informo Username valido, Password invalido
    And clico no botão 'Log In'
    Then Deve ser exibida mensagem de erro

Scenario: [CT-004] Verificar login com username vazio
    Given Estou na pagina de login e possuo cadastro no sistema
    When Informo Username vazio, Password valido
    And clico no botão 'Log In'
    Then Deve ser exibida mensagem de campos vazios

Scenario: [CT-005] Verificar login com password vazio
    Given Estou na pagina de login e possuo cadastro no sistema
    When Informo Username valido, Password vazio
    And clico no botão 'Log In'
    Then Deve ser exibida mensagem de campos vazios

    
