import { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import getWorks from "../works";

const SingleWork = () => {
  const history = useHistory();
  const currentURL = history.location.pathname;
  const [works, setWorks] = useState(getWorks());
  const [work, setWork] = useState({});

  /**
   * UseEffect which runs when component mounts;
   * run every time that `works` or `currentURL` updates
   */
  useEffect(() => {
    const currentWork = works.find((work) => work.url === currentURL) ?? {};
    setWork(currentWork);
    console.log(`work: ${work}`);
  }, [works, work, currentURL]);

  return (
    <div>
      <h2>
        {work.title}
      </h2>
      <img src={work.image} alt={work.imageAlt} />
    </div>
  );
}

export default SingleWork;
