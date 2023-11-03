
const metros = prompt ("Insira em metros a medida que deseja fazer a conversão")
const escolha = prompt ("Agora, seleciona em que unidade de medida deseja fazer a conversão: \n" + 
"\nA) Milímetro (mm) " +
"\nB) Centímetro (cm) " +
"\nC) Decímetro (dm) " +
"\nD) Decâmetro (dam)" +
"\nE) Hectômetro (hm) " +
"\nF) Quilômetro (Km) "
)
const resultadoNumerico = parseFloat (escolha)


switch (escolha)  {
    case 'A' , 'a':
        alert ("Em milímetros (mm) " + metros + " corresnpondem a: " + (metros*1000)+  " milímetros (mm)" )
        break
    case 'B' , 'b':
        alert ("Em Centímetros (cm) " + metros +" Metros " + "corresnpondem a: " + (metros*100) + " Centímetros (cm)")
        break
    case 'C' , 'c':
        alert ("Em Decímetros (dm) " + metros +" Metros " + "corresnpondem a: " + (metros*10) + " Decímetros (dm)")
        break

    case 'D' , 'd':
        alert ("Em Decâmetros (dam) " + metros +" Metros " + "corresnpondem a: " + (metros/10) + " Decâmetros (dam)")
        break
    case 'E' , 'e':
        alert ("Em Hectômetros (hm) " + metros +" Metros " + "corresnpondem a: " + (metros/100) + " Hectômetros (hm)")
         break

    case 'F' ,'f':
         alert ("Em Quilômetros (hm) " + metros +" Metros " + "corresnpondem a: " + (metros/1000) + " Quilômetros (km)")
         break 


    default: 
    alert ("Opção Inválida!!")    
}