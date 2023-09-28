//CSS File
import '../filter/filter.css';

const Rating = ({ rating, onClick }) => {

    return (

        <div className="rating">

            <label className="form-check-label rating" htmlFor="flexCheckDefault">
                Ratings:
            </label>

            {[...Array(5)].map((_, i) => (

                <div key={i} onClick={() => onClick(i)}>

                    {rating > i ? (
                        <i className='bi bi-star-fill active' />
                    ) : (
                        <i className='bi bi-star notActive' />
                    )}

                </div>

            ))}

        </div>

    )

}

export default Rating;