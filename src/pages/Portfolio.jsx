export default function Portfolio() {
  const projetos = [
    {
      nome: "LIACLI - Sistema de Laboratório Inteligente",
      disciplina: "Desenvolvimento de Software (DS)",
      descricao: "Protótipo criado para facilitar a organização laboratorial de pesquisadores.",
      objetivo: "Gerenciar solicitações de análises laboratoriais realizadas por pesquisadores, bem como aorganização de amostras, resultados e geração de laudos.",
      link: "https://claude.ai/public/artifacts/72acc92a-4cc4-4b1a-aed4-911c2ba1d231"
    },
    {
      nome: "Projeto de Balneabilidade dos Mares de Recife",
      disciplina: "Concepção em Artefatos Digitais (CAD)",
      descricao: "Protótipo que identifica a balneabilidade dos mares de Recife utilizando dados de qualidade da água e condições climáticas.",
      objetivo: "Objetivo do sistema é fornecer informações em tempo real sobre a balneabilidade, auxiliando banhistas e autoridades na tomada de decisões relacionadas à segurança e saúde pública.",
      link: "https://cad-eight-alpha.vercel.app/"
    },
    {
      nome: "Caramelo: A Saga do Bolo de Rolo",
      disciplina: "Introdução à Programação (IP)",
      descricao: "Jogo 2D estilo plataforma.",
      objetivo: "Desenvolver lógica de colisão e movimentação em Python.",
      link: "https://github.com/PedroCGaldino/projetoip_pedro"
    }
  ];

  return (
    <section>
      <h2>Meus Projetos</h2>
      {projetos.map((proj, index) => (
        <div key={index} style={{ borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
          <h3>{proj.nome}</h3>
          <p><strong>Disciplina:</strong> {proj.disciplina}</p>
          <p><strong>Descrição:</strong> {proj.descricao}</p>
          <p><strong>Objetivo:</strong> {proj.objetivo}</p>
          <a href={proj.link} target="_blank" rel="noreferrer">Link do Projeto</a>
        </div>
      ))}
    </section>
  );
}