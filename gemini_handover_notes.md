# Notas de Handover do Projeto Vector Studios para o Gemini

Este arquivo resume o estado atual do projeto, as tecnologias e configurações utilizadas, e os próximos passos.

## 1. Objetivo do Projeto

Desenvolver o site da "Vector Studio", um portfólio de design que inclui um sistema de gerenciamento de conteúdo (CMS) para que os administradores possam atualizar o portfólio dinamicamente.

## 2. Tecnologias e Serviços Utilizados

*   **Framework:** React (com Vite e TypeScript)
*   **Estilização:** Tailwind CSS e shadcn/ui
*   **Roteamento:** `react-router-dom`
*   **Autenticação:** Firebase Authentication (Login com Google)
*   **Banco de Dados (Metadados):** Firestore (para salvar descrições e URLs das imagens)
*   **Armazenamento de Imagens:** Cloudinary (usando "unsigned uploads")

## 3. Credenciais e Configurações Chave

*   **Firebase Project ID:** `vector-studios`
*   **E-mails de Administrador:**
    *   `omnslayer@gmail.com`
    *   `venamciofrancisco@gmail.com`
*   **Cloudinary Cloud Name:** `dc6okxwio`
*   **Cloudinary Upload Preset (Unsigned):** `Vector-Site`
*   **Configuração do Vite (`vite.config.ts`):** Foi configurado para aceitar conexões do `ngrok` (`allowedHosts` e `hmr.host`).

## 4. Estado Atual e Próximo Passo

*   **O que foi feito:** O sistema de login, o CMS de Logotipos e a interface principal (Gamificada com XP/Moedas) estão finalizados. O portfólio agora é dinâmico via scripts.
*   **Estado Vercel:** O projeto foi renomeado e centralizado como `vector-studios`. Subprojetos como Aura Jewelry funcionam via pastas em `projects/` com Root Directory configurado na Vercel.
*   **PRÓXIMO PASSO:** Continuar a expansão do portfólio seguindo o novo `WORKFLOW_SITES.md` e manter a consistência visual via `VEX.txt`.


Com estas notas, a próxima instância do Gemini poderá continuar o trabalho exatamente de onde paramos.
