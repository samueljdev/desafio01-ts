export abstract class DioAccount {
  private numeroConta: number;
  private nome: string;
  private saldo: number;
  private status: boolean = true;
  
  constructor(numeroConta: number, nome: string, saldoInicial: number) {
    this.numeroConta = numeroConta;
    this.nome = nome;
    this.saldo = saldoInicial;
  }

  // Métodos getters e setters para nome, número da conta e saldo inicial
  setNome = (nome: string): void => {
    this.nome = nome;
  }


  getNome = (): string => {
    return this.nome;
  }

  setNumeroConta = (numeroConta: number): void => {
    this.numeroConta = numeroConta;
  }

  getNumeroConta = (): number => {
    return this.numeroConta;
  }

  setSaldo = (saldo: number): void => {
    this.saldo = saldo;
  }

  getSaldo = (): number => {
    return this.saldo;
  }

  setStatus = (status: boolean): void => {
    this.status = status;
  }

  getStatus = (): boolean => {
    return this.status;
  }

  // Método para realizar depósito na conta
  deposito = (valor: number): void => {
    if (valor <= 0) { // verifica se o valor é ZERO
      console.log('O valor do depósito deve ser maior que zero.');
      return;
    }

    this.saldo += valor; // o saldo recebe o valor de entrada
    console.log(`Depósito de ${valor} realizado com sucesso.`);
    console.log(`Novo saldo: ${this.saldo}`)
  }

  // Método para realizar saque da conta
  saque = (valor: number): void => {

    // verifica se a conta é invalida
    if(this.getStatus() === false){
      console.log('Conta Invalida');
      return;
    }

     // verifica se o saldo é zero
    if (valor <= 0) {
      console.log('O valor do saque deve ser maior que zero.');
      return;
    }

    // verifica se o saldo é suficiente
    if (this.saldo >= valor) {
      this.saldo -= valor;
      console.log(`Saque de ${valor} realizado com sucesso.`);
      console.log(`Novo saldo: ${this.saldo}`)
      return;
    } else {
      console.log('Saldo insuficiente para saque.');
    }
  }

  // Método para verificar saldo
  verificarSaldo = (): void => {
    console.log(`Saldo atual: ${this.saldo} R$`);
  }
}
