import { useContext, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import ParticlesConfig from "./ParticlesConfig";
import { Context } from "../Context/Context";

const ParticlesAnimation = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = () => {};
  const { isDark } = useContext(Context);
  return (
    <div>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={ParticlesConfig(isDark)}
        />
      )}
    </div>
  );
};

export default ParticlesAnimation;
