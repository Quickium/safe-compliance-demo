window.DEMO_DATA = {
  "records": [
    {
      "id": 1,
      "type": "glove",
      "label": "Ausência de Luvas",
      "image": "assets/evidence-01.jpg",
      "local_datetime": "2026-10-21T14:09:00-03:00",
      "original_file": "cd-01.png",
      "original_sha256": "d1296eebf4a8c07f830e53ddf6bca5932a3d51bb9e5400da67cce73452971584",
      "sheet_row": 2,
      "observation": {
        "subject": "a pessoa de colete laranja ao centro, junto à empilhadeira verde",
        "answers": {
          "helmet-visible": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.64,
            "probabilities": {
              "yes": 0.24,
              "no": 0.76,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "A cabeça do alvo está visível e descoberta, ou coberta apenas por boné, touca ou capuz de tecido.",
            "subject_ref": "a pessoa de colete laranja ao centro, junto à empilhadeira verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "gloves-visible": {
            "answer": "not_verifiable",
            "model_answer": "no",
            "confidence": 0.14,
            "probabilities": {
              "yes": 0.29,
              "no": 0.43,
              "not_verifiable": 0.28
            },
            "demoted": true,
            "criterion": "As mãos do alvo estão visíveis e desnudas.",
            "subject_ref": "a pessoa de colete laranja ao centro, junto à empilhadeira verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "vest-visible": {
            "answer": "yes",
            "model_answer": "yes",
            "confidence": 1.0,
            "probabilities": {
              "yes": 1.0,
              "no": 0.0,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "Colete de cor fluorescente com faixas retrorrefletivas vestido sobre o tronco do alvo.",
            "subject_ref": "a pessoa de colete laranja ao centro, junto à empilhadeira verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "earmuffs-visible": {
            "answer": "not_verifiable",
            "model_answer": "yes",
            "confidence": 0.31,
            "probabilities": {
              "yes": 0.54,
              "no": 0.36,
              "not_verifiable": 0.1
            },
            "demoted": true,
            "criterion": "Conchas rígidas cobrindo as orelhas do alvo, unidas por arco sobre a cabeça ou acopladas ao capacete.",
            "subject_ref": "a pessoa de colete laranja ao centro, junto à empilhadeira verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "eye-protection-visible": {
            "answer": "not_verifiable",
            "model_answer": "no",
            "confidence": 0.11,
            "probabilities": {
              "yes": 0.33,
              "no": 0.41,
              "not_verifiable": 0.26
            },
            "demoted": true,
            "criterion": "A região dos olhos do alvo está visível e não há lentes de proteção sobre ela. Óculos de grau comuns, sem proteção lateral, contam como não.",
            "subject_ref": "a pessoa de colete laranja ao centro, junto à empilhadeira verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "face-shield-visible": {
            "answer": "not_verifiable",
            "model_answer": "yes",
            "confidence": 0.25,
            "probabilities": {
              "yes": 0.5,
              "no": 0.49,
              "not_verifiable": 0.01
            },
            "demoted": true,
            "criterion": "Viseira transparente ou de tela cobrindo a face do alvo da testa ao queixo, presa a suporte na cabeça ou ao capacete.",
            "subject_ref": "a pessoa de colete laranja ao centro, junto à empilhadeira verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "respirator-visible": {
            "answer": "not_verifiable",
            "model_answer": "no",
            "confidence": 0.33,
            "probabilities": {
              "yes": 0.28,
              "no": 0.55,
              "not_verifiable": 0.17
            },
            "demoted": true,
            "criterion": "Nariz e boca do alvo estão visíveis e descobertos.",
            "subject_ref": "a pessoa de colete laranja ao centro, junto à empilhadeira verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "safety-footwear-visible": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.94,
            "probabilities": {
              "yes": 0.02,
              "no": 0.02,
              "not_verifiable": 0.96
            },
            "demoted": false,
            "criterion": "O alvo está calçado com bota ou sapato fechado, mas a imagem não permite distinguir calçado de segurança de calçado comum, ou os pés estão ocultos. Esta opção nunca significa ausência de calçado.",
            "subject_ref": "a pessoa de colete laranja ao centro, junto à empilhadeira verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "harness-visible": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.95,
            "probabilities": {
              "yes": 0.03,
              "no": 0.97,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "Não há fitas envolvendo as coxas do alvo. Responda não também quando houver apenas tirantes sobre os ombros presos a um cinto na cintura, como suspensórios ou cinto de ferramentas, que não são cinturão tipo paraquedista.",
            "subject_ref": "a pessoa de colete laranja ao centro, junto à empilhadeira verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "lanyard-connected": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.95,
            "probabilities": {
              "yes": 0.03,
              "no": 0.97,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "Nenhuma fita ou cabo liga o alvo a uma estrutura. Responda não também quando houver talabarte pendurado solto no corpo, sem conexão, ou corda de içamento de carga nas mãos do alvo, que não é talabarte.",
            "subject_ref": "a pessoa de colete laranja ao centro, junto à empilhadeira verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "lifeline-present": {
            "answer": "not_verifiable",
            "model_answer": "no",
            "confidence": 0.55,
            "probabilities": {
              "yes": 0.3,
              "no": 0.7,
              "not_verifiable": 0.0
            },
            "demoted": true,
            "criterion": "Não há cabo ou corda esticada entre pontos fixos no trajeto das pessoas.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "risk-area-signage": {
            "answer": "not_verifiable",
            "model_answer": "no",
            "confidence": 0.49,
            "probabilities": {
              "yes": 0.34,
              "no": 0.66,
              "not_verifiable": 0.0
            },
            "demoted": true,
            "criterion": "A área de trabalho está visível e não há nenhum elemento de sinalização instalado. Responda não também quando houver sinalização caída, rasgada ou ilegível.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "walkway-obstructed": {
            "answer": "yes",
            "model_answer": "yes",
            "confidence": 0.89,
            "probabilities": {
              "yes": 0.93,
              "no": 0.07,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "Há corda, cabo, ferramenta, entulho ou peça solta apoiada sobre a superfície de circulação ou de trabalho.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "confined-space-attendant": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.77,
            "probabilities": {
              "yes": 0.04,
              "no": 0.11,
              "not_verifiable": 0.85
            },
            "demoted": false,
            "criterion": "Não há abertura de espaço confinado nesta cena, ou ela não está visível. Esta opção nunca significa ausência de vigia.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          }
        },
        "preparation": {
          "original_size": [
            1920,
            1080
          ],
          "submitted_size": [
            1024,
            576
          ],
          "transformation": "EXIF transpose; RGB; longest side <=1024; JPEG quality=95",
          "submitted_sha256": "8e05ae15b2b989453cc5c48a2148d78ea78008636a3dec802a35037ce6884e82"
        }
      }
    },
    {
      "id": 3,
      "type": "glove",
      "label": "Ausência de Luvas",
      "image": "assets/evidence-03.jpg",
      "local_datetime": "2026-10-21T12:47:00-03:00",
      "original_file": "cd-03.png",
      "original_sha256": "49711b06485fe20d883880742e4fe69c8be31af7859e835b5d0e4f10a9e54fff",
      "sheet_row": 4,
      "observation": {
        "subject": "a pessoa de camisa escura e capacete azul, de frente, no centro da área verde",
        "answers": {
          "helmet-visible": {
            "answer": "yes",
            "model_answer": "yes",
            "confidence": 0.92,
            "probabilities": {
              "yes": 0.95,
              "no": 0.05,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "Casco rígido apoiado sobre a cabeça do alvo, cobrindo o crânio.",
            "subject_ref": "a pessoa de camisa escura e capacete azul, de frente, no centro da área verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "gloves-visible": {
            "answer": "not_verifiable",
            "model_answer": "no",
            "confidence": 0.52,
            "probabilities": {
              "yes": 0.26,
              "no": 0.68,
              "not_verifiable": 0.06
            },
            "demoted": true,
            "criterion": "As mãos do alvo estão visíveis e desnudas.",
            "subject_ref": "a pessoa de camisa escura e capacete azul, de frente, no centro da área verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "vest-visible": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.88,
            "probabilities": {
              "yes": 0.08,
              "no": 0.92,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "O tronco do alvo está visível e não há colete de alta visibilidade sobre ele. Camiseta ou camisa comum de cor viva conta como não.",
            "subject_ref": "a pessoa de camisa escura e capacete azul, de frente, no centro da área verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "earmuffs-visible": {
            "answer": "not_verifiable",
            "model_answer": "yes",
            "confidence": 0.48,
            "probabilities": {
              "yes": 0.65,
              "no": 0.26,
              "not_verifiable": 0.09
            },
            "demoted": true,
            "criterion": "Conchas rígidas cobrindo as orelhas do alvo, unidas por arco sobre a cabeça ou acopladas ao capacete.",
            "subject_ref": "a pessoa de camisa escura e capacete azul, de frente, no centro da área verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "eye-protection-visible": {
            "answer": "not_verifiable",
            "model_answer": "yes",
            "confidence": 0.2,
            "probabilities": {
              "yes": 0.47,
              "no": 0.37,
              "not_verifiable": 0.16
            },
            "demoted": true,
            "criterion": "Lentes de proteção posicionadas sobre os olhos do alvo, presas por hastes laterais ou elástico, cobrindo a órbita ocular.",
            "subject_ref": "a pessoa de camisa escura e capacete azul, de frente, no centro da área verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "face-shield-visible": {
            "answer": "not_verifiable",
            "model_answer": "yes",
            "confidence": 0.49,
            "probabilities": {
              "yes": 0.66,
              "no": 0.33,
              "not_verifiable": 0.01
            },
            "demoted": true,
            "criterion": "Viseira transparente ou de tela cobrindo a face do alvo da testa ao queixo, presa a suporte na cabeça ou ao capacete.",
            "subject_ref": "a pessoa de camisa escura e capacete azul, de frente, no centro da área verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "respirator-visible": {
            "answer": "not_verifiable",
            "model_answer": "no",
            "confidence": 0.41,
            "probabilities": {
              "yes": 0.32,
              "no": 0.61,
              "not_verifiable": 0.07
            },
            "demoted": true,
            "criterion": "Nariz e boca do alvo estão visíveis e descobertos.",
            "subject_ref": "a pessoa de camisa escura e capacete azul, de frente, no centro da área verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "safety-footwear-visible": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.88,
            "probabilities": {
              "yes": 0.07,
              "no": 0.01,
              "not_verifiable": 0.92
            },
            "demoted": false,
            "criterion": "O alvo está calçado com bota ou sapato fechado, mas a imagem não permite distinguir calçado de segurança de calçado comum, ou os pés estão ocultos. Esta opção nunca significa ausência de calçado.",
            "subject_ref": "a pessoa de camisa escura e capacete azul, de frente, no centro da área verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "harness-visible": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.86,
            "probabilities": {
              "yes": 0.09,
              "no": 0.91,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "Não há fitas envolvendo as coxas do alvo. Responda não também quando houver apenas tirantes sobre os ombros presos a um cinto na cintura, como suspensórios ou cinto de ferramentas, que não são cinturão tipo paraquedista.",
            "subject_ref": "a pessoa de camisa escura e capacete azul, de frente, no centro da área verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "lanyard-connected": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.91,
            "probabilities": {
              "yes": 0.06,
              "no": 0.9400000000000001,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "Nenhuma fita ou cabo liga o alvo a uma estrutura. Responda não também quando houver talabarte pendurado solto no corpo, sem conexão, ou corda de içamento de carga nas mãos do alvo, que não é talabarte.",
            "subject_ref": "a pessoa de camisa escura e capacete azul, de frente, no centro da área verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "lifeline-present": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.62,
            "probabilities": {
              "yes": 0.25,
              "no": 0.75,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "Não há cabo ou corda esticada entre pontos fixos no trajeto das pessoas.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "risk-area-signage": {
            "answer": "not_verifiable",
            "model_answer": "no",
            "confidence": 0.46,
            "probabilities": {
              "yes": 0.36,
              "no": 0.64,
              "not_verifiable": 0.0
            },
            "demoted": true,
            "criterion": "A área de trabalho está visível e não há nenhum elemento de sinalização instalado. Responda não também quando houver sinalização caída, rasgada ou ilegível.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "walkway-obstructed": {
            "answer": "yes",
            "model_answer": "yes",
            "confidence": 0.94,
            "probabilities": {
              "yes": 0.96,
              "no": 0.04,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "Há corda, cabo, ferramenta, entulho ou peça solta apoiada sobre a superfície de circulação ou de trabalho.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "confined-space-attendant": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.67,
            "probabilities": {
              "yes": 0.11,
              "no": 0.11,
              "not_verifiable": 0.78
            },
            "demoted": false,
            "criterion": "Não há abertura de espaço confinado nesta cena, ou ela não está visível. Esta opção nunca significa ausência de vigia.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          }
        },
        "preparation": {
          "original_size": [
            1920,
            1080
          ],
          "submitted_size": [
            1024,
            576
          ],
          "transformation": "EXIF transpose; RGB; longest side <=1024; JPEG quality=95",
          "submitted_sha256": "cd078c8c0b0c05a3bd05b9a1f1bfa9a93372556363059410560fb0977265484d"
        }
      }
    },
    {
      "id": 2,
      "type": "glove",
      "label": "Ausência de Luvas",
      "image": "assets/evidence-02.jpg",
      "local_datetime": "2026-10-21T12:46:00-03:00",
      "original_file": "cd-02.png",
      "original_sha256": "dc456313cfcadd2da55ddfb27f17fa15f3b3a93a07562973f5d687e725777cfb",
      "sheet_row": 3,
      "observation": {
        "subject": "a pessoa de colete laranja e capacete azul, de costas, no centro da área verde",
        "answers": {
          "helmet-visible": {
            "answer": "yes",
            "model_answer": "yes",
            "confidence": 0.98,
            "probabilities": {
              "yes": 0.99,
              "no": 0.01,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "Casco rígido apoiado sobre a cabeça do alvo, cobrindo o crânio.",
            "subject_ref": "a pessoa de colete laranja e capacete azul, de costas, no centro da área verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "gloves-visible": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.4,
            "probabilities": {
              "yes": 0.16,
              "no": 0.24,
              "not_verifiable": 0.6
            },
            "demoted": true,
            "criterion": "As mãos do alvo estão ocultas, fora de quadro, dentro de bolsos ou com resolução insuficiente. Esta opção nunca significa ausência de luvas.",
            "subject_ref": "a pessoa de colete laranja e capacete azul, de costas, no centro da área verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "vest-visible": {
            "answer": "yes",
            "model_answer": "yes",
            "confidence": 1.0,
            "probabilities": {
              "yes": 1.0,
              "no": 0.0,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "Colete de cor fluorescente com faixas retrorrefletivas vestido sobre o tronco do alvo.",
            "subject_ref": "a pessoa de colete laranja e capacete azul, de costas, no centro da área verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "earmuffs-visible": {
            "answer": "not_verifiable",
            "model_answer": "yes",
            "confidence": 0.18,
            "probabilities": {
              "yes": 0.45,
              "no": 0.18,
              "not_verifiable": 0.37
            },
            "demoted": true,
            "criterion": "Conchas rígidas cobrindo as orelhas do alvo, unidas por arco sobre a cabeça ou acopladas ao capacete.",
            "subject_ref": "a pessoa de colete laranja e capacete azul, de costas, no centro da área verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "eye-protection-visible": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.95,
            "probabilities": {
              "yes": 0.02,
              "no": 0.01,
              "not_verifiable": 0.97
            },
            "demoted": false,
            "criterion": "A região dos olhos do alvo está oculta, de costas, fora de quadro ou com resolução insuficiente. Esta opção nunca significa ausência de óculos.",
            "subject_ref": "a pessoa de colete laranja e capacete azul, de costas, no centro da área verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "face-shield-visible": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.61,
            "probabilities": {
              "yes": 0.14,
              "no": 0.12,
              "not_verifiable": 0.74
            },
            "demoted": false,
            "criterion": "A face do alvo está oculta, voltada para longe da câmera, fora de quadro ou com resolução insuficiente. Esta opção nunca significa ausência de protetor facial.",
            "subject_ref": "a pessoa de colete laranja e capacete azul, de costas, no centro da área verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "respirator-visible": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.91,
            "probabilities": {
              "yes": 0.03,
              "no": 0.03,
              "not_verifiable": 0.94
            },
            "demoted": false,
            "criterion": "A região de nariz e boca do alvo está oculta, voltada para longe da câmera, fora de quadro ou com resolução insuficiente. Esta opção nunca significa ausência de respirador.",
            "subject_ref": "a pessoa de colete laranja e capacete azul, de costas, no centro da área verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "safety-footwear-visible": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.95,
            "probabilities": {
              "yes": 0.02,
              "no": 0.01,
              "not_verifiable": 0.97
            },
            "demoted": false,
            "criterion": "O alvo está calçado com bota ou sapato fechado, mas a imagem não permite distinguir calçado de segurança de calçado comum, ou os pés estão ocultos. Esta opção nunca significa ausência de calçado.",
            "subject_ref": "a pessoa de colete laranja e capacete azul, de costas, no centro da área verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "harness-visible": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.91,
            "probabilities": {
              "yes": 0.05,
              "no": 0.94,
              "not_verifiable": 0.01
            },
            "demoted": false,
            "criterion": "Não há fitas envolvendo as coxas do alvo. Responda não também quando houver apenas tirantes sobre os ombros presos a um cinto na cintura, como suspensórios ou cinto de ferramentas, que não são cinturão tipo paraquedista.",
            "subject_ref": "a pessoa de colete laranja e capacete azul, de costas, no centro da área verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "lanyard-connected": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.91,
            "probabilities": {
              "yes": 0.05,
              "no": 0.94,
              "not_verifiable": 0.01
            },
            "demoted": false,
            "criterion": "Nenhuma fita ou cabo liga o alvo a uma estrutura. Responda não também quando houver talabarte pendurado solto no corpo, sem conexão, ou corda de içamento de carga nas mãos do alvo, que não é talabarte.",
            "subject_ref": "a pessoa de colete laranja e capacete azul, de costas, no centro da área verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "lifeline-present": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.67,
            "probabilities": {
              "yes": 0.22,
              "no": 0.78,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "Não há cabo ou corda esticada entre pontos fixos no trajeto das pessoas.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "risk-area-signage": {
            "answer": "not_verifiable",
            "model_answer": "no",
            "confidence": 0.49,
            "probabilities": {
              "yes": 0.34,
              "no": 0.66,
              "not_verifiable": 0.0
            },
            "demoted": true,
            "criterion": "A área de trabalho está visível e não há nenhum elemento de sinalização instalado. Responda não também quando houver sinalização caída, rasgada ou ilegível.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "walkway-obstructed": {
            "answer": "yes",
            "model_answer": "yes",
            "confidence": 0.95,
            "probabilities": {
              "yes": 0.97,
              "no": 0.03,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "Há corda, cabo, ferramenta, entulho ou peça solta apoiada sobre a superfície de circulação ou de trabalho.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "confined-space-attendant": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.77,
            "probabilities": {
              "yes": 0.05,
              "no": 0.1,
              "not_verifiable": 0.85
            },
            "demoted": false,
            "criterion": "Não há abertura de espaço confinado nesta cena, ou ela não está visível. Esta opção nunca significa ausência de vigia.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          }
        },
        "preparation": {
          "original_size": [
            1920,
            1080
          ],
          "submitted_size": [
            1024,
            576
          ],
          "transformation": "EXIF transpose; RGB; longest side <=1024; JPEG quality=95",
          "submitted_sha256": "c399161a43be0ca67f2c5be52cff00b3aeeab5d5de8cd2f870cdfeedb1f17f09"
        }
      }
    },
    {
      "id": 4,
      "type": "isolated_area",
      "label": "Circulação em Área Isolada",
      "image": "assets/evidence-04.jpg",
      "local_datetime": "2026-10-21T12:44:00-03:00",
      "original_file": "cd-04.png",
      "original_sha256": "53a9c53118dd9b87644624dc28bd63ac4e2b6cab218330a07877f2effb39bf3f",
      "sheet_row": 5,
      "observation": {
        "subject": "a pessoa de camiseta preta e calça jeans, à direita das duas pessoas próximas, delimitada pela caixa azul da direita",
        "answers": {
          "helmet-visible": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.72,
            "probabilities": {
              "yes": 0.19,
              "no": 0.81,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "A cabeça do alvo está visível e descoberta, ou coberta apenas por boné, touca ou capuz de tecido.",
            "subject_ref": "a pessoa de camiseta preta e calça jeans, à direita das duas pessoas próximas, delimitada pela caixa azul da direita",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "gloves-visible": {
            "answer": "not_verifiable",
            "model_answer": "no",
            "confidence": 0.58,
            "probabilities": {
              "yes": 0.27,
              "no": 0.72,
              "not_verifiable": 0.01
            },
            "demoted": true,
            "criterion": "As mãos do alvo estão visíveis e desnudas.",
            "subject_ref": "a pessoa de camiseta preta e calça jeans, à direita das duas pessoas próximas, delimitada pela caixa azul da direita",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "vest-visible": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 1.0,
            "probabilities": {
              "yes": 0.0,
              "no": 1.0,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "O tronco do alvo está visível e não há colete de alta visibilidade sobre ele. Camiseta ou camisa comum de cor viva conta como não.",
            "subject_ref": "a pessoa de camiseta preta e calça jeans, à direita das duas pessoas próximas, delimitada pela caixa azul da direita",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "earmuffs-visible": {
            "answer": "not_verifiable",
            "model_answer": "yes",
            "confidence": 0.25,
            "probabilities": {
              "yes": 0.5,
              "no": 0.48,
              "not_verifiable": 0.02
            },
            "demoted": true,
            "criterion": "Conchas rígidas cobrindo as orelhas do alvo, unidas por arco sobre a cabeça ou acopladas ao capacete.",
            "subject_ref": "a pessoa de camiseta preta e calça jeans, à direita das duas pessoas próximas, delimitada pela caixa azul da direita",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "eye-protection-visible": {
            "answer": "not_verifiable",
            "model_answer": "yes",
            "confidence": 0.31,
            "probabilities": {
              "yes": 0.54,
              "no": 0.43,
              "not_verifiable": 0.03
            },
            "demoted": true,
            "criterion": "Lentes de proteção posicionadas sobre os olhos do alvo, presas por hastes laterais ou elástico, cobrindo a órbita ocular.",
            "subject_ref": "a pessoa de camiseta preta e calça jeans, à direita das duas pessoas próximas, delimitada pela caixa azul da direita",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "face-shield-visible": {
            "answer": "not_verifiable",
            "model_answer": "yes",
            "confidence": 0.53,
            "probabilities": {
              "yes": 0.69,
              "no": 0.31,
              "not_verifiable": 0.0
            },
            "demoted": true,
            "criterion": "Viseira transparente ou de tela cobrindo a face do alvo da testa ao queixo, presa a suporte na cabeça ou ao capacete.",
            "subject_ref": "a pessoa de camiseta preta e calça jeans, à direita das duas pessoas próximas, delimitada pela caixa azul da direita",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "respirator-visible": {
            "answer": "yes",
            "model_answer": "yes",
            "confidence": 0.67,
            "probabilities": {
              "yes": 0.78,
              "no": 0.21,
              "not_verifiable": 0.01
            },
            "demoted": false,
            "criterion": "Peça facial cobrindo nariz e boca do alvo, presa por tirantes, com ou sem filtros ou cartuchos laterais.",
            "subject_ref": "a pessoa de camiseta preta e calça jeans, à direita das duas pessoas próximas, delimitada pela caixa azul da direita",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "safety-footwear-visible": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.82,
            "probabilities": {
              "yes": 0.03,
              "no": 0.09,
              "not_verifiable": 0.88
            },
            "demoted": false,
            "criterion": "O alvo está calçado com bota ou sapato fechado, mas a imagem não permite distinguir calçado de segurança de calçado comum, ou os pés estão ocultos. Esta opção nunca significa ausência de calçado.",
            "subject_ref": "a pessoa de camiseta preta e calça jeans, à direita das duas pessoas próximas, delimitada pela caixa azul da direita",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "harness-visible": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.91,
            "probabilities": {
              "yes": 0.06,
              "no": 0.94,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "Não há fitas envolvendo as coxas do alvo. Responda não também quando houver apenas tirantes sobre os ombros presos a um cinto na cintura, como suspensórios ou cinto de ferramentas, que não são cinturão tipo paraquedista.",
            "subject_ref": "a pessoa de camiseta preta e calça jeans, à direita das duas pessoas próximas, delimitada pela caixa azul da direita",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "lanyard-connected": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.85,
            "probabilities": {
              "yes": 0.1,
              "no": 0.9,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "Nenhuma fita ou cabo liga o alvo a uma estrutura. Responda não também quando houver talabarte pendurado solto no corpo, sem conexão, ou corda de içamento de carga nas mãos do alvo, que não é talabarte.",
            "subject_ref": "a pessoa de camiseta preta e calça jeans, à direita das duas pessoas próximas, delimitada pela caixa azul da direita",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "lifeline-present": {
            "answer": "not_verifiable",
            "model_answer": "no",
            "confidence": 0.58,
            "probabilities": {
              "yes": 0.28,
              "no": 0.72,
              "not_verifiable": 0.0
            },
            "demoted": true,
            "criterion": "Não há cabo ou corda esticada entre pontos fixos no trajeto das pessoas.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "risk-area-signage": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.89,
            "probabilities": {
              "yes": 0.07,
              "no": 0.93,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "A área de trabalho está visível e não há nenhum elemento de sinalização instalado. Responda não também quando houver sinalização caída, rasgada ou ilegível.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "walkway-obstructed": {
            "answer": "not_verifiable",
            "model_answer": "no",
            "confidence": 0.43,
            "probabilities": {
              "yes": 0.38,
              "no": 0.62,
              "not_verifiable": 0.0
            },
            "demoted": true,
            "criterion": "A superfície de circulação está desimpedida.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "confined-space-attendant": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.62,
            "probabilities": {
              "yes": 0.13,
              "no": 0.12,
              "not_verifiable": 0.75
            },
            "demoted": false,
            "criterion": "Não há abertura de espaço confinado nesta cena, ou ela não está visível. Esta opção nunca significa ausência de vigia.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          }
        },
        "preparation": {
          "original_size": [
            1920,
            1080
          ],
          "submitted_size": [
            1024,
            576
          ],
          "transformation": "EXIF transpose; RGB; longest side <=1024; JPEG quality=95",
          "submitted_sha256": "fdbe24f7702cb9ec45c08dd3ef9f97f37d506ef8e4130b6dca991039bdd81461"
        }
      }
    },
    {
      "id": 5,
      "type": "safety_helmet",
      "label": "Ausência de Capacete",
      "image": "assets/evidence-05.jpg",
      "local_datetime": "2026-10-21T12:40:00-03:00",
      "original_file": "cd-05.png",
      "original_sha256": "b39d5441417009cf546b884f04e809a7d24491566dd96dbf9824b4dc012cad45",
      "sheet_row": 6,
      "observation": {
        "subject": "a pessoa de colete laranja, de costas, no lado esquerdo da área verde",
        "answers": {
          "helmet-visible": {
            "answer": "not_verifiable",
            "model_answer": "no",
            "confidence": 0.55,
            "probabilities": {
              "yes": 0.29,
              "no": 0.7,
              "not_verifiable": 0.01
            },
            "demoted": true,
            "criterion": "A cabeça do alvo está visível e descoberta, ou coberta apenas por boné, touca ou capuz de tecido.",
            "subject_ref": "a pessoa de colete laranja, de costas, no lado esquerdo da área verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "gloves-visible": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.62,
            "probabilities": {
              "yes": 0.18,
              "no": 0.07,
              "not_verifiable": 0.75
            },
            "demoted": false,
            "criterion": "As mãos do alvo estão ocultas, fora de quadro, dentro de bolsos ou com resolução insuficiente. Esta opção nunca significa ausência de luvas.",
            "subject_ref": "a pessoa de colete laranja, de costas, no lado esquerdo da área verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "vest-visible": {
            "answer": "yes",
            "model_answer": "yes",
            "confidence": 1.0,
            "probabilities": {
              "yes": 1.0,
              "no": 0.0,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "Colete de cor fluorescente com faixas retrorrefletivas vestido sobre o tronco do alvo.",
            "subject_ref": "a pessoa de colete laranja, de costas, no lado esquerdo da área verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "earmuffs-visible": {
            "answer": "not_verifiable",
            "model_answer": "yes",
            "confidence": 0.2,
            "probabilities": {
              "yes": 0.47,
              "no": 0.13,
              "not_verifiable": 0.4
            },
            "demoted": true,
            "criterion": "Conchas rígidas cobrindo as orelhas do alvo, unidas por arco sobre a cabeça ou acopladas ao capacete.",
            "subject_ref": "a pessoa de colete laranja, de costas, no lado esquerdo da área verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "eye-protection-visible": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 1.0,
            "probabilities": {
              "yes": 0.0,
              "no": 0.0,
              "not_verifiable": 1.0
            },
            "demoted": false,
            "criterion": "A região dos olhos do alvo está oculta, de costas, fora de quadro ou com resolução insuficiente. Esta opção nunca significa ausência de óculos.",
            "subject_ref": "a pessoa de colete laranja, de costas, no lado esquerdo da área verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "face-shield-visible": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.8,
            "probabilities": {
              "yes": 0.08,
              "no": 0.05,
              "not_verifiable": 0.87
            },
            "demoted": false,
            "criterion": "A face do alvo está oculta, voltada para longe da câmera, fora de quadro ou com resolução insuficiente. Esta opção nunca significa ausência de protetor facial.",
            "subject_ref": "a pessoa de colete laranja, de costas, no lado esquerdo da área verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "respirator-visible": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.94,
            "probabilities": {
              "yes": 0.03,
              "no": 0.01,
              "not_verifiable": 0.96
            },
            "demoted": false,
            "criterion": "A região de nariz e boca do alvo está oculta, voltada para longe da câmera, fora de quadro ou com resolução insuficiente. Esta opção nunca significa ausência de respirador.",
            "subject_ref": "a pessoa de colete laranja, de costas, no lado esquerdo da área verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "safety-footwear-visible": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.95,
            "probabilities": {
              "yes": 0.02,
              "no": 0.01,
              "not_verifiable": 0.97
            },
            "demoted": false,
            "criterion": "O alvo está calçado com bota ou sapato fechado, mas a imagem não permite distinguir calçado de segurança de calçado comum, ou os pés estão ocultos. Esta opção nunca significa ausência de calçado.",
            "subject_ref": "a pessoa de colete laranja, de costas, no lado esquerdo da área verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "harness-visible": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.88,
            "probabilities": {
              "yes": 0.05,
              "no": 0.92,
              "not_verifiable": 0.03
            },
            "demoted": false,
            "criterion": "Não há fitas envolvendo as coxas do alvo. Responda não também quando houver apenas tirantes sobre os ombros presos a um cinto na cintura, como suspensórios ou cinto de ferramentas, que não são cinturão tipo paraquedista.",
            "subject_ref": "a pessoa de colete laranja, de costas, no lado esquerdo da área verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "lanyard-connected": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.94,
            "probabilities": {
              "yes": 0.03,
              "no": 0.96,
              "not_verifiable": 0.01
            },
            "demoted": false,
            "criterion": "Nenhuma fita ou cabo liga o alvo a uma estrutura. Responda não também quando houver talabarte pendurado solto no corpo, sem conexão, ou corda de içamento de carga nas mãos do alvo, que não é talabarte.",
            "subject_ref": "a pessoa de colete laranja, de costas, no lado esquerdo da área verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "lifeline-present": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.74,
            "probabilities": {
              "yes": 0.17,
              "no": 0.83,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "Não há cabo ou corda esticada entre pontos fixos no trajeto das pessoas.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "risk-area-signage": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.79,
            "probabilities": {
              "yes": 0.14,
              "no": 0.86,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "A área de trabalho está visível e não há nenhum elemento de sinalização instalado. Responda não também quando houver sinalização caída, rasgada ou ilegível.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "walkway-obstructed": {
            "answer": "yes",
            "model_answer": "yes",
            "confidence": 0.95,
            "probabilities": {
              "yes": 0.97,
              "no": 0.03,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "Há corda, cabo, ferramenta, entulho ou peça solta apoiada sobre a superfície de circulação ou de trabalho.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "confined-space-attendant": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.56,
            "probabilities": {
              "yes": 0.15,
              "no": 0.14,
              "not_verifiable": 0.71
            },
            "demoted": true,
            "criterion": "Não há abertura de espaço confinado nesta cena, ou ela não está visível. Esta opção nunca significa ausência de vigia.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          }
        },
        "preparation": {
          "original_size": [
            1920,
            1080
          ],
          "submitted_size": [
            1024,
            576
          ],
          "transformation": "EXIF transpose; RGB; longest side <=1024; JPEG quality=95",
          "submitted_sha256": "1d2caaee29c2610d37b1588ecb270ff9cf4392661c1dcf0d84867059d9678e8b"
        }
      }
    },
    {
      "id": 6,
      "type": "isolated_area",
      "label": "Circulação em Área Isolada",
      "image": "assets/evidence-06.jpg",
      "local_datetime": "2026-10-21T12:39:00-03:00",
      "original_file": "cd-06.png",
      "original_sha256": "4aeb6bdfb5c7a45330fb9c8192dec260332d4fb4eb1910805a7fe2e95d6948d4",
      "sheet_row": 7,
      "observation": {
        "subject": "a pessoa de camisa escura à direita da imagem, delimitada pela caixa azul, junto ao pilar direito",
        "answers": {
          "helmet-visible": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.66,
            "probabilities": {
              "yes": 0.23,
              "no": 0.77,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "A cabeça do alvo está visível e descoberta, ou coberta apenas por boné, touca ou capuz de tecido.",
            "subject_ref": "a pessoa de camisa escura à direita da imagem, delimitada pela caixa azul, junto ao pilar direito",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "gloves-visible": {
            "answer": "not_verifiable",
            "model_answer": "yes",
            "confidence": 0.49,
            "probabilities": {
              "yes": 0.66,
              "no": 0.26,
              "not_verifiable": 0.08
            },
            "demoted": true,
            "criterion": "Luvas cobrindo as mãos do alvo, visíveis em pelo menos uma das mãos.",
            "subject_ref": "a pessoa de camisa escura à direita da imagem, delimitada pela caixa azul, junto ao pilar direito",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "vest-visible": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 1.0,
            "probabilities": {
              "yes": 0.0,
              "no": 1.0,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "O tronco do alvo está visível e não há colete de alta visibilidade sobre ele. Camiseta ou camisa comum de cor viva conta como não.",
            "subject_ref": "a pessoa de camisa escura à direita da imagem, delimitada pela caixa azul, junto ao pilar direito",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "earmuffs-visible": {
            "answer": "not_verifiable",
            "model_answer": "yes",
            "confidence": 0.22,
            "probabilities": {
              "yes": 0.48,
              "no": 0.33,
              "not_verifiable": 0.19
            },
            "demoted": true,
            "criterion": "Conchas rígidas cobrindo as orelhas do alvo, unidas por arco sobre a cabeça ou acopladas ao capacete.",
            "subject_ref": "a pessoa de camisa escura à direita da imagem, delimitada pela caixa azul, junto ao pilar direito",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "eye-protection-visible": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.09,
            "probabilities": {
              "yes": 0.25,
              "no": 0.36,
              "not_verifiable": 0.39
            },
            "demoted": true,
            "criterion": "A região dos olhos do alvo está oculta, de costas, fora de quadro ou com resolução insuficiente. Esta opção nunca significa ausência de óculos.",
            "subject_ref": "a pessoa de camisa escura à direita da imagem, delimitada pela caixa azul, junto ao pilar direito",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "face-shield-visible": {
            "answer": "not_verifiable",
            "model_answer": "no",
            "confidence": 0.27,
            "probabilities": {
              "yes": 0.43,
              "no": 0.51,
              "not_verifiable": 0.06
            },
            "demoted": true,
            "criterion": "A face do alvo está visível e descoberta. Capacete sem viseira conta como não.",
            "subject_ref": "a pessoa de camisa escura à direita da imagem, delimitada pela caixa azul, junto ao pilar direito",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "respirator-visible": {
            "answer": "not_verifiable",
            "model_answer": "no",
            "confidence": 0.19,
            "probabilities": {
              "yes": 0.26,
              "no": 0.45999999999999996,
              "not_verifiable": 0.28
            },
            "demoted": true,
            "criterion": "Nariz e boca do alvo estão visíveis e descobertos.",
            "subject_ref": "a pessoa de camisa escura à direita da imagem, delimitada pela caixa azul, junto ao pilar direito",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "safety-footwear-visible": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.86,
            "probabilities": {
              "yes": 0.07,
              "no": 0.02,
              "not_verifiable": 0.91
            },
            "demoted": false,
            "criterion": "O alvo está calçado com bota ou sapato fechado, mas a imagem não permite distinguir calçado de segurança de calçado comum, ou os pés estão ocultos. Esta opção nunca significa ausência de calçado.",
            "subject_ref": "a pessoa de camisa escura à direita da imagem, delimitada pela caixa azul, junto ao pilar direito",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "harness-visible": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.91,
            "probabilities": {
              "yes": 0.05,
              "no": 0.94,
              "not_verifiable": 0.01
            },
            "demoted": false,
            "criterion": "Não há fitas envolvendo as coxas do alvo. Responda não também quando houver apenas tirantes sobre os ombros presos a um cinto na cintura, como suspensórios ou cinto de ferramentas, que não são cinturão tipo paraquedista.",
            "subject_ref": "a pessoa de camisa escura à direita da imagem, delimitada pela caixa azul, junto ao pilar direito",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "lanyard-connected": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.94,
            "probabilities": {
              "yes": 0.04,
              "no": 0.96,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "Nenhuma fita ou cabo liga o alvo a uma estrutura. Responda não também quando houver talabarte pendurado solto no corpo, sem conexão, ou corda de içamento de carga nas mãos do alvo, que não é talabarte.",
            "subject_ref": "a pessoa de camisa escura à direita da imagem, delimitada pela caixa azul, junto ao pilar direito",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "lifeline-present": {
            "answer": "not_verifiable",
            "model_answer": "no",
            "confidence": 0.51,
            "probabilities": {
              "yes": 0.33,
              "no": 0.67,
              "not_verifiable": 0.0
            },
            "demoted": true,
            "criterion": "Não há cabo ou corda esticada entre pontos fixos no trajeto das pessoas.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "risk-area-signage": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.66,
            "probabilities": {
              "yes": 0.23,
              "no": 0.77,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "A área de trabalho está visível e não há nenhum elemento de sinalização instalado. Responda não também quando houver sinalização caída, rasgada ou ilegível.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "walkway-obstructed": {
            "answer": "yes",
            "model_answer": "yes",
            "confidence": 0.91,
            "probabilities": {
              "yes": 0.94,
              "no": 0.06,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "Há corda, cabo, ferramenta, entulho ou peça solta apoiada sobre a superfície de circulação ou de trabalho.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "confined-space-attendant": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.8,
            "probabilities": {
              "yes": 0.04,
              "no": 0.09,
              "not_verifiable": 0.87
            },
            "demoted": false,
            "criterion": "Não há abertura de espaço confinado nesta cena, ou ela não está visível. Esta opção nunca significa ausência de vigia.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          }
        },
        "preparation": {
          "original_size": [
            1920,
            1080
          ],
          "submitted_size": [
            1024,
            576
          ],
          "transformation": "EXIF transpose; RGB; longest side <=1024; JPEG quality=95",
          "submitted_sha256": "166ebd95a5849378b27aa73e317e2a514a938bedca05b63bead061b24c28daa9"
        }
      }
    },
    {
      "id": 7,
      "type": "safety_vest",
      "label": "Ausência de Colete",
      "image": "assets/evidence-07.jpg",
      "local_datetime": "2026-10-21T12:38:00-03:00",
      "original_file": "cd-07.png",
      "original_sha256": "0c348132d7351835dc09b5763615b044eaee41c79abb46264a67efcfe66edea4",
      "sheet_row": 8,
      "observation": {
        "subject": "a pessoa de roupa escura caminhando na área verde ao centro, cujo tronco tem um retângulo verde",
        "answers": {
          "helmet-visible": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.7,
            "probabilities": {
              "yes": 0.17,
              "no": 0.8,
              "not_verifiable": 0.03
            },
            "demoted": false,
            "criterion": "A cabeça do alvo está visível e descoberta, ou coberta apenas por boné, touca ou capuz de tecido.",
            "subject_ref": "a pessoa de roupa escura caminhando na área verde ao centro, cujo tronco tem um retângulo verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "gloves-visible": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.8,
            "probabilities": {
              "yes": 0.06,
              "no": 0.07,
              "not_verifiable": 0.87
            },
            "demoted": false,
            "criterion": "As mãos do alvo estão ocultas, fora de quadro, dentro de bolsos ou com resolução insuficiente. Esta opção nunca significa ausência de luvas.",
            "subject_ref": "a pessoa de roupa escura caminhando na área verde ao centro, cujo tronco tem um retângulo verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "vest-visible": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.88,
            "probabilities": {
              "yes": 0.07,
              "no": 0.92,
              "not_verifiable": 0.01
            },
            "demoted": false,
            "criterion": "O tronco do alvo está visível e não há colete de alta visibilidade sobre ele. Camiseta ou camisa comum de cor viva conta como não.",
            "subject_ref": "a pessoa de roupa escura caminhando na área verde ao centro, cujo tronco tem um retângulo verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "earmuffs-visible": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.37,
            "probabilities": {
              "yes": 0.35,
              "no": 0.07,
              "not_verifiable": 0.58
            },
            "demoted": true,
            "criterion": "A região das orelhas do alvo está oculta, fora de quadro ou com resolução insuficiente. Esta opção nunca significa ausência de protetor.",
            "subject_ref": "a pessoa de roupa escura caminhando na área verde ao centro, cujo tronco tem um retângulo verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "eye-protection-visible": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.85,
            "probabilities": {
              "yes": 0.04,
              "no": 0.06,
              "not_verifiable": 0.9
            },
            "demoted": false,
            "criterion": "A região dos olhos do alvo está oculta, de costas, fora de quadro ou com resolução insuficiente. Esta opção nunca significa ausência de óculos.",
            "subject_ref": "a pessoa de roupa escura caminhando na área verde ao centro, cujo tronco tem um retângulo verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "face-shield-visible": {
            "answer": "not_verifiable",
            "model_answer": "yes",
            "confidence": 0.07,
            "probabilities": {
              "yes": 0.38,
              "no": 0.25,
              "not_verifiable": 0.37
            },
            "demoted": true,
            "criterion": "Viseira transparente ou de tela cobrindo a face do alvo da testa ao queixo, presa a suporte na cabeça ou ao capacete.",
            "subject_ref": "a pessoa de roupa escura caminhando na área verde ao centro, cujo tronco tem um retângulo verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "respirator-visible": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.62,
            "probabilities": {
              "yes": 0.2,
              "no": 0.05,
              "not_verifiable": 0.75
            },
            "demoted": false,
            "criterion": "A região de nariz e boca do alvo está oculta, voltada para longe da câmera, fora de quadro ou com resolução insuficiente. Esta opção nunca significa ausência de respirador.",
            "subject_ref": "a pessoa de roupa escura caminhando na área verde ao centro, cujo tronco tem um retângulo verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "safety-footwear-visible": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.94,
            "probabilities": {
              "yes": 0.01,
              "no": 0.03,
              "not_verifiable": 0.96
            },
            "demoted": false,
            "criterion": "O alvo está calçado com bota ou sapato fechado, mas a imagem não permite distinguir calçado de segurança de calçado comum, ou os pés estão ocultos. Esta opção nunca significa ausência de calçado.",
            "subject_ref": "a pessoa de roupa escura caminhando na área verde ao centro, cujo tronco tem um retângulo verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "harness-visible": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.89,
            "probabilities": {
              "yes": 0.01,
              "no": 0.93,
              "not_verifiable": 0.06
            },
            "demoted": false,
            "criterion": "Não há fitas envolvendo as coxas do alvo. Responda não também quando houver apenas tirantes sobre os ombros presos a um cinto na cintura, como suspensórios ou cinto de ferramentas, que não são cinturão tipo paraquedista.",
            "subject_ref": "a pessoa de roupa escura caminhando na área verde ao centro, cujo tronco tem um retângulo verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "lanyard-connected": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.97,
            "probabilities": {
              "yes": 0.02,
              "no": 0.98,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "Nenhuma fita ou cabo liga o alvo a uma estrutura. Responda não também quando houver talabarte pendurado solto no corpo, sem conexão, ou corda de içamento de carga nas mãos do alvo, que não é talabarte.",
            "subject_ref": "a pessoa de roupa escura caminhando na área verde ao centro, cujo tronco tem um retângulo verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "lifeline-present": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.7,
            "probabilities": {
              "yes": 0.2,
              "no": 0.8,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "Não há cabo ou corda esticada entre pontos fixos no trajeto das pessoas.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "risk-area-signage": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.7,
            "probabilities": {
              "yes": 0.2,
              "no": 0.8,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "A área de trabalho está visível e não há nenhum elemento de sinalização instalado. Responda não também quando houver sinalização caída, rasgada ou ilegível.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "walkway-obstructed": {
            "answer": "yes",
            "model_answer": "yes",
            "confidence": 0.95,
            "probabilities": {
              "yes": 0.97,
              "no": 0.03,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "Há corda, cabo, ferramenta, entulho ou peça solta apoiada sobre a superfície de circulação ou de trabalho.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "confined-space-attendant": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.48,
            "probabilities": {
              "yes": 0.12,
              "no": 0.23,
              "not_verifiable": 0.65
            },
            "demoted": true,
            "criterion": "Não há abertura de espaço confinado nesta cena, ou ela não está visível. Esta opção nunca significa ausência de vigia.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          }
        },
        "preparation": {
          "original_size": [
            1920,
            1080
          ],
          "submitted_size": [
            1024,
            576
          ],
          "transformation": "EXIF transpose; RGB; longest side <=1024; JPEG quality=95",
          "submitted_sha256": "27a5093797b1f58c37f26cb27426834869581e97b907e809542ccde136cfed76"
        }
      }
    },
    {
      "id": 8,
      "type": "safety_vest",
      "label": "Ausência de Colete",
      "image": "assets/evidence-08.jpg",
      "local_datetime": "2026-10-21T12:23:00-03:00",
      "original_file": "cd-08.png",
      "original_sha256": "0c348132d7351835dc09b5763615b044eaee41c79abb46264a67efcfe66edea4",
      "sheet_row": 9,
      "observation": {
        "subject": "a pessoa de roupa escura caminhando na área verde ao centro, cujo tronco tem um retângulo verde",
        "answers": {
          "helmet-visible": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.7,
            "probabilities": {
              "yes": 0.17,
              "no": 0.8,
              "not_verifiable": 0.02
            },
            "demoted": false,
            "criterion": "A cabeça do alvo está visível e descoberta, ou coberta apenas por boné, touca ou capuz de tecido.",
            "subject_ref": "a pessoa de roupa escura caminhando na área verde ao centro, cujo tronco tem um retângulo verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "gloves-visible": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.83,
            "probabilities": {
              "yes": 0.06,
              "no": 0.05,
              "not_verifiable": 0.89
            },
            "demoted": false,
            "criterion": "As mãos do alvo estão ocultas, fora de quadro, dentro de bolsos ou com resolução insuficiente. Esta opção nunca significa ausência de luvas.",
            "subject_ref": "a pessoa de roupa escura caminhando na área verde ao centro, cujo tronco tem um retângulo verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "vest-visible": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.85,
            "probabilities": {
              "yes": 0.09,
              "no": 0.9,
              "not_verifiable": 0.01
            },
            "demoted": false,
            "criterion": "O tronco do alvo está visível e não há colete de alta visibilidade sobre ele. Camiseta ou camisa comum de cor viva conta como não.",
            "subject_ref": "a pessoa de roupa escura caminhando na área verde ao centro, cujo tronco tem um retângulo verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "earmuffs-visible": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.25,
            "probabilities": {
              "yes": 0.41,
              "no": 0.09,
              "not_verifiable": 0.5
            },
            "demoted": true,
            "criterion": "A região das orelhas do alvo está oculta, fora de quadro ou com resolução insuficiente. Esta opção nunca significa ausência de protetor.",
            "subject_ref": "a pessoa de roupa escura caminhando na área verde ao centro, cujo tronco tem um retângulo verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "eye-protection-visible": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.83,
            "probabilities": {
              "yes": 0.05,
              "no": 0.06,
              "not_verifiable": 0.89
            },
            "demoted": false,
            "criterion": "A região dos olhos do alvo está oculta, de costas, fora de quadro ou com resolução insuficiente. Esta opção nunca significa ausência de óculos.",
            "subject_ref": "a pessoa de roupa escura caminhando na área verde ao centro, cujo tronco tem um retângulo verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "face-shield-visible": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.18,
            "probabilities": {
              "yes": 0.33,
              "no": 0.22,
              "not_verifiable": 0.45
            },
            "demoted": true,
            "criterion": "A face do alvo está oculta, voltada para longe da câmera, fora de quadro ou com resolução insuficiente. Esta opção nunca significa ausência de protetor facial.",
            "subject_ref": "a pessoa de roupa escura caminhando na área verde ao centro, cujo tronco tem um retângulo verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "respirator-visible": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.56,
            "probabilities": {
              "yes": 0.23,
              "no": 0.06,
              "not_verifiable": 0.71
            },
            "demoted": true,
            "criterion": "A região de nariz e boca do alvo está oculta, voltada para longe da câmera, fora de quadro ou com resolução insuficiente. Esta opção nunca significa ausência de respirador.",
            "subject_ref": "a pessoa de roupa escura caminhando na área verde ao centro, cujo tronco tem um retângulo verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "safety-footwear-visible": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.95,
            "probabilities": {
              "yes": 0.0,
              "no": 0.03,
              "not_verifiable": 0.97
            },
            "demoted": false,
            "criterion": "O alvo está calçado com bota ou sapato fechado, mas a imagem não permite distinguir calçado de segurança de calçado comum, ou os pés estão ocultos. Esta opção nunca significa ausência de calçado.",
            "subject_ref": "a pessoa de roupa escura caminhando na área verde ao centro, cujo tronco tem um retângulo verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "harness-visible": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.86,
            "probabilities": {
              "yes": 0.01,
              "no": 0.91,
              "not_verifiable": 0.08
            },
            "demoted": false,
            "criterion": "Não há fitas envolvendo as coxas do alvo. Responda não também quando houver apenas tirantes sobre os ombros presos a um cinto na cintura, como suspensórios ou cinto de ferramentas, que não são cinturão tipo paraquedista.",
            "subject_ref": "a pessoa de roupa escura caminhando na área verde ao centro, cujo tronco tem um retângulo verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "lanyard-connected": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.97,
            "probabilities": {
              "yes": 0.02,
              "no": 0.98,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "Nenhuma fita ou cabo liga o alvo a uma estrutura. Responda não também quando houver talabarte pendurado solto no corpo, sem conexão, ou corda de içamento de carga nas mãos do alvo, que não é talabarte.",
            "subject_ref": "a pessoa de roupa escura caminhando na área verde ao centro, cujo tronco tem um retângulo verde",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "lifeline-present": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.72,
            "probabilities": {
              "yes": 0.19,
              "no": 0.81,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "Não há cabo ou corda esticada entre pontos fixos no trajeto das pessoas.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "risk-area-signage": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.73,
            "probabilities": {
              "yes": 0.18,
              "no": 0.8200000000000001,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "A área de trabalho está visível e não há nenhum elemento de sinalização instalado. Responda não também quando houver sinalização caída, rasgada ou ilegível.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "walkway-obstructed": {
            "answer": "yes",
            "model_answer": "yes",
            "confidence": 0.95,
            "probabilities": {
              "yes": 0.97,
              "no": 0.03,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "Há corda, cabo, ferramenta, entulho ou peça solta apoiada sobre a superfície de circulação ou de trabalho.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "confined-space-attendant": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.45,
            "probabilities": {
              "yes": 0.11,
              "no": 0.26,
              "not_verifiable": 0.63
            },
            "demoted": true,
            "criterion": "Não há abertura de espaço confinado nesta cena, ou ela não está visível. Esta opção nunca significa ausência de vigia.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          }
        },
        "preparation": {
          "original_size": [
            1920,
            1080
          ],
          "submitted_size": [
            1024,
            576
          ],
          "transformation": "EXIF transpose; RGB; longest side <=1024; JPEG quality=95",
          "submitted_sha256": "27a5093797b1f58c37f26cb27426834869581e97b907e809542ccde136cfed76"
        }
      }
    },
    {
      "id": 9,
      "type": "isolated_area",
      "label": "Circulação em Área Isolada",
      "image": "assets/evidence-09.jpg",
      "local_datetime": "2026-10-21T12:14:00-03:00",
      "original_file": "cd-09.png",
      "original_sha256": "53a9c53118dd9b87644624dc28bd63ac4e2b6cab218330a07877f2effb39bf3f",
      "sheet_row": 10,
      "observation": {
        "subject": "a pessoa de camiseta preta e calça jeans, à direita das duas pessoas próximas, delimitada pela caixa azul da direita",
        "answers": {
          "helmet-visible": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.67,
            "probabilities": {
              "yes": 0.22,
              "no": 0.78,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "A cabeça do alvo está visível e descoberta, ou coberta apenas por boné, touca ou capuz de tecido.",
            "subject_ref": "a pessoa de camiseta preta e calça jeans, à direita das duas pessoas próximas, delimitada pela caixa azul da direita",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "gloves-visible": {
            "answer": "not_verifiable",
            "model_answer": "no",
            "confidence": 0.58,
            "probabilities": {
              "yes": 0.27,
              "no": 0.72,
              "not_verifiable": 0.01
            },
            "demoted": true,
            "criterion": "As mãos do alvo estão visíveis e desnudas.",
            "subject_ref": "a pessoa de camiseta preta e calça jeans, à direita das duas pessoas próximas, delimitada pela caixa azul da direita",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "vest-visible": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 1.0,
            "probabilities": {
              "yes": 0.0,
              "no": 1.0,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "O tronco do alvo está visível e não há colete de alta visibilidade sobre ele. Camiseta ou camisa comum de cor viva conta como não.",
            "subject_ref": "a pessoa de camiseta preta e calça jeans, à direita das duas pessoas próximas, delimitada pela caixa azul da direita",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "earmuffs-visible": {
            "answer": "not_verifiable",
            "model_answer": "yes",
            "confidence": 0.28,
            "probabilities": {
              "yes": 0.52,
              "no": 0.46,
              "not_verifiable": 0.02
            },
            "demoted": true,
            "criterion": "Conchas rígidas cobrindo as orelhas do alvo, unidas por arco sobre a cabeça ou acopladas ao capacete.",
            "subject_ref": "a pessoa de camiseta preta e calça jeans, à direita das duas pessoas próximas, delimitada pela caixa azul da direita",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "eye-protection-visible": {
            "answer": "not_verifiable",
            "model_answer": "yes",
            "confidence": 0.3,
            "probabilities": {
              "yes": 0.53,
              "no": 0.45,
              "not_verifiable": 0.02
            },
            "demoted": true,
            "criterion": "Lentes de proteção posicionadas sobre os olhos do alvo, presas por hastes laterais ou elástico, cobrindo a órbita ocular.",
            "subject_ref": "a pessoa de camiseta preta e calça jeans, à direita das duas pessoas próximas, delimitada pela caixa azul da direita",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "face-shield-visible": {
            "answer": "not_verifiable",
            "model_answer": "yes",
            "confidence": 0.56,
            "probabilities": {
              "yes": 0.71,
              "no": 0.29,
              "not_verifiable": 0.0
            },
            "demoted": true,
            "criterion": "Viseira transparente ou de tela cobrindo a face do alvo da testa ao queixo, presa a suporte na cabeça ou ao capacete.",
            "subject_ref": "a pessoa de camiseta preta e calça jeans, à direita das duas pessoas próximas, delimitada pela caixa azul da direita",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "respirator-visible": {
            "answer": "yes",
            "model_answer": "yes",
            "confidence": 0.71,
            "probabilities": {
              "yes": 0.8099999999999999,
              "no": 0.18,
              "not_verifiable": 0.01
            },
            "demoted": false,
            "criterion": "Peça facial cobrindo nariz e boca do alvo, presa por tirantes, com ou sem filtros ou cartuchos laterais.",
            "subject_ref": "a pessoa de camiseta preta e calça jeans, à direita das duas pessoas próximas, delimitada pela caixa azul da direita",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "safety-footwear-visible": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.8,
            "probabilities": {
              "yes": 0.03,
              "no": 0.1,
              "not_verifiable": 0.87
            },
            "demoted": false,
            "criterion": "O alvo está calçado com bota ou sapato fechado, mas a imagem não permite distinguir calçado de segurança de calçado comum, ou os pés estão ocultos. Esta opção nunca significa ausência de calçado.",
            "subject_ref": "a pessoa de camiseta preta e calça jeans, à direita das duas pessoas próximas, delimitada pela caixa azul da direita",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "harness-visible": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.92,
            "probabilities": {
              "yes": 0.05,
              "no": 0.95,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "Não há fitas envolvendo as coxas do alvo. Responda não também quando houver apenas tirantes sobre os ombros presos a um cinto na cintura, como suspensórios ou cinto de ferramentas, que não são cinturão tipo paraquedista.",
            "subject_ref": "a pessoa de camiseta preta e calça jeans, à direita das duas pessoas próximas, delimitada pela caixa azul da direita",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "lanyard-connected": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.83,
            "probabilities": {
              "yes": 0.11,
              "no": 0.89,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "Nenhuma fita ou cabo liga o alvo a uma estrutura. Responda não também quando houver talabarte pendurado solto no corpo, sem conexão, ou corda de içamento de carga nas mãos do alvo, que não é talabarte.",
            "subject_ref": "a pessoa de camiseta preta e calça jeans, à direita das duas pessoas próximas, delimitada pela caixa azul da direita",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "lifeline-present": {
            "answer": "not_verifiable",
            "model_answer": "no",
            "confidence": 0.58,
            "probabilities": {
              "yes": 0.28,
              "no": 0.72,
              "not_verifiable": 0.0
            },
            "demoted": true,
            "criterion": "Não há cabo ou corda esticada entre pontos fixos no trajeto das pessoas.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "risk-area-signage": {
            "answer": "no",
            "model_answer": "no",
            "confidence": 0.88,
            "probabilities": {
              "yes": 0.08,
              "no": 0.92,
              "not_verifiable": 0.0
            },
            "demoted": false,
            "criterion": "A área de trabalho está visível e não há nenhum elemento de sinalização instalado. Responda não também quando houver sinalização caída, rasgada ou ilegível.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "walkway-obstructed": {
            "answer": "not_verifiable",
            "model_answer": "no",
            "confidence": 0.3,
            "probabilities": {
              "yes": 0.47,
              "no": 0.53,
              "not_verifiable": 0.0
            },
            "demoted": true,
            "criterion": "A superfície de circulação está desimpedida.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          },
          "confined-space-attendant": {
            "answer": "not_verifiable",
            "model_answer": "not_verifiable",
            "confidence": 0.56,
            "probabilities": {
              "yes": 0.15,
              "no": 0.14,
              "not_verifiable": 0.71
            },
            "demoted": true,
            "criterion": "Não há abertura de espaço confinado nesta cena, ou ela não está visível. Esta opção nunca significa ausência de vigia.",
            "subject_ref": "Cena inteira",
            "limitations": [
              "Pergunta observacional; vínculo normativo requer conferência."
            ]
          }
        },
        "preparation": {
          "original_size": [
            1920,
            1080
          ],
          "submitted_size": [
            1024,
            576
          ],
          "transformation": "EXIF transpose; RGB; longest side <=1024; JPEG quality=95",
          "submitted_sha256": "fdbe24f7702cb9ec45c08dd3ef9f97f37d506ef8e4130b6dca991039bdd81461"
        }
      }
    }
  ],
  "types": {
    "glove": "Luvas",
    "isolated_area": "Área isolada",
    "safety_helmet": "Capacete",
    "safety_vest": "Colete"
  },
  "questions": [
    {
      "id": "helmet-visible",
      "text": "Há capacete de segurança apoiado sobre a cabeça do alvo?",
      "criteria": {
        "yes": "Casco rígido apoiado sobre a cabeça do alvo, cobrindo o crânio.",
        "no": "A cabeça do alvo está visível e descoberta, ou coberta apenas por boné, touca ou capuz de tecido.",
        "nv": "A cabeça do alvo está oculta, fora de quadro ou com resolução insuficiente. Esta opção nunca significa ausência de capacete."
      },
      "scope": "subject"
    },
    {
      "id": "gloves-visible",
      "text": "Há luvas calçadas nas mãos do alvo?",
      "criteria": {
        "yes": "Luvas cobrindo as mãos do alvo, visíveis em pelo menos uma das mãos.",
        "no": "As mãos do alvo estão visíveis e desnudas.",
        "nv": "As mãos do alvo estão ocultas, fora de quadro, dentro de bolsos ou com resolução insuficiente. Esta opção nunca significa ausência de luvas."
      },
      "scope": "subject"
    },
    {
      "id": "vest-visible",
      "text": "Há colete de alta visibilidade vestido no tronco do alvo?",
      "criteria": {
        "yes": "Colete de cor fluorescente com faixas retrorrefletivas vestido sobre o tronco do alvo.",
        "no": "O tronco do alvo está visível e não há colete de alta visibilidade sobre ele. Camiseta ou camisa comum de cor viva conta como não.",
        "nv": "O tronco do alvo está oculto, fora de quadro ou com resolução insuficiente. Esta opção nunca significa ausência de colete."
      },
      "scope": "subject"
    },
    {
      "id": "earmuffs-visible",
      "text": "Há protetor auricular do tipo abafador sobre as orelhas do alvo?",
      "criteria": {
        "yes": "Conchas rígidas cobrindo as orelhas do alvo, unidas por arco sobre a cabeça ou acopladas ao capacete.",
        "no": "As orelhas do alvo estão visíveis e descobertas.",
        "nv": "A região das orelhas do alvo está oculta, fora de quadro ou com resolução insuficiente. Esta opção nunca significa ausência de protetor."
      },
      "scope": "subject"
    },
    {
      "id": "eye-protection-visible",
      "text": "Há óculos de proteção sobre os olhos do alvo?",
      "criteria": {
        "yes": "Lentes de proteção posicionadas sobre os olhos do alvo, presas por hastes laterais ou elástico, cobrindo a órbita ocular.",
        "no": "A região dos olhos do alvo está visível e não há lentes de proteção sobre ela. Óculos de grau comuns, sem proteção lateral, contam como não.",
        "nv": "A região dos olhos do alvo está oculta, de costas, fora de quadro ou com resolução insuficiente. Esta opção nunca significa ausência de óculos."
      },
      "scope": "subject"
    },
    {
      "id": "face-shield-visible",
      "text": "Há protetor facial cobrindo a face do alvo?",
      "criteria": {
        "yes": "Viseira transparente ou de tela cobrindo a face do alvo da testa ao queixo, presa a suporte na cabeça ou ao capacete.",
        "no": "A face do alvo está visível e descoberta. Capacete sem viseira conta como não.",
        "nv": "A face do alvo está oculta, voltada para longe da câmera, fora de quadro ou com resolução insuficiente. Esta opção nunca significa ausência de protetor facial."
      },
      "scope": "subject"
    },
    {
      "id": "respirator-visible",
      "text": "Há respirador ou máscara cobrindo nariz e boca do alvo?",
      "criteria": {
        "yes": "Peça facial cobrindo nariz e boca do alvo, presa por tirantes, com ou sem filtros ou cartuchos laterais.",
        "no": "Nariz e boca do alvo estão visíveis e descobertos.",
        "nv": "A região de nariz e boca do alvo está oculta, voltada para longe da câmera, fora de quadro ou com resolução insuficiente. Esta opção nunca significa ausência de respirador."
      },
      "scope": "subject"
    },
    {
      "id": "safety-footwear-visible",
      "text": "É possível observar na imagem que o calçado do alvo tem proteção de segurança, e não apenas que ele está calçado?",
      "criteria": {
        "yes": "Há marca visível de proteção no calçado do alvo, como reforço de biqueira aparente, etiqueta ou marcação de segurança legível na peça.",
        "no": "O alvo está descalço, de chinelo, sandália, tênis comum ou outro calçado que claramente não é de segurança.",
        "nv": "O alvo está calçado com bota ou sapato fechado, mas a imagem não permite distinguir calçado de segurança de calçado comum, ou os pés estão ocultos. Esta opção nunca significa ausência de calçado."
      },
      "scope": "subject"
    },
    {
      "id": "harness-visible",
      "text": "O alvo veste cinturão de segurança tipo paraquedista?",
      "criteria": {
        "yes": "Conjunto de fitas que passa sobre os ombros do alvo e envolve cada coxa separadamente, formando um arnês de corpo. As fitas de coxa são obrigatórias para esta resposta.",
        "no": "Não há fitas envolvendo as coxas do alvo. Responda não também quando houver apenas tirantes sobre os ombros presos a um cinto na cintura, como suspensórios ou cinto de ferramentas, que não são cinturão tipo paraquedista.",
        "nv": "O tronco ou o quadril do alvo estão ocultos, fora de quadro ou com resolução insuficiente. Esta opção nunca significa ausência de cinturão."
      },
      "scope": "subject"
    },
    {
      "id": "lanyard-connected",
      "text": "Há talabarte saindo do alvo e conectado a um ponto de ancoragem ou linha de vida?",
      "criteria": {
        "yes": "Fita ou cabo sai do corpo do alvo e termina em mosquetão ou gancho fechado sobre estrutura, cabo de aço ou trilho. A conexão na outra ponta precisa estar visível.",
        "no": "Nenhuma fita ou cabo liga o alvo a uma estrutura. Responda não também quando houver talabarte pendurado solto no corpo, sem conexão, ou corda de içamento de carga nas mãos do alvo, que não é talabarte.",
        "nv": "O corpo do alvo ou a região de ancoragem estão ocultos, fora de quadro ou com resolução insuficiente. Esta opção nunca significa ausência de talabarte."
      },
      "scope": "subject"
    },
    {
      "id": "lifeline-present",
      "text": "Nesta cena existe cabo ou corda esticada horizontalmente entre dois pontos fixos da estrutura, no trajeto das pessoas?",
      "criteria": {
        "yes": "Cabo ou corda tensionada entre dois apoios, acompanhando o trajeto sobre o qual as pessoas se deslocam. Esta resposta não afirma que o cabo é linha de vida certificada, apenas que ele existe.",
        "no": "Não há cabo ou corda esticada entre pontos fixos no trajeto das pessoas.",
        "nv": "O trajeto das pessoas não está visível, está fora de quadro ou com resolução insuficiente. Esta opção nunca significa ausência de linha."
      },
      "scope": "scene"
    },
    {
      "id": "risk-area-signage",
      "text": "Nesta cena há sinalização de área de risco instalada e legível?",
      "criteria": {
        "yes": "Há placa, fita zebrada, cone ou barreira de sinalização instalada na área de trabalho, íntegra e visível.",
        "no": "A área de trabalho está visível e não há nenhum elemento de sinalização instalado. Responda não também quando houver sinalização caída, rasgada ou ilegível.",
        "nv": "A área de trabalho não está suficientemente visível, está fora de quadro ou com resolução insuficiente. Esta opção nunca significa ausência de sinalização."
      },
      "scope": "scene"
    },
    {
      "id": "walkway-obstructed",
      "text": "A superfície sobre a qual as pessoas desta cena caminham ou se apoiam tem material solto sobre ela?",
      "criteria": {
        "yes": "Há corda, cabo, ferramenta, entulho ou peça solta apoiada sobre a superfície de circulação ou de trabalho.",
        "no": "A superfície de circulação está desimpedida.",
        "nv": "A superfície de circulação não está visível, está fora de quadro ou com resolução insuficiente. Esta opção nunca significa superfície desimpedida."
      },
      "scope": "scene"
    },
    {
      "id": "confined-space-attendant",
      "text": "Nesta cena há uma abertura de espaço confinado, como boca de visita, tanque ou poço, com uma pessoa posicionada do lado de fora e voltada para ela?",
      "criteria": {
        "yes": "Há abertura de espaço confinado na cena e uma pessoa permanece fora dela, voltada para a abertura, sem executar outra tarefa.",
        "no": "Há abertura de espaço confinado na cena e ninguém está posicionado do lado de fora observando.",
        "nv": "Não há abertura de espaço confinado nesta cena, ou ela não está visível. Esta opção nunca significa ausência de vigia."
      },
      "scope": "scene"
    }
  ],
  "vision": {
    "model": "jev-latest",
    "run_id": "365e93b6c8574f44b970b5f2a8fec38b",
    "created_at": "2026-10-21T17:52:11.865751+00:00",
    "threshold": 0.6,
    "counts": {
      "no": 41,
      "not_verifiable": 71,
      "yes": 14
    },
    "processed_images": 9,
    "demoted_count": 45
  }
};
