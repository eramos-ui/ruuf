'use client';
import { calcularNumeroDeRectangulosYMaximizacion } from '@/app/utils/calculaRect';
import { useState } from 'react';
import ErrorMessagePage from './ErrorMessage';
import { DiagramRectPage } from './DiagramaRect';

export const  CardCounterRectPage= ()=> {
  const [ enabledButton, setEnabledButton ] = useState<boolean>(false);    
  const [ error, setError ]                 = useState<boolean>(false);  
  const [ errorMsg, setErrorMsg ]           = useState<string>('');         
  const [ nroPanel, setNroPanel ]           = useState<any>();
  const [ anchoTecho, setAnchoTecho ]       = useState<number>(0);
  const [ altoTecho, setAltoTecho ]         = useState<number>(0);
  const [ anchoPanel, setAnchoPanel ]       = useState<number>(0);
  const [ altoPanel, setAltoPanel ]         = useState<number>(0);
  const calculPanel= async () => {
      if (anchoTecho <= 0 || altoTecho <= 0 || anchoPanel <= 0 || altoPanel <= 0 ){
          let msgError='';
          if ( anchoTecho <= 0 ) msgError='No ha definido el ancho del techo'; 
          if (altoTecho <= 0) {
              msgError=  msgError +(( msgError.length>0)?', ':'') +'No ha definido el alto del techo'
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
        setNroPanel(calcularNumeroDeRectangulosYMaximizacion(anchoTecho, altoTecho, anchoPanel, altoPanel));
  }
  const onChangeAnchoTecho=(e:any) =>{
    setAnchoTecho(Number(e.target.value));
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
                    Ingrese el tamaño del techo rectangular
                </p>
                <div className="relative h-11 w-full min-w-[200px]">
                    <input
                    className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    type='number'
                    value={ anchoTecho}
                    onChange={onChangeAnchoTecho }
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Ancho del techo en metros (lado mayor)
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
                    Alto del techo en metros (lado menor)
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
                    value={ anchoPanel }
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
                <DiagramRectPage anchoTecho={ anchoTecho } altoTecho={ altoTecho } anchoPanel={anchoPanel} altoPanel= { altoPanel } resultado={ nroPanel } />
                }
                </div>
        </form>
        :
        <ErrorMessagePage message={errorMsg} onClose={onClose}/>
    }
    </>
  );
}