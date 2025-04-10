import "../css/Menu.css"

function Menu() {
    return (
        <>
            <div className='root'>
                <div className='logo'>
                    <img src="/Image 1858.png" alt="" id='logo' />
                </div>
                <div className='menu'>
                    <a href="">
                        <div className='menuItems'>
                            <img src="/Squares four 1.png" alt="" id='menuLogo' />
                            <p>Dashboard</p>
                        </div>
                    </a>
                    <a href="">
                        <div className='menuItems'>
                            <img src="/Folder.png" alt="" id='menuLogo' />
                            <p>Projects</p>
                        </div>
                    </a>
                    <a href="">
                        <div className='menuItems'>
                            <img src="/Groups.png" alt="" id='menuLogo' />
                            <p>Teams</p>
                        </div>
                    </a>
                    <a href="">
                        <div className='menuItems'>
                            <img src="/Pie chart.png" alt="" id='menuLogo' />
                            <p>Analytics</p>
                        </div>
                    </a>
                    <a href="">
                        <div className='menuItems'>
                            <img src="/Chat.png" alt="" id='menuLogo' />
                            <p>Messenger</p>
                        </div>
                    </a>
                    <a href="">
                        <div className='menuItems'>
                            <img src="/Code.png" alt="" id='menuLogo' />
                            <p>Integrations</p>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}
export default Menu;