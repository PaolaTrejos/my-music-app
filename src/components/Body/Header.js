import { HeaderContainer, HeaderLeft, HeaderRight } from "./styles"
import SearchIcon from '@material-ui/icons/Search';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

const Header = () => {
  const user = useSelector(selectUser)
  return (
    <HeaderContainer>
        <HeaderLeft>
          <SearchIcon className="icon" />
          <input type="text" placeholder="Buscar artistas, canciones u otros"/>
        </HeaderLeft>
        <HeaderRight>
          <img src={ user?.images[0]?.url } alt={ user?.id } />
          <h4>{ user?.display_name}</h4>
        </HeaderRight>
    </HeaderContainer>
  )
}

export default Header