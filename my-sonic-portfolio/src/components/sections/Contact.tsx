import React, { useState } from "react";
import styles from "./Contact.module.css";
import sharedStyles from "../shared-styling/SharedStyles.module.css";
import animStyles from "../shared-styling/SonicAnimations.module.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaCloud,
} from "react-icons/fa";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    message: string;
    isError: boolean;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "aeb99592-fa52-4d58-91c9-afecddaafe92",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus({
          message: "Message sent successfully! I'll get back to you soon.",
          isError: false,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus({
          message: "Something went wrong. Please try again.",
          isError: true,
        });
      }
    } catch (error) {
      setFormStatus({
        message: "Something went wrong. Please try again.",
        isError: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={sharedStyles.sectionBackground}>
      {/* Sonic Rings Decoration */}
      <div className={`${animStyles.ring} ${animStyles.ring1}`}></div>
      <div className={`${animStyles.ring} ${animStyles.ring2}`}></div>
      <div className={`${animStyles.ring} ${animStyles.ring3}`}></div>

      {/* Chaos Emerald */}
      <div className={`${animStyles.emerald} ${styles.rightEmerald}`}></div>

      <div className={styles.contactContainer}>
        <h2>Contact Me</h2>

        <div className={styles.contactContent}>
          <div className={styles.contactLeft}>
            <div className={styles.contactInfo}>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <FaEnvelope />
                </div>
                <div className={styles.infoDetails}>
                  <h3>Email</h3>
                  <p>
                    <a
                      href="mailto:peter.gustafsson910@gmail.com"
                      className={styles.emailLink}
                    >
                      peter.gustafsson910@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <FaPhone />
                </div>
                <div className={styles.infoDetails}>
                  <h3>Phone</h3>
                  <p>+46 73-xxx xx xx</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <FaMapMarkerAlt />
                </div>
                <div className={styles.infoDetails}>
                  <h3>Location</h3>
                  <p>Bjuv, Sweden</p>
                </div>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <h3>Connect With Me</h3>
              <div className={styles.socialIcons}>
                <a
                  href="https://github.com/Sweodin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  title="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/peter-gustafsson-3206a8108"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  title="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://twitter.com/@pg85developer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  title="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com/peter_gus85/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  title="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://bsky.app/profile/sweodin.bsky.social"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  title="Bluesky"
                >
                  <FaCloud />
                </a>
              </div>
            </div>
          </div>

          <div className={styles.contactRight}>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className={styles.formInput}
                />
                <span className={styles.inputGlow}></span>
              </div>

              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className={styles.formInput}
                />
                <span className={styles.inputGlow}></span>
              </div>

              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className={styles.formInput}
                  rows={4}
                />
                <span className={styles.inputGlow}></span>
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className={styles.spinner}></span>
                ) : (
                  "Send Message"
                )}
                <span className={styles.btnRing}></span>
              </button>

              {formStatus && (
                <div
                  className={`${styles.formResult} ${
                    formStatus.isError ? styles.error : styles.success
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
