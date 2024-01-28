
import React, { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import styles from "./style.module.css";

function App() {
    const [jobs, setJobs] = useState([]);
    const [value, setValue] = useState(0);
    const [loading, setLoading] = useState(true);
  
    const fetchData = () => {
      fetch("https://course-api.com/react-tabs-project")
        .then((res) => res.json())
        .then((data) => {
          setJobs(data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
        });
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    if (loading) {
      return (
        <section className={styles.loading}>
          <h1>Loading...</h1>
        </section>
      );
    }
  
    const { company, dates, duties, title } = jobs[value];
  
      return (
        <section className={styles.section}>
          <div className={styles.title}>
           <h2>Experience</h2>
           <div className={styles.underline}></div>
         </div>
          <div className={styles.jobcenter}>
            <div className={styles.btncontainer}>
              {jobs.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setValue(index)}
                  className={`${styles.jobbtn} ${
                    index === value && styles.activebtn
                  }`}
                >
                  {item.company}
                </button>
              ))}
            </div>
            <article className={styles.jobinfo}>
              <h3>{title}</h3>
              <h4>{company}</h4>
              <p className={styles.jobdate}>{dates}</p>
              {duties.map((duty, index) => (
                <div key={index} className={styles.jobdesc}>
                  <FaAngleRight className={styles.jobicon} />
                  <p>{duty}</p>
                </div>
              ))}
            </article>
          </div>
        </section>
      );
    };

export default App;
