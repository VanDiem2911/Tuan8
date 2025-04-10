import "../css/DetailedReport.css"

function DetailedReport() {
    const user = [
        { name: "Elizabeth Lee", compyny: "AvatarSystems", orderValue: "$359", orderDate: "10/7/2023", status: "new", img: "/Avatar.png" },
        { name: "Elizabeth Lee", compyny: "AvatarSystems", orderValue: "$359", orderDate: "10/7/2023", status: "new", img: "/Avatar.png" },
        { name: "Elizabeth Lee", compyny: "AvatarSystems", orderValue: "$359", orderDate: "10/7/2023", status: "new", img: "/Avatar.png" }
    ]
    return (
        <>
            <div className='tableData'>
                <div className='detail'>
                    <div className='detailReport'>
                        <img src="/File text 1.png" alt="" />
                        <h4>Detailed report</h4>
                    </div>

                    <div className='import'>
                        <img src="/Download.png" alt="" />
                        <p>Import</p>
                    </div>
                    <div className='import'>
                        <img src="/Move up.png" alt="" />
                        <p>Export</p>
                    </div>

                </div>
                <div className='table'>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    <input type="checkbox" name="" id="inp1" />
                                </th>
                                <th>
                                    CUSTOMER NAME
                                </th>
                                <th>COMPANY</th>
                                <th>ORDER VALUE</th>
                                <th>ORDER DATE</th>
                                <th>STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map((u, index) => (
                                <tr key={index}>
                                    <td>
                                        <input type="checkbox" id="inp1" />
                                    </td>
                                    <td>
                                        <img
                                            src={u.img}
                                            alt={u.name}
                                            style={{ width: "30px", height: "30px", borderRadius: "50%", marginRight: "8px" }}
                                        />
                                        {u.name}
                                    </td>
                                    <td>{u.compyny}</td>
                                    <td>{u.orderValue}</td>
                                    <td>{u.orderDate}</td>
                                    <td>{u.status}</td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>
        </>
    )
}
export default DetailedReport;