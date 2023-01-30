import NavBar from './NavBar';

// This component known as a CONTROLLED COMPONENT
function Home (props){
   

    return (
        <>
          <NavBar user = {props.user}/>
        </>
    );
}

export default Home;