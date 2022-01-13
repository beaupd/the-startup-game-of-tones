const DefaultLayout = ({children}) => {
    return (
        <>
            <main>
                {children}
            </main>

            <nav>
                navigation
            </nav>
        </>
    )
}

export default DefaultLayout