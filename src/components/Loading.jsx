import React from 'react';

const Loading = () => {
    return ( 
    <div style = {{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}> 
        <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-border text-secondary" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>

    </div> );
}
export default Loading;