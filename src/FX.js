import{ DepthOfField, 
    EffectComposer, 
    Vignette,
    BrightnessContrast,
    Scanline, 
    Grid,
    Noise,
    
    } from "@react-three/postprocessing"

import { BlendFunction } from 'postprocessing'

export default function FX(){

return(

    <EffectComposer>
        
        <DepthOfField
                focusDistance={0}
                focalLength={0.02}
                bokehScale={0.5}
            />

        <Vignette
            offset={0.5} // vignette offset
            darkness={0.5} // vignette darkness
            eskil={false} // Eskil's vignette technique
            blendFunction={BlendFunction.NORMAL} // blend mode
        />

        <BrightnessContrast
        brightness={0} // brightness. min: -1, max: 1
        contrast={0.1} // contrast: min -1, max: 1
        />

   

  

  
  


    </EffectComposer>
    
);
}
