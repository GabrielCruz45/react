function AlertButton({message, children}){
    return(
        <button className="alert-button" onClick={() => {alert(message)}}>
            {children}
        </button>
    );
};

export default function Toolbar(){
    return(
        <div>
            <AlertButton message="Playing!">
                Play Movie
            </AlertButton>
            <AlertButton message="Uploading">
                Upload
            </AlertButton>
        </div>
    );
};