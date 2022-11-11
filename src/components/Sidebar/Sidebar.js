import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import AddBoxIcon from '@material-ui/icons/AddBox'
import SidebarChoice from './SidebarChoice'
import { Playlist, SidebarContainer } from "./styles"



const Sidebar = () => {
  return (
    <SidebarContainer>
        <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="Logo de Spotify"/>
        <SidebarChoice title="Inicio" Icon={HomeIcon}/>
        <SidebarChoice title="Buscar" Icon={SearchIcon}/>
        <SidebarChoice title="Biblioteca" Icon={LibraryMusicIcon}/>
        <Playlist>LISTAS DE REPRODUCCIÓN</Playlist>
        <hr/>
        <SidebarChoice title="Musica Chill"/>
        <SidebarChoice title="Heavy Metal"/>
        <SidebarChoice title="Crear lista" Icon={AddBoxIcon}/>

    </SidebarContainer>
    
  )
}

export default Sidebar