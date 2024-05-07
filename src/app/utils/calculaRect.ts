export const calcularNumeroDeRectangulosYMaximizacion = (anchoTecho:number, altoTecho:number, anchoPanel:number, altoPanel: number) => {
    // Validación de dimensiones positivas
    if (anchoTecho <= 0 || altoTecho <= 0 || anchoPanel <= 0 || altoPanel <= 0) {
      throw new Error('Todas las dimensiones deben ser números positivos.');
    }
    // Validación de dimensiones de rectángulos
    if (anchoPanel > anchoTecho || altoPanel > anchoTecho || anchoPanel > altoTecho || altoPanel > altoTecho) {
       throw new Error('Las dimensiones de los rectángulos deben ser menores o iguales a las dimensiones del rectángulo grande.');
    }
    //ancho del techo es el +largo y alto del panel es el lado angosto
    const opcionVertical = Math.floor(anchoTecho / altoPanel) * Math.floor(altoTecho / anchoPanel);//los que caben por fila * columnas posibles
    const opcionHorizontal = Math.floor(anchoTecho / anchoPanel) * Math.floor(altoTecho / altoPanel);
    
    const numeroDePaneles = Math.max(opcionVertical, opcionHorizontal);
    const opcionMaxima = opcionVertical >= opcionHorizontal ? 'Vertical' : 'Horizontal';
    return { numeroDePaneles, opcionMaxima };
  };

  export const calcularNumeroDeRectangulosYMaximizacionTri = (base:number, altura:number, anchoPanel:number, altoPanel: number) => {
  // Validación de dimensiones positivas
  if (base <= 0 || altura <= 0 || anchoPanel <= 0 || altoPanel <= 0) {
    throw new Error('Todas las dimensiones deben ser números positivos.');
  }
  // Calculamos el número de paneles solares en orientación horizontal
  const numeroHorizontal = Math.floor(base / anchoPanel) * Math.floor(altura / altoPanel);

  // Calculamos el número de paneles solares en orientación vertical
  const numeroVertical = Math.floor(base / altoPanel) * Math.floor(altura / anchoPanel);

  // Determinamos cuál opción maximiza el número total de paneles solares
  if (numeroHorizontal >= numeroVertical) {
    return { numeroDePaneles: numeroHorizontal, opcionMaxima: 'Horizontal' };
  } else {
    return { numeroDePaneles: numeroVertical, opcionMaxima: 'Vertical' };
  }
  };