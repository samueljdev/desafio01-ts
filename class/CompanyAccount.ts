import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  private valorEmprestimo: number = 0

  constructor(contaNumero: number, nome: string, saldo: number) {
    super(contaNumero, nome, saldo);
  }

  public getValorEmprestimo(): number {
    return this.valorEmprestimo;
  }

  public setValorEmprestimo(valor: number) {
    this.valorEmprestimo = valor;
  }

  emprestimo = (valorEmprestimo: number): void => {
    if (this.validateStatus()) {
      if (valorEmprestimo <= 0) {
        console.log('O valor do empréstimo deve ser maior que zero.');
        return;
      }

      valorEmprestimo += this.getSaldoInicial();
      this.valorEmprestimo += valorEmprestimo;
      console.log(`Empréstimo de ${valorEmprestimo} autorizado. Novo saldo: ${this.getSaldoInicial()}`);
    } else {
      console.log('Emprestimo não autorizado para esta conta.');
    }
  }

  private validateStatus = (): boolean => {
    if (this.getStatus()) {
      return true;
    }
    console.log('Empréstimo não autorizado. Status da conta é falso.');
    return false;
  }
}
