
// React Bootstrap
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

// List Data
import people from "../utils/slider/slider";
import { useEffect, useState } from "react";
import UserComp from "../components/Slider/UserComp";

const Slider = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [list] = useState(people);

  const userData = list[currentIdx];

  const handleSlider = (type = "right") => {
    if (type === "left") {
      switch (currentIdx) {
        case 0:
          setCurrentIdx(list.length - 1);
          break;
        default:
          setCurrentIdx(prev => prev - 1);
          break;
      }
    }
    if (type === "right") {
      switch (currentIdx) {
        case list.length - 1:
          setCurrentIdx(0);
          break;
        default:
          setCurrentIdx(prev => prev + 1);
          break;
      }

    }
  }

  useEffect(() => {
    let timeout = setInterval(() => {
      handleSlider();
    }, 3000);

    return () => {
      clearInterval(timeout);
    }
  }, [currentIdx])

  return (
    <Container className="text-center" >
      <h1>Slider</h1>
      <UserComp  {...userData} />
      <Button onClick={() => handleSlider("left")} >👈🏻</Button>
      <Button onClick={() => handleSlider("right")} >👉🏻</Button>
    </Container>
  )
}

export default Slider