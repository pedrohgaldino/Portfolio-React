export default function Home() {
  return (
    <div>
        <section>
        <h1>{/* Nome Completo */} Pedro Henrique Cabral Galdino dos Santos</h1>

        <img 
        src="/foto-perfil.jfif"
        alt="Foto de Pedro Henrique Cabral Galdino dos Santos" 
        style={{
          width: '200px',
          height: '200px', 
          borderRadius: '50%',
          objectFit: 'cover',
          margin: '20px auto',
          display: 'block'
        }}
      />
        
        <h3>Apresentação Pessoal/Acadêmica</h3>
        <p>Atualmente graduando em Sistemas de Informação no Centro de Informática da UFPE (2º Período - CIn/UFPE).</p>

        <h3>Interesse na Área</h3>
        <p>Tenho interesse na aplicação de Engenharia de Software para o setor financeiro. Minha base em Ciências Contábeis (UFPE) me permite compreender profundamente regras de negócio e fluxos financeiros, facilitando a construção de sistemas de alta confiabilidade, automação de balanços e análise de dados econômicos. </p>

        <h3>Contato</h3>
        <ul>
            <li>E-mail: <a href="mailto:pedrocabralgaldino@gmail.com">pedrocabralgaldino@gmail.com</a></li>
            <li>Telefone: (81) 99698-2024</li>
        </ul>
        </section>
    </div>
  );
}