 let dados = [ 
     {   
         titulo: "Hospital de Pronto Socorro João XXIII",
         descricao: "Av. Prof. Alfredo Balena, 400 - Centro, Belo Horizonte - MG, 30130-100. Especialidade: Urgência e Emergência",
         link: "https://www.fhemig.mg.gov.br/atendimento/complexo-hospitalar-de-urgencia/hospital-joao-xxiii",
         Tags: "intoxicação envenenamento acidentes queimaduras politrauma"
     },
     {
         titulo: "Hospital Infantil João Paulo II",
         descricao: "Alameda Ezequiel Dias, 345 - Centro, Belo Horizonte - MG, 30130-110. Especialidade: Pediatria",
         link: "https://www.fhemig.mg.gov.br/atendimento/complexo-hospitalar-de-urgencia/hospital-infantil-joao-paulo-ii",
         Tags: "pediatria criança queimadura acidente doméstico doença respiratória"
     },
     {
         titulo: "Hospital Metropolitano Odilon Behrens",
         descricao: "R. Formiga, 50 - São Cristóvão, Belo Horizonte - MG, 31110-430. Especialidade: Urgência e Emergência, Clínica Médica",
         link: "https://prefeitura.pbh.gov.br/hospital-metropolitano-odilon-behrens",
         tags: "acidentes politrauma trauma de face neurocirurgia pediatria"
     },
     {
         titulo: "Hospital Risoleta Tolentino Neves",
         descricao: "R. das Gabirobas, 1 - Vila Cloris, Belo Horizonte - MG, 31744-012. Especialidade: Urgência e emergência",
         link: "https://www.hrtn.fundep.ufmg.br/",
         tags: "AVC politrauma acidente urgência"
     },
     {
         titulo: "Hospital Metropolitano Dr Célio de Castro",
         descricao: "Rua Dona Luiza, 311 - Milionários, Belo Horizonte - MG, 30620-090. Especialidade: Urgência e Emergência, Clínica Médica, Cirurgia",
         link: "https://www.hmdcc.com.br/",
         tags: "cirurgia neurocirurgia urologia infarto AVC"
     },
     {
         titulo: "Hospital Julia Kubitscheck",
         descricao: "R. Dr. Cristiano Rezende, 2745 - Flávio Marques Lisboa, Belo Horizonte - MG, 30610-720. Especialidade: Clínica Médica, Pneumologia, Infectologia, Neurologia",
        link: "https://www.fhemig.mg.gov.br/atendimento/complexo-de-especialidades/hospital-julia-kubitschek",
        tags: "pneumonia cirrose fibrose tuberculose"
     },
     {
         titulo: "Hospital Eduardo de Menezes",
         descricao: "Endereço: R. Dr. Cristiano Rezende, 2213 - Bonsucesso, Belo Horizonte - MG, 30622-020. Especialidade: Infectologia",
         link: "https://www.fhemig.mg.gov.br/atendimento/unidades-assistenciais-de-referencia/hospital-eduardo-de-menezes",
         tags: "HIV tuberculose covid herpes hepatite"
     },
     {
         titulo: "Hospital da Baleia",
         descricao: "R. Juramento, 1464 - Saudade, Belo Horizonte - MG, 30285-408. Especialidade: Oncologia, Nefrologia, Clínica Médica, Cirurgia, Transplante",
         link: "https://hospitaldabaleia.org.br",
         tags: "câncer oncologia insuficiência renal cirurgia pediatria transplante"
     },
     {
         titulo: "Hospital Sofia Feldman",
         descricao: "Rua Antônio Bandeira, 1060 - Tupi, Belo Horizonte - MG, 31844-130. Especialidade: Ginecologia e Obstetrícia, Maternidade, Neonatologia",
         link: "https://www.sofiafeldman.org.br/",
         tags: "maternidade parto recém nascido obstetrícia ginecologia"
     },
     {
         titulo: "Hospital Maternidade Odete Valadares",
         descricao: "Av. do Contorno, 9494 - Prado, Belo Horizonte - MG, 30110-064. Especialidade: Ginecologia e Obstetrícia, Maternidade, Neonatologia",
         link: "https://www.fhemig.mg.gov.br/atendimento/unidades-assistenciais-de-referencia/maternidade-odete-valadares",
         tags: "maternidade parto recém nascido obstetrícia ginecologia"
     },
     {
         titulo: "Santa Casa BH",
         descricao: " Av. Francisco Sales, 1111 - Santa Efigênia, Belo Horizonte - MG, 30150-221. Especialidade: Clínica Médica, Cirurgia, Clínica Médica, Oncologia, Transplante",
         link: "https://santacasabh.org.br/",
         tags: "transplante clinica oncoliogia oftalmologia cardiologia pneumologia ortopedia"
     },
     {
         titulo: "Hospital Mário Penna",
         descricao: "R. Joaquim Cândido Filho, 91 - Luxemburgo, Belo Horizonte - MG, 30380-420. Especialidade: Oncologia, Clínica Médica",
         link: "https://mariopenna.org.br//",
         tags: "oncologia clinica médica pediatria câncer"
     },
     {
         titulo: "Hospital das Clínicas da Universidade Federal de Minas Gerais - Rede Ebserh",
         descricao: "Av. Prof. Alfredo Balena, 110 - Santa Efigênia, Belo Horizonte - MG, 30130-100. Especialidade: Clínica Médica, Cardiologia, Oncologia, Oncologia Pediatrica, Pneumologia, Doenças Genéticas e Doenças Raras",
         link: "https://www.gov.br/ebserh/pt-br/hospitais-universitarios/regiao-sudeste/hc-ufmg",
         tags: "cardiologia pneumologia ginecologia obstetrícia pediatria neonatologia câncer oncologia transplante"
     },
     {
         titulo: "Instituto Raul Soares",
         descricao: "Av. do Contorno, 3017 - Santa Efigênia, Belo Horizonte - MG, 30110-017. Especialidade: Psiquiatria",
         link: "https://www.fhemig.mg.gov.br/atendimento/unidades-assistenciais-de-saude-mental/instituto-raul-soares",
         tags: "psiquiatria esquizofrenia depressão psicopatia"
     },
     {
         titulo: "Hospital Maria Amélia Lins",
         descricao: "Rua dos Otoni, 772 - Santa Efigênia, Belo Horizonte - MG, 30150-270. Especialidade: Ortopedia, Reumatologia, cirurgia Ortopédica",
         link: "https://www.fhemig.mg.gov.br/atendimento/complexo-hospitalar-de-urgencia/hospital-maria-amelia-lins",
         tags: "ortopedia, reumatologia fraturas osso"

     },
 ]; 