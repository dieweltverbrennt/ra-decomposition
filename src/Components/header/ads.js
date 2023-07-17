// Выводит рекламу

const Ads = ({ title, description, children }) => {
    return (
        <div className="Ads">
          {children}
          <h3 className="Ads-title">
            <a href="#0" className="Ads-title__link">
              {title}
            </a>
          </h3>
          <p className="Ads-description">
            {description}
          </p>
        </div>
      );
};

export default Ads;