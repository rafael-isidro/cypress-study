Feature: Transfer

Scenario: [CT-001] Validar transferencia com sucesso
    Given Estou logado no sistema e crio uma nova conta
    When Clico em 'Transfer Funds', preencho um valor valido
    And Clico no botão 'Transfer'
    Then Devo receber mensagem de transferencia bem sucedida

Scenario: [CT-002] Verificar transferencia com valor negativo
    Given Estou logado no sistema e crio uma nova conta
    When Clico em 'Transfer Funds', preencho um valor negativo
    And Clico no botão 'Transfer'
    Then Devo receber mensagem de valor invalido

Scenario: [CT-003] Verificar transferencia com valor zero
    Given Estou logado no sistema e crio uma nova conta
    When Clico em 'Transfer Funds', preencho um valor igual a zero
    And Clico no botão 'Transfer'
    Then Devo receber mensagem de valor invalido

Scenario: [CT-004] Verificar transferencia com valor com formato invalido
    Given Estou logado no sistema e crio uma nova conta
    When Clico em 'Transfer Funds', preencho um valor com formato invalido
    And Clico no botão 'Transfer'
    Then Devo receber mensagem de valor invalido

Scenario: [CT-005] Verificar transferencia com valor maior que saldo
    Given Estou logado no sistema e crio uma nova conta
    When Clico em 'Transfer Funds', preencho um valor maior do que o saldo
    And Clico no botão 'Transfer'
    Then Devo receber mensagem de saldo insuficiente
