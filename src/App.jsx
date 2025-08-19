import React, { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";

const sections = {
  en: [
    {
      id: "home",
      title: "Home",
      content: "Welcome to Basalt Villas Saguramo!",
    },
    {
      id: "properties",
      title: "Properties",
      content: "Discover our premium villa collection",
      properties: [
        {
          id: 1,
          name: "Villa Serenity",
          price: "$2,500/month",
          description: "Luxury 3-bedroom villa with mountain views",
          image: "./src/assets/villa1.png",
          details: {
            bedrooms: 3,
            bathrooms: 2,
            area: "180 sqm",
            location: "Tbilisi Hills",
            features: [
              "Mountain View",
              "Garden",
              "Parking",
              "Fireplace",
              "Modern Kitchen",
            ],
          },
        },
        {
          id: 2,
          name: "Villa Harmony",
          price: "$3,200/month",
          description: "Modern 4-bedroom villa with pool access",
          image: "./src/assets/villa2.png",
          details: {
            bedrooms: 4,
            bathrooms: 3,
            area: "220 sqm",
            location: "Vake District",
            features: [
              "Swimming Pool",
              "Terrace",
              "Wine Cellar",
              "Smart Home",
              "Gym Room",
            ],
          },
        },
        {
          id: 3,
          name: "Villa Tranquility",
          price: "$2,800/month",
          description: "Cozy 2-bedroom villa with private garden",
          image: "./src/assets/villa3.png",
          details: {
            bedrooms: 2,
            bathrooms: 2,
            area: "150 sqm",
            location: "Saburtalo",
            features: [
              "Private Garden",
              "Balcony",
              "Storage Room",
              "Pet Friendly",
              "Quiet Area",
            ],
          },
        },
      ],
    },
    {
      id: "faqs",
      title: "FAQs",
      content: "Frequently asked questions and answers.",
      faqs: [
        {
          id: 1,
          question: "What types of villas do you have available?",
          answer:
            "We offer a diverse portfolio of luxury villas ranging from modern contemporary designs to traditional Georgian architecture. Our properties include 3-6 bedroom villas with private pools, gardens, and stunning mountain or city views. All villas come with premium finishes and modern amenities.",
        },
        {
          id: 2,
          question: "What is the price range for your villas?",
          answer:
            "Our villa prices range from $250,000 to $1,500,000 depending on location, size, and amenities. We offer flexible payment plans and can arrange financing options. Each property is competitively priced based on current market conditions and includes detailed cost breakdowns.",
        },
        {
          id: 3,
          question: "Do you provide free property consultations?",
          answer:
            "Yes! We provide completely free, no-obligation property consultations and site visits. Simply contact us at +995 574 13 55 84 or through our website, and we'll schedule a convenient time to show you our available villas and discuss your specific requirements.",
        },
      ],
    },
    {
      id: "location",
      title: "Location",
      content: "Saguramo, Georgia.",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.2790311955773!2d44.778010099999996!3d41.908359999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446757326c6a87%3A0x4ab957b76e5bbde0!2zU2FndXJhbW8gQmFzYWx0IFZpbGxhcyDigKIg4YOh4YOQ4YOS4YOj4YOg4YOQ4YOb4YOd4YOhIOGDkeGDkOGDluGDkOGDmuGDouGDmOGDoSDhg5Xhg5jhg5rhg5Thg5Hhg5g!5e0!3m2!1sen!2sge!4v1755638997800!5m2!1sen!2sge",
    },
    {
      id: "contact",
      title: "Contact",
      socials: {
        facebook: "https://www.facebook.com/SaguramoBasaltVillas",
        instagram: "https://www.instagram.com/saguramo.basalt.villas/",
      },
    },
  ],
  ka: [
    {
      id: "home",
      title: "მთავარი",
      content:
        "საუკეთესო თერმოიზოლაციური თვისებების მქონე ბაზალტის ქვისგან ნაშენი მონოლითური სახლები. თქვენი საუკეთესო არჩევანი.",
    },
    {
      id: "properties",
      title: "ქონება",
      content: "აღმოაჩინეთ ჩვენი პრემიუმ ვილების კოლექცია",
      properties: [
        {
          id: 1,
          name: "ვილა სერენიტი",
          price: "$2,500/თვე",
          description: "ლუქსუს 3-ოთახიანი ვილა მთის ხედებით",
          image: "./src/assets/villa1.png",
          details: {
            bedrooms: 3,
            bathrooms: 2,
            area: "180 კვმ",
            location: "თბილისის ბორცვები",
            features: [
              "მთის ხედი",
              "ბაღი",
              "პარკინგი",
              "ბუხარი",
              "თანამედროვე სამზარეულო",
            ],
          },
        },
        {
          id: 2,
          name: "ვილა ჰარმონია",
          price: "$3,200/თვე",
          description: "თანამედროვე 4-ოთახიანი ვილა აუზის წვდომით",
          image: "./src/assets/villa2.png",
          details: {
            bedrooms: 4,
            bathrooms: 3,
            area: "220 კვმ",
            location: "ვაკის რაიონი",
            features: [
              "საცურაო აუზი",
              "ტერასა",
              "ღვინის მარანი",
              "სმარტ სახლი",
              "სპორტდარბაზი",
            ],
          },
        },
        {
          id: 3,
          name: "ვილა სიწყნარე",
          price: "$2,800/თვე",
          description: "მყუდრო 2-ოთახიანი ვილა პირადი ბაღით",
          image: "./src/assets/villa3.png",
          details: {
            bedrooms: 2,
            bathrooms: 2,
            area: "150 კვმ",
            location: "საბურთალო",
            features: [
              "პირადი ბაღი",
              "აივანი",
              "საცავი ოთახი",
              "შინაური ცხოველების მეგობრული",
              "წყნარი ადგილი",
            ],
          },
        },
      ],
    },
    {
      id: "faqs",
      title: "ხშირი კითხვები",
      content: "ხშირად დასმული კითხვები და პასუხები.",
      faqs: [
        {
          id: 1,
          question: "რა ტიპის ვილები გაქვთ ხელმისაწვდომი?",
          answer:
            "ჩვენ ვთავაზობთ ლუქსუსური ვილების მრავალფეროვან პორტფელს, თანამედროვე დიზაინიდან დაწყებული ტრადიციული ქართული არქიტექტურით დამთავრებული. ჩვენი უძრავი ქონება მოიცავს 3-6 საძინებლიანი ვილებს კერძო აუზებით, ბაღებითა და მთისა თუ ქალაქის ულამაზესი ხედებით.",
        },
        {
          id: 2,
          question: "რა ფასების დიაპაზონშია თქვენი ვილები?",
          answer:
            "ჩვენი ვილების ფასები მერყეობს $250,000-დან $1,500,000-მდე, რაც დამოკიდებულია მდებარეობაზე, ზომასა და საყოფაცხოვრებო პირობებზე. ჩვენ ვთავაზობთ მოქნილ გადახდის გეგმებს და შეგვიძლია დავაფინანსებით უზრუნველყოფა. ყოველი ქონება კონკურენტუნარიანადაა ფასდადებული.",
        },
        {
          id: 3,
          question: "აძლევთ უფასო ქონების კონსულტაციას?",
          answer:
            "დიახ! ჩვენ ვაძლევთ სრულიად უფასო, ვალდებულების გარეშე ქონების კონსულტაციებს და საიტის ვიზიტებს. უბრალოდ დაგვიკავშირდით +995 574 13 55 84 ნომერზე ან ჩვენი ვებსაიტის მეშვეობით, და ჩვენ დავგეგმავთ მოსახერხებელ დროს.",
        },
      ],
    },
    {
      id: "location",
      title: "მდებარეობა",
      content: "საგურამო, საქართველო.",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.2790311955773!2d44.778010099999996!3d41.908359999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446757326c6a87%3A0x4ab957b76e5bbde0!2zU2FndXJhbW8gQmFzYWx0IFZpbGxhcyDigKIg4YOh4YOQ4YOS4YOj4YOg4YOQ4YOb4YOd4YOhIOGDkeGDkOGDluGDkOGDmuGDouGDmOGDoSDhg5Xhg5jhg5rhg5Thg5Hhg5g!5e0!3m2!1sen!2sge!4v1755638997800!5m2!1sen!2sge",
    },
    {
      id: "contact",
      title: "კონტაქტი",
      socials: {
        facebook: "https://www.facebook.com/SaguramoBasaltVillas",
        instagram: "https://www.instagram.com/saguramo.basalt.villas/",
      },
    },
  ],
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("ka");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const currentSections = sections[language];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close menu on nav click
    }
  };

  const toggleFaq = (faqId) => {
    setOpenFaq(openFaq === faqId ? null : faqId);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img
            src={logo}
            alt="ORVO LAWN CARE"
            style={{ height: "60px", width: "auto" }}
          />
        </div>

        <div className="nav-center">
          <div className={`nav-links ${menuOpen ? "show" : ""}`}>
            {currentSections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="nav-button"
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>

        <div className="language-switcher">
          <button
            className={`language-option ${language === "en" ? "active" : ""}`}
            onClick={() => setLanguage("en")}
          >
            ENG
          </button>
          <span className="language-separator">|</span>
          <button
            className={`language-option ${language === "ka" ? "active" : ""}`}
            onClick={() => setLanguage("ka")}
          >
            ქარ
          </button>
        </div>

        <div className="mobile-right">
          <div className="language-switcher">
            <button
              className={`language-option ${language === "en" ? "active" : ""}`}
              onClick={() => setLanguage("en")}
            >
              ENG
            </button>
            <span className="language-separator">|</span>
            <button
              className={`language-option ${language === "ka" ? "active" : ""}`}
              onClick={() => setLanguage("ka")}
            >
              ქარ
            </button>
          </div>

          <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </nav>

      <main>
        {currentSections.map((s) => (
          <section key={s.id} id={s.id} className={`section ${s.id}`}>
            <h2>{s.title}</h2>
            <p>{s.content}</p>

            {s.properties && (
              <div className="properties-grid">
                {s.properties.map((property) => (
                  <div
                    key={property.id}
                    className="property-card"
                    onClick={() => setSelectedProperty(property)}
                  >
                    <img
                      src={property.image}
                      alt={property.name}
                      className="property-image"
                    />
                    <div className="property-info">
                      <div className="property-name">{property.name}</div>
                      <div className="property-price">{property.price}</div>
                      <div className="property-description">
                        {property.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {s.faqs && (
              <div className="faqs-container">
                {s.faqs.map((faq) => (
                  <div key={faq.id} className="faq-item">
                    <button
                      className="faq-question"
                      onClick={() => toggleFaq(faq.id)}
                    >
                      <span>{faq.question}</span>
                      <span
                        className={`faq-icon ${
                          openFaq === faq.id ? "open" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`faq-answer ${
                        openFaq === faq.id ? "open" : ""
                      }`}
                    >
                      <div className="faq-answer-content">{faq.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {s.id === "location" && s.mapEmbed && (
              <div className="location-container">
                <iframe
                  src={s.mapEmbed}
                  className="map-embed"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Orvo Lawn Care Location"
                />
              </div>
            )}

            {s.socials && (
              <div>
                <div className="info-item">
                  <span className="info-icon">📞</span>
                  <span className="info-text">+995 574 13 55 84</span>
                </div>
                <div className="social-icons">
                  <a
                    href={s.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="Facebook"
                  >
                    ⓕ
                  </a>
                  <a
                    href={s.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="Instagram"
                  >
                    🅾
                  </a>
                </div>
              </div>
            )}
          </section>
        ))}

        {selectedProperty && (
          <div
            className="modal-overlay"
            onClick={() => setSelectedProperty(null)}
          >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <img
                  src={selectedProperty.image}
                  alt={selectedProperty.name}
                  className="modal-image"
                />
                <button
                  className="modal-close"
                  onClick={() => setSelectedProperty(null)}
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <h3 className="modal-title">{selectedProperty.name}</h3>
                <div className="modal-price">{selectedProperty.price}</div>
                <p className="modal-description">
                  {selectedProperty.description}
                </p>

                <div className="property-details">
                  <div className="detail-item">
                    <div className="detail-label">
                      {language === "en" ? "Bedrooms" : "საძინებელი"}
                    </div>
                    <div className="detail-value">
                      {selectedProperty.details.bedrooms}
                    </div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">
                      {language === "en" ? "Bathrooms" : "სააბაზანო"}
                    </div>
                    <div className="detail-value">
                      {selectedProperty.details.bathrooms}
                    </div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">
                      {language === "en" ? "Area" : "ფართი"}
                    </div>
                    <div className="detail-value">
                      {selectedProperty.details.area}
                    </div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">
                      {language === "en" ? "Location" : "მდებარეობა"}
                    </div>
                    <div className="detail-value">
                      {selectedProperty.details.location}
                    </div>
                  </div>
                </div>

                <div className="features-list">
                  {selectedProperty.details.features.map((feature, index) => (
                    <span key={index} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
