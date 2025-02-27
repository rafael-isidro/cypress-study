Feature: Register

Scenario: [CT-001] Validar registro com sucesso
    Given Estou na pagina de registro
    When Informo First Name, Last Name, Address, City, State, Zip Code, Phone, SSN, Username, Password e Confirm validos 
    And clico no botão 'Register'
    Then Devo me cadastrar no sistema e estar logado

Scenario: [CT-002] Verificar registro com campos vazios
    Given Estou na pagina de registro
    When clico no botão 'Register' sem preencher nenhum campo
    Then Deve ser exibida mensagem de required em todos os campos

Scenario: [CT-003] Verificar registro com telefone com formato invalido
    Given Estou na pagina de registro
    When Informo phone com formato invalido
    And clico no botão 'Register'
    Then Deve ser exibida mensagem de Formato invalido do telefone

Scenario: [CT-004] Verificar registro com senhas divergentes
    Given Estou na pagina de registro
    When Informo senha e confirmacao divergentes
    And clico no botão 'Register'
    Then Deve ser exibida mensagem de que Senhas nao conferem

Scenario: [CT-005] Verificar registro com username existente
    Given Estou na pagina de registro
    When Informo username ja cadastrado
    And clico no botão 'Register'
    Then Deve ser exibida mensagem de Username ja existente