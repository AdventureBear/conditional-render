
const Home = ({showHome, setShowHome, setShowAbout}) => {
    if (!showHome) return null

    return (
        <>
        <div>Home</div>
        <button
            onClick={()=>{
                setShowHome(false)
                setShowAbout(true)
            }}
        >Close </button>
        </>
    )

}
export default Home
