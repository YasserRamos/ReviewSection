import { useState } from "react";
import '../assets/ReviewClass.css'
import '../assets/ReviewGlobalClass.css'

function Review() {
    const user = "ARISULED";
    const [like, setlike] = useState(false);
    const [dislike, setDislike] = useState(false);
    const colorlike = like ? "#00abfb" : "#fff";
    const colorDislike = dislike ? "#fd0061" : "#fff";

    const handleLike = () => {
        if (dislike) return;
    setlike(!like);
};


const handleDislike = () => {
    if (like) return;
    setDislike(!dislike);
};

return (
    <main className="mainCard">
        <div className="card">
        <header className="header">
            <div className="user">
            <img src={`https://unavatar.io/youtube/${user}`} alt={user} />
            <div className="userName">
                <span className="nameUser">{user}</span>
                <span className="timeUser">hace 2 minutos</span>
            </div>
            </div>
            <span>
            <img 
            className="trashImg"
            src="../public/img/borrar.png" 
            alt="borrar"
            />
            </span>
        </header>
        <div className="parrafo">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, incidunt temporibus. 
            Rem, sed? Recusandae consequuntur maiores saepe excepturi, id magni quod quibusdam error 
            qui ad rem perspiciatis! Quo, nobis officiis.
        </div>
        <footer>
            <button onClick={handleLike}>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                x-bind:width="size" 
                x-bind:height="size" 
                viewBox="0 0 24 24" 
                fill="none" 
                width="24" 
                height="24" 
                strokeWidth="2" 
                strokeLinejoin="round" 
                strokeLinecap="round" 
                x-bind:stroke-width="stroke" 
                stroke={colorlike}
            >
                <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"></path>
            </svg>
            </button>

            <button onClick={handleDislike}>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                x-bind:width="size" x-bind:height="size" 
                viewBox="0 0 24 24" fill="none" 
                stroke={colorDislike} 
                x-bind:stroke-width="stroke" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                width="24" height="24" 
                strokeWidth="2"
            >
                <path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3"></path>
            </svg>
            </button>
            </footer>
        </div>
    </main>
);
}

export default Review;