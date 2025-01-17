import SidebarMenu from "./SidebarMenu"

export default function Sidebar(){
  return(
    <nav className="w-1/6 bg-black h-full px-4 py-10">
        <div className="flex flex-col text-white">
          <h1 className="text-xl font-semibold mb-12">SISWA & GURU</h1>
          <SidebarMenu/>
        </div>
    </nav>
  )
}