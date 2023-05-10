import "./HomeStyles.css";

function HomePage() {
  return (
    <div className="homepage-content">
      <h1>Welcome to Truehandyman</h1>
      <p>
        Truehandyman is a trusted and professional handyman and bespoke carpentry
        service provider, serving clients in Bexley and the surrounding areas. As
        a skilled and experienced professional, I take great pride in delivering
        exceptional quality services to my clients, and always strive to provide
        tailored solutions that meet their unique needs.
      </p>

      <p>
        I offer a wide range of services, including carpentry and joinery,
        tiling and grouting, general handyman tasks, flat pack furniture
        building, fitting shelving and storage, garden decking and planters, and
        mounting TV brackets, among others. Whatever your requirements may be, I
        am committed to delivering outstanding workmanship that exceeds your
        expectations.
      </p>

      <p>
        At Truehandyman, I believe in offering a hassle-free experience to my
        clients. That's why I provide a free, no-obligation quote for all my
        services, and work closely with you to ensure that every project is
        completed to your satisfaction. With a focus on excellence,
        professionalism, and customer satisfaction, you can trust me to deliver
        the best possible results for your home or business.
      </p>

      <p>
        If you're interested in seeing the quality of my work, I invite you to
        check out my Projects page, where you can browse through photos of my
        previous projects. You can also head over to the Reviews page to read
        feedback from some of my satisfied customers and get a sense of the level
        of service I provide. I take pride in my work and am confident that you'll
        be impressed with what you see.
      </p>

      <p>
        Please visit the Contact page to get in touch for a free, no-obligation
        quote.
      </p>

      <p>Some of the services offered:</p>
      <ul>
        <li>Carpentry and joinery</li>
        <li>Tiling and grouting</li>
        <li>General handyman tasks</li>
        <li>Flat pack furniture building</li>
        <li>Fitting shelving and storage</li>
        <li>Garden decking/planters</li>
        <li>Mounting TV brackets</li>
      </ul>
      <div className="facebook">
        <a
          href="https://www.facebook.com/Handytrue"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://www.freeiconspng.com/thumbs/facebook-logo-png/facebook-logo-4.png"
            alt="Follow me on Facebook"
          />
        </a> 
        <a
          href="https://www.facebook.com/Handytrue"
          target="_blank"
          rel="noopener noreferrer"
        ><p>Find me on Facebook!</p></a>
      </div>

    </div>

    
  );
}

export default HomePage;