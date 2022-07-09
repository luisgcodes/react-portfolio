import Navigation from "../Navigation";

// Header
const Header = (props) => {
  return (
    <header>

      <div className="header-block">

        <div className="dev-name">Luis Gutierrez</div>
        <div className="subhead">Front-End Developer</div>

      </div>

      <Navigation currentPage={props.currentPage} handlePageChange={props.handlePageChange}/>
      
    </header>
  )
}

export default Header;