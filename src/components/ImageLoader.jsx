import React, {useState} from 'react'

export default function ImageLoader({poster, alt}) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isValidSrc, setIsValidSrc] = useState(!!poster);
    return (
        <>
            {
                isValidSrc ? (
                    <img
                        className={
                            `smooth-image 
                    image-${imageLoaded ? 'visible' : 'hidden'}`
                        }
                        src={poster}
                        alt={alt}
                        onLoad={() => setImageLoaded(true)}
                        onError={() => setIsValidSrc(false)}
                    />
                ) : (
                        <div className="smooth-no-image">IMAGE NOT FOUND</div>
                    )
            }
        </>
    )
}
