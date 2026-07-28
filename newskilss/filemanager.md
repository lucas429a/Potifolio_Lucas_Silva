Tag Integrator
Sistema de conversão e geração de etiquetas para varejo, desenvolvido em TypeScript com arquitetura Domain-Driven Design (DDD) e princípios SOLID.

Arquitetura
O projeto é estruturado em 5 camadas com separação clara de responsabilidades:

Domain — Núcleo de negócio com entidades (Tag, Company, Order, PDFDocument), value-objects (CNPJ, CompanyName, FileFormat, OrderNumber, TagType), interfaces de repositórios e serviços de domínio (CompanyRulesService com regras por empresa).
Application — Casos de uso orquestrando a lógica de aplicação: ProcessTagFile, GeneratePDF, GetTags, GetOrdersByCompany, GetCompanyList, GetTagTypesByCompany, CreateCompanies, além de DTOs e mappers.
Infrastructure — Implementações concretas: persistência com Prisma ORM (PostgreSQL), conversores de arquivos específicos por empresa, processadores de arquivos (Factory Pattern), geradores de PDF com templates/fontes/logos, e serviços auxiliares.
Presentation — API REST com Express, controllers, rotas e middlewares. Upload de arquivos com Multer (CSV, XML, ZPL, TXT).
Shared — Erros customizados, utilitários e tipos compartilhados.
Funcionalidades
Processamento multi-formato: converte arquivos CSV, XML, ZPL e FixedWidth com parsers específicos por empresa.
12 empresas suportadas: Calcenter, Riachuelo, Besni, DiGaspi, DiSantini, Avenida, Torra, Humanitarian, Pernambucanas, LinsFerrão, Caedu, C&A — cada uma com seus próprios conversores, processadores e templates de PDF.
Geração de PDFs personalizados: utiliza @pdfme e pdf-lib com templates, fontes e logos próprios de cada empresa.
API REST completa: endpoints para CRUD de empresas, upload de arquivos, consulta de etiquetas/pedidos com filtros, e geração/download de PDFs.
Validação de regras de negócio: CompanyRulesService valida número de arquivos, formatos suportados e tipos de etiqueta por empresa.
Persistência com Prisma + PostgreSQL: schema com models ETIQUETAS, Empresa e ETIQUETAS_DINAMICAS, incluindo 10 migrations.
Testes automatizados com Jest cobrindo conversores e geração de PDF.
Tecnologias
Categoria	Tecnologia
Linguagem	TypeScript
Runtime	Node.js
Framework HTTP	Express
ORM	Prisma (PostgreSQL)
Geração de PDF	@pdfme, pdf-lib
Upload de arquivos	Multer
Testes	Jest
Agendamento	node-cron
Padrões de Design aplicados
DDD — Entidades ricas com factory methods (create/restore), value-objects imutáveis
Factory Pattern — FileProcessorFactory e ConverterFactory selecionam o processador correto por código de empresa
Repository Pattern — Interfaces ITagRepository/ICompanyRepository na camada de domínio, implementações na infraestrutura
DTO Pattern — Separação entre dados de entrada/saída e entidades de domínio
Dependency Injection — Controllers recebem repositórios via construtor






esse ´o file manager ja instanciado no projeto porém quero que adicione esses detalhes e valorize a a logica dele 