import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
  private codigo: number

  constructor(codigo: number, numeroConta: number, nome: string, saldoInicial: number){
    super(numeroConta, nome, saldoInicial)
    this.codigo = codigo
  }

  setCodigo = (codigo: number): void => {
    this.codigo = codigo
  }

  getCodigo = (): number => {
    return this.codigo
  }
}