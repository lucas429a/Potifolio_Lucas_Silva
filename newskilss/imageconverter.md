Análise completa. Aqui está o texto descritivo para seu portfólio:

Image Converter API
Descrição do Projeto

API REST para conversão e otimização de imagens, construída em TypeScript com Node.js e Express, seguindo os princípios de Clean Architecture e Domain-Driven Design (DDD). O projeto processa múltiplos formatos de imagem (PNG, JPEG, WebP, HEIC e GIF) com controle de qualidade, redimensionamento e compressão automática.

Arquitetura
A aplicação é estruturada em camadas com responsabilidades bem definidas, garantindo separação de concerns e inversão de dependências:

Domain — Núcleo da aplicação, independente de frameworks externos. Contém a entidade ImageConversion, os Value Objects ConversionOptions e ImageFormat, e o serviço de domínio ImageConverterService, que orquestra a lógica de conversão (pré-conversão de HEIC via heic-convert e processamento final via sharp).
Application — Casos de uso que coordenam as operações. O ConvertImagesToJpg processa conversões em lote de forma concorrente com Promise.all, e a interface HttpServer abstrai o servidor HTTP, permitindo troca de framework sem acoplamento.
Infrastructure — Adaptadores para tecnologias externas: ExpressAdapter (HTTP), SharpConverter e HeicConverter (processamento de imagem), MulterConfig (upload em memória, limite de 50MB por arquivo, até 15 arquivos), e Authenticate (autenticação por token).
Testes — Cobertura em três níveis: testes unitários (entidades, value objects e converters), testes de integração (casos de uso) e testes end-to-end (rotas HTTP com supertest).
Funcionalidades
Conversão multi-formato: PNG, JPEG, WebP, HEIC e GIF como entrada; PNG, JPG e WebP como saída
Controle de qualidade: parâmetro de 1 a 100, com padrão de 100
Redimensionamento flexível: por porcentagem ou por dimensões específicas (width/height em pixels), com cálculo automático de proporção 16:9 quando apenas uma dimensão é informada
Compressão com tamanho máximo: algoritmo iterativo que reduz a qualidade em incrementos de 5% até atingir o maxSizeKB desejado (mínimo de 10%)
Processamento em lote: conversão concorrente de múltiplas imagens
Saída flexível: retorno em Buffer ou Base64
Autenticação: middleware com validação de token via header Authorization
Tecnologias
TypeScript — tipagem estática e segurança em tempo de desenvolvimento
Express — framework HTTP com abstração via interface HttpServer
Sharp — processamento de imagem de alta performance
heic-convert — suporte ao formato HEIC (comum em dispositivos Apple)
Multer — middleware de upload com armazenamento em memória
Jest — framework de testes com suporte a unit, integration e e2e
ts-node-dev — hot reload em desenvolvimento
Destaques Técnicos
Inversão de dependências: a camada de domínio define interfaces (IHeicConverter, ISharpConverter, HttpServer) que são implementadas pela infraestrutura, seguindo o Princípio de Abertura/Fechamento (OCP)
Value Objects com validação embutida: ConversionOptions valida regras de negócio no momento de criação (quality 1-100, incompatibilidade entre resizePercentage e width/height, formatos válidos)
Entidade rica: ImageConversion encapsula regras como detecção de HEIC, geração de nome de arquivo de saída e mapeamento de formato de saída
Factory method: construtores privados com métodos create() estáticos que validam invariantes antes de instanciar objetos
Algoritmo de compressão adaptativa: loop que decrementa qualidade em 5% até atingir o tamanho alvo, com fallback e warning quando o limite mínimo é atingido
Esse texto pode ser adaptado conforme o formato do seu portfólio (seção de projetos, card, página detalhada, etc.). Quer que eu ajuste o tom, tamanho ou foco em algum aspecto específico?



NESSE NÃO TEM O CODIGO DISPONIVEL POR É PARA EMPRESA ONDE TRABALHO ATUALMENTE 



Feedback submitted