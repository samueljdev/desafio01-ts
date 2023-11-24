import { CompanyAccount } from './class/CompanyAccount'
import { NewAccount } from './class/NewAccount'
import { PeopleAccount } from './class/PeopleAccount'

// const peopleAccount: PeopleAccount = new PeopleAccount(1, 1, 'Nathy', 200)
// console.log('-------------------------------------')
// peopleAccount.deposito(100)
// console.log('-------------------------------------')
// console.log('Código da Conta', peopleAccount.getCodigo().toString().padStart(3, '00'));
// console.log('Numero Conta:',peopleAccount.getNumeroConta().toString().padStart(3, '00'));
// console.log('Nome Cliente:',peopleAccount.getNome())
// console.log('Status Cliente:',peopleAccount.getStatus())
// peopleAccount.verificarSaldo()
// console.log('-------------------------------------')
// peopleAccount.saque(1000)
// console.log('-------------------------------------')


// const companyAccount: CompanyAccount = new CompanyAccount(2, 'Martha', 1000)
// companyAccount.setStatus(true)
// console.log('-------------------------------------')
// console.log('Numero Conta:',companyAccount.getNumeroConta())
// console.log('Nome Cliente:',companyAccount.getNome())
// companyAccount.verificarSaldo()
// console.log('-------------------------------------')
// companyAccount.emprestimo(400)
// console.log('-------------------------------------')


const newAccount: NewAccount = new NewAccount(10, 'Carla', 1000)
console.log('-------------------------------------')
console.log('Numero Conta:',newAccount.getNumeroConta())
console.log('Nome Cliente:',newAccount.getNome())
console.log('-------------------------------------')
newAccount.deposito(100)
console.log('-------------------------------------')
