// Выводит баннер

const Banner = (props) => {
    const { src, alt } = props;
    
    return (
        <div className='Banner-container'>
          <img className='Banner-img' src={src} alt={alt} />
        </div>
      );
};

export default Banner;