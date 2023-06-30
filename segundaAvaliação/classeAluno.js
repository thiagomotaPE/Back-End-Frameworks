class Aluno {
  constructor(matricula, nome, nota_prova1, nota_prova2, nota_trabalho) {
    this.matricula = matricula;
    this.nome = nome;
    this.nota_prova1 = nota_prova1;
    this.nota_prova2 = nota_prova2;
    this.nota_trabalho = nota_trabalho;
  }

  media() {
    const media_provas = (this.nota_prova1 + this.nota_prova2) / 2;
    const media_final = (media_provas * 2.5 + this.nota_trabalho * 2) / 5;
    return media_final;
  }

  final() {
    const media = this.media();
    if (media < 6.0) {
      const nota_final = 12.0 - (media * 2);
      return nota_final >= 0 ? nota_final : 0;
    } else {
      return 0;
    }
  }
}