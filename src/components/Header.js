import Button from "./Button";

const Header = ({title,onShow,showAdd}) => {
    return ( 
        <header className="header">
            <h1>{title}</h1>
        <Button color={showAdd ? 'red':'green'} text={showAdd ? 'close' : 'add'} onClick={onShow}/>
        </header>
     );
}

Header.defaultProps = {
    title: "Task Tracker"
}
 
export default Header;