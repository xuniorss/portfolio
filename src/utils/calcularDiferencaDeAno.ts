export const calcularDiferencaDeAno = (anoEspecifico: number): number => {
   const anoAtual: number = new Date().getFullYear()
   return anoAtual - anoEspecifico
}
