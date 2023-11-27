const agenda = {
  contatos: [
    {
      nome: 'Aluno 1',
      telefone: 'telefone2',
      email: 'email2'
    },
    {
      nome: 'Aluno 2',
      telefone: 'telefone2',
      email: 'email2'
    },
    {
      nome: 'Aluno 3',
      telefone: 'telefone3',
      email: 'email3'
    }
  ],
  adicionar: function(contato) {
    // const contatos = [];
    this.contatos.push(contato)
  }
}

const contato = {
  nome: 'Aluno 999',
  telefone: 'telefone1',
  email: 'email'
}

console.log(contato.nome);

console.log(agenda.contatos)

agenda.adicionar({nome: 'bruno', telefone: '123456', email: 'bruno@email'})

console.log(agenda.contatos)

class Agenda {
  contatos = [];
  constructor(){}
  adicionar(contato) {
    this.contatos.push(contato)
  }
}

const ag = new Agenda();

console.log(ag.contatos)

ag.adicionar(
  {
  nome: 'fulano 1', 
  telefone: '1234', 
  email: 'fulano@email'
})

console.log(ag.contatos)

class Contato {
  nome
  telefone
  email
  dataNascimento

  constructor(nome, telefone, email){
    this.nome = nome
    this.telefone = telefone
    this.email = email
  }  
}

// Produção
const contato1 = new Contato('Contato 1', '1212');
const contato2 = new Contato('Sarah', '343244');

console.log(contato1.nome)

ag.adicionar(contato1)
ag.adicionar(contato2)

console.log(ag.contatos)