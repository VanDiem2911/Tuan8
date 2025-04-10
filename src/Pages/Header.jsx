import "../css/Header.css"

function Header(){
    return(
        <>
        <div className='header'>
                    <div className='dashboard'>
                        <h3>Dashboard</h3>
                    </div>
                    <div className='search'>
                        <input type="text" name="" id="" placeholder='Search' />
                    </div>
                    <div className='profile'>
                        <img src="/bell.png" alt="" />
                        <img src="/Question 1.png" alt="" />
                        <img src="/Avatar (1).png" alt="" />
                    </div>
                </div>
        </>
    )
}
export default Header;