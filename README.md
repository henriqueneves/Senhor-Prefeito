<p align="center">
	  <img src="https://raw.githubusercontent.com/henriqueneves/Senhor-Prefeito/master/Images/logo.png">
</p>
 
# Projeto: “Senhor prefeito? ”
Versão: 1.0

# Motivação: 
Um dos trabalhos mais árduos na gestão de uma cidade é manter suas vias urbanas em um bom estado. Diversos são os fatores que contribuem para o degradamento das ruas, entre eles podemos citar: buracos, pedregulhos soltos, bueiros (bocas-de-lobo) entupidos, má sinalização, lixo, pontos de enchente, iluminação precária ou danificada. 
Em cidades maiores é praticamente impossível ter um controle de todos estes problemas, tornando essencial a conscientização da população em denunciar estas disformidades. Porém, ainda faltam recursos que tornem estas denúncias algo fácil e rápido.
Outro problema de não se ter mapeado as deformidades nas vias urbanas é a falta de segurança principalmente para condutores. Não saber onde há má sinalização ou buracos, por exemplo, ainda ocasiona um grande percentual de acidentes de transito.

# Solução:
Pensando em algo prático, de acesso a todos e que tenha um retorno a população em geral, propõe-se o desenvolvimento de um portal que sirva como mapeamento de problemas urbanos em vias públicas. Este portal traria vantagens tanto para os órgãos responsáveis pela manutenção das vias, quanto para a população em geral, que poderia averiguar determinado percurso antes de efetua-lo e acompanhar o andamento de possíveis reparos. 
Descrição de Funcionamento:
Ao entrar no site, sem precisar efetuar nenhum tipo de autenticação, o usuário terá como visualizar um mapa que contém marcadores com ocorrências de problemas registrados por usuários. Será possível se cadastrar no sistema, podendo assim criar novas ocorrências.

![Alt text](Images/demonstracao.jpg?raw=true "Print do sistema")

# Categorias aceitas no sistema:
•	Buraco
•	Pedregulho
•	Bueiro entupido
•	Ponto de enchente
•	Iluminação (precária ou danificada)
•	Sinalização (precária ou danificada)
•	Lixo
•	Vegetação

# Propostas futuras:
Novos tipos de marcação: Através de formas geométricas personalizadas, tornar possível uma melhor descrição de uma ocorrência. Por exemplo, em locais que ocorrem enchentes seria possível marcar exatamente a área que é afetada pelo problema:
 
	
Melhor otimização do mapa da ferramenta: Atualmente, como estamos em uma versão de testes, ao carregar o mapa são adicionados todos os pontos, do tipo selecionado, de ocorrências registrados na base. O ideal seria que apenas fossem retornados os pontos presentes na área do mapa visualizada naquele momento. Esta mudança economizaria o uso do servidor (tanto processamento, quanto acesso a base de dados), diminuiria o tamanho do arquivo json enviado ao cliente e também pouparia recursos do navegador em renderizar todos os pontos no mapa.

Implementar MarkerClusterer: Quanto markers estão próximos um sobrepõe o outro, dificultando o entendimento e usabilidade. Uma propriedade chamada MarkerClusterer permite alinhar estes pontos muito próximos e em vez de exibir todos, ele exibe apenas um Marker contendo o número de pontos que ele substituiu.
 

Consolidação das ocorrências: Para consolidar e provar a veracidade das ocorrências presentes no sistema, futuramente pretende-se implementar um sistema de Positivo e Negativo. As ocorrências com muitos positivos terão destaque, as com muitos negativos serão levadas para análise.

# Senhor-Prefeito
Projeto criado para conclusão de curso técnico em ASP.net / C# realizado no Senac.
O objetivo do trabalho era a criação de uma ferramenta, utilizando o Entity Framework, que contribuísse em algo para a sociedade.
