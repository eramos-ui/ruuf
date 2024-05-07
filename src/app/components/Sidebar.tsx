import Image from 'next/image';
import { MdOtherHouses } from "react-icons/md";
import { SidebarMenuItem } from './SidebarMenuItem';

const menuItems= [
  {
    path:'/dashboard/main', 
    svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
         </svg>,
    title:'Dashboard',
    subTitle:'Estado de procesos',
  },{
    path:'/dashboard/toDo', 
    svg:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
    </svg>,
    title:'Pendientes',
    subTitle:'Lista de tareas por hacer',
  },{
    path:'/dashboard/counterPanelRect', 
    svg: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect x="3" y="3" width="18" height="14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>,
    title:'Contador de paneles',
    subTitle:'Superficie rectangular',
  },{
    path:'/dashboard/counterPanelTri', 
    svg:<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6L2 20h20L12 6z" />
        </svg>,
    title:'Contador de paneles',
    subTitle:'Superficie triangular',
  },{
    path:'/dashboard/counterPanelTwoRect', 
    svg:<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 20" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="9" height="6" />
            <rect x="7" y="5" width="7" height="6" />
        </svg>,
    title:'Contador de paneles',
    subTitle:'Superficie de 2 rectángulos',
  },
]
export const Sidebar = () => {
  return (
      <div id="menu" 
        style={{width: '430px'}}
        className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll">

            <div id="logo" className="my-4 px-6">
            <h1 className="flex text-lg md:text-2xl font-bold text-white">
                <MdOtherHouses className='mr-2' />
                <span>Ruuf</span>
            </h1>
            <p className="text-slate-500 text-sm">Administración de ventas</p>
            </div>
            <div id="profile" className="px-6 py-10">
            <p className="text-slate-500">Bienvenido,</p>
            <a href="#" className="inline-flex space-x-2 items-center">
                <span>
                    <Image className="rounded-full w-8 h-8" 
                        src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c" 
                        alt="User avatar" width={50} height={50} 
                    />
                </span>
                <span className="text-sm md:text-base font-bold">
                    Erich Ramos
                </span>
                </a>
            </div>
            <div id="nav" className="w-full px-6">
            {
               menuItems.map(item => (
                   <SidebarMenuItem 
                    key={item.path } 
                    {...item} 
                   />
               )) 
            }
            </div>
 </div>
  )
}


