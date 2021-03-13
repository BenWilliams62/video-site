import Link from 'next/link';

export default function PreviewCard(props){

    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    return(
        <Link href="/view">
            <a className="preview-card rounded">
                <div className="preview-image">
                    <img src={props.img} alt="video thumbnail" />
                </div>

                <div className="preview-overlay">
                    <div class="preview-text">
                        <h2>{props.title}</h2>
                        <p>{props.text.substring(0,50)}</p>
                        <br />
                        <small>{props.views} views</small>
                    </div>
                    
                </div>

                

            </a>
        </Link>
    )
}