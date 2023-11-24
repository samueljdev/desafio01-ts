import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount {

    // Método para realizar depósito na conta
    deposito = (valorDeposito: number): void => {
        const valorComAcrescimo = valorDeposito + 10;
        
        if (valorDeposito <= 0) { 
          console.log('O valor do depósito deve ser maior que zero.');
          return;
        }

        let saldo: number = 0
        saldo += valorComAcrescimo;
        console.log(`Depósito de ${valorDeposito} realizado com sucesso.`);
        console.log(`Novo saldo: ${saldo}`)
      }
}