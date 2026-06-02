function Header({children,name}){
    return(
        <>
            <h1>Header is ok but {children} </h1>
            <h1>Header is ok but {name} </h1>
        </>
        
    )
}

export default Header;