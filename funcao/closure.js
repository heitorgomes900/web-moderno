/** Closure é o escopo criado quando uma função é declarada
 *  Esse escopo permite a função acessar e manipular variáveis externas à função
 */

 // Contexto léxico em ação

 let x = 'Global'

 function fora(){
     let x = 'Local'
     function dentro(){
         return x
     }
     return dentro()
 }

 let minhaFuncao = fora()
 console.log(minhaFuncao)