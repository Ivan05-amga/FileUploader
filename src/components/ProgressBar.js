import "../styles/progressbar.scss"

export function ProgressBar({progress}) {
    return (    
            <div className="porgress-content">
                <h1>Uploading...</h1>
                <div className="progress">
                    <div className="progress-done"
                        style={{marginLeft: `${progress}%`}}
                    >
                    </div>
                </div>
            </div>
    )
}