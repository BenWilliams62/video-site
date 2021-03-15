import Link from 'next/link';

export default function PreviewCard(props){

    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    return(
        <Link href={`videos/${props.video.url}`}>
            <a className="preview-card rounded">
                <div className="preview-image">
                    <img src={props.video.img} alt="video thumbnail" />
                </div>
                <div className="blur-overlay"></div>

                <div className="preview-overlay">
                    
                    <div className="preview-text">
                        <h2>{props.video.title}</h2>
                        <p>{props.video.text.substring(0,50)}</p>
                        <br />
                        <small>{props.video.views} views</small>
                    </div>
                    
                </div>

                

            </a>
        </Link>
    )
}