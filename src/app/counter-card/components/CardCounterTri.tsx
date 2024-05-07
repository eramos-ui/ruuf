'use client';
import { calcularNumeroDeRectangulosYMaximizacionTri } from '@/app/utils/calculaRect';
import { useState } from 'react';
import ErrorMessagePage from './ErrorMessage';
import { DiagramTriPage } from './DiagramaTri';


export const  CardCounterPageTri=() => {
  const [ enabledButton, setEnabledButton ] = useState<boolean>(false);    
  const [ error, setError ]                 = useState<boolean>(false);  
  const [ errorMsg, setErrorMsg ]           = useState<string>('');         
  const [ nroPanel, setNroPanel ]           = useState<any>();
  const [ baseTecho, setBaseTecho ]       = useState<number>(0);
  const [ altoTecho, setAltoTecho ]         = useState<number>(0);
  const [ anchoPanel, setAnchoPanel ]       = useState<number>(0);
  const [ altoPanel, setAltoPanel ]         = useState<number>(0);
  const calculPanel= async () => {
      if (baseTecho <= 0 || altoTecho <= 0 || anchoPanel <= 0 || altoPanel <= 0 ){
          let msgError='';
          if ( baseTecho <= 0 ) msgError='No ha definido la base del triángulo del techo'; 
          if (altoTecho <= 0) {
              msgError=  msgError +(( msgError.length>0)?', ':'') +'No ha definido el alto del triángulo del techo'
            }
            if (anchoPanel <= 0) {
                msgError=  msgError +(( msgError.length>0)?', ':'') +'No ha definido el ancho del panel'
            }
            if (altoPanel <= 0) msgError=  msgError +(( msgError.length>0)?', ':'') +'No ha definido el alto del panel'
            
            setErrorMsg((msgError.length>0)?msgError:'');
            setError((msgError.length>0)?true:false);
            if (msgError.length>0) setNroPanel(null);
            return;
        }
        setNroPanel(calcularNumeroDeRectangulosYMaximizacionTri(baseTecho, altoTecho, anchoPanel, altoPanel));

       
        //diagramarSolucion(baseTecho, altoTecho, anchoPanel, altoPanel, counterPanel.opcionMaxima);

  }
  const onChangebaseTecho=(e:any) =>{
    setBaseTecho(Number(e.target.value));
    setEnabledButton(true);
  }
  const onChangeAltoTecho=(e:any) =>{
    setAltoTecho(Number(e.target.value));
    setEnabledButton(true);
  }
  const onChangeAnchoPanel=(e:any) =>{
    setAnchoPanel(Number(e.target.value));
    setEnabledButton(true);
  }
  const onChangeAltoPanel=(e:any) =>{
    setAltoPanel(Number(e.target.value));
    setEnabledButton(true);
  }
  const onClose=() =>{
     setError(false);
  }
  return (
    <> 
     {/* {console.log('render',nroPanel)} */}
    { 
        (!error)
        ?
        <form className="mt-6 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-900 antialiased">
                    Ingrese el tamaño del techo triangular (isóceles)
                </p>
                <div className="relative h-11 w-full min-w-[200px]">
                    <input
                    className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    type='number'
                    value={ baseTecho}
                    onChange={onChangebaseTecho }
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Base triangular del techo en metros 
                    </label>
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                    <input
                    className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    type='number'
                    value={ altoTecho}
                    onChange={ onChangeAltoTecho }
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Alto del del triangulo del techo en metros
                    </label>
                </div>

                <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-900 antialiased">
                    Ingrese el tamaño del panel
                </p>

                <div className="relative h-11 w-full min-w-[200px]">
                    <input
                    className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    type='number'
                    value={ anchoPanel}
                    onChange={ onChangeAnchoPanel}
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Ancho del panel en metros (lado mayor)
                    </label>
                </div>

                <div className="relative h-11 w-full min-w-[200px]">
                    <input
                    className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    type='number'
                    value={ altoPanel }
                    onChange={ onChangeAltoPanel}
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Alto del panel en metros (lado menor)
                    </label>
                </div>
                <button
                    className="mt-4 block w-full select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    disabled={!enabledButton}
                    data-ripple-light="true"
                    onClick={()=> calculPanel() }
                    >
                Calcular nro. de paneles
                </button>
                {
                   
                 (nroPanel ) &&
                  <DiagramTriPage  baseTecho={ baseTecho } altoTecho={ altoTecho } anchoPanel={anchoPanel} altoPanel= { altoPanel } resultado={ nroPanel } />
                // <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
                // <rect x="50" y="50" width="300" height="200" fill="none" stroke="black" strokeWidth="2"/>                 
                //  (nroPanel.opcionMaxima === 'Vertical')
                //   ?
                //         { horizontal: Math.floor(300 / anchoPanel), vertical: Math.floor(200 / altoPanel) } :
                //         { horizontal: Math.floor(300 / resultado.b), vertical: Math.floor(200 / resultado.a) }
                //     for (let i = 0; i < rectangulosPequenos.vertical; i++) {
                //         for (let j = 0; j < rectangulosPequenos.horizontal; j++) { %>
                //         <rect x="<%= 50 + j * resultado.a %>" y="<%= 50 + i * resultado.b %>" width="<%= resultado.a %>" height="<%= resultado.b %>" fill="none" stroke="red" stroke-width="2"/>
                //         <% }
                //     } 
                //     >
                // </svg>

                // <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                //     <rect x="10" y="10" width={baseTecho} height={altoTecho} fill="none" stroke="black" strokeWidth="2"/>
                    
                //     <rect x="10" y="10" width={anchoPanel} height="30" fill="none" stroke="red" strokeWidth="2"/>
                //     <rect x="60" y="10" width="50" height="30" fill="none" stroke="red" strokeWidth="2"/>
                //     <rect x="110" y="10" width="50" height="30" fill="none" stroke="red" strokeWidth="2"/>
                //     <rect x="160" y="10" width="50" height="30" fill="none" stroke="red" strokeWidth="2"/>
                    
                //     <rect x="10" y="40" width="50" height="30" fill="none" stroke="red" strokeWidth="2"/>
                //     <rect x="60" y="40" width="50" height="30" fill="none" stroke="red" strokeWidth="2"/>
                //     <rect x="110" y="40" width="50" height="30" fill="none" stroke="red" strokeWidth="2"/>
                //     <rect x="160" y="40" width="50" height="30" fill="none" stroke="red" strokeWidth="2"/>
                    
                //     <rect x="10" y="70" width="50" height="30" fill="none" stroke="red" strokeWidth="2"/>
                //     <rect x="60" y="70" width="50" height="30" fill="none" stroke="red" strokeWidth="2"/>
                //     <rect x="110" y="70" width="50" height="30" fill="none" stroke="red" strokeWidth="2"/>
                //     <rect x="160" y="70" width="50" height="30" fill="none" stroke="red" strokeWidth="2"/>
                // </svg>

                }

                </div>
        </form>
        :
        <ErrorMessagePage message={errorMsg} onClose={onClose}/>
    }
    </>
  );
}